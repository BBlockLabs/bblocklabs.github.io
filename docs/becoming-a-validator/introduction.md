---
sidebar_position: 1
---

# Introduction to Validating

BonusBlock is a Proof of Stake (PoS) blockchain based on the <a className= "external" href="https://tendermint.com/core/" target="_blank">Tendermint</a> consensus engine, which is considered to be the golden standard for <a className= "external" href="https://en.wikipedia.org/wiki/Byzantine_fault" target="_blank">BFT</a>-based consensus mechanisms. As a consequence, validators participate in the consensus protocol by proposing new blocks and receiving staking rewards in return. Those rewards are split between delegators proportionally to the delegation amounts, while the commission fees are instead credited to the validator itself.

Validators need to be in the active set in order to let their delegators earn rewards. The active set is the list of validators that have enough weight (i.e. voting power) to be included in the active set. The weight of a validator is directly proportional to the amount of the delegated tokens that have been delegated to it. Just as a reference, the active set for chains built with the Cosmos SDK usually varies between 50 and 150.

Validators participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key. Validator candidates can bond their own `$BONUS` or have `$BONUS` delegated or staked to them by token holders.


## Slashing

Slashing is the mechanism that penalizes validators (and consequently their delegators) for misbehaving.

Validators need to be careful in adopting the necessary measures to prevent being slashed, as the funds of both the validator and its delegators are subjected to slashing penalties.

Misbehaviors subjected to slashing include:
* Downtime (soft slashing)
When a validator is offline and does not participate in block signing for a certain amount of time, it gets slashed. Slashing leads to a small loss of staked tokens, on top of not earning new rewards for the duration of the downtime.

* Double signing (hard slashing)
Double signing occurs when a validator uses its private keys to sign multiple blocks at the same time. The penalty is considerably higher, as it involves a higher loss of staked tokens, jail time for the validator, and an unbonding time for the delegator tokens (during which delegators stop gaining rewards)


## Considerations

- **Technical requirements:** To run a validator node, you need to have a dedicated server with sufficient computing power, storage, and bandwidth. You will also need to install and configure the appropriate software and any additional tools you plan to use (such as monitoring software).

- **Security:** Running a validator node involves holding a significant amount of cryptocurrency, so security is critical. You need to take appropriate steps to secure your server, including setting up firewalls, using strong passwords, and enabling encryption. You should also consider using hardware security modules (HSMs) to secure your private keys.

- **Maintainance:**
  Successful validation requires the efforts of multiple highly skilled individuals and continuous operational attention. You should be able to promptly
  respond to attacks, outages, and handle software updates to accommodate protocol upgrades and bug fixes. These activities require substantial vigilance.

- **Operational Costs:** Running a validator can be a profitable activity, especially if your services are reliable and your credibility is high. Depending on your infrastructure, you may incur considerable operational costs. Handle your costs appropriately in order to avoid inefficiencies, but never neglect security and reliability.

- **Governance:** Validators are elected by delegators who stake their cryptocurrency with them. Participating in governance by voting on proposals helps establish a stronger relationship with delegators.


## Tips

- Engage with the community on a regular basis, as this is key to attracting delegators and building a reputation. It is valuable to be active on Discord and nurture relationships with other validators

- Build tools for the ecosystem, and contribute with your knowledge and support. Proactively helping in growing the ecosystem is an effective way to demonstrate your credibility.

- Set up a website for your validator operations. This can include information about your validator, your team, and any additional services you may offer.

- Develop a social media strategy to promote your validator. This can include creating a Twitter account, publishing regular blog posts, and engaging with the community on Discord or other forums.

- Set up a website. This can enhance the credibility of your validator, and provide useful information to attract delegators.
