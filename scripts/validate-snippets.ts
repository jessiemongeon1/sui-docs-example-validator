// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 * Validates inline code snippets from docs by scaffolding temporary
 * projects and running build/type-check commands.
 *
 * Supports:
 *   - Move modules (full module declarations) → sui move build
 *   - Move partials (structs, functions) → wrapped in module, sui move build
 *   - TypeScript snippets → npm install + tsc --noEmit
 *
 * Usage: tsx scripts/validate-snippets.ts --manifest <snippets.json> [--output <path>]
 */

import { execFileSync } from "child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from "fs";
import { resolve, dirname } from "path";
import { tmpdir } from "os";
import { randomUUID } from "crypto";

// --- Types ---

interface SnippetAnnotation {
  validate: boolean;
  novalidate: boolean;
  deps: string[];
  edition?: string;
}

interface Snippet {
  mdxFile: string;
  language: string;
  type: string;
  line: number;
  code: string;
  lineCount: number;
  covered: boolean;
  coveredBy?: string;
  hasModule: boolean;
  isPseudoCode: boolean;
  moduleName?: string;
  usesSuiFramework: boolean;
  annotation?: SnippetAnnotation;
  partialKind?: string;
  detectedImports?: string[];
}

interface SnippetResult {
  mdxFile: string;
  line: number;
  language: string;
  moduleName?: string;
  lineCount: number;
  kind: string;
  status: "pass" | "fail" | "skip";
  reason?: string;
  output?: string;
  durationMs: number;
}

interface DepTemplate {
  git: string;
  subdir: string;
  rev: string;
}

// --- CLI args ---

function parseArgs() {
  const args = process.argv.slice(2);
  let manifest = "manifest/snippets.json";
  let output = "results/snippet-report.md";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--manifest" && args[i + 1]) manifest = args[++i];
    if (args[i] === "--output" && args[i + 1]) output = args[++i];
  }

  return { manifest: resolve(manifest), output: resolve(output) };
}

// --- Helpers ---

const EXTENDED_PATH = `${process.env.HOME}/.local/bin:${process.env.PATH}`;
const EXEC_ENV = { ...process.env, PATH: EXTENDED_PATH };

function run(argv: string[], cwd: string, timeoutMs = 120_000): { ok: boolean; output: string; durationMs: number } {
  const start = Date.now();
  try {
    const stdout = execFileSync(argv[0], argv.slice(1), {
      cwd,
      timeout: timeoutMs,
      stdio: ["pipe", "pipe", "pipe"],
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
      env: EXEC_ENV,
    });
    return { ok: true, output: stdout.slice(-2000), durationMs: Date.now() - start };
  } catch (err: any) {
    const stderr = err.stderr?.slice?.(-2000) || "";
    const stdout = err.stdout?.slice?.(-2000) || "";
    return { ok: false, output: `${stderr}\n${stdout}`.trim(), durationMs: Date.now() - start };
  }
}

// --- Dependency resolution ---

function loadDepTemplates(): Record<string, DepTemplate> {
  const raw = JSON.parse(
    readFileSync(resolve(import.meta.dirname!, "../config/snippet-deps.json"), "utf-8"),
  );
  const { comment: _, ...deps } = raw;
  return deps as Record<string, DepTemplate>;
}

const RESERVED_ADDRESSES = new Set(["sui", "std", "sui_system", "bridge", "deepbook"]);

// Common Sui framework imports for wrapping Move partials
const COMMON_SUI_IMPORTS = [
  "use sui::object::UID;",
  "use sui::tx_context::TxContext;",
  "use sui::transfer;",
  "use sui::coin::{Self, Coin};",
  "use sui::sui::SUI;",
  "use sui::event;",
  "use sui::clock::Clock;",
  "use sui::balance::Balance;",
  "use sui::table::Table;",
  "use sui::bag::Bag;",
  "use std::string::String;",
];

// --- Move scaffolding ---

function generateMoveToml(addr: string, deps: string[], edition: string, depTemplates: Record<string, DepTemplate>): string {
  const lines = [
    `[package]`,
    `name = "snippet_validate"`,
    `edition = "${edition}"`,
    ``,
    `[dependencies]`,
  ];
  for (const dep of deps) {
    const template = depTemplates[dep];
    if (template) {
      lines.push(`${dep} = { git = "${template.git}", subdir = "${template.subdir}", rev = "${template.rev}" }`);
    }
  }
  lines.push(``, `[addresses]`, `${addr} = "0x0"`);
  return lines.join("\n") + "\n";
}

