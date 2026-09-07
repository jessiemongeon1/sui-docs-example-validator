# Snippet Coverage Report

| Metric | Value |
|--------|-------|
| MDX files scanned | 407 |
| Total code blocks | 1709 |
| Compilable (Move/TS/Rust) | 518 |
| Covered by validated packages | 11 |
| Uncovered | 507 |
| Shell/config blocks (skipped) | 1191 |

## Uncovered Snippets

| # | File | Line | Language | Lines | Preview |
|---|------|------|----------|-------|---------|
| 1 | [snippets/coin-standards](https://docs.sui.io/snippets/coin-standards) | L25 | ts | 11 | `const tx = new Transaction();` |
| 2 | [snippets/coin-standards](https://docs.sui.io/snippets/coin-standards) | L48 | rust | 18 | `let mut ptb = ProgrammableTransactionBuilder::new();` |
| 3 | [references/release-notes](https://docs.sui.io/references/release-notes) | L734 | move | 7 | `module ex::m;` |
| 4 | [references/release-notes](https://docs.sui.io/references/release-notes) | L746 | move | 4 | `// Invalid PTB` |
| 5 | [references/release-notes](https://docs.sui.io/references/release-notes) | L755 | move | 4 | `// Valid PTB` |
| 6 | [references/release-notes](https://docs.sui.io/references/release-notes) | L773 | move | 27 | `module flash::loan;` |
| 7 | [references/release-notes](https://docs.sui.io/references/release-notes) | L841 | move | 16 | `// Invalid PTB` |
| 8 | [references/release-notes](https://docs.sui.io/references/release-notes) | L862 | move | 11 | `// Invalid PTB` |
| 9 | [references/object-display-syntax](https://docs.sui.io/references/object-display-syntax) | L348 | move | 5 | `enum Status {` |
| 10 | [references/gaming](https://docs.sui.io/references/gaming) | L182 | move | 8 | `public struct Asset has key, store {` |
| 11 | [references/gaming](https://docs.sui.io/references/gaming) | L195 | jsx | 4 | `Display` |
| 12 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L171 | move | 7 | `module sui::payment_kit;` |
| 13 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L197 | move | 11 | `module sui::payment_kit;` |
| 14 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L239 | move | 7 | `module sui::payment_kit;` |
| 15 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L257 | move | 8 | `module sui::payment_kit;` |
| 16 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L270 | move | 8 | `module sui::payment_kit;` |
| 17 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L287 | move | 7 | `module sui::payment_kit;` |
| 18 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L303 | move | 10 | `module sui::payment_kit;` |
| 19 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L456 | move | 3 | `public struct Namespace has key, store {` |
| 20 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L466 | move | 6 | `public struct PaymentRegistry has key {` |
| 21 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L479 | move | 4 | `public struct RegistryAdminCap has key, store {` |
| 22 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L490 | move | 4 | `public enum PaymentType has copy, drop, store {` |
| 23 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L501 | move | 8 | `public struct PaymentReceipt has key, store {` |
| 24 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L516 | move | 5 | `public struct PaymentKey<phantom T> has copy, drop, store {` |
| 25 | [onchain-finance/payment-kit](https://docs.sui.io/onchain-finance/payment-kit) | L528 | move | 3 | `public struct PaymentRecord has store {` |
| 26 | [onchain-finance/choose-payments-model](https://docs.sui.io/onchain-finance/choose-payments-model) | L121 | move | 11 | `module sui::payment_kit;` |
| 27 | [onchain-finance/choose-payments-model](https://docs.sui.io/onchain-finance/choose-payments-model) | L187 | tsx | 26 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 28 | [getting-started/sui-for-solana](https://docs.sui.io/getting-started/sui-for-solana) | L89 | Move | 8 | `/// Grants the owner the right to create new users in the sy` |
| 29 | [getting-started/sui-for-ethereum](https://docs.sui.io/getting-started/sui-for-ethereum) | L92 | Move | 8 | `/// Grants the owner the right to create new users in the sy` |
| 30 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L84 | typescript | 13 | `import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519` |
| 31 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L247 | typescript | 6 | `import { decodeJwt } from '@mysten/sui/zklogin';` |
| 32 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L287 | typescript | 5 | `import { jwtToAddress } from '@mysten/sui/zklogin';` |
| 33 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L313 | typescript | 5 | `import { getExtendedEphemeralPublicKey } from '@mysten/sui/z` |
| 34 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L399 | typescript | 9 | `import { getZkLoginSignature } from '@mysten/sui/zklogin';` |
| 35 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L539 | typescript | 18 | `import { ZkLoginSigner } from '@mysten/sui/zklogin';` |
| 36 | [sui-stack/zklogin-integration/developer-account](https://docs.sui.io/sui-stack/zklogin-integration/developer-account) | L73 | typescript | 13 | `const REDIRECT_URI = '<YOUR_SITE_URL>';` |
| 37 | [sui-stack/zklogin-integration/defi-trading-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/defi-trading-zklogin) | L34 | typescript | 27 | `import { createDAppKit } from '@mysten/dapp-kit-react';` |
| 38 | [sui-stack/zklogin-integration/defi-trading-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/defi-trading-zklogin) | L66 | typescript | 2 | `import { useCurrentAccount, useDAppKit } from '@mysten/dapp-` |
| 39 | [sui-stack/zklogin-integration/defi-trading-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/defi-trading-zklogin) | L75 | typescript | 32 | `import { deepbook } from '@mysten/deepbook-v3';` |
| 40 | [sui-stack/zklogin-integration/defi-trading-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/defi-trading-zklogin) | L114 | typescript | 43 | `import { EnokiClient } from '@mysten/enoki';` |
| 41 | [sui-stack/zklogin-integration/defi-trading-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/defi-trading-zklogin) | L164 | typescript | 12 | `const { bytes, digest } = await post('/api/sponsor-swap', {` |
| 42 | [sui-stack/zklogin-integration/consumer-app-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/consumer-app-zklogin) | L43 | typescript | 27 | `import { createDAppKit } from '@mysten/dapp-kit-react';` |
| 43 | [sui-stack/zklogin-integration/consumer-app-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/consumer-app-zklogin) | L77 | typescript | 13 | `import { useCurrentAccount } from '@mysten/dapp-kit-react';` |
| 44 | [sui-stack/zklogin-integration/consumer-app-zklogin](https://docs.sui.io/sui-stack/zklogin-integration/consumer-app-zklogin) | L120 | typescript | 43 | `import { SealClient, SessionKey } from '@mysten/seal';` |
| 45 | [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) | L254 | ts | 7 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 46 | [sui-stack/walrus/sui-stack-walrus](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus) | L468 | ts | 7 | `const { data } = useSuiClientQuery('getOwnedObjects', {` |
| 47 | [sui-stack/walrus/sui-stack-walrus-sites](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus-sites) | L86 | move | 4 | `struct Site has key, store {` |
| 48 | [sui-stack/walrus/sui-stack-walrus-sites](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus-sites) | L95 | move | 5 | `struct Resource has store, drop {` |
| 49 | [sui-stack/suins/sui-stack-suins](https://docs.sui.io/sui-stack/suins/sui-stack-suins) | L198 | move | 27 | `module demo::demo {` |
| 50 | [sui-stack/suins/sui-stack-suins](https://docs.sui.io/sui-stack/suins/sui-stack-suins) | L422 | tsx | 20 | `import { SealClient } from '@mysten/seal';` |
| 51 | [sui-stack/suins/developer](https://docs.sui.io/sui-stack/suins/developer) | L154 | rust | 34 | `module demo::demo {` |
| 52 | [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) | L45 | move | 4 | `entry fun roll_dice(r: &Random, ctx: &mut TxContext): Dice {` |
| 53 | [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) | L131 | move | 31 | `module games::dice {` |
| 54 | [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) | L167 | move | 6 | `public fun attack(guess: u8, r: &Random, ctx: &mut TxContext` |
| 55 | [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) | L185 | move | 4 | `public fun attack(t: Ticket): Ticket {` |
| 56 | [sui-stack/on-chain-primitives/randomness-onchain](https://docs.sui.io/sui-stack/on-chain-primitives/randomness-onchain) | L210 | typescript | 6 | `const tx = new Transaction();` |
| 57 | [references/package-managers/package-manager-migration](https://docs.sui.io/references/package-managers/package-manager-migration) | L105 | move | 3 | `module example_package::m;` |
| 58 | [references/contribute/style-guide](https://docs.sui.io/references/contribute/style-guide) | L676 | move | 11 | `module satoshi_flip::house_data {` |
| 59 | [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) | L105 | jsx | 1 | `<UnsafeLink href="/getting-started">Link title</UnsafeLink>` |
| 60 | [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) | L211 | jsx | 1 | `<ImportContent source="prerequisites" mode="snippet" />` |
| 61 | [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) | L337 | ts | 5 | `import lib from "library"; ` |
| 62 | [references/contribute/mdx-components](https://docs.sui.io/references/contribute/mdx-components) | L437 | jsx | 3 | `import YTCarousel from "@site/src/components/YTCarousel";` |
| 63 | [onchain-finance/tokenized-assets/deploy-tokenized-asset](https://docs.sui.io/onchain-finance/tokenized-assets/deploy-tokenized-asset) | L204 | rust | 8 | `...` |
| 64 | [onchain-finance/tokenized-assets/deploy-tokenized-asset](https://docs.sui.io/onchain-finance/tokenized-assets/deploy-tokenized-asset) | L217 | tsx | 19 | `...` |
| 65 | [onchain-finance/tokenized-assets/deploy-tokenized-asset](https://docs.sui.io/onchain-finance/tokenized-assets/deploy-tokenized-asset) | L250 | tsx | 17 | `...` |
| 66 | [onchain-finance/pas/querying-assets](https://docs.sui.io/onchain-finance/pas/querying-assets) | L79 | tsx | 17 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 67 | [onchain-finance/pas/querying-assets](https://docs.sui.io/onchain-finance/pas/querying-assets) | L103 | tsx | 4 | `const { object } = await client.core.getObject({ objectId: a` |
| 68 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L57 | move | 2 | `account::create_and_share(&mut namespace, @0xAlice);` |
| 69 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L82 | move | 16 | `// 1. Create auth proof` |
| 70 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L121 | move | 11 | `// 1. Create clawback request (no Auth needed)` |
| 71 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L160 | move | 6 | `let auth = account::new_auth(ctx);` |
| 72 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L175 | move | 5 | `let auth = account::new_auth(ctx);` |
| 73 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L187 | move | 1 | `account.deposit_balance(balance);` |
| 74 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L193 | move | 1 | `balance.send_funds(namespace.account_address(owner));` |
| 75 | [onchain-finance/pas/pas-workflows](https://docs.sui.io/onchain-finance/pas/pas-workflows) | L201 | move | 15 | `public fun burn(` |
| 76 | [onchain-finance/pas/pas-architecture](https://docs.sui.io/onchain-finance/pas/pas-architecture) | L175 | move | 4 | `// Policy requires: { TransferApproval }` |
| 77 | [onchain-finance/pas/pas-architecture](https://docs.sui.io/onchain-finance/pas/pas-architecture) | L220 | move | 5 | `// Wallet-owned: proves ownership via transaction sender` |
| 78 | [onchain-finance/pas/pas-architecture](https://docs.sui.io/onchain-finance/pas/pas-architecture) | L232 | move | 5 | `// Get the account address for an owner` |
| 79 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L55 | move | 5 | `/// Witness for approved transfers between accounts.` |
| 80 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L71 | move | 13 | `let (mut policy, policy_cap) = policy::new_for_currency(` |
| 81 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L95 | move | 7 | `public fun approve_transfer(` |
| 82 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L139 | move | 5 | `public fun set_template_command<A: drop>(` |
| 83 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L153 | move | 7 | `public fun approve_transfer(` |
| 84 | [onchain-finance/pas/integrating-pas](https://docs.sui.io/onchain-finance/pas/integrating-pas) | L165 | move | 14 | `let type_name = type_name::with_defining_ids<MY_COIN>();` |
| 85 | [onchain-finance/oracles/resolution-patterns](https://docs.sui.io/onchain-finance/oracles/resolution-patterns) | L88 | move | 28 | `// ILLUSTRATIVE PATTERN, NOT A DEPLOYABLE PACKAGE. Sketch of` |
| 86 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L165 | javascript | 4 | `let tx = new Transaction();` |
| 87 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L191 | javascript | 11 | `let tx = new Transaction();` |
| 88 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L223 | javascript | 11 | `let tx = new Transaction();` |
| 89 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L257 | javascript | 11 | `let tx = new Transaction();` |
| 90 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L295 | javascript | 12 | `const tx = new Transaction();` |
| 91 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L339 | javascript | 13 | `let tx = new Transaction();` |
| 92 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L377 | javascript | 11 | `let tx = new Transaction();` |
| 93 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L425 | move | 7 | `module examples::immutable_borrow;` |
| 94 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L441 | move | 9 | `module examples::mutable_borrow;` |
| 95 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L459 | javascript | 22 | `let tx = new Transaction();` |
| 96 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L490 | javascript | 23 | `let tx = new Transaction();` |
| 97 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L76 | move | 23 | `module examples::kiosk_name_ext;` |
| 98 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L114 | move | 5 | `module example::my_extension;` |
| 99 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L139 | move | 16 | `module examples::letterbox_ext;` |
| 100 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L183 | move | 13 | `module examples::letterbox_ext;` |
| 101 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L203 | move | 12 | `module examples::letterbox_ext;` |
| 102 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L251 | javascript | 9 | `let txb = new TransactionBuilder();` |
| 103 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L271 | javascript | 9 | `let txb = new TransactionBuilder();` |
| 104 | [onchain-finance/fungible-tokens/create-a-fungible-token](https://docs.sui.io/onchain-finance/fungible-tokens/create-a-fungible-token) | L139 | move | 5 | `// Mint new coins` |
| 105 | [onchain-finance/fungible-tokens/create-a-fungible-token](https://docs.sui.io/onchain-finance/fungible-tokens/create-a-fungible-token) | L149 | move | 1 | `currency.burn(coin);` |
| 106 | [onchain-finance/fungible-tokens/coin](https://docs.sui.io/onchain-finance/fungible-tokens/coin) | L227 | move | 5 | `public entry fun <FUNCTION-NAME><T>(` |
| 107 | [onchain-finance/examples-patterns/wasm-template](https://docs.sui.io/onchain-finance/examples-patterns/wasm-template) | L107 | rust | 8 | `...` |
| 108 | [onchain-finance/examples-patterns/wasm-template](https://docs.sui.io/onchain-finance/examples-patterns/wasm-template) | L120 | tsx | 19 | `...` |
| 109 | [onchain-finance/examples-patterns/wasm-template](https://docs.sui.io/onchain-finance/examples-patterns/wasm-template) | L155 | tsx | 17 | `...` |
| 110 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L48 | rust | 24 | `public fun kiosk_join<T>(` |
| 111 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L89 | rust | 4 | `struct BurnTicket<phantom T> has key {` |
| 112 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L98 | rust | 5 | `struct Treasury<phantom T> has key, store {` |
| 113 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L108 | rust | 4 | `struct AdminCap<phantom T> has key, store {` |
| 114 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L119 | rust | 5 | `public fun mint_burn_ticket<T>(` |
| 115 | [onchain-finance/examples-patterns/kiosk](https://docs.sui.io/onchain-finance/examples-patterns/kiosk) | L129 | rust | 4 | `public fun burn_with_ticket<T>(` |
| 116 | [onchain-finance/closed-loop-token/token-policy](https://docs.sui.io/onchain-finance/closed-loop-token/token-policy) | L59 | move | 5 | `// module: sui::token` |
| 117 | [onchain-finance/closed-loop-token/token-policy](https://docs.sui.io/onchain-finance/closed-loop-token/token-policy) | L73 | move | 7 | `// module sui::token` |
| 118 | [onchain-finance/closed-loop-token/token-policy](https://docs.sui.io/onchain-finance/closed-loop-token/token-policy) | L106 | move | 7 | `// module: sui::token` |
| 119 | [onchain-finance/closed-loop-token/token-policy](https://docs.sui.io/onchain-finance/closed-loop-token/token-policy) | L122 | move | 6 | `// module sui::token` |
| 120 | [onchain-finance/closed-loop-token/spending](https://docs.sui.io/onchain-finance/closed-loop-token/spending) | L62 | move | 2 | `// module sui::token` |
| 121 | [onchain-finance/closed-loop-token/spending](https://docs.sui.io/onchain-finance/closed-loop-token/spending) | L80 | move | 18 | `/// Rule-like witness to stamp the ActionRequest` |
| 122 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L55 | move | 2 | `/// The Rule type` |
| 123 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L70 | move | 17 | `module example::pass_rule {` |
| 124 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L117 | move | 8 | `// module: sui::token` |
| 125 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L132 | move | 4 | `// module: sui::token` |
| 126 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L143 | move | 4 | `// module: sui::token` |
| 127 | [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L154 | move | 6 | `// module: sui::token` |
| 128 | [onchain-finance/closed-loop-token/index](https://docs.sui.io/onchain-finance/closed-loop-token/index) | L68 | move | 5 | `// defined in `sui::coin`` |
| 129 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L76 | move | 4 | `// module: sui::token` |
| 130 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L103 | move | 6 | `// module: sui::token` |
| 131 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L114 | js | 27 | `let tx = new Transaction();` |
| 132 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L150 | move | 6 | `// module: sui::token` |
| 133 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L167 | js | 21 | `let tx = new Transaction();` |
| 134 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L201 | move | 7 | `// module: sui::token` |
| 135 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L213 | js | 21 | `let tx = new Transaction();` |
| 136 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L243 | move | 4 | `// module: sui::token` |
| 137 | [onchain-finance/closed-loop-token/action-request](https://docs.sui.io/onchain-finance/closed-loop-token/action-request) | L264 | move | 7 | `public fun new_request<T>(` |
| 138 | [getting-started/onboarding/get-coins](https://docs.sui.io/getting-started/onboarding/get-coins) | L205 | typescript | 8 | `import { getFaucetHost, requestSuiFromFaucetV2 } from '@myst` |
| 139 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L80 | move | 6 | `module conventions::wallet;` |
| 140 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L93 | move | 25 | `module conventions::comments;` |
| 141 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L129 | move | 7 | `use std::string::String;` |
| 142 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L147 | move | 10 | `module conventions::constants;` |
| 143 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L170 | move | 16 | `module conventions::request;` |
| 144 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L214 | move | 7 | `module conventions::generics;` |
| 145 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L232 | move | 15 | `module conventions::shop;` |
| 146 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L254 | move | 30 | `module conventions::amm;` |
| 147 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L291 | move | 19 | `module conventions::amm;` |
| 148 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L323 | move | 37 | `module conventions::access_control;` |
| 149 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L367 | move | 33 | `module conventions::vesting_wallet;` |
| 150 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L407 | move | 24 | `module conventions::social_network;` |
| 151 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L444 | move | 34 | `module conventions::hero;` |
| 152 | [develop/transaction-payment/sponsor-txn](https://docs.sui.io/develop/transaction-payment/sponsor-txn) | L76 | rust | 21 | `pub struct SenderSignedTransaction {` |
| 153 | [develop/transaction-payment/sponsor-txn](https://docs.sui.io/develop/transaction-payment/sponsor-txn) | L134 | rust | 5 | `pub struct GasLessTransactionData {` |
| 154 | [develop/transaction-payment/sponsor-txn](https://docs.sui.io/develop/transaction-payment/sponsor-txn) | L192 | rust | 11 | `// User-initiated: receive GaslessTransaction, return signed` |
| 155 | [develop/transaction-payment/index](https://docs.sui.io/develop/transaction-payment/index) | L68 | tsx | 11 | `import { Transaction, coinWithBalance } from '@mysten/sui/tr` |
| 156 | [develop/transaction-payment/index](https://docs.sui.io/develop/transaction-payment/index) | L92 | tsx | 1 | `tx.setGasPayment([]); // Gas paid from address balance — no ` |
| 157 | [develop/transaction-payment/index](https://docs.sui.io/develop/transaction-payment/index) | L135 | tsx | 18 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 158 | [develop/transaction-payment/index](https://docs.sui.io/develop/transaction-payment/index) | L164 | tsx | 16 | `const tx = new Transaction();` |
| 159 | [develop/transaction-payment/index](https://docs.sui.io/develop/transaction-payment/index) | L187 | tsx | 34 | `const tx = new Transaction();` |
| 160 | [develop/transaction-payment/gasless-stablecoin-transfers](https://docs.sui.io/develop/transaction-payment/gasless-stablecoin-transfers) | L108 | tsx | 26 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 161 | [develop/transaction-payment/gasless-stablecoin-transfers](https://docs.sui.io/develop/transaction-payment/gasless-stablecoin-transfers) | L139 | tsx | 1 | `const bytes = await tx.build({ client: grpcClient });` |
| 162 | [develop/transaction-payment/gasless-stablecoin-transfers](https://docs.sui.io/develop/transaction-payment/gasless-stablecoin-transfers) | L149 | tsx | 11 | `const tx = new Transaction();` |
| 163 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L56 | move | 15 | `#[test]` |
| 164 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L84 | move | 11 | `#[test_only]` |
| 165 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L100 | move | 4 | `#[test_only]` |
| 166 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L111 | move | 7 | `// Test that a specific abort code is raised` |
| 167 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L133 | move | 30 | `#[test]` |
| 168 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L194 | move | 11 | `use std::unit_test;` |
| 169 | [develop/testing-debugging/common-errors](https://docs.sui.io/develop/testing-debugging/common-errors) | L489 | typescript | 7 | `// Incorrect — double-wrapping causes this error` |
| 170 | [develop/testing-debugging/common-errors](https://docs.sui.io/develop/testing-debugging/common-errors) | L552 | typescript | 18 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 171 | [develop/testing-debugging/common-errors](https://docs.sui.io/develop/testing-debugging/common-errors) | L583 | typescript | 9 | `// Deprecated — do not use` |
| 172 | [develop/testing-debugging/common-errors](https://docs.sui.io/develop/testing-debugging/common-errors) | L607 | typescript | 14 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 173 | [develop/testing-debugging/common-errors](https://docs.sui.io/develop/testing-debugging/common-errors) | L626 | typescript | 13 | `const results = await client.core.getObjects({` |
| 174 | [develop/publish-upgrade-packages/versioning](https://docs.sui.io/develop/publish-upgrade-packages/versioning) | L82 | move | 4 | `module escrow::lock {` |
| 175 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L137 | move | 3 | `public fun increment(c: &mut Counter) {` |
| 176 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L145 | move | 11 | `public struct Progress has copy, drop {` |
| 177 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L171 | move | 17 | `module example::counter;` |
| 178 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L203 | move | 43 | `module example::counter;` |
| 179 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L257 | move | 61 | `module example::counter;` |
| 180 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L190 | move | 21 | `module policy::day_of_week;` |
| 181 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L218 | move | 4 | `// Request to authorize upgrade on the wrong day of the week` |
| 182 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L227 | move | 7 | `fun week_day(ctx: &TxContext): u8 {` |
| 183 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L241 | move | 9 | `public fun authorize_upgrade(` |
| 184 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L257 | move | 12 | `public fun commit_upgrade(` |
| 185 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L274 | move | 53 | `module policy::day_of_week;` |
| 186 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L438 | move | 6 | `module example::example {` |
| 187 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L473 | js | 2 | `const SUI = 'sui';` |
| 188 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L480 | js | 27 | `import { execSync } from 'child_process';` |
| 189 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L512 | js | 5 | `import { fileURLToPath } from 'url';` |
| 190 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L522 | js | 5 | `const { modules, dependencies } = JSON.parse(` |
| 191 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L532 | js | 13 | `import { Transaction } from '@mysten/sui/transactions';` |
| 192 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L550 | js | 9 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 193 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L570 | js | 61 | `import { execSync } from 'child_process';` |
| 194 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L766 | js | 70 | `import { execSync } from 'child_process';` |
| 195 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L181 | move | 7 | `module sui::table;` |
| 196 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L197 | move | 5 | `module sui::bag;` |
| 197 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L209 | move | 22 | `module sui::table;` |
| 198 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L248 | move | 9 | `module sui::table;` |
| 199 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L266 | move | 6 | `module sui::table;` |
| 200 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L277 | move | 8 | `module sui::bag;` |
| 201 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L294 | move | 5 | `module sui::table;` |
| 202 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L304 | move | 5 | `module sui::table;` |
| 203 | [develop/objects/dynamic-fields](https://docs.sui.io/develop/objects/dynamic-fields) | L324 | move | 7 | `use sui::table;` |
| 204 | [develop/objects/derived-objects](https://docs.sui.io/develop/objects/derived-objects) | L132 | move | 36 | `use sui::table::{Self, Table};` |
| 205 | [develop/objects/derived-objects](https://docs.sui.io/develop/objects/derived-objects) | L175 | move | 36 | `use sui::table::{Self, Table};` |
| 206 | [develop/objects/derived-objects](https://docs.sui.io/develop/objects/derived-objects) | L218 | move | 31 | `const EVaultAlreadyExists: u64 = 0;` |
| 207 | [develop/manage-packages/move-package-management](https://docs.sui.io/develop/manage-packages/move-package-management) | L103 | move | 4 | `module example::example_module;` |
| 208 | [develop/manage-packages/move-package-management](https://docs.sui.io/develop/manage-packages/move-package-management) | L206 | move | 2 | `use math_a::signed;` |
| 209 | [develop/manage-packages/move-package-management](https://docs.sui.io/develop/manage-packages/move-package-management) | L509 | typescript | 13 | `import { execSync } from 'child_process';` |
| 210 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L99 | move | 7 | `use sui::ed25519;` |
| 211 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L126 | move | 8 | `use sui::ecdsa_k1;` |
| 212 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L153 | move | 8 | `use sui::ecdsa_k1;` |
| 213 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L181 | move | 8 | `use sui::ecdsa_r1;` |
| 214 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L209 | move | 8 | `use sui::ecdsa_r1;` |
| 215 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L237 | move | 7 | `use sui::bls12381;` |
| 216 | [develop/cryptography/signing](https://docs.sui.io/develop/cryptography/signing) | L264 | move | 7 | `use sui::bls12381;` |
| 217 | [develop/cryptography/hashing](https://docs.sui.io/develop/cryptography/hashing) | L66 | move | 22 | `module test::hashing_std {` |
| 218 | [develop/cryptography/hashing](https://docs.sui.io/develop/cryptography/hashing) | L93 | move | 22 | `module test::hashing_sui {` |
| 219 | [develop/cryptography/groth16](https://docs.sui.io/develop/cryptography/groth16) | L91 | rust | 53 | `use ark_bn254::Bn254;` |
| 220 | [develop/cryptography/groth16](https://docs.sui.io/develop/cryptography/groth16) | L166 | rust | 8 | `use sui::groth16;` |
| 221 | [develop/cryptography/ecvrf](https://docs.sui.io/develop/cryptography/ecvrf) | L86 | move | 13 | `module math::ecvrf_test {` |
| 222 | [develop/accessing-data/using-events](https://docs.sui.io/develop/accessing-data/using-events) | L133 | ts | 17 | `// Use the generated proto client for ListEvents` |
| 223 | [develop/accessing-data/using-events](https://docs.sui.io/develop/accessing-data/using-events) | L155 | ts | 11 | `async function getEventsForTransaction(digest: string) {` |
| 224 | [develop/accessing-data/using-events](https://docs.sui.io/develop/accessing-data/using-events) | L302 | ts | 39 | `import { SuiGraphQLClient } from '@mysten/sui/graphql';` |
| 225 | [develop/accessing-data/using-events](https://docs.sui.io/develop/accessing-data/using-events) | L379 | typescript | 35 | `import { SuiGraphQLClient } from '@mysten/sui/graphql';` |
| 226 | [develop/accessing-data/authenticated-events](https://docs.sui.io/develop/accessing-data/authenticated-events) | L88 | move | 16 | `module my_package::my_module;` |
| 227 | [develop/accessing-data/authenticated-events](https://docs.sui.io/develop/accessing-data/authenticated-events) | L125 | rust | 33 | `use sui_light_client::authenticated_events::AuthenticatedEve` |
| 228 | [develop/accessing-data/authenticated-events](https://docs.sui.io/develop/accessing-data/authenticated-events) | L167 | rust | 4 | `let last_checkpoint = 12345;` |
| 229 | [develop/accessing-data/authenticated-events](https://docs.sui.io/develop/accessing-data/authenticated-events) | L288 | rust | 12 | `let config = ClientConfig::new(` |
| 230 | [sui-stack/suins/developer/sdk](https://docs.sui.io/sui-stack/suins/developer/sdk) | L74 | js | 11 | `import { suins } from '@mysten/suins';` |
| 231 | [sui-stack/suins/developer/sdk](https://docs.sui.io/sui-stack/suins/developer/sdk) | L90 | js | 13 | `import { suins, type PackageInfo } from '@mysten/suins';` |
| 232 | [sui-stack/mvr/tooling/typescript-sdk](https://docs.sui.io/sui-stack/mvr/tooling/typescript-sdk) | L73 | typescript | 8 | `/** Register the MVR plugin globally */` |
| 233 | [sui-stack/mvr/tooling/typescript-sdk](https://docs.sui.io/sui-stack/mvr/tooling/typescript-sdk) | L84 | typescript | 12 | `/** Register the MVR plugin per PTB */` |
| 234 | [sui-stack/mvr/tooling/typescript-sdk](https://docs.sui.io/sui-stack/mvr/tooling/typescript-sdk) | L103 | typescript | 11 | `const overrides = {` |
| 235 | [sui-stack/mvr/tooling/typescript-sdk](https://docs.sui.io/sui-stack/mvr/tooling/typescript-sdk) | L155 | typescript | 11 | `const transaction = new Transaction();` |
| 236 | [onchain-finance/deepbook/deepbookv3-sdk/swaps](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/swaps) | L64 | tsx | 1 | `swapExactBaseForQuote({ params: SwapParams });` |
| 237 | [onchain-finance/deepbook/deepbookv3-sdk/swaps](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/swaps) | L76 | tsx | 1 | `swapExactQuoteForBase({ params: SwapParams });` |
| 238 | [onchain-finance/deepbook/deepbookv3-sdk/swaps](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/swaps) | L122 | tsx | 23 | `swapExactBaseForQuote = (tx: Transaction) => {` |
| 239 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L65 | tsx | 1 | `stake(poolKey: string, balanceManagerKey: string, stakeAmoun` |
| 240 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L78 | tsx | 1 | `unstake(poolKey: string, balanceManagerKey: string);` |
| 241 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L90 | tsx | 1 | `submitProposal({ params: ProposalParams });` |
| 242 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L104 | tsx | 1 | `vote(poolKey: string, balanceManagerKey: string, proposal_id` |
| 243 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L125 | tsx | 12 | `stake = (` |
| 244 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L142 | tsx | 11 | `unstake = (` |
| 245 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L158 | tsx | 25 | `// Proposal params` |
| 246 | [onchain-finance/deepbook/deepbookv3-sdk/staking-governance](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/staking-governance) | L188 | tsx | 13 | `vote = (` |
| 247 | [onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook) | L130 | ts | 10 | `import { Transaction } from '@mysten/sui/transactions';` |
| 248 | [onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook) | L160 | ts | 8 | `import { Transaction } from '@mysten/sui/transactions';` |
| 249 | [onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook) | L185 | tsx | 21 | `import { Transaction } from '@mysten/sui/transactions';` |
| 250 | [onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/ptb-cli-cookbook) | L234 | tsx | 14 | `import { Transaction } from '@mysten/sui/transactions';` |
| 251 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L70 | ts | 19 | `{` |
| 252 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L132 | ts | 14 | `{` |
| 253 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L248 | ts | 6 | `{` |
| 254 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L268 | ts | 5 | `{` |
| 255 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L286 | ts | 5 | `{` |
| 256 | [onchain-finance/deepbook/deepbookv3-sdk/pools](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/pools) | L304 | ts | 5 | `{` |
| 257 | [onchain-finance/deepbook/deepbookv3-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/orders) | L168 | tsx | 38 | `// Params for limit order` |
| 258 | [onchain-finance/deepbook/deepbookv3-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/orders) | L213 | tsx | 27 | `// Params for market order` |
| 259 | [onchain-finance/deepbook/deepbookv3-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/orders) | L247 | tsx | 17 | `/**` |
| 260 | [onchain-finance/deepbook/deepbookv3-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/orders) | L271 | tsx | 15 | `/**` |
| 261 | [onchain-finance/deepbook/deepbookv3-sdk/flash-loans](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/flash-loans) | L68 | tsx | 1 | `borrowBaseAsset(poolKey: string, borrowAmount: number);` |
| 262 | [onchain-finance/deepbook/deepbookv3-sdk/flash-loans](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/flash-loans) | L103 | tsx | 1 | `borrowQuoteAsset(poolKey: string, borrowAmount: number);` |
| 263 | [onchain-finance/deepbook/deepbookv3-sdk/flash-loans](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/flash-loans) | L118 | tsx | 6 | `returnQuoteAsset(` |
| 264 | [onchain-finance/deepbook/deepbookv3-sdk/flash-loans](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/flash-loans) | L131 | tsx | 42 | `// Example of a flash loan transaction` |
| 265 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L74 | ts | 1 | `https://github.com/MystenLabs/ts-sdks/blob/main/packages/dee` |
| 266 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L84 | tsx | 36 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 267 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L133 | tsx | 57 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 268 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L195 | tsx | 80 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 269 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L303 | tsx | 63 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 270 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L373 | tsx | 34 | `import { Transaction } from '@mysten/sui/transactions';` |
| 271 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L424 | tsx | 18 | `// Mint a new referral for a specific pool` |
| 272 | [onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/deepbookv3-sdk) | L449 | tsx | 18 | `// Generate a trade cap first (needed for setting referrals)` |
| 273 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L405 | tsx | 4 | `// Example: Create and share a new balance manager` |
| 274 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L414 | tsx | 10 | `// Example: Create a balance manager with custom owner and s` |
| 275 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L429 | tsx | 27 | `// Example: Deposit USDC into a balance manager` |
| 276 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L461 | tsx | 32 | `// Example: Mint a TradeCap and use it` |
| 277 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L498 | tsx | 21 | `// Example: Generate a trade proof and use it to place an or` |
| 278 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L524 | tsx | 19 | `// Example: Set a pool-specific referral for a balance manag` |
| 279 | [onchain-finance/deepbook/deepbookv3-sdk/balance-manager](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/balance-manager) | L548 | tsx | 18 | `// Example: Complete balance manager setup workflow` |
| 280 | [onchain-finance/deepbook/deepbook-margin-sdk/tpsl](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/tpsl) | L180 | tsx | 16 | `// Example: Create a stop loss order that sells when price d` |
| 281 | [onchain-finance/deepbook/deepbook-margin-sdk/tpsl](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/tpsl) | L201 | tsx | 17 | `// Example: Create a take profit order that sells when price` |
| 282 | [onchain-finance/deepbook/deepbook-margin-sdk/tpsl](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/tpsl) | L223 | tsx | 6 | `// Example: Execute conditional orders as a keeper` |
| 283 | [onchain-finance/deepbook/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/orders) | L207 | tsx | 30 | `// Params for limit order` |
| 284 | [onchain-finance/deepbook/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/orders) | L242 | tsx | 15 | `// Example: Place a market sell order for 5 SUI` |
| 285 | [onchain-finance/deepbook/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/orders) | L262 | tsx | 16 | `// Example: Place a reduce-only limit order to close a posit` |
| 286 | [onchain-finance/deepbook/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/orders) | L283 | tsx | 27 | `// Example: Modify order quantity` |
| 287 | [onchain-finance/deepbook/deepbook-margin-sdk/orders](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/orders) | L315 | tsx | 31 | `// Example: Stake DEEP tokens` |
| 288 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L144 | tsx | 12 | `/**` |
| 289 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L161 | tsx | 16 | `// Example: Supply 1000 USDC to the margin pool` |
| 290 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L182 | tsx | 16 | `// Example: Supply 1000 USDC with a referral` |
| 291 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L203 | tsx | 18 | `// Example: Withdraw 500 USDC from the margin pool` |
| 292 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L226 | tsx | 12 | `// Example: Create a supply referral` |
| 293 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-pool](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-pool) | L243 | tsx | 16 | `// Example: Check interest rate and utilization` |
| 294 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager) | L226 | tsx | 12 | `/**` |
| 295 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager) | L243 | tsx | 5 | `// Example: Deposit 100 SUI as collateral` |
| 296 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager) | L253 | tsx | 5 | `// Example: Borrow 500 USDC` |
| 297 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager) | L263 | tsx | 6 | `// Example: Repay all borrowed quote assets` |
| 298 | [onchain-finance/deepbook/deepbook-margin-sdk/margin-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/margin-manager) | L274 | tsx | 8 | `// Example: Liquidate an undercollateralized position` |
| 299 | [onchain-finance/deepbook/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/maintainer) | L180 | tsx | 26 | `// Example: Create a USDC margin pool` |
| 300 | [onchain-finance/deepbook/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/maintainer) | L211 | tsx | 10 | `// Example: Allow SUI/USDC pool to borrow from USDC margin p` |
| 301 | [onchain-finance/deepbook/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/maintainer) | L226 | tsx | 14 | `// Example: Update USDC margin pool interest rates` |
| 302 | [onchain-finance/deepbook/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/maintainer) | L245 | tsx | 14 | `// Example: Update USDC margin pool limits` |
| 303 | [onchain-finance/deepbook/deepbook-margin-sdk/maintainer](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/maintainer) | L264 | tsx | 31 | `// Example: Complete workflow for setting up a new margin po` |
| 304 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L73 | ts | 1 | `https://github.com/MystenLabs/ts-sdks/blob/main/packages/dee` |
| 305 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L89 | tsx | 36 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 306 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L138 | tsx | 57 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 307 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L200 | tsx | 82 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 308 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L310 | tsx | 63 | `import { deepbook, type DeepBookClient } from '@mysten/deepb` |
| 309 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L380 | tsx | 41 | `import { Transaction } from '@mysten/sui/transactions';` |
| 310 | [onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk](https://docs.sui.io/onchain-finance/deepbook/deepbook-margin-sdk/deepbook-margin-sdk) | L428 | tsx | 12 | `// Set a referral for a margin manager (pool-specific)` |
| 311 | [onchain-finance/asset-custody/wallets/zk-login-wallets](https://docs.sui.io/onchain-finance/asset-custody/wallets/zk-login-wallets) | L95 | typescript | 16 | `import { useCurrentAccount } from '@mysten/dapp-kit-react';` |
| 312 | [onchain-finance/asset-custody/wallets/zk-login-wallets](https://docs.sui.io/onchain-finance/asset-custody/wallets/zk-login-wallets) | L213 | typescript | 15 | `import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519` |
| 313 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L66 | tsx | 21 | `import { SUI_DEVNET_CHAIN, Wallet } from '@mysten/wallet-sta` |
| 314 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L120 | tsx | 64 | `import {` |
| 315 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L197 | tsx | 24 | `import { ReadonlyWalletAccount } from '@mysten/wallet-standa` |
| 316 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L229 | tsx | 3 | `import { registerWallet } from '@mysten/wallet-standard';` |
| 317 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L243 | tsx | 3 | `import { getWallets } from '@mysten/wallet-standard';` |
| 318 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L274 | tsx | 1 | `await wallet.features['standard:connect'].connect();` |
| 319 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L290 | tsx | 1 | `wallet.features['standard:disconnect'].disconnect();` |
| 320 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L300 | tsx | 4 | `wallet.features['sui:signTransaction'].signTransaction({` |
| 321 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L311 | tsx | 11 | `import { fromBase64 } from '@mysten/sui/utils';` |
| 322 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L348 | tsx | 1 | `const unsubscribe = wallet.features['standard:events'].on('c` |
| 323 | [onchain-finance/asset-custody/wallets/wallet-standard](https://docs.sui.io/onchain-finance/asset-custody/wallets/wallet-standard) | L356 | tsx | 5 | `{` |
| 324 | [onchain-finance/asset-custody/wallets/suilink](https://docs.sui.io/onchain-finance/asset-custody/wallets/suilink) | L113 | typescript | 14 | `const SUILINK_PACKAGE_ID_ETH_SOL = '0xf857fa9df5811e6df2a024` |
| 325 | [onchain-finance/asset-custody/wallets/suilink](https://docs.sui.io/onchain-finance/asset-custody/wallets/suilink) | L136 | typescript | 5 | `{` |
| 326 | [onchain-finance/asset-custody/wallets/suilink](https://docs.sui.io/onchain-finance/asset-custody/wallets/suilink) | L146 | typescript | 16 | `for (const link of ethSolSuiLinks.objects) {` |
| 327 | [onchain-finance/asset-custody/wallets/self-custody](https://docs.sui.io/onchain-finance/asset-custody/wallets/self-custody) | L198 | typescript | 6 | `export const dAppKit = createDAppKit({` |
| 328 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L107 | move | 5 | `// Send a Balance<T> to an address balance` |
| 329 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L121 | tsx | 9 | `const tx = new Transaction();` |
| 330 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L135 | tsx | 5 | `const [balance] = tx.moveCall({` |
| 331 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L145 | tsx | 5 | `const [coin] = tx.moveCall({` |
| 332 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L159 | typescript | 4 | `import { Transaction } from '@mysten/sui/transactions';` |
| 333 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L170 | typescript | 21 | `import { Transaction } from '@mysten/sui/transactions';` |
| 334 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L204 | rust | 7 | `use sui_types::transaction::{FundsWithdrawalArg, WithdrawalT` |
| 335 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L221 | rust | 18 | `let mut builder = ProgrammableTransactionBuilder::new();` |
| 336 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L248 | move | 5 | `// Split a sub-withdrawal from an existing withdrawal` |
| 337 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L262 | typescript | 2 | `const tx = new Transaction();` |
| 338 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L269 | rust | 18 | `TransactionData::V1(TransactionDataV1 {` |
| 339 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L300 | rust | 5 | `// Random nonce` |
| 340 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L313 | typescript | 23 | `const network = 'testnet';` |
| 341 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L356 | typescript | 22 | `// 1. User builds and signs the transaction first` |
| 342 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L389 | tsx | 8 | `const { balance } = await grpcClient.getBalance({` |
| 343 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L460 | rust | 7 | `use sui_types::balance_change::{derive_balance_changes, Bala` |
| 344 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L484 | rust | 22 | `use sui_types::effects::TransactionEffectsAPI;` |
| 345 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L511 | rust | 5 | `pub struct BalanceChange {` |
| 346 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L535 | typescript | 8 | `import { Transaction } from '@mysten/sui/transactions';` |
| 347 | [onchain-finance/asset-custody/address-balances/migrate-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/migrate-address-balances) | L123 | rust | 7 | `use sui_types::balance_change::{derive_balance_changes, Bala` |
| 348 | [onchain-finance/asset-custody/address-balances/migrate-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/migrate-address-balances) | L141 | rust | 3 | `use sui_types::effects::TransactionEffectsAPI;` |
| 349 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L69 | rust | 4 | `pub struct IntentMessage<T> {` |
| 350 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L78 | rust | 5 | `pub struct Intent {` |
| 351 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L104 | rust | 3 | `let intent = Intent::default();` |
| 352 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L114 | typescript | 2 | `const intentMessage = messageWithIntent('TransactionData', t` |
| 353 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L156 | move | 14 | `use sui::ed25519;` |
| 354 | [develop/transactions/transaction-auth/intent-signing](https://docs.sui.io/develop/transactions/transaction-auth/intent-signing) | L175 | typescript | 3 | `const { signature } = await wallet.signPersonalMessage({` |
| 355 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L245 | typescript | 2 | `const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC, ` |
| 356 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L299 | tsx | 58 | `import { fromHex } from '@mysten/bcs';` |
| 357 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L368 | rust | 41 | `// deterministically generate a key pair, testing only, do n` |
| 358 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L414 | rust | 18 | `// construct an example programmable transaction.` |
| 359 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L437 | rust | 17 | `// derive the digest that the key pair should sign on, that ` |
| 360 | [develop/transactions/transaction-auth/auth-overview](https://docs.sui.io/develop/transactions/transaction-auth/auth-overview) | L459 | rust | 12 | `let transaction_response = sui_client` |
| 361 | [develop/transactions/ptbs/ts-sdk-ptb-template](https://docs.sui.io/develop/transactions/ptbs/ts-sdk-ptb-template) | L111 | tsx | 33 | `import { ConnectButton } from '@mysten/dapp-kit-react/ui';` |
| 362 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L77 | rust | 4 | `{` |
| 363 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L254 | move | 9 | `module ex::m;` |
| 364 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L268 | rust | 7 | `// Invalid PTB` |
| 365 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L280 | rust | 8 | `// Valid PTB` |
| 366 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L293 | move | 7 | `module flash::loan;` |
| 367 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L303 | rust | 10 | `// Invalid PTB` |
| 368 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L374 | rust | 14 | `{` |
| 369 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L440 | rust | 3 | `Gas Coin: Coin<SUI> { id: gas_coin, balance: 1_000_000u64 }` |
| 370 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L448 | rust | 1 | `Gas Coin: Coin<SUI> { id: gas_coin, balance: 500_000u64 }` |
| 371 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L454 | rust | 9 | `Gas Coin: _ (moved)` |
| 372 | [develop/transactions/ptbs/inputs-and-results](https://docs.sui.io/develop/transactions/ptbs/inputs-and-results) | L102 | move | 26 | `public struct Sword has key, store {` |
| 373 | [develop/transactions/ptbs/inputs-and-results](https://docs.sui.io/develop/transactions/ptbs/inputs-and-results) | L133 | move | 8 | `/// Hero can equip a single sword.` |
| 374 | [develop/transactions/ptbs/inputs-and-results](https://docs.sui.io/develop/transactions/ptbs/inputs-and-results) | L146 | ts | 21 | `const tx = new Transaction();` |
| 375 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L68 | ts | 7 | `// Send 100 MIST to the recipient's address balance. tx.bala` |
| 376 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L80 | ts | 1 | `tx.transferObjects([tx.coin({ balance: 100n })], '0xSomeSuiA` |
| 377 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L86 | ts | 14 | `interface Transfer {` |
| 378 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L105 | ts | 1 | `client.signAndExecuteTransaction({ signer: keypair, transact` |
| 379 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L146 | ts | 4 | `// Split a coin object off of the gas object:` |
| 380 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L155 | ts | 7 | `// Destructuring (preferred, as it gives you logical local n` |
| 381 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L182 | ts | 4 | `const otherCoin = tx.object('0xCoinObjectId');` |
| 382 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L199 | ts | 5 | `const tx = new Transaction();` |
| 383 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L209 | ts | 2 | `const bytes = getTransactionBytesFromSomewhere();` |
| 384 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L218 | ts | 8 | `// For pure values:` |
| 385 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L241 | ts | 1 | `tx.setGasPrice(gasPrice);` |
| 386 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L255 | ts | 1 | `tx.setGasBudget(gasBudgetAmount);` |
| 387 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L265 | ts | 3 | `// NOTE: You need to ensure that the coins do not overlap wi` |
| 388 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L285 | ts | 13 | `// Within an app` |
| 389 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L326 | rust | 27 | `use move_core_types::{identifier::Identifier, language_stora` |
| 390 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L360 | typescript | 5 | `tx.moveCall({` |
| 391 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L382 | typescript | 9 | `const result = await client.signAndExecuteTransaction({ tran` |
| 392 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L86 | move | 9 | `// 0xADD is an address` |
| 393 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L140 | move | 26 | `module sui::transfer;` |
| 394 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L184 | move | 35 | `module examples::shared_object_auth;` |
| 395 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L228 | move | 56 | `module examples::account;` |
| 396 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L310 | ts | 10 | `... // Setup TypeScript SDK as normal.` |
| 397 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L327 | rust | 14 | `... // setup Rust SDK client as normal` |
| 398 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L356 | move | 47 | `module examples::soul_bound;` |
| 399 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L69 | move | 45 | `module examples::dummy_rule {` |
| 400 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L137 | move | 40 | `module examples::royalty_rule {` |
| 401 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L184 | move | 27 | `module examples::time_rule {` |
| 402 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L220 | move | 25 | `module sui::transfer_policy {` |
| 403 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L258 | move | 29 | `module examples::witness_rule {` |
| 404 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L292 | move | 22 | `module examples::capability_rule {` |
| 405 | [develop/objects/transfers/simulating-refs](https://docs.sui.io/develop/objects/transfers/simulating-refs) | L67 | rust | 9 | `module a_module {` |
| 406 | [develop/objects/transfers/simulating-refs](https://docs.sui.io/develop/objects/transfers/simulating-refs) | L83 | rust | 9 | `module another_module {` |
| 407 | [develop/objects/transfers/simulating-refs](https://docs.sui.io/develop/objects/transfers/simulating-refs) | L99 | rust | 4 | `fun do_something(manager: &AssetManager) {` |
| 408 | [develop/objects/transfers/simulating-refs](https://docs.sui.io/develop/objects/transfers/simulating-refs) | L110 | rust | 17 | `module another_module {` |
| 409 | [develop/objects/transfers/simulating-refs](https://docs.sui.io/develop/objects/transfers/simulating-refs) | L160 | rust | 20 | `// initialize the PTB` |
| 410 | [develop/objects/transfers/custom-rules](https://docs.sui.io/develop/objects/transfers/custom-rules) | L70 | move | 5 | `public struct Object has key {` |
| 411 | [develop/objects/transfers/custom-rules](https://docs.sui.io/develop/objects/transfers/custom-rules) | L80 | move | 16 | `module examples::custom_transfer;` |
| 412 | [develop/objects/transfers/custom-rules](https://docs.sui.io/develop/objects/transfers/custom-rules) | L101 | move | 7 | `const EObjectNotLocked: u64 = 1;` |
| 413 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L62 | move | 8 | `public struct Foo has key {` |
| 414 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L77 | move | 4 | `public struct Bar has key, store {` |
| 415 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L115 | move | 3 | `public fun new(scarcity: u8, style: u8, ctx: &mut TxContext)` |
| 416 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L127 | move | 6 | `public struct SwapRequest has key {` |
| 417 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L138 | move | 18 | `public fun request_swap(` |
| 418 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L165 | move | 1 | `public fun execute_swap(s1: SwapRequest, s2: SwapRequest): B` |
| 419 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L173 | move | 2 | `let SwapRequest {id: id1, owner: owner1, object: o1, fee: fe` |
| 420 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L180 | move | 2 | `assert!(o1.scarcity == o2.scarcity, EBadSwap);` |
| 421 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L187 | move | 2 | `transfer::transfer(o1, owner2);` |
| 422 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L194 | move | 2 | `id1.delete();` |
| 423 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L201 | move | 1 | `fee1.join(fee2);` |
| 424 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L219 | move | 5 | `public struct SimpleWarrior has key {` |
| 425 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L229 | move | 9 | `public struct Sword has key, store {` |
| 426 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L243 | move | 8 | `public fun create_warrior(ctx: &mut TxContext) {` |
| 427 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L256 | move | 7 | `public fun equip_sword(warrior: &mut SimpleWarrior, sword: S` |
| 428 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L278 | move | 9 | `public struct Pet has key, store {` |
| 429 | [develop/objects/object-ownership/shared](https://docs.sui.io/develop/objects/object-ownership/shared) | L55 | move | 13 | `public struct Donut has key { id: UID }` |
| 430 | [develop/objects/object-ownership/shared](https://docs.sui.io/develop/objects/object-ownership/shared) | L79 | move | 70 | `module examples::donuts;` |
| 431 | [develop/objects/object-ownership/party](https://docs.sui.io/develop/objects/object-ownership/party) | L135 | ts | 16 | `import { Transaction } from '@mysten/sui/transactions';` |
| 432 | [develop/objects/object-ownership/party](https://docs.sui.io/develop/objects/object-ownership/party) | L162 | ts | 8 | `import { Transaction } from '@mysten/sui/transactions';` |
| 433 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L57 | move | 1 | `public native fun public_freeze_object<T: key>(obj: T);` |
| 434 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L73 | move | 4 | `public fun create_immutable(red: u8, green: u8, blue: u8, ct` |
| 435 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L92 | move | 1 | `public fun copy_into(from: &ColorObject, into: &mut ColorObj` |
| 436 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L167 | move | 12 | `let sender1 = @0x1;` |
| 437 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L188 | move | 9 | `// Any sender can work.` |
| 438 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L81 | move | 7 | `module sui::display_registry;` |
| 439 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L92 | move | 12 | `module sui::display_registry;` |
| 440 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L116 | move | 12 | `module sui::devnet_nft;` |
| 441 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L138 | move | 10 | `module capy::capy_items;` |
| 442 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L158 | move | 5 | `module capy::utility;` |
| 443 | [develop/accessing-data/grpc/using-grpc](https://docs.sui.io/develop/accessing-data/grpc/using-grpc) | L431 | ts | 44 | `import * as grpc from '@grpc/grpc-js';` |
| 444 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L96 | ts | 6 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 445 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L131 | ts | 8 | `const { object } = await client.core.getObject({` |
| 446 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L184 | ts | 12 | `const { objects } = await client.core.getObjects({` |
| 447 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L245 | ts | 9 | `const result = await client.core.getTransaction({` |
| 448 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L299 | ts | 12 | `// Use the proto client directly for batch transaction looku` |
| 449 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L401 | ts | 11 | `const result = await client.core.getTransaction({` |
| 450 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L425 | ts | 9 | `// Old WebSocket subscription (no longer supported)` |
| 451 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L446 | ts | 18 | `// Use the generated proto client directly` |
| 452 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L507 | ts | 21 | `// Use the generated proto client directly` |
| 453 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L558 | ts | 19 | `// Old polling pattern (inefficient and deprecated)` |
| 454 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L583 | ts | 12 | `const { responses } = client.subscriptionService.subscribeCh` |
| 455 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L679 | ts | 12 | `// Use the proto client directly. No Core API wrapper exists` |
| 456 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L743 | ts | 16 | `// Single coin type` |
| 457 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L808 | ts | 20 | `// List SUI coin objects` |
| 458 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L871 | ts | 9 | `const page = await client.core.listDynamicFields({` |
| 459 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L922 | ts | 19 | `import { Transaction } from '@mysten/sui/transactions';` |
| 460 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L956 | ts | 17 | `// Old JSON-RPC pattern` |
| 461 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1023 | ts | 28 | `// Get the current reference gas price` |
| 462 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1077 | ts | 9 | `const result = await client.core.simulateTransaction({` |
| 463 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1113 | ts | 2 | `const { referenceGasPrice } = await client.core.getReference` |
| 464 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1205 | ts | 50 | `let lastProcessed = await loadLastProcessedCheckpoint();` |
| 465 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1264 | ts | 17 | `import type { SuiClientTypes } from '@mysten/sui';` |
| 466 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L1288 | ts | 34 | `import { SuiGrpcClient } from '@mysten/sui/grpc';` |
| 467 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L301 | rust | 34 | `use sui_indexer_alt_framework::config::ConcurrencyConfig;` |
| 468 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L449 | rust | 12 | `trait Processor {` |
| 469 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L544 | rust | 12 | `impl concurrent::Handler for MyHandler {` |
| 470 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L561 | rust | 28 | `use sui_indexer_alt_framework::config::ConcurrencyConfig;` |
| 471 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L607 | rust | 17 | `let config = ConcurrentConfig {` |
| 472 | [develop/accessing-data/custom-indexer/pipeline-architecture](https://docs.sui.io/develop/accessing-data/custom-indexer/pipeline-architecture) | L637 | rust | 16 | `let pruner_config = PrunerConfig {` |
| 473 | [develop/accessing-data/custom-indexer/indexer-runtime-perf](https://docs.sui.io/develop/accessing-data/custom-indexer/indexer-runtime-perf) | L69 | rust | 35 | `use std::num::NonZeroUsize;` |
| 474 | [develop/accessing-data/custom-indexer/indexer-runtime-perf](https://docs.sui.io/develop/accessing-data/custom-indexer/indexer-runtime-perf) | L119 | rust | 10 | `let db_args = DbArgs {` |
| 475 | [develop/accessing-data/custom-indexer/indexer-runtime-perf](https://docs.sui.io/develop/accessing-data/custom-indexer/indexer-runtime-perf) | L282 | rust | 2 | `let cluster = IndexerCluster::builder()` |
| 476 | [develop/accessing-data/custom-indexer/indexer-runtime-perf](https://docs.sui.io/develop/accessing-data/custom-indexer/indexer-runtime-perf) | L293 | rust | 15 | `use prometheus::{IntCounter, register_int_counter_with_regis` |
| 477 | [develop/accessing-data/custom-indexer/bring-your-own-store](https://docs.sui.io/develop/accessing-data/custom-indexer/bring-your-own-store) | L66 | rust | 14 | `use sui_indexer_alt_framework::store::{Store, Connection};` |
| 478 | [develop/accessing-data/custom-indexer/bring-your-own-store](https://docs.sui.io/develop/accessing-data/custom-indexer/bring-your-own-store) | L87 | rust | 8 | `#[async_trait]` |
| 479 | [develop/accessing-data/custom-indexer/bring-your-own-store](https://docs.sui.io/develop/accessing-data/custom-indexer/bring-your-own-store) | L102 | rust | 22 | `#[async_trait]` |
| 480 | [develop/accessing-data/custom-indexer/bring-your-own-store](https://docs.sui.io/develop/accessing-data/custom-indexer/bring-your-own-store) | L135 | rust | 53 | `use sui_indexer_alt_framework::{Indexer, IndexerArgs};` |
| 481 | [develop/accessing-data/custom-indexer/bring-your-own-store](https://docs.sui.io/develop/accessing-data/custom-indexer/bring-your-own-store) | L247 | rust | 11 | `// Move smart contract` |
| 482 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L49 | js | 7 | `const suinsClient = new SuinsClient({` |
| 483 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L63 | js | 5 | `const connection = new SuiPriceServiceConnection('https://py` |
| 484 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L73 | js | 7 | `const pythClient = new SuiPythClient(` |
| 485 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L91 | js | 25 | `const register = async (name: string, years: number) => {` |
| 486 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L121 | js | 21 | `const renew = async (nftId: string, name: string, years: num` |
| 487 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L149 | js | 15 | `const setTargetAddress = async (nftId: string, address: stri` |
| 488 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L171 | js | 13 | `const setDefault = async (name: string) => {` |
| 489 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L193 | js | 31 | `const setUserData = async (nft: string, avatar: string, cont` |
| 490 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L231 | js | 14 | `const burnExpired = async (nftId: string) => {` |
| 491 | [sui-stack/suins/developer/sdk/transactions](https://docs.sui.io/sui-stack/suins/developer/sdk/transactions) | L253 | js | 37 | `// Years must be between 1-5.` |
| 492 | [sui-stack/suins/developer/sdk/subnames](https://docs.sui.io/sui-stack/suins/developer/sdk/subnames) | L38 | js | 26 | `const createSubname = async (subName: string, parentNftId: s` |
| 493 | [sui-stack/suins/developer/sdk/subnames](https://docs.sui.io/sui-stack/suins/developer/sdk/subnames) | L71 | js | 16 | `const editSetup = async (name: string, parentNftId: string, ` |
| 494 | [sui-stack/suins/developer/sdk/subnames](https://docs.sui.io/sui-stack/suins/developer/sdk/subnames) | L94 | js | 14 | `const extendExpiration = async (nftId: string, expirationMs:` |
| 495 | [sui-stack/suins/developer/sdk/subnames](https://docs.sui.io/sui-stack/suins/developer/sdk/subnames) | L115 | js | 19 | `const createLeafSubname = async (name: string, parentNftId: ` |
| 496 | [sui-stack/suins/developer/sdk/subnames](https://docs.sui.io/sui-stack/suins/developer/sdk/subnames) | L139 | js | 16 | `const removeLeafSubname = async (name: string, parentNftId: ` |
| 497 | [sui-stack/suins/developer/sdk/querying](https://docs.sui.io/sui-stack/suins/developer/sdk/querying) | L39 | js | 18 | `const nameRecord = await suinsClient.getNameRecord('demo.sui` |
| 498 | [sui-stack/suins/developer/sdk/querying](https://docs.sui.io/sui-stack/suins/developer/sdk/querying) | L64 | js | 10 | `const priceList = await suinsClient.getPriceList();` |
| 499 | [sui-stack/suins/developer/sdk/querying](https://docs.sui.io/sui-stack/suins/developer/sdk/querying) | L81 | js | 10 | `const renewalPriceList = await suinsClient.getRenewalPriceLi` |
| 500 | [onchain-finance/deepbook/deepbook-predict/contract-information/vault](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/vault) | L67 | move | 5 | `public fun balance(vault: &Vault): u64` |
| 501 | [onchain-finance/deepbook/deepbook-predict/contract-information/vault](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/vault) | L116 | move | 3 | `public fun accepted_quotes(predict: &Predict): &VecSet<TypeN` |
| 502 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L79 | move | 6 | `public fun owner(self: &PredictManager): address` |
| 503 | [onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/predict-manager) | L90 | move | 1 | `public fun create_manager(ctx: &mut TxContext): ID` |
| 504 | [onchain-finance/deepbook/deepbook-predict/contract-information/market-keys](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/market-keys) | L77 | move | 3 | `public fun up(oracle_id: ID, expiry: u64, strike: u64): Mark` |
| 505 | [onchain-finance/deepbook/deepbook-predict/contract-information/market-keys](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/market-keys) | L89 | move | 5 | `public fun oracle_id(key: &MarketKey): ID` |
| 506 | [onchain-finance/deepbook/deepbook-predict/contract-information/market-keys](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/market-keys) | L111 | move | 5 | `let key = market_key::up(` |
| 507 | [onchain-finance/deepbook/deepbook-predict/contract-information/market-keys](https://docs.sui.io/onchain-finance/deepbook/deepbook-predict/contract-information/market-keys) | L166 | move | 5 | `public fun new(oracle_id: ID, expiry: u64, lower_strike: u64` |

## Covered Snippets

| # | File | Line | Language | Covered By |
|---|------|------|----------|------------|
| 1 | [sui-stack/zklogin-integration/integration-guide](https://docs.sui.io/sui-stack/zklogin-integration/integration-guide) | L494 | typescript | examples/ptb-cookbook |
| 2 | [onchain-finance/fungible-tokens/create-a-fungible-token](https://docs.sui.io/onchain-finance/fungible-tokens/create-a-fungible-token) | L115 | move | examples/move/coin |
| 3 | [develop/transaction-payment/sponsor-txn](https://docs.sui.io/develop/transaction-payment/sponsor-txn) | L238 | typescript | examples/ptb-cookbook |
| 4 | [onchain-finance/deepbook/deepbookv3-sdk/flash-loans](https://docs.sui.io/onchain-finance/deepbook/deepbookv3-sdk/flash-loans) | L83 | tsx | examples/deepbook-spot |
| 5 | [onchain-finance/asset-custody/address-balances/using-address-balances](https://docs.sui.io/onchain-finance/asset-custody/address-balances/using-address-balances) | L61 | tsx | examples/ptb-cookbook |
| 6 | [develop/transactions/ptbs/ts-sdk-ptb-template](https://docs.sui.io/develop/transactions/ptbs/ts-sdk-ptb-template) | L66 | ts | examples/ptb-cookbook |
| 7 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L60 | ts | examples/ptb-cookbook |
| 8 | [develop/transactions/ptbs/building-ptb](https://docs.sui.io/develop/transactions/ptbs/building-ptb) | L305 | ts | examples/ptb-cookbook |
| 9 | [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L105 | move | examples/move/basics |
| 10 | [develop/objects/object-ownership/immutable](https://docs.sui.io/develop/objects/object-ownership/immutable) | L202 | move | examples/move/color_object |
| 11 | [develop/accessing-data/grpc/grpc-migration-cookbook](https://docs.sui.io/develop/accessing-data/grpc/grpc-migration-cookbook) | L979 | ts | examples/ptb-cookbook |

## Lint Report

**39 issues** across 27 snippets

### Missing `public` visibility on struct/enum (16 occurrences)

> Move 2024 edition requires explicit visibility on all struct declarations.
> **Fix**: Add `public` before `struct`: `public struct MyStruct has key { ... }`

| File | Line | Found |
|------|------|-------|
| [sui-stack/walrus/sui-stack-walrus-sites](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus-sites) | L86 | `struct Site` |
| [sui-stack/walrus/sui-stack-walrus-sites](https://docs.sui.io/sui-stack/walrus/sui-stack-walrus-sites) | L95 | `struct Resource` |
| [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L83 | `struct KioskName` |
| [onchain-finance/closed-loop-token/rules](https://docs.sui.io/onchain-finance/closed-loop-token/rules) | L56 | `struct Rule` |
| [onchain-finance/closed-loop-token/index](https://docs.sui.io/onchain-finance/closed-loop-token/index) | L69 | `struct Coin` |
| [onchain-finance/closed-loop-token/index](https://docs.sui.io/onchain-finance/closed-loop-token/index) | L72 | `struct Token` |
| [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L439 | `struct Event` |
| [develop/cryptography/hashing](https://docs.sui.io/develop/cryptography/hashing) | L74 | `struct Output` |
| [develop/cryptography/hashing](https://docs.sui.io/develop/cryptography/hashing) | L101 | `struct Output` |
| [develop/cryptography/ecvrf](https://docs.sui.io/develop/cryptography/ecvrf) | L91 | `struct VerifiedEvent` |
| [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L81 | `struct Rule` |
| [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L85 | `struct Config` |
| [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L141 | `struct Rule` |
| [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L145 | `struct Config` |
| [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L188 | `struct Rule` |
| [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L189 | `struct Config` |

### Legacy `option::` function-call syntax (4 occurrences)

> Move 2024 edition supports method syntax on Option.
> **Fix**: `option::some(x)` → `x.some()`, `option::is_some(&o)` → `o.is_some()`

| File | Line | Found |
|------|------|-------|
| [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L94 | `option::some()` |
| [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L96 | `option::none()` |
| [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L246 | `option::none()` |
| [develop/objects/object-ownership/wrapped](https://docs.sui.io/develop/objects/object-ownership/wrapped) | L247 | `option::none()` |

### Deprecated `transfer::` function (19 occurrences)

> Objects with `store` ability should use `public_*` variants.
> **Fix**: `transfer::transfer` → `transfer::public_transfer`, `transfer::share_object` → `transfer::public_share_object`

| File | Line | Found |
|------|------|-------|
| [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L245 | `transfer::share_object` |
| [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L179 | `transfer::share_object` |
| [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L230 | `transfer::share_object` |
| [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L237 | `transfer::transfer` |
| [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L293 | `transfer::share_object` |
| [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L300 | `transfer::transfer` |
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
