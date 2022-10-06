"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[7225],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),d=s,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||n;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>m});var r=a(87462),s=(a(67294),a(3905));const n={id:"timestamps",slug:"/use-cases/timestamps",title:"Timestamps"},i=void 0,o={unversionedId:"use-cases/timestamps/timestamps",id:"version-3.9.0/use-cases/timestamps/timestamps",title:"Timestamps",description:"Reviewpad timestamps allow us to trigger workflows based on time.",source:"@site/versioned_docs/version-3.9.0/use-cases/timestamps/timestamps.md",sourceDirName:"use-cases/timestamps",slug:"/use-cases/timestamps",permalink:"/use-cases/timestamps",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/timestamps/timestamps.md",tags:[],version:"3.9.0",frontMatter:{id:"timestamps",slug:"/use-cases/timestamps",title:"Timestamps"},sidebar:"DocsSidebar",previous:{title:"Stale Issues or Pull Requests",permalink:"/use-cases/stale-issues-or-pull-requests"},next:{title:"Label on change freeze",permalink:"/use-cases/label-on-change-freeze"}},l={},m=[{value:"RFC3339 and similar Timestamps",id:"rfc3339-and-similar-timestamps",level:3},{value:"Relative Timestamps",id:"relative-timestamps",level:3}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Reviewpad timestamps allow us to trigger workflows based on time."),(0,s.kt)("p",null,"We are able to use ",(0,s.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#pkg-constants"},"RFC3339 timestamps")," or relative timestamps."),(0,s.kt)("h3",{id:"rfc3339-and-similar-timestamps"},"RFC3339 and similar Timestamps"),(0,s.kt)("p",null,"Here we can use a timestamp in similar ",(0,s.kt)("inlineCode",{parentName:"p"},"RFC3339")," format:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"YYYYMMDD")," - e.g. 20220405"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"YYYY-MM-DD")," - e.g. 2022-04-05"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"YYYYMMDDTHH:MM:SS")," - e.g. 20220405T22:01:50"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"YYYY-MM-DDTHH:MM:SS")," - e.g. 2022-04-05T22:01:50")),(0,s.kt)("h3",{id:"relative-timestamps"},"Relative Timestamps"),(0,s.kt)("p",null,"Use time as expression ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"TIME year|month|day|week|hour|minute ago")),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"15 days ago"),(0,s.kt)("li",{parentName:"ul"},"3 months ago"),(0,s.kt)("li",{parentName:"ul"},"1 hour ago")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\ud83d\udcd8 Aladino Syntax"),(0,s.kt)("p",{parentName:"blockquote"},"Check ",(0,s.kt)("a",{parentName:"p",href:"/guides/aladino/syntax"},"Aladino Syntax")," for more details about timestamps.")))}u.isMDXComponent=!0}}]);