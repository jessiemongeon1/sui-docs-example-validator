// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 * Reads the manifest from discover.ts and produces a GitHub Actions matrix
 * JSON suitable for `fromJson()` in a workflow.
 *
 * Usage: tsx scripts/build-matrix.ts --manifest <dir>
 * Output: writes matrix JSON to stdout (for `$GITHUB_OUTPUT`)
 */

import { readFileSync } from "fs";
import { resolve } from "path";

interface PackageEntry {
  id: string;
  type: string;
  source: string;
  org?: string;
  repo?: string;
  branch?: string;
  packageRoot: string;
  files: string[];
  referencedBy: string[];
}

function parseArgs(): { manifest: string } {
  const args = process.argv.slice(2);
  let manifest = "manifest";
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--manifest" && args[i + 1]) manifest = args[++i];
  }
  return { manifest: resolve(manifest) };
}

function main() {
  const { manifest } = parseArgs();
  const packages: PackageEntry[] = JSON.parse(
    readFileSync(resolve(manifest, "packages.json"), "utf-8"),
  );

  // Internal Move packages
  const internalMove = packages
    .filter((p) => p.source === "internal" && p.type === "move")
    .map((p) => ({ package_root: p.packageRoot, id: p.id }));

  // Internal Rust packages (standalone examples only — workspace crates are already skipped)
  const internalRust = packages
    .filter((p) => p.source === "internal" && p.type === "rust")
    .map((p) => ({ package_root: p.packageRoot, id: p.id }));

  // Internal TypeScript packages
  const internalTs = packages
    .filter((p) => p.source === "internal" && p.type === "typescript")
    .map((p) => ({ package_root: p.packageRoot, id: p.id }));

  // External packages — grouped by org/repo/branch
  const externalByRepo = new Map<string, PackageEntry[]>();
  for (const p of packages.filter((p) => p.source === "external")) {
    const key = `${p.org}/${p.repo}@${p.branch}`;
    if (!externalByRepo.has(key)) externalByRepo.set(key, []);
    externalByRepo.get(key)!.push(p);
  }

  const external = Array.from(externalByRepo.entries()).map(([key, pkgs]) => {
    const first = pkgs[0];
    return {
      id: key,
      org: first.org,
      repo: first.repo,
      branch: first.branch,
      packages: pkgs.map((p) => ({
        package_root: p.packageRoot,
        package_type: p.type,
      })),
    };
  });

  const matrix = {
    internal_move: { include: internalMove },
    internal_rust: { include: internalRust },
    internal_ts: { include: internalTs },
    external: { include: external },
  };

  // Write to stdout for GH Actions
  const json = JSON.stringify(matrix);
  console.log(json);

  // Also write summary to stderr
  console.error(`Matrix built:`);
  console.error(`  Internal Move: ${internalMove.length} packages`);
  console.error(`  Internal Rust: ${internalRust.length} packages`);
  console.error(`  Internal TS: ${internalTs.length} packages`);
  console.error(`  External repos: ${external.length} repos`);
}

main();
