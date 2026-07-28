# Sui Docs Example Validation Report

> **Mode**: `strict` — examples validated as-authored, no patching

## Summary

| Metric | Value |
|--------|-------|
| Date | 2026-07-28T16:55:37.204Z |
| Packages validated | 71 |
| Passed | 68 |
| Failed | 3 |
| Duration | 805s |

## Tool Versions

| Tool | Version |
|------|---------|
| sui | sui 1.76.0-6effb4523834 |
| mvr | mvr 0.1.0-d85f8ad92add |
| bun | 1.3.14 |
| node | v22.23.1 |
| npm | 10.9.8 |
| rustc | rustc 1.97.1 (8bab26f4f 2026-07-14) |
| cargo | cargo 1.97.1 (c980f4866 2026-06-30) |
| pnpm | 11.17.0 |

## Failures

### examples/regulated-coin/ts-client

- **Failure**: Missing npm dependency
- **Type**: typescript | **Origin**: MystenLabs/sui (internal)
- **Dependencies**: `@mysten/sui: ^1.18.0`, `typescript: ^5.5.3`
- **Docs pages**: [onchain-finance/fungible-tokens/regulated-tokens](https://docs.sui.io/onchain-finance/fungible-tokens/regulated-tokens) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/regulated-tokens.mdx))

**`tsc --noEmit`** — FAIL (0.7s)

```
S2580: Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
src/config.ts(21,26): error TS2580: Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
src/main.ts(4,25): error TS2792: Cannot find module '@mysten/sui/client'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
src/main.ts(12,27): error TS2792: Cannot find module '@mysten/sui/transactions'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
src/main.ts(13,23): error TS2792: Cannot find module 'commander'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
src/main.ts(14,30): error TS2792: Cannot find module '@mysten/sui/keypairs/ed25519'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
```

---

### MystenLabs/sui-move-bootcamp@solution/K2/src

- **Failure**: Stale lockfile (run pnpm install to update)
- **Type**: typescript | **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Dependencies**: `@mysten/sui: ^1.38.0`, `typescript: ~5.8.3`
- **Docs pages**: [sui-stack/zklogin-integration/zklogin-demo](https://docs.sui.io/sui-stack/zklogin-integration/zklogin-demo) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/zklogin-integration/zklogin-demo.mdx))

**`pnpm install`** — FAIL (4.4s)

```
? Verifying lockfile against supply-chain policies (281 entries)...
✓ Lockfile passes supply-chain policies (281 entries in 3.8s)
[ERR_PNPM_OUTDATED_LOCKFILE] Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with <ROOT>/package.json

Note that in CI environments this setting is true by default. If you still need to run install in such cases, use "pnpm install --no-frozen-lockfile"

  Failure reason:
  specifiers in the lockfile don't match specifiers in package.json:
* 1 dependencies were added: zod@^4.3.6
```

---

### MystenLabs/sui-move-bootcamp@solution/K2

- **Failure**: Stale lockfile (run pnpm install to update)
- **Type**: typescript | **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Dependencies**: `@mysten/sui: ^1.38.0`, `typescript: ~5.8.3`
- **Docs pages**: [sui-stack/zklogin-integration/zklogin-demo](https://docs.sui.io/sui-stack/zklogin-integration/zklogin-demo) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/zklogin-integration/zklogin-demo.mdx))

**`pnpm install`** — FAIL (0.5s)

```
✓ Lockfile passes supply-chain policies (verified 519ms ago)
[ERR_PNPM_OUTDATED_LOCKFILE] Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with <ROOT>/package.json

Note that in CI environments this setting is true by default. If you still need to run install in such cases, use "pnpm install --no-frozen-lockfile"

  Failure reason:
  specifiers in the lockfile don't match specifiers in package.json:
* 1 dependencies were added: zod@^4.3.6
```

---

## All Results

| # | Package | Type | Origin | Status | Duration | Files |
|---|---------|------|--------|--------|----------|-------|
| 1 | examples/tic-tac-toe/move | move | MystenLabs/sui (internal) | PASS | 0.9s | 1 |
| 2 | examples/move/dynamic_fields | move | MystenLabs/sui (internal) | PASS | 0.6s | 1 |
| 3 | examples/move/nft | move | MystenLabs/sui (internal) | PASS | 0.9s | 1 |
| 4 | examples/move/random/random_nft | move | MystenLabs/sui (internal) | PASS | 0.8s | 1 |
| 5 | examples/move/basics | move | MystenLabs/sui (internal) | PASS | 1.0s | 2 |
| 6 | examples/move/hero | move | MystenLabs/sui (internal) | PASS | 0.9s | 1 |
| 7 | examples/vesting | move | MystenLabs/sui (internal) | PASS | 0.6s | 6 |
| 8 | examples/move/coin | move | MystenLabs/sui (internal) | PASS | 1.0s | 3 |
| 9 | examples/regulated-coin/move | move | MystenLabs/sui (internal) | PASS | 0.7s | 1 |
| 10 | examples/regulated-coin/ts-client | typescript | MystenLabs/sui (internal) | **FAIL** | 26.1s | 1 |
| 11 | examples/move/nft-soulbound | move | MystenLabs/sui (internal) | PASS | 0.5s | 1 |
| 12 | examples/move/nft-rental | move | MystenLabs/sui (internal) | PASS | 8.4s | 1 |
| 13 | examples/move/token | move | MystenLabs/sui (internal) | PASS | 0.6s | 1 |
| 14 | examples/trading/contracts/escrow | move | MystenLabs/sui (internal) | PASS | 0.9s | 3 |
| 15 | examples/deepbook-spot | typescript | MystenLabs/sui (internal) | PASS | 1.8s | 13 |
| 16 | examples/deepbook-margin | typescript | MystenLabs/sui (internal) | PASS | 1.9s | 11 |
| 17 | examples/deepbook-predict | typescript | MystenLabs/sui (internal) | PASS | 1.8s | 9 |
| 18 | examples/move/color_object | move | MystenLabs/sui (internal) | PASS | 1.4s | 1 |
| 19 | MystenLabs/sagat@main/api | typescript | MystenLabs/sagat@main | PASS | 2.3s | 4 |
| 20 | MystenLabs/sui-move-bootcamp@solution/K2/src | typescript | .../sui-move-bootcamp@solution | **FAIL** | 4.4s | 5 |
| 21 | MystenLabs/sui-move-bootcamp@solution/K2 | typescript | .../sui-move-bootcamp@solution | **FAIL** | 0.5s | 1 |
| 22 | MystenLabs/onlyfins-example-app@main/frontend | typescript | ...s/onlyfins-example-app@main | PASS | 51.2s | 1 |
| 23 | ...07-Walrus-SDK-upload-relay/hands-on-source-code | typescript | ...Labs/Walrus-Onboarding@main | PASS | 3.3s | 2 |
| 24 | MystenLabs/onlyfins-example-app@main/backend | typescript | ...s/onlyfins-example-app@main | PASS | 4.1s | 3 |
| 25 | MystenLabs/walrus-pocs@main/sdk | typescript | MystenLabs/walrus-pocs@main | PASS | 7.4s | 3 |
| 26 | MystenLabs/Walrus-Onboarding@main/11-Batch-storage | typescript | ...Labs/Walrus-Onboarding@main | PASS | 4.2s | 2 |
| 27 | MystenLabs/onlyfins-example-app@main/frontend/src | typescript | ...s/onlyfins-example-app@main | PASS | 6.0s | 6 |
| 28 | MystenLabs/ts-sdks@main/packages | typescript | MystenLabs/ts-sdks@main | PASS | 17.9s | 1 |
| 29 | MystenLabs/walrus-sites@main/examples | unknown | MystenLabs/walrus-sites@main | PASS | 0.0s | 1 |
| 30 | MystenLabs/messaging-sdk-example@main/frontend/src | typescript | .../messaging-sdk-example@main | PASS | 19.1s | 1 |
| 31 | MystenLabs/onlyfins-example-app@main/frontend/move | move | ...s/onlyfins-example-app@main | PASS | 7.8s | 1 |
| 32 | ...enLabs/sui-move-bootcamp@main/K5/seal-demo/move | move | ...Labs/sui-move-bootcamp@main | PASS | 5.5s | 3 |
| 33 | MystenLabs/walrus-pocs@main/walrus-seal/app/src | typescript | MystenLabs/walrus-pocs@main | PASS | 35.6s | 4 |
| 34 | MystenLabs/sui-move-bootcamp@main/K5/seal-demo/ts | typescript | ...Labs/sui-move-bootcamp@main | PASS | 3.7s | 1 |
| 35 | ...essaging@main/move/packages/sui_stack_messaging | move | ...bs/sui-stack-messaging@main | PASS | 12.8s | 3 |
| 36 | MystenLabs/sui-stack-messaging@main/chat-app/src | typescript | ...bs/sui-stack-messaging@main | PASS | 13.1s | 1 |
| 37 | MystenLabs/ticketing-poc@main/move | move | MystenLabs/ticketing-poc@main | PASS | 5.9s | 3 |
| 38 | MystenLabs/ticketing-poc@main/app/src/app | typescript | MystenLabs/ticketing-poc@main | PASS | 68.4s | 1 |
| 39 | MystenLabs/ticketing-poc@main/app | typescript | MystenLabs/ticketing-poc@main | PASS | 37.1s | 1 |
| 40 | MystenLabs/solitaire@main/move/solitaire | move | MystenLabs/solitaire@main | PASS | 0.8s | 1 |
| 41 | MystenLabs/solitaire@main/app/src | typescript | MystenLabs/solitaire@main | PASS | 54.2s | 2 |
| 42 | MystenLabs/walrus-sdk-relay-example-app@main/src | typescript | ...-sdk-relay-example-app@main | PASS | 15.5s | 1 |
| 43 | MystenLabs/sui-move-bootcamp@solution/I1/silver | move | .../sui-move-bootcamp@solution | PASS | 6.1s | 1 |
| 44 | ...Labs/sui-move-bootcamp@solution/I3/king_credits | move | .../sui-move-bootcamp@solution | PASS | 1.7s | 2 |
| 45 | ...Labs/sui-move-bootcamp@solution/I2/fixed_supply | move | .../sui-move-bootcamp@solution | PASS | 0.6s | 1 |
| 46 | MystenLabs/sui-stack-hello-world@main/move | unknown | .../sui-stack-hello-world@main | PASS | 5.8s | 1 |
| 47 | ...abs/sui-stack-hello-world@main/move/hello-world | move | .../sui-stack-hello-world@main | PASS | 1.1s | 1 |
| 48 | MystenLabs/sui-stack-hello-world@main/ui | typescript | .../sui-stack-hello-world@main | PASS | 10.3s | 5 |
| 49 | MystenLabs/sui-move-bootcamp@solution/G1/scenario | move | .../sui-move-bootcamp@solution | PASS | 0.8s | 2 |
| 50 | MystenLabs/sui-move-bootcamp@solution/G1 | move | .../sui-move-bootcamp@solution | PASS | 1.4s | 2 |
| 51 | MystenLabs/plinko-poc@main/plinko | move | MystenLabs/plinko-poc@main | PASS | 1.1s | 2 |
| 52 | MystenLabs/plinko-poc@main/app/src | typescript | MystenLabs/plinko-poc@main | PASS | 56.7s | 1 |
| 53 | MystenLabs/plinko-poc@main/app | typescript | MystenLabs/plinko-poc@main | PASS | 17.2s | 1 |
| 54 | ...-bootcamp@solution/F1/app/my-first-sui-dapp/src | typescript | .../sui-move-bootcamp@solution | PASS | 2.7s | 2 |
| 55 | MystenLabs/sui-move-bootcamp@main/K1/contract | move | ...Labs/sui-move-bootcamp@main | PASS | 1.0s | 1 |
| 56 | MystenLabs/sui-move-bootcamp@main/K1 | typescript | ...Labs/sui-move-bootcamp@main | PASS | 5.3s | 1 |
| 57 | MystenLabs/sui-move-bootcamp@main/K1/backend | typescript | ...Labs/sui-move-bootcamp@main | PASS | 1.4s | 1 |
| 58 | ...-bootcamp@solution/C5/contracts/derived_objects | move | .../sui-move-bootcamp@solution | PASS | 0.7s | 1 |
| 59 | MystenLabs/sui-move-bootcamp@solution/C5/ts | typescript | .../sui-move-bootcamp@solution | PASS | 17.8s | 1 |
| 60 | ...sui-move-bootcamp@solution/E2/my-first-sui-dapp | typescript | .../sui-move-bootcamp@solution | PASS | 1.3s | 3 |
| 61 | ...move-bootcamp@solution/E2/my-first-sui-dapp/src | typescript | .../sui-move-bootcamp@solution | PASS | 1.3s | 1 |
| 62 | MystenLabs/ts-sdks@main/packages/deepbook-v3 | typescript | MystenLabs/ts-sdks@main | PASS | 0.0s | 8 |
| 63 | MystenLabs/deepbookv3@main/packages/deepbook | move | MystenLabs/deepbookv3@main | PASS | 2.0s | 8 |
| 64 | ...enLabs/deepbookv3@main/packages/deepbook_margin | move | MystenLabs/deepbookv3@main | PASS | 16.0s | 7 |
| 65 | ...abs/deepbookv3@main/packages/margin_liquidation | move | MystenLabs/deepbookv3@main | PASS | 14.2s | 1 |
| 66 | MystenLabs/ts-sdks@main/packages/enoki | typescript | MystenLabs/ts-sdks@main | PASS | 0.0s | 1 |
| 67 | MystenLabs/ts-sdks@main/packages/sui | typescript | MystenLabs/ts-sdks@main | PASS | 0.0s | 2 |
| 68 | MystenLabs/ts-sdks@main/packages/slush-wallet | typescript | MystenLabs/ts-sdks@main | PASS | 0.0s | 1 |
| 69 | ...kages/dapp-kit-next/packages/dapp-kit-react/src | typescript | MystenLabs/ts-sdks@main | PASS | 0.0s | 6 |
| 70 | ...n/packages/dapp-kit-next/packages/dapp-kit-core | typescript | MystenLabs/ts-sdks@main | PASS | 0.0s | 1 |
| 71 | ...eepbookv3@predict-testnet-4-16/packages/predict | move | ...bookv3@predict-testnet-4-16 | PASS | 10.5s | 8 |

## Detailed Results

<details><summary>PASS — examples/tic-tac-toe/move (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/tic-tac-toe/move`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/owned.move`
- **Referenced by**: [references/gaming](https://docs.sui.io/references/gaming) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/references/gaming.mdx))

**`sui move build`** — PASS (0.9s)

```
No sui config found in `/home/runner/.sui/sui_config/client.yaml`, create one [Y/n]?
Generated new keypair and alias for address with scheme "ed25519" [pensive-hematite: 0x4c8508dfb5b3526ebb56c3e33503852b17df747fd93e78a2b5d6340ec378fbbe]
  secret recovery phrase : [patient inmate flip stick soap beyond total tone orbit radio sting hurt]
Created "/home/runner/.sui/sui_config/client.yaml"
Set active environment to testnet

```

</details>

<details><summary>PASS — examples/move/dynamic_fields (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/dynamic_fields`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/example.move`
- **Referenced by**: [references/gaming](https://docs.sui.io/references/gaming) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/references/gaming.mdx)), [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/objects/dynamic-fields.mdx))

**`sui move build`** — PASS (0.6s)

</details>

<details><summary>PASS — examples/move/nft (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/nft`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/testnet_nft.move`
- **Referenced by**: [onchain-finance/types-of-assets](https://docs.sui.io/onchain-finance/types-of-assets) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/types-of-assets.mdx)), [onchain-finance/tokenized-assets/create-nft](https://docs.sui.io/onchain-finance/tokenized-assets/create-nft) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/tokenized-assets/create-nft.mdx))

**`sui move build`** — PASS (0.9s)

</details>

<details><summary>PASS — examples/move/random/random_nft (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/random/random_nft`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/example.move`
- **Referenced by**: [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/on-chain-primitives/randomness-onchain.mdx))

**`sui move build`** — PASS (0.8s)

</details>

<details><summary>PASS — examples/move/basics (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/basics`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/clock.move`, `sources/object_basics.move`
- **Referenced by**: [sui-stack/on-chain-primitives/access-time](https://docs.sui.io/sui-stack/on-chain-primitives/access-time) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/on-chain-primitives/access-time.mdx)), [develop/objects/object-ownership/party](https://docs.sui.io/develop/objects/object-ownership/party) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/objects/object-ownership/party.mdx)), [develop/objects/object-ownership/address-owned](https://docs.sui.io/develop/objects/object-ownership/address-owned) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/objects/object-ownership/address-owned.mdx))

**`sui move build`** — PASS (1.0s)

</details>

<details><summary>PASS — examples/move/hero (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/hero`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/example.move`
- **Referenced by**: [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/references/contribute/mdx-components.mdx))

**`sui move build`** — PASS (0.9s)

</details>

<details><summary>PASS — examples/vesting (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/vesting`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/cliff.move`, `sources/hybrid.move`, `sources/backloaded.move`, `sources/milestone.move`, `sources/linear.move`, `tests/immediate_tests.move`
- **Referenced by**: [onchain-finance/fungible-tokens/token-vesting-strategies](https://docs.sui.io/onchain-finance/fungible-tokens/token-vesting-strategies) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/token-vesting-strategies.mdx))

**`sui move build`** — PASS (0.6s)

</details>

<details><summary>PASS — examples/move/coin (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/coin`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/regcoin_new.move`, `sources/non_otw_currency.move`, `sources/my_coin_new.move`
- **Referenced by**: [onchain-finance/fungible-tokens/regulated-tokens](https://docs.sui.io/onchain-finance/fungible-tokens/regulated-tokens) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/regulated-tokens.mdx)), [onchain-finance/fungible-tokens/currency](https://docs.sui.io/onchain-finance/fungible-tokens/currency) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/currency.mdx)), [onchain-finance/fungible-tokens/create-a-fungible-token](https://docs.sui.io/onchain-finance/fungible-tokens/create-a-fungible-token) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/create-a-fungible-token.mdx))

**`sui move build`** — PASS (1.0s)

</details>

<details><summary>PASS — examples/regulated-coin/move (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/regulated-coin/move`
- **Move edition**: 2024
- **Dependencies**: `Sui: local`
- **Files**: `sources/regulated_coin.move`
- **Referenced by**: [onchain-finance/fungible-tokens/regulated-tokens](https://docs.sui.io/onchain-finance/fungible-tokens/regulated-tokens) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/regulated-tokens.mdx))

**`sui move build`** — PASS (0.7s)

</details>

<details><summary>FAIL — examples/regulated-coin/ts-client (typescript)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/regulated-coin/ts-client`
- **Dependencies**: `@mysten/sui: ^1.18.0`, `typescript: ^5.5.3`
- **Files**: `src/main.ts`
- **Referenced by**: [onchain-finance/fungible-tokens/regulated-tokens](https://docs.sui.io/onchain-finance/fungible-tokens/regulated-tokens) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/regulated-tokens.mdx))

**`pnpm install`** — PASS (25.4s)

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

Done in 21.5s

```

**`tsc --noEmit`** — FAIL (0.7s)

```
install type definitions for node? Try `npm i --save-dev @types/node`.
src/main.ts(4,25): error TS2792: Cannot find module '@mysten/sui/client'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
src/main.ts(12,27): error TS2792: Cannot find module '@mysten/sui/transactions'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
src/main.ts(13,23): error TS2792: Cannot find module 'commander'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
src/main.ts(14,30): error TS2792: Cannot find module '@mysten/sui/keypairs/ed25519'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
```

</details>

<details><summary>PASS — examples/move/nft-soulbound (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/nft-soulbound`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/testnet_soulbound_nft.move`
- **Referenced by**: [onchain-finance/examples-patterns/soulbound-tokens](https://docs.sui.io/onchain-finance/examples-patterns/soulbound-tokens) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/examples-patterns/soulbound-tokens.mdx))

**`sui move build`** — PASS (0.5s)

</details>

<details><summary>PASS — examples/move/nft-rental (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/nft-rental`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`, `Kiosk: testnet`
- **Files**: `sources/nft_rental.move`
- **Referenced by**: [onchain-finance/examples-patterns/nft-rental](https://docs.sui.io/onchain-finance/examples-patterns/nft-rental) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/examples-patterns/nft-rental.mdx))

**`sui move build`** — PASS (8.4s)

</details>

<details><summary>PASS — examples/move/token (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/token`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/loyalty.move`
- **Referenced by**: [onchain-finance/examples-patterns/loyalty-tokens](https://docs.sui.io/onchain-finance/examples-patterns/loyalty-tokens) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/examples-patterns/loyalty-tokens.mdx))

**`sui move build`** — PASS (0.6s)

</details>

<details><summary>PASS — examples/trading/contracts/escrow (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/trading/contracts/escrow`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/owned.move`, `sources/shared.move`, `sources/lock.move`
- **Referenced by**: [develop/publish-upgrade-packages/versioning](https://docs.sui.io/develop/publish-upgrade-packages/versioning) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/publish-upgrade-packages/versioning.mdx)), [develop/accessing-data/using-events](https://docs.sui.io/develop/accessing-data/using-events) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/accessing-data/using-events.mdx))

**`sui move build`** — PASS (0.9s)

</details>

<details><summary>PASS — examples/deepbook-spot (typescript)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/deepbook-spot`
- **Dependencies**: `@mysten/deepbook-v3: 1.5.9`, `@mysten/sui: 2.22.1`, `typescript: ^5.5.3`
- **Files**: `src/compose.ts`, `src/client.ts`, `src/manager.ts`, `src/create-manager.ts`, `src/deposit.ts`, `src/place-order.ts`, `src/read-orders.ts`, `src/cancel-order.ts`, `src/withdraw.ts`, `src/read-deep-required.ts`, `src/read-fees.ts`, `src/fund-with-deep.ts`, `src/bootstrap-swap.ts`
- **Referenced by**: [onchain-finance/deepbook/deepbookv3-sdk/composing-transactions](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/composing-transactions) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3-sdk/composing-transactions.mdx)), [onchain-finance/deepbook/deepbookv3/spot-workflow](https://docs.sui.io/onchain-finance/deepbook/deepbookv3/spot-workflow) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3/spot-workflow.mdx)), [onchain-finance/deepbook/deepbookv3/fees-and-funding](https://docs.sui.io/onchain-finance/deepbook/deepbookv3/fees-and-funding) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3/fees-and-funding.mdx))

**`pnpm run build`** — PASS (1.8s)

```

> deepbook-spot-examples@0.0.1 build /tmp/sui/examples/deepbook-spot
> tsc --noEmit


```

</details>

<details><summary>PASS — examples/deepbook-margin (typescript)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/deepbook-margin`
- **Dependencies**: `@mysten/deepbook-v3: 1.5.9`, `@mysten/sui: 2.22.1`, `typescript: ^5.5.3`
- **Files**: `src/supply.ts`, `src/compose.ts`, `src/integration.ts`, `src/risk.ts`, `src/client.ts`, `src/margin-manager.ts`, `src/risk-params.ts`, `src/pool-liquidity.ts`, `src/collateral.ts`, `src/borrow.ts`, `src/place-order.ts`
- **Referenced by**: [onchain-finance/deepbook/deepbookv3-sdk/composing-transactions](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/composing-transactions) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3-sdk/composing-transactions.mdx)), [onchain-finance/deepbook/deepbook-margin/margin-integration](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin/margin-integration) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin/margin-integration.mdx)), [onchain-finance/deepbook/deepbook-margin/leveraged-workflow](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin/leveraged-workflow) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin/leveraged-workflow.mdx))

**`pnpm run build`** — PASS (1.9s)

```

> deepbook-margin-examples@0.0.1 build /tmp/sui/examples/deepbook-margin
> tsc --noEmit


```

</details>

<details><summary>PASS — examples/deepbook-predict (typescript)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/deepbook-predict`
- **Dependencies**: `@mysten/sui: 2.22.1`, `typescript: ^5.5.3`
- **Files**: `src/config.ts`, `src/client.ts`, `src/oracle.ts`, `src/mint.ts`, `src/mint-range.ts`, `src/redeem.ts`, `src/supply.ts`, `src/withdraw.ts`, `src/create-manager.ts`
- **Referenced by**: [onchain-finance/deepbook/deepbook-predict/tutorial](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/tutorial) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-predict/tutorial.mdx)), [onchain-finance/deepbook/deepbook-predict/deepbook-predict](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/deepbook-predict) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-predict/deepbook-predict.mdx))

**`pnpm run build`** — PASS (1.8s)

```

> deepbook-predict-examples@0.0.1 build /tmp/sui/examples/deepbook-predict
> tsc --noEmit


```

</details>

<details><summary>PASS — examples/move/color_object (move)</summary>

- **Origin**: MystenLabs/sui (internal)
- **Package root**: `examples/move/color_object`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: local`
- **Files**: `sources/example.move`
- **Referenced by**: [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/objects/object-ownership/immutable.mdx)), [develop/objects/object-ownership/address-owned](https://docs.sui.io/develop/objects/object-ownership/address-owned) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/develop/objects/object-ownership/address-owned.mdx))

**`sui move build`** — PASS (1.4s)

</details>

<details><summary>PASS — MystenLabs/sagat@main/api (typescript)</summary>

- **Origin**: MystenLabs/sagat@main
- **Package root**: `api`
- **Dependencies**: `@mysten/sagat: workspace:*`, `@mysten/sui: ^2.16.0`
- **Files**: `api/test/addresses.test.ts`, `api/test/multisig-api.test.ts`, `api/test/multisig.test.ts`, `api/test/proposal-business-logic.test.ts`
- **Referenced by**: [sui-stack/sagat](https://docs.sui.io/sui-stack/sagat) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/sagat.mdx))

**`bun install`** — PASS (2.3s)

```
bun install v1.3.14 (0d9b296a)

+ @eslint/compat@1.4.1
+ @ianvs/prettier-plugin-sort-imports@4.7.1
+ @tony.ganchev/eslint-plugin-header@3.2.4
+ @typescript-eslint/eslint-plugin@8.56.1
+ @typescript-eslint/parser@8.56.1
+ concurrently@9.2.1
+ eslint@9.39.3
+ eslint-plugin-header@3.1.1
+ globals@16.5.0
+ prettier@3.8.1
+ vitest@4.0.18

673 packages installed [2.33s]

```

**`bun run build (workspace)`** — PASS (0.0s)

```
Workspace build at /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--sagat--main succeeded
```

</details>

<details><summary>FAIL — MystenLabs/sui-move-bootcamp@solution/K2/src (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `K2/src`
- **Dependencies**: `@mysten/sui: ^1.38.0`, `typescript: ~5.8.3`
- **Files**: `K2/src/hooks/useEphemeral.ts`, `K2/src/hooks/useOauthPopup.tsx`, `K2/src/hooks/useZkProof.ts`, `K2/src/hooks/useWallet.ts`, `K2/src/utils/zk.ts`
- **Referenced by**: [sui-stack/zklogin-integration/zklogin-demo](https://docs.sui.io/sui-stack/zklogin-integration/zklogin-demo) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/zklogin-integration/zklogin-demo.mdx))

**`pnpm install`** — FAIL (4.4s)

```
? Verifying lockfile against supply-chain policies (281 entries)...
✓ Lockfile passes supply-chain policies (281 entries in 3.8s)
[ERR_PNPM_OUTDATED_LOCKFILE] Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with <ROOT>/package.json

Note that in CI environments this setting is true by default. If you still need to run install in such cases, use "pnpm install --no-frozen-lockfile"

  Failure reason:
  specifiers in the lockfile don't match specifiers in package.json:
* 1 dependencies were added: zod@^4.3.6
```

</details>

<details><summary>FAIL — MystenLabs/sui-move-bootcamp@solution/K2 (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `K2`
- **Dependencies**: `@mysten/sui: ^1.38.0`, `typescript: ~5.8.3`
- **Files**: `K2/src/services/sui/writeClient.ts`
- **Referenced by**: [sui-stack/zklogin-integration/zklogin-demo](https://docs.sui.io/sui-stack/zklogin-integration/zklogin-demo) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/zklogin-integration/zklogin-demo.mdx))

**`pnpm install`** — FAIL (0.5s)

```
✓ Lockfile passes supply-chain policies (verified 519ms ago)
[ERR_PNPM_OUTDATED_LOCKFILE] Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date with <ROOT>/package.json

Note that in CI environments this setting is true by default. If you still need to run install in such cases, use "pnpm install --no-frozen-lockfile"

  Failure reason:
  specifiers in the lockfile don't match specifiers in package.json:
* 1 dependencies were added: zod@^4.3.6
```

</details>

<details><summary>PASS — MystenLabs/onlyfins-example-app@main/frontend (typescript)</summary>

- **Origin**: MystenLabs/onlyfins-example-app@main
- **Package root**: `frontend`
- **Dependencies**: `@mysten/dapp-kit: 0.19.11`, `@mysten/enoki: ^0.12.14`, `@mysten/seal: ^0.9.6`, `@mysten/sui: 1.45.2`, `typescript: ^5.9.2`
- **Files**: `frontend/src/constants.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx)), [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`npm install`** — PASS (45.1s)

```

added 411 packages, and audited 412 packages in 45s

66 packages are looking for funding
  run `npm fund` for details

17 vulnerabilities (5 moderate, 12 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

```

**`npm run build`** — PASS (6.1s)

```

> frontend@0.0.0 build
> tsc && vite build

[36mvite v7.3.6 [32mbuilding client environment for production...[36m[39m
transforming...
[32m✓[39m 888 modules transformed.
rendering chunks...
computing gzip size...
[2mdist/[22m[32mindex.html                 [39m[1m[2m  1.57 kB[22m[1m[22m[2m │ gzip:   0.80 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-CHsczsYp.css  [39m[1m[2m706.71 kB[22m[1m[22m[2m │ gzip:  84.18 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-JEqbeqXL.js   [39m[1m[33m797.37 kB[39m[22m[2m │ gzip: 265.47 kB[22m
[32m✓ built in 3.21s[39m

```

</details>

<details><summary>PASS — MystenLabs/Walrus-Onboarding@main/07-Walrus-SDK-upload-relay/hands-on-source-code (typescript)</summary>

- **Origin**: MystenLabs/Walrus-Onboarding@main
- **Package root**: `07-Walrus-SDK-upload-relay/hands-on-source-code`
- **Dependencies**: `@mysten/sui: ^1.45.0`, `@mysten/walrus: ^0.8.4`, `typescript: ^5.9.3`
- **Files**: `07-Walrus-SDK-upload-relay/hands-on-source-code/src/examples/basic-upload-example.ts`, `07-Walrus-SDK-upload-relay/hands-on-source-code/src/examples/basic-download-example.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx))

**`npm install`** — PASS (1.8s)

```

added 49 packages, and audited 50 packages in 2s

8 packages are looking for funding
  run `npm fund` for details

2 vulnerabilities (1 low, 1 moderate)

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

```

**`npm run build`** — PASS (1.5s)

```

> sdk-upload-relay-verification@1.0.0 build
> tsc


```

</details>

<details><summary>PASS — MystenLabs/onlyfins-example-app@main/backend (typescript)</summary>

- **Origin**: MystenLabs/onlyfins-example-app@main
- **Package root**: `backend`
- **Dependencies**: `@mysten/seal: ^0.9.6`, `@mysten/sui: ^1.45.2`, `typescript: ^5.9.2`
- **Files**: `backend/src/config.ts`, `backend/src/createPosts.ts`, `backend/src/encryptImages.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx)), [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`pnpm install`** — PASS (2.6s)

```
✓ Lockfile passes supply-chain policies (verified 738ms ago)
Lockfile is up to date, resolution step is skipped
Already up to date

.../esbuild@0.27.1/node_modules/esbuild postinstall$ node install.js
.../esbuild@0.27.1/node_modules/esbuild postinstall: Done
Done in 721ms using pnpm v11.17.0

```

**`tsc --noEmit`** — PASS (1.6s)

</details>

<details><summary>PASS — MystenLabs/walrus-pocs@main/sdk (typescript)</summary>

- **Origin**: MystenLabs/walrus-pocs@main
- **Package root**: `sdk`
- **Dependencies**: `@mysten/sui: ^1.38.0`, `@mysten/walrus: ^0.7.0`, `typescript: ^5.9.3`
- **Files**: `sdk/src/write.ts`, `sdk/src/download.ts`, `sdk/src/delete.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx))

**`pnpm install`** — PASS (5.9s)

```
Lockfile is up to date, resolution step is skipped
Progress: resolved 1, reused 0, downloaded 0, added 0
Packages: +42
++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 42, reused 0, downloaded 39, added 39
Progress: resolved 42, reused 0, downloaded 41, added 41
Progress: resolved 42, reused 0, downloaded 42, added 42, done

dependencies:
+ @mysten/sui 1.38.0
+ @mysten/walrus 0.7.0
+ dotenv 17.2.3
+ undici 7.16.0

devDependencies:
+ @types/node 24.6.1
+ ts-node 10.9.2
+ typescript 5.9.3

Done in 2.6s using pnpm v10.11.1

```

**`tsc --noEmit`** — PASS (1.5s)

</details>

<details><summary>PASS — MystenLabs/Walrus-Onboarding@main/11-Batch-storage (typescript)</summary>

- **Origin**: MystenLabs/Walrus-Onboarding@main
- **Package root**: `11-Batch-storage`
- **Dependencies**: `@mysten/sui: ^1.45.0`, `@mysten/walrus: ^0.8.4`, `typescript: ^5.3.3`
- **Files**: `11-Batch-storage/hands-on-source-code/03-creation-process/ts/03-create-simple.ts`, `11-Batch-storage/hands-on-source-code/04-retrieval-process/ts/01-get-files-identifiers.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx))

**`npm install`** — PASS (2.5s)

```

added 32 packages, and audited 33 packages in 2s

8 packages are looking for funding
  run `npm fund` for details

1 moderate severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

```

**`npm run build`** — PASS (1.7s)

```

> walrus-quilts-hands-on@1.0.0 build
> tsc


```

</details>

<details><summary>PASS — MystenLabs/onlyfins-example-app@main/frontend/src (typescript)</summary>

- **Origin**: MystenLabs/onlyfins-example-app@main
- **Package root**: `frontend/src`
- **Dependencies**: `@mysten/dapp-kit: 0.19.11`, `@mysten/enoki: ^0.12.14`, `@mysten/seal: ^0.9.6`, `@mysten/sui: 1.45.2`, `typescript: ^5.9.2`
- **Files**: `frontend/src/components/Feed.tsx`, `frontend/src/utils/post-transform.ts`, `frontend/src/utils/walrus-fetch.ts`, `frontend/src/hooks/usePayForContent.ts`, `frontend/src/hooks/usePostDecryption.ts`, `frontend/src/lib/seal-client.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx)), [sui-stack/walrus/only-fins](https://docs.sui.io/sui-stack/walrus/only-fins) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/only-fins.mdx)), [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`npm run build`** — PASS (6.0s)

```

> frontend@0.0.0 build
> tsc && vite build

[36mvite v7.3.6 [32mbuilding client environment for production...[36m[39m
transforming...
[32m✓[39m 888 modules transformed.
rendering chunks...
computing gzip size...
[2mdist/[22m[32mindex.html                 [39m[1m[2m  1.57 kB[22m[1m[22m[2m │ gzip:   0.80 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-CHsczsYp.css  [39m[1m[2m706.71 kB[22m[1m[22m[2m │ gzip:  84.18 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-JEqbeqXL.js   [39m[1m[33m797.37 kB[39m[22m[2m │ gzip: 265.47 kB[22m
[32m✓ built in 3.18s[39m

```

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages`
- **Dependencies**: `@mysten/bcs: workspace:^`, `@mysten/utils: workspace:^`, `@mysten/walrus-wasm: workspace:^`, `@mysten/codegen: workspace:^`, `@mysten/dapp-kit-core: workspace:^`, `@mysten/dapp-kit-react: workspace:^`, `typescript: ^6.0.3`
- **Files**: `packages/walrus/examples/basics/attributes.ts`
- **Referenced by**: [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/walrus/sui-stack-walrus.mdx))

**`pnpm install`** — PASS (17.9s)

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

Done in 15.8s using pnpm v10.33.0

```

**`pnpm run build (workspace)`** — PASS (0.0s)

```
Workspace build at /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main succeeded
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
- **Dependencies**: `@mysten/bcs: ^1.9.2`, `@mysten/dapp-kit: ^0.19.8`, `@mysten/enoki: ^0.12.10`, `@mysten/messaging: ^0.0.3`, `@mysten/seal: ^0.9.3`, `@mysten/sui: ^1.44.0`, `@mysten/sui-grpc: ^0.2.2`, `@mysten/walrus: ^0.8.3`, `typescript: ^5.9.2`
- **Files**: `frontend/src/hooks/useUserSubname.ts`
- **Referenced by**: [sui-stack/suins/sui-stack-suins](https://docs.sui.io/sui-stack/suins/sui-stack-suins) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/suins/sui-stack-suins.mdx))

**`npm install`** — PASS (12.9s)

```

added 419 packages, and audited 420 packages in 13s

66 packages are looking for funding
  run `npm fund` for details

20 vulnerabilities (5 moderate, 15 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.

```

**`npm run build`** — PASS (6.2s)

```

> messaging-sdk-example@0.0.0 build
> tsc && vite build

[36mvite v7.3.6 [32mbuilding client environment for production...[36m[39m
transforming...
[32m✓[39m 910 modules transformed.
rendering chunks...
computing gzip size...
[2mdist/[22m[32mindex.html                 [39m[1m[2m  1.40 kB[22m[1m[22m[2m │ gzip:   0.73 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-CHsczsYp.css  [39m[1m[2m706.71 kB[22m[1m[22m[2m │ gzip:  84.18 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-CGRm6a5C.js   [39m[1m[33m826.04 kB[39m[22m[2m │ gzip: 269.60 kB[22m
[32m✓ built in 3.24s[39m

```

</details>

<details><summary>PASS — MystenLabs/onlyfins-example-app@main/frontend/move (move)</summary>

- **Origin**: MystenLabs/onlyfins-example-app@main
- **Package root**: `frontend/move`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: framework/testnet`
- **Files**: `frontend/move/sources/posts.move`
- **Referenced by**: [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`sui move build`** — PASS (7.8s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@main/K5/seal-demo/move (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@main
- **Package root**: `K5/seal-demo/move`
- **Move edition**: 2024
- **Files**: `K5/seal-demo/move/sources/private_seal.move`, `K5/seal-demo/move/sources/timelock_seal.move`, `K5/seal-demo/move/sources/allowlist_seal.move`
- **Referenced by**: [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`sui move build`** — PASS (5.5s)

</details>

<details><summary>PASS — MystenLabs/walrus-pocs@main/walrus-seal/app/src (typescript)</summary>

- **Origin**: MystenLabs/walrus-pocs@main
- **Package root**: `walrus-seal/app/src`
- **Dependencies**: `@mysten/bcs: ^1.8.0`, `@mysten/dapp-kit: ^0.18.0`, `@mysten/seal: ^0.8.1`, `@mysten/sui: ^1.38.0`, `typescript: ^5`
- **Files**: `walrus-seal/app/src/hooks/useSealEncrypt.ts`, `walrus-seal/app/src/utils/sealUtils.ts`, `walrus-seal/app/src/hooks/useSealSession.ts`, `walrus-seal/app/src/hooks/useSealDecrypt.ts`
- **Referenced by**: [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`pnpm install`** — PASS (15.6s)

```
✓ Lockfile passes supply-chain policies (verified 9s ago)
Lockfile is up to date, resolution step is skipped
Already up to date

.../node_modules/@tailwindcss/oxide postinstall$ node ./scripts/install.js
.../sharp@0.34.4/node_modules/sharp install$ node install/check.js
.../node_modules/@tailwindcss/oxide postinstall: Done
.../sharp@0.34.4/node_modules/sharp install: Done
Done in 1s using pnpm v11.17.0

```

**`pnpm run build`** — PASS (20.1s)

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

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@main/K5/seal-demo/ts (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@main
- **Package root**: `K5/seal-demo/ts`
- **Dependencies**: `@mysten/bcs: ^2.0.3`, `@mysten/seal: ^1.1.1`, `@mysten/sui: ^2.16.0`, `typescript: ^5.7.0`
- **Files**: `K5/seal-demo/ts/src/index.ts`
- **Referenced by**: [sui-stack/seal/sui-stack-seal](https://docs.sui.io/sui-stack/seal/sui-stack-seal) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/seal/sui-stack-seal.mdx))

**`npm install`** — PASS (2.2s)

```

added 30 packages, and audited 31 packages in 2s

9 packages are looking for funding
  run `npm fund` for details

2 vulnerabilities (1 low, 1 moderate)

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

```

**`tsc --noEmit`** — PASS (1.6s)

</details>

<details><summary>PASS — MystenLabs/sui-stack-messaging@main/move/packages/sui_stack_messaging (move)</summary>

- **Origin**: MystenLabs/sui-stack-messaging@main
- **Package root**: `move/packages/sui_stack_messaging`
- **Move edition**: 2024
- **Dependencies**: `sui_groups: ea766818b90e162341e885a855718388edcc8e99`, `suins: mvr:@suins/core`
- **Files**: `move/packages/sui_stack_messaging/sources/seal_policies.move`, `move/packages/sui_stack_messaging/sources/messaging.move`, `move/packages/sui_stack_messaging/sources/encryption_history.move`
- **Referenced by**: [sui-stack/messaging/chat-app](https://docs.sui.io/sui-stack/messaging/chat-app) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/messaging/chat-app.mdx))

**`sui move build`** — PASS (12.8s)

</details>

<details><summary>PASS — MystenLabs/sui-stack-messaging@main/chat-app/src (typescript)</summary>

- **Origin**: MystenLabs/sui-stack-messaging@main
- **Package root**: `chat-app/src`
- **Dependencies**: `@mysten/bcs: ^2.0.3`, `@mysten/dapp-kit-core: ^1.3.2`, `@mysten/dapp-kit-react: ^2.0.3`, `@mysten/sui-stack-messaging: 0.0.2`, `@mysten/sui-groups: ^0.0.1`, `@mysten/seal: ^1.1.1`, `@mysten/sui: ^2.17.0`, `@mysten/signers: 1.0.5`, `typescript: ~5.8.3`
- **Files**: `chat-app/src/hooks/useMessages.ts`
- **Referenced by**: [sui-stack/messaging/chat-app](https://docs.sui.io/sui-stack/messaging/chat-app) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/messaging/chat-app.mdx))

**`pnpm install`** — PASS (6.7s)

```
✓ Lockfile passes supply-chain policies (verified 730ms ago)
Lockfile is up to date, resolution step is skipped
Already up to date

.../esbuild@0.25.12/node_modules/esbuild postinstall$ node install.js
.../node_modules/protobufjs postinstall$ node scripts/postinstall
.../node_modules/msgpackr-extract install$ node-gyp-build-optional-packages
.../node_modules/protobufjs postinstall: Done
.../esbuild@0.25.12/node_modules/esbuild postinstall: Done
.../node_modules/msgpackr-extract install: Done
Done in 1.2s using pnpm v11.17.0

```

**`pnpm run build`** — PASS (6.4s)

```
[36mvite v6.4.1 [32mbuilding for production...[36m[39m
transforming...
[32m✓[39m 722 modules transformed.
rendering chunks...
computing gzip size...
[2mdist/[22m[32mindex.html                 [39m[1m[2m  0.40 kB[22m[1m[22m[2m │ gzip:   0.27 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-CmLFi6yS.css  [39m[1m[2m 25.04 kB[22m[1m[22m[2m │ gzip:   5.17 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-C7z-chHA.js   [39m[1m[33m932.75 kB[39m[22m[2m │ gzip: 280.50 kB[22m
[32m✓ built in 2.84s[39m

```

</details>

<details><summary>PASS — MystenLabs/ticketing-poc@main/move (move)</summary>

- **Origin**: MystenLabs/ticketing-poc@main
- **Package root**: `move`
- **Move edition**: 2024.beta
- **Files**: `move/sources/ticket.move`, `move/sources/ticket_stage.move`, `move/sources/key_registry.move`
- **Referenced by**: [sui-stack/enoki/ticketing-poc](https://docs.sui.io/sui-stack/enoki/ticketing-poc) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/enoki/ticketing-poc.mdx))

**`sui move build`** — PASS (5.9s)

</details>

<details><summary>PASS — MystenLabs/ticketing-poc@main/app/src/app (typescript)</summary>

- **Origin**: MystenLabs/ticketing-poc@main
- **Package root**: `app/src/app`
- **Dependencies**: `@mysten/bcs: ^1.7.0`, `@mysten/dapp-kit-core: ^1.3.0`, `@mysten/dapp-kit-react: ^2.0.1`, `@mysten/enoki: ^1.0.4`, `@mysten/sui: ^2.16.0`, `typescript: ^5.7.2`
- **Files**: `app/src/app/hooks/useMintTicket.tsx`
- **Referenced by**: [sui-stack/enoki/ticketing-poc](https://docs.sui.io/sui-stack/enoki/ticketing-poc) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/enoki/ticketing-poc.mdx))

**`pnpm install`** — PASS (10.0s)

```
✓ Lockfile passes supply-chain policies (verified 1s ago)
Lockfile is up to date, resolution step is skipped
Already up to date

.../node_modules/protobufjs postinstall$ node scripts/postinstall
.../node_modules/unrs-resolver postinstall$ napi-postinstall unrs-resolver 1.11.1 check
.../sharp@0.33.5/node_modules/sharp install$ node install/check
.../node_modules/protobufjs postinstall: Done
.../node_modules/unrs-resolver postinstall: Done
.../sharp@0.33.5/node_modules/sharp install: Done
Done in 2.4s using pnpm v11.17.0

```

**`pnpm run build`** — PASS (58.3s)

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

</details>

<details><summary>PASS — MystenLabs/ticketing-poc@main/app (typescript)</summary>

- **Origin**: MystenLabs/ticketing-poc@main
- **Package root**: `app`
- **Dependencies**: `@mysten/bcs: ^1.7.0`, `@mysten/dapp-kit-core: ^1.3.0`, `@mysten/dapp-kit-react: ^2.0.1`, `@mysten/enoki: ^1.0.4`, `@mysten/sui: ^2.16.0`, `typescript: ^5.7.2`
- **Files**: `app/src/app/api/permit/mint-ticket/route.ts`
- **Referenced by**: [sui-stack/enoki/ticketing-poc](https://docs.sui.io/sui-stack/enoki/ticketing-poc) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/enoki/ticketing-poc.mdx))

**`pnpm run build`** — PASS (37.1s)

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

</details>

<details><summary>PASS — MystenLabs/solitaire@main/move/solitaire (move)</summary>

- **Origin**: MystenLabs/solitaire@main
- **Package root**: `move/solitaire`
- **Move edition**: 2024
- **Files**: `move/solitaire/sources/solitaire.move`
- **Referenced by**: [sui-stack/enoki/solitaire](https://docs.sui.io/sui-stack/enoki/solitaire) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/enoki/solitaire.mdx))

**`sui move build`** — PASS (0.8s)

</details>

<details><summary>PASS — MystenLabs/solitaire@main/app/src (typescript)</summary>

- **Origin**: MystenLabs/solitaire@main
- **Package root**: `app/src`
- **Dependencies**: `@mysten/codegen: 0.5.0`, `@mysten/dapp-kit: ^0.17.7`, `@mysten/enoki: ^0.12.0`, `@mysten/sui: 1.38.0`, `typescript: 5.9.2`
- **Files**: `app/src/components/gameBoard/GameBoard.tsx`, `app/src/hooks/useSolitaireActions.ts`
- **Referenced by**: [sui-stack/enoki/solitaire](https://docs.sui.io/sui-stack/enoki/solitaire) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/sui-stack/enoki/solitaire.mdx))

**`pnpm install`** — PASS (10.8s)

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

Done in 7.7s using pnpm v10.10.0

```

**`pnpm run build`** — PASS (43.3s)

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

</details>

<details><summary>PASS — MystenLabs/walrus-sdk-relay-example-app@main/src (typescript)</summary>

- **Origin**: MystenLabs/walrus-sdk-relay-example-app@main
- **Package root**: `src`
- **Dependencies**: `@mysten/dapp-kit: ^0.17.1`, `@mysten/sui: ^1.37.0`, `@mysten/walrus: ^0.5.2`, `typescript: ^5.8.3`
- **Files**: `src/lib/walrus.ts`
- **Referenced by**: [references/contribute/style-guide](https://docs.sui.io/references/contribute/style-guide) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/references/contribute/style-guide.mdx))

**`pnpm install`** — PASS (7.5s)

```
✓ Lockfile passes supply-chain policies (verified 1s ago)
Lockfile is up to date, resolution step is skipped
Already up to date

.../node_modules/@tailwindcss/oxide postinstall$ node ./scripts/install.js
.../node_modules/@swc/core postinstall$ node postinstall.js
.../esbuild@0.25.5/node_modules/esbuild postinstall$ node install.js
.../esbuild@0.25.5/node_modules/esbuild postinstall: Done
.../node_modules/@swc/core postinstall: Done
.../node_modules/@tailwindcss/oxide postinstall: Done
Done in 1.8s using pnpm v11.17.0

```

**`pnpm run build`** — PASS (8.0s)

```
[36mvite v6.3.5 [32mbuilding for production...[36m[39m
transforming...
[32m✓[39m 2322 modules transformed.
rendering chunks...
computing gzip size...
[2mdist/[22m[32mindex.html                           [39m[1m[2m    1.51 kB[22m[1m[22m[2m │ gzip:   0.78 kB[22m
[2mdist/[22m[2massets/[22m[32mwalrus_wasm_bg-KCYZ1fvy.wasm  [39m[1m[2m  558.13 kB[22m[1m[22m[2m │ gzip: 304.78 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-CGERj4EO.css            [39m[1m[2m  725.73 kB[22m[1m[22m[2m │ gzip:  88.92 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-BtoI2cod.js             [39m[1m[33m1,173.23 kB[39m[22m[2m │ gzip: 289.16 kB[22m
[32m✓ built in 4.34s[39m

```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/I1/silver (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `I1/silver`
- **Move edition**: 2024
- **Files**: `I1/silver/sources/silver.move`
- **Referenced by**: [onchain-finance/fungible-tokens/create-a-fungible-token-coin](https://docs.sui.io/onchain-finance/fungible-tokens/create-a-fungible-token-coin) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/fungible-tokens/create-a-fungible-token-coin.mdx))

**`sui move build`** — PASS (6.1s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/I3/king_credits (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `I3/king_credits`
- **Move edition**: 2024
- **Files**: `I3/king_credits/sources/king_credits.move`, `I3/king_credits/sources/crown_council_rule.move`
- **Referenced by**: [onchain-finance/examples-patterns/in-game-currency](https://docs.sui.io/onchain-finance/examples-patterns/in-game-currency) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/examples-patterns/in-game-currency.mdx))

**`sui move build`** — PASS (1.7s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/I2/fixed_supply (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `I2/fixed_supply`
- **Move edition**: 2024
- **Files**: `I2/fixed_supply/sources/silver.move`
- **Referenced by**: [onchain-finance/examples-patterns/fixed-supply](https://docs.sui.io/onchain-finance/examples-patterns/fixed-supply) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/examples-patterns/fixed-supply.mdx))

**`sui move build`** — PASS (0.6s)

</details>

<details><summary>PASS — MystenLabs/sui-stack-hello-world@main/move (unknown)</summary>

- **Origin**: MystenLabs/sui-stack-hello-world@main
- **Package root**: `move`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: framework/testnet`
- **Files**: `move/hello-world/Move.toml`
- **Referenced by**: [getting-started/onboarding/hello-world](https://docs.sui.io/getting-started/onboarding/hello-world) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/onboarding/hello-world.mdx))

**`sui move build`** — PASS (5.8s)

</details>

<details><summary>PASS — MystenLabs/sui-stack-hello-world@main/move/hello-world (move)</summary>

- **Origin**: MystenLabs/sui-stack-hello-world@main
- **Package root**: `move/hello-world`
- **Move edition**: 2024.beta
- **Dependencies**: `Sui: framework/testnet`
- **Files**: `move/hello-world/sources/greeting.move`
- **Referenced by**: [getting-started/onboarding/hello-world](https://docs.sui.io/getting-started/onboarding/hello-world) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/onboarding/hello-world.mdx))

**`sui move build`** — PASS (1.1s)

</details>

<details><summary>PASS — MystenLabs/sui-stack-hello-world@main/ui (typescript)</summary>

- **Origin**: MystenLabs/sui-stack-hello-world@main
- **Package root**: `ui`
- **Dependencies**: `@mysten/dapp-kit-core: ^1.0.4`, `@mysten/dapp-kit-react: ^1.0.2`, `@mysten/sui: 2.4.0`, `typescript: ^5.8.3`
- **Files**: `ui/src/App.tsx`, `ui/src/CreateGreeting.tsx`, `ui/src/Greeting.tsx`, `ui/src/constants.ts`, `ui/src/networkConfig.ts`
- **Referenced by**: [getting-started/onboarding/app-frontends](https://docs.sui.io/getting-started/onboarding/app-frontends) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/onboarding/app-frontends.mdx))

**`pnpm install`** — PASS (4.9s)

```
✓ Lockfile passes supply-chain policies (verified 1s ago)
Lockfile is up to date, resolution step is skipped
Already up to date

.../esbuild@0.25.9/node_modules/esbuild postinstall$ node install.js
.../node_modules/@swc/core postinstall$ node postinstall.js
.../node_modules/@swc/core postinstall: Done
.../esbuild@0.25.9/node_modules/esbuild postinstall: Done
Done in 1.4s using pnpm v11.17.0

```

**`pnpm run build`** — PASS (5.4s)

```
[36mvite v7.1.4 [32mbuilding for production...[36m[39m
transforming...
[32m✓[39m 812 modules transformed.
rendering chunks...
computing gzip size...
[2mdist/[22m[32mindex.html                 [39m[1m[2m  1.23 kB[22m[1m[22m[2m │ gzip:   0.64 kB[22m
[2mdist/[22m[2massets/[22m[35mindex-Cs5nhfe8.css  [39m[1m[2m689.24 kB[22m[1m[22m[2m │ gzip:  80.92 kB[22m
[2mdist/[22m[2massets/[22m[36mindex-Df_K52sv.js   [39m[1m[33m666.55 kB[39m[22m[2m │ gzip: 205.75 kB[22m
[32m✓ built in 2.69s[39m

```

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/G1/scenario (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `G1/scenario`
- **Move edition**: 2024
- **Files**: `G1/scenario/sources/acl.move`, `G1/scenario/sources/hero.move`
- **Referenced by**: [getting-started/examples/scenario-testing](https://docs.sui.io/getting-started/examples/scenario-testing) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/scenario-testing.mdx))

**`sui move build`** — PASS (0.8s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/G1 (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `G1`
- **Move edition**: 2024
- **Files**: `G1/scenario/tests/hero_tests.move`, `G1/scenario/tests/acl_tests.move`
- **Referenced by**: [getting-started/examples/scenario-testing](https://docs.sui.io/getting-started/examples/scenario-testing) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/scenario-testing.mdx))

**`sui move build`** — PASS (1.4s)

</details>

<details><summary>PASS — MystenLabs/plinko-poc@main/plinko (move)</summary>

- **Origin**: MystenLabs/plinko-poc@main
- **Package root**: `plinko`
- **Move edition**: 2024
- **Files**: `plinko/sources/plinko.move`, `plinko/sources/house_data.move`
- **Referenced by**: [getting-started/examples/plinko](https://docs.sui.io/getting-started/examples/plinko) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/plinko.mdx))

**`sui move build`** — PASS (1.1s)

</details>

<details><summary>PASS — MystenLabs/plinko-poc@main/app/src (typescript)</summary>

- **Origin**: MystenLabs/plinko-poc@main
- **Package root**: `app/src`
- **Dependencies**: `@mysten/codegen: ^0.8.4`, `@mysten/dapp-kit-core: ^1.3.0`, `@mysten/dapp-kit-react: ^2.0.1`, `@mysten/enoki: ^1.0.4`, `@mysten/sui: ^2.15.0`, `typescript: 5.1.6`
- **Files**: `app/src/hooks/moveTransactionCalls.ts/useCreateGame.ts`
- **Referenced by**: [getting-started/examples/plinko](https://docs.sui.io/getting-started/examples/plinko) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/plinko.mdx))

**`pnpm install`** — PASS (9.6s)

```
✓ Lockfile passes supply-chain policies (verified 3s ago)
Lockfile is up to date, resolution step is skipped
Already up to date

.../node_modules/protobufjs postinstall$ node scripts/postinstall
.../node_modules/utf-8-validate install$ node-gyp-build
.../node_modules/bufferutil install$ node-gyp-build
.../node_modules/protobufjs postinstall: Done
.../node_modules/utf-8-validate install: Done
.../node_modules/bufferutil install: Done
Done in 2s using pnpm v11.17.0

```

**`pnpm run build`** — PASS (47.1s)

```
irst Load JS shared by all              77.7 kB
  ├ chunks/849-c92b0b30eb228fed.js         25.2 kB
  ├ chunks/e9b4cd7a-ce9ab42d18b3907b.js    50.6 kB
  ├ chunks/main-app-92e7af8c6b55c34c.js    215 B
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

</details>

<details><summary>PASS — MystenLabs/plinko-poc@main/app (typescript)</summary>

- **Origin**: MystenLabs/plinko-poc@main
- **Package root**: `app`
- **Dependencies**: `@mysten/codegen: ^0.8.4`, `@mysten/dapp-kit-core: ^1.3.0`, `@mysten/dapp-kit-react: ^2.0.1`, `@mysten/enoki: ^1.0.4`, `@mysten/sui: ^2.15.0`, `typescript: 5.1.6`
- **Files**: `app/src/app/api/services/PlinkoGameService.ts`
- **Referenced by**: [getting-started/examples/plinko](https://docs.sui.io/getting-started/examples/plinko) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/plinko.mdx))

**`pnpm run build`** — PASS (17.2s)

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

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/F1/app/my-first-sui-dapp/src (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `F1/app/my-first-sui-dapp/src`
- **Files**: `F1/app/my-first-sui-dapp/src/components/ui/CreateHeroForm.tsx`, `F1/app/my-first-sui-dapp/src/components/ui/HeroesList.tsx`
- **Referenced by**: [getting-started/examples/nft-app](https://docs.sui.io/getting-started/examples/nft-app) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/nft-app.mdx))

**`npm install`** — PASS (1.4s)

```

added 24 packages, and audited 25 packages in 1s

6 packages are looking for funding
  run `npm fund` for details

1 high severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

```

**`tsc --noEmit`** — PASS (1.4s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@main/K1/contract (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@main
- **Package root**: `K1/contract`
- **Move edition**: 2024
- **Files**: `K1/contract/sources/indexer_sample.move`
- **Referenced by**: [getting-started/examples/event-indexer](https://docs.sui.io/getting-started/examples/event-indexer) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/event-indexer.mdx))

**`sui move build`** — PASS (1.0s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@main/K1 (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@main
- **Package root**: `K1`
- **Dependencies**: `@mysten/sui: ^1.43.1`, `typescript: ^5.9.3`
- **Files**: `K1/backend/indexer.ts`
- **Referenced by**: [getting-started/examples/event-indexer](https://docs.sui.io/getting-started/examples/event-indexer) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/event-indexer.mdx))

**`npm install`** — PASS (3.8s)

```

added 354 packages, and audited 355 packages in 4s

52 packages are looking for funding
  run `npm fund` for details

10 vulnerabilities (2 low, 7 high, 1 critical)

To address all issues, run:
  npm audit fix

Run `npm audit` for details.

```

**`tsc --noEmit`** — PASS (1.5s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@main/K1/backend (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@main
- **Package root**: `K1/backend`
- **Dependencies**: `@mysten/sui: ^1.43.1`, `typescript: ^5.9.3`
- **Files**: `K1/backend/utils/parseEvent.ts`
- **Referenced by**: [getting-started/examples/event-indexer](https://docs.sui.io/getting-started/examples/event-indexer) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/event-indexer.mdx))

**`tsc --noEmit`** — PASS (1.4s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/C5/contracts/derived_objects (move)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `C5/contracts/derived_objects`
- **Move edition**: 2024
- **Files**: `C5/contracts/derived_objects/sources/parent.move`
- **Referenced by**: [getting-started/examples/derived-objects](https://docs.sui.io/getting-started/examples/derived-objects) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/derived-objects.mdx))

**`sui move build`** — PASS (0.7s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/C5/ts (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `C5/ts`
- **Dependencies**: `@mysten/sui: ^2.6.0`
- **Files**: `C5/ts/src/helpers/deriveObjectID.ts`
- **Referenced by**: [getting-started/examples/derived-objects](https://docs.sui.io/getting-started/examples/derived-objects) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/derived-objects.mdx))

**`npm install`** — PASS (16.3s)

```

added 69 packages, and audited 70 packages in 16s

22 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

```

**`tsc --noEmit`** — PASS (1.5s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/E2/my-first-sui-dapp (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `E2/my-first-sui-dapp`
- **Files**: `E2/my-first-sui-dapp/src/dapp-kit.ts`, `E2/my-first-sui-dapp/src/OwnedObjects.tsx`, `E2/my-first-sui-dapp/src/main.tsx`
- **Referenced by**: [getting-started/examples/dapp-kit-frontend](https://docs.sui.io/getting-started/examples/dapp-kit-frontend) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/dapp-kit-frontend.mdx))

**`tsc --noEmit`** — PASS (1.3s)

</details>

<details><summary>PASS — MystenLabs/sui-move-bootcamp@solution/E2/my-first-sui-dapp/src (typescript)</summary>

- **Origin**: MystenLabs/sui-move-bootcamp@solution
- **Package root**: `E2/my-first-sui-dapp/src`
- **Files**: `E2/my-first-sui-dapp/src/components/ui/MintNFTForm.tsx`
- **Referenced by**: [getting-started/examples/dapp-kit-frontend](https://docs.sui.io/getting-started/examples/dapp-kit-frontend) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/getting-started/examples/dapp-kit-frontend.mdx))

**`tsc --noEmit`** — PASS (1.3s)

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/deepbook-v3 (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/deepbook-v3`
- **Dependencies**: `@mysten/bcs: workspace:^`, `@mysten/codegen: workspace:^`, `typescript: ^6.0.3`
- **Files**: `packages/deepbook-v3/src/transactions/deepbook.ts`, `packages/deepbook-v3/src/client.ts`, `packages/deepbook-v3/src/transactions/balanceManager.ts`, `packages/deepbook-v3/src/transactions/marginTPSL.ts`, `packages/deepbook-v3/src/transactions/poolProxy.ts`, `packages/deepbook-v3/src/transactions/marginPool.ts`, `packages/deepbook-v3/src/transactions/marginManager.ts`, `packages/deepbook-v3/src/transactions/marginMaintainer.ts`
- **Referenced by**: [onchain-finance/deepbook/deepbookv3-sdk/swaps](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/swaps) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3-sdk/swaps.mdx)), [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3-sdk/staking-governance.mdx)), [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3-sdk/pools.mdx)), [onchain-finance/deepbook/deepbookv3-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/orders) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3-sdk/orders.mdx)), [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3-sdk/balance-manager.mdx)), [onchain-finance/deepbook/deepbook-margin-sdk/tpsl](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/tpsl) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin-sdk/tpsl.mdx)), [onchain-finance/deepbook/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/orders) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin-sdk/orders.mdx)), [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool.mdx)), [onchain-finance/deepbook/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager.mdx)), [onchain-finance/deepbook/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/maintainer) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin-sdk/maintainer.mdx))

**`pnpm run build (workspace)`** — PASS (0.0s)

```
Workspace build at /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main succeeded
```

</details>

<details><summary>PASS — MystenLabs/deepbookv3@main/packages/deepbook (move)</summary>

- **Origin**: MystenLabs/deepbookv3@main
- **Package root**: `packages/deepbook`
- **Move edition**: 2024.beta
- **Dependencies**: `token: main`
- **Files**: `packages/deepbook/sources/state/trade_params.move`, `packages/deepbook/sources/pool.move`, `packages/deepbook/sources/balance_manager.move`, `packages/deepbook/sources/helper/constants.move`, `packages/deepbook/sources/book/order_info.move`, `packages/deepbook/sources/vault/deep_price.move`, `packages/deepbook/sources/book/fill.move`, `packages/deepbook/sources/book/order.move`
- **Referenced by**: [onchain-finance/deepbook/deepbookv3/fees-and-funding](https://docs.sui.io/onchain-finance/deepbook/deepbookv3/fees-and-funding) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3/fees-and-funding.mdx)), [onchain-finance/deepbook/deepbookv3/contract-information/swaps](https://docs.sui.io/onchain-finance/deepbook/deepbookv3/contract-information/swaps) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3/contract-information/swaps.mdx)), [onchain-finance/deepbook/deepbookv3/contract-information/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3/contract-information/staking-governance) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3/contract-information/staking-governance.mdx)), [onchain-finance/deepbook/deepbookv3/contract-information/referral](https://docs.sui.io/onchain-finance/deepbook/deepbookv3/contract-information/referral) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3/contract-information/referral.mdx)), [onchain-finance/deepbook/deepbookv3/contract-information/query-the-pool](https://docs.sui.io/onchain-finance/deepbook/deepbookv3/contract-information/query-the-pool) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3/contract-information/query-the-pool.mdx)), [onchain-finance/deepbook/deepbookv3/contract-information/permissionless-pool](https://docs.sui.io/onchain-finance/deepbook/deepbookv3/contract-information/permissionless-pool) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3/contract-information/permissionless-pool.mdx)), [onchain-finance/deepbook/deepbookv3/contract-information/orders](https://docs.sui.io/onchain-finance/deepbook/deepbookv3/contract-information/orders) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3/contract-information/orders.mdx)), [onchain-finance/deepbook/deepbookv3/contract-information/flash-loans](https://docs.sui.io/onchain-finance/deepbook/deepbookv3/contract-information/flash-loans) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3/contract-information/flash-loans.mdx)), [onchain-finance/deepbook/deepbookv3/contract-information/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3/contract-information/balance-manager) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbookv3/contract-information/balance-manager.mdx))

**`sui move build`** — PASS (2.0s)

</details>

<details><summary>PASS — MystenLabs/deepbookv3@main/packages/deepbook_margin (move)</summary>

- **Origin**: MystenLabs/deepbookv3@main
- **Package root**: `packages/deepbook_margin`
- **Move edition**: 2024.alpha
- **Dependencies**: `token: main`, `deepbook: local`, `pyth: sui-contract-mainnet`
- **Files**: `packages/deepbook_margin/sources/margin_manager.move`, `packages/deepbook_margin/sources/helper/margin_constants.move`, `packages/deepbook_margin/sources/tpsl.move`, `packages/deepbook_margin/sources/margin_pool.move`, `packages/deepbook_margin/sources/margin_pool/protocol_fees.move`, `packages/deepbook_margin/sources/pool_proxy.move`, `packages/deepbook_margin/sources/margin_registry.move`
- **Referenced by**: [onchain-finance/deepbook/deepbook-margin/margin-integration](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin/margin-integration) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin/margin-integration.mdx)), [onchain-finance/deepbook/deepbook-margin/leveraged-workflow](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin/leveraged-workflow) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin/leveraged-workflow.mdx)), [onchain-finance/deepbook/deepbook-margin/contract-information/tpsl](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin/contract-information/tpsl) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin/contract-information/tpsl.mdx)), [onchain-finance/deepbook/deepbook-margin/contract-information/supply-referral](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin/contract-information/supply-referral) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin/contract-information/supply-referral.mdx)), [onchain-finance/deepbook/deepbook-margin/contract-information/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin/contract-information/orders) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin/contract-information/orders.mdx)), [onchain-finance/deepbook/deepbook-margin/contract-information/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin/contract-information/margin-pool) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin/contract-information/margin-pool.mdx)), [onchain-finance/deepbook/deepbook-margin/contract-information/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin/contract-information/margin-manager) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin/contract-information/margin-manager.mdx)), [onchain-finance/deepbook/deepbook-margin/contract-information/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin/contract-information/maintainer) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin/contract-information/maintainer.mdx))

**`sui move build`** — PASS (16.0s)

</details>

<details><summary>PASS — MystenLabs/deepbookv3@main/packages/margin_liquidation (move)</summary>

- **Origin**: MystenLabs/deepbookv3@main
- **Package root**: `packages/margin_liquidation`
- **Move edition**: 2024.alpha
- **Dependencies**: `token: main`, `deepbook: local`, `deepbook_margin: local`, `pyth: sui-contract-mainnet`
- **Files**: `packages/margin_liquidation/sources/liquidation_vault.move`
- **Referenced by**: [onchain-finance/deepbook/deepbook-margin/leveraged-workflow](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin/leveraged-workflow) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-margin/leveraged-workflow.mdx))

**`sui move build`** — PASS (14.2s)

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/enoki (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/enoki`
- **Dependencies**: `@mysten/utils: workspace:^`, `@mysten/wallet-standard: workspace:^`, `@mysten/webcrypto-signer: workspace:^`, `@mysten/dapp-kit-react: workspace:^`, `typescript: ^6.0.3`
- **Files**: `packages/enoki/src/wallet/register.ts`
- **Referenced by**: [onchain-finance/asset-custody/wallets/zk-login-wallets](https://docs.sui.io/onchain-finance/asset-custody/wallets/zk-login-wallets) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/zk-login-wallets.mdx))

**`pnpm run build (workspace)`** — PASS (0.0s)

```
Workspace build at /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main succeeded
```

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/sui (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/sui`
- **Dependencies**: `@mysten/bcs: workspace:^`, `@mysten/utils: workspace:^`, `typescript: ^6.0.3`
- **Files**: `packages/sui/src/zklogin/address.ts`, `packages/sui/src/zklogin/signature.ts`
- **Referenced by**: [onchain-finance/asset-custody/wallets/zk-login-wallets](https://docs.sui.io/onchain-finance/asset-custody/wallets/zk-login-wallets) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/zk-login-wallets.mdx))

**`pnpm run build (workspace)`** — PASS (0.0s)

```
Workspace build at /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main succeeded
```

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/slush-wallet (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/slush-wallet`
- **Dependencies**: `@mysten/utils: workspace:^`, `@mysten/wallet-standard: workspace:^`, `@mysten/window-wallet-core: workspace:^`, `typescript: ^6.0.3`
- **Files**: `packages/slush-wallet/src/wallet/index.ts`
- **Referenced by**: [onchain-finance/asset-custody/wallets/slush](https://docs.sui.io/onchain-finance/asset-custody/wallets/slush) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/slush.mdx))

**`pnpm run build (workspace)`** — PASS (0.0s)

```
Workspace build at /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main succeeded
```

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/dapp-kit-next/packages/dapp-kit-react/src (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/dapp-kit-next/packages/dapp-kit-react/src`
- **Files**: `packages/dapp-kit-next/packages/dapp-kit-react/src/components/DAppKitProvider.tsx`, `packages/dapp-kit-next/packages/dapp-kit-react/src/hooks/useWalletConnection.ts`, `packages/dapp-kit-next/packages/dapp-kit-react/src/hooks/useCurrentWallet.ts`, `packages/dapp-kit-next/packages/dapp-kit-react/src/hooks/useCurrentAccount.ts`, `packages/dapp-kit-next/packages/dapp-kit-react/src/hooks/useWallets.ts`, `packages/dapp-kit-next/packages/dapp-kit-react/src/hooks/useDAppKit.ts`
- **Referenced by**: [onchain-finance/asset-custody/wallets/slush](https://docs.sui.io/onchain-finance/asset-custody/wallets/slush) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/slush.mdx)), [onchain-finance/asset-custody/wallets/self-custody](https://docs.sui.io/onchain-finance/asset-custody/wallets/self-custody) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/self-custody.mdx))

**`pnpm run build (workspace)`** — PASS (0.0s)

```
Workspace build at /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main succeeded
```

</details>

<details><summary>PASS — MystenLabs/ts-sdks@main/packages/dapp-kit-next/packages/dapp-kit-core (typescript)</summary>

- **Origin**: MystenLabs/ts-sdks@main
- **Package root**: `packages/dapp-kit-next/packages/dapp-kit-core`
- **Files**: `packages/dapp-kit-next/packages/dapp-kit-core/src/core/index.ts`
- **Referenced by**: [onchain-finance/asset-custody/wallets/self-custody](https://docs.sui.io/onchain-finance/asset-custody/wallets/self-custody) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/asset-custody/wallets/self-custody.mdx))

**`pnpm run build (workspace)`** — PASS (0.0s)

```
Workspace build at /home/runner/work/sui-docs-example-validator/sui-docs-example-validator/results/.external-repos/MystenLabs--ts-sdks--main succeeded
```

</details>

<details><summary>PASS — MystenLabs/deepbookv3@predict-testnet-4-16/packages/predict (move)</summary>

- **Origin**: MystenLabs/deepbookv3@predict-testnet-4-16
- **Package root**: `packages/predict`
- **Move edition**: 2024.beta
- **Dependencies**: `fixed_math: local`, `dusdc: local`, `account: local`, `propbook: local`, `token: main`, `pyth_lazer: sui-testnet`, `block_scholes_oracle: local`
- **Files**: `packages/predict/sources/vault/vault.move`, `packages/predict/sources/vault/plp.move`, `packages/predict/sources/registry.move`, `packages/predict/sources/predict.move`, `packages/predict/sources/predict_manager.move`, `packages/predict/sources/oracle.move`, `packages/predict/sources/market_key/market_key.move`, `packages/predict/sources/market_key/range_key.move`
- **Referenced by**: [onchain-finance/deepbook/deepbook-predict/contract-information/vault](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/vault) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-predict/contract-information/vault.mdx)), [onchain-finance/deepbook/deepbook-predict/contract-information/registry](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/registry) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-predict/contract-information/registry.mdx)), [onchain-finance/deepbook/deepbook-predict/contract-information/predict](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-predict/contract-information/predict.mdx)), [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager.mdx)), [onchain-finance/deepbook/deepbook-predict/contract-information/oracle](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/oracle) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-predict/contract-information/oracle.mdx)), [onchain-finance/deepbook/deepbook-predict/contract-information/market-keys](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/market-keys) ([source](https://github.com/MystenLabs/sui/blob/main/docs/content/onchain-finance/deepbook/deepbook-predict/contract-information/market-keys.mdx))

**`sui move build`** — PASS (10.5s)

</details>