function scaffoldMoveModule(
  snippet: Snippet,
  depTemplates: Record<string, DepTemplate>,
): { dir: string; skipReason?: string } {
  const moduleName = snippet.moduleName;
  if (!moduleName) return { dir: "", skipReason: "no module declaration" };

  const [addr] = moduleName.split("::");
  if (RESERVED_ADDRESSES.has(addr)) {
    return { dir: "", skipReason: `framework module (${addr}::*)` };
  }

  const dir = resolve(tmpdir(), "snippet-validate", randomUUID());
  mkdirSync(resolve(dir, "sources"), { recursive: true });

  const deps = snippet.annotation?.deps?.length
    ? snippet.annotation.deps
    : snippet.usesSuiFramework ? ["Sui"] : [];
  const edition = snippet.annotation?.edition || "2024";

  writeFileSync(resolve(dir, "Move.toml"), generateMoveToml(addr, deps, edition, depTemplates));
  writeFileSync(resolve(dir, "sources", "snippet.move"), snippet.code + "\n");

  return { dir };
}

function scaffoldMovePartial(
  snippet: Snippet,
  depTemplates: Record<string, DepTemplate>,
): { dir: string; skipReason?: string } {
  const kind = snippet.partialKind;
  if (!kind || kind === "use" || kind === "other") {
    return { dir: "", skipReason: `partial kind not wrappable (${kind || "unknown"})` };
  }

  const dir = resolve(tmpdir(), "snippet-validate", randomUUID());
  mkdirSync(resolve(dir, "sources"), { recursive: true });

  const addr = "snippet_wrapper";
  const deps = snippet.usesSuiFramework ? ["Sui"] : [];
  const edition = snippet.annotation?.edition || "2024";

  writeFileSync(resolve(dir, "Move.toml"), generateMoveToml(addr, deps, edition, depTemplates));

  // Build imports based on what the snippet references
  const code = snippet.code;
  const imports: string[] = [];
  if (snippet.usesSuiFramework) {
    // Only include imports that the snippet actually uses
    for (const imp of COMMON_SUI_IMPORTS) {
      // Extract the type/module name from the import
      const match = imp.match(/use\s+\w+::(\w+)/);
      if (match && code.includes(match[1])) {
        imports.push(`    ${imp}`);
      }
    }
    // Also include any explicit `use` lines from the snippet itself
  }

  // Extract any `use` lines from the snippet and separate them from the body
  const lines = code.split("\n");
  const useLines: string[] = [];
  const bodyLines: string[] = [];
  for (const line of lines) {
    if (line.trim().startsWith("use ")) {
      useLines.push(`    ${line.trim()}`);
    } else {
      bodyLines.push(`    ${line}`);
    }
  }

  const allImports = [...new Set([...imports, ...useLines])];

  const wrappedCode = [
    `module snippet_wrapper::wrapper {`,
    ...allImports,
    ``,
    ...bodyLines,
    `}`,
  ].join("\n");

  writeFileSync(resolve(dir, "sources", "snippet.move"), wrappedCode + "\n");

  return { dir };
}

// --- TypeScript scaffolding ---

/** Map detected npm package names to versions */
const TS_PACKAGE_VERSIONS: Record<string, string> = {
  "@mysten/sui": "latest",
  "@mysten/dapp-kit-react": "latest",
  "@mysten/dapp-kit-core": "latest",
  "@mysten/bcs": "latest",
  "@mysten/seal": "latest",
  "@mysten/enoki": "latest",
  "@mysten/deepbook-v3": "latest",
  "@mysten/wallet-standard": "latest",
  "@mysten/walrus": "latest",
  "@mysten/kiosk": "latest",
  "@mysten/suins": "latest",
};

function scaffoldTypeScriptProject(snippet: Snippet): { dir: string; skipReason?: string } {
  // Need at least some imports to know what deps to install
  const imports = snippet.detectedImports || [];

  // Filter to known packages we can install
  const depsToInstall: Record<string, string> = {};
  for (const imp of imports) {
    const version = TS_PACKAGE_VERSIONS[imp];
    if (version) {
      depsToInstall[imp] = version;
    }
  }

  // Skip if no recognizable deps and no annotation
  if (Object.keys(depsToInstall).length === 0 && !snippet.annotation?.validate) {
    return { dir: "", skipReason: "no recognizable npm imports" };
  }

  const dir = resolve(tmpdir(), "snippet-validate-ts", randomUUID());
  mkdirSync(dir, { recursive: true });

  // package.json
  const pkg = {
    name: "snippet-validate",
    type: "module",
    dependencies: depsToInstall,
    devDependencies: {
      typescript: "latest",
      "@types/node": "latest",
    },
  };
  writeFileSync(resolve(dir, "package.json"), JSON.stringify(pkg, null, 2) + "\n");

  // tsconfig.json
  const tsconfig = {
    compilerOptions: {
      target: "ES2022",
      module: "ESNext",
      moduleResolution: "nodenext",
      strict: false,
      skipLibCheck: true,
      noEmit: true,
      esModuleInterop: true,
    },
    include: ["snippet.ts"],
  };
  writeFileSync(resolve(dir, "tsconfig.json"), JSON.stringify(tsconfig, null, 2) + "\n");

  // Write snippet — wrap in async function if it uses await at top level
  let code = snippet.code;
  if (code.includes("await ") && !code.includes("async function") && !code.includes("async (")) {
    code = `async function __snippet() {\n${code}\n}`;
  }
  writeFileSync(resolve(dir, "snippet.ts"), code + "\n");

  return { dir };
}

