"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[9095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=l,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const i={title:"Syntax",id:"syntax"},r=void 0,o={unversionedId:"guides/syntax",id:"version-3.8.0/guides/syntax",title:"Syntax",description:"A Reviewpad configuration file has the following shape:",source:"@site/versioned_docs/version-3.8.0/guides/syntax.md",sourceDirName:"guides",slug:"/guides/syntax",permalink:"/guides/syntax",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/syntax.md",tags:[],version:"3.8.0",frontMatter:{title:"Syntax",id:"syntax"},sidebar:"DocsSidebar",previous:{title:"Security",permalink:"/getting-started/security"},next:{title:"Semantics",permalink:"/guides/semantics"}},p={},s=[{value:"API Version",id:"api-version",level:2},{value:"Example",id:"example",level:4},{value:"Mode",id:"mode",level:2},{value:"Example",id:"example-1",level:4},{value:"Ignore errors",id:"ignore-errors",level:2},{value:"Example",id:"example-2",level:4},{value:"Label",id:"label",level:2},{value:"Example",id:"example-3",level:4},{value:"Group",id:"group",level:2},{value:"Group By Enumeration",id:"group-by-enumeration",level:3},{value:"Example",id:"example-4",level:4},{value:"Group By Filter",id:"group-by-filter",level:3},{value:"Example",id:"example-5",level:4},{value:"Rule",id:"rule",level:2},{value:"Example",id:"example-6",level:4},{value:"Workflow",id:"workflow",level:2},{value:"Example",id:"example-7",level:4},{value:"Pipeline",id:"pipeline",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Reviewpad configuration file has the following shape:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"api-version: reviewpad.com/v3.x\n\nmode: MODE [OPTIONAL]\nignore-errors: IGNORE_ERRORS [OPTIONAL]\n\nlabels:\n  label_1\n  label_2\n  ...\n  label_N\n\ngroups:\n  group_1\n  group_2\n  ...\n  group_N\n\nrules:\n  rule_1\n  rule_2\n  ...\n  rule_N\n\nworkflows:\n  - workflow_1\n  - workflow_2\n  ...\n  - workflow_N\n\npipelines:\n  - pipeline_1\n  - pipeline_2\n  ...\n  - pipeline_N\n")),(0,l.kt)("admonition",{title:"note",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You can check the latest formal version of the format ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/schemas/blob/main/latest/schema.json"},"here"),".")),(0,l.kt)("p",null,"If you use VSCode, we recommend that you ",(0,l.kt)("a",{parentName:"p",href:"/tooling/vscode-reviewpad-yaml-schema"},"setup yaml.schemas")," to enjoy syntax checking and auto-completion."),(0,l.kt)("h2",{id:"api-version"},"API Version"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"api-version")," property is the version of Reviewpad specification format. The version is necessary so the format can be evolved, and the field is used for the parser to know how to interpret the content."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"api-version: reviewpad.com/v3.x\n")),(0,l.kt)("h2",{id:"mode"},"Mode"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"mode")," property is a flag that allows you to enable or disable a report of Reviewpad as a pull request comment. By default, Reviewpad runs on ",(0,l.kt)("inlineCode",{parentName:"p"},"silent")," mode. However, you can choose to use ",(0,l.kt)("inlineCode",{parentName:"p"},"verbose")," mode and Reviewpad will comment on the pull request with the execution results."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"mode: verbose # optional\n")),(0,l.kt)("h2",{id:"ignore-errors"},"Ignore errors"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ignore-errors")," property is a flag that allows you to specify if the GitHub action should ignore execution errors. By default, this flag is ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," which means the action will fail if an error is raised."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"ignore-errors: true # optional\n")),(0,l.kt)("h2",{id:"label"},"Label"),(0,l.kt)("p",null,"A label specifies a label that can be used as an argument to the label related functions. "),(0,l.kt)("p",null,"The structure of a label is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"LABEL-ID:\n  name: STRING [OPTIONAL]\n  description: STRING [OPTIONAL]\n  color: STRING [OPTIONAL] \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LABEL-ID")," of a label is used to reference it in other entities. If no ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," is provided, then the ",(0,l.kt)("inlineCode",{parentName:"li"},"LABEL-ID")," is considered the ",(0,l.kt)("inlineCode",{parentName:"li"},"name"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," ","[OPTIONAL]"," is the name of the label as seen on GitHub."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a short description of the label. Must be 100 characters or fewer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color")," ","[OPTIONAL]"," is the ",(0,l.kt)("a",{parentName:"li",href:"https://www.color-hex.com/"},"hexadecimal color code")," for the label, with or without the leading #.")),(0,l.kt)("p",null,"If the label does not exist in the repository, it will be created. "),(0,l.kt)("p",null,"If the label already exists in the repository and the description set in the ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file is different from the description in the repository then this descritpion will be updated to the description defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"labels:\n  small:\n    name: small # optional\n    description: defines a small pull request # optional\n    color: d2697a # optional\n")),(0,l.kt)("h2",{id:"group"},"Group"),(0,l.kt)("p",null,"A group specifies a list of entities. At the moment, we only support GitHub users."),(0,l.kt)("p",null,"There are two ways to specify a group:"),(0,l.kt)("h3",{id:"group-by-enumeration"},"Group By Enumeration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  description: STRING [OPTIONAL]\n  kind: developers\n  spec: '[LIST OF GITHUB USERS]'\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," of a group is used to reference it in other entities."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the group."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kind")," of a group can only be ",(0,l.kt)("em",{parentName:"li"},"developers")," at the moment."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spec")," is an ",(0,l.kt)("a",{parentName:"li",href:"/guides/aladino/specification"},"Aladino")," array.")),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"groups:\n  - name: seniors\n    description: project seniors # optional\n    kind: developers\n    spec: '[\"peter\"]'\n")),(0,l.kt)("h3",{id:"group-by-filter"},"Group By Filter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  description: STRING [OPTIONAL]\n  kind: developers\n  type: filter\n  param: VARIABLE\n  spec: ALADINO-BOOLEAN-EXPRESSION\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," of a group is used to reference it in other entities."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the group."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kind")," of a group can only be ",(0,l.kt)("em",{parentName:"li"},"developers")," at the moment."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," with filter specifies that we will require a ",(0,l.kt)("em",{parentName:"li"},"param")," and a boolean ",(0,l.kt)("em",{parentName:"li"},"spec"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"param")," declares the name of a variable representing a single developer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spec")," is an ",(0,l.kt)("a",{parentName:"li",href:"/guides/aladino/specification"},"Aladino")," boolean expression that uses the ",(0,l.kt)("em",{parentName:"li"},"param")," variable to define a condition on which developers should be part of the group.")),(0,l.kt)("h4",{id:"example-5"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"groups:\n  - name: new-joiners\n    description: groups of developers that have created less than 10 PRs # optional\n    kind: developers\n    type: filter\n    param: dev\n    where: $totalCreatedPRs($dev) < 10\n")),(0,l.kt)("h2",{id:"rule"},"Rule"),(0,l.kt)("p",null,"A Reviewpad rule specifies a boolean condition on a pull request. "),(0,l.kt)("p",null,"The structure of a rule is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  kind: [patch | author] [OPTIONAL]\n  description: STRING [OPTIONAL]\n  spec: ALADINO-BOOLEAN-EXPRESSION\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," of a rule is used to reference it in other rules and workflow. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kind")," ","[OPTIONAL]"," of a rule can be either ",(0,l.kt)("em",{parentName:"li"},"patch")," or ",(0,l.kt)("em",{parentName:"li"},"author.")," The kind is related to different properties of pull requests that will be used in the evaluation of the ",(0,l.kt)("em",{parentName:"li"},"spec")," field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the rule."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spec")," is a boolean expression in ",(0,l.kt)("a",{parentName:"li",href:"/guides/aladino/specification"},"Aladino"),".")),(0,l.kt)("h4",{id:"example-6"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"rules:\n  - name: small-change\n    kind: patch # optional\n    description: checks pr size is small # optional\n    spec: $size() < 30 \n")),(0,l.kt)("h2",{id:"workflow"},"Workflow"),(0,l.kt)("p",null,"The structure of a workflow is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  description: STRING [OPTIONAL]\n  always-run: BOOLEAN [OPTIONAL]\n  on:\n    - [pull_request | issue]\n  if:\n    - rule: REF_TO_RULE_1 | INLINE_RULE_1\n      extra-actions: [OPTIONAL]\n        - ACTION_1\n        - ACTION_2\n        ...\n        - ACTION_N\n    ...\n    - rule: REF_TO_RULE_N | INLINE_RULE_N\n  then: [OPTIONAL]\n    - ACTION_1\n    - ACTION_2\n    ...\n    - ACTION_N\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," is a string that identifies the workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the workflow."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"always-run")," ","[OPTIONAL]"," field is a boolean that specifies the workflow should always be checked or not. By default, this value is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"on")," ","[OPTIONAL]"," field is a list of github entity types that should trigger the workflow. By default, the value is ",(0,l.kt)("inlineCode",{parentName:"li"},"pull_request"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"if")," field specifies which rules should be checked. For each rule, we can also specify a list of ",(0,l.kt)("strong",{parentName:"li"},"extra actions")," that will be executed if this rule is activated by the pull request."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"then")," field is a list of ",(0,l.kt)("a",{parentName:"li",href:"/guides/built-ins#actions"},"Reviewpad actions")," that should run.")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"workflow")," is a specification of a list of actions to be executed if the pull request ",(0,l.kt)("strong",{parentName:"p"},"satisfies")," any of the specified rules."),(0,l.kt)("h4",{id:"example-7"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'workflows:\n  - name: size-labelling\n    description: label pr based on size # optional\n    on: # optional\n      - pull_request\n    if:\n      - rule: $size() < 90\n        extra-actions: $addLabel("small")\n')),(0,l.kt)("p",null,"This configuration specifies one workflow called ",(0,l.kt)("inlineCode",{parentName:"p"},"size-labelling")," which automatically labels a ",(0,l.kt)("inlineCode",{parentName:"p"},"pull_request")," with the label ",(0,l.kt)("inlineCode",{parentName:"p"},"small")," if the inline rule ",(0,l.kt)("inlineCode",{parentName:"p"},"$size() < 90")," is true. This means that the total number of changed lines i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"$size")," is lower than 90."),(0,l.kt)("h2",{id:"pipeline"},"Pipeline"),(0,l.kt)("p",null,"The structure of a pipeline is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: STRING\n  description: STRING [OPTIONAL]\n  trigger: [STRING | RULE] # optional\n  stages:\n    - actions:\n        - ACTION_1\n        - ACTION_2\n        ...\n        - ACTION_N\n      until: [STRING | RULE] # optional\n    ...\n    - actions:\n        - ACTION_1\n        - ACTION_2\n        ...\n        - ACTION_N\n      until: [STRING | RULE] # optional\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," is a string that identifies the pipeline."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description")," ","[OPTIONAL]"," is a string that can be used to provide more details about the pipeline."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"trigger")," ","[OPTIONAL]"," field is a rule that if true enables the pipeline."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stages")," is a list of stages of the pipeline. Each stage is a list of actions that will execute until the ",(0,l.kt)("inlineCode",{parentName:"li"},"until")," condition is true.")))}d.isMDXComponent=!0}}]);