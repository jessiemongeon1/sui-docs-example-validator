# Sui Docs Example Validation Report

## Summary

| Metric | Value |
|--------|-------|
| Date | 2026-07-10T20:58:03.358Z |
| Total packages validated | 69 |
| Passed | 67 |
| Failed | 2 |
| Skipped | 0 |
| Total duration | 967s |

## Tool Versions

| Tool | Version |
|------|---------|
| Sui CLI | sui 1.75.1-623521008f1c |
| MVR | mvr 0.1.0-d85f8ad92add |
| Node.js | v20.20.2 |
| npm | 10.8.2 |
| pnpm | 10.34.5 |
| Rust (rustc) | rustc 1.97.0 (2d8144b78 2026-07-07) |
| Cargo | cargo 1.97.0 (c980f4866 2026-06-30) |
| tsx | tsx v4.23.0
node v20.20.2 |

## Failures

### MystenLabs/sagat@main/api

- **Failure category**: Dependency installation failed
- **Type**: typescript
- **Origin**: MystenLabs/sagat@main
- **Package root**: `api`
- **Key dependencies**: `@mysten/sagat: workspace:*`, `@mysten/sui: ^2.16.0`
- **Files referenced**: `api/test/addresses.test.ts`, `api/test/multisig-api.test.ts`, `api/test/multisig.test.ts`, `api/test/proposal-business-logic.test.ts`
- **Referenced by docs pages**:
  - [sui-stack/sagat](https://docs.sui.io/sui-stack/sagat) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/sagat.mdx))

**Steps:**

- `npm install` — **FAIL** (9.2s)

  <details><summary>Error output</summary>

  ```
  npm error code EUNSUPPORTEDPROTOCOL
  npm error Unsupported URL Type "workspace:": workspace:*
  npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-07-10T20_43_55_616Z-debug-0.log
  ```

  </details>

---

### MystenLabs/Nautilus@main/src

- **Failure category**: Missing Move dependency
- **Type**: unknown
- **Origin**: MystenLabs/Nautilus@main
- **Package root**: `src`
- **Files referenced**: `src/nautilus-server/src/apps/seal-example/seal_config.yaml`, `src/nautilus-server/src/apps/seal-example/endpoints.rs`
- **Referenced by docs pages**:
  - [sui-stack/nautilus/seal](https://docs.sui.io/sui-stack/nautilus/seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/nautilus/seal.mdx))

**Steps:**

- `cargo check` — **FAIL** (52.2s)

  <details><summary>Error output</summary>

  ```
  king[0m axum v0.7.9
  [1m[32m    Checking[0m uuid v1.18.1
  [1m[32m    Checking[0m tower-http v0.6.6
  [1m[32m   Compiling[0m serde_repr v0.1.20
  [1m[32m    Checking[0m nautilus-server v0.1.0 (/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--Nautilus--main/src/nautilus-server)
  [0m[1m[38;5;9merror[E0432][0m[0m[1m: unresolved import `nautilus_server::app::process_data`[0m
  [0m [0m[0m[1m[38;5;12m--> [0m[0msrc/main.rs:7:5[0m
  [0m  [0m[0m[1m[38;5;12m|[0m
  [0m[1m[38;5;12m7[0m[0m [0m[0m[1m[38;5;12m|[0m[0m [0m[0muse nautilus_server::app::process_data;[0m
  [0m  [0m[0m[1m[38;5;12m|[0m[0m     [0m[0m[1m[38;5;9m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m[0m [0m[0m[1m[38;5;9mno `process_data` in `app`[0m
  
  [0m[1mFor more information about this error, try `rustc --explain E0432`.[0m
  [1m[31merror[0m[1m:[0m could not compile `nautilus-server` (bin "nautilus-server") due to 1 previous error
  ```

  </details>

---

## All Results

| # | Package | Type | Origin | Build | Test | Duration | Files |
|---|---------|------|--------|-------|------|----------|-------|
| 1 | examples/tic-tac-toe/move | move | MystenLabs/sui (internal) | PASS | FAIL | 7.5s | 1 |
| 2 | examples/move/dynamic_fields | move | MystenLabs/sui (internal) | PASS | FAIL | 6.3s | 1 |
| 3 | examples/move/nft | move | MystenLabs/sui (internal) | PASS | PASS | 5.4s | 1 |
| 4 | examples/move/random/random_nft | move | MystenLabs/sui (internal) | PASS | FAIL | 5.8s | 1 |
| 5 | examples/move/basics | move | MystenLabs/sui (internal) | PASS | FAIL | 5.6s | 2 |
| 6 | examples/move/hero | move | MystenLabs/sui (internal) | PASS | FAIL | 6.9s | 1 |
| 7 | examples/vesting | move | MystenLabs/sui (internal) | PASS | FAIL | 7.2s | 6 |
| 8 | examples/move/coin | move | MystenLabs/sui (internal) | PASS | PASS | 5.2s | 3 |
| 9 | examples/regulated-coin/move | move | MystenLabs/sui (internal) | PASS | PASS | 5.3s | 1 |
| 10 | examples/regulated-coin/ts-client | typescript | MystenLabs/sui (internal) | FAIL | SKIP | 13.9s | 1 |
| 11 | examples/move/nft-soulbound | move | MystenLabs/sui (internal) | PASS | PASS | 5.4s | 1 |
| 12 | examples/move/nft-rental | move | MystenLabs/sui (internal) | PASS | FAIL | 21.5s | 1 |
| 13 | examples/move/token | move | MystenLabs/sui (internal) | PASS | FAIL | 8.2s | 1 |
| 14 | examples/trading/contracts/escrow | move | MystenLabs/sui (internal) | PASS | FAIL | 6.9s | 3 |
| 15 | examples/move/color_object | move | MystenLabs/sui (internal) | PASS | FAIL | 6.4s | 1 |
| 16 | MystenLabs/sagat@main/api | typescript | MystenLabs/sagat@main | N/A | N/A | 9.2s | 4 |
| 17 | MystenLabs/sui-move-bootcamp@solution/K2/src | typescript | .../sui-move-bootcamp@solution | FAIL | SKIP | 11.6s | 5 |
| 18 | MystenLabs/sui-move-bootcamp@solution/K2 | typescript | .../sui-move-bootcamp@solution | FAIL | SKIP | 7.9s | 1 |
| 19 | MystenLabs/onlyfins-example-app@main/frontend | typescript | ...s/onlyfins-example-app@main | PASS | SKIP | 37.3s | 1 |
| 20 | ...07-Walrus-SDK-upload-relay/hands-on-source-code | typescript | ...Labs/Walrus-Onboarding@main | PASS | FAIL | 24.5s | 2 |
| 21 | MystenLabs/onlyfins-example-app@main/backend | typescript | ...s/onlyfins-example-app@main | PASS | SKIP | 3.0s | 3 |
| 22 | MystenLabs/walrus-pocs@main/sdk | typescript | MystenLabs/walrus-pocs@main | PASS | SKIP | 5.9s | 3 |
| 23 | MystenLabs/Walrus-Onboarding@main/11-Batch-storage | typescript | ...Labs/Walrus-Onboarding@main | PASS | SKIP | 5.8s | 2 |
| 24 | MystenLabs/onlyfins-example-app@main/frontend/src | typescript | ...s/onlyfins-example-app@main | PASS | SKIP | 10.5s | 6 |
| 25 | MystenLabs/ts-sdks@main/packages | typescript | MystenLabs/ts-sdks@main | FAIL | FAIL | 24.8s | 1 |
| 26 | MystenLabs/walrus-sites@main/examples | unknown | MystenLabs/walrus-sites@main | PASS | N/A | 0.0s | 1 |
| 27 | MystenLabs/messaging-sdk-example@main/frontend/src | typescript | .../messaging-sdk-example@main | PASS | SKIP | 23.4s | 1 |
| 28 | MystenLabs/onlyfins-example-app@main/frontend/move | move | ...s/onlyfins-example-app@main | PASS | PASS | 7.4s | 1 |
| 29 | ...enLabs/sui-move-bootcamp@main/K5/seal-demo/move | move | ...Labs/sui-move-bootcamp@main | PASS | PASS | 13.9s | 3 |
| 30 | MystenLabs/walrus-pocs@main/walrus-seal/app/src | typescript | MystenLabs/walrus-pocs@main | PASS | SKIP | 29.0s | 4 |
| 31 | MystenLabs/sui-move-bootcamp@main/K5/seal-demo/ts | typescript | ...Labs/sui-move-bootcamp@main | PASS | SKIP | 3.5s | 1 |
| 32 | MystenLabs/Nautilus@main/src | unknown | MystenLabs/Nautilus@main | FAIL | N/A | 52.2s | 2 |
| 33 | ...essaging@main/move/packages/sui_stack_messaging | move | ...bs/sui-stack-messaging@main | PASS | PASS | 18.9s | 3 |
| 34 | MystenLabs/sui-stack-messaging@main/chat-app/src | typescript | ...bs/sui-stack-messaging@main | PASS | SKIP | 11.2s | 1 |
| 35 | MystenLabs/ticketing-poc@main/move | move | MystenLabs/ticketing-poc@main | PASS | PASS | 6.2s | 3 |
| 36 | MystenLabs/ticketing-poc@main/app/src/app | typescript | MystenLabs/ticketing-poc@main | PASS | SKIP | 81.3s | 1 |
| 37 | MystenLabs/ticketing-poc@main/app | typescript | MystenLabs/ticketing-poc@main | PASS | SKIP | 45.8s | 1 |
| 38 | MystenLabs/solitaire@main/move/solitaire | move | MystenLabs/solitaire@main | PASS | PASS | 6.4s | 1 |
| 39 | MystenLabs/solitaire@main/app/src | typescript | MystenLabs/solitaire@main | PASS | SKIP | 65.9s | 2 |
| 40 | MystenLabs/walrus-sdk-relay-example-app@main/src | typescript | ...-sdk-relay-example-app@main | PASS | SKIP | 16.0s | 1 |
| 41 | MystenLabs/sui-move-bootcamp@solution/I1/silver | move | .../sui-move-bootcamp@solution | PASS | FAIL | 6.2s | 1 |
| 42 | ...Labs/sui-move-bootcamp@solution/I3/king_credits | move | .../sui-move-bootcamp@solution | PASS | PASS | 6.1s | 2 |
| 43 | ...Labs/sui-move-bootcamp@solution/I2/fixed_supply | move | .../sui-move-bootcamp@solution | PASS | PASS | 6.1s | 1 |
| 44 | MystenLabs/ts-sdks@main/packages/deepbook-v3 | typescript | MystenLabs/ts-sdks@main | FAIL | PASS | 5.6s | 8 |
| 45 | MystenLabs/sui-stack-hello-world@main/move | unknown | .../sui-stack-hello-world@main | PASS | PASS | 7.6s | 1 |
| 46 | ...abs/sui-stack-hello-world@main/move/hello-world | move | .../sui-stack-hello-world@main | PASS | PASS | 7.5s | 1 |
| 47 | MystenLabs/sui-stack-hello-world@main/ui | typescript | .../sui-stack-hello-world@main | PASS | SKIP | 10.9s | 5 |
| 48 | MystenLabs/sui-move-bootcamp@solution/G1/scenario | move | .../sui-move-bootcamp@solution | PASS | PASS | 6.3s | 2 |
| 49 | MystenLabs/sui-move-bootcamp@solution/G1 | move | .../sui-move-bootcamp@solution | PASS | PASS | 6.5s | 2 |
| 50 | MystenLabs/plinko-poc@main/plinko | move | MystenLabs/plinko-poc@main | PASS | PASS | 6.0s | 2 |
| 51 | MystenLabs/plinko-poc@main/app/src | typescript | MystenLabs/plinko-poc@main | PASS | SKIP | 65.8s | 1 |
| 52 | MystenLabs/plinko-poc@main/app | typescript | MystenLabs/plinko-poc@main | PASS | SKIP | 22.3s | 1 |
| 53 | ...-bootcamp@solution/F1/app/my-first-sui-dapp/src | typescript | .../sui-move-bootcamp@solution | FAIL | SKIP | 7.3s | 2 |
| 54 | MystenLabs/CTF@main/contracts | move | MystenLabs/CTF@main | PASS | PASS | 13.1s | 1 |
| 55 | MystenLabs/sui-move-bootcamp@main/K1/contract | move | ...Labs/sui-move-bootcamp@main | PASS | PASS | 5.6s | 1 |
| 56 | MystenLabs/sui-move-bootcamp@main/K1 | typescript | ...Labs/sui-move-bootcamp@main | PASS | FAIL | 9.2s | 1 |
| 57 | MystenLabs/sui-move-bootcamp@main/K1/backend | typescript | ...Labs/sui-move-bootcamp@main | PASS | FAIL | 4.1s | 1 |
| 58 | ...-bootcamp@solution/C5/contracts/derived_objects | move | .../sui-move-bootcamp@solution | PASS | PASS | 5.8s | 1 |
| 59 | MystenLabs/sui-move-bootcamp@solution/C5/ts | typescript | .../sui-move-bootcamp@solution | PASS | FAIL | 11.1s | 1 |
| 60 | ...sui-move-bootcamp@solution/E2/my-first-sui-dapp | typescript | .../sui-move-bootcamp@solution | FAIL | SKIP | 7.4s | 3 |
| 61 | ...move-bootcamp@solution/E2/my-first-sui-dapp/src | typescript | .../sui-move-bootcamp@solution | FAIL | SKIP | 5.2s | 1 |
| 62 | MystenLabs/deepbookv3@main/packages/deepbook | move | MystenLabs/deepbookv3@main | PASS | PASS | 12.1s | 7 |
| 63 | ...eepbookv3@predict-testnet-4-16/packages/predict | move | ...bookv3@predict-testnet-4-16 | PASS | PASS | 8.3s | 8 |
| 64 | ...enLabs/deepbookv3@main/packages/deepbook_margin | move | MystenLabs/deepbookv3@main | PASS | PASS | 26.0s | 6 |
| 65 | MystenLabs/ts-sdks@main/packages/enoki | typescript | MystenLabs/ts-sdks@main | FAIL | SKIP | 3.3s | 1 |
| 66 | MystenLabs/ts-sdks@main/packages/sui | typescript | MystenLabs/ts-sdks@main | FAIL | FAIL | 14.0s | 2 |
| 67 | MystenLabs/ts-sdks@main/packages/slush-wallet | typescript | MystenLabs/ts-sdks@main | FAIL | SKIP | 2.9s | 1 |
| 68 | ...kages/dapp-kit-next/packages/dapp-kit-react/src | typescript | MystenLabs/ts-sdks@main | FAIL | FAIL | 8.9s | 6 |
| 69 | ...n/packages/dapp-kit-next/packages/dapp-kit-core | typescript | MystenLabs/ts-sdks@main | FAIL | FAIL | 8.2s | 1 |

## Detailed Results

<details><summary>PASS — examples/tic-tac-toe/move (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/tic-tac-toe/move`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/owned.move`
- **Referenced by**: [references/gaming](https://docs.sui.io/references/gaming) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/references/gaming.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.6s)

```
No sui config found in `/home/runner/.sui/sui_config/client.yaml`, create one [Y/n]?
Generated new keypair and alias for address with scheme "ed25519" [festive-ruby: 0xa5310713d3b6a01c01709bf2b5108ba75faed15f27cc80f0194c2674aae5c570]
  secret recovery phrase : [voice blouse loud weekend easy derive rare element zoo gym ski credit]
Created "/home/runner/.sui/sui_config/client.yaml"
Set active environment to testnet
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING tic_tac_toe

```

**`sui move test`** — FAIL (6.9s)

```
t 'EWrongPlayer' originating in the module tic_tac_toe::shared but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── wrong_player ──────
│ Test did not error as expected. Expected test to abort with error constant 'EWrongPlayer' originating in the module tic_tac_toe::shared but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── x_wins ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────

Test result: FAILED. Total tests: 16; passed: 0; failed: 16
```

</details>

<details><summary>PASS — examples/move/dynamic_fields (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/dynamic_fields`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/example.move`
- **Referenced by**: [references/gaming](https://docs.sui.io/references/gaming) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/references/gaming.mdx)), [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/objects/dynamic-fields.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.9s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING dynamic_fields

```

**`sui move test`** — FAIL (5.4s)

```
te ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_add_reclaim ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_delete_with_child_attached ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────

Test result: FAILED. Total tests: 3; passed: 0; failed: 3
```

</details>

<details><summary>PASS — examples/move/nft (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/nft`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/testnet_nft.move`
- **Referenced by**: [onchain-finance/types-of-assets](https://docs.sui.io/onchain-finance/types-of-assets) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/types-of-assets.mdx)), [onchain-finance/tokenized-assets/create-nft](https://docs.sui.io/onchain-finance/tokenized-assets/create-nft) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/tokenized-assets/create-nft.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.5s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING testnet_nft
Total number of linter warnings suppressed: 1 (unique lints: 1)

```

**`sui move test`** — PASS (4.9s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING testnet_nft
Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0
Total number of linter warnings suppressed: 1 (unique lints: 1)

```

</details>

<details><summary>PASS — examples/move/random/random_nft (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/random/random_nft`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/example.move`
- **Referenced by**: [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/on-chain-primitives/randomness-onchain.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.6s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING random_nft

```

**`sui move test`** — FAIL (5.1s)

```
ed::logging: [VM] Unexpected verifier/deserialization error! This likely means there is code stored on chain that is unverifiable!
Error: VMError { major_status: MISSING_DEPENDENCY, sub_status: None, message: None, exec_state: None, location: Module(ModuleId { address: 0000000000000000000000000000000000000000000000000000000000000002, name: Identifier("scratch") }), indices: [(FunctionHandle, 0)], offsets: [] }
[ FAIL    ] random_nft::tests::test_e2e

Test failures:

Failures in random_nft::tests:

┌── test_e2e ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────

Test result: FAILED. Total tests: 1; passed: 0; failed: 1
```

</details>

<details><summary>PASS — examples/move/basics (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/basics`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/clock.move`, `sources/object_basics.move`
- **Referenced by**: [sui-stack/on-chain-primitives/access-time](https://docs.sui.io/sui-stack/on-chain-primitives/access-time) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/on-chain-primitives/access-time.mdx)), [develop/objects/object-ownership/party](https://docs.sui.io/develop/objects/object-ownership/party) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/objects/object-ownership/party.mdx)), [develop/objects/object-ownership/address-owned](https://docs.sui.io/develop/objects/object-ownership/address-owned) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/objects/object-ownership/address-owned.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.5s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING Basics
Total number of linter warnings suppressed: 1 (unique lints: 1)

```

**`sui move test`** — FAIL (5.1s)

```
VM] Unexpected verifier/deserialization error! This likely means there is code stored on chain that is unverifiable!
Error: VMError { major_status: MISSING_DEPENDENCY, sub_status: None, message: None, exec_state: None, location: Module(ModuleId { address: 0000000000000000000000000000000000000000000000000000000000000002, name: Identifier("scratch") }), indices: [(FunctionHandle, 0)], offsets: [] }
[ FAIL    ] basics::counter_test::test_counter

Test failures:

Failures in basics::counter_test:

┌── test_counter ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────

Test result: FAILED. Total tests: 1; passed: 0; failed: 1
```

</details>

<details><summary>PASS — examples/move/hero (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/hero`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/example.move`
- **Referenced by**: [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/references/contribute/mdx-components.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.5s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING hero

```

**`sui move test`** — FAIL (6.4s)

```
with code 5 originating in the module hero::example but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_unequip_empty ──────
│ Test did not error as expected. Expected test to abort with code 7 originating in the module hero::example but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_wrong_game ──────
│ Test did not error as expected. Expected test to abort with code 0 originating in the module hero::example but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────

Test result: FAILED. Total tests: 7; passed: 0; failed: 7
```

</details>

<details><summary>PASS — examples/vesting (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/vesting`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/cliff.move`, `sources/hybrid.move`, `sources/backloaded.move`, `sources/milestone.move`, `sources/linear.move`, `tests/immediate_tests.move`
- **Referenced by**: [onchain-finance/fungible-tokens/token-vesting-strategies](https://docs.sui.io/onchain-finance/fungible-tokens/token-vesting-strategies) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/token-vesting-strategies.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.5s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING vesting

```

**`sui move test`** — FAIL (6.7s)

```
riginating in the module sui::scratch rooted here
└──────────────────


┌── test_new_milestone_by_unathorized_controller ──────
│ Test did not error as expected. Expected test to abort with error constant 'EUnauthorizedMilestoneController' originating in the module vesting::milestone but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_owner_is_controller ──────
│ Test did not error as expected. Expected test to abort with error constant 'EOwnerIsController' originating in the module vesting::milestone but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────

Test result: FAILED. Total tests: 16; passed: 0; failed: 16
```

</details>

<details><summary>PASS — examples/move/coin (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/coin`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/regcoin_new.move`, `sources/non_otw_currency.move`, `sources/my_coin_new.move`
- **Referenced by**: [onchain-finance/fungible-tokens/regulated-tokens](https://docs.sui.io/onchain-finance/fungible-tokens/regulated-tokens) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/regulated-tokens.mdx)), [onchain-finance/fungible-tokens/currency](https://docs.sui.io/onchain-finance/fungible-tokens/currency) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/currency.mdx)), [onchain-finance/fungible-tokens/create-a-fungible-token](https://docs.sui.io/onchain-finance/fungible-tokens/create-a-fungible-token) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/create-a-fungible-token.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.5s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING Coins
Total number of linter warnings suppressed: 1 (unique lints: 1)

```

**`sui move test`** — PASS (4.7s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING Coins
Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0
Total number of linter warnings suppressed: 1 (unique lints: 1)

```

</details>

<details><summary>PASS — examples/regulated-coin/move (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/regulated-coin/move`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/regulated_coin.move`
- **Referenced by**: [onchain-finance/fungible-tokens/regulated-tokens](https://docs.sui.io/onchain-finance/fungible-tokens/regulated-tokens) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/regulated-tokens.mdx))

**`sui move build`** — PASS (0.6s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING regulated_coin_example

```

**`sui move test`** — PASS (4.7s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING regulated_coin_example
Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0

```

</details>

<details><summary>PASS — examples/regulated-coin/ts-client (typescript)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/regulated-coin/ts-client`
- **Package manager**: npm
- **Dependencies**: `@mysten/sui: ^1.18.0`, `typescript: ^5.5.3`
- **Files**: `src/main.ts`
- **Referenced by**: [onchain-finance/fungible-tokens/regulated-tokens](https://docs.sui.io/onchain-finance/fungible-tokens/regulated-tokens) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/regulated-tokens.mdx))

**`pnpm install`** — PASS (13.0s)

```
postinstall: Done

devDependencies:
+ @changesets/cli 2.29.4
+ @ianvs/prettier-plugin-sort-imports 4.4.1
+ @manypkg/cli 0.21.4
+ @mysten/prettier-plugin-move 0.3.5
+ @tanstack/eslint-plugin-query 5.74.7
+ @typescript-eslint/eslint-plugin 6.21.0
+ @typescript-eslint/parser 6.21.0
+ concurrently 8.2.2
+ eslint 8.57.1
+ eslint-config-prettier 8.10.0
+ eslint-config-react-app 7.0.1
+ eslint-import-resolver-typescript 3.10.1
+ eslint-plugin-header 3.1.1
+ eslint-plugin-import 2.31.0
+ eslint-plugin-prettier 5.4.0
+ eslint-plugin-require-extensions 0.1.3
+ eslint-plugin-tsdoc 0.2.17
+ eslint-plugin-unused-imports 3.2.0
+ graphql-config 5.1.5
+ js-yaml 4.1.1
+ prettier 3.5.3
+ prettier-plugin-tailwindcss 0.6.11
+ tsx 4.19.4
+ turbo 2.5.3
+ typescript 5.8.3
+ unist-util-visit 5.1.0

Done in 10.9s

```

**`tsc --noEmit --skipLibCheck`** — FAIL (0.9s)

```
install type definitions for node? Try `npm i --save-dev @types/node`.
src/main.ts(4,25): error TS2792: Cannot find module '@mysten/sui/client'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
src/main.ts(12,27): error TS2792: Cannot find module '@mysten/sui/transactions'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
src/main.ts(13,23): error TS2792: Cannot find module 'commander'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
src/main.ts(14,30): error TS2792: Cannot find module '@mysten/sui/keypairs/ed25519'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
```

**`workspace package (deps resolved)`** — PASS (0.0s)

```
Package is part of a workspace — deps installed successfully, full build requires monorepo context
```

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — examples/move/nft-soulbound (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/nft-soulbound`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/testnet_soulbound_nft.move`
- **Referenced by**: [onchain-finance/examples-patterns/soulbound-tokens](https://docs.sui.io/onchain-finance/examples-patterns/soulbound-tokens) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/examples-patterns/soulbound-tokens.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.5s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING testnet_soulbound_nft

```

**`sui move test`** — PASS (4.9s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING testnet_soulbound_nft
Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0

```

</details>

<details><summary>PASS — examples/move/nft-rental (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/nft-rental`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`, `Kiosk: testnet`
- **Files**: `sources/nft_rental.move`
- **Referenced by**: [onchain-finance/examples-patterns/nft-rental](https://docs.sui.io/onchain-finance/examples-patterns/nft-rental) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/examples-patterns/nft-rental.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (10.8s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
Downloading from https://github.com/MystenLabs/apps.git
Downloading from https://github.com/MystenLabs/sui.git
INCLUDING DEPENDENCY Kiosk
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING nft_rental

```

**`sui move test`** — FAIL (10.8s)

```
3 originating in the module nft_rental::rentables_ext but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_setup_renting ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_take_non_existed_item ──────
│ Test did not error as expected. Expected test to abort with code 5 originating in the module nft_rental::rentables_ext but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────

Test result: FAILED. Total tests: 27; passed: 0; failed: 27
```

</details>

<details><summary>PASS — examples/move/token (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/token`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/loyalty.move`
- **Referenced by**: [onchain-finance/examples-patterns/loyalty-tokens](https://docs.sui.io/onchain-finance/examples-patterns/loyalty-tokens) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/examples-patterns/loyalty-tokens.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.7s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING Closed Loop Token

```

**`sui move test`** — FAIL (7.5s)

```
instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_denylist_transfer_fail ──────
│ Test did not error as expected. Expected test to abort with code 0 originating in the module examples::denylist_rule but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_denylist_transfer_to_recipient_fail ──────
│ Test did not error as expected. Expected test to abort with code 0 originating in the module examples::denylist_rule but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────

Test result: FAILED. Total tests: 22; passed: 0; failed: 22
```

</details>

<details><summary>PASS — examples/trading/contracts/escrow (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/trading/contracts/escrow`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/owned.move`, `sources/shared.move`, `sources/lock.move`
- **Referenced by**: [develop/publish-upgrade-packages/versioning](https://docs.sui.io/develop/publish-upgrade-packages/versioning) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/publish-upgrade-packages/versioning.mdx)), [develop/accessing-data/using-events](https://docs.sui.io/develop/accessing-data/using-events) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/accessing-data/using-events.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.5s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING escrow

```

**`sui move test`** — FAIL (6.4s)

```
 error as expected. Expected test to abort with code 1 originating in the module escrow::shared but instead it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_return_to_sender ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_successful_swap ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────

Test result: FAILED. Total tests: 13; passed: 1; failed: 12
```

</details>

<details><summary>PASS — examples/move/color_object (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/color_object`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/example.move`
- **Referenced by**: [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/objects/object-ownership/immutable.mdx)), [develop/objects/object-ownership/address-owned](https://docs.sui.io/develop/objects/object-ownership/address-owned) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/objects/object-ownership/address-owned.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.6s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING color_object

```

**`sui move test`** — FAIL (5.8s)

```
────


┌── test_delete ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_immutable ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────


┌── test_transfer ──────
│ INTERNAL TEST ERROR: INTERNAL VM INVARIANT VIOLATION.
│ Test was not expected to error, but it gave a UNEXPECTED_VERIFIER_ERROR (code 2017) error originating in the module sui::scratch rooted here
└──────────────────

Test result: FAILED. Total tests: 5; passed: 0; failed: 5
```

</details>

<details><summary>FAIL — MystenLabs/sagat@main/api (typescript)</summary>

- **Origin**: MystenLabs/sagat@main
- **Package root**: `api`
- **Package manager**: npm
- **Dependencies**: `@mysten/sagat: workspace:*`, `@mysten/sui: ^2.16.0`
- **Files**: `api/test/addresses.test.ts`, `api/test/multisig-api.test.ts`, `api/test/multisig.test.ts`, `api/test/proposal-business-logic.test.ts`
- **Referenced by**: [sui-stack/sagat](https://docs.sui.io/sui-stack/sagat) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/sagat.mdx))

**`npm install`** — FAIL (9.2s)

```
npm error code EUNSUPPORTEDPROTOCOL
npm error Unsupported URL Type "workspace:": workspace:*
npm error A complete log of this run can be found in: /home/runner/.npm/_logs/2026-07-10T20_43_55_616Z-debug-0.log
```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/K2/src (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `K2/src`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/sui: ^1.38.0`, `typescript: ~5.8.3`
- **Files**: `K2/src/hooks/useEphemeral.ts`, `K2/src/hooks/useOauthPopup.tsx`, `K2/src/hooks/useZkProof.ts`, `K2/src/hooks/useWallet.ts`, `K2/src/utils/zk.ts`
- **Referenced by**: [sui-stack/zklogin-integration/zklogin-demo](https://docs.sui.io/sui-stack/zklogin-integration/zklogin-demo) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/zklogin-integration/zklogin-demo.mdx))

**`pnpm install`** — PASS (3.6s)

```
19.2.3
+ @vitejs/plugin-react 5.1.2
+ eslint 9.39.2
+ eslint-plugin-react-hooks 5.2.0
+ eslint-plugin-react-refresh 0.4.26
+ globals 16.5.0
+ typescript 5.8.3
+ typescript-eslint 8.53.1
+ vite 7.3.1

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: esbuild@0.27.2.                                     │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
Done in 3.5s using pnpm v10.34.5

```

**`pnpm run build`** — FAIL (4.1s)

```
> zklogin-demo-sui@0.0.0 build /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--sui-move-bootcamp--solution/K2
> tsc -b && vite build

src/services/sui/writeClient.ts(1,28): error TS2307: Cannot find module '@mysten/utils' or its corresponding type declarations.
 ELIFECYCLE  Command failed with exit code 1.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (3.9s)

```
src/services/sui/writeClient.ts(1,28): error TS2307: Cannot find module '@mysten/utils' or its corresponding type declarations.
```

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/K2 (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `K2`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/sui: ^1.38.0`, `typescript: ~5.8.3`
- **Files**: `K2/src/services/sui/writeClient.ts`
- **Referenced by**: [sui-stack/zklogin-integration/zklogin-demo](https://docs.sui.io/sui-stack/zklogin-integration/zklogin-demo) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/zklogin-integration/zklogin-demo.mdx))

**`pnpm install`** — PASS (0.0s)

```
already installed (cached)
```

**`pnpm run build`** — FAIL (4.0s)

```
> zklogin-demo-sui@0.0.0 build /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--sui-move-bootcamp--solution/K2
> tsc -b && vite build

src/services/sui/writeClient.ts(1,28): error TS2307: Cannot find module '@mysten/utils' or its corresponding type declarations.
 ELIFECYCLE  Command failed with exit code 1.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (3.9s)

```
src/services/sui/writeClient.ts(1,28): error TS2307: Cannot find module '@mysten/utils' or its corresponding type declarations.
```

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/onlyfins-example-app@main/frontend (typescript)</summary>

- **Origin**: MystenLabs/onlyfins-example-app@main
- **Package root**: `frontend`
- **Package manager**: npm
- **Dependencies**: `@mysten/dapp-kit: 0.19.11`, `@mysten/enoki: ^0.12.14`, `@mysten/seal: ^0.9.6`, `@mysten/sui: 1.45.2`, `typescript: ^5.9.2`
- **Files**: `frontend/src/constants.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx)), [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`npm install`** — PASS (27.0s)

```
npm warn deprecated uuid@9.0.1: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).

added 411 packages, and audited 412 packages in 27s

66 packages are looking for funding
  run `npm fund` for details

12 vulnerabilities (5 moderate, 7 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

```

**`npm run build`** — PASS (7.1s)

```
[39m
[32m✓[39m 887 modules transformed.
rendering chunks...
computing gzip size...
[2mdist/[22m[32mindex.html                 [39m[1m[2m  1.57 kB[22m[1m[22m[2m │ gzip:   0.80 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-CHsczsYp.css  [39m[1m[2m706.71 kB[22m[1m[22m[2m │ gzip:  84.18 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-B9_XoBYT.js   [39m[1m[33m788.46 kB[39m[22m[2m │ gzip: 262.26 kB[22m
[33m
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[32m✓ built in 3.71s[39m

```

**`tsc --noEmit --skipLibCheck`** — PASS (3.2s)

**`npm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/Walrus-Onboarding@main/07-Walrus-SDK-upload-relay/hands-on-source-code (typescript)</summary>

- **Origin**: MystenLabs/Walrus-Onboarding@main
- **Package root**: `07-Walrus-SDK-upload-relay/hands-on-source-code`
- **Package manager**: npm
- **Dependencies**: `@mysten/sui: ^1.45.0`, `@mysten/walrus: ^0.8.4`, `typescript: ^5.9.3`
- **Files**: `07-Walrus-SDK-upload-relay/hands-on-source-code/src/examples/basic-upload-example.ts`, `07-Walrus-SDK-upload-relay/hands-on-source-code/src/examples/basic-download-example.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx))

**`npm install`** — PASS (1.9s)

```

added 49 packages, and audited 50 packages in 2s

8 packages are looking for funding
  run `npm fund` for details

1 low severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

```

**`npm run build`** — PASS (1.8s)

```

> sdk-upload-relay-verification@1.0.0 build
> tsc


```

**`tsc --noEmit --skipLibCheck`** — PASS (1.9s)

**`npm test`** — FAIL (18.9s)

```
equired
❌ Upload with Relay (0.00s)
   Error: PASSPHRASE environment variable is required
❌ Hands-On Lab (0.00s)
   Error: PASSPHRASE environment variable is required
❌ Download (with upload) (0.00s)
   Error: PASSPHRASE environment variable is required
❌ Retry Patterns (0.00s)
   Error: PASSPHRASE environment variable is required
❌ Partial Failures (0.00s)
   Error: PASSPHRASE environment variable is required
❌ Integrity Checks (0.00s)
   Error: PASSPHRASE environment variable is required

------------------------------------------------------------
Total: 7 tests
Passed: 0
Failed: 7
Total Duration: 0.00s
------------------------------------------------------------

⚠️  Some tests failed. This may be expected in test environments.
   Network issues or node availability can cause failures.
```

</details>

<details><summary>PASS — MystenLabs/onlyfins-example-app@main/backend (typescript)</summary>

- **Origin**: MystenLabs/onlyfins-example-app@main
- **Package root**: `backend`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/seal: ^0.9.6`, `@mysten/sui: ^1.45.2`, `typescript: ^5.9.2`
- **Files**: `backend/src/config.ts`, `backend/src/createPosts.ts`, `backend/src/encryptImages.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx)), [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`pnpm install`** — PASS (1.1s)

```
 resolved 30, reused 19, downloaded 11, added 30, done

dependencies:
+ @mysten/seal 0.9.6
+ @mysten/sui 1.45.2
+ dotenv 16.6.1

devDependencies:
+ @types/node 20.19.25
+ tsx 4.21.0
+ typescript 5.9.3

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: esbuild@0.27.1.                                     │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
Done in 1s using pnpm v10.34.5

```

**`tsc --noEmit --skipLibCheck`** — PASS (1.9s)

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/walrus-pocs@main/sdk (typescript)</summary>

- **Origin**: MystenLabs/walrus-pocs@main
- **Package root**: `sdk`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/sui: ^1.38.0`, `@mysten/walrus: ^0.7.0`, `typescript: ^5.9.3`
- **Files**: `sdk/src/write.ts`, `sdk/src/download.ts`, `sdk/src/delete.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx))

**`pnpm install`** — PASS (4.0s)

```
Lockfile is up to date, resolution step is skipped
Progress: resolved 1, reused 0, downloaded 0, added 0
Packages: +42
++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 42, reused 13, downloaded 28, added 41
Progress: resolved 42, reused 13, downloaded 29, added 42, done

dependencies:
+ @mysten/sui 1.38.0
+ @mysten/walrus 0.7.0
+ dotenv 17.2.3
+ undici 7.16.0

devDependencies:
+ @types/node 24.6.1
+ ts-node 10.9.2
+ typescript 5.9.3

Done in 2s using pnpm v10.11.1

```

**`tsc --noEmit --skipLibCheck`** — PASS (1.9s)

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/Walrus-Onboarding@main/11-Batch-storage (typescript)</summary>

- **Origin**: MystenLabs/Walrus-Onboarding@main
- **Package root**: `11-Batch-storage`
- **Package manager**: npm
- **Dependencies**: `@mysten/sui: ^1.45.0`, `@mysten/walrus: ^0.8.4`, `typescript: ^5.3.3`
- **Files**: `11-Batch-storage/hands-on-source-code/03-creation-process/ts/03-create-simple.ts`, `11-Batch-storage/hands-on-source-code/04-retrieval-process/ts/01-get-files-identifiers.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx))

**`npm install`** — PASS (1.7s)

```

added 32 packages, and audited 33 packages in 2s

8 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

```

**`npm run build`** — PASS (2.0s)

```

> walrus-quilts-hands-on@1.0.0 build
> tsc


```

**`tsc --noEmit --skipLibCheck`** — PASS (2.1s)

**`npm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/onlyfins-example-app@main/frontend/src (typescript)</summary>

- **Origin**: MystenLabs/onlyfins-example-app@main
- **Package root**: `frontend/src`
- **Package manager**: npm
- **Dependencies**: `@mysten/dapp-kit: 0.19.11`, `@mysten/enoki: ^0.12.14`, `@mysten/seal: ^0.9.6`, `@mysten/sui: 1.45.2`, `typescript: ^5.9.2`
- **Files**: `frontend/src/components/Feed.tsx`, `frontend/src/utils/post-transform.ts`, `frontend/src/utils/walrus-fetch.ts`, `frontend/src/hooks/usePayForContent.ts`, `frontend/src/hooks/usePostDecryption.ts`, `frontend/src/lib/seal-client.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx)), [sui-stack/walrus/only-fins](https://docs.sui.io/sui-stack/walrus/only-fins) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/only-fins.mdx)), [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`npm install`** — PASS (0.0s)

```
already installed (cached)
```

**`npm run build`** — PASS (7.3s)

```
[39m
[32m✓[39m 887 modules transformed.
rendering chunks...
computing gzip size...
[2mdist/[22m[32mindex.html                 [39m[1m[2m  1.57 kB[22m[1m[22m[2m │ gzip:   0.80 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-CHsczsYp.css  [39m[1m[2m706.71 kB[22m[1m[22m[2m │ gzip:  84.18 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-B9_XoBYT.js   [39m[1m[33m788.46 kB[39m[22m[2m │ gzip: 262.26 kB[22m
[33m
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[32m✓ built in 3.78s[39m

```

**`tsc --noEmit --skipLibCheck`** — PASS (3.2s)

**`npm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages`
- **Package manager**: npm
- **Dependencies**: `@mysten/bcs: workspace:^`, `@mysten/utils: workspace:^`, `@mysten/walrus-wasm: workspace:^`, `@mysten/codegen: workspace:^`, `@mysten/dapp-kit-core: workspace:^`, `@mysten/dapp-kit-react: workspace:^`, `typescript: ^6.0.3`
- **Files**: `packages/walrus/examples/basics/attributes.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx))

**`pnpm install`** — PASS (16.5s)

```
e-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/walrus/node_modules/.bin/__sui-ts-codegen_bash_complete. ENOENT: no such file or directory, open '/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/codegen/dist/bin/bash-complete.mjs'

devDependencies:
+ @arethetypeswrong/cli 0.18.3
+ @changesets/cli 2.31.0
+ @ianvs/prettier-plugin-sort-imports 4.7.1
+ @manypkg/cli 0.25.1
+ @testcontainers/postgresql 12.0.2
+ concurrently 10.0.3
+ graphql-config 5.1.6
+ oxlint 1.47.0
+ oxlint-tsgolint 0.23.0
+ prettier 3.8.4
+ prettier-plugin-tailwindcss 0.8.0
+ testcontainers 12.0.2
+ tsdown 0.22.2
+ tsx 4.22.4
+ turbo 2.9.18
+ typescript 6.0.3

Done in 14.5s using pnpm v10.33.0

```

**`pnpm run build`** — FAIL (2.7s)

```
s an 'any' type because expression of type 'any' can't be used to index type '{ RS2: number; RedStuff: number; }'.
src/utils/quilts.ts(80,3): error TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ RS2: number; RedStuff: number; }'.
src/utils/quilts.ts(86,19): error TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ RS2: number; RedStuff: number; }'.
src/utils/quilts.ts(88,102): error TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ RS2: number; RedStuff: number; }'.
src/wasm.ts(4,28): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
 ELIFECYCLE  Command failed with exit code 2.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (1.4s)

```
ts(79,22): error TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ RS2: number; RedStuff: number; }'.
src/utils/quilts.ts(80,3): error TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ RS2: number; RedStuff: number; }'.
src/utils/quilts.ts(86,19): error TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ RS2: number; RedStuff: number; }'.
src/utils/quilts.ts(88,102): error TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ RS2: number; RedStuff: number; }'.
src/wasm.ts(4,28): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
```

**`workspace package (deps resolved)`** — PASS (0.0s)

```
Package is part of a workspace — deps installed successfully, full build requires monorepo context
```

**`pnpm test`** — FAIL (4.2s)

```
 be used to index type '{ RS2: number; RedStuff: number; }'.
src/utils/quilts.ts(80,3): error TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ RS2: number; RedStuff: number; }'.
src/utils/quilts.ts(86,19): error TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ RS2: number; RedStuff: number; }'.
src/utils/quilts.ts(88,102): error TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ RS2: number; RedStuff: number; }'.
src/wasm.ts(4,28): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
 ELIFECYCLE  Command failed with exit code 2.
 ELIFECYCLE  Test failed. See above for more details.
```

</details>

<details><summary>PASS — MystenLabs/walrus-sites@main/examples (unknown)</summary>

- **Origin**: MystenLabs/walrus-sites@main
- **Package root**: `examples`
- **Files**: `examples/snake/ws-resources.json`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus-sites](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus-sites) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus-sites.mdx))

**`file exists`** — PASS (0.0s)

</details>

<details><summary>PASS — MystenLabs/messaging-sdk-example@main/frontend/src (typescript)</summary>

- **Origin**: MystenLabs/messaging-sdk-example@main
- **Package root**: `frontend/src`
- **Package manager**: npm
- **Dependencies**: `@mysten/bcs: ^1.9.2`, `@mysten/dapp-kit: ^0.19.8`, `@mysten/enoki: ^0.12.10`, `@mysten/messaging: ^0.0.3`, `@mysten/seal: ^0.9.3`, `@mysten/sui: ^1.44.0`, `@mysten/sui-grpc: ^0.2.2`, `@mysten/walrus: ^0.8.3`, `typescript: ^5.9.2`
- **Files**: `frontend/src/hooks/useUserSubname.ts`
- **Referenced by**: [sui-stack/suins/sui-stack-suins](https://docs.sui.io/sui-stack/suins/sui-stack-suins) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/suins/sui-stack-suins.mdx))

**`npm install`** — PASS (12.8s)

```
npm warn deprecated uuid@9.0.1: uuid@10 and below is no longer supported.  For ESM codebases, update to uuid@latest.  For CommonJS codebases, use uuid@11 (but be aware this version will likely be deprecated in 2028).

added 419 packages, and audited 420 packages in 13s

66 packages are looking for funding
  run `npm fund` for details

15 vulnerabilities (5 moderate, 10 high)

To address issues that do not require attention, run:
  npm audit fix

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.

```

**`npm run build`** — PASS (7.3s)

```
[39m
[32m✓[39m 909 modules transformed.
rendering chunks...
computing gzip size...
[2mdist/[22m[32mindex.html                 [39m[1m[2m  1.40 kB[22m[1m[22m[2m │ gzip:   0.73 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-CHsczsYp.css  [39m[1m[2m706.71 kB[22m[1m[22m[2m │ gzip:  84.18 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-UDBmyjKZ.js   [39m[1m[33m817.19 kB[39m[22m[2m │ gzip: 266.73 kB[22m
[33m
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[32m✓ built in 3.88s[39m

```

**`tsc --noEmit --skipLibCheck`** — PASS (3.3s)

**`npm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/onlyfins-example-app@main/frontend/move (move)</summary>

- **Origin**: MystenLabs/onlyfins-example-app@main
- **Package root**: `frontend/move`
- **Move edition**: 2024
- **Dependencies**: `Sui: framework/testnet`
- **Files**: `frontend/move/sources/posts.move`
- **Referenced by**: [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (2.5s)

```
INCLUDING DEPENDENCY Sui
BUILDING posts
warning[Lint W99010]: unnecessary `entry` on a `public` function
   ┌─ ./sources/posts.move:52:12
   │
52 │     public entry fun seal_approve_access(
   │            ^^^^^ `entry` on `public` is meaningless. In conjunction with `public`, `entry` adds no additional permissions or restrictions.
   │
   = `public` functions can be called from PTBs. `entry` can be used to allow non-`public` (private or `public(package)`) functions to be called from PTBs, although there will be additional restrictions on the input arguments to such functions.
   = This warning can be suppressed with '#[allow(lint(public_entry))]' applied to the 'module' or module member ('const', 'fun', or 'struct')

Please report feedback on the linter warnings at https://forums.sui.io


```

**`sui move test`** — PASS (4.9s)

```
ry` on a `public` function
   ┌─ ./sources/posts.move:52:12
   │
52 │     public entry fun seal_approve_access(
   │            ^^^^^ `entry` on `public` is meaningless. In conjunction with `public`, `entry` adds no additional permissions or restrictions.
   │
   = `public` functions can be called from PTBs. `entry` can be used to allow non-`public` (private or `public(package)`) functions to be called from PTBs, although there will be additional restrictions on the input arguments to such functions.
   = This warning can be suppressed with '#[allow(lint(public_entry))]' applied to the 'module' or module member ('const', 'fun', or 'struct')

Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0
Please report feedback on the linter warnings at https://forums.sui.io


```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@main/K5/seal-demo/move (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@main
- **Package root**: `K5/seal-demo/move`
- **Move edition**: 2024
- **Files**: `K5/seal-demo/move/sources/private_seal.move`, `K5/seal-demo/move/sources/timelock_seal.move`, `K5/seal-demo/move/sources/allowlist_seal.move`
- **Referenced by**: [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`sui move build`** — PASS (8.7s)

```
fields, or passing it to another function.
   │
   = This warning can be suppressed with '#[allow(lint(unused_object_with_fields))]' applied to the 'module' or module member ('const', 'fun', or 'struct')

warning[Lint W99012]: unused object with fields
   ┌─ ./sources/allowlist_seal.move:44:53
   │
44 │ public fun remove_member(allowlist: &mut Allowlist, _cap: &AdminCap, member: address) {
   │                                                     ^^^^ Unused object with fields. Consider reading or writing the object's fields, or passing it to another function.
   │
   = This warning can be suppressed with '#[allow(lint(unused_object_with_fields))]' applied to the 'module' or module member ('const', 'fun', or 'struct')

Please report feedback on the linter warnings at https://forums.sui.io


```

**`sui move test`** — PASS (5.2s)

```
essed with '#[allow(lint(unused_object_with_fields))]' applied to the 'module' or module member ('const', 'fun', or 'struct')

warning[Lint W99012]: unused object with fields
   ┌─ ./sources/allowlist_seal.move:44:53
   │
44 │ public fun remove_member(allowlist: &mut Allowlist, _cap: &AdminCap, member: address) {
   │                                                     ^^^^ Unused object with fields. Consider reading or writing the object's fields, or passing it to another function.
   │
   = This warning can be suppressed with '#[allow(lint(unused_object_with_fields))]' applied to the 'module' or module member ('const', 'fun', or 'struct')

Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0
Please report feedback on the linter warnings at https://forums.sui.io


```

</details>

<details><summary>PASS — MystenLabs/walrus-pocs@main/walrus-seal/app/src (typescript)</summary>

- **Origin**: MystenLabs/walrus-pocs@main
- **Package root**: `walrus-seal/app/src`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/bcs: ^1.8.0`, `@mysten/dapp-kit: ^0.18.0`, `@mysten/seal: ^0.8.1`, `@mysten/sui: ^1.38.0`, `typescript: ^5`
- **Files**: `walrus-seal/app/src/hooks/useSealEncrypt.ts`, `walrus-seal/app/src/utils/sealUtils.ts`, `walrus-seal/app/src/hooks/useSealSession.ts`, `walrus-seal/app/src/hooks/useSealDecrypt.ts`
- **Referenced by**: [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`pnpm install`** — PASS (3.4s)

```
.0
+ react-dom 19.1.0
+ tweetnacl 1.0.3

devDependencies:
+ @tailwindcss/postcss 4.1.14
+ @types/node 20.19.19
+ @types/react 19.2.0
+ @types/react-dom 19.2.0
+ tailwindcss 4.1.14
+ typescript 5.9.3

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: @tailwindcss/oxide@4.1.14, sharp@0.34.4.            │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
Done in 3.3s using pnpm v10.34.5

```

**`pnpm run build`** — PASS (22.7s)

```
nerating static pages (6/8) 
 ✓ Generating static pages (8/8)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                         Size  First Load JS
┌ ○ /                            41.3 kB         742 kB
├ ○ /_not-found                      0 B         700 kB
├ ƒ /api/store-encrypted-blob        0 B            0 B
├ ƒ /api/test-nacl-session           0 B            0 B
└ ○ /test-nacl-seal-session      5.17 kB         705 kB
+ First Load JS shared by all     709 kB
  ├ chunks/0348a51373c2a3cf.js   59.2 kB
  ├ chunks/041a31ac94f24ce5.js    583 kB
  ├ chunks/0d10da20dfdd0930.js   20.6 kB
  ├ chunks/7d4cb355fdb07a3d.js   17.2 kB
  └ other shared chunks (total)    29 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


```

**`tsc --noEmit --skipLibCheck`** — PASS (3.0s)

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@main/K5/seal-demo/ts (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@main
- **Package root**: `K5/seal-demo/ts`
- **Package manager**: npm
- **Dependencies**: `@mysten/bcs: ^2.0.3`, `@mysten/seal: ^1.1.1`, `@mysten/sui: ^2.16.0`, `typescript: ^5.7.0`
- **Files**: `K5/seal-demo/ts/src/index.ts`
- **Referenced by**: [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`npm install`** — PASS (1.6s)

```
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@mysten/sui@2.16.0',
npm warn EBADENGINE   required: { node: '>=22' },
npm warn EBADENGINE   current: { node: 'v20.20.2', npm: '10.8.2' }
npm warn EBADENGINE }

added 30 packages, and audited 31 packages in 2s

9 packages are looking for funding
  run `npm fund` for details

1 low severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

```

**`tsc --noEmit --skipLibCheck`** — PASS (1.9s)

**`npm test`** — SKIP (0.0s)

</details>

<details><summary>FAIL — MystenLabs/Nautilus@main/src (unknown)</summary>

- **Origin**: MystenLabs/Nautilus@main
- **Package root**: `src`
- **Files**: `src/nautilus-server/src/apps/seal-example/seal_config.yaml`, `src/nautilus-server/src/apps/seal-example/endpoints.rs`
- **Referenced by**: [sui-stack/nautilus/seal](https://docs.sui.io/sui-stack/nautilus/seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/nautilus/seal.mdx))

**`cargo check`** — FAIL (52.2s)

```
home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--Nautilus--main/src/nautilus-server)
[0m[1m[38;5;9merror[E0432][0m[0m[1m: unresolved import `nautilus_server::app::process_data`[0m
[0m [0m[0m[1m[38;5;12m--> [0m[0msrc/main.rs:7:5[0m
[0m  [0m[0m[1m[38;5;12m|[0m
[0m[1m[38;5;12m7[0m[0m [0m[0m[1m[38;5;12m|[0m[0m [0m[0muse nautilus_server::app::process_data;[0m
[0m  [0m[0m[1m[38;5;12m|[0m[0m     [0m[0m[1m[38;5;9m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m[0m [0m[0m[1m[38;5;9mno `process_data` in `app`[0m

[0m[1mFor more information about this error, try `rustc --explain E0432`.[0m
[1m[31merror[0m[1m:[0m could not compile `nautilus-server` (bin "nautilus-server") due to 1 previous error
```

</details>

<details><summary>PASS — MystenLabs/sui-stack-messaging@main/move/packages/sui_stack_messaging (move)</summary>

- **Origin**: MystenLabs/sui-stack-messaging@main
- **Package root**: `move/packages/sui_stack_messaging`
- **Move edition**: 2024
- **Dependencies**: `sui_groups: ea766818b90e162341e885a855718388edcc8e99`, `suins: mvr:@suins/core`
- **Files**: `move/packages/sui_stack_messaging/sources/seal_policies.move`, `move/packages/sui_stack_messaging/sources/messaging.move`, `move/packages/sui_stack_messaging/sources/encryption_history.move`
- **Referenced by**: [sui-stack/messaging/chat-app](https://docs.sui.io/sui-stack/messaging/chat-app) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/messaging/chat-app.mdx))

**`sui move build`** — PASS (12.8s)

```
Output from mvr:
  │ [34m[mvr] detected supported SUI CLI version[0m
  │ [34m[mvr] resolving[0m: [1;34m"@suins/core"[0m [34mon network: [0m [1;34mtestnet[0m

Downloading from https://github.com/MystenLabs/sui-groups.git
Downloading from https://github.com/MystenLabs/sui.git
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
INCLUDING DEPENDENCY sui_groups
INCLUDING DEPENDENCY suins
BUILDING sui_stack_messaging

```

**`sui move test`** — PASS (6.1s)

```
cryption_history_fails
[ PASS    ] sui_stack_messaging::messaging_tests::rotate_encryption_key_with_oversized_dek_fails
[ PASS    ] sui_stack_messaging::messaging_tests::rotate_encryption_key_with_permission
[ PASS    ] sui_stack_messaging::messaging_tests::rotate_encryption_key_without_permission_fails
[ PASS    ] sui_stack_messaging::messaging_tests::set_group_name_fails_without_permission
[ PASS    ] sui_stack_messaging::messaging_tests::set_group_name_on_archived_group_fails
[ PASS    ] sui_stack_messaging::messaging_tests::set_group_name_succeeds_with_metadata_admin
[ PASS    ] sui_stack_messaging::messaging_tests::uuid_getter_returns_correct_value
[ PASS    ] sui_stack_messaging::messaging_tests::version_returns_current_version
Test result: OK. Total tests: 38; passed: 38; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/sui-stack-messaging@main/chat-app/src (typescript)</summary>

- **Origin**: MystenLabs/sui-stack-messaging@main
- **Package root**: `chat-app/src`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/bcs: ^2.0.3`, `@mysten/dapp-kit-core: ^1.3.2`, `@mysten/dapp-kit-react: ^2.0.3`, `@mysten/sui-stack-messaging: 0.0.2`, `@mysten/sui-groups: ^0.0.1`, `@mysten/seal: ^1.1.1`, `@mysten/sui: ^2.17.0`, `@mysten/signers: 1.0.5`, `typescript: ~5.8.3`
- **Files**: `chat-app/src/hooks/useMessages.ts`
- **Referenced by**: [sui-stack/messaging/chat-app](https://docs.sui.io/sui-stack/messaging/chat-app) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/messaging/chat-app.mdx))

**`pnpm install`** — PASS (3.1s)

```
en-incubation/dev-wallet 0.3.0
+ @mysten-incubation/devstack 0.1.1
+ @mysten/signers 1.0.5
+ @types/react 19.2.14
+ @types/react-dom 19.2.3
+ @vitejs/plugin-react 4.7.0
+ typescript 5.8.3
+ vite 6.4.1

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: msgpackr-extract@3.0.4, protobufjs@7.6.2.           │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
Done in 3s using pnpm v10.34.5

```

**`pnpm run build`** — PASS (7.6s)

```
ng...
[32m✓[39m 722 modules transformed.
rendering chunks...
computing gzip size...
[2mdist/[22m[32mindex.html                 [39m[1m[2m  0.40 kB[22m[1m[22m[2m │ gzip:   0.27 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-CmLFi6yS.css  [39m[1m[2m 25.04 kB[22m[1m[22m[2m │ gzip:   5.17 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-C7z-chHA.js   [39m[1m[33m932.75 kB[39m[22m[2m │ gzip: 280.50 kB[22m
[33m
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[32m✓ built in 3.50s[39m

```

**`tsc --noEmit --skipLibCheck`** — PASS (0.5s)

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/ticketing-poc@main/move (move)</summary>

- **Origin**: MystenLabs/ticketing-poc@main
- **Package root**: `move`
- **Move edition**: 2024
- **Files**: `move/sources/ticket.move`, `move/sources/ticket_stage.move`, `move/sources/key_registry.move`
- **Referenced by**: [sui-stack/enoki/ticketing-poc](https://docs.sui.io/sui-stack/enoki/ticketing-poc) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/enoki/ticketing-poc.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (0.8s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING ticketing-poc

```

**`sui move test`** — PASS (5.4s)

```
ts::mint_loyalty
[ PASS    ] ticketing_poc::ticket_tests::creates_ticket
[ PASS    ] ticketing_poc::loyalty_tests::updates_loyalty_points
[ PASS    ] ticketing_poc::ticket_tests::creates_ticket_invalid_signature
[ PASS    ] ticketing_poc::loyalty_tests::updates_loyalty_points_domain_mismatch
[ PASS    ] ticketing_poc::ticket_tests::creates_ticket_nonce_already_used
[ PASS    ] ticketing_poc::loyalty_tests::updates_loyalty_points_loyalty_id_mismatch
[ PASS    ] ticketing_poc::ticket_tests::creates_ticket_permit_domain_mismatch
[ PASS    ] ticketing_poc::ticket_tests::creates_ticket_permit_owner_mismatch
[ PASS    ] ticketing_poc::ticket_tests::updates_ticket_stage
Test result: OK. Total tests: 17; passed: 17; failed: 0
Please report feedback on the linter warnings at https://forums.sui.io


```

</details>

<details><summary>PASS — MystenLabs/ticketing-poc@main/app/src/app (typescript)</summary>

- **Origin**: MystenLabs/ticketing-poc@main
- **Package root**: `app/src/app`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/bcs: ^1.7.0`, `@mysten/dapp-kit-core: ^1.3.0`, `@mysten/dapp-kit-react: ^2.0.1`, `@mysten/enoki: ^1.0.4`, `@mysten/sui: ^2.16.0`, `typescript: ^5.7.2`
- **Files**: `app/src/app/hooks/useMintTicket.tsx`
- **Referenced by**: [sui-stack/enoki/ticketing-poc](https://docs.sui.io/sui-stack/enoki/ticketing-poc) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/enoki/ticketing-poc.mdx))

**`pnpm install`** — PASS (5.4s)

```
types/react-slick 0.23.13
+ autoprefixer 10.4.21
+ mini-css-extract-plugin 2.9.4
+ postcss 8.5.6
+ tailwindcss 3.4.17

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: protobufjs@7.5.4, sharp@0.33.5,                     │
│   unrs-resolver@1.11.1.                                                      │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
Done in 5.3s using pnpm v10.34.5

```

**`pnpm run build`** — PASS (71.1s)

```
06 kB
├ ƒ /api/visits                          160 B           106 kB
├ ○ /auth                                553 B           185 kB
├ ƒ /events/[id]                         4.88 kB         140 kB
├ ƒ /events/[id]/seats                   8.97 kB         248 kB
├ ○ /profile                             8.69 kB         257 kB
├ ○ /search                              4.56 kB         207 kB
├ ○ /tickets                             5.18 kB         223 kB
└ ƒ /tickets/[id]                        9.11 kB         260 kB
+ First Load JS shared by all            106 kB
  ├ chunks/1152a06d-b2755ba54cb884a3.js  52.9 kB
  ├ chunks/587-673b3d4453d44bf5.js       50.8 kB
  └ other shared chunks (total)          1.95 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


```

**`tsc --noEmit --skipLibCheck`** — PASS (4.8s)

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/ticketing-poc@main/app (typescript)</summary>

- **Origin**: MystenLabs/ticketing-poc@main
- **Package root**: `app`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/bcs: ^1.7.0`, `@mysten/dapp-kit-core: ^1.3.0`, `@mysten/dapp-kit-react: ^2.0.1`, `@mysten/enoki: ^1.0.4`, `@mysten/sui: ^2.16.0`, `typescript: ^5.7.2`
- **Files**: `app/src/app/api/permit/mint-ticket/route.ts`
- **Referenced by**: [sui-stack/enoki/ticketing-poc](https://docs.sui.io/sui-stack/enoki/ticketing-poc) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/enoki/ticketing-poc.mdx))

**`pnpm install`** — PASS (0.0s)

```
already installed (cached)
```

**`pnpm run build`** — PASS (43.3s)

```
06 kB
├ ƒ /api/visits                          160 B           106 kB
├ ○ /auth                                553 B           185 kB
├ ƒ /events/[id]                         4.88 kB         140 kB
├ ƒ /events/[id]/seats                   8.97 kB         248 kB
├ ○ /profile                             8.69 kB         257 kB
├ ○ /search                              4.56 kB         207 kB
├ ○ /tickets                             5.18 kB         223 kB
└ ƒ /tickets/[id]                        9.11 kB         260 kB
+ First Load JS shared by all            106 kB
  ├ chunks/1152a06d-b2755ba54cb884a3.js  52.9 kB
  ├ chunks/587-673b3d4453d44bf5.js       50.8 kB
  └ other shared chunks (total)          1.95 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


```

**`tsc --noEmit --skipLibCheck`** — PASS (2.5s)

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/solitaire@main/move/solitaire (move)</summary>

- **Origin**: MystenLabs/solitaire@main
- **Package root**: `move/solitaire`
- **Move edition**: 2024
- **Files**: `move/solitaire/sources/solitaire.move`
- **Referenced by**: [sui-stack/enoki/solitaire](https://docs.sui.io/sui-stack/enoki/solitaire) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/enoki/solitaire.mdx))

**`inject [dependencies]`** — PASS (0.0s)

```
Move.toml had no [dependencies] — added empty section (Sui CLI auto-resolves system deps)
```

**`sui move build`** — PASS (0.7s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING solitaire
warning[W04037]: deprecated usage
    ┌─ ./sources/solitaire.move:370:28
    │
370 │             cards: vector::singleton<u64>(card),
    │                            ^^^^^^^^^ The function 'std::vector::singleton' is deprecated: Use `vector[e]` literal instead
    │
    = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')


```

**`sui move test`** — PASS (5.7s)

```
olitaire::test_solitaire::invalid_turn_deck_card
[ PASS    ] solitaire::test_solitaire::open_deck_card_invalid_out_of_cards
[ PASS    ] solitaire::test_solitaire::open_deck_card_invalid_unauthorized_player
[ PASS    ] solitaire::test_solitaire::open_deck_card_valid
[ PASS    ] solitaire::test_solitaire::reveal_card_valid
[ PASS    ] solitaire::test_solitaire::rotate_deck_and_reveal_all_cards
[ PASS    ] solitaire::test_solitaire::rotate_open_deck_cards_invalid_unauthorized_player
[ PASS    ] solitaire::test_solitaire::test_hidden_card_reveal_from_column_to_column
[ PASS    ] solitaire::test_solitaire::test_hidden_card_reveal_from_column_to_pile
[ PASS    ] solitaire::test_solitaire::turn_deck_card_valid_reveal_all_and_iterate_2_times
Test result: OK. Total tests: 58; passed: 58; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/solitaire@main/app/src (typescript)</summary>

- **Origin**: MystenLabs/solitaire@main
- **Package root**: `app/src`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/codegen: 0.5.0`, `@mysten/dapp-kit: ^0.17.7`, `@mysten/enoki: ^0.12.0`, `@mysten/sui: 1.38.0`, `typescript: 5.9.2`
- **Files**: `app/src/components/gameBoard/GameBoard.tsx`, `app/src/hooks/useSolitaireActions.ts`
- **Referenced by**: [sui-stack/enoki/solitaire](https://docs.sui.io/sui-stack/enoki/solitaire) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/enoki/solitaire.mdx))

**`pnpm install`** — PASS (7.3s)

```
zod 4.1.7

devDependencies:
+ @types/react-slick 0.23.13
+ autoprefixer 10.4.21
+ postcss 8.5.6
+ tailwindcss 3.4.17

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: bufferutil, protobufjs, sharp, unrs-resolver,       │
│   utf-8-validate.                                                            │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯

Done in 5.3s using pnpm v10.10.0

```

**`pnpm run build`** — PASS (54.3s)

```

   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      842 B         243 kB
├ ○ /_not-found                            137 B         103 kB
├ ƒ /api/execute                           137 B         103 kB
├ ƒ /api/health                            137 B         103 kB
├ ƒ /api/sponsor                           137 B         103 kB
└ ○ /game                                39.8 kB         280 kB
+ First Load JS shared by all             102 kB
  ├ chunks/207-27a5d686923a4f91.js       46.3 kB
  ├ chunks/f3bdebb4-750393fb459063d0.js  54.2 kB
  └ other shared chunks (total)          1.93 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand


```

**`tsc --noEmit --skipLibCheck`** — PASS (4.3s)

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/walrus-sdk-relay-example-app@main/src (typescript)</summary>

- **Origin**: MystenLabs/walrus-sdk-relay-example-app@main
- **Package root**: `src`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/dapp-kit: ^0.17.1`, `@mysten/sui: ^1.37.0`, `@mysten/walrus: ^0.5.2`, `typescript: ^5.8.3`
- **Files**: `src/lib/walrus.ts`
- **Referenced by**: [references/contribute/style-guide](https://docs.sui.io/references/contribute/style-guide) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/references/contribute/style-guide.mdx))

**`pnpm install`** — PASS (3.2s)

```
 eslint-plugin-react-refresh 0.4.20
+ globals 16.3.0
+ postcss 8.5.6
+ prettier 3.6.2
+ typescript 5.8.3
+ vite 6.3.5

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: @swc/core@1.12.6, @tailwindcss/oxide@4.1.10,        │
│   esbuild@0.25.5.                                                            │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
Done in 3.1s using pnpm v10.34.5

```

**`pnpm run build`** — PASS (9.5s)

```
[22m[1m[22m[2m │ gzip:   0.78 kB[22m
[2mdist/[22m[2massets/[22m[32mwalrus_wasm_bg-KCYZ1fvy.wasm  [39m[1m[2m  558.13 kB[22m[1m[22m[2m │ gzip: 304.78 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-CGERj4EO.css            [39m[1m[2m  725.73 kB[22m[1m[22m[2m │ gzip:  88.92 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-BtoI2cod.js             [39m[1m[33m1,173.23 kB[39m[22m[2m │ gzip: 289.16 kB[22m
[33m
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[32m✓ built in 5.39s[39m

```

**`tsc --noEmit --skipLibCheck`** — PASS (3.3s)

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/I1/silver (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `I1/silver`
- **Move edition**: 2024
- **Files**: `I1/silver/sources/silver.move`
- **Referenced by**: [onchain-finance/fungible-tokens/create-a-fungible-token-coin](https://docs.sui.io/onchain-finance/fungible-tokens/create-a-fungible-token-coin) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/create-a-fungible-token-coin.mdx))

**`inject [dependencies]`** — PASS (0.0s)

```
Move.toml had no [dependencies] — added empty section (Sui CLI auto-resolves system deps)
```

**`sui move build`** — PASS (0.9s)

```
5:5
   │
25 │     ctx: &mut TxContext
   │     ^^^ Unused parameter 'ctx'. Consider removing or prefixing with an underscore: '_ctx'
   │
   = This warning can be suppressed with '#[allow(unused_variable)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

warning[W09014]: unused mutable reference '&mut' parameter
   ┌─ ./sources/silver.move:25:10
   │
25 │     ctx: &mut TxContext
   │     ---  ^^^^^^^^^^^^^^ Mutable reference is never used mutably, consider switching to an immutable reference '&' instead
   │     │     
   │     For parameters, this can be silenced by prefixing the name with an underscore, e.g. '_ctx'
   │
   = This warning can be suppressed with '#[allow(unused_mut_parameter)]' applied to the 'module' or module member ('const', 'fun', or 'struct')


```

**`sui move test`** — FAIL (5.3s)

```
function in silver::silver
│    ·
│ 92 │     abort(ETodo)
│    │     ^^^^^^^^^^^^ Test was not expected to error, but it aborted with code 0 originating in the module silver::silver rooted here
│ 
│ 
│ stack trace
│ 	silver::create_currency(./sources/silver.move:37-40)
│ 
└──────────────────


┌── mint ──────
│ error[E11001]: test failure
│    ┌─ ./sources/silver.move:92:5
│    │
│ 23 │ fun create_silver_currency(
│    │     ---------------------- In this function in silver::silver
│    ·
│ 92 │     abort(ETodo)
│    │     ^^^^^^^^^^^^ Test was not expected to error, but it aborted with code 0 originating in the module silver::silver rooted here
│ 
│ 
│ stack trace
│ 	silver::mint(./sources/silver.move:55-58)
│ 
└──────────────────

Test result: FAILED. Total tests: 3; passed: 0; failed: 3
```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/I3/king_credits (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `I3/king_credits`
- **Move edition**: 2024
- **Files**: `I3/king_credits/sources/king_credits.move`, `I3/king_credits/sources/crown_council_rule.move`
- **Referenced by**: [onchain-finance/examples-patterns/in-game-currency](https://docs.sui.io/onchain-finance/examples-patterns/in-game-currency) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/examples-patterns/in-game-currency.mdx))

**`inject [dependencies]`** — PASS (0.0s)

```
Move.toml had no [dependencies] — added empty section (Sui CLI auto-resolves system deps)
```

**`sui move build`** — PASS (0.8s)

```
 < MAX_CROWN_COUNCIL_MEMBERS, EMaxCouncilMembers);
   │                            ^^^^ The method 'size' resolves to the function 'sui::vec_set::size' which is deprecated: Renamed to `length` for consistency.
   │
   = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

warning[W04037]: deprecated usage
   ┌─ ./sources/king_credits.move:18:34
   │
18 │     let (tcap, metadata) = coin::create_currency(
   │                                  ^^^^^^^^^^^^^^^ The function 'sui::coin::create_currency' is deprecated: Use `coin_registry::new_currency_with_otw` instead
   │
   = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')


```

**`sui move test`** — PASS (5.3s)

```
 consistency.
   │
   = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

warning[W04037]: deprecated usage
   ┌─ ./sources/king_credits.move:18:34
   │
18 │     let (tcap, metadata) = coin::create_currency(
   │                                  ^^^^^^^^^^^^^^^ The function 'sui::coin::create_currency' is deprecated: Use `coin_registry::new_currency_with_otw` instead
   │
   = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

Running Move unit tests
[ PASS    ] king_credits::crown_council_rule::test_edit_council
[ PASS    ] king_credits::king_credits::test_transfer
Test result: OK. Total tests: 2; passed: 2; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/I2/fixed_supply (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `I2/fixed_supply`
- **Move edition**: 2024
- **Files**: `I2/fixed_supply/sources/silver.move`
- **Referenced by**: [onchain-finance/examples-patterns/fixed-supply](https://docs.sui.io/onchain-finance/examples-patterns/fixed-supply) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/examples-patterns/fixed-supply.mdx))

**`inject [dependencies]`** — PASS (0.0s)

```
Move.toml had no [dependencies] — added empty section (Sui CLI auto-resolves system deps)
```

**`sui move build`** — PASS (0.8s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING fixed_supply
warning[W04037]: deprecated usage
   ┌─ ./sources/silver.move:43:11
   │
43 │     coin::create_currency<SILVER>(
   │           ^^^^^^^^^^^^^^^ The function 'sui::coin::create_currency' is deprecated: Use `coin_registry::new_currency_with_otw` instead
   │
   = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')


```

**`sui move test`** — PASS (5.3s)

```
 ^^^^^^^^^^^^^^^ The function 'sui::coin::create_currency' is deprecated: Use `coin_registry::new_currency_with_otw` instead
   │
   = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

warning[W04037]: deprecated usage
   ┌─ ./sources/silver.move:66:22
   │
66 │         assert!(dof::exists_(&freezer.id, TreasuryCapKey()));
   │                      ^^^^^^^ The function 'sui::dynamic_object_field::exists_' is deprecated: Renamed to `exists`
   │
   = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

Running Move unit tests
[ PASS    ] fixed_supply::silver::test_init
Test result: OK. Total tests: 1; passed: 1; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/deepbook-v3 (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/deepbook-v3`
- **Package manager**: npm
- **Dependencies**: `@mysten/bcs: workspace:^`, `@mysten/codegen: workspace:^`, `typescript: ^6.0.3`
- **Files**: `packages/deepbook-v3/src/transactions/deepbook.ts`, `packages/deepbook-v3/src/client.ts`, `packages/deepbook-v3/src/transactions/balanceManager.ts`, `packages/deepbook-v3/src/transactions/marginTPSL.ts`, `packages/deepbook-v3/src/transactions/poolProxy.ts`, `packages/deepbook-v3/src/transactions/marginPool.ts`, `packages/deepbook-v3/src/transactions/marginManager.ts`, `packages/deepbook-v3/src/transactions/marginMaintainer.ts`
- **Referenced by**: [onchain-finance/deepbookv3-sdk/swaps](https://docs.sui.io/onchain-finance/deepbookv3-sdk/swaps) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3-sdk/swaps.mdx)), [onchain-finance/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbookv3-sdk/staking-governance) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3-sdk/staking-governance.mdx)), [onchain-finance/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbookv3-sdk/pools) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3-sdk/pools.mdx)), [onchain-finance/deepbookv3-sdk/orders](https://docs.sui.io/onchain-finance/deepbookv3-sdk/orders) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3-sdk/orders.mdx)), [onchain-finance/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbookv3-sdk/balance-manager) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3-sdk/balance-manager.mdx)), [onchain-finance/deepbook-margin-sdk/tpsl](https://docs.sui.io/onchain-finance/deepbook-margin-sdk/tpsl) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-margin-sdk/tpsl.mdx)), [onchain-finance/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook-margin-sdk/orders) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-margin-sdk/orders.mdx)), [onchain-finance/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook-margin-sdk/margin-pool) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-margin-sdk/margin-pool.mdx)), [onchain-finance/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook-margin-sdk/margin-manager) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-margin-sdk/margin-manager.mdx)), [onchain-finance/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook-margin-sdk/maintainer) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-margin-sdk/maintainer.mdx))

**`pnpm install`** — PASS (0.0s)

```
already installed (cached)
```

**`pnpm run build`** — FAIL (2.9s)

```
tions/marginTPSL.ts(3,34): error TS2307: Cannot find module '@mysten/sui/transactions' or its corresponding type declarations.
src/transactions/poolProxy.ts(3,34): error TS2307: Cannot find module '@mysten/sui/transactions' or its corresponding type declarations.
src/types/index.ts(4,69): error TS2307: Cannot find module '@mysten/sui/transactions' or its corresponding type declarations.
src/utils/config.ts(3,37): error TS2307: Cannot find module '@mysten/sui/client' or its corresponding type declarations.
src/utils/config.ts(4,37): error TS2307: Cannot find module '@mysten/sui/utils' or its corresponding type declarations.
src/utils/validation.ts(4,35): error TS2307: Cannot find module '@mysten/sui/utils' or its corresponding type declarations.
 ELIFECYCLE  Command failed with exit code 2.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (1.3s)

```
s corresponding type declarations.
src/transactions/marginTPSL.ts(3,34): error TS2307: Cannot find module '@mysten/sui/transactions' or its corresponding type declarations.
src/transactions/poolProxy.ts(3,34): error TS2307: Cannot find module '@mysten/sui/transactions' or its corresponding type declarations.
src/types/index.ts(4,69): error TS2307: Cannot find module '@mysten/sui/transactions' or its corresponding type declarations.
src/utils/config.ts(3,37): error TS2307: Cannot find module '@mysten/sui/client' or its corresponding type declarations.
src/utils/config.ts(4,37): error TS2307: Cannot find module '@mysten/sui/utils' or its corresponding type declarations.
src/utils/validation.ts(4,35): error TS2307: Cannot find module '@mysten/sui/utils' or its corresponding type declarations.
```

**`workspace package (deps resolved)`** — PASS (0.0s)

```
Package is part of a workspace — deps installed successfully, full build requires monorepo context
```

**`pnpm test`** — PASS (1.4s)

```
0.2","pnpm":"10.33.0"})

> @mysten/deepbook-v3@1.5.5 test /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/deepbook-v3
> vitest run


[1m[30m[46m RUN [49m[39m[22m [36mv4.1.8 [39m[90m/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/deepbook-v3[39m

 [32m✓[39m test/unit/utils/conversion.test.ts [2m([22m[2m13 tests[22m[2m)[22m[32m 6[2mms[22m[39m

[2m Test Files [22m [1m[32m1 passed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[32m13 passed[39m[22m[90m (13)[39m
[2m   Start at [22m 20:53:13
[2m   Duration [22m 187ms[2m (transform 29ms, setup 0ms, import 42ms, tests 6ms, environment 0ms)[22m


```

</details>

<details><summary>PASS — MystenLabs/sui-stack-hello-world@main/move (unknown)</summary>

- **Origin**: MystenLabs/sui-stack-hello-world@main
- **Package root**: `move`
- **Move edition**: 2024
- **Dependencies**: `Sui: framework/testnet`
- **Files**: `move/hello-world/Move.toml`
- **Referenced by**: [getting-started/onboarding/hello-world](https://docs.sui.io/getting-started/onboarding/hello-world) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/onboarding/hello-world.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (2.5s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING hello_world

```

**`sui move test`** — PASS (5.1s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING hello_world
Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/sui-stack-hello-world@main/move/hello-world (move)</summary>

- **Origin**: MystenLabs/sui-stack-hello-world@main
- **Package root**: `move/hello-world`
- **Move edition**: 2024
- **Dependencies**: `Sui: framework/testnet`
- **Files**: `move/hello-world/sources/greeting.move`
- **Referenced by**: [getting-started/onboarding/hello-world](https://docs.sui.io/getting-started/onboarding/hello-world) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/onboarding/hello-world.mdx))

**`sui move build`** — PASS (2.6s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING hello_world

```

**`sui move test`** — PASS (4.9s)

```
[NOTE] Dependencies on Sui, MoveStdlib, Bridge, DeepBook, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING hello_world
Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/sui-stack-hello-world@main/ui (typescript)</summary>

- **Origin**: MystenLabs/sui-stack-hello-world@main
- **Package root**: `ui`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/dapp-kit-core: ^1.0.4`, `@mysten/dapp-kit-react: ^1.0.2`, `@mysten/sui: 2.4.0`, `typescript: ^5.8.3`
- **Files**: `ui/src/App.tsx`, `ui/src/CreateGreeting.tsx`, `ui/src/Greeting.tsx`, `ui/src/constants.ts`, `ui/src/networkConfig.ts`
- **Referenced by**: [getting-started/onboarding/app-frontends](https://docs.sui.io/getting-started/onboarding/app-frontends) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/onboarding/app-frontends.mdx))

**`pnpm install`** — PASS (1.9s)

```
escript-eslint/parser 8.41.0
+ @vitejs/plugin-react-swc 3.11.0
+ eslint 9.34.0
+ eslint-plugin-react-hooks 5.2.0
+ eslint-plugin-react-refresh 0.4.20
+ prettier 3.6.2
+ typescript 5.9.2
+ vite 7.1.4

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: @swc/core@1.13.5, esbuild@0.25.9.                   │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
Done in 1.8s using pnpm v10.34.5

```

**`pnpm run build`** — PASS (6.3s)

```
ng...
[32m✓[39m 812 modules transformed.
rendering chunks...
computing gzip size...
[2mdist/[22m[32mindex.html                 [39m[1m[2m  1.23 kB[22m[1m[22m[2m │ gzip:   0.64 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-Cs5nhfe8.css  [39m[1m[2m689.24 kB[22m[1m[22m[2m │ gzip:  80.92 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-Df_K52sv.js   [39m[1m[33m666.55 kB[39m[22m[2m │ gzip: 205.75 kB[22m
[33m
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[32m✓ built in 3.20s[39m

```

**`tsc --noEmit --skipLibCheck`** — PASS (2.7s)

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/G1/scenario (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `G1/scenario`
- **Move edition**: 2024
- **Files**: `G1/scenario/sources/acl.move`, `G1/scenario/sources/hero.move`
- **Referenced by**: [getting-started/examples/scenario-testing](https://docs.sui.io/getting-started/examples/scenario-testing) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/scenario-testing.mdx))

**`inject [dependencies]`** — PASS (0.0s)

```
Move.toml had no [dependencies] — added empty section (Sui CLI auto-resolves system deps)
```

**`sui move build`** — PASS (0.7s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING scenario

```

**`sui move test`** — PASS (5.7s)

```
precated usage
   ┌─ ./sources/acl.move:79:24
   │
79 │         inner: vector::singleton(admin)
   │                        ^^^^^^^^^ The function 'std::vector::singleton' is deprecated: Use `vector[e]` literal instead
   │
   = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

Running Move unit tests
[ PASS    ] scenario::xp_tome::test_new
[ PASS    ] scenario::xp_tome_tests::test_new_xp_tome
[ PASS    ] scenario::hero::test_level_up
[ PASS    ] scenario::hero::test_mint
[ PASS    ] scenario::acl_tests::test_add_admin
[ PASS    ] scenario::hero_tests::test_level_up
[ PASS    ] scenario::hero_tests::test_mint
[ PASS    ] scenario::acl::test_add_admin
Test result: OK. Total tests: 8; passed: 8; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/G1 (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `G1`
- **Move edition**: 2024
- **Files**: `G1/scenario/tests/hero_tests.move`, `G1/scenario/tests/acl_tests.move`
- **Referenced by**: [getting-started/examples/scenario-testing](https://docs.sui.io/getting-started/examples/scenario-testing) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/scenario-testing.mdx))

**`sui move build`** — PASS (0.8s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING scenario

```

**`sui move test`** — PASS (5.7s)

```
precated usage
   ┌─ ./sources/acl.move:79:24
   │
79 │         inner: vector::singleton(admin)
   │                        ^^^^^^^^^ The function 'std::vector::singleton' is deprecated: Use `vector[e]` literal instead
   │
   = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

Running Move unit tests
[ PASS    ] scenario::xp_tome::test_new
[ PASS    ] scenario::hero_tests::test_level_up
[ PASS    ] scenario::hero_tests::test_mint
[ PASS    ] scenario::hero::test_level_up
[ PASS    ] scenario::hero::test_mint
[ PASS    ] scenario::acl_tests::test_add_admin
[ PASS    ] scenario::xp_tome_tests::test_new_xp_tome
[ PASS    ] scenario::acl::test_add_admin
Test result: OK. Total tests: 8; passed: 8; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/plinko-poc@main/plinko (move)</summary>

- **Origin**: MystenLabs/plinko-poc@main
- **Package root**: `plinko`
- **Move edition**: 2024
- **Files**: `plinko/sources/plinko.move`, `plinko/sources/house_data.move`
- **Referenced by**: [getting-started/examples/plinko](https://docs.sui.io/getting-started/examples/plinko) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/plinko.mdx))

**`inject [dependencies]`** — PASS (0.0s)

```
Move.toml had no [dependencies] — added empty section (Sui CLI auto-resolves system deps)
```

**`sui move build`** — PASS (0.7s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING plinko
warning[W04037]: deprecated usage
    ┌─ ./sources/plinko.move:175:10
    │
175 │     dof::exists_(house_data.borrow(), game_id)
    │          ^^^^^^^ The function 'sui::dynamic_object_field::exists_' is deprecated: Renamed to `exists`
    │
    = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')


```

**`sui move test`** — PASS (5.3s)

```
, 'fun', or 'struct')

Running Move unit tests
[ PASS    ] plinko::house_data_tests::claim_fees
[ PASS    ] plinko::house_data_tests::invalid_claim_fees
[ PASS    ] plinko::plinko_tests::insuficient_house_balance
[ PASS    ] plinko::house_data_tests::invalid_withdraw
[ PASS    ] plinko::plinko_tests::invalid_game_id
[ PASS    ] plinko::house_data_tests::top_up
[ PASS    ] plinko::house_data_tests::update_max_stake
[ PASS    ] plinko::plinko_tests::player_high_stake
[ PASS    ] plinko::house_data_tests::update_min_stake
[ PASS    ] plinko::plinko_tests::player_low_stake
[ PASS    ] plinko::house_data_tests::update_multiplier_vector
[ PASS    ] plinko::house_data_tests::withdraw
[ PASS    ] plinko::plinko_tests::player_valid_selections
Test result: OK. Total tests: 13; passed: 13; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/plinko-poc@main/app/src (typescript)</summary>

- **Origin**: MystenLabs/plinko-poc@main
- **Package root**: `app/src`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/codegen: ^0.8.4`, `@mysten/dapp-kit-core: ^1.3.0`, `@mysten/dapp-kit-react: ^2.0.1`, `@mysten/enoki: ^1.0.4`, `@mysten/sui: ^2.15.0`, `typescript: 5.1.6`
- **Files**: `app/src/hooks/moveTransactionCalls.ts/useCreateGame.ts`
- **Referenced by**: [getting-started/examples/plinko](https://docs.sui.io/getting-started/examples/plinko) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/plinko.mdx))

**`pnpm install`** — PASS (5.7s)

```
s:
+ @types/matter-js 0.19.6
+ @types/react-slick 0.23.13
+ autoprefixer 10.4.16
+ postcss 8.4.33
+ tailwindcss 3.4.1

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: bufferutil@4.0.8, protobufjs@7.5.4,                 │
│   utf-8-validate@5.0.10.                                                     │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
Done in 5.6s using pnpm v10.34.5

```

**`pnpm run build`** — PASS (55.3s)

```
irst Load JS shared by all              77.7 kB
  ├ chunks/849-c92b0b30eb228fed.js         25.2 kB
  ├ chunks/e9b4cd7a-ce9ab42d18b3907b.js    50.6 kB
  ├ chunks/main-app-d260d02d69b2e256.js    212 B
  └ chunks/webpack-58feb7106e621104.js     1.75 kB

Route (pages)                              Size     First Load JS
─ ○ /404                                   180 B          77.8 kB
+ First Load JS shared by all              77.6 kB
  ├ chunks/framework-510ec8ffd65e1d01.js   45 kB
  ├ chunks/main-b598a46d5a99b69c.js        30.6 kB
  ├ chunks/pages/_app-08c50647b1f4665f.js  194 B
  └ chunks/webpack-58feb7106e621104.js     1.75 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)


```

**`tsc --noEmit --skipLibCheck`** — PASS (4.8s)

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/plinko-poc@main/app (typescript)</summary>

- **Origin**: MystenLabs/plinko-poc@main
- **Package root**: `app`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/codegen: ^0.8.4`, `@mysten/dapp-kit-core: ^1.3.0`, `@mysten/dapp-kit-react: ^2.0.1`, `@mysten/enoki: ^1.0.4`, `@mysten/sui: ^2.15.0`, `typescript: 5.1.6`
- **Files**: `app/src/app/api/services/PlinkoGameService.ts`
- **Referenced by**: [getting-started/examples/plinko](https://docs.sui.io/getting-started/examples/plinko) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/plinko.mdx))

**`pnpm install`** — PASS (0.0s)

```
already installed (cached)
```

**`pnpm run build`** — PASS (19.2s)

```
irst Load JS shared by all              77.7 kB
  ├ chunks/849-c92b0b30eb228fed.js         25.2 kB
  ├ chunks/e9b4cd7a-ce9ab42d18b3907b.js    50.6 kB
  ├ chunks/main-app-2be74fb973cc61e4.js    212 B
  └ chunks/webpack-58feb7106e621104.js     1.75 kB

Route (pages)                              Size     First Load JS
─ ○ /404                                   180 B          77.8 kB
+ First Load JS shared by all              77.6 kB
  ├ chunks/framework-510ec8ffd65e1d01.js   45 kB
  ├ chunks/main-b598a46d5a99b69c.js        30.6 kB
  ├ chunks/pages/_app-08c50647b1f4665f.js  194 B
  └ chunks/webpack-58feb7106e621104.js     1.75 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)


```

**`tsc --noEmit --skipLibCheck`** — PASS (3.0s)

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/F1/app/my-first-sui-dapp/src (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `F1/app/my-first-sui-dapp/src`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/dapp-kit-react: ^1.0.1`, `@mysten/sui: ^2.3.0`, `typescript: ^5.9.3`
- **Files**: `F1/app/my-first-sui-dapp/src/components/ui/CreateHeroForm.tsx`, `F1/app/my-first-sui-dapp/src/components/ui/HeroesList.tsx`
- **Referenced by**: [getting-started/examples/nft-app](https://docs.sui.io/getting-started/examples/nft-app) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/nft-app.mdx))

**`pnpm install`** — PASS (1.8s)

```
0

devDependencies:
+ @tailwindcss/vite 4.1.18
+ @types/react 19.2.14
+ @types/react-dom 19.2.3
+ @vitejs/plugin-react-swc 4.2.3
+ prettier 3.8.1
+ tailwindcss 4.1.18
+ typescript 5.9.3
+ vite 7.3.1

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: @swc/core@1.15.11, esbuild@0.27.3.                  │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
Done in 1.7s using pnpm v10.34.5

```

**`pnpm run build`** — FAIL (2.8s)

```
> my-first-sui-dapp@0.0.0 build /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--sui-move-bootcamp--solution/F1/app/my-first-sui-dapp
> tsc && vite build

src/components/ui/HeroesList.tsx(46,36): error TS7006: Parameter 'i' implicitly has an 'any' type.
 ELIFECYCLE  Command failed with exit code 2.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (2.7s)

```
src/components/ui/HeroesList.tsx(46,36): error TS7006: Parameter 'i' implicitly has an 'any' type.
```

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/CTF@main/contracts (move)</summary>

- **Origin**: MystenLabs/CTF@main
- **Package root**: `contracts`
- **Move edition**: 2024
- **Dependencies**: `usdc: master`
- **Files**: `contracts/sources/merchant.move`
- **Referenced by**: [getting-started/examples/merchant-ctf](https://docs.sui.io/getting-started/examples/merchant-ctf) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/merchant-ctf.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (7.8s)

```
Downloading from https://github.com/circlefin/stablecoin-sui.git
Downloading from https://github.com/MystenLabs/sui.git
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
INCLUDING DEPENDENCY stablecoin
INCLUDING DEPENDENCY sui_extensions
INCLUDING DEPENDENCY usdc
BUILDING ctf

```

**`sui move test`** — PASS (5.3s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
INCLUDING DEPENDENCY stablecoin
INCLUDING DEPENDENCY sui_extensions
INCLUDING DEPENDENCY usdc
BUILDING ctf
Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@main/K1/contract (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@main
- **Package root**: `K1/contract`
- **Move edition**: 2024
- **Files**: `K1/contract/sources/indexer_sample.move`
- **Referenced by**: [getting-started/examples/event-indexer](https://docs.sui.io/getting-started/examples/event-indexer) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/event-indexer.mdx))

**`sui move build`** — PASS (0.7s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING indexer_sample

```

**`sui move test`** — PASS (4.9s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING indexer_sample
Running Move unit tests
Test result: OK. Total tests: 0; passed: 0; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@main/K1 (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@main
- **Package root**: `K1`
- **Package manager**: npm
- **Dependencies**: `@mysten/sui: ^1.43.1`, `typescript: ^5.9.3`
- **Files**: `K1/backend/indexer.ts`
- **Referenced by**: [getting-started/examples/event-indexer](https://docs.sui.io/getting-started/examples/event-indexer) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/event-indexer.mdx))

**`npm install`** — PASS (4.5s)

```
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

added 354 packages, and audited 355 packages in 4s

52 packages are looking for funding
  run `npm fund` for details

10 vulnerabilities (2 low, 2 moderate, 5 high, 1 critical)

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

```

**`tsc --noEmit --skipLibCheck`** — PASS (1.8s)

**`npm test`** — FAIL (2.8s)

```
er (2 ms)

  ● User Registration Tests › should successfully register a new user

    PACKAGE_ID and USERS_COUNTER_OBJECT_ID must be set in environment

    [0m [90m 22 |[39m
     [90m 23 |[39m     [36mif[39m ([33m![39mpackageId [33m||[39m [33m![39musersCounterObjectId) {
    [31m[1m>[22m[39m[90m 24 |[39m       [36mthrow[39m [36mnew[39m [33mError[39m(
     [90m    |[39m             [31m[1m^[22m[39m
     [90m 25 |[39m         [32m"PACKAGE_ID and USERS_COUNTER_OBJECT_ID must be set in environment"[39m
     [90m 26 |[39m       )[33m;[39m
     [90m 27 |[39m     }[0m

      at Object.<anonymous> (tests/registerUser.test.ts:24:13)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.297 s
Ran all test suites.
```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@main/K1/backend (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@main
- **Package root**: `K1/backend`
- **Package manager**: npm
- **Dependencies**: `@mysten/sui: ^1.43.1`, `typescript: ^5.9.3`
- **Files**: `K1/backend/utils/parseEvent.ts`
- **Referenced by**: [getting-started/examples/event-indexer](https://docs.sui.io/getting-started/examples/event-indexer) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/event-indexer.mdx))

**`npm install`** — PASS (0.0s)

```
already installed (cached)
```

**`tsc --noEmit --skipLibCheck`** — PASS (1.8s)

**`npm test`** — FAIL (2.3s)

```
User Registration Tests › should successfully register a new user

    PACKAGE_ID and USERS_COUNTER_OBJECT_ID must be set in environment

    [0m [90m 22 |[39m
     [90m 23 |[39m     [36mif[39m ([33m![39mpackageId [33m||[39m [33m![39musersCounterObjectId) {
    [31m[1m>[22m[39m[90m 24 |[39m       [36mthrow[39m [36mnew[39m [33mError[39m(
     [90m    |[39m             [31m[1m^[22m[39m
     [90m 25 |[39m         [32m"PACKAGE_ID and USERS_COUNTER_OBJECT_ID must be set in environment"[39m
     [90m 26 |[39m       )[33m;[39m
     [90m 27 |[39m     }[0m

      at Object.<anonymous> (tests/registerUser.test.ts:24:13)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.795 s, estimated 3 s
Ran all test suites.
```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/C5/contracts/derived_objects (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `C5/contracts/derived_objects`
- **Move edition**: 2024
- **Files**: `C5/contracts/derived_objects/sources/parent.move`
- **Referenced by**: [getting-started/examples/derived-objects](https://docs.sui.io/getting-started/examples/derived-objects) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/derived-objects.mdx))

**`sui move build`** — PASS (0.7s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING derived_objects

```

**`sui move test`** — PASS (5.2s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING derived_objects
Running Move unit tests
[ PASS    ] derived_objects::derived_objects_tests::test_derived_address
[ PASS    ] derived_objects::derived_objects_tests::test_derived_incremental
[ PASS    ] derived_objects::derived_objects_tests::test_derived_string
[ PASS    ] derived_objects::derived_objects_tests::test_derived_struct
Test result: OK. Total tests: 4; passed: 4; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/C5/ts (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `C5/ts`
- **Package manager**: npm
- **Dependencies**: `@mysten/sui: ^2.6.0`
- **Files**: `C5/ts/src/helpers/deriveObjectID.ts`
- **Referenced by**: [getting-started/examples/derived-objects](https://docs.sui.io/getting-started/examples/derived-objects) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/derived-objects.mdx))

**`npm install`** — PASS (8.4s)

```
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@mysten/sui@2.20.3',
npm warn EBADENGINE   required: { node: '>=22' },
npm warn EBADENGINE   current: { node: 'v20.20.2', npm: '10.8.2' }
npm warn EBADENGINE }

added 69 packages, and audited 70 packages in 8s

22 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

```

**`tsc --noEmit --skipLibCheck`** — PASS (1.8s)

**`npm test`** — FAIL (0.9s)

```
ils.ts:[2m4:1[22m[39m
[90m [2m❯[22m tests/derive.test.ts:[2m6:1[22m[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [2mno tests[22m
[2m   Start at [22m 20:56:24
[2m   Duration [22m 462ms[2m (transform 52ms, setup 0ms, import 0ms, tests 0ms, environment 0ms)[22m


::error file=/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--sui-move-bootcamp--solution/C5/ts/src/suiClient.ts,title=tests/derive.test.ts,line=5,column=14::Error: Unknown network: undefined%0A ❯ getJsonRpcFullnodeUrl node_modules/@mysten/sui/src/jsonRpc/network.ts:15:9%0A ❯ src/suiClient.ts:5:14%0A ❯ tests/derive.utils.ts:4:1%0A ❯ tests/derive.test.ts:6:1%0A%0A
```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/E2/my-first-sui-dapp (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `E2/my-first-sui-dapp`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/dapp-kit-react: ^1.0.1`, `@mysten/sui: ^2.3.0`, `typescript: ^5.9.3`
- **Files**: `E2/my-first-sui-dapp/src/dapp-kit.ts`, `E2/my-first-sui-dapp/src/OwnedObjects.tsx`, `E2/my-first-sui-dapp/src/main.tsx`
- **Referenced by**: [getting-started/examples/dapp-kit-frontend](https://docs.sui.io/getting-started/examples/dapp-kit-frontend) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/dapp-kit-frontend.mdx))

**`pnpm install`** — PASS (2.1s)

```
5.0

devDependencies:
+ @tailwindcss/vite 4.2.0
+ @types/react 19.2.14
+ @types/react-dom 19.2.3
+ @vitejs/plugin-react-swc 4.2.3
+ prettier 3.8.1
+ tailwindcss 4.2.0
+ typescript 5.9.3
+ vite 7.3.1

╭ Warning ─────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Ignored build scripts: @swc/core@1.15.17, esbuild@0.27.3.                  │
│   Run "pnpm approve-builds" to pick which dependencies should be allowed     │
│   to run scripts.                                                            │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯
Done in 2.1s using pnpm v10.34.5

```

**`pnpm run build`** — FAIL (2.7s)

```
> my-first-sui-dapp@0.0.0 build /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--sui-move-bootcamp--solution/E2/my-first-sui-dapp
> tsc && vite build

src/components/ui/MintNFTForm.tsx(1,47): error TS6133: 'useCurrentNetwork' is declared but its value is never read.
 ELIFECYCLE  Command failed with exit code 2.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (2.6s)

```
src/components/ui/MintNFTForm.tsx(1,47): error TS6133: 'useCurrentNetwork' is declared but its value is never read.
```

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/E2/my-first-sui-dapp/src (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `E2/my-first-sui-dapp/src`
- **Package manager**: pnpm
- **Dependencies**: `@mysten/dapp-kit-react: ^1.0.1`, `@mysten/sui: ^2.3.0`, `typescript: ^5.9.3`
- **Files**: `E2/my-first-sui-dapp/src/components/ui/MintNFTForm.tsx`
- **Referenced by**: [getting-started/examples/dapp-kit-frontend](https://docs.sui.io/getting-started/examples/dapp-kit-frontend) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/dapp-kit-frontend.mdx))

**`pnpm install`** — PASS (0.0s)

```
already installed (cached)
```

**`pnpm run build`** — FAIL (2.7s)

```
> my-first-sui-dapp@0.0.0 build /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--sui-move-bootcamp--solution/E2/my-first-sui-dapp
> tsc && vite build

src/components/ui/MintNFTForm.tsx(1,47): error TS6133: 'useCurrentNetwork' is declared but its value is never read.
 ELIFECYCLE  Command failed with exit code 2.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (2.5s)

```
src/components/ui/MintNFTForm.tsx(1,47): error TS6133: 'useCurrentNetwork' is declared but its value is never read.
```

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/deepbookv3@main/packages/deepbook (move)</summary>

- **Origin**: MystenLabs/deepbookv3@main
- **Package root**: `packages/deepbook`
- **Move edition**: 2024
- **Dependencies**: `token: main`
- **Files**: `packages/deepbook/sources/pool.move`, `packages/deepbook/sources/balance_manager.move`, `packages/deepbook/sources/helper/constants.move`, `packages/deepbook/sources/book/order_info.move`, `packages/deepbook/sources/vault/deep_price.move`, `packages/deepbook/sources/book/fill.move`, `packages/deepbook/sources/book/order.move`
- **Referenced by**: [onchain-finance/deepbookv3/contract-information/swaps](https://docs.sui.io/onchain-finance/deepbookv3/contract-information/swaps) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3/contract-information/swaps.mdx)), [onchain-finance/deepbookv3/contract-information/staking-governance](https://docs.sui.io/onchain-finance/deepbookv3/contract-information/staking-governance) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3/contract-information/staking-governance.mdx)), [onchain-finance/deepbookv3/contract-information/referral](https://docs.sui.io/onchain-finance/deepbookv3/contract-information/referral) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3/contract-information/referral.mdx)), [onchain-finance/deepbookv3/contract-information/query-the-pool](https://docs.sui.io/onchain-finance/deepbookv3/contract-information/query-the-pool) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3/contract-information/query-the-pool.mdx)), [onchain-finance/deepbookv3/contract-information/permissionless-pool](https://docs.sui.io/onchain-finance/deepbookv3/contract-information/permissionless-pool) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3/contract-information/permissionless-pool.mdx)), [onchain-finance/deepbookv3/contract-information/orders](https://docs.sui.io/onchain-finance/deepbookv3/contract-information/orders) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3/contract-information/orders.mdx)), [onchain-finance/deepbookv3/contract-information/flash-loans](https://docs.sui.io/onchain-finance/deepbookv3/contract-information/flash-loans) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3/contract-information/flash-loans.mdx)), [onchain-finance/deepbookv3/contract-information/balance-manager](https://docs.sui.io/onchain-finance/deepbookv3/contract-information/balance-manager) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbookv3/contract-information/balance-manager.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (2.9s)

```
37]: deprecated usage
    ┌─ ./sources/registry.move:283:17
    │
283 │     if (self.id.exists_(AllowedPauseCapsKey())) {
    │                 ^^^^^^^ The method 'exists_' resolves to the function 'sui::dynamic_field::exists_' which is deprecated: Renamed to `exists`
    │
    = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

warning[W04037]: deprecated usage
    ┌─ ./sources/registry.move:294:25
    │
294 │         !dynamic_field::exists_(
    │                         ^^^^^^^ The function 'sui::dynamic_field::exists_' is deprecated: Renamed to `exists`
    │
    = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')


```

**`sui move test`** — PASS (9.2s)

```
er_zero_base_out_ok
[ PASS    ] deepbook::pool_tests::test_swap_with_manager_zero_quote_out_ok
[ PASS    ] deepbook::pool_tests::test_unregister_pool_ok
[ PASS    ] deepbook::pool_tests::test_update_deepbook_referral_multiplier_e
[ PASS    ] deepbook::pool_tests::test_update_deepbook_referral_multiplier_wrong_owner
[ PASS    ] deepbook::pool_tests::test_update_pool_book_params_ok
[ PASS    ] deepbook::pool_tests::test_update_pool_book_params_small_lot_e
[ PASS    ] deepbook::pool_tests::test_update_pool_book_params_tick_e
[ PASS    ] deepbook::pool_tests::test_update_pool_book_params_trade_e
[ PASS    ] deepbook::pool_tests::test_update_pool_book_params_update_e
[ PASS    ] deepbook::pool_tests::test_using_unregistered_as_reference
Test result: OK. Total tests: 381; passed: 381; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/deepbookv3@predict-testnet-4-16/packages/predict (move)</summary>

- **Origin**: MystenLabs/deepbookv3@predict-testnet-4-16
- **Package root**: `packages/predict`
- **Move edition**: 2024
- **Dependencies**: `deepbook: local`
- **Files**: `packages/predict/sources/vault/vault.move`, `packages/predict/sources/vault/plp.move`, `packages/predict/sources/registry.move`, `packages/predict/sources/predict.move`, `packages/predict/sources/predict_manager.move`, `packages/predict/sources/oracle.move`, `packages/predict/sources/market_key/market_key.move`, `packages/predict/sources/market_key/range_key.move`
- **Referenced by**: [onchain-finance/deepbook-predict/contract-information/vault](https://docs.sui.io/onchain-finance/deepbook-predict/contract-information/vault) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-predict/contract-information/vault.mdx)), [onchain-finance/deepbook-predict/contract-information/registry](https://docs.sui.io/onchain-finance/deepbook-predict/contract-information/registry) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-predict/contract-information/registry.mdx)), [onchain-finance/deepbook-predict/contract-information/predict](https://docs.sui.io/onchain-finance/deepbook-predict/contract-information/predict) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-predict/contract-information/predict.mdx)), [onchain-finance/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook-predict/contract-information/predict-manager) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-predict/contract-information/predict-manager.mdx)), [onchain-finance/deepbook-predict/contract-information/oracle](https://docs.sui.io/onchain-finance/deepbook-predict/contract-information/oracle) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-predict/contract-information/oracle.mdx)), [onchain-finance/deepbook-predict/contract-information/market-keys](https://docs.sui.io/onchain-finance/deepbook-predict/contract-information/market-keys) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-predict/contract-information/market-keys.mdx))

**`fix edition`** — PASS (0.0s)

```
Changed edition from "2024.beta" to "2024"
```

**`sui move build`** — PASS (1.9s)

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
INCLUDING DEPENDENCY deepbook
INCLUDING DEPENDENCY token
BUILDING deepbook_predict
warning[Lint W99012]: unused object with fields
    ┌─ ./sources/oracle.move:346:72
    │
346 │ public(package) fun binary_price_pair(oracle: &OracleSVI, strike: u64, _clock: &Clock): (u64, u64) {
    │                                                                        ^^^^^^ Unused object with fields. Consider reading or writing the object's fields, or passing it to another function.
    │
    = This warning can be suppressed with '#[allow(lint(unused_object_with_fields))]' applied to the 'module' or module member ('const', 'fun', or 'struct')

Please report feedback on the linter warnings at https://forums.sui.io


```

**`sui move test`** — PASS (6.5s)

```
::rate_limiter_tests::third_large_withdrawal_blocked_without_refill
[ PASS    ] deepbook_predict::rate_limiter_tests::two_withdrawals_drain_bucket
[ PASS    ] deepbook_predict::rate_limiter_tests::update_config_preserves_refilled_tokens
[ PASS    ] deepbook_predict::rate_limiter_tests::update_config_rate_exceeds_capacity_aborts
[ PASS    ] deepbook_predict::rate_limiter_tests::update_config_shrink_capacity_caps_available
[ PASS    ] deepbook_predict::rate_limiter_tests::update_config_zero_rate_aborts
[ PASS    ] deepbook_predict::rate_limiter_tests::withdraw_deposit_withdraw_cycle
[ PASS    ] deepbook_predict::rate_limiter_tests::withdraw_deposit_withdraw_exceeds
Test result: OK. Total tests: 34; passed: 34; failed: 0
Please report feedback on the linter warnings at https://forums.sui.io


```

</details>

<details><summary>PASS — MystenLabs/deepbookv3@main/packages/deepbook_margin (move)</summary>

- **Origin**: MystenLabs/deepbookv3@main
- **Package root**: `packages/deepbook_margin`
- **Move edition**: 2024.alpha
- **Dependencies**: `token: main`, `deepbook: local`, `pyth: sui-contract-mainnet`
- **Files**: `packages/deepbook_margin/sources/tpsl.move`, `packages/deepbook_margin/sources/margin_manager.move`, `packages/deepbook_margin/sources/margin_pool.move`, `packages/deepbook_margin/sources/margin_pool/protocol_fees.move`, `packages/deepbook_margin/sources/pool_proxy.move`, `packages/deepbook_margin/sources/margin_registry.move`
- **Referenced by**: [onchain-finance/deepbook-margin/contract-information/tpsl](https://docs.sui.io/onchain-finance/deepbook-margin/contract-information/tpsl) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-margin/contract-information/tpsl.mdx)), [onchain-finance/deepbook-margin/contract-information/supply-referral](https://docs.sui.io/onchain-finance/deepbook-margin/contract-information/supply-referral) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-margin/contract-information/supply-referral.mdx)), [onchain-finance/deepbook-margin/contract-information/orders](https://docs.sui.io/onchain-finance/deepbook-margin/contract-information/orders) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-margin/contract-information/orders.mdx)), [onchain-finance/deepbook-margin/contract-information/margin-pool](https://docs.sui.io/onchain-finance/deepbook-margin/contract-information/margin-pool) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-margin/contract-information/margin-pool.mdx)), [onchain-finance/deepbook-margin/contract-information/margin-manager](https://docs.sui.io/onchain-finance/deepbook-margin/contract-information/margin-manager) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-margin/contract-information/margin-manager.mdx)), [onchain-finance/deepbook-margin/contract-information/maintainer](https://docs.sui.io/onchain-finance/deepbook-margin/contract-information/maintainer) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook-margin/contract-information/maintainer.mdx))

**`sui move build`** — PASS (15.9s)

```
^^^^^^^^^^^^ The method 'divide_and_round_up' resolves to the function 'std::u128::divide_and_round_up' which is deprecated: Renamed to `div_ceil` for consistency
    │
    = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

warning[W04037]: deprecated usage
    ┌─ ./sources/helper/oracle.move:233:14
    │
233 │             .divide_and_round_up(10u128.pow(BUFFER)) as u64;
    │              ^^^^^^^^^^^^^^^^^^^ The method 'divide_and_round_up' resolves to the function 'std::u128::divide_and_round_up' which is deprecated: Renamed to `div_ceil` for consistency
    │
    = This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')


```

**`sui move test`** — PASS (10.1s)

```
ol_proxy_tests::test_tolerance_decrease_changes_bounds
[ PASS    ] deepbook_margin::pool_proxy_tests::test_tolerance_decrease_rejects_order_e2e
[ PASS    ] deepbook_margin::pool_proxy_tests::test_tolerance_increase_changes_bounds
[ PASS    ] deepbook_margin::pool_proxy_tests::test_unstake_ok
[ PASS    ] deepbook_margin::pool_proxy_tests::test_vote_ok
[ PASS    ] deepbook_margin::pool_proxy_tests::test_withdraw_settled_amounts_ok
[ PASS    ] deepbook_margin::pool_proxy_tests::test_withdraw_settled_amounts_permissionless_incorrect_pool_e
[ PASS    ] deepbook_margin::pool_proxy_tests::test_withdraw_settled_amounts_permissionless_no_balance_e
[ PASS    ] deepbook_margin::pool_proxy_tests::test_withdraw_settled_amounts_permissionless_ok
Test result: OK. Total tests: 331; passed: 331; failed: 0

```

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/enoki (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/enoki`
- **Package manager**: npm
- **Dependencies**: `@mysten/utils: workspace:^`, `@mysten/wallet-standard: workspace:^`, `@mysten/webcrypto-signer: workspace:^`, `@mysten/dapp-kit-react: workspace:^`, `typescript: ^6.0.3`
- **Files**: `packages/enoki/src/wallet/register.ts`
- **Referenced by**: [onchain-finance/asset-custody/wallets/zk-login-wallets](https://docs.sui.io/onchain-finance/asset-custody/wallets/zk-login-wallets) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/zk-login-wallets.mdx))

**`pnpm install`** — PASS (0.0s)

```
already installed (cached)
```

**`pnpm run build`** — FAIL (2.1s)

```
 Binding element 'message' implicitly has an 'any' type.
src/wallet/wallet.ts(231,73): error TS7031: Binding element 'account' implicitly has an 'any' type.
src/wallet/wallet.ts(231,82): error TS7031: Binding element 'chain' implicitly has an 'any' type.
src/wallet/wallet.ts(233,30): error TS2339: Property 'toSuiAddress' does not exist on type 'EnokiKeypair'.
src/wallet/wallet.ts(241,18): error TS2339: Property 'signPersonalMessage' does not exist on type 'EnokiKeypair'.
src/wallet/wallet.ts(257,33): error TS7006: Parameter 'event' implicitly has an 'any' type.
src/wallet/wallet.ts(257,40): error TS7006: Parameter 'listener' implicitly has an 'any' type.
src/wallet/wallet.ts(262,43): error TS7006: Parameter 'input' implicitly has an 'any' type.
 ELIFECYCLE  Command failed with exit code 2.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (1.2s)

```
'.
src/wallet/wallet.ts(231,64): error TS7031: Binding element 'message' implicitly has an 'any' type.
src/wallet/wallet.ts(231,73): error TS7031: Binding element 'account' implicitly has an 'any' type.
src/wallet/wallet.ts(231,82): error TS7031: Binding element 'chain' implicitly has an 'any' type.
src/wallet/wallet.ts(233,30): error TS2339: Property 'toSuiAddress' does not exist on type 'EnokiKeypair'.
src/wallet/wallet.ts(241,18): error TS2339: Property 'signPersonalMessage' does not exist on type 'EnokiKeypair'.
src/wallet/wallet.ts(257,33): error TS7006: Parameter 'event' implicitly has an 'any' type.
src/wallet/wallet.ts(257,40): error TS7006: Parameter 'listener' implicitly has an 'any' type.
src/wallet/wallet.ts(262,43): error TS7006: Parameter 'input' implicitly has an 'any' type.
```

**`workspace package (deps resolved)`** — PASS (0.0s)

```
Package is part of a workspace — deps installed successfully, full build requires monorepo context
```

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/sui (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/sui`
- **Package manager**: npm
- **Dependencies**: `@mysten/bcs: workspace:^`, `@mysten/utils: workspace:^`, `typescript: ^6.0.3`
- **Files**: `packages/sui/src/zklogin/address.ts`, `packages/sui/src/zklogin/signature.ts`
- **Referenced by**: [onchain-finance/asset-custody/wallets/zk-login-wallets](https://docs.sui.io/onchain-finance/asset-custody/wallets/zk-login-wallets) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/zk-login-wallets.mdx))

**`pnpm install`** — PASS (0.0s)

```
already installed (cached)
```

**`pnpm run build`** — FAIL (4.6s)

```
 TS7006: Parameter 'typeParam' implicitly has an 'any' type.
src/verify/verify.ts(4,28): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
src/zklogin/bcs.ts(4,36): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
src/zklogin/bcs.ts(5,21): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
src/zklogin/nonce.ts(4,23): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
src/zklogin/publickey.ts(4,45): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
src/zklogin/signature.ts(4,38): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
 ELIFECYCLE  Command failed with exit code 2.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (1.7s)

```
arations.
src/utils/sui-types.ts(144,6): error TS7006: Parameter 'typeParam' implicitly has an 'any' type.
src/verify/verify.ts(4,28): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
src/zklogin/bcs.ts(4,36): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
src/zklogin/bcs.ts(5,21): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
src/zklogin/nonce.ts(4,23): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
src/zklogin/publickey.ts(4,45): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
src/zklogin/signature.ts(4,38): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
```

**`workspace package (deps resolved)`** — PASS (0.0s)

```
Package is part of a workspace — deps installed successfully, full build requires monorepo context
```

**`pnpm test`** — FAIL (7.8s)

```
mplicitly has an 'any' type.
test/unit/transactions/bcs.test.ts(4,26): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
test/unit/transactions/object-inputs.test.ts(4,26): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
test/unit/transactions/pure-serialization.test.ts(4,21): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
test/unit/transactions/v1-json.test.ts(4,26): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
test/unit/zklogin/signer.test.ts(4,43): error TS2307: Cannot find module '@mysten/bcs' or its corresponding type declarations.
 ELIFECYCLE  Command failed with exit code 2.
 ELIFECYCLE  Test failed. See above for more details.
```

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/slush-wallet (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/slush-wallet`
- **Package manager**: npm
- **Dependencies**: `@mysten/utils: workspace:^`, `@mysten/wallet-standard: workspace:^`, `@mysten/window-wallet-core: workspace:^`, `typescript: ^6.0.3`
- **Files**: `packages/slush-wallet/src/wallet/index.ts`
- **Referenced by**: [onchain-finance/asset-custody/wallets/slush](https://docs.sui.io/onchain-finance/asset-custody/wallets/slush) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/slush.mdx))

**`pnpm install`** — PASS (0.0s)

```
already installed (cached)
```

**`pnpm run build`** — FAIL (1.8s)

```
src/wallet/index.ts(254,64): error TS7031: Binding element 'message' implicitly has an 'any' type.
src/wallet/index.ts(254,73): error TS7031: Binding element 'account' implicitly has an 'any' type.
src/wallet/index.ts(254,82): error TS7031: Binding element 'chain' implicitly has an 'any' type.
src/wallet/index.ts(271,33): error TS7006: Parameter 'event' implicitly has an 'any' type.
src/wallet/index.ts(271,40): error TS7006: Parameter 'listener' implicitly has an 'any' type.
src/wallet/index.ts(281,43): error TS7006: Parameter 'input' implicitly has an 'any' type.
src/wallet/index.ts(348,26): error TS7006: Parameter 'wallet' implicitly has an 'any' type.
src/wallet/index.ts(354,40): error TS7006: Parameter 'wallet' implicitly has an 'any' type.
 ELIFECYCLE  Command failed with exit code 2.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (1.1s)

```
element 'chain' implicitly has an 'any' type.
src/wallet/index.ts(254,64): error TS7031: Binding element 'message' implicitly has an 'any' type.
src/wallet/index.ts(254,73): error TS7031: Binding element 'account' implicitly has an 'any' type.
src/wallet/index.ts(254,82): error TS7031: Binding element 'chain' implicitly has an 'any' type.
src/wallet/index.ts(271,33): error TS7006: Parameter 'event' implicitly has an 'any' type.
src/wallet/index.ts(271,40): error TS7006: Parameter 'listener' implicitly has an 'any' type.
src/wallet/index.ts(281,43): error TS7006: Parameter 'input' implicitly has an 'any' type.
src/wallet/index.ts(348,26): error TS7006: Parameter 'wallet' implicitly has an 'any' type.
src/wallet/index.ts(354,40): error TS7006: Parameter 'wallet' implicitly has an 'any' type.
```

**`workspace package (deps resolved)`** — PASS (0.0s)

```
Package is part of a workspace — deps installed successfully, full build requires monorepo context
```

**`pnpm test`** — SKIP (0.0s)

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/dapp-kit-next/packages/dapp-kit-react/src (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/dapp-kit-next/packages/dapp-kit-react/src`
- **Files**: `packages/dapp-kit-next/packages/dapp-kit-react/src/components/DAppKitProvider.tsx`, `packages/dapp-kit-next/packages/dapp-kit-react/src/hooks/useWalletConnection.ts`, `packages/dapp-kit-next/packages/dapp-kit-react/src/hooks/useCurrentWallet.ts`, `packages/dapp-kit-next/packages/dapp-kit-react/src/hooks/useCurrentAccount.ts`, `packages/dapp-kit-next/packages/dapp-kit-react/src/hooks/useWallets.ts`, `packages/dapp-kit-next/packages/dapp-kit-react/src/hooks/useDAppKit.ts`
- **Referenced by**: [onchain-finance/asset-custody/wallets/slush](https://docs.sui.io/onchain-finance/asset-custody/wallets/slush) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/slush.mdx)), [onchain-finance/asset-custody/wallets/self-custody](https://docs.sui.io/onchain-finance/asset-custody/wallets/self-custody) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/self-custody.mdx))

**`resolve workspace root`** — PASS (0.0s)

```
Using workspace root: /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main
```

**`pnpm install`** — PASS (0.0s)

```
already installed (cached)
```

**`pnpm run build`** — FAIL (3.8s)

```
ECYCLE  Command failed with exit code 1.
::endgroup::
::error::@mysten/walrus#build:docs: command (/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/walrus) /home/runner/.local/share/pnpm/.tools/pnpm/10.33.0/bin/pnpm run build:docs exited (1)
 ERROR  @mysten/walrus#build:docs: command (/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/walrus) /home/runner/.local/share/pnpm/.tools/pnpm/10.33.0/bin/pnpm run build:docs exited (1)

 Tasks:    0 successful, 14 total
Cached:    0 cached, 14 total
  Time:    2.852s 
Failed:    @mysten/walrus#build:docs

 ERROR  run failed: command  exited (1)
 ELIFECYCLE  Command failed with exit code 1.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (1.3s)

```
nstall type definitions for node? Try `npm i --save-dev @types/node` and then add 'node' to the types field in your tsconfig.
../../../scripts/validate-package.ts(169,7): error TS2591: Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node` and then add 'node' to the types field in your tsconfig.
../../../scripts/validate-package.ts(173,30): error TS2454: Variable 'result' is used before being assigned.
../../../scripts/validate-package.ts(176,7): error TS2454: Variable 'result' is used before being assigned.
../../../scripts/validate-package.ts(177,5): error TS2591: Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node` and then add 'node' to the types field in your tsconfig.
```

**`pnpm test`** — FAIL (3.9s)

```
rent: {"node":"v20.20.2","pnpm":"10.33.0"})
::endgroup::
::error::@mysten/seal#build:docs: command (/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/seal) /home/runner/.local/share/pnpm/.tools/pnpm/10.33.0/bin/pnpm run build:docs exited (1)
 ERROR  @mysten/seal#build:docs: command (/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/seal) /home/runner/.local/share/pnpm/.tools/pnpm/10.33.0/bin/pnpm run build:docs exited (1)

 Tasks:    0 successful, 15 total
Cached:    0 cached, 15 total
  Time:    2.94s 
Failed:    @mysten/seal#build:docs

 ERROR  run failed: command  exited (1)
 ELIFECYCLE  Test failed. See above for more details.
```

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/dapp-kit-next/packages/dapp-kit-core (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/dapp-kit-next/packages/dapp-kit-core`
- **Files**: `packages/dapp-kit-next/packages/dapp-kit-core/src/core/index.ts`
- **Referenced by**: [onchain-finance/asset-custody/wallets/self-custody](https://docs.sui.io/onchain-finance/asset-custody/wallets/self-custody) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/self-custody.mdx))

**`resolve workspace root`** — PASS (0.0s)

```
Using workspace root: /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main
```

**`pnpm install`** — PASS (0.0s)

```
already installed (cached)
```

**`pnpm run build`** — FAIL (3.1s)

```
:endgroup::
::error::@mysten/dapp-kit#build:docs: command (/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/dapp-kit/packages/legacy) /home/runner/.local/share/pnpm/.tools/pnpm/10.33.0/bin/pnpm run build:docs exited (1)
 ERROR  @mysten/dapp-kit#build:docs: command (/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/dapp-kit/packages/legacy) /home/runner/.local/share/pnpm/.tools/pnpm/10.33.0/bin/pnpm run build:docs exited (1)

 Tasks:    0 successful, 15 total
Cached:    0 cached, 15 total
  Time:    2.225s 
Failed:    @mysten/dapp-kit#build:docs

 ERROR  run failed: command  exited (1)
 ELIFECYCLE  Command failed with exit code 1.
```

**`tsc --noEmit --skipLibCheck`** — FAIL (1.3s)

```
nstall type definitions for node? Try `npm i --save-dev @types/node` and then add 'node' to the types field in your tsconfig.
../../../scripts/validate-package.ts(169,7): error TS2591: Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node` and then add 'node' to the types field in your tsconfig.
../../../scripts/validate-package.ts(173,30): error TS2454: Variable 'result' is used before being assigned.
../../../scripts/validate-package.ts(176,7): error TS2454: Variable 'result' is used before being assigned.
../../../scripts/validate-package.ts(177,5): error TS2591: Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node` and then add 'node' to the types field in your tsconfig.
```

**`pnpm test`** — FAIL (3.7s)

```
-docs.ts

 ELIFECYCLE  Command failed.
::endgroup::
::error::@mysten/kiosk#build:docs: command (/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/kiosk) /home/runner/.local/share/pnpm/.tools/pnpm/10.33.0/bin/pnpm run build:docs exited (1)
 ERROR  @mysten/kiosk#build:docs: command (/home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main/packages/kiosk) /home/runner/.local/share/pnpm/.tools/pnpm/10.33.0/bin/pnpm run build:docs exited (1)

 Tasks:    0 successful, 14 total
Cached:    0 cached, 14 total
  Time:    2.82s 
Failed:    @mysten/kiosk#build:docs

 ERROR  run failed: command  exited (1)
 ELIFECYCLE  Test failed. See above for more details.
```

</details>
