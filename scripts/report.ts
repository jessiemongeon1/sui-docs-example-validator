// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 * Generates a GitHub Actions job summary from validation results.
 *
 * Usage: tsx scripts/report.ts --results <dir>
 *
 * Reads all *.json result files from the results directory and produces
 * a markdown summary written to stdout (pipe to $GITHUB_STEP_SUMMARY).
 */

import { readFileSync, readdirSync, existsSync } from "fs";
import { resolve } from "path";

interface ValidationResult {
  packageRoot: string;
  type: string;
  build: { status: string; output?: string };
  test: { status: string; output?: string };
}

function parseArgs(): { results: string } {
  const args = process.argv.slice(2);
  let results = "results";
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--results" && args[i + 1]) results = args[++i];
  }
  return { results: resolve(results) };
}

function main() {
  const { results: resultsDir } = parseArgs();

  const allResults: ValidationResult[] = [];

  if (existsSync(resultsDir)) {
    const files = readdirSync(resultsDir).filter((f) => f.endsWith(".json"));
    for (const file of files) {
      try {
        const content = readFileSync(resolve(resultsDir, file), "utf-8");
        const result = JSON.parse(content);
        if (Array.isArray(result)) {
          allResults.push(...result);
        } else {
          allResults.push(result);
        }
      } catch {
        // Skip malformed files
      }
    }
  }

  const passed = allResults.filter((r) => r.build.status === "pass");
  const failed = allResults.filter((r) => r.build.status === "fail");
  const skipped = allResults.filter((r) => r.build.status === "skip");

  const lines: string[] = [];
  lines.push("# Docs Example Validation Report");
  lines.push("");
  lines.push(`**Date**: ${new Date().toISOString().split("T")[0]}`);
  lines.push(`**Total packages**: ${allResults.length}`);
  lines.push(`**Passed**: ${passed.length} | **Failed**: ${failed.length} | **Skipped**: ${skipped.length}`);
  lines.push("");

  if (failed.length > 0) {
    lines.push("## Failures");
    lines.push("");
    for (const r of failed) {
      lines.push(`### ${r.packageRoot} (${r.type})`);
      lines.push("");
      if (r.build.output) {
        const truncated = r.build.output.slice(-500);
        lines.push("```");
        lines.push(truncated);
        lines.push("```");
      }
      lines.push("");
    }
  }

  if (allResults.length > 0) {
    lines.push("## All Results");
    lines.push("");
    lines.push("| Package | Type | Build | Test |");
    lines.push("|---------|------|-------|------|");
    for (const r of allResults) {
      const buildIcon = r.build.status === "pass" ? "PASS" : r.build.status === "fail" ? "FAIL" : "SKIP";
      const testIcon = r.test.status === "pass" ? "PASS" : r.test.status === "fail" ? "FAIL" : "SKIP";
      const shortName = r.packageRoot.length > 60 ? "..." + r.packageRoot.slice(-57) : r.packageRoot;
      lines.push(`| ${shortName} | ${r.type} | ${buildIcon} | ${testIcon} |`);
    }
  }

  console.log(lines.join("\n"));
}

main();
