"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[293],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8152:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:4},i="Running a Validator Node",l={unversionedId:"becoming-a-validator/running-a-validator",id:"becoming-a-validator/running-a-validator",title:"Running a Validator Node",description:"The first step is to run a node. See the Node Installation and Joining a Network guides for instructions on how to get your node up and running.",source:"@site/docs/becoming-a-validator/running-a-validator.md",sourceDirName:"becoming-a-validator",slug:"/becoming-a-validator/running-a-validator",permalink:"/docs/becoming-a-validator/running-a-validator",draft:!1,tags:[],version:"current",lastUpdatedAt:1679495172,formattedLastUpdatedAt:"22 Mar 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Testnet faucet",permalink:"/docs/becoming-a-validator/testnet-faucet"},next:{title:"Troubleshooting Common Issues With Validator Nodes",permalink:"/docs/becoming-a-validator/troubleshooting"}},s={},u=[{value:"Run a validator",id:"run-a-validator",level:2}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-validator-node"},"Running a Validator Node"),(0,r.kt)("p",null,"The first step is to run a node. See the ",(0,r.kt)("a",{parentName:"p",href:"../running-a-node/prerequisites"},"Node Installation")," and ",(0,r.kt)("a",{parentName:"p",href:"../running-a-node/join-a-network"},"Joining a Network")," guides for instructions on how to get your node up and running.",(0,r.kt)("br",null),"\nAfter your node is running and synced, you can create a validator by staking tokens."),(0,r.kt)("h2",{id:"run-a-validator"},"Run a validator"),(0,r.kt)("p",null,"Firstly, make sure you have properly ",(0,r.kt)("a",{parentName:"p",href:"../running-a-node/node-installation"},"installed and configured your node"),"."),(0,r.kt)("p",null,"After having followed the ",(0,r.kt)("a",{parentName:"p",href:"../running-a-node/join-a-network"},"instructions to join a network")," and your running node is synced, you can create a validator by staking tokens. Please make sure to create a validator only once the node is fully synced, so that you avoid being slashed."),(0,r.kt)("p",null,"Now, use the following command to create your validator:",(0,r.kt)("br",null),"\nUse the name of an account created earlier at ",(0,r.kt)("a",{parentName:"p",href:"../running-a-node/set-up-keys"},"Prepare the Account and Keys")," step."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bonus-blockd tx staking create-validator \\\n  --from=[validator-account-name] \\\n  --amount=1000000000ubonus \\\n  --fees=0ubonus --pubkey $(bonus-blockd tendermint show-validator) \\\n  --chain-id=[chain-id] \\\n  --commission-rate="0.10" \\\n  --commission-max-rate="0.20" \\\n  --commission-max-change-rate="0.01" \\\n  --min-self-delegation="1" \\\n  --gas="auto" \\\n  --gas-adjustment=1.15 \\\n')),(0,r.kt)("p",null,"For example in the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"blocktopia-01")," testnet and account ",(0,r.kt)("inlineCode",{parentName:"p"},"my-validator"),", you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bonus-blockd tx staking create-validator \\\n--from=my-validator \\\n--amount=1000000000ubonus \\\n--fees=0ubonus --pubkey $(bonus-blockd tendermint show-validator) \\\n--chain-id=blocktopia-01 \\\n--commission-rate="0.10" \\\n--commission-max-rate="0.20" \\\n--commission-max-change-rate="0.01" \\\n--min-self-delegation="1" \\\n--gas="auto" \\\n--gas-adjustment=1.15 \\\n')))}p.isMDXComponent=!0}}]);