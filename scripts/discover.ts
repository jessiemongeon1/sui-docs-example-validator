// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 * Scrapes all <ImportContent> tags from Sui docs MDX files and produces
 * a manifest of packages that need validation.
 *
 * Usage: tsx scripts/discover.ts --sui-repo <path> [--output <dir>]
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname, extname } from "path";
import { glob } from "glob";

// --- Types ---

interface ImportTag {
  source: string;
  mode: string;
  org?: string;
  repo?: string;
  branch?: string;
  mdxFile: string;
}

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

// --- CLI args ---

function parseArgs(): { suiRepo: string; output: string } {
  const args = process.argv.slice(2);
  let suiRepo = "";
  let output = "manifest";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--sui-repo" && args[i + 1]) suiRepo = args[++i];
    if (args[i] === "--output" && args[i + 1]) output = args[++i];
  }

  if (!suiRepo) {
    console.error("Usage: tsx scripts/discover.ts --sui-repo <path> [--output <dir>]");
    process.exit(1);
  }

  return { suiRepo: resolve(suiRepo), output: resolve(output) };
}

// --- Snippet names to ignore (not real files) ---

const SNIPPET_PATTERN = /^[a-z0-9-]+$/; // e.g., "info-gas-budget", "quick-install"

function isSnippet(source: string): boolean {
  return SNIPPET_PATTERN.test(source) || !source.includes("/");
}

// --- Parse ImportContent tags from MDX ---

function parseImportTags(content: string, mdxFile: string): ImportTag[] {
  const tags: ImportTag[] = [];

  // Match <ImportContent ... /> across multiple lines
  const tagRegex = /<ImportContent\b([\s\S]*?)\/>/g;
  let match: RegExpExecArray | null;

  while ((match = tagRegex.exec(content)) !== null) {
    const attrs = match[1];

    const source = extractAttr(attrs, "source");
    const mode = extractAttr(attrs, "mode") || "code";

    if (!source || mode === "snippet" || isSnippet(source)) continue;

    tags.push({
      source: source.replace(/^\/+/, ""),
      mode,
      org: extractAttr(attrs, "org"),
      repo: extractAttr(attrs, "repo"),
      branch: extractAttr(attrs, "branch") || undefined,
      mdxFile,
    });
  }

  return tags;
}

function extractAttr(attrs: string, name: string): string | undefined {
  const regex = new RegExp(`${name}\\s*=\\s*"([^"]*)"`, "i");
  const match = attrs.match(regex);
  return match?.[1] || undefined;
}

// --- Determine package type from file extension ---

function getFileType(filePath: string): PackageEntry["type"] {
  const ext = extname(filePath).toLowerCase();
  switch (ext) {
    case ".move":
      return "move";
    case ".rs":
      return "rust";
    case ".ts":
    case ".tsx":
    case ".js":
    case ".jsx":
      return "typescript";
    case ".toml":
    case ".json":
    case ".yaml":
    case ".yml":
    case ".sql":
    case ".md":
    case ".mdx":
    case ".lock":
      return "static";
    default:
      return "unknown";
  }
}

// --- Find package root by walking upward ---

function findPackageRoot(
  filePath: string,
  baseDir: string,
): { root: string; type: PackageEntry["type"] } | null {
  const absFile = resolve(baseDir, filePath);
  let dir = dirname(absFile);
  const stopAt = resolve(baseDir);

  while (dir.length >= stopAt.length) {
    if (existsSync(resolve(dir, "Move.toml"))) {
      return { root: dir.slice(stopAt.length + 1), type: "move" };
    }
    if (existsSync(resolve(dir, "Cargo.toml"))) {
      // Check if this is a workspace root (has [workspace]) — if so, keep walking down
      const cargoContent = readFileSync(resolve(dir, "Cargo.toml"), "utf-8");
      if (!cargoContent.includes("[workspace]")) {
        return { root: dir.slice(stopAt.length + 1), type: "rust" };
      }
    }
    if (existsSync(resolve(dir, "package.json"))) {
      return { root: dir.slice(stopAt.length + 1), type: "typescript" };
    }
    dir = dirname(dir);
  }

  return null;
}

// --- Main ---

