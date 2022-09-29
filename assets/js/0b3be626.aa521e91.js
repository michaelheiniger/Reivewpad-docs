"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[2601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"Introduction",id:"introduction",slug:"/"},i=void 0,l={unversionedId:"introduction",id:"version-3.3.1/introduction",title:"Introduction",description:"Reviewpad is an easy-to-use GitHub Action to accelerate the software delivery lifecycle.",source:"@site/versioned_docs/version-3.3.1/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/3.3.1/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/introduction.mdx",tags:[],version:"3.3.1",frontMatter:{title:"Introduction",id:"introduction",slug:"/"},sidebar:"DocsSidebar",next:{title:"Installation",permalink:"/3.3.1/getting-started/installation"}},s={},p=[{value:"Why Reviewpad? \ud83d\ude0d",id:"why-reviewpad-",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," \u26a1 Reviewpad is an easy-to-use GitHub Action to accelerate the software delivery lifecycle. ")),(0,o.kt)("p",null,"Reviewpad reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration file from your repository."),(0,o.kt)("p",null,"This configuration is where you can specify your pull request workflows."),(0,o.kt)("p",null,"The action enforces and automates those processes so that developers can have more time for the things that really matter!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reviewpad Example",src:r(61794).Z,width:"3070",height:"2406"})),(0,o.kt)("h2",{id:"why-reviewpad-"},"Why Reviewpad? \ud83d\ude0d"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," \ud83d\udd50 Pull requests take too much time to merge.")),(0,o.kt)("p",null,"Most actions around pull requests such as reviewer assignment, the code review itself, and the merge actions are still manual. "),(0,o.kt)("p",null,"It is up to the developers to understand:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Who")," should review;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"What")," to review;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"When")," to merge;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"How")," to merge;")),(0,o.kt)("p",null,"\ud83d\udcaa ",(0,o.kt)("strong",{parentName:"p"},"We believe that most of these actions follow an implicit team policy that could be specified and automated.")),(0,o.kt)("p",null,"So we have created Reviewpad to help you automate:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pull request merges;"),(0,o.kt)("li",{parentName:"ol"},"Code review assignment policies;"),(0,o.kt)("li",{parentName:"ol"},"Custom code quality and security comments;"),(0,o.kt)("li",{parentName:"ol"},"Pull request labels.")),(0,o.kt)("p",null,"Finally, having Reviewpad configuration in a git repository allows it to be updated in a consistent way and help onboarding new team members."))}u.isMDXComponent=!0},61794:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/reviewpad_preview_2x-29e0b8673e1081e4922522911fb4d201.png"}}]);