"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[5175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Aladino Semantics",id:"semantics"},i=void 0,l={unversionedId:"guides/aladino/semantics",id:"version-3.5.0/guides/aladino/semantics",title:"Aladino Semantics",description:"Aladino supports five types of values: booleans, numbers, strings, arrays and a special type action.",source:"@site/versioned_docs/version-3.5.0/guides/aladino/semantics.md",sourceDirName:"guides/aladino",slug:"/guides/aladino/semantics",permalink:"/3.5.0/guides/aladino/semantics",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/aladino/semantics.md",tags:[],version:"3.5.0",frontMatter:{title:"Aladino Semantics",id:"semantics"},sidebar:"DocsSidebar",previous:{title:"Aladino Syntax",permalink:"/3.5.0/guides/aladino/syntax"},next:{title:"Auto-merge",permalink:"/3.5.0/use-cases/auto-merge"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Aladino supports five types of values: ",(0,a.kt)("inlineCode",{parentName:"p"},"booleans"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"strings"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"arrays")," and a special type ",(0,a.kt)("inlineCode",{parentName:"p"},"_action_"),"."),(0,a.kt)("p",null,"Since the language is quite simple, it is also straightforward to perform type inference."),(0,a.kt)("p",null,"There are two requirements when it comes to typing:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The type of the expression in a rule ",(0,a.kt)("inlineCode",{parentName:"li"},"spec")," is ",(0,a.kt)("em",{parentName:"li"},"bool"),". For example, the following rule is invalid:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: doesntTypeCheckToBool\n  kind: patch\n  description: Rule that does not type check to bool\n  spec: "hello" # type error\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"The type of each action to be ",(0,a.kt)("em",{parentName:"li"},"effect.")," For example, the following workflow is invalid because of its actions:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: invalidWorkflow\n  description: Invalid workflow because of action\n  if:\n    - rule: rule_1\n  then:\n    - "hello" # type error\n')),(0,a.kt)("p",null,"Since by design you cannot define functions or variables, the usefulness of the language comes down to the set of built-in variables and functions that are provided."))}u.isMDXComponent=!0}}]);