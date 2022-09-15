"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[2107],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(t),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||s;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const s={id:"ship-show-ask",title:"Ship/Show/Ask"},o=void 0,i={unversionedId:"use-cases/ship-show-ask",id:"version-3.2.0/use-cases/ship-show-ask",title:"Ship/Show/Ask",description:"Ship/Show/Ask is a methodology to increase the pace of software teams by not having to block developers for each pull request.",source:"@site/versioned_docs/version-3.2.0/use-cases/ship-show-ask.md",sourceDirName:"use-cases",slug:"/use-cases/ship-show-ask",permalink:"/3.2.0/use-cases/ship-show-ask",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/ship-show-ask.md",tags:[],version:"3.2.0",frontMatter:{id:"ship-show-ask",title:"Ship/Show/Ask"},sidebar:"DocsSidebar",previous:{title:"Use Cases",permalink:"/3.2.0/use-cases/"},next:{title:"Automated Labelling",permalink:"/3.2.0/use-cases/automated-labelling/"}},l={},p=[{value:"Know more",id:"know-more",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ship/Show/Ask")," is a methodology to increase the pace of software teams by not having to block developers for each pull request. "),(0,a.kt)("p",null,"It can easily be implemented with this new solution by specifying policies for teams to allow them to automatically merge certain PRs."),(0,a.kt)("p",null,"Here's an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file that we use in our team to automate these three processes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  ask:\n    color: "fd5e53"\n  show:\n    color: "ffd800"\n  ship:\n    color: "76dbbe"\n\ngroups:\n  - name: juniors\n    kind: developers\n    type: filter\n    param: developer\n    where: $totalCreatedPullRequests($developer) < 10\n\nrules:\n  - name: onlyChangesMDFiles\n    kind: patch\n    spec: $hasFileExtensions([".md"])\n\n  - name: onlyChangesTests\n    kind: patch\n    spec: $hasFileExtensions([".test.ts"])\n\n  - name: isSmallPatch\n    kind: patch\n    spec: $size() < 50\n\n  - name: isLargePatch\n    kind: patch\n    spec: $fileCount() > 5\n\n  - name: changesMainFile\n    kind: patch\n    spec: $hasFileName("main.js")\n\n  - name: authoredByJunior\n    kind: patch\n    spec: $isElementOf($author(), $group("juniors"))\n\nworkflows:\n  - name: ask\n    if:\n      - rule: changesMainFile\n      - rule: isLargePatch\n      - rule: authoredByJunior\n    then:\n      - $addLabel("ask")\n      - $assignRandomReviewer()\n\n  - name: show\n    description: Show process - auto-merge and later review\n    if:\n      - rule: onlyChangesMDFiles\n        extra-actions:\n          - $assignReviewer($group("seniors"))\n      - rule: onlyChangesTests\n    then:\n      - $addLabel("show")\n      - $merge("rebase")\n\n  - name: ship\n    description: Ship process - auto-merge without need for review\n    if:\n      - rule: isSmallPatch\n    then:\n      - $addLabel("ship")\n      - $merge("rebase")\n')),(0,a.kt)("h3",{id:"know-more"},"Know more"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://martinfowler.com/articles/ship-show-ask.html"},"Ship/Show/Ask methodology"))))}u.isMDXComponent=!0}}]);