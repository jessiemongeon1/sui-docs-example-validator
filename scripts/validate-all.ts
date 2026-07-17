// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 * Validates all discovered packages and produces a detailed report.
 *
 * Two validation modes:
 *   --mode strict   (default) Validate examples as-authored. No patching.
 *                   Build failures are real failures.
 *   --mode compat   Patch known issues (missing deps, legacy editions) before
 *                   building. Useful for probing SDK compatibility.
 *
 * Usage:
 *   tsx scripts/validate-all.ts --sui-repo <path> --manifest <path> [--output <path>] [--mode strict|compat]
 */

import { execSync } from "child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";

// --- Types ---

interface PackageEntry {
  id: string;
  type: "move" | "rust" | "typescript" | "static" | "unknown";
  source: "internal" | "external";
  org?: string;
  repo?: string;
  branch?: string;
  packageRoot: string;
  files: string[];
  referencedBy: string[];
}

interface StepResult {
  command: string;
  status: "pass" | "fail" | "skip";
  output: string;
  durationMs: number;
}

interface PackageVersionInfo {
  edition?: string;
  dependencies?: Record<string, string>;
  packageManager?: string;
}

interface ValidationResult {
  id: string;
  type: string;
  source: "internal" | "external";
  origin: string;
  packageRoot: string;
  files: string[];
  referencedBy: string[];
  steps: StepResult[];
  overallStatus: "pass" | "fail" | "skip";
  failureReason?: string;
  versionInfo?: PackageVersionInfo;
  patched?: boolean; // true if the example was modified before building (compat mode)
}

interface ToolVersions {
  sui: string;
  mvr: string;
  node: string;
  npm: string;
  bun: string;
  rustc: string;
  cargo: string;
  pnpm: string;
}

type Mode = "strict" | "compat";

// --- CLI args ---

function parseArgs() {
  const args = process.argv.slice(2);
  let suiRepo = "";
  let manifest = "manifest/packages.json";
  let output = "report.md";
  let mode: Mode = "strict";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--sui-repo" && args[i + 1]) suiRepo = args[++i];
    if (args[i] === "--manifest" && args[i + 1]) manifest = args[++i];
    if (args[i] === "--output" && args[i + 1]) output = args[++i];
    if (args[i] === "--mode" && args[i + 1]) mode = args[++i] as Mode;
  }

  if (!suiRepo) {
    console.error("Usage: tsx scripts/validate-all.ts --sui-repo <path> --manifest <path> [--mode strict|compat]");
    process.exit(1);
  }

  return { suiRepo: resolve(suiRepo), manifest: resolve(manifest), output: resolve(output), mode };
}

// --- Helpers ---

const EXTENDED_PATH = `${process.env.HOME}/.local/bin:${process.env.PATH}`;

function getVersion(cmd: string): string {
  try {
    return execSync(cmd, {
      encoding: "utf-8",
      timeout: 10_000,
      stdio: ["pipe", "pipe", "pipe"],
      env: { ...process.env, PATH: EXTENDED_PATH },
    }).trim();
  } catch {
    return "not installed";
  }
}

function collectToolVersions(): ToolVersions {
  return {
    sui: getVersion("sui --version"),
    mvr: getVersion("mvr --version"),
    bun: getVersion("bun --version"),
    node: getVersion("node --version"),
    npm: getVersion("npm --version"),
    rustc: getVersion("rustc --version"),
    cargo: getVersion("cargo --version"),
    pnpm: getVersion("pnpm --version"),
  };
}

function run(cmd: string, cwd: string, timeoutMs = 300_000): { ok: boolean; output: string; durationMs: number } {
  const start = Date.now();
  try {
    const output = execSync(cmd, {
      cwd,
      timeout: timeoutMs,
      stdio: ["pipe", "pipe", "pipe"],
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
      env: { ...process.env, PATH: EXTENDED_PATH },
    });
    return { ok: true, output: output.slice(-3000), durationMs: Date.now() - start };
  } catch (err: any) {
    const stderr = err.stderr?.slice?.(-3000) || "";
    const stdout = err.stdout?.slice?.(-3000) || "";
    return { ok: false, output: `${stderr}\n${stdout}`.trim(), durationMs: Date.now() - start };
  }
}

