"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:6},o="Making a service",s={unversionedId:"running-a-node/making-a-service",id:"running-a-node/making-a-service",title:"Making a service",description:"This guide explains how to make a service for bonus-blockd so it will launch on system start",source:"@site/docs/running-a-node/making-a-service.md",sourceDirName:"running-a-node",slug:"/running-a-node/making-a-service",permalink:"/docs/running-a-node/making-a-service",draft:!1,tags:[],version:"current",lastUpdatedAt:1679494811,formattedLastUpdatedAt:"22 Mar 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Join a Network",permalink:"/docs/running-a-node/join-a-network"},next:{title:"Introduction to Validating",permalink:"/docs/becoming-a-validator/introduction"}},l={},c=[{value:"Creating the systemd file",id:"creating-the-systemd-file",level:2},{value:"Register and start the service",id:"register-and-start-the-service",level:2},{value:"View the live log of the service",id:"view-the-live-log-of-the-service",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"making-a-service"},"Making a service"),(0,a.kt)("p",null,"This guide explains how to make a service for bonus-blockd so it will launch on system start"),(0,a.kt)("h2",{id:"creating-the-systemd-file"},"Creating the systemd file"),(0,a.kt)("p",null,"All services must run under non-privileged users by default. We assume you will run the node under the same user\nas you are following this tutorial. If you created dedicated user, please replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"$USER")," with the appropriate ID."),(0,a.kt)("p",null,"Create the new systemd service file by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tee /etc/systemd/system/bonusblock.service > /dev/null <<EOF\n[Unit]\nDescription=BonusBlock Node\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$(which bonus-blockd) start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=65535\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,a.kt)("h2",{id:"register-and-start-the-service"},"Register and start the service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl enable bonusblock\nsystemctl restart bonusblock\n")),(0,a.kt)("h2",{id:"view-the-live-log-of-the-service"},"View the live log of the service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u bonusblock -f -o cat\n")))}p.isMDXComponent=!0}}]);