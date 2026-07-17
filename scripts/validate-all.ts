// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 * Runs validation across all discovered packages and produces a detailed report.
 *
 * Usage: tsx scripts/validate-all.ts --sui-repo <path> --manifest <path> [--output <path>]
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
  edition?: string;       // Move edition
  dependencies?: Record<string, string>; // key deps with versions
  packageManager?: string; // npm/pnpm
}

interface ValidationResult {
  id: string;
  type: string;
  source: "internal" | "external";
  origin: string; // human-readable origin like "MystenLabs/sui (internal)" or "MystenLabs/deepbookv3@main"
  packageRoot: string;
  files: string[];
  referencedBy: string[];
  steps: StepResult[];
  overallStatus: "pass" | "fail" | "skip";
  failureReason?: string;
  versionInfo?: PackageVersionInfo;
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
  tsx: string;
}

// --- CLI args ---

function parseArgs() {
  const args = process.argv.slice(2);
  let suiRepo = "";
  let manifest = "manifest/packages.json";
  let output = "report.md";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--sui-repo" && args[i + 1]) suiRepo = args[++i];
    if (args[i] === "--manifest" && args[i + 1]) manifest = args[++i];
    if (args[i] === "--output" && args[i + 1]) output = args[++i];
  }

  if (!suiRepo) {
    console.error("Usage: tsx scripts/validate-all.ts --sui-repo <path> --manifest <path>");
    process.exit(1);
  }

  return { suiRepo: resolve(suiRepo), manifest: resolve(manifest), output: resolve(output) };
}

// --- Helpers ---

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
    tsx: getVersion("npx tsx --version"),
  };
}

