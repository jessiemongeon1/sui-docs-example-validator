// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 * Validates inline Move code snippets from docs by scaffolding temporary
 * Move projects and running `sui move build`.
 *
 * Targets:
 *   1. Move snippets with full module declarations (auto-detected)
 *   2. Snippets with explicit ```move validate annotation
 *
 * Skips:
 *   - Pseudo-code (contains ...)
 *   - Framework modules (module sui::*, module std::*)
 *   - Snippets with ```move novalidate annotation
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
}

interface SnippetResult {
  mdxFile: string;
  line: number;
  language: string;
  moduleName?: string;
  lineCount: number;
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

// Reserved addresses — snippets using these are documenting framework APIs, not user code
const RESERVED_ADDRESSES = new Set(["sui", "std", "sui_system", "bridge", "deepbook"]);

// --- Scaffolding ---

function scaffoldMoveProject(
  snippet: Snippet,
  depTemplates: Record<string, DepTemplate>,
): { dir: string; skipReason?: string } {
  const moduleName = snippet.moduleName;
  if (!moduleName) return { dir: "", skipReason: "no module declaration" };

  // Extract address from module name (e.g., "flash::loan" → "flash")
  const [addr] = moduleName.split("::");
  if (RESERVED_ADDRESSES.has(addr)) {
    return { dir: "", skipReason: `framework module (${addr}::*)` };
  }

  const dir = resolve(tmpdir(), "snippet-validate", randomUUID());
  mkdirSync(resolve(dir, "sources"), { recursive: true });

  // Determine dependencies
  let deps: string[] = [];
  if (snippet.annotation?.deps && snippet.annotation.deps.length > 0) {
    deps = snippet.annotation.deps;
  } else if (snippet.usesSuiFramework) {
    deps = ["Sui"];
  }

  // Generate Move.toml
  const edition = snippet.annotation?.edition || "2024";
  const tomlLines = [
    `[package]`,
    `name = "snippet_validate"`,
    `edition = "${edition}"`,
    ``,
    `[dependencies]`,
  ];
  for (const dep of deps) {
    const template = depTemplates[dep];
    if (template) {
      tomlLines.push(`${dep} = { git = "${template.git}", subdir = "${template.subdir}", rev = "${template.rev}" }`);
    }
  }
  tomlLines.push(``, `[addresses]`, `${addr} = "0x0"`);

  writeFileSync(resolve(dir, "Move.toml"), tomlLines.join("\n") + "\n");

  // Write snippet code as source file
  writeFileSync(resolve(dir, "sources", "snippet.move"), snippet.code + "\n");

  return { dir };
}

// --- Selection ---

function shouldValidate(snippet: Snippet): { validate: boolean; reason?: string } {
  // Explicit opt-out
  if (snippet.annotation?.novalidate) return { validate: false, reason: "novalidate annotation" };

  // Explicit opt-in always wins
  if (snippet.annotation?.validate) {
    if (snippet.isPseudoCode) return { validate: false, reason: "annotated but contains pseudo-code (...)" };
    return { validate: true };
  }

  // Auto-detect: Move snippets with full module declarations
  if (snippet.type !== "move") return { validate: false, reason: "not a Move snippet" };
  if (!snippet.hasModule) return { validate: false, reason: "no module declaration" };
  if (snippet.isPseudoCode) return { validate: false, reason: "pseudo-code" };

  const [addr] = (snippet.moduleName || "").split("::");
  if (RESERVED_ADDRESSES.has(addr)) return { validate: false, reason: `framework module (${addr}::*)` };

  return { validate: true };
}

// --- Report ---

function generateReport(results: SnippetResult[], totalSnippets: number, durationMs: number): string {
  const lines: string[] = [];
  const passed = results.filter((r) => r.status === "pass").length;
  const failed = results.filter((r) => r.status === "fail").length;
  const skipped = results.filter((r) => r.status === "skip").length;

  lines.push("# Snippet Validation Report");
  lines.push("");
  lines.push("| Metric | Value |");
  lines.push("|--------|-------|");
  lines.push(`| Date | ${new Date().toISOString()} |`);
  lines.push(`| Total code blocks in docs | ${totalSnippets} |`);
  lines.push(`| Snippets validated | ${passed + failed} |`);
  lines.push(`| Passed | ${passed} |`);
  lines.push(`| Failed | ${failed} |`);
  lines.push(`| Skipped | ${skipped} |`);
  lines.push(`| Duration | ${(durationMs / 1000).toFixed(0)}s |`);
  lines.push("");

  if (failed > 0) {
    lines.push("## Failures");
    lines.push("");
    for (const r of results.filter((r) => r.status === "fail")) {
      const slug = r.mdxFile.replace(/^docs\/content\//, "").replace(/\.mdx?$/, "");
      lines.push(`### ${r.moduleName || "snippet"} (${r.mdxFile}:${r.line})`);
      lines.push("");
      lines.push(`- **Docs page**: [${slug}](https://docs.sui.io/${slug})`);
      lines.push(`- **Module**: \`${r.moduleName || "unknown"}\``);
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
  lines.push("| # | File | Line | Module | Status | Duration |");
  lines.push("|---|------|------|--------|--------|----------|");
  let idx = 0;
  for (const r of results.filter((r) => r.status !== "skip")) {
    idx++;
    const slug = r.mdxFile.replace(/^docs\/content\//, "").replace(/\.mdx?$/, "");
    const status = r.status === "pass" ? "PASS" : "**FAIL**";
    lines.push(`| ${idx} | [${slug}](https://docs.sui.io/${slug}) | L${r.line} | \`${r.moduleName || "—"}\` | ${status} | ${(r.durationMs / 1000).toFixed(1)}s |`);
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
    const { validate, reason } = shouldValidate(snippet);

    if (!validate) {
      results.push({
        mdxFile: snippet.mdxFile,
        line: snippet.line,
        language: snippet.language,
        moduleName: snippet.moduleName,
        lineCount: snippet.lineCount,
        status: "skip",
        reason,
        durationMs: 0,
      });
      continue;
    }

    validated++;
    const { dir, skipReason } = scaffoldMoveProject(snippet, depTemplates);

    if (skipReason) {
      results.push({
        mdxFile: snippet.mdxFile,
        line: snippet.line,
        language: snippet.language,
        moduleName: snippet.moduleName,
        lineCount: snippet.lineCount,
        status: "skip",
        reason: skipReason,
        durationMs: 0,
      });
      continue;
    }

    console.log(`  [${validated}] ${snippet.mdxFile}:${snippet.line} — ${snippet.moduleName}`);
    const build = run(["sui", "move", "build"], dir, 120_000);

    const result: SnippetResult = {
      mdxFile: snippet.mdxFile,
      line: snippet.line,
      language: snippet.language,
      moduleName: snippet.moduleName,
      lineCount: snippet.lineCount,
      status: build.ok ? "pass" : "fail",
      output: build.ok ? undefined : build.output,
      durationMs: build.durationMs,
    };
    results.push(result);

    const icon = build.ok ? "PASS" : "FAIL";
    console.log(`    ${icon} (${(build.durationMs / 1000).toFixed(1)}s)`);

    // Clean up temp directory
    try { rmSync(dir, { recursive: true, force: true }); } catch {}
  }

  const totalDurationMs = Date.now() - startTime;
  const passed = results.filter((r) => r.status === "pass").length;
  const failed = results.filter((r) => r.status === "fail").length;
  console.log(`\nDone: ${passed} passed, ${failed} failed, ${results.length - passed - failed} skipped (${(totalDurationMs / 1000).toFixed(0)}s)`);

  // Write report
  const outDir = dirname(output);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const reportMd = generateReport(results, totalSnippets, totalDurationMs);
  writeFileSync(output, reportMd);
  console.log(`Report written to ${output}`);

  const jsonOutput = output.replace(/\.md$/, ".json");
  writeFileSync(jsonOutput, JSON.stringify({ totalSnippets, results: results.filter((r) => r.status !== "skip"), totalDurationMs }, null, 2));

  // Non-blocking — snippet validation failures don't fail CI
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
