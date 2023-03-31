---
sidebar_position: 3
---

# Prepare the Account and Keys

Create a key to hold your account. Once you run this command, you may be prompted with a password dialogue, where you need to set up a password for your keyring. This password encrypts the private key of your node.

```bash
bonus-blockd keys add [account-name]
```

For example to create an account with name `my-node` run:

```bash
bonus-blockd keys add my-node
```

You see an output similar to the following, containing account details and the mnemonic phrase that is very crucial to recover the account.

```text
- name: my-node
  type: local
  address: bonus1kwpvzwtdd8qs27n7tpfr9awtfa7w5xgr974f2q
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A7dKw8Bs4IKyYANqRBRmuZZovpwJOAbLmOssp+is7h+j"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

picnic able angle merit arctic route resemble purity bone become match firm enjoy stem dry cake add elite filter point try wet earn blind
```
## Removing keys
To remove the key use the following command:
```bash
bonus-blockd keys remove [account-name]
```

## Resetting the keychain
If you lost the password for the keychain you will have to remove the key hash and all the keys that were encrypted with it
:::warning
The following commands will remove all previously created keys!
:::

```bash
rm ~/.bonusblock/keyhash
rm ~/.bonusblock/*.address
rm ~/.bonusblock/*.info
```