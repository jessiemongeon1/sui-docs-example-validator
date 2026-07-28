// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 * Discovers inline code snippets in Sui docs MDX files and cross-references
 * them against the package manifest to identify unvalidated code.
 *
 * A "snippet" is a fenced code block (```move, ```typescript, etc.) that
 * appears directly in an MDX file rather than being imported via <ImportContent>.
 *
 * Usage: tsx scripts/discover-snippets.ts --sui-repo <path> [--manifest <path>] [--output <path>]
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { glob } from "glob";

// --- Types ---

interface Snippet {
  /** MDX file containing the snippet */
  mdxFile: string;
  /** Language tag from the fenced code block */
  language: string;
  /** Normalized language category */
  type: "move" | "typescript" | "rust" | "shell" | "other";
  /** Starting line number in the MDX file */
  line: number;
  /** The snippet code content */
  code: string;
  /** Number of lines */
  lineCount: number;
  /** Whether this snippet is covered by an ImportContent-validated package */
  covered: boolean;
  /** If covered, which package covers it (fuzzy match) */
  coveredBy?: string;
  /** Whether this snippet has a full module declaration (Move) */
  hasModule: boolean;
  /** Whether this snippet appears to be pseudo-code */
  isPseudoCode: boolean;
  /** Parsed module name (e.g., "flash::loan") */
  moduleName?: string;
  /** Whether it uses Sui framework imports */
  usesSuiFramework: boolean;
  /** Validation annotation metadata, if present */
  annotation?: SnippetAnnotation;
  /** For Move partials: what kind of content ("struct", "function", "struct+function", "use", "other") */
  partialKind?: string;
  /** For TS: auto-detected package imports */
  detectedImports?: string[];
  /** Lint warnings for best-practices violations */
  lintWarnings?: string[];
}

interface SnippetAnnotation {
  validate: boolean;
  novalidate: boolean;
  deps: string[];
  edition?: string;
}

interface SnippetReport {
  totalMdxFiles: number;
  totalSnippets: number;
  byType: Record<string, number>;
  covered: number;
  uncovered: number;
  snippets: Snippet[];
}

interface PackageEntry {
  id: string;
  type: string;
  source: string;
  packageRoot: string;
  files: string[];
  referencedBy: string[];
}

// --- CLI args ---

function parseArgs() {
  const args = process.argv.slice(2);
  let suiRepo = "";
  let manifest = "manifest/packages.json";
  let output = "manifest/snippets.json";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--sui-repo" && args[i + 1]) suiRepo = args[++i];
    if (args[i] === "--manifest" && args[i + 1]) manifest = args[++i];
    if (args[i] === "--output" && args[i + 1]) output = args[++i];
  }

  if (!suiRepo) {
    console.error("Usage: tsx scripts/discover-snippets.ts --sui-repo <path> [--manifest <path>] [--output <path>]");
    process.exit(1);
  }

  return { suiRepo: resolve(suiRepo), manifest: resolve(manifest), output: resolve(output) };
}

// --- Language detection ---

/** Map fenced code block language tags to normalized types */
function normalizeLanguage(lang: string): Snippet["type"] {
  const l = lang.toLowerCase().trim();
  if (l === "move" || l === "sui-move") return "move";
  if (["ts", "typescript", "tsx", "js", "javascript", "jsx"].includes(l)) return "typescript";
  if (["rust", "rs"].includes(l)) return "rust";
  if (["bash", "sh", "shell", "zsh", "console", "terminal", ""].includes(l)) return "shell";
  return "other";
}

// --- Annotation parsing ---

