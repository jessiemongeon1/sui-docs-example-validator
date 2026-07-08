// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/**
 * Validates a single package by running the appropriate build and test commands.
 *
 * Usage:
 *   tsx scripts/validate-package.ts --type move --root /tmp/sui/examples/move/coin
 *   tsx scripts/validate-package.ts --type rust --root /tmp/external/basic-sui-indexer
 *   tsx scripts/validate-package.ts --type typescript --root /tmp/external/ts-sdks/packages/deepbook-v3
 */

import { execSync } from "child_process";
import { existsSync, readFileSync } from "fs";
import { resolve } from "path";

interface Result {
  packageRoot: string;
  type: string;
  build: { status: "pass" | "fail" | "skip"; output?: string };
  test: { status: "pass" | "fail" | "skip"; output?: string };
}

function parseArgs(): { type: string; root: string } {
  const args = process.argv.slice(2);
  let type = "";
  let root = "";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--type" && args[i + 1]) type = args[++i];
    if (args[i] === "--root" && args[i + 1]) root = args[++i];
  }

  if (!type || !root) {
    console.error("Usage: tsx scripts/validate-package.ts --type <move|rust|typescript|static> --root <path>");
    process.exit(1);
  }

  return { type, root: resolve(root) };
}

function run(cmd: string, cwd: string, timeoutMs = 300_000): { ok: boolean; output: string } {
  try {
    const output = execSync(cmd, {
      cwd,
      timeout: timeoutMs,
      stdio: ["pipe", "pipe", "pipe"],
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
    });
    return { ok: true, output: output.slice(-2000) };
  } catch (err: any) {
    const stderr = err.stderr?.slice?.(-2000) || "";
    const stdout = err.stdout?.slice?.(-2000) || "";
    return { ok: false, output: `${stderr}\n${stdout}`.trim() };
  }
}

function detectPackageManager(root: string): "pnpm" | "npm" {
  if (existsSync(resolve(root, "pnpm-lock.yaml")) || existsSync(resolve(root, "pnpm-workspace.yaml"))) {
    return "pnpm";
  }
  return "npm";
}

function validateMove(root: string): Result {
  const result: Result = { packageRoot: root, type: "move", build: { status: "skip" }, test: { status: "skip" } };

  if (!existsSync(resolve(root, "Move.toml"))) {
    result.build = { status: "fail", output: "Move.toml not found" };
    return result;
  }

  // Build
  const build = run("sui move build", root);
  result.build = { status: build.ok ? "pass" : "fail", output: build.output };

  if (!build.ok) return result;

  // Test
  const test = run("sui move test", root);
  result.test = { status: test.ok ? "pass" : "fail", output: test.output };

  return result;
}

function validateRust(root: string): Result {
  const result: Result = { packageRoot: root, type: "rust", build: { status: "skip" }, test: { status: "skip" } };

  if (!existsSync(resolve(root, "Cargo.toml"))) {
    result.build = { status: "fail", output: "Cargo.toml not found" };
    return result;
  }

  // Build
  const build = run("cargo check", root, 600_000);
  result.build = { status: build.ok ? "pass" : "fail", output: build.output };

  if (!build.ok) return result;

  // Test
  const test = run("cargo test", root, 600_000);
  result.test = { status: test.ok ? "pass" : "fail", output: test.output };

  return result;
}

function validateTypeScript(root: string): Result {
  const result: Result = { packageRoot: root, type: "typescript", build: { status: "skip" }, test: { status: "skip" } };

  if (!existsSync(resolve(root, "package.json"))) {
    result.build = { status: "fail", output: "package.json not found" };
    return result;
  }

  const pm = detectPackageManager(root);

  // Install deps
  const install = run(`${pm} install --frozen-lockfile 2>/dev/null || ${pm} install`, root, 120_000);
  if (!install.ok) {
    result.build = { status: "fail", output: `Install failed:\n${install.output}` };
    return result;
  }

  // Type check
  const build = run("npx tsc --noEmit", root, 120_000);
  result.build = { status: build.ok ? "pass" : "fail", output: build.output };

  // Test — check if test script exists
  const pkgJson = JSON.parse(readFileSync(resolve(root, "package.json"), "utf-8"));
  if (pkgJson.scripts?.test && pkgJson.scripts.test !== 'echo "Error: no test specified" && exit 1') {
    const test = run(`${pm} test`, root, 120_000);
    result.test = { status: test.ok ? "pass" : "fail", output: test.output };
  }

  return result;
}

function validateStatic(root: string): Result {
  return {
    packageRoot: root,
    type: "static",
    build: { status: existsSync(root) ? "pass" : "fail", output: existsSync(root) ? "exists" : "path not found" },
    test: { status: "skip" },
  };
}

function main() {
  const { type, root } = parseArgs();

  console.log(`Validating ${type} package: ${root}`);

  let result: Result;
  switch (type) {
    case "move":
      result = validateMove(root);
      break;
    case "rust":
      result = validateRust(root);
      break;
    case "typescript":
      result = validateTypeScript(root);
      break;
    case "static":
      result = validateStatic(root);
      break;
    default:
      console.error(`Unknown type: ${type}`);
      process.exit(1);
  }

  // Output result as JSON
  console.log(JSON.stringify(result, null, 2));

  // Exit with error if build failed
  if (result.build.status === "fail") {
    process.exit(1);
  }
}

main();
