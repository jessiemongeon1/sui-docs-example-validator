# Sui Docs Example Validator

CI pipeline that validates every code example referenced in [Sui documentation](https://docs.sui.io). It discovers Move, TypeScript, and Rust packages embedded in docs via `<ImportContent>` tags, builds them against the latest Sui toolchain, and produces a pass/fail report.

## How it works

```
Sui docs MDX files
  │  <ImportContent> tags point to source files
  ▼
discover.ts ──► manifest/packages.json
                  │  catalog of packages to validate
                  ▼
              validate-all.ts
                  │  clone external repos, build each package
                  ▼
              reports/latest.md + reports/latest.json
```

1. **Discover** (`scripts/discover.ts`) scans every MDX file in the Sui repo's `docs/content/` directory for `<ImportContent>` tags. Each tag references a source file — the script walks up from that file to find the nearest `Move.toml`, `package.json`, or `Cargo.toml` and records the package. Output: `manifest/packages.json`.

2. **Validate** (`scripts/validate-all.ts`) iterates over the manifest. For each package it:
   - Clones external repos (if not already cached) from the allowlist
   - Detects the package manager (bun, pnpm, npm) from lockfiles
   - Runs the appropriate build command:
     - **Move**: `sui move build`
     - **TypeScript**: `{pm} install` then `{pm} run build` (or `tsc --noEmit` if no build script)
     - **Rust**: `cargo check`
   - Records pass/fail, duration, and error output

3. **Report** — results are written to `reports/latest.md` (human-readable) and `reports/latest.json` (machine-readable), plus a dated snapshot like `reports/report-2026-07-27.md`. The report includes a summary table, tool versions, detailed failure analysis, and per-package results.

## Workflows

### `validate.yml` — Main validation pipeline

Runs the full discover-validate-report cycle.

| Trigger | Details |
|---------|---------|
| **Scheduled** | Every Monday at 6:00 UTC |
| **Manual** (`workflow_dispatch`) | Inputs: `sui_branch` (default `main`), `mode` (`strict` or `compat`) |
| **Called** (`workflow_call`) | Inputs: `sui_ref` (branch/tag/SHA), `mode` |

The workflow installs the full toolchain (Sui CLI, MVR, Node 22, pnpm, bun, Rust), clones the Sui repo at the specified ref, discovers examples, validates them, and commits the report back to `reports/`.

### `check-sui-releases.yml` — Release-triggered validation

Polls the [MystenLabs/sui releases](https://github.com/MystenLabs/sui/releases) every 6 hours. When a new `testnet-*` release appears, it dispatches `validate.yml` with that release tag and updates `.github/last-validated-release.txt` as a marker.

This ensures examples are validated against each Sui testnet release, not just `main`.

## Validation modes

| Mode | Behavior |
|------|----------|
| **`strict`** (default) | Validates examples as-authored. Honors lockfiles (`--frozen-lockfile` / `npm ci`). No source patching. Build failures are real failures. |
| **`compat`** | Patches known issues before building — adds missing `[dependencies]` sections, fixes Move editions (`2024.beta` → `2024`), retries installs without lockfile constraints. Useful for probing SDK compatibility. |

## Adding new examples

New examples are pulled in automatically when an `<ImportContent>` tag is added to any MDX file in the Sui docs. The `discover.ts` script picks it up on the next run.

For **internal examples** (inside the `MystenLabs/sui` repo), no additional configuration is needed.

For **external examples** (other GitHub repos), the repo must be added to the allowlist:

1. Add an entry to `config/allowed-repos.json`:
   ```json
   { "org": "MystenLabs", "repo": "my-example-repo" }
   ```
2. The discover script will find the `<ImportContent>` tags, and the validator will clone and build the repo.

## Configuration

### `config/allowed-repos.json`

Security allowlist of external GitHub repos. Only repos listed here will be cloned and have their code executed in CI. All entries are currently under the `MystenLabs` org.

### `config/skip.json`

Packages to skip during validation, with reasons. Used for:
- Sui workspace crates already validated by Sui's own CI
- Heavy Rust crates that exceed CI timeout (e.g., full indexer framework builds)
- Upstream dependencies with known broken pins
- Dummy example paths from the docs style guide

Example:
```json
{ "pattern": "crates/sui-framework", "reason": "sui workspace crate — validated by sui CI" }
```

The `pattern` field is matched against the package ID — any package whose ID contains the pattern string is skipped.

## CI environment

The validation workflow installs:

| Tool | Source |
|------|--------|
| Sui CLI | `suiup install sui` |
| MVR | `suiup install mvr` |
| Node.js 22 | `actions/setup-node` |
| pnpm | `npm install -g pnpm` |
| Bun | `npm install -g bun` |
| Rust (stable) | `dtolnay/rust-toolchain` |

### pnpm build-script approval

pnpm v11 blocks postinstall scripts by default. The validator writes `only-built-dependencies[]=*` to `.npmrc` before running `pnpm install` so that native dependencies (esbuild, swc, sharp, etc.) build correctly in CI.

### Package manager detection

The validator auto-detects the package manager by walking up from the package directory:

1. `bun.lock` / `bun.lockb` → **bun**
2. `pnpm-lock.yaml` / `pnpm-workspace.yaml` → **pnpm**
3. `"workspace:"` protocol in `package.json` → **pnpm**
4. Fallback → **npm**

## Report format

Each report includes:

- **Summary** — total packages, pass/fail/skip counts, duration
- **Tool versions** — exact versions of Sui CLI, Node, pnpm, Rust, etc.
- **Failures section** — each failure categorized (e.g., "Stale lockfile", "Move compilation error", "pnpm build scripts not approved") with the error output, affected docs pages, and dependency versions
- **Results table** — every package with status, duration, and file count
- **Detailed results** — collapsible per-package output

Reports are committed to `reports/` by the `save-report` job. `reports/latest.md` always points to the most recent run.

## Local development

```bash
# Install dependencies
npm install

# Discover examples (requires a local clone of MystenLabs/sui)
npm run discover -- --sui-repo /path/to/sui --output manifest/

# Validate all examples
npm run validate-all -- --sui-repo /path/to/sui --manifest manifest/packages.json --output results/report.md --mode strict

# Validate a single package
npm run validate -- --type move --root /path/to/package
```

## Project structure

```
.github/
  workflows/
    validate.yml              # Main validation pipeline
    check-sui-releases.yml    # Release-triggered validation
  last-validated-release.txt  # Marker for last checked Sui release
config/
  allowed-repos.json          # External repo allowlist
  skip.json                   # Packages to skip
manifest/
  packages.json               # Discovered package catalog
reports/
  latest.md                   # Most recent report (markdown)
  latest.json                 # Most recent report (JSON)
  report-YYYY-MM-DD.md        # Dated snapshots
scripts/
  discover.ts                 # Scan docs for ImportContent tags
  validate-all.ts             # Validate all packages and generate report
  validate-package.ts         # Validate a single package
  build-matrix.ts             # Generate GitHub Actions matrix
  report.ts                   # Legacy report generator
```