/** Parse annotation metadata from a code fence's full metadata string */
function parseAnnotation(metadata: string): { language: string; annotation?: SnippetAnnotation } {
  const tokens = metadata.match(/^(\S+)\s+(.*)/);
  if (!tokens) return { language: metadata || "(none)" };

  const language = tokens[1];
  const rest = tokens[2].trim();
  if (!rest) return { language };

  const hasValidate = /\bvalidate\b/.test(rest);
  const hasNovalidate = /\bnovalidate\b/.test(rest);
  if (!hasValidate && !hasNovalidate) return { language };

  const depsMatch = rest.match(/deps="([^"]*)"/);
  const editionMatch = rest.match(/edition="([^"]*)"/);

  return {
    language,
    annotation: {
      validate: hasValidate,
      novalidate: hasNovalidate,
      deps: depsMatch ? depsMatch[1].split(",").map((d) => d.trim()) : [],
      edition: editionMatch?.[1],
    },
  };
}

// --- Snippet classification ---

function classifySnippet(snippet: Snippet): void {
  const code = snippet.code;

  // Module declaration: "module addr::name {" or "module addr::name;"
  const moduleMatch = code.match(/^\s*module\s+([\w]+::\w+)\s*[{;]/m);
  snippet.hasModule = !!moduleMatch;
  snippet.moduleName = moduleMatch?.[1];

  // Pseudo-code: contains ellipsis or placeholder comments
  snippet.isPseudoCode = /\.\.\.|\/\/\s*\.\.\.|<\.\.\.>/.test(code);

  // Sui framework usage
  snippet.usesSuiFramework = /use\s+sui::/.test(code);

  // Move partial classification
  if (snippet.type === "move" && !snippet.hasModule && !snippet.isPseudoCode) {
    const hasStruct = /\b(struct|enum)\s/.test(code);
    const hasFun = /\bfun\s/.test(code);
    const isUseOnly = code.trim().startsWith("use ");
    if (hasStruct && hasFun) snippet.partialKind = "struct+function";
    else if (hasStruct) snippet.partialKind = "struct";
    else if (hasFun) snippet.partialKind = "function";
    else if (isUseOnly) snippet.partialKind = "use";
    else snippet.partialKind = "other";
  }

  // Move edition lint checks (2024 edition best practices)
  if (snippet.type === "move" && !snippet.isPseudoCode) {
    const warnings: string[] = [];
    const lines = code.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      // struct without visibility (pre-2024 edition)
      if (/^\s*struct\s+\w+/.test(line) && !line.startsWith("public") && !line.startsWith("//")) {
        warnings.push(`L${i + 1}: struct missing 'public' visibility (2024 edition requires it)`);
      }
      // Old function-call syntax for vector/option
      if (/vector::empty\s*</.test(line)) {
        warnings.push(`L${i + 1}: use 'vector[]' instead of 'vector::empty<T>()'`);
      }
      if (/option::none\s*</.test(line)) {
        warnings.push(`L${i + 1}: use 'option::none()' method syntax`);
      }
      if (/option::some\s*\(/.test(line) && !line.includes(".some(")) {
        warnings.push(`L${i + 1}: use '.some()' method syntax instead of 'option::some()'`);
      }
      // Old string literal syntax
      if (/b"[^"]*"/.test(line) && /string::utf8\(b"/.test(line)) {
        warnings.push(`L${i + 1}: use string literal b"..." directly instead of 'string::utf8(b"...")'`);
      }
      // transfer::share_object instead of transfer::public_share_object (or vice versa in 2024)
      if (/transfer::share_object\(/.test(line)) {
        warnings.push(`L${i + 1}: use 'transfer::public_share_object' for objects with 'store'`);
      }
      if (/transfer::freeze_object\(/.test(line)) {
        warnings.push(`L${i + 1}: use 'transfer::public_freeze_object' for objects with 'store'`);
      }
      // Old tx_context pattern
      if (/&mut TxContext/.test(line) && /ctx\s*$/.test(line)) {
        // Fine, just noting for awareness
      }
    }
    if (warnings.length > 0) snippet.lintWarnings = warnings;
  }

  // TypeScript import detection
  if (snippet.type === "typescript" && !snippet.isPseudoCode) {
    const imports: string[] = [];
    for (const line of code.split("\n")) {
      const m = line.match(/(?:import|from)\s+['"]([^'"]+)['"]/);
      if (m) {
        const pkg = m[1].startsWith("@") ? m[1].split("/").slice(0, 2).join("/") : m[1].split("/")[0];
        if (!imports.includes(pkg)) imports.push(pkg);
      }
    }
    if (imports.length > 0) snippet.detectedImports = imports;
  }
}

// --- Code block extraction ---

/** Extract all fenced code blocks from MDX content */
function extractSnippets(content: string, mdxFile: string): Snippet[] {
  const snippets: Snippet[] = [];
  const lines = content.split("\n");

  let inBlock = false;
  let blockLang = "";
  let blockStart = 0;
  let blockLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inBlock) {
      // Match opening fence: ```lang metadata or ~~~lang metadata
      const openMatch = line.match(/^(`{3,}|~{3,})\s*(.*)/);
      if (openMatch && openMatch[2] !== undefined) {
        inBlock = true;
        blockLang = openMatch[2].trim();
        blockStart = i + 1; // 1-indexed
        blockLines = [];
      }
    } else {
      // Match closing fence
      if (line.match(/^(`{3,}|~{3,})\s*$/)) {
        const { language, annotation } = parseAnnotation(blockLang);
        const type = normalizeLanguage(language);
        const code = blockLines.join("\n").trim();

        // Skip empty blocks and very short ones (single-line commands)
        if (code.length > 0 && blockLines.length > 0) {
          const snippet: Snippet = {
            mdxFile,
            language,
            type,
            line: blockStart,
            code,
            lineCount: blockLines.length,
            covered: false,
            hasModule: false,
            isPseudoCode: false,
            usesSuiFramework: false,
            annotation,
          };
          classifySnippet(snippet);
          snippets.push(snippet);
        }
        inBlock = false;
        blockLang = "";
        blockLines = [];
      } else {
        blockLines.push(line);
      }
    }
  }

  return snippets;
}

