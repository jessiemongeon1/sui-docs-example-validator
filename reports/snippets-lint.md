# Snippet Coverage Report

| Metric | Value |
|--------|-------|
| MDX files scanned | 420 |
| Total code blocks | 1788 |
| Compilable (Move/TS/Rust) | 570 |
| Covered by validated packages | 11 |
| Uncovered | 559 |
| Shell/config blocks (skipped) | 1218 |

## Uncovered Snippets

| # | File | Line | Language | Lines | Preview |
|---|------|------|----------|-------|---------|
| 1 | [snippets/suilink-query-objects](https://docs.sui.io/snippets/suilink-query-objects) | L1 | ts | 47 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 2 | [snippets/coin-standards](https://docs.sui.io/snippets/coin-standards) | L25 | ts | 11 | `const tx = new Transaction();` |
| 3 | [snippets/coin-standards](https://docs.sui.io/snippets/coin-standards) | L48 | rust | 18 | `let mut ptb = ProgrammableTransactionBuilder::new();` |
| 4 | [references/object-display-syntax](https://docs.sui.io/references/object-display-syntax) | L348 | move | 5 | `enum Status {` |
| 5 | [references/gaming](https://docs.sui.io/references/gaming) | L182 | move | 8 | `public struct Asset has key, store {` |
| 6 | [references/gaming](https://docs.sui.io/references/gaming) | L195 | jsx | 4 | `Display` |
| 7 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L171 | move | 7 | `module payment_kit::payment_kit;` |
| 8 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L197 | move | 11 | `module payment_kit::payment_kit;` |
| 9 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L239 | move | 7 | `module payment_kit::payment_kit;` |
| 10 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L257 | move | 8 | `module payment_kit::payment_kit;` |
| 11 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L270 | move | 8 | `module payment_kit::payment_kit;` |
| 12 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L287 | move | 7 | `module payment_kit::payment_kit;` |
| 13 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L303 | move | 10 | `module payment_kit::payment_kit;` |
| 14 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L456 | move | 3 | `public struct Namespace has key, store {` |
| 15 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L466 | move | 6 | `public struct PaymentRegistry has key {` |
| 16 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L479 | move | 4 | `public struct RegistryAdminCap has key, store {` |
| 17 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L490 | move | 4 | `public enum PaymentType has copy, drop, store {` |
| 18 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L501 | move | 8 | `public struct PaymentReceipt has key, store {` |
| 19 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L516 | move | 5 | `public struct PaymentKey<phantom T> has copy, drop, store {` |
| 20 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L528 | move | 3 | `public struct PaymentRecord has store {` |
| 21 | [onchain-finance/choose-payments-model](https://docs.sui.io/onchain-finance/choose-payments-model) | L121 | move | 11 | `module payment_kit::payment_kit;` |
| 22 | [onchain-finance/choose-payments-model](https://docs.sui.io/onchain-finance/choose-payments-model) | L187 | tsx | 26 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 23 | [getting-started/sui-for-solana](https://docs.sui.io/getting-started/sui-for-solana) | L89 | move | 8 | `/// Grants the owner the right to create new users in the sy` |
| 24 | [getting-started/sui-for-ethereum](https://docs.sui.io/getting-started/sui-for-ethereum) | L92 | move | 8 | `/// Grants the owner the right to create new users in the sy` |
| 25 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L86 | typescript | 13 | `import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519` |
| 26 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L249 | typescript | 6 | `import { decodeJwt } from '@mysten/sui/zklogin';` |
| 27 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L289 | typescript | 5 | `import { jwtToAddress } from '@mysten/sui/zklogin';` |
| 28 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L315 | typescript | 5 | `import { getExtendedEphemeralPublicKey } from '@mysten/sui/z` |
| 29 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L401 | typescript | 9 | `import { getZkLoginSignature } from '@mysten/sui/zklogin';` |
| 30 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L541 | typescript | 18 | `import { ZkLoginSigner } from '@mysten/sui/zklogin';` |
| 31 | [sui-stack/zklogin-integration/developer-account](https://docs.sui.io/sui-stack/zklogin-integration/developer-account) | L73 | typescript | 13 | `const REDIRECT_URI = '<YOUR_SITE_URL>';` |
| 32 | [sui-stack/zklogin-integration/defi-trading-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/defi-trading-zklogin) | L34 | typescript | 27 | `import { createDAppKit } from '@mysten/dapp-kit-react';` |
| 33 | [sui-stack/zklogin-integration/defi-trading-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/defi-trading-zklogin) | L66 | typescript | 2 | `import { useCurrentAccount, useDAppKit } from '@mysten/dapp-` |
| 34 | [sui-stack/zklogin-integration/defi-trading-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/defi-trading-zklogin) | L75 | typescript | 32 | `import { deepbook } from '@mysten/deepbook-v3';` |
| 35 | [sui-stack/zklogin-integration/defi-trading-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/defi-trading-zklogin) | L114 | typescript | 43 | `import { EnokiClient } from '@mysten/enoki';` |
| 36 | [sui-stack/zklogin-integration/defi-trading-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/defi-trading-zklogin) | L164 | typescript | 12 | `const { bytes, digest } = await post('/api/sponsor-swap', {` |
| 37 | [sui-stack/zklogin-integration/consumer-app-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/consumer-app-zklogin) | L43 | typescript | 27 | `import { createDAppKit } from '@mysten/dapp-kit-react';` |
| 38 | [sui-stack/zklogin-integration/consumer-app-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/consumer-app-zklogin) | L77 | typescript | 13 | `import { useCurrentAccount } from '@mysten/dapp-kit-react';` |
| 39 | [sui-stack/zklogin-integration/consumer-app-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/consumer-app-zklogin) | L120 | typescript | 43 | `import { SealClient, SessionKey } from '@mysten/seal';` |
| 40 | [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) | L254 | ts | 7 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 41 | [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) | L468 | ts | 7 | `const { data } = useSuiClientQuery('getOwnedObjects', {` |
| 42 | [sui-stack/walrus/sui-stack-walrus-sites](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus-sites) | L86 | move | 4 | `public struct Site has key, store {` |
| 43 | [sui-stack/walrus/sui-stack-walrus-sites](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus-sites) | L95 | move | 5 | `public struct Resource has store, drop {` |
| 44 | [sui-stack/suiplay0x1/migration-strategies](https://docs.sui.io/sui-stack/suiplay0x1/migration-strategies) | L86 | tsx | 22 | `// main.tsx` |
| 45 | [sui-stack/suiplay0x1/migration-strategies](https://docs.sui.io/sui-stack/suiplay0x1/migration-strategies) | L155 | ts | 15 | `const MEMBERSHIP_TYPE = '0xPACKAGE_ID::membership::Membershi` |
| 46 | [sui-stack/suins/sui-stack-suins](https://docs.sui.io/sui-stack/suins/sui-stack-suins) | L198 | move | 27 | `module demo::demo {` |
| 47 | [sui-stack/suins/sui-stack-suins](https://docs.sui.io/sui-stack/suins/sui-stack-suins) | L422 | tsx | 20 | `import { SealClient } from '@mysten/seal';` |
| 48 | [sui-stack/suins/developer](https://docs.sui.io/sui-stack/suins/developer) | L154 | move | 34 | `module demo::demo {` |
| 49 | [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) | L45 | move | 4 | `entry fun roll_dice(r: &Random, ctx: &mut TxContext): Dice {` |
| 50 | [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) | L131 | move | 31 | `module games::dice {` |
| 51 | [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) | L167 | move | 6 | `public fun attack(guess: u8, r: &Random, ctx: &mut TxContext` |
| 52 | [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) | L185 | move | 4 | `public fun attack(t: Ticket): Ticket {` |
| 53 | [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) | L210 | typescript | 6 | `const tx = new Transaction();` |
| 54 | [references/package-managers/package-manager-migration](https://docs.sui.io/references/package-managers/package-manager-migration) | L107 | move | 3 | `module example_package::m;` |
| 55 | [references/contribute/style-guide](https://docs.sui.io/references/contribute/style-guide) | L676 | move | 11 | `module satoshi_flip::house_data {` |
| 56 | [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) | L107 | jsx | 1 | `<UnsafeLink href="/getting-started">Link title</UnsafeLink>` |
| 57 | [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) | L213 | jsx | 1 | `<ImportContent source="prerequisites" mode="snippet" />` |
| 58 | [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) | L252 | jsx | 6 | `<ImportContent` |
| 59 | [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) | L263 | jsx | 1 | `<ImportContent source="I2/fixed_supply/sources/silver.move" ` |
| 60 | [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) | L351 | ts | 5 | `import lib from "library"; ` |
| 61 | [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) | L451 | jsx | 3 | `import YTCarousel from "@site/src/components/YTCarousel";` |
| 62 | [onchain-finance/tokenized-assets/deploy-tokenized-asset](https://docs.sui.io/onchain-finance/tokenized-assets/deploy-tokenized-asset) | L204 | move | 8 | `...` |
| 63 | [onchain-finance/tokenized-assets/deploy-tokenized-asset](https://docs.sui.io/onchain-finance/tokenized-assets/deploy-tokenized-asset) | L217 | tsx | 19 | `...` |
| 64 | [onchain-finance/tokenized-assets/deploy-tokenized-asset](https://docs.sui.io/onchain-finance/tokenized-assets/deploy-tokenized-asset) | L250 | tsx | 17 | `...` |
| 65 | [onchain-finance/pas/querying-assets](https://docs.sui.io/onchain-finance/pas/querying-assets) | L79 | tsx | 17 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 66 | [onchain-finance/pas/querying-assets](https://docs.sui.io/onchain-finance/pas/querying-assets) | L103 | tsx | 7 | `const accountAddress = client.pas.deriveAccountAddress(walle` |
| 67 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L57 | move | 2 | `account::create_and_share(&mut namespace, @0xAlice);` |
| 68 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L82 | move | 16 | `// 1. Create auth proof` |
| 69 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L121 | move | 11 | `// 1. Create clawback request (no Auth needed)` |
| 70 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L160 | move | 6 | `let auth = account::new_auth(ctx);` |
| 71 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L175 | move | 5 | `let auth = account::new_auth(ctx);` |
| 72 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L187 | move | 1 | `account.deposit_balance(balance);` |
| 73 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L193 | move | 1 | `balance.send_funds(namespace.account_address(owner));` |
| 74 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L201 | move | 15 | `public fun burn(` |
| 75 | [onchain-finance/pas/pas-architecture](https://docs.sui.io/onchain-finance/pas/pas-architecture) | L175 | move | 4 | `// Policy requires: { TransferApproval }` |
| 76 | [onchain-finance/pas/pas-architecture](https://docs.sui.io/onchain-finance/pas/pas-architecture) | L220 | move | 5 | `// Wallet-owned: proves ownership via transaction sender` |
| 77 | [onchain-finance/pas/pas-architecture](https://docs.sui.io/onchain-finance/pas/pas-architecture) | L232 | move | 5 | `// Get the account address for an owner` |
| 78 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L55 | move | 5 | `/// Witness for approved transfers between accounts.` |
| 79 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L71 | move | 13 | `let (mut policy, policy_cap) = policy::new_for_currency(` |
| 80 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L95 | move | 7 | `public fun approve_transfer(` |
| 81 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L139 | move | 5 | `public fun set_template_command<A: drop>(` |
| 82 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L153 | move | 7 | `public fun approve_transfer(` |
| 83 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L165 | move | 14 | `let type_name = type_name::with_defining_ids<MY_COIN>();` |
| 84 | [onchain-finance/oracles/resolution-patterns](https://docs.sui.io/onchain-finance/oracles/resolution-patterns) | L88 | move | 28 | `// ILLUSTRATIVE PATTERN, NOT A DEPLOYABLE PACKAGE. Sketch of` |
| 85 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L165 | javascript | 4 | `let tx = new Transaction();` |
| 86 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L191 | javascript | 11 | `let tx = new Transaction();` |
| 87 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L223 | javascript | 11 | `let tx = new Transaction();` |
| 88 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L257 | javascript | 11 | `let tx = new Transaction();` |
| 89 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L295 | javascript | 12 | `const tx = new Transaction();` |
| 90 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L339 | javascript | 13 | `let tx = new Transaction();` |
| 91 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L377 | javascript | 11 | `let tx = new Transaction();` |
| 92 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L425 | move | 7 | `module examples::immutable_borrow;` |
| 93 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L441 | move | 9 | `module examples::mutable_borrow;` |
| 94 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L459 | javascript | 22 | `let tx = new Transaction();` |
| 95 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L490 | javascript | 23 | `let tx = new Transaction();` |
| 96 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L76 | move | 23 | `module examples::kiosk_name_ext;` |
| 97 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L114 | move | 5 | `module example::my_extension;` |
| 98 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L139 | move | 16 | `module examples::letterbox_ext;` |
| 99 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L183 | move | 13 | `module examples::letterbox_ext;` |
| 100 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L203 | move | 12 | `module examples::letterbox_ext;` |
| 101 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L251 | javascript | 9 | `let txb = new TransactionBuilder();` |
| 102 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L271 | javascript | 9 | `let txb = new TransactionBuilder();` |
| 103 | [onchain-finance/fungible-tokens/create-a-fungible-token](https://docs.sui.io/onchain-finance/fungible-tokens/create-a-fungible-token) | L145 | move | 5 | `// Mint new coins` |
| 104 | [onchain-finance/fungible-tokens/create-a-fungible-token](https://docs.sui.io/onchain-finance/fungible-tokens/create-a-fungible-token) | L155 | move | 1 | `currency.burn(coin);` |
| 105 | [onchain-finance/fungible-tokens/coin](https://docs.sui.io/onchain-finance/fungible-tokens/coin) | L211 | move | 5 | `public entry fun <FUNCTION-NAME><T>(` |
| 106 | [onchain-finance/examples-patterns/wasm-template](https://docs.sui.io/onchain-finance/examples-patterns/wasm-template) | L107 | move | 8 | `...` |
| 107 | [onchain-finance/examples-patterns/wasm-template](https://docs.sui.io/onchain-finance/examples-patterns/wasm-template) | L120 | tsx | 19 | `...` |
| 108 | [onchain-finance/examples-patterns/wasm-template](https://docs.sui.io/onchain-finance/examples-patterns/wasm-template) | L155 | tsx | 17 | `...` |
| 109 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L50 | move | 24 | `public fun kiosk_join<T>(` |
| 110 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L91 | move | 4 | `public struct BurnTicket<phantom T> has key {` |
| 111 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L100 | move | 5 | `public struct Treasury<phantom T> has key, store {` |
| 112 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L110 | move | 4 | `public struct AdminCap<phantom T> has key, store {` |
| 113 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L121 | move | 5 | `public fun mint_burn_ticket<T>(` |
| 114 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L131 | move | 4 | `public fun burn_with_ticket<T>(` |
| 115 | [onchain-finance/closed-loop-token/token-policy](https://docs.sui.io/onchain-finance/closed-loop-token/token-policy) | L59 | move | 5 | `// module: sui::token` |
| 116 | [onchain-finance/closed-loop-token/token-policy](https://docs.sui.io/onchain-finance/closed-loop-token/token-policy) | L73 | move | 7 | `// module sui::token` |
| 117 | [onchain-finance/closed-loop-token/token-policy](https://docs.sui.io/onchain-finance/closed-loop-token/token-policy) | L106 | move | 7 | `// module: sui::token` |
| 118 | [onchain-finance/closed-loop-token/token-policy](https://docs.sui.io/onchain-finance/closed-loop-token/token-policy) | L122 | move | 6 | `// module sui::token` |
| 119 | [onchain-finance/closed-loop-token/spending](https://docs.sui.io/onchain-finance/closed-loop-token/spending) | L64 | move | 2 | `// module sui::token` |
| 120 | [onchain-finance/closed-loop-token/spending](https://docs.sui.io/onchain-finance/closed-loop-token/spending) | L82 | move | 18 | `/// Rule-like witness to stamp the ActionRequest` |
| 121 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L55 | move | 2 | `/// The Rule type` |
| 122 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L70 | move | 17 | `module example::pass_rule {` |
| 123 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L117 | move | 8 | `// module: sui::token` |
| 124 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L132 | move | 4 | `// module: sui::token` |
| 125 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L143 | move | 4 | `// module: sui::token` |
| 126 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L154 | move | 6 | `// module: sui::token` |
| 127 | [onchain-finance/closed-loop-token/index](https://docs.sui.io/onchain-finance/closed-loop-token/index) | L68 | move | 5 | `// defined in `sui::coin`` |
| 128 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L76 | move | 4 | `// module: sui::token` |
| 129 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L103 | move | 6 | `// module: sui::token` |
| 130 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L114 | js | 27 | `let tx = new Transaction();` |
| 131 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L150 | move | 6 | `// module: sui::token` |
| 132 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L167 | js | 21 | `let tx = new Transaction();` |
| 133 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L201 | move | 7 | `// module: sui::token` |
| 134 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L213 | js | 21 | `let tx = new Transaction();` |
| 135 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L243 | move | 4 | `// module: sui::token` |
| 136 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L264 | move | 7 | `public fun new_request<T>(` |
| 137 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L86 | move | 9 | `entry fun new<T>(` |
| 138 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L113 | move | 9 | `// At most `limit` per `period_ms`, counted from the first s` |
| 139 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L131 | typescript | 13 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 140 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L149 | typescript | 46 | `import { Transaction } from '@mysten/sui/transactions';` |
| 141 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L202 | rust | 37 | `use move_core_types::identifier::Identifier;` |
| 142 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L252 | move | 6 | `public fun balance_spend<C>(` |
| 143 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L267 | typescript | 21 | `import { Transaction } from '@mysten/sui/transactions';` |
| 144 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L295 | typescript | 17 | `import { funderAddress } from './setup';` |
| 145 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L321 | rust | 53 | `use move_core_types::identifier::Identifier;` |
| 146 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L387 | move | 11 | `entry fun propose_for_app<T, A>(` |
| 147 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L403 | move | 24 | `module my_app::allowance_app;` |
| 148 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L442 | move | 1 | `public fun revoke<T>(self: AllowanceCap<T>, allowance: Allow` |
| 149 | [onchain-finance/allowances/using-allowances](https://docs.sui.io/onchain-finance/allowances/using-allowances) | L448 | typescript | 16 | `import { Transaction } from '@mysten/sui/transactions';` |
| 150 | [getting-started/onboarding/get-coins](https://docs.sui.io/getting-started/onboarding/get-coins) | L205 | typescript | 8 | `import { getFaucetHost, requestSuiFromFaucetV2 } from '@myst` |
| 151 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L80 | move | 6 | `module conventions::wallet;` |
| 152 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L93 | move | 25 | `module conventions::comments;` |
| 153 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L129 | move | 7 | `use std::string::String;` |
| 154 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L147 | move | 10 | `module conventions::constants;` |
| 155 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L170 | move | 16 | `module conventions::request;` |
| 156 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L214 | move | 7 | `module conventions::generics;` |
| 157 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L232 | move | 15 | `module conventions::shop;` |
| 158 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L254 | move | 30 | `module conventions::amm;` |
| 159 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L291 | move | 19 | `module conventions::amm;` |
| 160 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L323 | move | 37 | `module conventions::access_control;` |
| 161 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L367 | move | 33 | `module conventions::vesting_wallet;` |
| 162 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L407 | move | 24 | `module conventions::social_network;` |
| 163 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L444 | move | 34 | `module conventions::hero;` |
| 164 | [develop/write-move/index](https://docs.sui.io/develop/write-move/index) | L65 | move | 25 | `module my_package::counter;` |
| 165 | [develop/transaction-payment/sponsor-txn](https://docs.sui.io/develop/transaction-payment/sponsor-txn) | L76 | rust | 21 | `pub struct SenderSignedTransaction {` |
| 166 | [develop/transaction-payment/sponsor-txn](https://docs.sui.io/develop/transaction-payment/sponsor-txn) | L134 | rust | 5 | `pub struct GasLessTransactionData {` |
| 167 | [develop/transaction-payment/sponsor-txn](https://docs.sui.io/develop/transaction-payment/sponsor-txn) | L192 | rust | 11 | `// User-initiated: receive GaslessTransaction, return signed` |
| 168 | [develop/transaction-payment/index](https://docs.sui.io/develop/transaction-payment/index) | L68 | tsx | 11 | `import { Transaction, coinWithBalance } from '@mysten/sui/tr` |
| 169 | [develop/transaction-payment/index](https://docs.sui.io/develop/transaction-payment/index) | L92 | tsx | 1 | `tx.setGasPayment([]); // Gas paid from address balance — no ` |
| 170 | [develop/transaction-payment/index](https://docs.sui.io/develop/transaction-payment/index) | L135 | tsx | 18 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 171 | [develop/transaction-payment/index](https://docs.sui.io/develop/transaction-payment/index) | L164 | tsx | 16 | `const tx = new Transaction();` |
| 172 | [develop/transaction-payment/index](https://docs.sui.io/develop/transaction-payment/index) | L187 | tsx | 34 | `const tx = new Transaction();` |
| 173 | [develop/transaction-payment/gasless-stablecoin-transfers](https://docs.sui.io/develop/transaction-payment/gasless-stablecoin-transfers) | L108 | tsx | 26 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 174 | [develop/transaction-payment/gasless-stablecoin-transfers](https://docs.sui.io/develop/transaction-payment/gasless-stablecoin-transfers) | L139 | tsx | 1 | `const bytes = await tx.build({ client: grpcClient });` |
| 175 | [develop/transaction-payment/gasless-stablecoin-transfers](https://docs.sui.io/develop/transaction-payment/gasless-stablecoin-transfers) | L149 | tsx | 11 | `const tx = new Transaction();` |
| 176 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L56 | move | 15 | `#[test]` |
| 177 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L84 | move | 11 | `#[test_only]` |
| 178 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L100 | move | 4 | `#[test_only]` |
| 179 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L111 | move | 7 | `// Test that a specific abort code is raised` |
| 180 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L133 | move | 30 | `#[test]` |
| 181 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L194 | move | 11 | `use std::unit_test;` |
| 182 | [develop/testing-debugging/common-errors](https://docs.sui.io/develop/testing-debugging/common-errors) | L489 | typescript | 7 | `// Incorrect — double-wrapping causes this error` |
| 183 | [develop/testing-debugging/common-errors](https://docs.sui.io/develop/testing-debugging/common-errors) | L552 | typescript | 18 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 184 | [develop/testing-debugging/common-errors](https://docs.sui.io/develop/testing-debugging/common-errors) | L583 | typescript | 9 | `// Deprecated — do not use` |
| 185 | [develop/testing-debugging/common-errors](https://docs.sui.io/develop/testing-debugging/common-errors) | L607 | typescript | 14 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 186 | [develop/testing-debugging/common-errors](https://docs.sui.io/develop/testing-debugging/common-errors) | L626 | typescript | 13 | `const results = await client.core.getObjects({` |
| 187 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L139 | move | 3 | `public fun increment(c: &mut Counter) {` |
| 188 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L147 | move | 11 | `public struct Progress has copy, drop {` |
| 189 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L173 | move | 17 | `module example::counter;` |
| 190 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L205 | move | 43 | `module example::counter;` |
| 191 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L259 | move | 61 | `module example::counter;` |
| 192 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L190 | move | 21 | `module policy::day_of_week;` |
| 193 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L218 | move | 4 | `// Request to authorize upgrade on the wrong day of the week` |
| 194 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L227 | move | 7 | `fun week_day(ctx: &TxContext): u8 {` |
| 195 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L241 | move | 9 | `public fun authorize_upgrade(` |
| 196 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L257 | move | 12 | `public fun commit_upgrade(` |
| 197 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L274 | move | 53 | `module policy::day_of_week;` |
| 198 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L438 | move | 6 | `module example::example {` |
| 199 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L473 | js | 2 | `const SUI = 'sui';` |
| 200 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L480 | js | 27 | `import { execSync } from 'child_process';` |
| 201 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L512 | js | 5 | `import { fileURLToPath } from 'url';` |
| 202 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L522 | js | 5 | `const { modules, dependencies } = JSON.parse(` |
| 203 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L532 | js | 13 | `import { Transaction } from '@mysten/sui/transactions';` |
| 204 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L550 | js | 9 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 205 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L570 | js | 61 | `import { execSync } from 'child_process';` |
| 206 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L766 | js | 70 | `import { execSync } from 'child_process';` |
| 207 | [develop/objects/index](https://docs.sui.io/develop/objects/index) | L61 | move | 4 | `public struct TodoList has key {` |
| 208 | [develop/objects/escrow-example](https://docs.sui.io/develop/objects/escrow-example) | L48 | move | 4 | `module escrow::lock {` |
| 209 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L181 | move | 7 | `module sui::table;` |
| 210 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L197 | move | 5 | `module sui::bag;` |
| 211 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L209 | move | 22 | `module sui::table;` |
| 212 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L248 | move | 9 | `module sui::table;` |
| 213 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L266 | move | 6 | `module sui::table;` |
| 214 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L277 | move | 8 | `module sui::bag;` |
| 215 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L294 | move | 5 | `module sui::table;` |
| 216 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L304 | move | 5 | `module sui::table;` |
| 217 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L324 | move | 7 | `use sui::table;` |
| 218 | [develop/objects/derived-objects](https://docs.sui.io/develop/objects/derived-objects) | L132 | move | 36 | `use sui::table::{Self, Table};` |
| 219 | [develop/objects/derived-objects](https://docs.sui.io/develop/objects/derived-objects) | L175 | move | 36 | `use sui::table::{Self, Table};` |
| 220 | [develop/objects/derived-objects](https://docs.sui.io/develop/objects/derived-objects) | L218 | move | 31 | `const EVaultAlreadyExists: u64 = 0;` |
| 221 | [develop/manage-packages/move-package-management](https://docs.sui.io/develop/manage-packages/move-package-management) | L103 | move | 4 | `module example::example_module;` |
| 222 | [develop/manage-packages/move-package-management](https://docs.sui.io/develop/manage-packages/move-package-management) | L206 | move | 2 | `use math_a::signed;` |
| 223 | [develop/manage-packages/move-package-management](https://docs.sui.io/develop/manage-packages/move-package-management) | L509 | typescript | 13 | `import { execSync } from 'child_process';` |
| 224 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L99 | move | 7 | `use sui::ed25519;` |
| 225 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L126 | move | 8 | `use sui::ecdsa_k1;` |
| 226 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L153 | move | 8 | `use sui::ecdsa_k1;` |
| 227 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L181 | move | 8 | `use sui::ecdsa_r1;` |
| 228 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L209 | move | 8 | `use sui::ecdsa_r1;` |
| 229 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L237 | move | 7 | `use sui::bls12381;` |
| 230 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L264 | move | 7 | `use sui::bls12381;` |
| 231 | [develop/cryptography/hashing](https://docs.sui.io/develop/cryptography/hashing) | L66 | move | 22 | `module test::hashing_std {` |
| 232 | [develop/cryptography/hashing](https://docs.sui.io/develop/cryptography/hashing) | L93 | move | 22 | `module test::hashing_sui {` |
| 233 | [develop/cryptography/groth16](https://docs.sui.io/develop/cryptography/groth16) | L92 | rust | 53 | `use ark_bn254::Bn254;` |
| 234 | [develop/cryptography/groth16](https://docs.sui.io/develop/cryptography/groth16) | L167 | move | 8 | `use sui::groth16;` |
| 235 | [develop/cryptography/ecvrf](https://docs.sui.io/develop/cryptography/ecvrf) | L86 | move | 13 | `module math::ecvrf_test {` |
| 236 | [develop/accessing-data/using-events](https://docs.sui.io/develop/accessing-data/using-events) | L142 | ts | 17 | `// Use the generated proto client for ListEvents` |
| 237 | [develop/accessing-data/using-events](https://docs.sui.io/develop/accessing-data/using-events) | L164 | ts | 11 | `async function getEventsForTransaction(digest: string) {` |
| 238 | [develop/accessing-data/using-events](https://docs.sui.io/develop/accessing-data/using-events) | L311 | ts | 39 | `import { SuiGraphQLClient } from '@mysten/sui/graphql';` |
| 239 | [develop/accessing-data/using-events](https://docs.sui.io/develop/accessing-data/using-events) | L388 | typescript | 35 | `import { SuiGraphQLClient } from '@mysten/sui/graphql';` |
| 240 | [develop/accessing-data/authenticated-events](https://docs.sui.io/develop/accessing-data/authenticated-events) | L88 | move | 16 | `module my_package::my_module;` |
| 241 | [develop/accessing-data/authenticated-events](https://docs.sui.io/develop/accessing-data/authenticated-events) | L125 | rust | 33 | `use sui_light_client::authenticated_events::AuthenticatedEve` |
| 242 | [develop/accessing-data/authenticated-events](https://docs.sui.io/develop/accessing-data/authenticated-events) | L167 | rust | 4 | `let last_checkpoint = 12345;` |
| 243 | [develop/accessing-data/authenticated-events](https://docs.sui.io/develop/accessing-data/authenticated-events) | L280 | rust | 11 | `let config = ClientConfig::new(` |
| 244 | [sui-stack/suins/developer/sdk](https://docs.sui.io/sui-stack/suins/developer/sdk) | L74 | js | 11 | `import { suins } from '@mysten/suins';` |
| 245 | [sui-stack/suins/developer/sdk](https://docs.sui.io/sui-stack/suins/developer/sdk) | L90 | js | 13 | `import { suins, type PackageInfo } from '@mysten/suins';` |
| 246 | [sui-stack/mvr/tooling/typescript-sdk](https://docs.sui.io/sui-stack/mvr/tooling/typescript-sdk) | L73 | typescript | 8 | `/** Register the MVR plugin globally */` |
| 247 | [sui-stack/mvr/tooling/typescript-sdk](https://docs.sui.io/sui-stack/mvr/tooling/typescript-sdk) | L84 | typescript | 12 | `/** Register the MVR plugin per PTB */` |
| 248 | [sui-stack/mvr/tooling/typescript-sdk](https://docs.sui.io/sui-stack/mvr/tooling/typescript-sdk) | L103 | typescript | 11 | `const overrides = {` |
| 249 | [sui-stack/mvr/tooling/typescript-sdk](https://docs.sui.io/sui-stack/mvr/tooling/typescript-sdk) | L155 | typescript | 11 | `const transaction = new Transaction();` |
| 250 | [onchain-finance/deepbook/deepbookv3-sdk/swaps](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/swaps) | L64 | tsx | 1 | `swapExactBaseForQuote({ params: SwapParams });` |
| 251 | [onchain-finance/deepbook/deepbookv3-sdk/swaps](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/swaps) | L76 | tsx | 1 | `swapExactQuoteForBase({ params: SwapParams });` |
| 252 | [onchain-finance/deepbook/deepbookv3-sdk/swaps](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/swaps) | L122 | tsx | 23 | `swapExactBaseForQuote = (tx: Transaction) => {` |
| 253 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L65 | tsx | 1 | `stake(poolKey: string, balanceManagerKey: string, stakeAmoun` |
| 254 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L78 | tsx | 1 | `unstake(poolKey: string, balanceManagerKey: string);` |
| 255 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L90 | tsx | 1 | `submitProposal({ params: ProposalParams });` |
| 256 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L104 | tsx | 1 | `vote(poolKey: string, balanceManagerKey: string, proposal_id` |
| 257 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L125 | tsx | 12 | `stake = (` |
| 258 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L142 | tsx | 11 | `unstake = (` |
| 259 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L158 | tsx | 25 | `// Proposal params` |
| 260 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L188 | tsx | 13 | `vote = (` |
| 261 | [onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook) | L130 | ts | 10 | `import { Transaction } from '@mysten/sui/transactions';` |
| 262 | [onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook) | L160 | ts | 8 | `import { Transaction } from '@mysten/sui/transactions';` |
| 263 | [onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook) | L185 | tsx | 21 | `import { Transaction } from '@mysten/sui/transactions';` |
| 264 | [onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook) | L234 | tsx | 14 | `import { Transaction } from '@mysten/sui/transactions';` |
| 265 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L70 | ts | 19 | `{` |
| 266 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L132 | ts | 14 | `{` |
| 267 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L248 | ts | 6 | `{` |
| 268 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L268 | ts | 5 | `{` |
| 269 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L286 | ts | 5 | `{` |
| 270 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L304 | ts | 5 | `{` |
| 271 | [onchain-finance/deepbook/deepbookv3-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/orders) | L172 | tsx | 38 | `// Params for limit order` |
| 272 | [onchain-finance/deepbook/deepbookv3-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/orders) | L217 | tsx | 27 | `// Params for market order` |
| 273 | [onchain-finance/deepbook/deepbookv3-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/orders) | L251 | tsx | 17 | `/**` |
| 274 | [onchain-finance/deepbook/deepbookv3-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/orders) | L275 | tsx | 15 | `/**` |
| 275 | [onchain-finance/deepbook/deepbookv3-sdk/flash-loans](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/flash-loans) | L68 | tsx | 1 | `borrowBaseAsset(poolKey: string, borrowAmount: number);` |
| 276 | [onchain-finance/deepbook/deepbookv3-sdk/flash-loans](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/flash-loans) | L103 | tsx | 1 | `borrowQuoteAsset(poolKey: string, borrowAmount: number);` |
| 277 | [onchain-finance/deepbook/deepbookv3-sdk/flash-loans](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/flash-loans) | L118 | tsx | 6 | `returnQuoteAsset(` |
| 278 | [onchain-finance/deepbook/deepbookv3-sdk/flash-loans](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/flash-loans) | L131 | tsx | 42 | `// Example of a flash loan transaction` |
| 279 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L82 | ts | 1 | `https://github.com/MystenLabs/ts-sdks/blob/main/packages/dee` |
| 280 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L92 | tsx | 36 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 281 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L141 | tsx | 57 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 282 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L203 | tsx | 80 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 283 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L311 | tsx | 63 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 284 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L381 | tsx | 34 | `import { Transaction } from '@mysten/sui/transactions';` |
| 285 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L432 | tsx | 18 | `// Mint a new referral for a specific pool` |
| 286 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L457 | tsx | 18 | `// Generate a trade cap first (needed for setting referrals)` |
| 287 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L405 | tsx | 4 | `// Example: Create and share a new balance manager` |
| 288 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L414 | tsx | 10 | `// Example: Create a balance manager with custom owner and s` |
| 289 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L429 | tsx | 27 | `// Example: Deposit USDC into a balance manager` |
| 290 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L461 | tsx | 32 | `// Example: Mint a TradeCap and use it` |
| 291 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L498 | tsx | 21 | `// Example: Generate a trade proof and use it to place an or` |
| 292 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L524 | tsx | 19 | `// Example: Set a pool-specific referral for a balance manag` |
| 293 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L548 | tsx | 18 | `// Example: Complete balance manager setup workflow` |
| 294 | [onchain-finance/deepbook/deepbook-predict-sdk/sessions](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/sessions) | L75 | ts | 10 | `import { SessionsContract, getSessionsConfig } from '@mysten` |
| 295 | [onchain-finance/deepbook/deepbook-predict-sdk/sessions](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/sessions) | L440 | ts | 19 | `import { getSessionsConfig, sessionsMoveCalls } from '@myste` |
| 296 | [onchain-finance/deepbook/deepbook-predict-sdk/positions](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/positions) | L159 | ts | 4 | `import type { MintAmountOptions } from '@mysten/deepbook-v3/` |
| 297 | [onchain-finance/deepbook/deepbook-predict-sdk/positions](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/positions) | L212 | ts | 10 | `import type { MintCostOptions } from '@mysten/deepbook-v3/pr` |
| 298 | [onchain-finance/deepbook/deepbook-predict-sdk/markets](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/markets) | L146 | ts | 4 | `const [market] = await client.predict.read.markets();` |
| 299 | [onchain-finance/deepbook/deepbook-predict-sdk/markets](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/markets) | L169 | ts | 10 | `import { POS_INF_TICK, binaryRangeTicks, priceToRaw } from '` |
| 300 | [onchain-finance/deepbook/deepbook-predict-sdk/markets](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/markets) | L273 | ts | 6 | `import { pricing } from '@mysten/deepbook-v3/predict';` |
| 301 | [onchain-finance/deepbook/deepbook-predict-sdk/liquidity](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/liquidity) | L142 | ts | 11 | `import type { DecodableTransactionResult } from '@mysten/dee` |
| 302 | [onchain-finance/deepbook/deepbook-predict-sdk/deepbook-predict-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/deepbook-predict-sdk) | L140 | ts | 8 | `import { getConfig, getDeployment } from '@mysten/deepbook-v` |
| 303 | [onchain-finance/deepbook/deepbook-predict-sdk/deepbook-predict-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/deepbook-predict-sdk) | L218 | ts | 19 | `import { decodeMoveAbort, PredictInputError, PredictMoveErro` |
| 304 | [onchain-finance/deepbook/deepbook-predict-sdk/deepbook-predict-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/deepbook-predict-sdk) | L246 | ts | 9 | `const result = await client.core.signAndExecuteTransaction({` |
| 305 | [onchain-finance/deepbook/deepbook-predict-sdk/deepbook-predict-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/deepbook-predict-sdk) | L293 | ts | 17 | `import { Transaction } from '@mysten/sui/transactions';` |
| 306 | [onchain-finance/deepbook/deepbook-predict-sdk/deepbook-predict-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/deepbook-predict-sdk) | L317 | ts | 13 | `import { Transaction } from '@mysten/sui/transactions';` |
| 307 | [onchain-finance/deepbook/deepbook-predict-sdk/cost](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/cost) | L63 | ts | 1 | `import { cost, pricing } from '@mysten/deepbook-v3/predict';` |
| 308 | [onchain-finance/deepbook/deepbook-predict-sdk/cost](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/cost) | L120 | ts | 12 | `import { cost, probabilityToRaw } from '@mysten/deepbook-v3/` |
| 309 | [onchain-finance/deepbook/deepbook-predict-sdk/accounts](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/accounts) | L92 | ts | 6 | `import { deriveAccountWrapperId, getConfig } from '@mysten/d` |
| 310 | [onchain-finance/deepbook/deepbook-predict-sdk/accounts](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/accounts) | L175 | ts | 9 | `// Custody balance: the USDC a mint can spend, as a decimal ` |
| 311 | [onchain-finance/deepbook/deepbook-predict-sdk/accounts](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/accounts) | L301 | ts | 4 | `import { AccountContract, getAccountConfig } from '@mysten/d` |
| 312 | [onchain-finance/deepbook/deepbook-predict-sdk/accounts](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/accounts) | L402 | ts | 19 | `import { AccountContract, getAccountConfig } from '@mysten/d` |
| 313 | [onchain-finance/deepbook/deepbook-predict-sdk/accounts](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict-sdk/accounts) | L457 | ts | 24 | `import {` |
| 314 | [onchain-finance/deepbook/deepbook-predict/tutorial](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/tutorial) | L319 | ts | 9 | `const preview = await client.predict.read.quoteMintCost(owne` |
| 315 | [onchain-finance/deepbook/deepbook-margin-sdk/tpsl](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/tpsl) | L180 | tsx | 16 | `// Example: Create a stop loss order that sells when price d` |
| 316 | [onchain-finance/deepbook/deepbook-margin-sdk/tpsl](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/tpsl) | L201 | tsx | 17 | `// Example: Create a take profit order that sells when price` |
| 317 | [onchain-finance/deepbook/deepbook-margin-sdk/tpsl](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/tpsl) | L223 | tsx | 6 | `// Example: Execute conditional orders as a keeper` |
| 318 | [onchain-finance/deepbook/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/orders) | L207 | tsx | 30 | `// Params for limit order` |
| 319 | [onchain-finance/deepbook/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/orders) | L242 | tsx | 15 | `// Example: Place a market sell order for 5 SUI` |
| 320 | [onchain-finance/deepbook/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/orders) | L262 | tsx | 16 | `// Example: Place a reduce-only limit order to close a posit` |
| 321 | [onchain-finance/deepbook/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/orders) | L283 | tsx | 27 | `// Example: Modify order quantity` |
| 322 | [onchain-finance/deepbook/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/orders) | L315 | tsx | 31 | `// Example: Stake DEEP tokens` |
| 323 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L144 | tsx | 12 | `/**` |
| 324 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L161 | tsx | 16 | `// Example: Supply 1000 USDC to the margin pool` |
| 325 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L182 | tsx | 16 | `// Example: Supply 1000 USDC with a referral` |
| 326 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L203 | tsx | 18 | `// Example: Withdraw 500 USDC from the margin pool` |
| 327 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L226 | tsx | 12 | `// Example: Create a supply referral` |
| 328 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L243 | tsx | 16 | `// Example: Check interest rate and utilization` |
| 329 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager) | L226 | tsx | 12 | `/**` |
| 330 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager) | L243 | tsx | 5 | `// Example: Deposit 100 SUI as collateral` |
| 331 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager) | L253 | tsx | 5 | `// Example: Borrow 500 USDC` |
| 332 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager) | L263 | tsx | 6 | `// Example: Repay all borrowed quote assets` |
| 333 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager) | L274 | tsx | 9 | `// Example: Liquidate an undercollateralized position` |
| 334 | [onchain-finance/deepbook/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/maintainer) | L180 | tsx | 26 | `// Example: Create a USDC margin pool` |
| 335 | [onchain-finance/deepbook/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/maintainer) | L211 | tsx | 10 | `// Example: Allow SUI/USDC pool to borrow from USDC margin p` |
| 336 | [onchain-finance/deepbook/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/maintainer) | L226 | tsx | 14 | `// Example: Update USDC margin pool interest rates` |
| 337 | [onchain-finance/deepbook/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/maintainer) | L245 | tsx | 14 | `// Example: Update USDC margin pool limits` |
| 338 | [onchain-finance/deepbook/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/maintainer) | L264 | tsx | 31 | `// Example: Complete workflow for setting up a new margin po` |
| 339 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L73 | ts | 1 | `https://github.com/MystenLabs/ts-sdks/blob/main/packages/dee` |
| 340 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L89 | tsx | 36 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 341 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L138 | tsx | 57 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 342 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L200 | tsx | 82 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 343 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L310 | tsx | 63 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 344 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L380 | tsx | 41 | `import { Transaction } from '@mysten/sui/transactions';` |
| 345 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L428 | tsx | 12 | `// Set a referral for a margin manager (pool-specific)` |
| 346 | [onchain-finance/asset-custody/wallets/zk-login-wallets](https://docs.sui.io/onchain-finance/asset-custody/wallets/zk-login-wallets) | L95 | typescript | 16 | `import { useCurrentAccount } from '@mysten/dapp-kit-react';` |
| 347 | [onchain-finance/asset-custody/wallets/zk-login-wallets](https://docs.sui.io/onchain-finance/asset-custody/wallets/zk-login-wallets) | L213 | typescript | 15 | `import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519` |
| 348 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L66 | tsx | 21 | `import { SUI_DEVNET_CHAIN, Wallet } from '@mysten/wallet-sta` |
| 349 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L120 | tsx | 64 | `import {` |
| 350 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L197 | tsx | 24 | `import { ReadonlyWalletAccount } from '@mysten/wallet-standa` |
| 351 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L229 | tsx | 3 | `import { registerWallet } from '@mysten/wallet-standard';` |
| 352 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L243 | tsx | 3 | `import { getWallets } from '@mysten/wallet-standard';` |
| 353 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L274 | tsx | 1 | `await wallet.features['standard:connect'].connect();` |
| 354 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L290 | tsx | 1 | `wallet.features['standard:disconnect'].disconnect();` |
| 355 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L300 | tsx | 4 | `wallet.features['sui:signTransaction'].signTransaction({` |
| 356 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L311 | tsx | 11 | `import { fromBase64 } from '@mysten/sui/utils';` |
| 357 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L348 | tsx | 1 | `const unsubscribe = wallet.features['standard:events'].on('c` |
| 358 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L356 | tsx | 5 | `{` |
| 359 | [onchain-finance/asset-custody/wallets/self-custody](https://docs.sui.io/onchain-finance/asset-custody/wallets/self-custody) | L198 | typescript | 6 | `export const dAppKit = createDAppKit({` |
| 360 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L120 | move | 5 | `// Send a Balance<T> to an address balance` |
| 361 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L134 | tsx | 9 | `const tx = new Transaction();` |
| 362 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L148 | tsx | 5 | `const [balance] = tx.moveCall({` |
| 363 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L158 | tsx | 5 | `const [coin] = tx.moveCall({` |
| 364 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L172 | typescript | 4 | `import { Transaction } from '@mysten/sui/transactions';` |
| 365 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L183 | typescript | 21 | `import { Transaction } from '@mysten/sui/transactions';` |
| 366 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L217 | rust | 7 | `use sui_types::transaction::{FundsWithdrawalArg, WithdrawalT` |
| 367 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L234 | rust | 18 | `let mut builder = ProgrammableTransactionBuilder::new();` |
| 368 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L261 | move | 5 | `// Split a sub-withdrawal from an existing withdrawal` |
| 369 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L275 | typescript | 2 | `const tx = new Transaction();` |
| 370 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L282 | rust | 18 | `TransactionData::V1(TransactionDataV1 {` |
| 371 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L313 | rust | 5 | `// Random nonce` |
| 372 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L326 | typescript | 23 | `const network = 'testnet';` |
| 373 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L369 | typescript | 22 | `// 1. User builds and signs the transaction first` |
| 374 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L402 | tsx | 8 | `const { balance } = await grpcClient.getBalance({` |
| 375 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L473 | rust | 7 | `use sui_types::balance_change::{derive_balance_changes, Bala` |
| 376 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L497 | rust | 22 | `use sui_types::effects::TransactionEffectsAPI;` |
| 377 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L524 | rust | 5 | `pub struct BalanceChange {` |
| 378 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L548 | typescript | 8 | `import { Transaction } from '@mysten/sui/transactions';` |
| 379 | [onchain-finance/asset-custody/address-balances/migrate-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/migrate-address-balances) | L123 | rust | 7 | `use sui_types::balance_change::{derive_balance_changes, Bala` |
| 380 | [onchain-finance/asset-custody/address-balances/migrate-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/migrate-address-balances) | L141 | rust | 3 | `use sui_types::effects::TransactionEffectsAPI;` |
| 381 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L69 | rust | 4 | `pub struct IntentMessage<T> {` |
| 382 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L78 | rust | 5 | `pub struct Intent {` |
| 383 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L104 | rust | 3 | `let intent = Intent::default();` |
| 384 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L114 | typescript | 2 | `const intentMessage = messageWithIntent('TransactionData', t` |
| 385 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L156 | move | 14 | `use sui::ed25519;` |
| 386 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L175 | typescript | 3 | `const { signature } = await wallet.signPersonalMessage({` |
| 387 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L245 | typescript | 2 | `const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC, ` |
| 388 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L299 | tsx | 58 | `import { fromHex } from '@mysten/bcs';` |
| 389 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L366 | rust | 41 | `// deterministically generate a key pair, testing only, do n` |
| 390 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L412 | rust | 18 | `// construct an example programmable transaction.` |
| 391 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L435 | rust | 17 | `// derive the digest that the key pair should sign on, that ` |
| 392 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L457 | rust | 12 | `let transaction_response = sui_client` |
| 393 | [develop/transactions/ptbs/ts-sdk-ptb-template](https://docs.sui.io/develop/transactions/ptbs/ts-sdk-ptb-template) | L112 | tsx | 33 | `import { ConnectButton } from '@mysten/dapp-kit-react/ui';` |
| 394 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L77 | rust | 4 | `{` |
| 395 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L254 | move | 9 | `module ex::m;` |
| 396 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L268 | rust | 7 | `// Invalid PTB` |
| 397 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L280 | rust | 8 | `// Valid PTB` |
| 398 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L293 | move | 7 | `module flash::loan;` |
| 399 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L303 | rust | 10 | `// Invalid PTB` |
| 400 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L374 | rust | 14 | `{` |
| 401 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L440 | rust | 3 | `Gas Coin: Coin<SUI> { id: gas_coin, balance: 1_000_000u64 }` |
| 402 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L448 | rust | 1 | `Gas Coin: Coin<SUI> { id: gas_coin, balance: 500_000u64 }` |
| 403 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L454 | rust | 9 | `Gas Coin: _ (moved)` |
| 404 | [develop/transactions/ptbs/inputs-and-results](https://docs.sui.io/develop/transactions/ptbs/inputs-and-results) | L102 | move | 26 | `public struct Sword has key, store {` |
| 405 | [develop/transactions/ptbs/inputs-and-results](https://docs.sui.io/develop/transactions/ptbs/inputs-and-results) | L133 | move | 8 | `/// Hero can equip a single sword.` |
| 406 | [develop/transactions/ptbs/inputs-and-results](https://docs.sui.io/develop/transactions/ptbs/inputs-and-results) | L146 | ts | 21 | `const tx = new Transaction();` |
| 407 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L68 | ts | 7 | `// Send 100 MIST to the recipient's address balance. tx.bala` |
| 408 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L80 | ts | 1 | `tx.transferObjects([tx.coin({ balance: 100n })], '0xSomeSuiA` |
| 409 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L86 | ts | 14 | `interface Transfer {` |
| 410 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L105 | ts | 1 | `client.signAndExecuteTransaction({ signer: keypair, transact` |
| 411 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L146 | ts | 4 | `// Split a coin object off of the gas object:` |
| 412 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L155 | ts | 7 | `// Destructuring (preferred, as it gives you logical local n` |
| 413 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L182 | ts | 4 | `const otherCoin = tx.object('0xCoinObjectId');` |
| 414 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L199 | ts | 5 | `const tx = new Transaction();` |
| 415 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L209 | ts | 2 | `const bytes = getTransactionBytesFromSomewhere();` |
| 416 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L218 | ts | 8 | `// For pure values:` |
| 417 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L241 | ts | 1 | `tx.setGasPrice(gasPrice);` |
| 418 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L255 | ts | 1 | `tx.setGasBudget(gasBudgetAmount);` |
| 419 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L265 | ts | 3 | `// NOTE: You need to ensure that the coins do not overlap wi` |
| 420 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L285 | ts | 13 | `// Within an app` |
| 421 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L326 | rust | 27 | `use move_core_types::{identifier::Identifier, language_stora` |
| 422 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L360 | typescript | 5 | `tx.moveCall({` |
| 423 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L382 | typescript | 9 | `const result = await client.signAndExecuteTransaction({ tran` |
| 424 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L86 | move | 9 | `// 0xADD is an address` |
| 425 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L140 | move | 26 | `module sui::transfer;` |
| 426 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L184 | move | 35 | `module examples::shared_object_auth;` |
| 427 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L228 | move | 56 | `module examples::account;` |
| 428 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L310 | ts | 10 | `... // Setup TypeScript SDK as normal.` |
| 429 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L327 | rust | 14 | `... // setup Rust SDK client as normal` |
| 430 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L356 | move | 47 | `module examples::soul_bound;` |
| 431 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L69 | move | 45 | `module examples::dummy_rule {` |
| 432 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L137 | move | 40 | `module examples::royalty_rule {` |
| 433 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L184 | move | 27 | `module examples::time_rule {` |
| 434 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L220 | move | 25 | `module sui::transfer_policy {` |
| 435 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L258 | move | 29 | `module examples::witness_rule {` |
| 436 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L292 | move | 22 | `module examples::capability_rule {` |
| 437 | [develop/objects/transfers/simulating-refs](https://docs.sui.io/develop/objects/transfers/simulating-refs) | L67 | move | 9 | `module a_module {` |
| 438 | [develop/objects/transfers/simulating-refs](https://docs.sui.io/develop/objects/transfers/simulating-refs) | L83 | move | 9 | `module another_module {` |
| 439 | [develop/objects/transfers/simulating-refs](https://docs.sui.io/develop/objects/transfers/simulating-refs) | L99 | move | 4 | `fun do_something(manager: &AssetManager) {` |
| 440 | [develop/objects/transfers/simulating-refs](https://docs.sui.io/develop/objects/transfers/simulating-refs) | L110 | move | 17 | `module another_module {` |
| 441 | [develop/objects/transfers/simulating-refs](https://docs.sui.io/develop/objects/transfers/simulating-refs) | L160 | typescript | 20 | `// initialize the PTB` |
| 442 | [develop/objects/transfers/custom-rules](https://docs.sui.io/develop/objects/transfers/custom-rules) | L70 | move | 5 | `public struct Object has key {` |
| 443 | [develop/objects/transfers/custom-rules](https://docs.sui.io/develop/objects/transfers/custom-rules) | L80 | move | 16 | `module examples::custom_transfer;` |
| 444 | [develop/objects/transfers/custom-rules](https://docs.sui.io/develop/objects/transfers/custom-rules) | L101 | move | 7 | `const EObjectNotLocked: u64 = 1;` |
| 445 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L62 | move | 8 | `public struct Foo has key {` |
| 446 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L77 | move | 4 | `public struct Bar has key, store {` |
| 447 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L115 | move | 3 | `public fun new(scarcity: u8, style: u8, ctx: &mut TxContext)` |
| 448 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L127 | move | 6 | `public struct SwapRequest has key {` |
| 449 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L138 | move | 18 | `public fun request_swap(` |
| 450 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L165 | move | 1 | `public fun execute_swap(s1: SwapRequest, s2: SwapRequest): B` |
| 451 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L173 | move | 2 | `let SwapRequest {id: id1, owner: owner1, object: o1, fee: fe` |
| 452 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L180 | move | 2 | `assert!(o1.scarcity == o2.scarcity, EBadSwap);` |
| 453 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L187 | move | 2 | `transfer::transfer(o1, owner2);` |
| 454 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L194 | move | 2 | `id1.delete();` |
| 455 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L201 | move | 1 | `fee1.join(fee2);` |
| 456 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L219 | move | 5 | `public struct SimpleWarrior has key {` |
| 457 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L229 | move | 9 | `public struct Sword has key, store {` |
| 458 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L243 | move | 8 | `public fun create_warrior(ctx: &mut TxContext) {` |
| 459 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L256 | move | 7 | `public fun equip_sword(warrior: &mut SimpleWarrior, sword: S` |
| 460 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L278 | move | 9 | `public struct Pet has key, store {` |
| 461 | [develop/objects/object-ownership/shared](https://docs.sui.io/develop/objects/object-ownership/shared) | L55 | move | 13 | `public struct Donut has key { id: UID }` |
| 462 | [develop/objects/object-ownership/shared](https://docs.sui.io/develop/objects/object-ownership/shared) | L79 | move | 70 | `module examples::donuts;` |
| 463 | [develop/objects/object-ownership/party](https://docs.sui.io/develop/objects/object-ownership/party) | L135 | ts | 16 | `import { Transaction } from '@mysten/sui/transactions';` |
| 464 | [develop/objects/object-ownership/party](https://docs.sui.io/develop/objects/object-ownership/party) | L162 | ts | 8 | `import { Transaction } from '@mysten/sui/transactions';` |
| 465 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L57 | move | 1 | `public fun public_freeze_object<T: key + store>(obj: T)` |
| 466 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L75 | move | 4 | `public fun create_immutable(red: u8, green: u8, blue: u8, ct` |
| 467 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L94 | move | 1 | `public fun copy_into(from: &ColorObject, into: &mut ColorObj` |
| 468 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L169 | move | 12 | `let sender1 = @0x1;` |
| 469 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L190 | move | 9 | `// Any sender can work.` |
| 470 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L81 | move | 7 | `module sui::display_registry;` |
| 471 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L92 | move | 12 | `module sui::display_registry;` |
| 472 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L116 | move | 12 | `module sui::devnet_nft;` |
| 473 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L138 | move | 10 | `module capy::capy_items;` |
| 474 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L158 | move | 5 | `module capy::utility;` |
| 475 | [develop/accessing-data/grpc/using-grpc](https://docs.sui.io/develop/accessing-data/grpc/using-grpc) | L433 | ts | 44 | `import * as grpc from '@grpc/grpc-js';` |
| 476 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L96 | ts | 6 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 477 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L131 | ts | 8 | `const { object } = await client.core.getObject({` |
| 478 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L184 | ts | 12 | `const { objects } = await client.core.getObjects({` |
| 479 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L245 | ts | 9 | `const result = await client.core.getTransaction({` |
| 480 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L299 | ts | 12 | `// Use the proto client directly for batch transaction looku` |
| 481 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L401 | ts | 11 | `const result = await client.core.getTransaction({` |
| 482 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L425 | ts | 9 | `// Old WebSocket subscription (no longer supported)` |
| 483 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L446 | ts | 18 | `// Use the generated proto client directly` |
| 484 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L507 | ts | 21 | `// Use the generated proto client directly` |
| 485 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L558 | ts | 19 | `// Old polling pattern (inefficient and deprecated)` |
| 486 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L583 | ts | 12 | `const { responses } = client.subscriptionService.subscribeCh` |
| 487 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L679 | ts | 12 | `// Use the proto client directly. No Core API wrapper exists` |
| 488 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L743 | ts | 16 | `// Single coin type` |
| 489 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L808 | ts | 20 | `// List SUI coin objects` |
| 490 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L871 | ts | 9 | `const page = await client.core.listDynamicFields({` |
| 491 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L922 | ts | 19 | `import { Transaction } from '@mysten/sui/transactions';` |
| 492 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L956 | ts | 17 | `// Old JSON-RPC pattern` |
| 493 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1023 | ts | 28 | `// Get the current reference gas price` |
| 494 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1077 | ts | 9 | `const result = await client.core.simulateTransaction({` |
| 495 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1113 | ts | 2 | `const { referenceGasPrice } = await client.core.getReference` |
| 496 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1205 | ts | 50 | `let lastProcessed = await loadLastProcessedCheckpoint();` |
| 497 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1264 | ts | 17 | `import type { SuiClientTypes } from '@mysten/sui';` |
| 498 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1288 | ts | 34 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 499 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L301 | rust | 34 | `use sui_indexer_alt_framework::config::ConcurrencyConfig;` |
| 500 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L449 | rust | 12 | `trait Processor {` |
| 501 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L544 | rust | 12 | `impl concurrent::Handler for MyHandler {` |
| 502 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L561 | rust | 28 | `use sui_indexer_alt_framework::config::ConcurrencyConfig;` |
| 503 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L607 | rust | 17 | `let config = ConcurrentConfig {` |
| 504 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L637 | rust | 16 | `let pruner_config = PrunerConfig {` |
| 505 | [develop/accessing-data/custom-indexer/indexer-runtime-perf](https://docs.sui.io/develop/accessing-data/custom-indexer/indexer-runtime-perf) | L69 | rust | 35 | `use std::num::NonZeroUsize;` |
| 506 | [develop/accessing-data/custom-indexer/indexer-runtime-perf](https://docs.sui.io/develop/accessing-data/custom-indexer/indexer-runtime-perf) | L119 | rust | 10 | `let db_args = DbArgs {` |
| 507 | [develop/accessing-data/custom-indexer/indexer-runtime-perf](https://docs.sui.io/develop/accessing-data/custom-indexer/indexer-runtime-perf) | L282 | rust | 2 | `let cluster = IndexerCluster::builder()` |
| 508 | [develop/accessing-data/custom-indexer/indexer-runtime-perf](https://docs.sui.io/develop/accessing-data/custom-indexer/indexer-runtime-perf) | L293 | rust | 15 | `use prometheus::{IntCounter, register_int_counter_with_regis` |
| 509 | [develop/accessing-data/custom-indexer/bring-your-own-store](https://docs.sui.io/develop/accessing-data/custom-indexer/bring-your-own-store) | L66 | rust | 14 | `use sui_indexer_alt_framework::store::{Store, Connection};` |
| 510 | [develop/accessing-data/custom-indexer/bring-your-own-store](https://docs.sui.io/develop/accessing-data/custom-indexer/bring-your-own-store) | L87 | rust | 8 | `#[async_trait]` |
| 511 | [develop/accessing-data/custom-indexer/bring-your-own-store](https://docs.sui.io/develop/accessing-data/custom-indexer/bring-your-own-store) | L102 | rust | 22 | `#[async_trait]` |
| 512 | [develop/accessing-data/custom-indexer/bring-your-own-store](https://docs.sui.io/develop/accessing-data/custom-indexer/bring-your-own-store) | L135 | rust | 53 | `use sui_indexer_alt_framework::{Indexer, IndexerArgs};` |
| 513 | [develop/accessing-data/custom-indexer/bring-your-own-store](https://docs.sui.io/develop/accessing-data/custom-indexer/bring-your-own-store) | L247 | move | 11 | `// Move smart contract` |
| 514 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L49 | js | 7 | `const suinsClient = new SuinsClient({` |
| 515 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L63 | js | 5 | `const connection = new SuiPriceServiceConnection('https://py` |
| 516 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L73 | js | 7 | `const pythClient = new SuiPythClient(` |
| 517 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L91 | js | 25 | `const register = async (name: string, years: number) => {` |
| 518 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L121 | js | 21 | `const renew = async (nftId: string, name: string, years: num` |
| 519 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L149 | js | 15 | `const setTargetAddress = async (nftId: string, address: stri` |
| 520 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L171 | js | 13 | `const setDefault = async (name: string) => {` |
| 521 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L193 | js | 31 | `const setUserData = async (nft: string, avatar: string, cont` |
| 522 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L231 | js | 14 | `const burnExpired = async (nftId: string) => {` |
| 523 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L253 | js | 37 | `// Years must be between 1-5.` |
| 524 | [sui-stack/suins/developer/sdk/subnames](https://docs.sui.io/sui-stack/suins/developer/sdk/subnames) | L38 | js | 26 | `const createSubname = async (subName: string, parentNftId: s` |
| 525 | [sui-stack/suins/developer/sdk/subnames](https://docs.sui.io/sui-stack/suins/developer/sdk/subnames) | L71 | js | 16 | `const editSetup = async (name: string, parentNftId: string, ` |
| 526 | [sui-stack/suins/developer/sdk/subnames](https://docs.sui.io/sui-stack/suins/developer/sdk/subnames) | L94 | js | 14 | `const extendExpiration = async (nftId: string, expirationMs:` |
| 527 | [sui-stack/suins/developer/sdk/subnames](https://docs.sui.io/sui-stack/suins/developer/sdk/subnames) | L115 | js | 19 | `const createLeafSubname = async (name: string, parentNftId: ` |
| 528 | [sui-stack/suins/developer/sdk/subnames](https://docs.sui.io/sui-stack/suins/developer/sdk/subnames) | L139 | js | 16 | `const removeLeafSubname = async (name: string, parentNftId: ` |
| 529 | [sui-stack/suins/developer/sdk/querying](https://docs.sui.io/sui-stack/suins/developer/sdk/querying) | L39 | js | 18 | `const nameRecord = await suinsClient.getNameRecord('demo.sui` |
| 530 | [sui-stack/suins/developer/sdk/querying](https://docs.sui.io/sui-stack/suins/developer/sdk/querying) | L64 | js | 10 | `const priceList = await suinsClient.getPriceList();` |
| 531 | [sui-stack/suins/developer/sdk/querying](https://docs.sui.io/sui-stack/suins/developer/sdk/querying) | L81 | js | 10 | `const renewalPriceList = await suinsClient.getRenewalPriceLi` |
| 532 | [onchain-finance/deepbook/deepbook-predict/contract-information/vault](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/vault) | L130 | move | 12 | `public fun id(vault: &PoolVault): ID` |
| 533 | [onchain-finance/deepbook/deepbook-predict/contract-information/vault](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/vault) | L180 | move | 23 | `public fun request_supply(` |
| 534 | [onchain-finance/deepbook/deepbook-predict/contract-information/vault](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/vault) | L248 | move | 27 | `public fun start_pool_valuation(` |
| 535 | [onchain-finance/deepbook/deepbook-predict/contract-information/vault](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/vault) | L288 | move | 5 | `public fun value_expiry(` |
| 536 | [onchain-finance/deepbook/deepbook-predict/contract-information/vault](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/vault) | L304 | move | 6 | `public fun finish_flush(` |
| 537 | [onchain-finance/deepbook/deepbook-predict/contract-information/vault](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/vault) | L460 | move | 6 | `public fun rebalance_expiry_cash(` |
| 538 | [onchain-finance/deepbook/deepbook-predict/contract-information/vault](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/vault) | L538 | move | 5 | `public fun cash_balance(market: &ExpiryMarket): u64` |
| 539 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict) | L110 | move | 10 | `public fun load_live_pricer(` |
| 540 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict) | L152 | move | 41 | `public fun quote_mint(` |
| 541 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict) | L284 | move | 46 | `public fun mint_exact_quantity(` |
| 542 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict) | L426 | move | 36 | `public fun redeem_live(` |
| 543 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict) | L503 | move | 8 | `public fun try_settle(` |
| 544 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict) | L589 | move | 3 | `public fun current_nav(market: &ExpiryMarket, pricer: &Price` |
| 545 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L108 | move | 13 | `public fun new(registry: &mut AccountRegistry, ctx: &mut TxC` |
| 546 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L128 | move | 1 | `public fun share(self: AccountWrapper)` |
| 547 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L155 | move | 4 | `public fun derived_address(registry: &AccountRegistry, owner` |
| 548 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L230 | move | 4 | `public struct Auth {` |
| 549 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L279 | move | 1 | `public fun settle<T>(wrapper: &mut AccountWrapper, root: &Ac` |
| 550 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L287 | move | 16 | `public fun deposit_funds<T>(` |
| 551 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L343 | move | 1 | `public fun balance<T>(self: &Account, root: &AccumulatorRoot` |
| 552 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L399 | move | 2 | `public fun has_position(account: &Account, expiry_market_id:` |
| 553 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L414 | move | 8 | `public fun set_builder_code(` |
| 554 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L446 | move | 9 | `public fun derived_address(registry: &AccountRegistry, owner` |
| 555 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L458 | move | 18 | `public fun id(self: &AccountWrapper): ID` |
| 556 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L479 | move | 4 | `public fun has_position(account: &Account, expiry_market_id:` |
| 557 | [onchain-finance/deepbook/deepbook-predict/contract-information/market-keys](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/market-keys) | L65 | move | 4 | `public fun tick_size(market: &ExpiryMarket): u64` |
| 558 | [onchain-finance/deepbook/deepbook-predict/contract-information/market-keys](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/market-keys) | L266 | move | 1 | `public fun has_position(account: &Account, expiry_market_id:` |
| 559 | [onchain-finance/deepbook/deepbook-predict/contract-information/market-keys](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/market-keys) | L276 | move | 5 | `public fun expiry_market_id(` |

## Covered Snippets

| # | File | Line | Language | Covered By |
|---|------|------|----------|------------|
| 1 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L496 | typescript | examples/ptb-cookbook |
| 2 | [onchain-finance/fungible-tokens/create-a-fungible-token](https://docs.sui.io/onchain-finance/fungible-tokens/create-a-fungible-token) | L121 | move | examples/move/coin |
| 3 | [develop/transaction-payment/sponsor-txn](https://docs.sui.io/develop/transaction-payment/sponsor-txn) | L238 | typescript | examples/ptb-cookbook |
| 4 | [onchain-finance/deepbook/deepbookv3-sdk/flash-loans](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/flash-loans) | L83 | tsx | examples/deepbook-spot |
| 5 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L61 | tsx | examples/ptb-cookbook |
| 6 | [develop/transactions/ptbs/ts-sdk-ptb-template](https://docs.sui.io/develop/transactions/ptbs/ts-sdk-ptb-template) | L67 | ts | examples/ptb-cookbook |
| 7 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L60 | ts | examples/ptb-cookbook |
| 8 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L305 | ts | examples/ptb-cookbook |
| 9 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L105 | move | examples/move/basics |
| 10 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L204 | move | examples/move/color_object |
| 11 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L979 | ts | examples/ptb-cookbook |

## Lint Report

**24 issues** across 17 snippets

### Legacy `option::` function-call syntax (4 occurrences)

> Move 2024 edition supports method syntax on Option.
> **Fix**: `option::some(x)` → `x.some()`, `option::is_some(&o)` → `o.is_some()`

| File | Line | Found |
|------|------|-------|
| [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L94 | `option::some()` |
| [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L96 | `option::none()` |
| [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L246 | `option::none()` |
| [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L247 | `option::none()` |

### Deprecated `transfer::` function (20 occurrences)

> Objects with `store` ability should use `public_*` variants.
> **Fix**: `transfer::transfer` → `transfer::public_transfer`, `transfer::share_object` → `transfer::public_share_object`

| File | Line | Found |
|------|------|-------|
| [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L245 | `transfer::share_object` |
| [develop/write-move/index](https://docs.sui.io/develop/write-move/index) | L83 | `transfer::transfer` |
| [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L181 | `transfer::share_object` |
| [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L232 | `transfer::share_object` |
| [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L239 | `transfer::transfer` |
| [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L295 | `transfer::share_object` |
| [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L302 | `transfer::transfer` |
| [develop/objects/derived-objects](https://docs.sui.io/develop/objects/derived-objects) | L198 | `transfer::transfer` |
| [develop/objects/derived-objects](https://docs.sui.io/develop/objects/derived-objects) | L236 | `transfer::transfer` |
| [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L201 | `transfer::share_object` |
| [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L401 | `transfer::transfer` |
| [develop/objects/transfers/custom-rules](https://docs.sui.io/develop/objects/transfers/custom-rules) | L94 | `transfer::transfer` |
| [develop/objects/transfers/custom-rules](https://docs.sui.io/develop/objects/transfers/custom-rules) | L106 | `transfer::transfer` |
| [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L153 | `transfer::transfer` |
| [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L187 | `transfer::transfer` |
| [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L188 | `transfer::transfer` |
| [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L249 | `transfer::transfer` |
| [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L259 | `transfer::transfer` |
| [develop/objects/object-ownership/shared](https://docs.sui.io/develop/objects/object-ownership/shared) | L58 | `transfer::transfer` |
| [develop/objects/object-ownership/shared](https://docs.sui.io/develop/objects/object-ownership/shared) | L62 | `transfer::share_object` |
