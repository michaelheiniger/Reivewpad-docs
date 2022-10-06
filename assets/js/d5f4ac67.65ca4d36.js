"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[2908],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(t),g=a,v=m["".concat(c,".").concat(g)]||m[g]||u[g]||i;return t?r.createElement(v,s(s({ref:n},p),{},{components:t})):r.createElement(v,s({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={title:"Assign review to a team",id:"assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team"},s=void 0,o={unversionedId:"use-cases/reviewer-assignment/assign-review-to-a-team",id:"version-3.6.0/use-cases/reviewer-assignment/assign-review-to-a-team",title:"Assign review to a team",description:"Please note that this function requires the Reviewpad Action to be installed with a GitHub token",source:"@site/versioned_docs/version-3.6.0/use-cases/reviewer-assignment/assign-review-to-a-team.md",sourceDirName:"use-cases/reviewer-assignment",slug:"/use-cases/assign-review-to-a-team",permalink:"/3.6.0/use-cases/assign-review-to-a-team",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-review-to-a-team.md",tags:[],version:"3.6.0",frontMatter:{title:"Assign review to a team",id:"assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team"},sidebar:"DocsSidebar",previous:{title:"Assign review to 3 developers",permalink:"/3.6.0/use-cases/assign-review-to-3-developers"},next:{title:"Assign senior reviewers to new joiners",permalink:"/3.6.0/use-cases/assign-senior-reviewers-to-new-joiners"}},c={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Requires GitHub token",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please note that this function requires the ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-with-github-token"},"Reviewpad Action to be installed with a GitHub token"))),(0,a.kt)("p",null,"An example of assigning a review to a team when touching a specific folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changesToConfigurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changesToConfigurations\n    then:\n      # Assign the review to devops team\n      - $assignTeamReviewer("devops")\n')),(0,a.kt)("p",null,"An example of assigning a review to a specific number of elements on a team."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changesToConfigurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changesToConfigurations\n    then:\n      # Assign the review to 3 random reviewers from devops team\n      - $assignReviewer($team("devops"), 3)\n')),(0,a.kt)("p",null,"An example of assigning a review to a team and a specific element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changesToConfigurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changesToConfigurations\n    then:\n      # Assign the review to john\n      - $assignReviewer(["john"])\n      # Assign the review to devops team\n      - $assignTeamReviewer("devops")\n')))}u.isMDXComponent=!0}}]);