"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[9521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"auto-merge",slug:"auto-merge",title:"Auto-merge"},o=void 0,s={unversionedId:"use-cases/auto-merge",id:"version-3.9.0/use-cases/auto-merge",title:"Auto-merge",description:"Please note that this function requires the Reviewpad Action to be installed with a GitHub token",source:"@site/versioned_docs/version-3.9.0/use-cases/auto-merge.md",sourceDirName:"use-cases",slug:"/use-cases/auto-merge",permalink:"/use-cases/auto-merge",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/auto-merge.md",tags:[],version:"3.9.0",frontMatter:{id:"auto-merge",slug:"auto-merge",title:"Auto-merge"},sidebar:"DocsSidebar",previous:{title:"Use Cases",permalink:"/use-cases"},next:{title:"Automated Labelling",permalink:"/use-cases/automated-labelling/automated-labelling"}},l={},c=[{value:"Auto-merge based on file properties",id:"auto-merge-based-on-file-properties",level:2},{value:"Auto-merge small PRs",id:"auto-merge-small-prs",level:2},{value:"Auto-merge non-critical PRs",id:"auto-merge-non-critical-prs",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Requires GitHub token",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please note that this function requires the ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-with-github-token"},"Reviewpad Action to be installed with a GitHub token"))),(0,a.kt)("p",null,"The ability to configure automatic PR merges can greatly unblock developers that typically wait for hours, or even days, to receive a LGTM review."),(0,a.kt)("p",null,"Since not every PR needs the same review process, using the semantic features of Reviewpad, you can configure many scenarios where auto-merge seems natural."),(0,a.kt)("p",null,"Out of the box, Reviewpad supports a ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins#merge"},"merge action")," which can be used in multiple scenarios."),(0,a.kt)("h2",{id:"auto-merge-based-on-file-properties"},"Auto-merge based on file properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "76dbbe"\n\nrules:\n  - name: changesToMDFiles\n    kind: patch\n    description: Patch only contains changes to files with extension .md\n    spec: $hasFileExtensions([".md"])\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: changesToMDFiles\n    then:\n      - $addLabel("ship")\n      - $merge()\n')),(0,a.kt)("h2",{id:"auto-merge-small-prs"},"Auto-merge small PRs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    color: "76dbbe"\n\nrules:\n  - name: isSmallPatch\n    kind: patch\n    description: Patch has less than 90 changes and 6 files\n    spec: $size() < 90 && $fileCount() <= 5\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: isSmallPatch\n    then:\n      - $addLabel("ship")\n      - $merge("rebase")\n')),(0,a.kt)("h2",{id:"auto-merge-non-critical-prs"},"Auto-merge non-critical PRs"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins#hasannotation"},(0,a.kt)("strong",{parentName:"a"},"hasAnnotation"))," built-in can be used to configure powerful auto-merges. See a more in-depth example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins#hasannotation"},(0,a.kt)("strong",{parentName:"a"},"hasAnnotation"))," in the ",(0,a.kt)("a",{parentName:"p",href:"/use-cases/label-critical-changes-with-semantic-code-annotations"},"automated labelling section"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    color: "76dbbe"\n\nrules:\n  - name: notCriticalChanges\n    kind: patch\n    description: Patch does not touch critical code\n    spec: \'!$hasAnnotation("critical")\'\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: notCriticalChanges\n    then:\n      - $addLabel("ship")\n      - $merge("rebase")\n')))}u.isMDXComponent=!0}}]);