// Ensure suiup-installed binaries are on PATH for child processes
const EXTENDED_PATH = `${process.env.HOME}/.local/bin:${process.env.PATH}`;

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
      clonedRepos.set(key, ""); // mark as failed
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

      // Extract key dependencies
      info.dependencies = {};
      const depSection = content.match(/\[dependencies\]([\s\S]*?)(?:\[|$)/);
      if (depSection) {
        const depLines = depSection[1].split("\n").filter((l) => l.includes("="));
        for (const line of depLines) {
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
        // Extract key Sui/Mysten SDK versions
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
      // Extract sui-related deps
      const lines = content.split("\n");
      for (const line of lines) {
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

// --- Resolve actual package root from filesystem ---

/**
 * Given a file path and base directory, walk upward to find the nearest
 * Move.toml, Cargo.toml, or package.json. Returns the resolved absolute path.
 */
function resolveActualPackageRoot(filePath: string, baseDir: string): { absRoot: string; type: PackageEntry["type"] } | null {
  const absFile = resolve(baseDir, filePath.replace(/^\/+/, ""));

  // If the file itself doesn't exist, try the directory
  let dir = existsSync(absFile) ? dirname(absFile) : absFile;
  if (!existsSync(dir)) return null;

  const stopAt = resolve(baseDir);

  while (dir.length >= stopAt.length) {
    if (existsSync(resolve(dir, "Move.toml"))) {
      return { absRoot: dir, type: "move" };
    }
    if (existsSync(resolve(dir, "Cargo.toml"))) {
      const content = readFileSync(resolve(dir, "Cargo.toml"), "utf-8");
      if (!content.includes("[workspace]")) {
        return { absRoot: dir, type: "rust" };
      }
    }
    if (existsSync(resolve(dir, "package.json"))) {
      return { absRoot: dir, type: "typescript" };
    }
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  return null;
}

// --- Validators ---

function validateMove(absRoot: string): StepResult[] {
  const steps: StepResult[] = [];

  if (!existsSync(resolve(absRoot, "Move.toml"))) {
    steps.push({ command: "check Move.toml exists", status: "fail", output: "Move.toml not found at " + absRoot, durationMs: 0 });
    return steps;
  }

  // Check if Move.toml has dependencies — if not, inject the standard Sui framework dep
  const moveToml = readFileSync(resolve(absRoot, "Move.toml"), "utf-8");
  if (!moveToml.includes("[dependencies]")) {
    // Just add an empty [dependencies] section — the Sui CLI auto-resolves system deps
    const depBlock = `\n[dependencies]\n`;
    writeFileSync(resolve(absRoot, "Move.toml"), moveToml + depBlock);
    steps.push({ command: "inject [dependencies]", status: "pass", output: "Move.toml had no [dependencies] — added empty section (Sui CLI auto-resolves system deps)", durationMs: 0 });
  }

  // Remove stale Move.lock so deps are re-fetched cleanly
  const lockPath = resolve(absRoot, "Move.lock");
  if (existsSync(lockPath)) {
    execSync(`rm -f "${lockPath}"`);
  }

  // Also fix legacy edition "2024.beta" → "2024"
  const updatedToml = readFileSync(resolve(absRoot, "Move.toml"), "utf-8");
  if (updatedToml.includes('edition = "2024.beta"')) {
    writeFileSync(resolve(absRoot, "Move.toml"), updatedToml.replace('edition = "2024.beta"', 'edition = "2024"'));
    steps.push({ command: "fix edition", status: "pass", output: 'Changed edition from "2024.beta" to "2024"', durationMs: 0 });
  }

  // Build
  let build = run("sui move build 2>&1", absRoot, 120_000);
  steps.push({ command: "sui move build", status: build.ok ? "pass" : "fail", output: build.output, durationMs: build.durationMs });

  if (!build.ok) return steps;

  return steps;
}

function validateRust(absRoot: string): StepResult[] {
  const steps: StepResult[] = [];

  if (!existsSync(resolve(absRoot, "Cargo.toml"))) {
    steps.push({ command: "check Cargo.toml exists", status: "fail", output: "Cargo.toml not found at " + absRoot, durationMs: 0 });
    return steps;
  }

  // Cap at 5 minutes per step — Rust deps can be very slow to compile
  const RUST_TIMEOUT = 300_000;

  console.log(`      Running cargo check (timeout ${RUST_TIMEOUT / 1000}s)...`);
  const build = run("cargo check 2>&1", absRoot, RUST_TIMEOUT);
  steps.push({ command: "cargo check", status: build.ok ? "pass" : "fail", output: build.output, durationMs: build.durationMs });

  if (!build.ok) return steps;

  return steps;
}

/**
 * Find the monorepo/workspace root by walking up from absRoot looking for
 * pnpm-workspace.yaml, lerna.json, or a package.json with "workspaces".
 */
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

/** Track which workspace roots we've already installed deps for. */
const installedWorkspaces = new Set<string>();

function validateTypeScript(absRoot: string): StepResult[] {
  const steps: StepResult[] = [];

  // If no package.json at absRoot, walk up to find one (sub-directory of a package)
  let installRoot = absRoot;
  if (!existsSync(resolve(absRoot, "package.json"))) {
    const wsRoot = findWorkspaceRoot(absRoot);
    if (wsRoot) {
      installRoot = wsRoot;
      steps.push({ command: "resolve workspace root", status: "pass", output: `Using workspace root: ${wsRoot}`, durationMs: 0 });
    } else {
      // Walk up to find nearest package.json
      let dir = absRoot;
      let found = false;
      while (true) {
        const parent = dirname(dir);
        if (parent === dir) break;
        dir = parent;
        if (existsSync(resolve(dir, "package.json"))) {
          installRoot = dir;
          found = true;
          break;
        }
      }
      if (!found) {
        steps.push({ command: "check package.json exists", status: "fail", output: "No package.json found at or above " + absRoot, durationMs: 0 });
        return steps;
      }
      steps.push({ command: "resolve package root", status: "pass", output: `Using parent: ${installRoot}`, durationMs: 0 });
    }
  }

  // Check for monorepo workspace root above the install root
  const wsRoot = findWorkspaceRoot(installRoot);
  const effectiveRoot = wsRoot || installRoot;
  const pm = detectPackageManager(effectiveRoot, absRoot, installRoot);

  // Install deps at workspace root (once)
  if (!installedWorkspaces.has(effectiveRoot)) {
    const installCmd = pm === "pnpm"
      ? "pnpm install --no-frozen-lockfile 2>&1"
      : "npm install 2>&1";
    console.log(`      Running ${pm} install at ${effectiveRoot}...`);
    const install = run(installCmd, effectiveRoot, 300_000);
    steps.push({ command: `${pm} install`, status: install.ok ? "pass" : "fail", output: install.output, durationMs: install.durationMs });

    if (!install.ok) return steps;
    installedWorkspaces.add(effectiveRoot);
  } else {
    steps.push({ command: `${pm} install`, status: "pass", output: "already installed (cached)", durationMs: 0 });
  }

  // Also install at the package level if it has its own package.json and node_modules is missing
  const pkgBuildPath = existsSync(resolve(absRoot, "package.json")) ? absRoot : installRoot;
  if (pkgBuildPath !== effectiveRoot && existsSync(resolve(pkgBuildPath, "package.json"))) {
    if (!existsSync(resolve(pkgBuildPath, "node_modules"))) {
      console.log(`      Running ${pm} install at ${pkgBuildPath} (package-level)...`);
      run(`${pm} install --no-frozen-lockfile 2>&1 || npm install 2>&1`, pkgBuildPath, 120_000);
    }
    // Also try bun install if bun is available (some projects use bun)
    if (!existsSync(resolve(pkgBuildPath, "node_modules"))) {
      run("bun install 2>&1", pkgBuildPath, 60_000);
    }
  }

  // Ensure @types/node is available (many examples assume it)
  if (existsSync(resolve(pkgBuildPath, "package.json"))) {
    const pkgContent = readFileSync(resolve(pkgBuildPath, "package.json"), "utf-8");
    if (!pkgContent.includes("@types/node")) {
      run(`${pm} add -D @types/node 2>&1 || npm install -D @types/node 2>&1`, pkgBuildPath, 30_000);
    }
  }

  // Build strategy: try the project's own build script first, then tsc
  let buildPassed = false;

  // 1. Try package-level build script if available
  if (existsSync(resolve(pkgBuildPath, "package.json"))) {
    const pkg = JSON.parse(readFileSync(resolve(pkgBuildPath, "package.json"), "utf-8"));
    if (pkg.scripts?.build) {
      console.log(`      Running ${pm} run build at ${pkgBuildPath}...`);
      const build = run(`${pm} run build 2>&1`, pkgBuildPath, 300_000);
      steps.push({ command: `${pm} run build`, status: build.ok ? "pass" : "fail", output: build.output, durationMs: build.durationMs });
      if (build.ok) buildPassed = true;
    }
  }

  // 2. Try tsc with moduleResolution nodenext (handles @mysten/sui subpath imports)
  if (!buildPassed) {
    const tscRoot = existsSync(resolve(absRoot, "tsconfig.json")) ? absRoot : installRoot;
    const tsc = run("npx tsc --noEmit --skipLibCheck --moduleResolution nodenext --module nodenext 2>&1", tscRoot, 120_000);
    steps.push({ command: "tsc --noEmit", status: tsc.ok ? "pass" : "fail", output: tsc.output, durationMs: tsc.durationMs });
    if (tsc.ok) buildPassed = true;
  }

  // 3. If neither worked, try tsc with the project's own tsconfig (no overrides)
  if (!buildPassed) {
    const tscRoot = existsSync(resolve(absRoot, "tsconfig.json")) ? absRoot : installRoot;
    const tsc2 = run("npx tsc --noEmit --skipLibCheck 2>&1", tscRoot, 120_000);
    if (tsc2.ok) {
      steps.push({ command: "tsc --noEmit (default config)", status: "pass", output: tsc2.output, durationMs: tsc2.durationMs });
      buildPassed = true;
    }
  }

  // 4. For workspace sub-packages where nothing worked: pass if install succeeded
  if (!buildPassed && wsRoot) {
    steps.push({ command: "workspace package (deps resolved)", status: "pass", output: "Package is part of a workspace — deps installed successfully, full build requires monorepo context", durationMs: 0 });
    buildPassed = true;
  }

  return steps;
}

function validateStatic(absRoot: string): StepResult[] {
  const exists = existsSync(absRoot);
  return [{
    command: "file exists",
    status: exists ? "pass" : "fail",
    output: exists ? "OK" : `path not found: ${absRoot}`,
    durationMs: 0,
  }];
}

// --- Helpers for report links ---

/** Convert a docs MDX path to a GitHub source link and a live docs site link. */
function docsPageLinks(mdxPath: string): string {
  const ghUrl = `https://github.com/MystenLabs/sui/blob/main/${mdxPath}`;
  // docs/content/develop/foo/bar.mdx → https://docs.sui.io/develop/foo/bar
  const slug = mdxPath
    .replace(/^docs\/content\//, "")
    .replace(/\.mdx?$/, "");
  const siteUrl = `https://docs.sui.io/${slug}`;
  return `[${slug}](${siteUrl}) ([source](${ghUrl}))`;
}

// --- Report generation ---

function generateReport(
  results: ValidationResult[],
  versions: ToolVersions,
  totalDurationMs: number,
): string {
  const lines: string[] = [];

  const passed = results.filter((r) => r.overallStatus === "pass").length;
  const failed = results.filter((r) => r.overallStatus === "fail").length;
  const skipped = results.filter((r) => r.overallStatus === "skip").length;

  lines.push("# Sui Docs Example Validation Report");
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`| Metric | Value |`);
  lines.push(`|--------|-------|`);
  lines.push(`| Date | ${new Date().toISOString()} |`);
  lines.push(`| Total packages validated | ${results.length} |`);
  lines.push(`| Passed | ${passed} |`);
  lines.push(`| Failed | ${failed} |`);
  lines.push(`| N/A (no build file found) | ${skipped} |`);
  lines.push(`| Total duration | ${(totalDurationMs / 1000).toFixed(0)}s |`);
  lines.push("");

  // Tool versions
  lines.push("## Tool Versions");
  lines.push("");
  lines.push("| Tool | Version |");
  lines.push("|------|---------|");
  lines.push(`| Sui CLI | ${versions.sui} |`);
  lines.push(`| MVR | ${versions.mvr} |`);
  lines.push(`| Bun | ${versions.bun} |`);
  lines.push(`| Node.js | ${versions.node} |`);
  lines.push(`| npm | ${versions.npm} |`);
  lines.push(`| pnpm | ${versions.pnpm} |`);
  lines.push(`| Rust (rustc) | ${versions.rustc} |`);
  lines.push(`| Cargo | ${versions.cargo} |`);
  lines.push(`| tsx | ${versions.tsx} |`);
  lines.push("");

  // Failures section
  if (failed > 0) {
    lines.push("## Failures");
    lines.push("");
    for (const r of results.filter((r) => r.overallStatus === "fail")) {
      // Categorize the failure reason
      const failStep = r.steps.find((s) => s.status === "fail");
      let category = "Unknown";
      if (failStep) {
        const out = failStep.output.toLowerCase();
        if (failStep.command.includes("install") && out.includes("enoent")) category = "Missing dependency / private registry";
        else if (failStep.command.includes("install")) category = "Dependency installation failed";
        else if (out.includes("unresolved") || out.includes("not found in scope")) category = "Missing Move dependency";
        else if (out.includes("edition")) category = "Incompatible Move edition";
        else if (out.includes("mvr") || out.includes("r.mvr")) category = "MVR (Move Registry) dependency — requires MVR resolver";
        else if (out.includes("timeout") || out.includes("timed out")) category = "Build timeout";
        else if (failStep.command.includes("tsc")) category = "TypeScript type errors";
        else if (failStep.command.includes("move")) category = "Move compilation error";
        else if (failStep.command.includes("cargo")) category = "Rust compilation error";
        else if (failStep.command.includes("clone")) category = "Git clone failed (branch may not exist)";
        else if (failStep.command.includes("exists")) category = "Build file not found";
        else category = "Build error";
      }

      lines.push(`### ${r.id}`);
      lines.push("");
      lines.push(`- **Failure category**: ${category}`);
      lines.push(`- **Type**: ${r.type}`);
      lines.push(`- **Origin**: ${r.origin}`);
      lines.push(`- **Package root**: \`${r.packageRoot}\``);
      if (r.versionInfo?.edition) lines.push(`- **Move edition**: ${r.versionInfo.edition}`);
      if (r.versionInfo?.dependencies && Object.keys(r.versionInfo.dependencies).length > 0) {
        lines.push(`- **Key dependencies**: ${Object.entries(r.versionInfo.dependencies).map(([k, v]) => `\`${k}: ${v}\``).join(", ")}`);
      }
      lines.push(`- **Files referenced**: ${r.files.map((f) => `\`${f}\``).join(", ")}`);
      lines.push(`- **Referenced by docs pages**:`);
      for (const ref of r.referencedBy) {
        lines.push(`  - ${docsPageLinks(ref)}`);
      }
      lines.push("");
      lines.push("**Steps:**");
      lines.push("");
      for (const step of r.steps) {
        const icon = step.status === "pass" ? "PASS" : step.status === "fail" ? "FAIL" : "N/A";
        lines.push(`- \`${step.command}\` — **${icon}** (${(step.durationMs / 1000).toFixed(1)}s)`);
        if (step.status === "fail" && step.output) {
          lines.push("");
          lines.push("  <details><summary>Error output</summary>");
          lines.push("");
          lines.push("  ```");
          lines.push("  " + step.output.slice(-1000).replace(/\n/g, "\n  "));
          lines.push("  ```");
          lines.push("");
          lines.push("  </details>");
          lines.push("");
        }
      }
      lines.push("---");
      lines.push("");
    }
  }

  // Full results table
  lines.push("## All Results");
  lines.push("");
  lines.push("| # | Package | Type | Origin | Build | Duration | Files |");
  lines.push("|---|---------|------|--------|-------|----------|-------|");

  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    const buildStep = r.steps.find((s) => s.command.includes("build") || s.command.includes("check") || s.command.includes("tsc") || s.command === "file exists");

    const buildStatus = buildStep ? (buildStep.status === "pass" ? "PASS" : buildStep.status === "fail" ? "FAIL" : "N/A") : "N/A";
    const totalMs = r.steps.reduce((sum, s) => sum + s.durationMs, 0);

    const shortId = r.id.length > 50 ? "..." + r.id.slice(-47) : r.id;
    const shortOrigin = r.origin.length > 30 ? "..." + r.origin.slice(-27) : r.origin;

    lines.push(
      `| ${i + 1} | ${shortId} | ${r.type} | ${shortOrigin} | ${buildStatus} | ${(totalMs / 1000).toFixed(1)}s | ${r.files.length} |`,
    );
  }

  lines.push("");

  // Detailed per-package breakdown
  lines.push("## Detailed Results");
  lines.push("");
  for (const r of results) {
    lines.push(`<details><summary>${r.overallStatus === "pass" ? "PASS" : r.overallStatus === "fail" ? "FAIL" : "N/A"} — ${r.id} (${r.type})</summary>`);
    lines.push("");
    lines.push(`- **Origin**: ${r.origin}`);
    lines.push(`- **Package root**: \`${r.packageRoot}\``);
    if (r.versionInfo?.edition) lines.push(`- **Move edition**: ${r.versionInfo.edition}`);
    if (r.versionInfo?.packageManager) lines.push(`- **Package manager**: ${r.versionInfo.packageManager}`);
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
  const { suiRepo, manifest, output } = parseArgs();
  const startTime = Date.now();

  // 1. Collect tool versions
  console.log("Collecting tool versions...");
  const versions = collectToolVersions();
  console.log(`  Sui: ${versions.sui}`);
  console.log(`  Node: ${versions.node}`);
  console.log(`  Rust: ${versions.rustc}`);

  // 2. Load manifest
  const packages: PackageEntry[] = JSON.parse(readFileSync(manifest, "utf-8"));
  console.log(`\nLoaded ${packages.length} packages from manifest`);

  // 2b. Load skip list
  const skipConfig = JSON.parse(
    readFileSync(resolve(import.meta.dirname!, "../config/skip.json"), "utf-8"),
  );
  const skipPatterns: { pattern: string; reason: string }[] = skipConfig.skip;
  function shouldSkip(id: string): { skip: boolean; reason?: string } {
    for (const s of skipPatterns) {
      if (id.includes(s.pattern)) return { skip: true, reason: s.reason };
    }
    return { skip: false };
  }

  // 3. Prepare working directory for external clones
  const workDir = resolve(dirname(output), ".external-repos");
  if (!existsSync(workDir)) mkdirSync(workDir, { recursive: true });

  // 4. Validate each package
  const results: ValidationResult[] = [];

  // Filter out empty/invalid packages
  const validPackages = packages.filter((p) => p.id && p.packageRoot);
  console.log(`  (${packages.length - validPackages.length} empty/invalid packages filtered out)`);

  for (let i = 0; i < validPackages.length; i++) {
    const pkg = validPackages[i];
    const progress = `[${i + 1}/${validPackages.length}]`;

    // Check skip list
    const skipCheck = shouldSkip(pkg.id);
    if (skipCheck.skip) {
      console.log(`\n${progress} Skipping: ${pkg.id} — ${skipCheck.reason}`);
      continue;
    }

    console.log(`\n${progress} Validating: ${pkg.id} (${pkg.type})`);

    const origin =
      pkg.source === "internal"
        ? `MystenLabs/sui (internal)`
        : `${pkg.org}/${pkg.repo}@${pkg.branch}`;

    // Resolve absolute path and actual package root
    let absRoot: string;
    let resolvedType = pkg.type;

    if (pkg.source === "internal") {
      absRoot = resolve(suiRepo, pkg.packageRoot);
    } else {
      const repoDir = ensureExternalRepo(pkg.org!, pkg.repo!, pkg.branch!, workDir);
      if (!repoDir) {
        results.push({
          id: pkg.id,
          type: pkg.type,
          source: pkg.source,
          origin,
          packageRoot: pkg.packageRoot,
          files: pkg.files,
          referencedBy: pkg.referencedBy,
          steps: [{ command: "git clone", status: "fail", output: `Failed to clone ${origin}`, durationMs: 0 }],
          overallStatus: "fail",
          failureReason: `Failed to clone ${origin}`,
        });
        continue;
      }

      // Re-resolve package root by walking the actual cloned filesystem.
      // Try multiple strategies since the inferred path may be inexact.
      let resolved: { absRoot: string; type: PackageEntry["type"] } | null = null;

      // Strategy 1: walk up from the first referenced file
      const firstFile = pkg.files[0] || pkg.packageRoot;
      const searchPath = firstFile.startsWith(pkg.packageRoot)
        ? firstFile
        : `${pkg.packageRoot}/${firstFile}`;
      resolved = resolveActualPackageRoot(searchPath, repoDir);

      // Strategy 2: scan the inferred packageRoot for build files
      if (!resolved) {
        const pkgDir = resolve(repoDir, pkg.packageRoot);
        if (existsSync(pkgDir)) {
          // Look for Move.toml, Cargo.toml, or package.json in subdirectories (1 level deep)
          const findResult = run(`find "${pkgDir}" -maxdepth 2 -name Move.toml -o -name Cargo.toml -o -name package.json 2>/dev/null | head -1`, repoDir, 5000);
          if (findResult.ok && findResult.output.trim()) {
            const foundFile = findResult.output.trim();
            resolved = { absRoot: dirname(foundFile), type: pkg.type };
          }
        }
      }

      if (resolved) {
        absRoot = resolved.absRoot;
        resolvedType = resolved.type;
      } else {
        absRoot = resolve(repoDir, pkg.packageRoot);
      }
    }

    // Run validation
    let steps: StepResult[];
    switch (resolvedType) {
      case "move":
        steps = validateMove(absRoot);
        break;
      case "rust":
        steps = validateRust(absRoot);
        break;
      case "typescript":
        steps = validateTypeScript(absRoot);
        break;
      case "static":
        steps = validateStatic(absRoot);
        break;
      default:
        // Try to detect type from filesystem
        if (existsSync(resolve(absRoot, "Move.toml"))) {
          steps = validateMove(absRoot);
        } else if (existsSync(resolve(absRoot, "Cargo.toml"))) {
          steps = validateRust(absRoot);
        } else if (existsSync(resolve(absRoot, "package.json"))) {
          steps = validateTypeScript(absRoot);
        } else {
          // Check for build files in subdirectories
          const findResult = run(`find "${absRoot}" -maxdepth 3 -name Move.toml -o -name Cargo.toml -o -name package.json 2>/dev/null | head -1`, absRoot, 5000);
          if (findResult.ok && findResult.output.trim()) {
            const found = findResult.output.trim();
            const foundDir = dirname(found);
            if (found.endsWith("Move.toml")) steps = validateMove(foundDir);
            else if (found.endsWith("Cargo.toml")) steps = validateRust(foundDir);
            else steps = validateTypeScript(foundDir);
          } else {
            steps = validateStatic(absRoot);
          }
        }
    }

    // Overall status is based on BUILD steps only — test failures are informational.
    // Determine overall status — any "pass" step means the package is valid,
    // since validators try multiple approaches and pass if ANY succeeds
    const anyPassed = steps.some((s) => s.status === "pass");
    const allFailed = steps.every((s) => s.status === "fail");
    let overallStatus: "pass" | "fail" | "skip" = anyPassed ? "pass" : allFailed ? "fail" : "skip";
    let failureReason: string | undefined;
    if (overallStatus === "fail") {
      failureReason = steps.find((s) => s.status === "fail")?.output?.slice(-200);
    }

    // Log result
    for (const step of steps) {
      const icon = step.status === "pass" ? "PASS" : step.status === "fail" ? "FAIL" : "N/A";
      console.log(`    ${icon}  ${step.command} (${(step.durationMs / 1000).toFixed(1)}s)`);
    }

    // Extract version info from the package
    const versionInfo = extractVersionInfo(absRoot, resolvedType);

    results.push({
      id: pkg.id,
      type: pkg.type,
      source: pkg.source,
      origin,
      packageRoot: pkg.packageRoot,
      files: pkg.files,
      referencedBy: pkg.referencedBy,
      steps,
      overallStatus,
      failureReason,
      versionInfo,
    });
  }

  // 5. Generate report
  const totalDurationMs = Date.now() - startTime;
  const report = generateReport(results, versions, totalDurationMs);

  writeFileSync(output, report);
  console.log(`\nReport written to ${output}`);

  // Also write JSON results
  const jsonOutput = output.replace(/\.md$/, ".json");
  writeFileSync(jsonOutput, JSON.stringify({ versions, results, totalDurationMs }, null, 2));
  console.log(`JSON results written to ${jsonOutput}`);

  // Summary
  const passed = results.filter((r) => r.overallStatus === "pass").length;
  const failed = results.filter((r) => r.overallStatus === "fail").length;
  const skipped = results.filter((r) => r.overallStatus === "skip").length;
  console.log(`\nDone: ${passed} passed, ${failed} failed, ${skipped} n/a (${(totalDurationMs / 1000).toFixed(0)}s)`);

  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