// --- Coverage detection ---

/**
 * Check if a snippet's code appears in any validated source file.
 * Uses a line-sampling approach: pick distinctive lines from the snippet
 * and check if they appear in any known source file.
 */
function checkCoverage(
  snippet: Snippet,
  sourceFileContents: Map<string, { content: string; packageId: string }>,
): { covered: boolean; coveredBy?: string } {
  // Only check compilable types
  if (snippet.type === "shell" || snippet.type === "other") {
    return { covered: false };
  }

  // Skip very short snippets (< 3 lines) — too generic to match
  if (snippet.lineCount < 3) {
    return { covered: false };
  }

  // Pick up to 3 distinctive lines (skip comments, blank, short lines)
  const distinctiveLines = snippet.code
    .split("\n")
    .map((l) => l.trim())
    .filter((l) =>
      l.length > 15 &&
      !l.startsWith("//") &&
      !l.startsWith("#") &&
      !l.startsWith("*") &&
      !l.startsWith("///") &&
      l !== "{" &&
      l !== "}" &&
      l !== "};",
    );

  if (distinctiveLines.length === 0) return { covered: false };

  const sampled = distinctiveLines.slice(0, 3);

  for (const [, { content, packageId }] of sourceFileContents) {
    const allMatch = sampled.every((line) => content.includes(line));
    if (allMatch) {
      return { covered: true, coveredBy: packageId };
    }
  }

  return { covered: false };
}

/** Load source file contents for all internal packages */
function loadSourceFiles(
  suiRepo: string,
  packages: PackageEntry[],
): Map<string, { content: string; packageId: string }> {
  const files = new Map<string, { content: string; packageId: string }>();

  for (const pkg of packages) {
    if (pkg.source !== "internal") continue;

    for (const file of pkg.files) {
      const absPath = resolve(suiRepo, pkg.packageRoot, file);
      if (existsSync(absPath)) {
        try {
          const content = readFileSync(absPath, "utf-8");
          files.set(`${pkg.packageRoot}/${file}`, { content, packageId: pkg.id });
        } catch {}
      }
    }
  }

  return files;
}

