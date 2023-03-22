---
sidebar_position: 1
---

# Prerequisites

This guide explains what are the requirements to install and run an BonusBlock validator node.


## Hardware requirements

The following hardware requirements are expected:
- Linux distribution
- x86_64 processor
- 16 GB RAM
- 500 GB of storage\*

\* Storage size requirement will increase as new blocks are generated.

## Installing Prerequisites

```bash
# updates and upgrades the list of local packages
sudo apt update && sudo apt upgrade -y

# installs build-essential package, make, curl, jq and git
sudo apt install build-essential curl make jq git -y

```

## Installing Go
Go Version 1.19 or higher is required to run an BonusBlock node. 

You may follow an <a className= "external" href="https://golang.org/doc/install" target="_blank">official guide</a>, or follow our instructions.

As an example, to install Go version `1.20.2` you can run:
```bash
cd $HOME
wget https://go.dev/dl/go1.20.2.linux-amd64.tar.gz
sudo rm -rf /usr/local/go && tar -C /usr/local -xzf go1.20.2.linux-amd64.tar.gz
```

Set up Go environment variables by running:
```bash
cd $HOME
echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> ~/.bashrc
source ~/.bashrc
```
