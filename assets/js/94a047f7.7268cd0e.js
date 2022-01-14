(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[95953],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},s=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(t),m=r,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return t?o.createElement(f,a(a({ref:n},d),{},{components:t})):o.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},98850:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var o=t(22122),r=t(19756),i=(t(67294),t(3905)),a={title:"Bind Application with Environment"},p={unversionedId:"how-to/dashboard/application/bind-new-environment",id:"how-to/dashboard/application/bind-new-environment",isDocsHomePage:!1,title:"Bind Application with Environment",description:"We can specify bind with one or more environments before deploy.",source:"@site/docs/how-to/dashboard/application/bind-new-environment.md",sourceDirName:"how-to/dashboard/application",slug:"/how-to/dashboard/application/bind-new-environment",permalink:"/docs/next/how-to/dashboard/application/bind-new-environment",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/application/bind-new-environment.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1642126062,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"Bind Application with Environment"},sidebar:"docs",previous:{title:"Create Application",permalink:"/docs/next/how-to/dashboard/application/create-application"},next:{title:"Deploy Application",permalink:"/docs/next/how-to/dashboard/application/deploy-application"}},l=[{value:"Next Step",id:"next-step",children:[]}],c={toc:l};function d(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We can specify bind with one or more environments before deploy."),(0,i.kt)("p",null,"After we have created application and configured the baseline well, we can bind an application with environment to deploy."),(0,i.kt)("p",null,"You can bind with one environment as ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," environment for develop and debug. When everything works well, you can bind with the production environment."),(0,i.kt)("p",null,"The operation likes below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"bind-new-env",src:t(61461).Z})),(0,i.kt)("p",null,"As the picture shows, in the application management page, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Bind Environment"),", choose the environment prepared."),(0,i.kt)("p",null,"If there's no environment, you can click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create new environment")," for creation."),(0,i.kt)("p",null,"After choose well, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"submit")," button, it will show the new environment created on the right side of the baseline config as a tab."),(0,i.kt)("p",null,"KubeVela will automatically generate the deploy workflow for the newly created environments."),(0,i.kt)("p",null,"In the environment tab, you can click ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy")," button to deploy the application."),(0,i.kt)("h3",{id:"next-step"},"Next Step"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./deploy-application"},"Deploy the Application"))))}d.isMDXComponent=!0},61461:function(e,n,t){"use strict";n.Z=t.p+"assets/images/bind-new-env-05336c5c901e4f4356d0909cf1ab04d9.jpg"}}]);