// --- Selection ---

function shouldValidate(snippet: Snippet): { validate: boolean; kind: string; reason?: string } {
  if (snippet.annotation?.novalidate) return { validate: false, kind: "skip", reason: "novalidate annotation" };

  if (snippet.annotation?.validate) {
    if (snippet.isPseudoCode) return { validate: false, kind: "skip", reason: "annotated but contains pseudo-code (...)" };
    return { validate: true, kind: "annotated" };
  }

  if (snippet.isPseudoCode) return { validate: false, kind: "skip", reason: "pseudo-code" };

  // Move: full modules
  if (snippet.type === "move" && snippet.hasModule) {
    const [addr] = (snippet.moduleName || "").split("::");
    if (RESERVED_ADDRESSES.has(addr)) return { validate: false, kind: "skip", reason: `framework module (${addr}::*)` };
    return { validate: true, kind: "move-module" };
  }

  // Move: partials (struct, function, struct+function)
  if (snippet.type === "move" && snippet.partialKind && ["struct", "function", "struct+function"].includes(snippet.partialKind)) {
    return { validate: true, kind: "move-partial" };
  }

  // TypeScript: snippets with recognizable imports
  if (snippet.type === "typescript" && snippet.detectedImports?.some((i) => i in TS_PACKAGE_VERSIONS)) {
    if (snippet.lineCount < 3) return { validate: false, kind: "skip", reason: "too short" };
    return { validate: true, kind: "typescript" };
  }

  // Everything else
  if (snippet.type === "move") return { validate: false, kind: "skip", reason: "Move partial not wrappable" };
  if (snippet.type === "typescript") return { validate: false, kind: "skip", reason: "no recognizable imports" };
  return { validate: false, kind: "skip", reason: `${snippet.type} not supported` };
}

// --- Report ---

