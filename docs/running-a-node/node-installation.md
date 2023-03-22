---
sidebar_position: 2
---

# Node Installation
This guide explains how to install and run an BonusBlock full node.

:::note
If you have already tried running a BonusBlock node before, you may want to remove previous configuration and data, refer to [Cleaning up](../becoming-a-validator/troubleshooting#cleaning-up).
:::


## Build `bonus-blockd` from source

### Clone the repository

```bash
cd $HOME
git clone https://github.com/BBlockLabs/BonusBlock-chain
cd BonusBlock-chain
```

### Build `bonus-blockd`
Build and install the `bonus-blockd` daemon:
```bash
make build
```
Confirm that the installation has been completed by running the following command:
```bash
bonus-blockd --help
```

### Initialize the node
Initialize the genesis.json file that is required to establish a network. You will also need to choose a moniker for your node,
which is the name that will appear on the BonusBlock's Testnet <a className= "external" href="https://explorer-testnet.bonusblock.io/" target="_blank">block explorer</a> once you will start validating.

```bash
bonus-blockd init [moniker] --chain-id=[chainid]
```

For example, for the BonusBlock test network and `my-cool-moniker` as a node name use:
```bash
bonus-blockd init my-cool-moniker --chain-id=blocktopia-01
```
