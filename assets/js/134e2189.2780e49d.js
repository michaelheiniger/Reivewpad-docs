"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[7064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),v=a,m=c["".concat(l,".").concat(v)]||c[v]||d[v]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"attention-set",slug:"attention-set",title:"Attention Set"},o=void 0,s={unversionedId:"use-cases/attention-set",id:"version-3.9.0/use-cases/attention-set",title:"Attention Set",description:"The Attention Set defines what kind of attention a pull request needs at a certain time.",source:"@site/versioned_docs/version-3.9.0/use-cases/attention-set.md",sourceDirName:"use-cases",slug:"/use-cases/attention-set",permalink:"/use-cases/attention-set",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/attention-set.md",tags:[],version:"3.9.0",frontMatter:{id:"attention-set",slug:"attention-set",title:"Attention Set"},sidebar:"DocsSidebar",previous:{title:"Remove label based on file paths",permalink:"/use-cases/remove-label-based-on-file-paths"},next:{title:"Check issue description",permalink:"/use-cases/check-issue-description"}},l={},p=[{value:"reviewpad.yml",id:"reviewpadyml",level:2},{value:"Reviewpad Action",id:"reviewpad-action",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Unavailable <code>pull_request_review_thread</code> event",id:"unavailable-pull_request_review_thread-event",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Attention Set")," defines ",(0,a.kt)("strong",{parentName:"p"},"what kind of attention a pull request needs at a certain time"),"."),(0,a.kt)("p",null,"For instance, a just created pull request with an assigned reviewer requires the reviewer attention but not the author attention."),(0,a.kt)("h2",{id:"reviewpadyml"},"reviewpad.yml"),(0,a.kt)("p",null,"In order to define the attention set we will use the built-ins ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins#iswaitingforreview"},"isWaitingForReview")," and ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins#hasunaddressedthreads"},"hasUnaddressedThreads"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"reviewpad.yml","reviewpad.yml":!0},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: waiting-review\n    kind: patch\n    spec: "$isWaitingForReview()"\n  - name: not-waiting-review\n    kind: patch\n    spec: \'!$rule("waiting-review")\'\n  - name: author-attention\n    kind: patch\n    spec: "$hasUnaddressedThreads()"\n  - name: not-author-attention\n    kind: patch\n    spec: \'!$rule("author-attention")\'\n\nworkflows:\n  - name: attention-set\n    if:\n      - rule: waiting-review\n        extra-actions:\n          - \'$addLabel("waiting-review")\'\n      - rule: not-waiting-review\n        extra-actions:\n          - \'$removeLabel("waiting-review")\'\n      - rule: author-attention\n        extra-actions:\n          - \'$addLabel("requires-author-attention")\'\n      - rule: not-author-attention\n        extra-actions:\n          - \'$removeLabel("requires-author-attention")\'\n')),(0,a.kt)("h2",{id:"reviewpad-action"},"Reviewpad Action"),(0,a.kt)("p",null,"In order to have the automation for ",(0,a.kt)("inlineCode",{parentName:"p"},"Attention Set")," working properly we need to update our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/reviewpad-action"},"reviewpad action"),", mainly the list of ",(0,a.kt)("inlineCode",{parentName:"p"},"events")," to which reviewpad action is triggered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"reviewpad.yml","reviewpad.yml":!0},"name: Reviewpad\n\n# List of events that will trigger reviewpad\non:\n  pull_request_target:\n    types:\n      - opened\n      - reopened\n      - synchronize\n      - ready_for_review\n      - converted_to_draft\n      - edited\n      - review_requested\n      - review_request_removed\n  pull_request_review:\n  pull_request_review_comment:\n\njobs:\n  reviewpad:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Reviewpad\n        uses: reviewpad/action@v3.x\n")),(0,a.kt)("h2",{id:"known-issues"},"Known issues"),(0,a.kt)("h3",{id:"unavailable-pull_request_review_thread-event"},"Unavailable ",(0,a.kt)("inlineCode",{parentName:"h3"},"pull_request_review_thread")," event"),(0,a.kt)("p",null,"As for now GitHub actions are not able to be triggered on ",(0,a.kt)("inlineCode",{parentName:"p"},"pull_request_review_thread")," events. This limitation does not allow ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad")," to be triggered when a review thread status is updated (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"resolved")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"unresolved"),")"),(0,a.kt)("p",null,"To solve this issue one can comment a pull request with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"/reviewpad run\n")))}d.isMDXComponent=!0}}]);