# Snippet Validation Report

| Metric | Value |
|--------|-------|
| Date | 2026-07-28T16:56:43.524Z |
| Total code blocks in docs | 1696 |
| Snippets validated | 41 |
| Passed | 20 |
| Failed | 21 |
| Skipped | 1655 |
| Duration | 66s |

## Failures

### demo::demo (docs/content/sui-stack/suins/sui-stack-suins.mdx:173)

- **Docs page**: [sui-stack/suins/sui-stack-suins](https://docs.sui.io/sui-stack/suins/sui-stack-suins)
- **Module**: `demo::demo`

```
e[0m
   [0m[34m┌─[0m ./sources/snippet.move:20:43
   [0m[34m│[0m
[0m[34m20[0m [0m[34m│[0m         let mut optional = suins.registry<[0m[31mRegistry[0m>().lookup(domain::new(name));
   [0m[34m│[0m                                           [0m[31m^^^^^^^^[0m [0m[31mUnbound type 'Registry' in current scope[0m

[0m[1m[38;5;9merror[E03006][0m[1m: unexpected name in this position[0m
   [0m[34m┌─[0m ./sources/snippet.move:20:62
   [0m[34m│[0m
[0m[34m20[0m [0m[34m│[0m         let mut optional = suins.registry<Registry>().lookup([0m[31mdomain[0m::new(name));
   [0m[34m│[0m                                                              [0m[31m^^^^^^[0m [0m[31mCould not resolve the name 'domain'[0m


Failed to build Move modules: Compilation error.
```

---

### example_package::m (docs/content/references/package-managers/package-manager-migration.mdx:105)

- **Docs page**: [references/package-managers/package-manager-migration](https://docs.sui.io/references/package-managers/package-manager-migration)
- **Module**: `example_package::m`

```
use [0m[31mexample_dependency::n[0m;
  [0m[34m│[0m     [0m[31m^^^^^^^^^^^^^^^^^^^^^[0m [0m[31mInvalid 'use'. Unbound module: 'example_dependency::n'[0m

[0m[1m[38;5;9merror[E03001][0m[1m: address with no value[0m
  [0m[34m┌─[0m ./sources/snippet.move:3:5
  [0m[34m│[0m
[0m[34m3[0m [0m[34m│[0m use [0m[31mdep_of_dep[0m::p;
  [0m[34m│[0m     [0m[31m^^^^^^^^^^[0m [0m[31maddress 'dep_of_dep' is not assigned a value[0m

[0m[1m[38;5;9merror[E03002][0m[1m: unbound module[0m
  [0m[34m┌─[0m ./sources/snippet.move:3:5
  [0m[34m│[0m
[0m[34m3[0m [0m[34m│[0m use [0m[31mdep_of_dep::p[0m;
  [0m[34m│[0m     [0m[31m^^^^^^^^^^^^^[0m [0m[31mInvalid 'use'. Unbound module: 'dep_of_dep::p'[0m


Failed to build Move modules: Compilation error.
```

---

### satoshi_flip::house_data (docs/content/references/contribute/style-guide.mdx:676)

- **Docs page**: [references/contribute/style-guide](https://docs.sui.io/references/contribute/style-guide)
- **Module**: `satoshi_flip::house_data`

```
34m│[0m   const [0m[33mEInsufficientBalance[0m: u64 = 1;
   [0m[34m│[0m         [0m[33m^^^^^^^^^^^^^^^^^^^^[0m [0m[33mThe constant 'EInsufficientBalance' is never used. Consider removing it.[0m
   [0m[34m│[0m
   [0m[34m=[0m This warning can be suppressed with '#[allow(unused_const)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

[0m[1m[38;5;9merror[E01002][0m[1m: unexpected token[0m
   [0m[34m┌─[0m ./sources/snippet.move:11:1
   [0m[34m│[0m
[0m[34m11[0m [0m[34m│[0m 
   [0m[34m│[0m [0m[31m^[0m
   [0m[34m│[0m 
   [0m[34m│[0m [0m[31mUnexpected end-of-file[0m
   [0m[34m│[0m [0m[34mExpected a module member: 'use', 'friend', 'const', 'fun', 'struct', or 'enum'[0m


Failed to build Move modules: Compilation error.
```

---

### examples::immutable_borrow (docs/content/onchain-finance/kiosk/kiosk-example.mdx:425)

- **Docs page**: [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example)
- **Module**: `examples::immutable_borrow`

```
                 [0m[34mTo satisfy the constraint, the 'store' ability would need to be added here[0m
[0m[34m  6[0m [0m[34m│[0m     [0m[31mself.borrow(cap, item_id)[0m
    [0m[34m│[0m     [0m[31m^^^^^^^^^^^^^^^^^^^^^^^^^[0m [0m[31m'store' constraint not satisifed[0m
    [0m[34m│[0m
    [0m[34m┌─[0m /home/runner/.move/git/https___github_com_MystenLabs_sui_git_027e13b2c14022b58067bd536c7e4f2afff72164/crates/sui-framework/packages/sui-framework/sources/kiosk/kiosk.move:572:28
    [0m[34m│[0m
[0m[34m572[0m [0m[34m│[0m public fun borrow<T: key + store>(self: &Kiosk, cap: &KioskOwnerCap, id: ID): &T {
    [0m[34m│[0m                            [0m[34m-----[0m [0m[34m'store' constraint declared here[0m


Failed to build Move modules: Compilation error.
```

---

### examples::mutable_borrow (docs/content/onchain-finance/kiosk/kiosk-example.mdx:441)

- **Docs page**: [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example)
- **Module**: `examples::mutable_borrow`

```
      [0m[34m-[0m [0m[34mThe type 'T' does not have the ability 'store'[0m
[0m[34m  8[0m [0m[34m│[0m     [0m[31mself.borrow_mut(cap, item_id)[0m
    [0m[34m│[0m     [0m[31m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^[0m [0m[31m'store' constraint not satisifed[0m
    [0m[34m│[0m
    [0m[34m┌─[0m /home/runner/.move/git/https___github_com_MystenLabs_sui_git_027e13b2c14022b58067bd536c7e4f2afff72164/crates/sui-framework/packages/sui-framework/sources/kiosk/kiosk.move:582:32
    [0m[34m│[0m
[0m[34m582[0m [0m[34m│[0m public fun borrow_mut<T: key + store>(self: &mut Kiosk, cap: &KioskOwnerCap, id: ID): &mut T {
    [0m[34m│[0m                                [0m[34m-----[0m [0m[34m'store' constraint declared here[0m


Failed to build Move modules: Compilation error.
```

---

### examples::kiosk_name_ext (docs/content/onchain-finance/kiosk/kiosk-apps.mdx:76)

- **Docs page**: [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps)
- **Module**: `examples::kiosk_name_ext`

```
Invalid struct declaration. Internal struct declarations are not yet supported[0m
  [0m[34m│[0m
  [0m[34m=[0m Visibility annotations are required on struct declarations from the Move 2024 edition onwards.

[0m[1m[38;5;11mwarning[W04037][0m[1m: deprecated usage[0m
   [0m[34m┌─[0m ./sources/snippet.move:18:13
   [0m[34m│[0m
[0m[34m18[0m [0m[34m│[0m     if (df::[0m[33mexists_[0m(self.uid(), KioskName {})) {
   [0m[34m│[0m             [0m[33m^^^^^^^[0m [0m[33mThe function 'sui::dynamic_field::exists_' is deprecated: Renamed to `exists`[0m
   [0m[34m│[0m
   [0m[34m=[0m This warning can be suppressed with '#[allow(deprecated_usage)]' applied to the 'module' or module member ('const', 'fun', or 'struct')


Failed to build Move modules: Compilation error.
```

---

### exploit::exploit (docs/content/getting-started/examples/lootbox-ctf.mdx:250)

- **Docs page**: [getting-started/examples/lootbox-ctf](https://docs.sui.io/getting-started/examples/lootbox-ctf)
- **Module**: `exploit::exploit`

```
ule' or module member ('const', 'fun', or 'struct')

[0m[1m[38;5;9merror[E03006][0m[1m: unexpected name in this position[0m
   [0m[34m┌─[0m ./sources/snippet.move:16:17
   [0m[34m│[0m
[0m[34m16[0m [0m[34m│[0m     let maybe = [0m[31mlootboxes[0m::open_lootbox(payment, r, ctx);
   [0m[34m│[0m                 [0m[31m^^^^^^^^^[0m [0m[31mCould not resolve the name 'lootboxes'[0m

[0m[1m[38;5;9merror[E03006][0m[1m: unexpected name in this position[0m
   [0m[34m┌─[0m ./sources/snippet.move:17:16
   [0m[34m│[0m
[0m[34m17[0m [0m[34m│[0m     let flag = [0m[31mlootboxes[0m::extract_flag(maybe);
   [0m[34m│[0m                [0m[31m^^^^^^^^^[0m [0m[31mCould not resolve the name 'lootboxes'[0m


Failed to build Move modules: Compilation error.
```

---

### conventions::request (docs/content/develop/write-move/move-best-practices.mdx:170)

- **Docs page**: [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices)
- **Module**: `conventions::request`

```
3m^^^^[0m [0m[33mThe 'data' field of the 'Receipt' type is unused[0m
  [0m[34m│[0m
  [0m[34m=[0m This warning can be suppressed with '#[allow(unused_field)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

[0m[1m[38;5;9merror[E01002][0m[1m: unexpected token[0m
   [0m[34m┌─[0m ./sources/snippet.move:13:24
   [0m[34m│[0m
[0m[34m13[0m [0m[34m│[0m public struct Request()[0m[31m;[0m
   [0m[34m│[0m                        [0m[31m^[0m
   [0m[34m│[0m                        [0m[31m│[0m
   [0m[34m│[0m                        [0m[31mUnexpected ';'[0m
   [0m[34m│[0m                        [0m[34mExpected a module member: 'use', 'friend', 'const', 'fun', 'struct', or 'enum'[0m


Failed to build Move modules: Compilation error.
```

---

### conventions::hero (docs/content/develop/write-move/move-best-practices.mdx:444)

- **Docs page**: [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices)
- **Module**: `conventions::hero`

```
h an underscore: '_hero_id'[0m
   [0m[34m│[0m
   [0m[34m=[0m This warning can be suppressed with '#[allow(unused_variable)]' applied to the 'module' or module member ('const', 'fun', or 'struct')

[0m[1m[38;5;11mwarning[W09002][0m[1m: unused variable[0m
   [0m[34m┌─[0m ./sources/snippet.move:30:5
   [0m[34m│[0m
[0m[34m30[0m [0m[34m│[0m     [0m[33mbattle_id[0m: String // id of the battle to start
   [0m[34m│[0m     [0m[33m^^^^^^^^^[0m [0m[33mUnused parameter 'battle_id'. Consider removing or prefixing with an underscore: '_battle_id'[0m
   [0m[34m│[0m
   [0m[34m=[0m This warning can be suppressed with '#[allow(unused_variable)]' applied to the 'module' or module member ('const', 'fun', or 'struct')


Failed to build Move modules: Compilation error.
```

---

### escrow::lock (docs/content/develop/publish-upgrade-packages/versioning.mdx:82)

- **Docs page**: [develop/publish-upgrade-packages/versioning](https://docs.sui.io/develop/publish-upgrade-packages/versioning)
- **Module**: `escrow::lock`

```
                              [0m[34mDid you mean: 'ID'[0m

[0m[1m[38;5;9merror[E01002][0m[1m: unexpected token[0m
  [0m[34m┌─[0m ./sources/snippet.move:4:1
  [0m[34m│[0m
[0m[34m4[0m [0m[34m│[0m [0m[31m}[0m
  [0m[34m│[0m [0m[31m^[0m
  [0m[34m│[0m [0m[31m│[0m
  [0m[34m│[0m [0m[31mUnexpected '}'[0m
  [0m[34m│[0m [0m[34mExpected '{'[0m

[0m[1m[38;5;9merror[E01002][0m[1m: unexpected token[0m
  [0m[34m┌─[0m ./sources/snippet.move:5:1
  [0m[34m│[0m
[0m[34m5[0m [0m[34m│[0m 
  [0m[34m│[0m [0m[31m^[0m
  [0m[34m│[0m 
  [0m[34m│[0m [0m[31mUnexpected end-of-file[0m
  [0m[34m│[0m [0m[34mExpected a module member: 'use', 'friend', 'const', 'fun', 'struct', or 'enum'[0m


Failed to build Move modules: Compilation error.
```

---

### example::example (docs/content/develop/publish-upgrade-packages/custom-policies.mdx:440)

- **Docs page**: [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies)
- **Module**: `example::example`

```
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING snippet_validate
[0m[1m[38;5;9merror[E01003][0m[1m: invalid modifier[0m
  [0m[34m┌─[0m ./sources/snippet.move:2:5
  [0m[34m│[0m
[0m[34m2[0m [0m[34m│[0m     [0m[31mstruct[0m Event has copy, drop { x: u64 }
  [0m[34m│[0m     [0m[31m^^^^^^[0m [0m[31mInvalid struct declaration. Internal struct declarations are not yet supported[0m
  [0m[34m│[0m
  [0m[34m=[0m Visibility annotations are required on struct declarations from the Move 2024 edition onwards.


Failed to build Move modules: Compilation error.
```

---

### example::example_module (docs/content/develop/manage-packages/move-package-management.mdx:103)

- **Docs page**: [develop/manage-packages/move-package-management](https://docs.sui.io/develop/manage-packages/move-package-management)
- **Module**: `example::example_module`

```
[0m[34m│[0m
[0m[34m3[0m [0m[34m│[0m use [0m[31mascii::ascii[0m;
  [0m[34m│[0m     [0m[31m^^^^^^^^^^^^[0m [0m[31mInvalid 'use'. Unbound module: 'ascii::ascii'[0m

[0m[1m[38;5;9merror[E03001][0m[1m: address with no value[0m
  [0m[34m┌─[0m ./sources/snippet.move:4:5
  [0m[34m│[0m
[0m[34m4[0m [0m[34m│[0m use [0m[31mascii[0m::char;
  [0m[34m│[0m     [0m[31m^^^^^[0m [0m[31maddress 'ascii' is not assigned a value[0m

[0m[1m[38;5;9merror[E03002][0m[1m: unbound module[0m
  [0m[34m┌─[0m ./sources/snippet.move:4:5
  [0m[34m│[0m
[0m[34m4[0m [0m[34m│[0m use [0m[31mascii::char[0m;
  [0m[34m│[0m     [0m[31m^^^^^^^^^^^[0m [0m[31mInvalid 'use'. Unbound module: 'ascii::char'[0m


Failed to build Move modules: Compilation error.
```

---

### test::hashing_std (docs/content/develop/cryptography/hashing.mdx:62)

- **Docs page**: [develop/cryptography/hashing](https://docs.sui.io/develop/cryptography/hashing)
- **Module**: `test::hashing_std`

```
Book, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING snippet_validate
[0m[1m[38;5;9merror[E01003][0m[1m: invalid modifier[0m
  [0m[34m┌─[0m ./sources/snippet.move:9:5
  [0m[34m│[0m
[0m[34m9[0m [0m[34m│[0m     [0m[31mstruct[0m Output has key, store {
  [0m[34m│[0m     [0m[31m^^^^^^[0m [0m[31mInvalid struct declaration. Internal struct declarations are not yet supported[0m
  [0m[34m│[0m
  [0m[34m=[0m Visibility annotations are required on struct declarations from the Move 2024 edition onwards.


Failed to build Move modules: Compilation error.
```

---

### test::hashing_sui (docs/content/develop/cryptography/hashing.mdx:89)

- **Docs page**: [develop/cryptography/hashing](https://docs.sui.io/develop/cryptography/hashing)
- **Module**: `test::hashing_sui`

```
Book, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING snippet_validate
[0m[1m[38;5;9merror[E01003][0m[1m: invalid modifier[0m
  [0m[34m┌─[0m ./sources/snippet.move:9:5
  [0m[34m│[0m
[0m[34m9[0m [0m[34m│[0m     [0m[31mstruct[0m Output has key, store {
  [0m[34m│[0m     [0m[31m^^^^^^[0m [0m[31mInvalid struct declaration. Internal struct declarations are not yet supported[0m
  [0m[34m│[0m
  [0m[34m=[0m Visibility annotations are required on struct declarations from the Move 2024 edition onwards.


Failed to build Move modules: Compilation error.
```

---

### math::ecvrf_test (docs/content/develop/cryptography/ecvrf.mdx:86)

- **Docs page**: [develop/cryptography/ecvrf](https://docs.sui.io/develop/cryptography/ecvrf)
- **Module**: `math::ecvrf_test`

```
nd SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from `Move.toml`.
INCLUDING DEPENDENCY MoveStdlib
INCLUDING DEPENDENCY Sui
BUILDING snippet_validate
[0m[1m[38;5;9merror[E01003][0m[1m: invalid modifier[0m
  [0m[34m┌─[0m ./sources/snippet.move:6:5
  [0m[34m│[0m
[0m[34m6[0m [0m[34m│[0m     [0m[31mstruct[0m VerifiedEvent has copy, drop {
  [0m[34m│[0m     [0m[31m^^^^^^[0m [0m[31mInvalid struct declaration. Internal struct declarations are not yet supported[0m
  [0m[34m│[0m
  [0m[34m=[0m Visibility annotations are required on struct declarations from the Move 2024 edition onwards.


Failed to build Move modules: Compilation error.
```

---

### flash::loan (docs/content/develop/transactions/ptbs/prog-txn-blocks.mdx:293)

- **Docs page**: [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks)
- **Module**: `flash::loan`

```
^^^[0m
  [0m[34m│[0m                                                                  [0m[31m│[0m
  [0m[34m│[0m                                                                  [0m[31mCould not resolve the name 'SUI'[0m
  [0m[34m│[0m                                                                  [0m[34mDid you mean: 'Loan'[0m

[0m[1m[38;5;9merror[E03005][0m[1m: unbound unscoped name[0m
  [0m[34m┌─[0m ./sources/snippet.move:7:74
  [0m[34m│[0m
[0m[34m7[0m [0m[34m│[0m public fun repay(bank: &mut Bank, loan: Loan, repayment: Balance<SUI>) { [0m[31mERROR[0m }
  [0m[34m│[0m                                                                          [0m[31m^^^^^[0m [0m[31mUnbound constant 'ERROR'[0m


Failed to build Move modules: Compilation error.
```

---

### examples::shared_object_auth (docs/content/develop/objects/transfers/transfer-to-object.mdx:174)

- **Docs page**: [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object)
- **Module**: `examples::shared_object_auth`

```
[0m use [0m[31mtransfer[0m::Receiving;
  [0m[34m│[0m     [0m[31m^^^^^^^^[0m [0m[31maddress 'transfer' is not assigned a value[0m

[0m[1m[38;5;9merror[E03002][0m[1m: unbound module[0m
  [0m[34m┌─[0m ./sources/snippet.move:3:5
  [0m[34m│[0m
[0m[34m3[0m [0m[34m│[0m use [0m[31mtransfer::Receiving[0m;
  [0m[34m│[0m     [0m[31m^^^^^^^^^^^^^^^^^^^[0m [0m[31mInvalid 'use'. Unbound module: 'transfer::Receiving'[0m

[0m[1m[38;5;9merror[E03004][0m[1m: unbound type[0m
   [0m[34m┌─[0m ./sources/snippet.move:30:11
   [0m[34m│[0m
[0m[34m30[0m [0m[34m│[0m     sent: [0m[31mReceiving[0m<T>,
   [0m[34m│[0m           [0m[31m^^^^^^^^^[0m [0m[31mUnbound type 'Receiving' in current scope[0m


Failed to build Move modules: Compilation error.
```

---

### examples::soul_bound (docs/content/develop/objects/transfers/transfer-to-object.mdx:346)

- **Docs page**: [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object)
- **Module**: `examples::soul_bound`

```
[38;5;9merror[E03002][0m[1m: unbound module[0m
  [0m[34m┌─[0m ./sources/snippet.move:3:22
  [0m[34m│[0m
[0m[34m3[0m [0m[34m│[0m use transfer::{Self, [0m[31mReceiving[0m};
  [0m[34m│[0m                      [0m[31m^^^^^^^^^[0m [0m[31mInvalid 'use'. Unbound module: 'transfer::Receiving'[0m

[0m[1m[38;5;9merror[E03004][0m[1m: unbound type[0m
   [0m[34m┌─[0m ./sources/snippet.move:31:60
   [0m[34m│[0m
[0m[34m31[0m [0m[34m│[0m public fun get_object(parent: &mut UID, soul_bound_ticket: [0m[31mReceiving[0m<SoulBound>): (SoulBound, ReturnReceipt) {
   [0m[34m│[0m                                                            [0m[31m^^^^^^^^^[0m [0m[31mUnbound type 'Receiving' in current scope[0m


Failed to build Move modules: Compilation error.
```

---

### examples::dummy_rule (docs/content/develop/objects/transfers/transfer-policies.mdx:69)

- **Docs page**: [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies)
- **Module**: `examples::dummy_rule`

```
has drop {}
   [0m[34m│[0m     [0m[31m^^^^^^[0m [0m[31mInvalid struct declaration. Internal struct declarations are not yet supported[0m
   [0m[34m│[0m
   [0m[34m=[0m Visibility annotations are required on struct declarations from the Move 2024 edition onwards.

[0m[1m[38;5;9merror[E01003][0m[1m: invalid modifier[0m
   [0m[34m┌─[0m ./sources/snippet.move:17:5
   [0m[34m│[0m
[0m[34m17[0m [0m[34m│[0m     [0m[31mstruct[0m Config has store, drop {}
   [0m[34m│[0m     [0m[31m^^^^^^[0m [0m[31mInvalid struct declaration. Internal struct declarations are not yet supported[0m
   [0m[34m│[0m
   [0m[34m=[0m Visibility annotations are required on struct declarations from the Move 2024 edition onwards.


Failed to build Move modules: Compilation error.
```

---

### examples::royalty_rule (docs/content/develop/objects/transfers/transfer-policies.mdx:137)

- **Docs page**: [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies)
- **Module**: `examples::royalty_rule`

```
e name 'coin'[0m
   [0m[34m│[0m                   [0m[34mDid you mean: 'ID'[0m

[0m[1m[38;5;9merror[E03006][0m[1m: unexpected name in this position[0m
   [0m[34m┌─[0m ./sources/snippet.move:37:9
   [0m[34m│[0m
[0m[34m37[0m [0m[34m│[0m         [0m[31mpolicy[0m::add_to_balance(Rule {}, policy, fee);
   [0m[34m│[0m         [0m[31m^^^^^^[0m [0m[31mCould not resolve the name 'policy'[0m

[0m[1m[38;5;9merror[E03006][0m[1m: unexpected name in this position[0m
   [0m[34m┌─[0m ./sources/snippet.move:38:9
   [0m[34m│[0m
[0m[34m38[0m [0m[34m│[0m         [0m[31mpolicy[0m::add_receipt(Rule {}, request)
   [0m[34m│[0m         [0m[31m^^^^^^[0m [0m[31mCould not resolve the name 'policy'[0m


Failed to build Move modules: Compilation error.
```

---

### examples::time_rule (docs/content/develop/objects/transfers/transfer-policies.mdx:184)

- **Docs page**: [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies)
- **Module**: `examples::time_rule`

```
[E01002][0m[1m: unexpected token[0m
   [0m[34m┌─[0m ./sources/snippet.move:24:9
   [0m[34m│[0m
[0m[34m24[0m [0m[34m│[0m         [0m[31massert[0m!(clock::timestamp_ms(clock) >= config.start_time, ETooSoon);
   [0m[34m│[0m         [0m[31m^^^^^^[0m
   [0m[34m│[0m         [0m[31m│[0m
   [0m[34m│[0m         [0m[31mUnexpected 'assert'[0m
   [0m[34m│[0m         [0m[34mExpected ';'[0m

[0m[1m[38;5;9merror[E03006][0m[1m: unexpected name in this position[0m
   [0m[34m┌─[0m ./sources/snippet.move:25:9
   [0m[34m│[0m
[0m[34m25[0m [0m[34m│[0m         [0m[31mpolicy[0m::add_receipt(Rule {}, request)
   [0m[34m│[0m         [0m[31m^^^^^^[0m [0m[31mCould not resolve the name 'policy'[0m


Failed to build Move modules: Compilation error.
```

---

## All Results

| # | File | Line | Module | Status | Duration |
|---|------|------|--------|--------|----------|
| 1 | [references/release-notes](https://docs.sui.io/references/release-notes) | L773 | `flash::loan` | PASS | 7.3s |
| 2 | [sui-stack/suins/sui-stack-suins](https://docs.sui.io/sui-stack/suins/sui-stack-suins) | L173 | `demo::demo` | **FAIL** | 1.5s |
| 3 | [references/package-managers/package-manager-migration](https://docs.sui.io/references/package-managers/package-manager-migration) | L105 | `example_package::m` | **FAIL** | 0.5s |
| 4 | [references/contribute/style-guide](https://docs.sui.io/references/contribute/style-guide) | L676 | `satoshi_flip::house_data` | **FAIL** | 2.0s |
| 5 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L425 | `examples::immutable_borrow` | **FAIL** | 2.5s |
| 6 | [onchain-finance/kiosk/kiosk-example](https://docs.sui.io/onchain-finance/kiosk/kiosk-example) | L441 | `examples::mutable_borrow` | **FAIL** | 1.7s |
| 7 | [onchain-finance/kiosk/kiosk-apps](https://docs.sui.io/onchain-finance/kiosk/kiosk-apps) | L76 | `examples::kiosk_name_ext` | **FAIL** | 1.8s |
| 8 | [getting-started/examples/lootbox-ctf](https://docs.sui.io/getting-started/examples/lootbox-ctf) | L250 | `exploit::exploit` | **FAIL** | 2.3s |
| 9 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L80 | `conventions::wallet` | PASS | 2.0s |
| 10 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L93 | `conventions::comments` | PASS | 1.7s |
| 11 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L147 | `conventions::constants` | PASS | 0.9s |
| 12 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L170 | `conventions::request` | **FAIL** | 0.7s |
| 13 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L232 | `conventions::shop` | PASS | 1.2s |
| 14 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L254 | `conventions::amm` | PASS | 2.0s |
| 15 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L291 | `conventions::amm` | PASS | 1.8s |
| 16 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L323 | `conventions::access_control` | PASS | 1.8s |
| 17 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L367 | `conventions::vesting_wallet` | PASS | 2.5s |
| 18 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L407 | `conventions::social_network` | PASS | 0.7s |
| 19 | [develop/write-move/move-best-practices](https://docs.sui.io/develop/write-move/move-best-practices) | L444 | `conventions::hero` | **FAIL** | 1.6s |
| 20 | [develop/testing-debugging/testing](https://docs.sui.io/develop/testing-debugging/testing) | L100 | `my_package::my_tests` | PASS | 1.1s |
| 21 | [develop/publish-upgrade-packages/versioning](https://docs.sui.io/develop/publish-upgrade-packages/versioning) | L82 | `escrow::lock` | **FAIL** | 1.1s |
| 22 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L171 | `example::counter` | PASS | 0.9s |
| 23 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L203 | `example::counter` | PASS | 0.7s |
| 24 | [develop/publish-upgrade-packages/upgrade](https://docs.sui.io/develop/publish-upgrade-packages/upgrade) | L257 | `example::counter` | PASS | 2.1s |
| 25 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L192 | `policy::day_of_week` | PASS | 2.2s |
| 26 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L276 | `policy::day_of_week` | PASS | 2.0s |
| 27 | [develop/publish-upgrade-packages/custom-policies](https://docs.sui.io/develop/publish-upgrade-packages/custom-policies) | L440 | `example::example` | **FAIL** | 0.6s |
| 28 | [develop/manage-packages/move-package-management](https://docs.sui.io/develop/manage-packages/move-package-management) | L103 | `example::example_module` | **FAIL** | 0.6s |
| 29 | [develop/cryptography/hashing](https://docs.sui.io/develop/cryptography/hashing) | L62 | `test::hashing_std` | **FAIL** | 2.0s |
| 30 | [develop/cryptography/hashing](https://docs.sui.io/develop/cryptography/hashing) | L89 | `test::hashing_sui` | **FAIL** | 3.5s |
| 31 | [develop/cryptography/ecvrf](https://docs.sui.io/develop/cryptography/ecvrf) | L86 | `math::ecvrf_test` | **FAIL** | 1.9s |
| 32 | [develop/accessing-data/authenticated-events](https://docs.sui.io/develop/accessing-data/authenticated-events) | L88 | `my_package::my_module` | PASS | 2.1s |
| 33 | [develop/transactions/ptbs/prog-txn-blocks](https://docs.sui.io/develop/transactions/ptbs/prog-txn-blocks) | L293 | `flash::loan` | **FAIL** | 0.4s |
| 34 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L174 | `examples::shared_object_auth` | **FAIL** | 0.6s |
| 35 | [develop/objects/transfers/transfer-to-object](https://docs.sui.io/develop/objects/transfers/transfer-to-object) | L346 | `examples::soul_bound` | **FAIL** | 0.4s |
| 36 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L69 | `examples::dummy_rule` | **FAIL** | 2.2s |
| 37 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L137 | `examples::royalty_rule` | **FAIL** | 0.5s |
| 38 | [develop/objects/transfers/transfer-policies](https://docs.sui.io/develop/objects/transfers/transfer-policies) | L184 | `examples::time_rule` | **FAIL** | 2.0s |
| 39 | [develop/objects/transfers/custom-rules](https://docs.sui.io/develop/objects/transfers/custom-rules) | L80 | `examples::custom_transfer` | PASS | 0.6s |
| 40 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L138 | `capy::capy_items` | PASS | 0.7s |
| 41 | [develop/objects/display/using-display](https://docs.sui.io/develop/objects/display/using-display) | L158 | `capy::utility` | PASS | 0.6s |