async function main() {
  const { suiRepo, output } = parseArgs();

  console.log(`Scanning docs in: ${suiRepo}/docs/content/`);

  // 1. Find all MDX files
  const mdxFiles = await glob("docs/content/**/*.{mdx,md}", { cwd: suiRepo });
  console.log(`Found ${mdxFiles.length} MDX files`);

  // 2. Parse all ImportContent tags
  const allTags: ImportTag[] = [];
  for (const file of mdxFiles) {
    const content = readFileSync(resolve(suiRepo, file), "utf-8");
    const tags = parseImportTags(content, file);
    allTags.push(...tags);
  }
  console.log(`Found ${allTags.length} ImportContent code references`);

  // 3. Separate internal vs external
  const internalTags = allTags.filter((t) => !t.org && !t.repo);
  const externalTags = allTags.filter((t) => t.org && t.repo);
  console.log(`  Internal: ${internalTags.length}, External: ${externalTags.length}`);

  // 4. Load skip list
  const skipConfig = JSON.parse(
    readFileSync(resolve(import.meta.dirname!, "../config/skip.json"), "utf-8"),
  );
  const skipPatterns: string[] = skipConfig.skip.map((s: { pattern: string }) => s.pattern);

  function shouldSkip(path: string): boolean {
    return skipPatterns.some((p) => path.startsWith(p));
  }

  // 5. Group internal tags by package root
  const internalPackages = new Map<string, PackageEntry>();

  for (const tag of internalTags) {
    if (shouldSkip(tag.source)) continue;

    const fileType = getFileType(tag.source);
    if (fileType === "static" || fileType === "unknown") continue;

    const pkg = findPackageRoot(tag.source, suiRepo);
    if (!pkg) {
      console.warn(`  WARN: No package root found for internal file: ${tag.source}`);
      continue;
    }

    const id = pkg.root;
    if (shouldSkip(id)) continue;

    if (!internalPackages.has(id)) {
      internalPackages.set(id, {
        id,
        type: pkg.type,
        source: "internal",
        packageRoot: pkg.root,
        files: [],
        referencedBy: [],
      });
    }

    const entry = internalPackages.get(id)!;
    const relFile = tag.source.slice(pkg.root.length + 1);
    if (!entry.files.includes(relFile)) entry.files.push(relFile);
    if (!entry.referencedBy.includes(tag.mdxFile)) entry.referencedBy.push(tag.mdxFile);
  }

  // 6. Group external tags by org/repo/branch/packageRoot
  const externalPackages = new Map<string, PackageEntry>();

  for (const tag of externalTags) {
    const branch = tag.branch || "main";
    const fileType = getFileType(tag.source);

    // For external, we can't walk the filesystem to find the package root.
    // Instead, infer from the file path structure.
    const packageRoot = inferExternalPackageRoot(tag.source, fileType);
    const id = `${tag.org}/${tag.repo}@${branch}/${packageRoot}`;

    if (!externalPackages.has(id)) {
      externalPackages.set(id, {
        id,
        type: fileType === "static" || fileType === "unknown" ? "unknown" : fileType,
        source: "external",
        org: tag.org,
        repo: tag.repo,
        branch,
        packageRoot,
        files: [],
        referencedBy: [],
      });
    }

    const entry = externalPackages.get(id)!;
    const relFile = tag.source.replace(/^\/+/, "");
    if (!entry.files.includes(relFile)) entry.files.push(relFile);
    if (!entry.referencedBy.includes(tag.mdxFile)) entry.referencedBy.push(tag.mdxFile);
  }

  // 7. Write manifest
  if (!existsSync(output)) mkdirSync(output, { recursive: true });

  const packages = [
    ...Array.from(internalPackages.values()),
    ...Array.from(externalPackages.values()),
  ];

  writeFileSync(resolve(output, "packages.json"), JSON.stringify(packages, null, 2));

  // 8. Summary
  const moveCount = packages.filter((p) => p.type === "move").length;
  const rustCount = packages.filter((p) => p.type === "rust").length;
  const tsCount = packages.filter((p) => p.type === "typescript").length;
  const otherCount = packages.filter((p) => p.type !== "move" && p.type !== "rust" && p.type !== "typescript").length;

  console.log(`\nManifest written to ${resolve(output, "packages.json")}`);
  console.log(`  ${packages.length} packages total:`);
  console.log(`    Move: ${moveCount}`);
  console.log(`    Rust: ${rustCount}`);
  console.log(`    TypeScript: ${tsCount}`);
  console.log(`    Other/Unknown: ${otherCount}`);
}

/**
 * Infer the package root from an external file path.
 * Heuristic: look for common patterns like /sources/ (Move), /src/ (Rust/TS).
 */
function inferExternalPackageRoot(filePath: string, fileType: string): string {
  const clean = filePath.replace(/^\/+/, "");
  const parts = clean.split("/");

  if (fileType === "move") {
    // Move files are typically at <pkg>/sources/foo.move
    const srcIdx = parts.indexOf("sources");
    if (srcIdx > 0) return parts.slice(0, srcIdx).join("/");
  }

  if (fileType === "rust") {
    // Rust files are at <crate>/src/foo.rs
    const srcIdx = parts.indexOf("src");
    if (srcIdx > 0) return parts.slice(0, srcIdx).join("/");
  }

  if (fileType === "typescript") {
    // TS files — walk back to find a likely package boundary
    // Look for common dirs: src, hooks, components, utils, lib, test
    const srcDirs = ["src", "hooks", "components", "utils", "lib", "test", "tests"];
    for (let i = parts.length - 2; i >= 0; i--) {
      if (srcDirs.includes(parts[i])) {
        return parts.slice(0, i).join("/");
      }
    }
  }

  // Fallback: use the first directory
  return parts.length > 1 ? parts[0] : clean;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
