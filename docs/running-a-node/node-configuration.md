---
sidebar_position: 4
---

# Node Configuration

By default, the init command creates your `~/.bonusblock` directory with subfolders config and data. In the config directory, the most important files for configuration are `app.toml` and `config.toml`. You can configure your node via editing these files.<br/>

The basic configurations are included in this document. For more details about configs, review the `app.toml` and `config.toml` files.

## Main configuration in config.toml

:::note
Make sure that all configured ports are accessible from an outside notwork.
:::
Default ports:
* RPC - 26657
* P2P - 26656
* REST - 1317

Adjusting the `config.toml` file of a node is an important step in optimizing its performance, security, and reliability.<br/>
The `config.toml` file contains low-level configuration settings for the Cosmos node software, such as network settings, database settings, logging settings, and security settings. These settings are generally used to customize the behavior of the underlying software and are not specific to the Cosmos blockchain.<br/>
The various parts of the `config.toml` configuration file:

```text
proxy_app = "[PROTOCOL]://[HOST_ADDRESS]:[PORT]"
```
ProxyApp is the TCP or UNIX socket address of the ABCI application, or the name of an ABCI application compiled in with the binary.


```text
moniker = "[A_CUSTOM_NAME]"
```
Moniker is a custom human-readable name for this node. Make sure that the moniker is unique and descriptive.

```text
genesis_file = "[PATH_TO_GENESIS_FILE]"
```
Path to the JSON file that contains the initial validator set and other metadata.

```text
priv_validator_key_file = "[PATH_TO_VALIDATOR_PRIVATE_KEY]"
```
Path to the JSON file contains the private key of your validator, which is used to sign blocks and votes. Make sure that this file is stored securely and is not accessible to unauthorized users.

```text
[p2p]
laddr = "tcp://[IP_ADDRESS]:[PORT]"
```
laddr is the address to listen for incoming connections in the peer-to-peer network.<br/>

```text
external_address = "[IP_ADDRESS]:[PORT]"
```
Make sure that the `external_address` is reachable from an outside network and coherent to your desired network topology to avoid DoS attacks. In most cases it should be matching your nodes external address.

Additional parameters you may want to configure include:
- Connection limits: The `max_open_connections` setting in the `config.toml` file of the sentry node can be used to limit the number of incoming connections. This can help prevent the node from being overloaded with connections and reduce the risk of a DoS attack. On the other hand, higher `max_open_connections` can improve network connectivity.
- Adjust the `timeout_commit setting`: This setting determines how long your validator node will wait for other validators to commit a block before considering the block final. Adjusting this value can help optimize block confirmation times.
- Review the `mempool_cache_size` and `max_txs_bytes` settings: These settings determine the maximum size of the mempool cache and transactions, respectively. Make sure that these values are appropriate for your network's transaction volume.
- Consider setting the `log_level` setting to an appropriate value: This setting determines the level of logging output that your node will generate. Setting this to a lower level can help reduce disk space usage.


## Cosmos SDK configuration via app.toml
The app.toml file, contains settings that are used to configure the behavior of the Cosmos SDK modules that the node runs, such as the staking module, governance module, and so on.<br/>

The various parts of the `app.toml` configuration file:

```text
[api]
address = "tcp://[HOST_NAME]:[PORT]"
```
where address defines the API server to listen on.

```text
[grpc]
address = "tcp://[HOST_NAME]:[PORT]"
```
where address defines the gRPC server address to bind to.

Please make sure you are fully aware of the changes you are applying. Depending on your needs, you may want to set up the following fields:
- Consider setting the `fast_sync` setting to `true`: This setting can help your node perform a fast initial sync of the blockchain.
- Set up the `peer-gossip-timeout`: This setting determines how long the node will wait for responses from other nodes on the network. If a node does not respond within this timeout period, it will be considered unreachable.
- Configure the `index-events`: This setting determines which events will be indexed by the node. By default, only a few key events are indexed, but it may be useful to index additional events depending on the needs of the network.