function detectPackageManager(...roots: string[]): "pnpm" | "npm" {
  for (const root of roots) {
    if (existsSync(resolve(root, "pnpm-lock.yaml")) || existsSync(resolve(root, "pnpm-workspace.yaml"))) {
      return "pnpm";
    }
    const pkgPath = resolve(root, "package.json");
    if (existsSync(pkgPath)) {
      try {
        const content = readFileSync(pkgPath, "utf-8");
        if (content.includes('"workspace:')) return "pnpm";
      } catch {}
    }
  }
  return "npm";
}

// --- Repo allowlist ---

function loadAllowedRepos(): Set<string> {
  const config = JSON.parse(
    readFileSync(resolve(import.meta.dirname!, "../config/allowed-repos.json"), "utf-8"),
  );
  return new Set(config.allowed.map((r: { org: string; repo: string }) => `${r.org}/${r.repo}`));
}

// --- Clone external repos (cached) ---

const clonedRepos = new Map<string, string>();

function ensureExternalRepo(org: string, repo: string, branch: string, workDir: string): string {
  const key = `${org}/${repo}@${branch}`;
  if (clonedRepos.has(key)) return clonedRepos.get(key)!;

  const dest = resolve(workDir, `${org}--${repo}--${branch}`);
  if (!existsSync(dest)) {
    console.log(`    Cloning ${key}...`);
    const result = run(
      `git clone --depth 1 --branch ${branch} https://github.com/${org}/${repo}.git "${dest}"`,
      workDir,
      120_000,
    );
    if (!result.ok) {
      console.error(`    Failed to clone ${key}: ${result.output.slice(-200)}`);
      clonedRepos.set(key, "");
      return "";
    }
  }
  clonedRepos.set(key, dest);
  return dest;
}

// --- Extract package version info ---

function extractVersionInfo(absRoot: string, type: string): PackageVersionInfo {
  const info: PackageVersionInfo = {};

  if (type === "move") {
    const tomlPath = resolve(absRoot, "Move.toml");
    if (existsSync(tomlPath)) {
      const content = readFileSync(tomlPath, "utf-8");
      const editionMatch = content.match(/edition\s*=\s*"([^"]+)"/);
      if (editionMatch) info.edition = editionMatch[1];
      info.dependencies = {};
      const depSection = content.match(/\[dependencies\]([\s\S]*?)(?:\[|$)/);
      if (depSection) {
        for (const line of depSection[1].split("\n").filter((l) => l.includes("="))) {
          const nameMatch = line.match(/^(\w+)\s*=/);
          if (!nameMatch) continue;
          const name = nameMatch[1];
          const revMatch = line.match(/rev\s*=\s*"([^"]+)"/);
          const gitMatch = line.match(/git\s*=\s*"([^"]+)"/);
          const mvrMatch = line.match(/r\.mvr\s*=\s*"([^"]+)"/);
          if (mvrMatch) info.dependencies[name] = `mvr:${mvrMatch[1]}`;
          else if (revMatch) info.dependencies[name] = revMatch[1];
          else if (gitMatch) info.dependencies[name] = gitMatch[1].split("/").pop() || "git";
          else info.dependencies[name] = "local";
        }
      }
    }
  }

  if (type === "typescript") {
    const pkgPath = resolve(absRoot, "package.json");
    if (existsSync(pkgPath)) {
      try {
        const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
        info.dependencies = {};
        const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
        for (const key of Object.keys(allDeps)) {
          if (key.startsWith("@mysten/") || key.startsWith("@sui/") || key === "typescript") {
            info.dependencies[key] = allDeps[key];
          }
        }
        info.packageManager = existsSync(resolve(absRoot, "pnpm-lock.yaml")) ? "pnpm" : "npm";
      } catch {}
    }
  }

  if (type === "rust") {
    const cargoPath = resolve(absRoot, "Cargo.toml");
    if (existsSync(cargoPath)) {
      const content = readFileSync(cargoPath, "utf-8");
      info.dependencies = {};
      for (const line of content.split("\n")) {
        if (line.match(/^(sui[-_]|mysten)/i)) {
          const nameMatch = line.match(/^([\w-]+)\s*=/);
          if (nameMatch) {
            const branchMatch = line.match(/branch\s*=\s*"([^"]+)"/);
            const revMatch = line.match(/rev\s*=\s*"([^"]+)"/);
            info.dependencies[nameMatch[1]] = branchMatch?.[1] || revMatch?.[1] || "workspace";
          }
        }
      }
    }
  }

  return info;
}

