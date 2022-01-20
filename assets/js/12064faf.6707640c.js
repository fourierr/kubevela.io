(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[80144],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||o;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66916:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var i=n(22122),r=n(19756),o=(n(67294),n(3905)),a={title:"vela def init"},l={unversionedId:"cli/vela_def_init",id:"cli/vela_def_init",isDocsHomePage:!1,title:"vela def init",description:"Init a new definition",source:"@site/docs/cli/vela_def_init.md",sourceDirName:"cli",slug:"/cli/vela_def_init",permalink:"/docs/next/cli/vela_def_init",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_def_init.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1642665068,formattedLastUpdatedAt:"1/20/2022",frontMatter:{title:"vela def init"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],p={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Init a new definition"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Init a new definition with given arguments or interactively"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We support parsing a single YAML file (like kubernetes objects) into the cue-style template.\nHowever, we do not support variables in YAML file currently, which prevents users from directly feeding files like helm chart directly.\nWe may introduce such features in the future.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela def init DEF_NAME [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Command below initiate an empty TraitDefinition named my-ingress\n> vela def init my-ingress -t trait --desc "My ingress trait definition." > ./my-ingress.cue\n# Command below initiate a definition named my-def interactively and save it to ./my-def.cue\n> vela def init my-def -i --output ./my-def.cue\n# Command below initiate a ComponentDefinition named my-webservice with the template parsed from ./template.yaml.\n> vela def init my-webservice -i --template-yaml ./template.yaml\n# Initiate a Terraform ComponentDefinition named vswitch from Github for Alibaba Cloud.\n> vela def init vswitch --type component --provider alibaba --desc xxx --git https://github.com/kubevela-contrib/terraform-modules.git --path alibaba/vswitch\n# Initiate a Terraform ComponentDefinition named redis from local file for AWS.\n> vela def init redis --type component --provider aws --desc "Terraform configuration for AWS Redis" --local redis.tf\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -d, --desc string            Specify the description of the new definition.\n      --git string             Specify which git repository the configuration(HCL) is stored in. Valid when --provider/-p is set.\n  -h, --help                   help for init\n  -i, --interactive            Specify whether use interactive process to help generate definitions.\n      --local string           Specify the local path of the configuration(HCL) file. Valid when --provider/-p is set.\n  -o, --output string          Specify the output path of the generated definition. If empty, the definition will be printed in the console.\n      --path string            Specify which path the configuration(HCL) is stored in the Git repository. Valid when --git is set.\n  -p, --provider alibaba       Specify which provider the cloud resource definition belongs to. Only alibaba, `aws`, `azure` are supported.\n  -y, --template-yaml string   Specify the template yaml file that definition will use to build the schema. If empty, a default template for the given definition type will be used.\n  -t, --type string            Specify the type of the new definition. Valid types: component, trait, policy, workload, scope, workflow-step\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"vela_def"},"vela def"),"\t - Manage Definitions")),(0,o.kt)("h4",{id:"go-back-to-cli-commands-homepage"},"Go Back to ",(0,o.kt)("a",{parentName:"h4",href:"vela"},"CLI Commands")," Homepage."),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-20-jan-2022-refer-to-script-in-kubevela"},"Auto generated by spf13/cobra on 20-Jan-2022, refer to ",(0,o.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}s.isMDXComponent=!0}}]);