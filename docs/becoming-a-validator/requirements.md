---
sidebar_position: 2
---

# Validator Requirements

Validators should rely on one or more data center locations with redundant power, networking, firewalls, HSMs,  servers, and storage backups.


BonusBlock network requirements are expected to be low initially, as the current testnet requires minimal resources. Bandwidth, CPU, and memory requirements rise as the network grows. Large hard drives are recommended for storing years of blockchain history.

Listed below are the technical requirements to validate in the BonusBlock Network.


## Minimum Hardware requirements

We expect that a modest level of hardware specifications is initially needed and might rise as network use increases. Participating in the testnet is the best way to learn more. Below are the Hardware specifications:

The following hardware requirements are expected:
- Linux distribution
- x86_64 processor
- 16 GB RAM
- 500 GB of storage\*

\* Storage size requirement will increase as new blocks are generated.


## Bandwidth requirements

We recommend that the data center nodes connect only to trusted full nodes in the cloud or other validators that know each other socially. This relieves the data center node from the burden of mitigating denial-of-service attacks.

Ultimately, as the network becomes more heavily used, multi-gigabyte per day bandwidth is very realistic.

## Security

### Key management

It is critical that an attacker cannot steal a validator's private key, as the entire stake delegated to the compromised validator is at risk. Hardware security modules are an important strategy for mitigating this risk.

Validators are expected to run an HSM that supports ed25519 keys. Here are potential options:

- YubiHSM 2
- Ledger Nano S/X
- Ledger BOLOS SGX enclave
- Thales nShield support

The BBlock Labs team does not recommend a particular HSM option. The community is encouraged to bolster the effort to improve HSMs and the security of key management.


### Sentry Nodes (DDOS Protection)

Denial-of-service attacks occur when an attacker sends a flood of internet traffic to an IP address to prevent the server at the IP address from connecting to the internet.

An attacker that scans the network, can try to learn the IP address of various validator nodes and disconnect them from communication by flooding them with traffic.

One recommended way to mitigate these risks is for validators to carefully structure their network topology in a so-called **sentry node architecture**.

Validator nodes are expected to connect only to full-nodes they trust because they operate them themselves or are run by other validators they know socially. Validator nodes may run data centers that provide direct links to the networks of major cloud providers. The validator can use those links to connect to sentry nodes in the cloud. This shifts the burden of denial-of-service from the validator's node directly to its sentry nodes, and may require new sentry nodes to be spun up or activated to mitigate attacks on existing ones.

Sentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in private IP space, an internet-based attack cannot disturb the sentry nodes directly. Sentry nodes ensure validator block proposals and votes always make it to the rest of the network.

It is expected that good operating procedures on the part of validators completely mitigate these threats.

If multiple sentry nodes are being used, load balancing can be used to distribute incoming traffic across the nodes. This can help prevent any single node from being overwhelmed by traffic and reduce the risk of a DoS attack.

For more on sentry node architecture, you can have a look at:
- <a className= "external" href="https://forum.cosmos.network/t/sentry-node-architecture-overview/454" target="_blank">Cosmos forum post</a>

- <a className= "external" href="https://medium.com/@kidinamoto/tech-choices-for-cosmos-validators-27c7242061ea" target="_blank">Medium Article on sentry nodes architecture</a>

### Firewalls
A firewall uses predetermined rules to filter incoming and outgoing traffic, by blocking suspicious requests. A properly configured VPS firewall will block all connections to ports that are not used by any legitimate services. Firewalls help to stop attacks and threats that can lead to outages or server takeovers. For example, you can set up your firewall to have the necessary ports only open to sentry nodes.

### SSH keys
When setting up a validator on an instance, keep in mind that SSH keys are more difficult to hack than passwords, as SSH keys can be up to 4096 bits in length and are typically at least 1024 bits long ( which is the security equivalent of a 12 characters password)
Also, SSH keys are more robust than passwords against compromises on the server-side, as even if the server is compromised, your SSH key remains safe. The SSH key remains on the client-side and no secret value is ever sent to the server
As the SSH key is stored on a device, keep in mind that you should protect the key with a passphrase( to defend your SSH key in case the device gets compromised). Make sure to securely back up your SSH keys.

### Dedicated Server and Auditing
Try using a dedicated server, without unnecessary services. This will minimize the attack surface. Keep in mind using auditing tools to perform in-depth security scans. This will help test security defenses and enhance system hardening, Keep your operating system updated and dependencies updated, as doing so will help protect against vulnerabilities