// --- Resolve actual package root ---

function resolveActualPackageRoot(filePath: string, baseDir: string): { absRoot: string; type: PackageEntry["type"] } | null {
  const absFile = resolve(baseDir, filePath.replace(/^\/+/, ""));
  let dir = existsSync(absFile) ? dirname(absFile) : absFile;
  if (!existsSync(dir)) return null;
  const stopAt = resolve(baseDir);

  while (dir.length >= stopAt.length) {
    if (existsSync(resolve(dir, "Move.toml"))) return { absRoot: dir, type: "move" };
    if (existsSync(resolve(dir, "Cargo.toml"))) {
      const content = readFileSync(resolve(dir, "Cargo.toml"), "utf-8");
      if (!content.includes("[workspace]")) return { absRoot: dir, type: "rust" };
    }
    if (existsSync(resolve(dir, "package.json"))) return { absRoot: dir, type: "typescript" };
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

// --- Validators ---

function validateMove(absRoot: string, mode: Mode): { steps: StepResult[]; patched: boolean } {
  const steps: StepResult[] = [];
  let patched = false;

  if (!existsSync(resolve(absRoot, "Move.toml"))) {
    steps.push({ command: "check Move.toml exists", status: "fail", output: "Move.toml not found at " + absRoot, durationMs: 0 });
    return { steps, patched };
  }

  if (mode === "compat") {
    const moveToml = readFileSync(resolve(absRoot, "Move.toml"), "utf-8");
    if (!moveToml.includes("[dependencies]")) {
      writeFileSync(resolve(absRoot, "Move.toml"), moveToml + `\n[dependencies]\n`);
      steps.push({ command: "patch: inject [dependencies]", status: "pass", output: "Added empty [dependencies] (compat mode)", durationMs: 0 });
      patched = true;
    }
    const lockPath = resolve(absRoot, "Move.lock");
    if (existsSync(lockPath)) execSync(`rm -f "${lockPath}"`);
    const updated = readFileSync(resolve(absRoot, "Move.toml"), "utf-8");
    if (updated.includes('edition = "2024.beta"')) {
      writeFileSync(resolve(absRoot, "Move.toml"), updated.replace('edition = "2024.beta"', 'edition = "2024"'));
      steps.push({ command: "patch: fix edition", status: "pass", output: 'Changed edition 2024.beta → 2024 (compat mode)', durationMs: 0 });
      patched = true;
    }
  }

  const build = run("sui move build 2>&1", absRoot, 120_000);
  steps.push({ command: "sui move build", status: build.ok ? "pass" : "fail", output: build.output, durationMs: build.durationMs });

  return { steps, patched };
}

function validateRust(absRoot: string): { steps: StepResult[]; patched: boolean } {
  const steps: StepResult[] = [];

  if (!existsSync(resolve(absRoot, "Cargo.toml"))) {
    steps.push({ command: "check Cargo.toml exists", status: "fail", output: "Cargo.toml not found at " + absRoot, durationMs: 0 });
    return { steps, patched: false };
  }

  console.log(`      Running cargo check (timeout 300s)...`);
  const build = run("cargo check 2>&1", absRoot, 300_000);
  steps.push({ command: "cargo check", status: build.ok ? "pass" : "fail", output: build.output, durationMs: build.durationMs });

  return { steps, patched: false };
}

function findWorkspaceRoot(absRoot: string): string | null {
  let dir = absRoot;
  while (true) {
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
    if (existsSync(resolve(dir, "pnpm-workspace.yaml"))) return dir;
    if (existsSync(resolve(dir, "lerna.json"))) return dir;
    if (existsSync(resolve(dir, "package.json"))) {
      try {
        const pkg = JSON.parse(readFileSync(resolve(dir, "package.json"), "utf-8"));
        if (pkg.workspaces) return dir;
      } catch {}
    }
  }
  return null;
}

const installedWorkspaces = new Set<string>();

function validateTypeScript(absRoot: string, mode: Mode): { steps: StepResult[]; patched: boolean } {
  const steps: StepResult[] = [];
  let patched = false;

  // Resolve install root
  let installRoot = absRoot;
  if (!existsSync(resolve(absRoot, "package.json"))) {
    const wsRoot = findWorkspaceRoot(absRoot);
    if (wsRoot) {
      installRoot = wsRoot;
    } else {
      let dir = absRoot;
      let found = false;
      while (true) {
        const parent = dirname(dir);
        if (parent === dir) break;
        dir = parent;
        if (existsSync(resolve(dir, "package.json"))) { installRoot = dir; found = true; break; }
      }
      if (!found) {
        steps.push({ command: "check package.json exists", status: "fail", output: "No package.json found at or above " + absRoot, durationMs: 0 });
        return { steps, patched };
      }
    }
  }

  const wsRoot = findWorkspaceRoot(installRoot);
  const effectiveRoot = wsRoot || installRoot;
  const pm = detectPackageManager(effectiveRoot, absRoot, installRoot);

  // Install at workspace root (once)
  if (!installedWorkspaces.has(effectiveRoot)) {
    const installCmd = pm === "pnpm"
      ? "pnpm install --no-frozen-lockfile 2>&1"
      : "npm install 2>&1";
    console.log(`      Running ${pm} install at ${effectiveRoot}...`);
    const install = run(installCmd, effectiveRoot, 300_000);
    steps.push({ command: `${pm} install`, status: install.ok ? "pass" : "fail", output: install.output, durationMs: install.durationMs });
    if (!install.ok) return { steps, patched };
    installedWorkspaces.add(effectiveRoot);
  }

  // Install at package level if node_modules missing
  const pkgBuildPath = existsSync(resolve(absRoot, "package.json")) ? absRoot : installRoot;
  if (pkgBuildPath !== effectiveRoot && existsSync(resolve(pkgBuildPath, "package.json"))) {
    if (!existsSync(resolve(pkgBuildPath, "node_modules"))) {
      run(`${pm} install --no-frozen-lockfile 2>&1 || npm install 2>&1`, pkgBuildPath, 120_000);
      if (!existsSync(resolve(pkgBuildPath, "node_modules"))) {
        run("bun install 2>&1", pkgBuildPath, 60_000);
      }
    }
  }

  if (mode === "compat" && existsSync(resolve(pkgBuildPath, "package.json"))) {
    const pkgContent = readFileSync(resolve(pkgBuildPath, "package.json"), "utf-8");
    if (!pkgContent.includes("@types/node")) {
      run(`${pm} add -D @types/node 2>&1 || npm install -D @types/node 2>&1`, pkgBuildPath, 30_000);
      patched = true;
    }
  }

  // Build: try the project's own build script
  if (existsSync(resolve(pkgBuildPath, "package.json"))) {
    const pkg = JSON.parse(readFileSync(resolve(pkgBuildPath, "package.json"), "utf-8"));
    if (pkg.scripts?.build) {
      console.log(`      Running ${pm} run build at ${pkgBuildPath}...`);
      const build = run(`${pm} run build 2>&1`, pkgBuildPath, 300_000);
      steps.push({ command: `${pm} run build`, status: build.ok ? "pass" : "fail", output: build.output, durationMs: build.durationMs });
      if (build.ok) return { steps, patched };
    }
  }

  // Fallback: tsc
  const tscRoot = existsSync(resolve(absRoot, "tsconfig.json")) ? absRoot : installRoot;
  const tsc = run("npx tsc --noEmit --skipLibCheck --moduleResolution nodenext --module nodenext 2>&1", tscRoot, 120_000);
  steps.push({ command: "tsc --noEmit", status: tsc.ok ? "pass" : "fail", output: tsc.output, durationMs: tsc.durationMs });

  return { steps, patched };
}

function validateStatic(absRoot: string): { steps: StepResult[]; patched: boolean } {
  const exists = existsSync(absRoot);
  return {
    steps: [{ command: "file exists", status: exists ? "pass" : "fail", output: exists ? "OK" : `path not found: ${absRoot}`, durationMs: 0 }],
    patched: false,
  };
}

// --- Report ---

function docsPageLinks(mdxPath: string): string {
  const ghUrl = `https://github.com/MystenLabs/sui/blob/main/${mdxPath}`;
  const slug = mdxPath.replace(/^docs\/content\//, "").replace(/\.mdx?$/, "");
  return `[${slug}](https://docs.sui.io/${slug}) ([source](${ghUrl}))`;
}

function categorizeFailure(steps: StepResult[]): string {
  const failStep = steps.find((s) => s.status === "fail");
  if (!failStep) return "Unknown";
  const out = failStep.output.toLowerCase();
  const cmd = failStep.command;
  if (cmd.includes("install") && out.includes("workspace:")) return "Workspace protocol requires pnpm";
  if (cmd.includes("install")) return "Dependency installation failed";
  if (out.includes("mvr") || out.includes("r.mvr")) return "MVR dependency — requires MVR resolver";
  if (out.includes("cannot find module")) return "Missing npm dependency";
  if (out.includes("not found in scope") || out.includes("unresolved")) return "Missing Move dependency";
  if (out.includes("edition")) return "Incompatible Move edition";
  if (out.includes("bun: not found")) return "Requires bun runtime";
  if (cmd.includes("tsc")) return "TypeScript compilation error";
  if (cmd.includes("move")) return "Move compilation error";
  if (cmd.includes("cargo")) return "Rust compilation error";
  if (cmd.includes("clone")) return "Git clone failed";
  if (cmd.includes("exists")) return "Build file not found";
  return "Build error";
}

function generateReport(results: ValidationResult[], versions: ToolVersions, totalDurationMs: number, mode: Mode): string {
  const lines: string[] = [];
  const passed = results.filter((r) => r.overallStatus === "pass").length;
  const failed = results.filter((r) => r.overallStatus === "fail").length;
  const patchedCount = results.filter((r) => r.patched).length;

  lines.push("# Sui Docs Example Validation Report");
  lines.push("");
  lines.push(`> **Mode**: \`${mode}\` — ${mode === "strict" ? "examples validated as-authored, no patching" : "known issues patched before building"}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push("| Metric | Value |");
  lines.push("|--------|-------|");
  lines.push(`| Date | ${new Date().toISOString()} |`);
  lines.push(`| Packages validated | ${results.length} |`);
  lines.push(`| Passed | ${passed} |`);
  lines.push(`| Failed | ${failed} |`);
  if (patchedCount > 0) lines.push(`| Patched (compat mode) | ${patchedCount} |`);
  lines.push(`| Duration | ${(totalDurationMs / 1000).toFixed(0)}s |`);
  lines.push("");

  lines.push("## Tool Versions");
  lines.push("");
  lines.push("| Tool | Version |");
  lines.push("|------|---------|");
  for (const [tool, ver] of Object.entries(versions)) {
    lines.push(`| ${tool} | ${ver} |`);
  }
  lines.push("");

  if (failed > 0) {
    lines.push("## Failures");
    lines.push("");
    for (const r of results.filter((r) => r.overallStatus === "fail")) {
      const category = categorizeFailure(r.steps);
      lines.push(`### ${r.id}`);
      lines.push("");
      lines.push(`- **Failure**: ${category}`);
      lines.push(`- **Type**: ${r.type} | **Origin**: ${r.origin}`);
      if (r.versionInfo?.edition) lines.push(`- **Move edition**: ${r.versionInfo.edition}`);
      if (r.versionInfo?.dependencies && Object.keys(r.versionInfo.dependencies).length > 0) {
        lines.push(`- **Dependencies**: ${Object.entries(r.versionInfo.dependencies).map(([k, v]) => `\`${k}: ${v}\``).join(", ")}`);
      }
      lines.push(`- **Docs pages**: ${r.referencedBy.map((f) => docsPageLinks(f)).join(", ")}`);
      lines.push("");
      for (const step of r.steps) {
        if (step.status === "fail") {
          lines.push(`**\`${step.command}\`** — FAIL (${(step.durationMs / 1000).toFixed(1)}s)`);
          lines.push("");
          lines.push("```");
          lines.push(step.output.slice(-1000));
          lines.push("```");
          lines.push("");
        }
      }
      lines.push("---");
      lines.push("");
    }
  }

  lines.push("## All Results");
  lines.push("");
  lines.push("| # | Package | Type | Origin | Status | Duration | Files |");
  lines.push("|---|---------|------|--------|--------|----------|-------|");

  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    const totalMs = r.steps.reduce((sum, s) => sum + s.durationMs, 0);
    const shortId = r.id.length > 50 ? "..." + r.id.slice(-47) : r.id;
    const shortOrigin = r.origin.length > 30 ? "..." + r.origin.slice(-27) : r.origin;
    const status = r.overallStatus === "pass" ? (r.patched ? "PASS (patched)" : "PASS") : "**FAIL**";
    lines.push(`| ${i + 1} | ${shortId} | ${r.type} | ${shortOrigin} | ${status} | ${(totalMs / 1000).toFixed(1)}s | ${r.files.length} |`);
  }

  lines.push("");
  lines.push("## Detailed Results");
  lines.push("");
  for (const r of results) {
    const label = r.overallStatus === "pass" ? "PASS" : "FAIL";
    lines.push(`<details><summary>${label}${r.patched ? " (patched)" : ""} — ${r.id} (${r.type})</summary>`);
    lines.push("");
    lines.push(`- **Origin**: ${r.origin}`);
    lines.push(`- **Package root**: \`${r.packageRoot}\``);
    if (r.versionInfo?.edition) lines.push(`- **Move edition**: ${r.versionInfo.edition}`);
    if (r.versionInfo?.dependencies && Object.keys(r.versionInfo.dependencies).length > 0) {
      lines.push(`- **Dependencies**: ${Object.entries(r.versionInfo.dependencies).map(([k, v]) => `\`${k}: ${v}\``).join(", ")}`);
    }
    lines.push(`- **Files**: ${r.files.map((f) => `\`${f}\``).join(", ")}`);
    lines.push(`- **Referenced by**: ${r.referencedBy.map((f) => docsPageLinks(f)).join(", ")}`);
    lines.push("");
    for (const step of r.steps) {
      const icon = step.status === "pass" ? "PASS" : step.status === "fail" ? "FAIL" : "N/A";
      lines.push(`**\`${step.command}\`** — ${icon} (${(step.durationMs / 1000).toFixed(1)}s)`);
      if (step.output && step.output !== "OK" && step.status !== "skip") {
        lines.push("");
        lines.push("```");
        lines.push(step.output.slice(-800));
        lines.push("```");
      }
      lines.push("");
    }
    lines.push("</details>");
    lines.push("");
  }

  return lines.join("\n");
}

