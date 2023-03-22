"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),y=o,m=l["".concat(s,".").concat(y)]||l[y]||d[y]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Prepare the Account and Keys",c={unversionedId:"running-a-node/set-up-keys",id:"running-a-node/set-up-keys",title:"Prepare the Account and Keys",description:"Create a key to hold your account. Once you run this command, you may be prompted with a password dialogue, where you need to set up a password for your keyring. This password encrypts the private key of your node.",source:"@site/docs/running-a-node/set-up-keys.md",sourceDirName:"running-a-node",slug:"/running-a-node/set-up-keys",permalink:"/docs/running-a-node/set-up-keys",draft:!1,tags:[],version:"current",lastUpdatedAt:1679494811,formattedLastUpdatedAt:"22 Mar 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Node Installation",permalink:"/docs/running-a-node/node-installation"},next:{title:"Node Configuration",permalink:"/docs/running-a-node/node-configuration"}},s={},u=[],p={toc:u},l="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prepare-the-account-and-keys"},"Prepare the Account and Keys"),(0,o.kt)("p",null,"Create a key to hold your account. Once you run this command, you may be prompted with a password dialogue, where you need to set up a password for your keyring. This password encrypts the private key of your node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bonus-blockd keys add [account-name]\n")),(0,o.kt)("p",null,"For example to create an account with name ",(0,o.kt)("inlineCode",{parentName:"p"},"my-node")," run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bonus-blockd keys add my-node\n")),(0,o.kt)("p",null,"You see an output similar to the following, containing account details and the mnemonic phrase that is very crucial to recover the account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'- name: my-node\n  type: local\n  address: bonus1kwpvzwtdd8qs27n7tpfr9awtfa7w5xgr974f2q\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A7dKw8Bs4IKyYANqRBRmuZZovpwJOAbLmOssp+is7h+j"}\'\n  mnemonic: ""\n\n\n**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\npicnic able angle merit arctic route resemble purity bone become match firm enjoy stem dry cake add elite filter point try wet earn blind\n')))}d.isMDXComponent=!0}}]);