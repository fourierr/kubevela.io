(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[23805],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:e},c),{},{components:n})):r.createElement(f,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91919:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"AWS SECURITY-HUB"},i={unversionedId:"end-user/components/cloud-services/terraform/aws-security-hub",id:"end-user/components/cloud-services/terraform/aws-security-hub",isDocsHomePage:!1,title:"AWS SECURITY-HUB",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/components/cloud-services/terraform/aws-security-hub.md",sourceDirName:"end-user/components/cloud-services/terraform",slug:"/end-user/components/cloud-services/terraform/aws-security-hub",permalink:"/zh/docs/next/end-user/components/cloud-services/terraform/aws-security-hub",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/terraform/aws-security-hub.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1644478102,formattedLastUpdatedAt:"2022/2/10",frontMatter:{title:"AWS SECURITY-HUB"},sidebar:"docs",previous:{title:"AWS SECURITY-GROUP",permalink:"/zh/docs/next/end-user/components/cloud-services/terraform/aws-security-group"},next:{title:"AWS SNS-TOPIC",permalink:"/zh/docs/next/end-user/components/cloud-services/terraform/aws-sns-topic"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",children:[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}]}],u={toc:s};function c(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.kt)("p",null,"Terraform module to provision AWS Security Hub"),(0,o.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"enabled_standards"),(0,o.kt)("td",{parentName:"tr",align:null},"A list of standards/rulesets to enable\\n\\nSee ",(0,o.kt)("a",{parentName:"td",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/securityhub_standards_subscription#argument-reference%5Cn%5CnThe"},"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/securityhub_standards_subscription#argument-reference\\n\\nThe")," possible values are:\\n\\n  - standards/aws-foundational-security-best-practices/v/1.0.0\\n  - ruleset/cis-aws-foundations-benchmark/v/1.2.0\\n  - standards/pci-dss/v/3.2.1\\n"),(0,o.kt)("td",{parentName:"tr",align:null},"list(any)"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"create_sns_topic"),(0,o.kt)("td",{parentName:"tr",align:null},"Flag to indicate whether an SNS topic should be created for notifications\\n\\nIf you want to send findings to a new SNS topic, set this to true and provide a valid configuration for subscribers\\n"),(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"subscribers"),(0,o.kt)("td",{parentName:"tr",align:null},"Required configuration for subscibres to SNS topic."),(0,o.kt)("td",{parentName:"tr",align:null},"map(object({\\n    protocol = string\\n    # The protocol to use. The possible values for this are: sqs, sms, lambda, application. (http or https are partially supported, see below) (email is an option but is unsupported, see below).\\n    endpoint = string\\n    # The endpoint to send data to, the contents will vary with the protocol. (see below for more information)\\n    endpoint_auto_confirms = bool\\n    # Boolean indicating whether the end point is capable of auto confirming subscription e.g., PagerDuty (default is false)\\n    raw_message_delivery = bool\\n    # Boolean indicating whether or not to enable raw message delivery (the original message is directly passed, not wrapped in JSON with the original message in the message property) (default is false)\\n  }))"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"imported_findings_notification_arn"),(0,o.kt)("td",{parentName:"tr",align:null},"The ARN for an SNS topic to send findings notifications to. This is only used if create_sns_topic is false.\\n\\nIf you want to send findings to an existing SNS topic, set the value of this to the ARN of the existing topic and set \\ncreate_sns_topic to false.\\n"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cloudwatch_event_rule_pattern_detail_type"),(0,o.kt)("td",{parentName:"tr",align:null},"The detail-type pattern used to match events that will be sent to SNS. \\n\\nFor more information, see:\\n",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatchEventsandEventPatterns.html%5Cn"},"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatchEventsandEventPatterns.html\\n")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"writeConnectionSecretToRef"),(0,o.kt)("td",{parentName:"tr",align:null},"The secret which the cloud resource connection will be written to"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#writeConnectionSecretToRef"},"writeConnectionSecretToRef")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h4",{id:"writeconnectionsecrettoref"},"writeConnectionSecretToRef"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The secret name which the cloud resource connection will be written to"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"namespace"),(0,o.kt)("td",{parentName:"tr",align:null},"The secret namespace which the cloud resource connection will be written to"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);