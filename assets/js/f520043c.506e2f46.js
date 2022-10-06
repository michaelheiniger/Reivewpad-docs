"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[720],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>v});var s=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,s,t=function(e,r){if(null==e)return{};var n,s,t={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=s.createContext({}),l=function(e){var r=s.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=l(e.components);return s.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),v=t,w=d["".concat(c,".").concat(v)]||d[v]||p[v]||i;return n?s.createElement(w,o(o({ref:r},u),{},{components:n})):s.createElement(w,o({ref:r},u))}));function v(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:t,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71952:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(87462),t=(n(67294),n(3905));const i={title:"Assign senior reviewers to new joiners",id:"assign-senior-reviewers-to-new-joiners",slug:"/use-cases/assign-senior-reviewers-to-new-joiners"},o=void 0,a={unversionedId:"use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners",id:"version-3.4.0/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners",title:"Assign senior reviewers to new joiners",description:"Here's an example of assigning senior reviewers to new joiners pull requests.",source:"@site/versioned_docs/version-3.4.0/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners.md",sourceDirName:"use-cases/reviewer-assignment",slug:"/use-cases/assign-senior-reviewers-to-new-joiners",permalink:"/3.4.0/use-cases/assign-senior-reviewers-to-new-joiners",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners.md",tags:[],version:"3.4.0",frontMatter:{title:"Assign senior reviewers to new joiners",id:"assign-senior-reviewers-to-new-joiners",slug:"/use-cases/assign-senior-reviewers-to-new-joiners"},sidebar:"DocsSidebar",previous:{title:"Assign review to a team",permalink:"/3.4.0/use-cases/assign-review-to-a-team"},next:{title:"Assign reviewers in a sequence",permalink:"/3.4.0/use-cases/assign-sequential-reviewers"}},c={},l=[],u={toc:l};function p(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,s.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Here's an example of assigning senior reviewers to new joiners pull requests."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  priority:\n    description: Priority reviews\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n\ngroups:\n  - name: seniors\n    description: Group of senior developers\n    kind: developers\n    spec: \'["torvalds"]\'\n\n  - name: juniors\n    description: Group of developers that have created less than 10 PRs\n    kind: developers\n    type: filter\n    param: developer\n    where: $pullRequestCountBy($developer) < 10\n\nrules:\n  - name: authoredByJunior\n    kind: patch\n    description: Patch is authored by a junior dev\n    spec: $isElementOf($author(), $group("juniors"))\n\nworkflows:\n  - name: critical\n    description: PRs by juniors should be reviewed by the gods\n    if:\n      - rule: authoredByJunior\n    then:\n      - $addLabel("priority")\n      - $assignReviewer($group("seniors"))\n')))}p.isMDXComponent=!0}}]);