// --- Main ---

async function main() {
  const { suiRepo, manifest, output, mode } = parseArgs();
  const startTime = Date.now();

  console.log(`Mode: ${mode}`);
  console.log("Collecting tool versions...");
  const versions = collectToolVersions();
  for (const [k, v] of Object.entries(versions)) console.log(`  ${k}: ${v}`);

  const packages: PackageEntry[] = JSON.parse(readFileSync(manifest, "utf-8"));
  console.log(`\nLoaded ${packages.length} packages from manifest`);

  // Load configs
  const skipConfig = JSON.parse(readFileSync(resolve(import.meta.dirname!, "../config/skip.json"), "utf-8"));
  const skipPatterns: { pattern: string; reason: string }[] = skipConfig.skip;
  const allowedRepos = loadAllowedRepos();

  function shouldSkip(id: string): string | null {
    for (const s of skipPatterns) {
      if (id.includes(s.pattern)) return s.reason;
    }
    return null;
  }

  const workDir = resolve(dirname(output), ".external-repos");
  if (!existsSync(workDir)) mkdirSync(workDir, { recursive: true });

  const results: ValidationResult[] = [];
  const validPackages = packages.filter((p) => p.id && p.packageRoot);

  for (let i = 0; i < validPackages.length; i++) {
    const pkg = validPackages[i];
    const progress = `[${i + 1}/${validPackages.length}]`;

    const skipReason = shouldSkip(pkg.id);
    if (skipReason) {
      console.log(`\n${progress} Skipping: ${pkg.id} — ${skipReason}`);
      continue;
    }

    // Allowlist check for external repos
    if (pkg.source === "external" && pkg.org && pkg.repo) {
      const repoKey = `${pkg.org}/${pkg.repo}`;
      if (!allowedRepos.has(repoKey)) {
        console.log(`\n${progress} Blocked: ${pkg.id} — ${repoKey} not in allowed-repos.json`);
        results.push({
          id: pkg.id, type: pkg.type, source: pkg.source,
          origin: `${pkg.org}/${pkg.repo}@${pkg.branch}`,
          packageRoot: pkg.packageRoot, files: pkg.files, referencedBy: pkg.referencedBy,
          steps: [{ command: "allowlist check", status: "fail", output: `${repoKey} not in allowed-repos.json`, durationMs: 0 }],
          overallStatus: "fail", failureReason: "Not in repo allowlist",
        });
        continue;
      }
    }

    console.log(`\n${progress} Validating: ${pkg.id} (${pkg.type})`);

    const origin = pkg.source === "internal"
      ? `MystenLabs/sui (internal)`
      : `${pkg.org}/${pkg.repo}@${pkg.branch}`;

    // Resolve absolute path
    let absRoot: string;
    let resolvedType = pkg.type;

    if (pkg.source === "internal") {
      absRoot = resolve(suiRepo, pkg.packageRoot);
    } else {
      const repoDir = ensureExternalRepo(pkg.org!, pkg.repo!, pkg.branch!, workDir);
      if (!repoDir) {
        results.push({
          id: pkg.id, type: pkg.type, source: pkg.source, origin,
          packageRoot: pkg.packageRoot, files: pkg.files, referencedBy: pkg.referencedBy,
          steps: [{ command: "git clone", status: "fail", output: `Failed to clone ${origin}`, durationMs: 0 }],
          overallStatus: "fail", failureReason: `Failed to clone ${origin}`,
        });
        continue;
      }

      let resolved: { absRoot: string; type: PackageEntry["type"] } | null = null;
      const firstFile = pkg.files[0] || pkg.packageRoot;
      const searchPath = firstFile.startsWith(pkg.packageRoot) ? firstFile : `${pkg.packageRoot}/${firstFile}`;
      resolved = resolveActualPackageRoot(searchPath, repoDir);
      if (!resolved) {
        const pkgDir = resolve(repoDir, pkg.packageRoot);
        if (existsSync(pkgDir)) {
          const findResult = run(`find "${pkgDir}" -maxdepth 2 -name Move.toml -o -name Cargo.toml -o -name package.json 2>/dev/null | head -1`, repoDir, 5000);
          if (findResult.ok && findResult.output.trim()) {
            resolved = { absRoot: dirname(findResult.output.trim()), type: pkg.type };
          }
        }
      }
      if (resolved) { absRoot = resolved.absRoot; resolvedType = resolved.type; }
      else { absRoot = resolve(repoDir, pkg.packageRoot); }
    }

    // Validate
    let validation: { steps: StepResult[]; patched: boolean };
    switch (resolvedType) {
      case "move":
        validation = validateMove(absRoot, mode);
        break;
      case "rust":
        validation = validateRust(absRoot);
        break;
      case "typescript":
        validation = validateTypeScript(absRoot, mode);
        break;
      case "static":
        validation = validateStatic(absRoot);
        break;
      default:
        if (existsSync(resolve(absRoot, "Move.toml"))) validation = validateMove(absRoot, mode);
        else if (existsSync(resolve(absRoot, "Cargo.toml"))) validation = validateRust(absRoot);
        else if (existsSync(resolve(absRoot, "package.json"))) validation = validateTypeScript(absRoot, mode);
        else {
          const findResult = run(`find "${absRoot}" -maxdepth 3 -name Move.toml -o -name Cargo.toml -o -name package.json 2>/dev/null | head -1`, absRoot, 5000);
          if (findResult.ok && findResult.output.trim()) {
            const found = findResult.output.trim();
            const foundDir = dirname(found);
            if (found.endsWith("Move.toml")) validation = validateMove(foundDir, mode);
            else if (found.endsWith("Cargo.toml")) validation = validateRust(foundDir);
            else validation = validateTypeScript(foundDir, mode);
          } else {
            validation = validateStatic(absRoot);
          }
        }
    }

    const { steps, patched } = validation;

    // Overall status: last build step determines pass/fail. No over-trusting.
    const buildSteps = steps.filter((s) =>
      s.command.includes("build") || s.command.includes("check") ||
      s.command.includes("tsc") || s.command === "file exists"
    );
    const lastBuildStep = buildSteps[buildSteps.length - 1];
    const hasBuildPass = buildSteps.some((s) => s.status === "pass");
    const overallStatus: "pass" | "fail" | "skip" = hasBuildPass ? "pass" : lastBuildStep?.status === "fail" ? "fail" : "skip";
    const failureReason = overallStatus === "fail"
      ? buildSteps.find((s) => s.status === "fail")?.output?.slice(-200)
      : undefined;

    for (const step of steps) {
      const icon = step.status === "pass" ? "PASS" : step.status === "fail" ? "FAIL" : "N/A";
      console.log(`    ${icon}  ${step.command} (${(step.durationMs / 1000).toFixed(1)}s)`);
    }

    results.push({
      id: pkg.id, type: pkg.type, source: pkg.source, origin,
      packageRoot: pkg.packageRoot, files: pkg.files, referencedBy: pkg.referencedBy,
      steps, overallStatus, failureReason,
      versionInfo: extractVersionInfo(absRoot, resolvedType),
      patched,
    });
  }

  const totalDurationMs = Date.now() - startTime;
  const report = generateReport(results, versions, totalDurationMs, mode);

  if (!existsSync(dirname(output))) mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, report);
  console.log(`\nReport written to ${output}`);

  const jsonOutput = output.replace(/\.md$/, ".json");
  writeFileSync(jsonOutput, JSON.stringify({ mode, versions, results, totalDurationMs }, null, 2));

  const passed = results.filter((r) => r.overallStatus === "pass").length;
  const failed = results.filter((r) => r.overallStatus === "fail").length;
  console.log(`\nDone: ${passed} passed, ${failed} failed (${(totalDurationMs / 1000).toFixed(0)}s)`);

  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