// --- Main ---

async function main() {
  const { suiRepo, manifest: manifestPath, output } = parseArgs();

  console.log(`Scanning docs for inline code snippets in: ${suiRepo}/docs/content/`);

  // 1. Load existing package manifest for coverage detection
  let packages: PackageEntry[] = [];
  if (existsSync(manifestPath)) {
    packages = JSON.parse(readFileSync(manifestPath, "utf-8"));
    console.log(`Loaded ${packages.length} packages from manifest`);
  } else {
    console.log(`No manifest found at ${manifestPath} — skipping coverage detection`);
  }

  // 2. Find all MDX files
  const mdxFiles = await glob("docs/content/**/*.{mdx,md}", { cwd: suiRepo });
  console.log(`Found ${mdxFiles.length} MDX files`);

  // 3. Extract all fenced code blocks
  const allSnippets: Snippet[] = [];
  for (const file of mdxFiles) {
    const content = readFileSync(resolve(suiRepo, file), "utf-8");
    const snippets = extractSnippets(content, file);
    allSnippets.push(...snippets);
  }

  console.log(`Found ${allSnippets.length} fenced code blocks`);

  // 4. Count by type
  const byType: Record<string, number> = {};
  for (const s of allSnippets) {
    byType[s.type] = (byType[s.type] || 0) + 1;
  }
  for (const [type, count] of Object.entries(byType)) {
    console.log(`  ${type}: ${count}`);
  }

  // Classification stats
  const moveSnippets = allSnippets.filter((s) => s.type === "move");
  const withModule = moveSnippets.filter((s) => s.hasModule);
  const validatable = withModule.filter((s) => !s.isPseudoCode);
  const annotated = allSnippets.filter((s) => s.annotation?.validate);
  const withLintWarnings = moveSnippets.filter((s) => s.lintWarnings && s.lintWarnings.length > 0);
  console.log(`\nMove classification: ${moveSnippets.length} total, ${withModule.length} with module, ${validatable.length} compilable (no pseudo-code)`);
  if (withLintWarnings.length > 0) console.log(`Move lint warnings: ${withLintWarnings.length} snippets with style issues`);
  if (annotated.length > 0) console.log(`Annotated for validation: ${annotated.length}`);

  // 5. Check coverage — does each snippet appear in a validated source file?
  const compilableSnippets = allSnippets.filter(
    (s) => s.type !== "shell" && s.type !== "other",
  );
  console.log(`\nChecking coverage for ${compilableSnippets.length} compilable snippets...`);

  const sourceFiles = loadSourceFiles(suiRepo, packages);
  console.log(`Loaded ${sourceFiles.size} source files from ${packages.filter((p) => p.source === "internal").length} internal packages`);

  for (const snippet of compilableSnippets) {
    const result = checkCoverage(snippet, sourceFiles);
    snippet.covered = result.covered;
    snippet.coveredBy = result.coveredBy;
  }

  const covered = compilableSnippets.filter((s) => s.covered).length;
  const uncovered = compilableSnippets.filter((s) => !s.covered).length;
  console.log(`\nCoverage: ${covered} covered, ${uncovered} uncovered (of ${compilableSnippets.length} compilable)`);

  // 6. Write report
  const report: SnippetReport = {
    totalMdxFiles: mdxFiles.length,
    totalSnippets: allSnippets.length,
    byType,
    covered,
    uncovered,
    snippets: allSnippets,
  };

  const outDir = dirname(output);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  writeFileSync(output, JSON.stringify(report, null, 2));
  console.log(`\nReport written to ${output}`);

  // 7. Print uncovered compilable snippets
  const uncoveredSnippets = compilableSnippets.filter((s) => !s.covered);
  if (uncoveredSnippets.length > 0) {
    console.log(`\n--- Uncovered compilable snippets ---\n`);

    // Group by MDX file
    const byFile = new Map<string, Snippet[]>();
    for (const s of uncoveredSnippets) {
      const existing = byFile.get(s.mdxFile) || [];
      existing.push(s);
      byFile.set(s.mdxFile, existing);
    }

    for (const [file, snippets] of byFile) {
      console.log(`${file}:`);
      for (const s of snippets) {
        const preview = s.code.split("\n")[0].slice(0, 80);
        console.log(`  L${s.line} (${s.language}, ${s.lineCount} lines): ${preview}`);
      }
    }
  }

  // 8. Summary markdown
  const mdLines: string[] = [];
  mdLines.push("# Snippet Coverage Report");
  mdLines.push("");
  mdLines.push("| Metric | Value |");
  mdLines.push("|--------|-------|");
  mdLines.push(`| MDX files scanned | ${mdxFiles.length} |`);
  mdLines.push(`| Total code blocks | ${allSnippets.length} |`);
  mdLines.push(`| Compilable (Move/TS/Rust) | ${compilableSnippets.length} |`);
  mdLines.push(`| Covered by validated packages | ${covered} |`);
  mdLines.push(`| Uncovered | ${uncovered} |`);
  mdLines.push(`| Shell/config blocks (skipped) | ${allSnippets.length - compilableSnippets.length} |`);
  mdLines.push("");

  if (uncoveredSnippets.length > 0) {
    mdLines.push("## Uncovered Snippets");
    mdLines.push("");
    mdLines.push("| # | File | Line | Language | Lines | Preview |");
    mdLines.push("|---|------|------|----------|-------|---------|");
    for (let i = 0; i < uncoveredSnippets.length; i++) {
      const s = uncoveredSnippets[i];
      const slug = s.mdxFile.replace(/^docs\/content\//, "").replace(/\.mdx?$/, "");
      const preview = s.code.split("\n")[0].slice(0, 60).replace(/\|/g, "\\|");
      mdLines.push(`| ${i + 1} | [${slug}](https://docs.sui.io/${slug}) | L${s.line} | ${s.language} | ${s.lineCount} | \`${preview}\` |`);
    }
    mdLines.push("");
  }

  if (covered > 0) {
    mdLines.push("## Covered Snippets");
    mdLines.push("");
    const coveredSnippets = compilableSnippets.filter((s) => s.covered);
    mdLines.push("| # | File | Line | Language | Covered By |");
    mdLines.push("|---|------|------|----------|------------|");
    for (let i = 0; i < coveredSnippets.length; i++) {
      const s = coveredSnippets[i];
      const slug = s.mdxFile.replace(/^docs\/content\//, "").replace(/\.mdx?$/, "");
      mdLines.push(`| ${i + 1} | [${slug}](https://docs.sui.io/${slug}) | L${s.line} | ${s.language} | ${s.coveredBy} |`);
    }
  }

  // Lint warnings section
  if (withLintWarnings.length > 0) {
    mdLines.push("");
    mdLines.push("## Move Lint Warnings");
    mdLines.push("");
    mdLines.push("Snippets with Move 2024 edition style issues:");
    mdLines.push("");
    mdLines.push("| # | File | Line | Warnings |");
    mdLines.push("|---|------|------|----------|");
    for (let i = 0; i < withLintWarnings.length; i++) {
      const s = withLintWarnings[i];
      const slug = s.mdxFile.replace(/^docs\/content\//, "").replace(/\.mdx?$/, "");
      const warnings = s.lintWarnings!.map((w) => w.replace(/\|/g, "\\|")).join("; ");
      mdLines.push(`| ${i + 1} | [${slug}](https://docs.sui.io/${slug}) | L${s.line} | ${warnings} |`);
    }
  }

  const mdOutput = output.replace(/\.json$/, ".md");
  writeFileSync(mdOutput, mdLines.join("\n"));
  console.log(`Markdown report written to ${mdOutput}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
