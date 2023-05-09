"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={},l="How Rewarding works",o={unversionedId:"overview/how-rewarding-works",id:"overview/how-rewarding-works",title:"How Rewarding works",description:"------------------",source:"@site/docs/overview/how-rewarding-works.md",sourceDirName:"overview",slug:"/overview/how-rewarding-works",permalink:"/docs/overview/how-rewarding-works",draft:!1,tags:[],version:"current",lastUpdatedAt:1683624341,formattedLastUpdatedAt:"9 May 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connect with Community",permalink:"/docs/overview/connect-with-community"},next:{title:"BonusBlock Media Kit",permalink:"/docs/overview/media-kit"}},s={},p=[{value:"Shared Gas Fees",id:"shared-gas-fees",level:3},{value:"Inflationary Rewards",id:"inflationary-rewards",level:3},{value:"Minimum Consensus Fee",id:"minimum-consensus-fee",level:3},{value:"Calculating Inflationary Rewards",id:"calculating-inflationary-rewards",level:2},{value:"Inflationary Rewards Split",id:"inflationary-rewards-split",level:3},{value:"Calculating Gas",id:"calculating-gas",level:2},{value:"Introducing methodology for internal pool management",id:"introducing-methodology-for-internal-pool-management",level:3},{value:"Setting formula example:",id:"setting-formula-example",level:5},{value:"An example of how the reward for a single user (<strong>i</strong>) can be calculated using the formula I provided earlier:",id:"an-example-of-how-the-reward-for-a-single-user-i-can-be-calculated-using-the-formula-i-provided-earlier",level:5},{value:"Regulating internal limited reward pool by Buying/Selling pressure market condition",id:"regulating-internal-limited-reward-pool-by-buyingselling-pressure-market-condition",level:2},{value:"Regulating B/S",id:"regulating-bs",level:3},{value:"Formula that accounts for the buying and selling pressure and adjusts the reward pool size accordingly",id:"formula-that-accounts-for-the-buying-and-selling-pressure-and-adjusts-the-reward-pool-size-accordingly",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-rewarding-works"},"How Rewarding works"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Rewards is one the core sections of BonusBlock Network. The rewards system is designed to reward users for their on-chain activity across Web3 for using networks, dApps and CEXs."),(0,n.kt)("p",null,"The rewards system has three types of rewards: Shared Gas Fees, Inflationary Rewards and External Reward Pools. This guide will explore each of these reward types in more detail of calculation methods and how users will be able to claim them."),(0,n.kt)("h3",{id:"shared-gas-fees"},"Shared Gas Fees"),(0,n.kt)("p",null,'Each computation or operation on a blockchain comes with a cost that is referred to as "gas". When a user wants to transact with a smart contract, the user needs to pay this gas fee as a transaction fee.\nIn most blockchain networks, these fees go to the validator who is responsible for adding the transaction to the blockchain. On BonusBlock, this fee is split between the validator and the dapp developer as a reward.'),(0,n.kt)("h3",{id:"inflationary-rewards"},"Inflationary Rewards"),(0,n.kt)("p",null,"Following the Cosmos mint module, new coins are added to the BonusBlock network to reward stakers and other participants. Like the gas fee rebates, these rewards are also split between users and validators.\nThe number of coins that can be rewarded will change over time as it is connected to the ratio of coins that are being staked on the network. As this amount changes, so does the reward split between validators and developers."),(0,n.kt)("h3",{id:"minimum-consensus-fee"},"Minimum Consensus Fee"),(0,n.kt)("p",null,"To protect the transaction fees rewarded to developers and prevent spam attacks on the network, there is a minimum consensus fee connected to each new block. This is the minimum amount that a user must pay in gas fees for a transaction."),(0,n.kt)("h2",{id:"calculating-inflationary-rewards"},"Calculating Inflationary Rewards"),(0,n.kt)("p",null,"The inflation rate on the BonusBlock follows the mint module in the Cosmos Hub. In this module, token supply can be increased between 10% to 24% annually. The increase depends on the ratio of the tokens that are being staked."),(0,n.kt)("h3",{id:"inflationary-rewards-split"},"Inflationary Rewards Split"),(0,n.kt)("p",null,"At the genesis block, 30% of the inflation rewards will go to users and 75% will go to validators. So if the network sees total inflation of 10% then 3% will go to users and 7% will be given to validators. This split is a configurable parameter so it can change over time through a governance vote by the BonusBlock community."),(0,n.kt)("h2",{id:"calculating-gas"},"Calculating Gas"),(0,n.kt)("p",null,"The transaction fee rewards are calculated by the amount of gas that a smart contract uses directly or by other contracts calling it. The more gas a contract uses, the bigger the reward.\nEach block uses gas to complete the transactions included in the block. Rewards for a contract are calculated only on the execution of that specific contract and not all the contracts that are included in the block."),(0,n.kt)("h3",{id:"introducing-methodology-for-internal-pool-management"},"Introducing methodology for internal pool management"),(0,n.kt)("p",null,"Developing an algorithm for reward distribution that takes the following factors into account requires a complex set of rules and calculations. Here is a the approach that takes each of the five factors into account:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Determine the end goal:")," The first step is to determine the desired buying pressure versus selling pressure. This will be used to guide the overall reward distribution strategy.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Calculate the reward multiplier:")," For each user, calculate a reward multiplier based on the number of tokens they have staked. The higher the number of tokens staked, the higher the reward multiplier, taken by on-chain activity against all participating users.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Evaluate on-chain activity:")," Calculate the level of on-chain activity for each user and use this to adjust the reward distribution. Users with higher on-chain activity will receive a higher proportion of the available rewards.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Allocate rewards from the pool:")," Allocate rewards from the limited pool of rewards based on the reward multipliers and on-chain activity levels calculated for each user. The exact distribution will depend on the overall end goal, as determined in step 1.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Categorize activities:")," Categorize the type of activity each user is engaging in based on the product type or category. This information can be used to adjust the reward distribution further, for example by giving higher rewards for users engaging in activities related to products or categories with lower overall activity levels.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Consider external reward pool:")," If there is an external reward pool, adjust the reward distribution accordingly to include these rewards in the calculation."))),(0,n.kt)("h5",{id:"setting-formula-example"},"Setting formula example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"P")," = desired buying pressure/selling pressure ratio"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"N")," = total number of users"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T_i")," = number of tokens staked by user i"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A_i")," = on-chain activity level of user i"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"R_i")," = reward multiplier for user i (based on number of tokens staked)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"C_i")," = category variable of product type for user i (e.g. 1 for high-demand products, 0 for low-demand products)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RP")," = total rewards available in the reward pool"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"EP")," = total rewards available in any external reward pool")),(0,n.kt)("p",null,"The reward for ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"user i"))," can be calculated as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Reward_i = (RP / \u03a3(R_j * A_j) * R_i * A_i * C_i) + (EP / N)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This formula takes into account the following factors:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Desired buying pressure/selling pressure ratio:")," This is not explicitly included in the formula, but it is used to guide the overall reward distribution strategy.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Reward multiplier based on tokens staked:")," The reward multiplier ",(0,n.kt)("strong",{parentName:"p"},"R_i")," is calculated based on the number of tokens staked by ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"user i")),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"On-chain activity:")," The on-chain activity level ",(0,n.kt)("strong",{parentName:"p"},"A_i")," is used to adjust the reward distribution, with users who have higher on-chain activity levels receiving a higher proportion of the available rewards.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Limited pool of rewards:")," The total rewards available in the reward pool RP are divided among users based on their reward multipliers, on-chain activity levels, and the category variable of the product type they are engaging with.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Categorization of activities:")," The category variable ",(0,n.kt)("strong",{parentName:"p"},"C_i")," is used to adjust the reward distribution based on the type of activity each user is engaging in.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"External reward pool:")," If there is an external reward pool, the total rewards available in that pool ",(0,n.kt)("strong",{parentName:"p"},"EP")," are divided equally among all users."))),(0,n.kt)("h5",{id:"an-example-of-how-the-reward-for-a-single-user-i-can-be-calculated-using-the-formula-i-provided-earlier"},"An example of how the reward for a single user (",(0,n.kt)("strong",{parentName:"h5"},"i"),") can be calculated using the formula I provided earlier:"),(0,n.kt)("p",null,"Let's assume that for this ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"user i")),", the following values apply:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T_i = 150 tokens")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A_i = 20 activities per day")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"C_i = 1 (high-demand product category)"))),(0,n.kt)("p",null,"To calculate the reward for ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"user i")),", we first need to calculate their reward multiplier ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"R_i")),". This can be done using the following formula:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"R_i = T_i / \u03a3(T_j)\n")),(0,n.kt)("p",null,"Where ",(0,n.kt)("strong",{parentName:"p"},"\u03a3(T_j)")," is the sum of all tokens staked by all users. In this case, we assume that the total number of tokens staked across all users is 10,000,000, so:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"R_i = 150 / 10,000,000 = 0.000015")),(0,n.kt)("p",null,"Next, we need to adjust the reward for ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"user i"))," based on their on-chain activity level ",(0,n.kt)("strong",{parentName:"p"},"A_i")," and the category variable ",(0,n.kt)("strong",{parentName:"p"},"C_i"),". We can do this using the following formula:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Adjusted Reward_i = (RP / \u03a3(R_j * A_j) * R_i * A_i * C_i) + (EP / N)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Where:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"RP")," is the total rewards available in the reward pool (20000 tokens)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"\u03a3(R_j * A_j)")," is the sum of the reward multipliers ",(0,n.kt)("strong",{parentName:"p"},"R_j")," multiplied by the on-chain activity levels ",(0,n.kt)("strong",{parentName:"p"},"A_j")," for all users ",(0,n.kt)("strong",{parentName:"p"},"j"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"EP")," is the total rewards available in any external reward pool (50000 tokens)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"N")," is the total number of users (100000)"))),(0,n.kt)("p",null,"In this case, let's assume that ",(0,n.kt)("inlineCode",{parentName:"p"},"\u03a3(R_j * A_j)")," for all ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"users j"))," is 1,000, and that the desired buying pressure/selling pressure ratio (",(0,n.kt)("strong",{parentName:"p"},"P"),") is 60/40."),(0,n.kt)("p",null,"Using these values, the adjusted reward for ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"user i"))," can be calculated as follows:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Adjusted Reward_i = (20000 / 1,000 * 0.000015 * 20 * 1) + (50000 / 100000) = 0.006 + 0.5 = 0.506")),(0,n.kt)("p",null,"So the adjusted reward for ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"user i"))," would be 0.506 tokens."),(0,n.kt)("h2",{id:"regulating-internal-limited-reward-pool-by-buyingselling-pressure-market-condition"},"Regulating internal limited reward pool by Buying/Selling pressure market condition"),(0,n.kt)("h3",{id:"regulating-bs"},"Regulating B/S"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Calculate the ratio of buying pressure to selling pressure, ",(0,n.kt)("strong",{parentName:"p"},"B/S"),". This can be done by dividing the current buy volume by the current sell volume.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Calculate the difference between the desired ratio, ",(0,n.kt)("strong",{parentName:"p"},"P"),", and the actual ratio, ",(0,n.kt)("strong",{parentName:"p"},"B/S"),". If the actual ratio is greater than the desired ratio, the result will be negative.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set a coefficient, ",(0,n.kt)("strong",{parentName:"p"},"k"),", to adjust the amount of rewards available in the reward pool. The coefficient should be a positive number between 0 and 1, and can be set based on the desired level of sensitivity to changes in market conditions.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Calculate the new reward pool size, ",(0,n.kt)("strong",{parentName:"p"},"RP_new"),", as follows:"),(0,n.kt)("br",null))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"RP_new = RP * (1 + k * difference)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Where:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"RP")," is the current reward pool size")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"difference")," is the difference between the desired and actual buying/selling pressure ratios (as calculated in step 2)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"k")," is the coefficient used to adjust the reward pool size"))),(0,n.kt)("p",null,"If the difference is ",(0,n.kt)("strong",{parentName:"p"},"negative")," (i.e. the actual ratio is higher than the desired ratio), then the formula should be adjusted as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"RP_new = RP / (1 + k * abs(difference))\n")),(0,n.kt)("p",null,"Where ",(0,n.kt)("strong",{parentName:"p"},"abs(difference)")," is the absolute value of the difference between the desired and actual buying/selling pressure ratios."),(0,n.kt)("p",null,"Overall, this formula provides a way to adjust the reward pool size based on the desired buying pressure/selling pressure ratio. By increasing or decreasing the reward pool size in response to changes in market conditions, we can help to stabilize the market and incentivize users to hold and stake tokens rather than sell them, which can lead to long-term growth and stability."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Initialize the reward pool:")," Set the initial amount of rewards available in the reward pool, RP, to a predetermined value.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Monitor market conditions:")," Continuously monitor relevant market indicators such as trading volume, order book depth, and other relevant market data to assess the current market conditions. This data is obtained from external APIs.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Calculate the buying and selling pressure:")," Based on the market data, calculate the buying and selling pressure. This can be done by analyzing the current order book and trading volume to estimate the current demand and supply of the token.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Determine the desired buying/selling pressure ratio:")," Set a desired buying pressure/selling pressure ratio, P, that corresponds to the desired market conditions. This can be set based on factors such as market demand, investor sentiment, and other relevant factors.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Adjust the reward pool:")," Based on the calculated buying and selling pressure and the desired P ratio, adjust the amount of rewards available in the reward pool, RP. If the calculated buying pressure is higher than the desired ratio, increase the amount of rewards available in the pool. If the calculated selling pressure is higher than the desired ratio, decrease the amount of rewards available in the pool."))),(0,n.kt)("h3",{id:"formula-that-accounts-for-the-buying-and-selling-pressure-and-adjusts-the-reward-pool-size-accordingly"},"Formula that accounts for the buying and selling pressure and adjusts the reward pool size accordingly"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Calculate the ratio of buying pressure to selling pressure, ",(0,n.kt)("strong",{parentName:"p"},"B/S"),". This can be done by dividing the current buy volume by the current sell volume.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Calculate the difference between the desired ratio, ",(0,n.kt)("strong",{parentName:"p"},"P"),", and the actual ratio, ",(0,n.kt)("strong",{parentName:"p"},"B/S"),". If the actual ratio is greater than the desired ratio, the result will be negative.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set a coefficient, ",(0,n.kt)("strong",{parentName:"p"},"k"),", to adjust the amount of rewards available in the reward pool. The coefficient should be a positive number between 0 and 1, and can be set based on the desired level of sensitivity to changes in market conditions.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Calculate the new reward pool size, ",(0,n.kt)("strong",{parentName:"p"},"RP_new"),", as follows:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a. If the actual ratio is less than the desired ratio (i.e. the selling pressure is high), set ",(0,n.kt)("inlineCode",{parentName:"p"},"RP_new = RP * (1 - k * difference)"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"b. If the actual ratio is greater than the desired ratio (i.e. the buying pressure is high), set ",(0,n.kt)("inlineCode",{parentName:"p"},"RP_new = RP * (1 + k * difference)"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Where:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RP")," is the current reward pool size"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"difference")," is the difference between the desired and actual buying/selling pressure ratios (as calculated in step 2)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"k")," is the coefficient used to adjust the reward pool size")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"An example assuming the following values:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RP")," = 100,000 tokens (current reward pool size)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"B")," = 20,000 tokens (current buy volume)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"S")," = 10,000 tokens (current sell volume)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"P")," = 60/40 (desired buying pressure/selling pressure ratio)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"k")," = 0.1 (coefficient used to adjust the reward pool size)")),(0,n.kt)("p",null,"Using these values, we can first calculate the ratio of buying pressure to selling pressure, ",(0,n.kt)("strong",{parentName:"p"},"B/S"),": ",(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"B/S = B / S = 20,000 / 10,000 = 2")),(0,n.kt)("p",null,"Next, we can calculate the difference between the desired and actual ratios: ",(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"difference = P - B/S = 0.6 - 2 = -1.4")),(0,n.kt)("p",null,"Since the difference is negative, we can adjust the formula as follows: ",(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"RP_new = RP / (1 + k * abs(difference))")),(0,n.kt)("p",null,"Plugging in the values we get: ",(0,n.kt)("br",null),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"RP_new = 100,000 / (1 + 0.1 * abs(-1.4)) = 87,719 tokens")),(0,n.kt)("p",null,"So the new reward pool size would be ",(0,n.kt)("strong",{parentName:"p"},"87,719 tokens"),"."))}c.isMDXComponent=!0}}]);