function generateReport(results: SnippetResult[], totalSnippets: number, durationMs: number): string {
  const lines: string[] = [];
  const validated = results.filter((r) => r.status !== "skip");
  const passed = results.filter((r) => r.status === "pass").length;
  const failed = results.filter((r) => r.status === "fail").length;

  // Count by kind
  const byKind: Record<string, { pass: number; fail: number }> = {};
  for (const r of validated) {
    if (!byKind[r.kind]) byKind[r.kind] = { pass: 0, fail: 0 };
    byKind[r.kind][r.status as "pass" | "fail"]++;
  }

  lines.push("# Snippet Validation Report");
  lines.push("");
  lines.push("| Metric | Value |");
  lines.push("|--------|-------|");
  lines.push(`| Date | ${new Date().toISOString()} |`);
  lines.push(`| Total code blocks in docs | ${totalSnippets} |`);
  lines.push(`| Snippets validated | ${validated.length} |`);
  lines.push(`| Passed | ${passed} |`);
  lines.push(`| Failed | ${failed} |`);
  lines.push(`| Duration | ${(durationMs / 1000).toFixed(0)}s |`);
  lines.push("");

  if (Object.keys(byKind).length > 0) {
    lines.push("### By kind");
    lines.push("");
    lines.push("| Kind | Pass | Fail |");
    lines.push("|------|------|------|");
    for (const [kind, counts] of Object.entries(byKind)) {
      lines.push(`| ${kind} | ${counts.pass} | ${counts.fail} |`);
    }
    lines.push("");
  }

  if (failed > 0) {
    lines.push("## Failures");
    lines.push("");
    for (const r of results.filter((r) => r.status === "fail")) {
      const slug = r.mdxFile.replace(/^docs\/content\//, "").replace(/\.mdx?$/, "");
      const label = r.moduleName || `${r.language} snippet`;
      lines.push(`### ${label} (${r.mdxFile}:${r.line})`);
      lines.push("");
      lines.push(`- **Docs page**: [${slug}](https://docs.sui.io/${slug})`);
      lines.push(`- **Kind**: ${r.kind}`);
      if (r.moduleName) lines.push(`- **Module**: \`${r.moduleName}\``);
      lines.push("");
      if (r.output) {
        lines.push("```");
        lines.push(r.output.slice(-800));
        lines.push("```");
      }
      lines.push("");
      lines.push("---");
      lines.push("");
    }
  }

  lines.push("## All Results");
  lines.push("");
  lines.push("| # | File | Line | Kind | Module/Lang | Status | Duration |");
  lines.push("|---|------|------|------|-------------|--------|----------|");
  let idx = 0;
  for (const r of validated) {
    idx++;
    const slug = r.mdxFile.replace(/^docs\/content\//, "").replace(/\.mdx?$/, "");
    const status = r.status === "pass" ? "PASS" : "**FAIL**";
    const label = r.moduleName || r.language;
    lines.push(`| ${idx} | [${slug}](https://docs.sui.io/${slug}) | L${r.line} | ${r.kind} | \`${label}\` | ${status} | ${(r.durationMs / 1000).toFixed(1)}s |`);
  }

  return lines.join("\n");
}

// --- Main ---

async function main() {
  const { manifest: manifestPath, output } = parseArgs();
  const startTime = Date.now();

  if (!existsSync(manifestPath)) {
    console.error(`Manifest not found: ${manifestPath}`);
    console.error(`Run discover-snippets.ts first.`);
    process.exit(1);
  }

  const report = JSON.parse(readFileSync(manifestPath, "utf-8"));
  const snippets: Snippet[] = report.snippets || report;
  const totalSnippets = snippets.length;

  console.log(`Loaded ${totalSnippets} snippets from manifest`);

  const depTemplates = loadDepTemplates();
  const results: SnippetResult[] = [];
  let validated = 0;

  for (const snippet of snippets) {
    const { validate, kind, reason } = shouldValidate(snippet);

    if (!validate) {
      results.push({
        mdxFile: snippet.mdxFile, line: snippet.line, language: snippet.language,
        moduleName: snippet.moduleName, lineCount: snippet.lineCount,
        kind, status: "skip", reason, durationMs: 0,
      });
      continue;
    }

    validated++;
    let dir = "";
    let skipReason: string | undefined;

    // Scaffold based on kind
    if (kind === "move-module" || kind === "annotated" && snippet.type === "move") {
      ({ dir, skipReason } = scaffoldMoveModule(snippet, depTemplates));
    } else if (kind === "move-partial") {
      ({ dir, skipReason } = scaffoldMovePartial(snippet, depTemplates));
    } else if (kind === "typescript" || kind === "annotated" && snippet.type === "typescript") {
      ({ dir, skipReason } = scaffoldTypeScriptProject(snippet));
    } else {
      skipReason = `unsupported kind: ${kind}`;
    }

    if (skipReason || !dir) {
      results.push({
        mdxFile: snippet.mdxFile, line: snippet.line, language: snippet.language,
        moduleName: snippet.moduleName, lineCount: snippet.lineCount,
        kind, status: "skip", reason: skipReason, durationMs: 0,
      });
      continue;
    }

    const label = snippet.moduleName || `${snippet.language}:L${snippet.line}`;
    console.log(`  [${validated}] ${snippet.mdxFile}:${snippet.line} — ${label} (${kind})`);

    let buildResult: { ok: boolean; output: string; durationMs: number };

    if (kind === "typescript") {
      // Install deps then type-check
      const install = run(["npm", "install", "--ignore-scripts"], dir, 60_000);
      if (!install.ok) {
        buildResult = install;
      } else {
        buildResult = run(["npx", "tsc", "--noEmit"], dir, 30_000);
      }
    } else {
      // Move: build
      buildResult = run(["sui", "move", "build"], dir, 120_000);
    }

    results.push({
      mdxFile: snippet.mdxFile, line: snippet.line, language: snippet.language,
      moduleName: snippet.moduleName, lineCount: snippet.lineCount,
      kind, status: buildResult.ok ? "pass" : "fail",
      output: buildResult.ok ? undefined : buildResult.output,
      durationMs: buildResult.durationMs,
    });

    const icon = buildResult.ok ? "PASS" : "FAIL";
    console.log(`    ${icon} (${(buildResult.durationMs / 1000).toFixed(1)}s)`);

    try { rmSync(dir, { recursive: true, force: true }); } catch {}
  }

  const totalDurationMs = Date.now() - startTime;
  const passed = results.filter((r) => r.status === "pass").length;
  const failed = results.filter((r) => r.status === "fail").length;
  const skipped = results.filter((r) => r.status === "skip").length;
  console.log(`\nDone: ${passed} passed, ${failed} failed, ${skipped} skipped (${(totalDurationMs / 1000).toFixed(0)}s)`);

  const outDir = dirname(output);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const reportMd = generateReport(results, totalSnippets, totalDurationMs);
  writeFileSync(output, reportMd);
  console.log(`Report written to ${output}`);

  const jsonOutput = output.replace(/\.md$/, ".json");
  writeFileSync(jsonOutput, JSON.stringify({
    totalSnippets,
    results: results.filter((r) => r.status !== "skip"),
    totalDurationMs,
  }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
