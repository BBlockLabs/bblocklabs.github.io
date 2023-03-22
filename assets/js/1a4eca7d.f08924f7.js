"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},i="About BonusBlock",s={unversionedId:"overview/about",id:"overview/about",title:"About BonusBlock",description:"-----------------------",source:"@site/docs/overview/about.md",sourceDirName:"overview",slug:"/overview/about",permalink:"/docs/overview/about",draft:!1,tags:[],version:"current",lastUpdatedAt:1679494811,formattedLastUpdatedAt:"22 Mar 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Connect with Community",permalink:"/docs/overview/connect-with-community"}},l={},c=[{value:"The mission",id:"the-mission",level:2},{value:"Architectural Overview",id:"architectural-overview",level:2},{value:"Smart Contracts",id:"smart-contracts",level:2},{value:"The economy of the network",id:"the-economy-of-the-network",level:2},{value:"Reward Distribution based on inflation rewards",id:"reward-distribution-based-on-inflation-rewards",level:3},{value:"Shared gas fees",id:"shared-gas-fees",level:3},{value:"Reward pool",id:"reward-pool",level:3},{value:"Governance state",id:"governance-state",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about-bonusblock"},"About BonusBlock"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When it comes to blockchain networks and dApps, we can find many. The level of sophistication of how they work and how they incentivize users is different. BonusBlock is a simple, yet unique blockchain network that rewards users for on-chain activity across Web3 and provides an incentive to build healthier relationships, loyalty, and community engagement with project stakeholders."),(0,o.kt)("h2",{id:"the-mission"},"The mission"),(0,o.kt)("p",null,"Primarily the mission is to assist in Web3 adoption by supporting networks and decentralized application users with rewards determined by their on-chain activity."),(0,o.kt)("p",null,"Rewards play an important role in incentivizing user engagement with blockchain-based products and can help to increase overall adoption and usage of the network. By providing users with incentives for their activity, blockchain-based products can create a more engaging and rewarding user experience, and improve relationships and loyalty towards users, which can help to drive growth and success for the network and decentralized applications. Such an approach will engage projects to reward users who are most active on a daily basis, as well as compete with other projects for their users' trust."),(0,o.kt)("h2",{id:"architectural-overview"},"Architectural Overview"),(0,o.kt)("p",null,"BonusBlock is a Cosmos SDK blockchain powered by ",(0,o.kt)("a",{className:"external",href:"https://tendermint.com/",target:"_blank"},"Tendermint"),". The network uses modified Cosmos modules to manage inflation and rewards system, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minting - Responsible for minting tokens and managing inflation."),(0,o.kt)("li",{parentName:"ul"},"CosmWasm - A runtime for WebAssembly Smart Contracts."),(0,o.kt)("li",{parentName:"ul"},"Staking - Manages the voting power of validators."),(0,o.kt)("li",{parentName:"ul"},"Governance - Supports the one-vote-per-token voting and governance system for token holders."),(0,o.kt)("li",{parentName:"ul"},"IBC - Inter-Blockchain Communication protocol that enables asset transfers across Cosmos blockchains.")),(0,o.kt)("p",null,"In addition to using the predefined Cosmos modules, BonusBlock uses four custom modules for additional features of the network:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Machine Learning interface - tracks and summarises data from blockchain oracles for each wallet activity, classifying the actions per action, per product, and per network."),(0,o.kt)("li",{parentName:"ul"},"Wallet Activity Tracking - This module enables to identify swiftly the wallet interaction"),(0,o.kt)("li",{parentName:"ul"},"Reward system - deploying on-chain data about distributed rewards based on activity, generating smart contract per user with all relevant data"),(0,o.kt)("li",{parentName:"ul"},"Native token multiplier - an algorithm that determines the increased reward distribution based on how many tokens the user is staking. The larger the amount of tokens staked, the higher the multiplier of rewards")),(0,o.kt)("p",null,"BonusBlock creates a Cosmos SDK-based chain with support for WASM smart contract execution that rewards users for doing their daily on-chain activity. The combination of both predefined Cosmos modules and custom BonusBlock modules allows the network to deliver the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reward system for users' activity"),(0,o.kt)("li",{parentName:"ul"},"Smart interface with Machine Learning implementation to follow on-chain activity for each user"),(0,o.kt)("li",{parentName:"ul"},"Manage smart contract data as a user"),(0,o.kt)("li",{parentName:"ul"},"Multiplier system for larger reward distribution based on staking")),(0,o.kt)("p",null,"The network is using blockchain oracles to retrieve on-chain data activity for all wallets on Web3. The key to the oracle's functionality is its ability to provide reliable and accurate data to the blockchain. To achieve this, oracles use a variety of methods to verify the data they collect, including cryptographic proofs, consensus algorithms, and reputation systems."),(0,o.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("p",null,"The BonusBlock blockchain supports Smart Contract deployment. Any CosmWasm smart contract flavor that is supported by Cosmos SDK can be deployed and run on the BonusBlock. CosmWasm also allows multi-chain contracts to be built, so you can migrate existing contracts to the BonusBlock chain due to its high interoperability and independence from the host."),(0,o.kt)("h2",{id:"the-economy-of-the-network"},"The economy of the network"),(0,o.kt)("p",null,"BonusBlock focuses to resolve Web3 adoption with rewarding users based on their activity on-chain. The inflation coming from staking covers minimal distribution mechanisms of the network and incentives users to stake more. Meaning, users staking $BONUS will unlock a better multiplier for their rewards calculation algorithm provided by one of the modules on BonusBlock network. This is similar to how users are being rewarded by securing the network security and consensus."),(0,o.kt)("p",null,"BonusBlocks intends to implement three mechanisms for Web3 networks and projects to utilize:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"BonusBlock reward distribution based on inflation rewards\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Share of gas fees generated\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"External reward pool (optional to networks and projects)\n")))),(0,o.kt)("p",null,"BonusBlocks supports every user on Web3 to register their profile and add their wallet to receive on a weekly basis rewards based on their on-chain activity. Users will be able to register and connect their new wallets. If users want to track more than five wallets, they will need to make sure to meet criteria to unlock another 5 wallet connections. This approach mitigates malicious parties."),(0,o.kt)("h3",{id:"reward-distribution-based-on-inflation-rewards"},"Reward Distribution based on inflation rewards"),(0,o.kt)("p",null,"The registered user reward is compensated by the inflationary state of the network. The inflation is set to be between 10 \u2013 24%. Calculation mechanism based on various types of on-chain activity that are grouped by:\nNetwork interactions (governance and interaction with staking)\nDecentralised application interactions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NFT \u2013 mint, sell, burn, auction (regular NFT transfers are excluded)"),(0,o.kt)("li",{parentName:"ul"},"DeFi \u2013 swapping, liquidity providing, bonding, Loan products - borrower actions, creditor actions"),(0,o.kt)("li",{parentName:"ul"},"Gaming \u2013 interaction with the platform, in-game purchases with wallet"),(0,o.kt)("li",{parentName:"ul"},"Metaverse \u2013 interacton with the platform"),(0,o.kt)("li",{parentName:"ul"},"Social platform interactions and on-chain activity"),(0,o.kt)("li",{parentName:"ul"},"Other (un-categorised values that will be defined within time of setups)")),(0,o.kt)("h3",{id:"shared-gas-fees"},"Shared gas fees"),(0,o.kt)("p",null,"Generated gas fees are part of the rewards distributed to the users, meaning, BonusBlock activity on-chain will be rewarded to the users generating transactions. Part of the fees will be distributed to the BonusBlock treasury for operational costs coverage."),(0,o.kt)("h3",{id:"reward-pool"},"Reward pool"),(0,o.kt)("p",null,"Any listed blockchain network or decentralized application that is supported by BonusBlock network will be able to add an extra reward pool for their users. Projects can create a smart contract pool that is connected with BonusBlock users activity, where distribution is handled by on-chain activity data. Extra incentivisation can attract more users to the network and decentralised application use. New projects with airdrops can use this pool to incentivise more on-chain activity instead of one-time ask."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Case Study #1")),(0,o.kt)("blockquote",null,"SushiSwap and Uniswap are supported by BonusBlock. If UniSwap provides extra rewards to the pool on BonusBlock, this will trigger SushiSwap to seek more of their daily activities on Uniswap, since it offers larger rewards for the activity. There is a possibility for a project to have a global notification option sent to the users to inform them about a new pool setup."),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Case Study #2")),(0,o.kt)("blockquote",null,"A DEX is launching a new feature on the platform, for instance, lending. The platform is interested in the current users of the platform try out the feature, as well as interacting. The DEX will be able to create a reward pool that is specific to the new feature on-chain activity on BonusBlock, increasing faster product-market-fit for the feature, attracts more users from different other platforms, and generates on-chain activity."),(0,o.kt)("h2",{id:"governance-state"},"Governance state"),(0,o.kt)("p",null,"Governance is the process by which BonusBlock network participants and token holders can influence the future direction of the protocol through proposals and on-chain voting.\nIn addition to fees, accruing value, rewards, access to premium services and staking, BonusBlock\u2019s native token $BONUS is used for governance. This governance model helps maintain and support BonusBlock\u2019s decentralized community while ensuring fair and transparent participation. All holders of the native token can propose changes to the BonusBlock\u2019s network and vote on active proposals. Proposals that reach a consensus threshold are adopted, whether a specific feature or even changing the governance system itself."))}p.isMDXComponent=!0}}]);