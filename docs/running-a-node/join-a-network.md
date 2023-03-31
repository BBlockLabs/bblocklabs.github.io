---
sidebar_position: 5
---

# Join a Network
After successfully [installing and configuring your node](../running-a-node/node-installation) you may try connecting to the network.

## Retrieve the Genesis file
The first step is to download the Genesis file, by fetching it from an available node:

```bash
cd $HOME
curl https://[NODE-ADDRESS]/genesis? | jq '.result.genesis' > ~/.bonusblock/config/genesis.json
```
As an example you can get it from BonusBlock sentry node:
```bash
cd $HOME
curl https://bonusblock-testnet.alter.network/genesis? | jq '.result.genesis' > ~/.bonusblock/config/genesis.json
```

## Start bonus-blockd
Start the `bonus-blockd` and join the network.

Add known working comma separated sentry nodes to `config.toml`.
See the full list of testnet nodes at [Testnet (blocktopia-01)](../connecting-to-the-network/testnet)
```bash
PEERS=[NODE-ID]@[NODE-ADDRESS]:[PORT],[NODE1-ID]@[NODE1-ADDRESS]:[PORT]
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.bonusblock/config/config.toml
```

As an example to connect to BonusBlock sentry node use:
```bash
PEERS=e5e04918240cfe63e20059a8abcbe62f7eb05036@bonusblock-testnet-p2p.alter.network:26656
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.bonusblock/config/config.toml
```

To start BonusBlock node in interactive (foreground) mode, use the following command:
```bash
bonus-blockd start
```
You can sync from a specific block by adding the flag: `--halt-height [blockheight]`.
