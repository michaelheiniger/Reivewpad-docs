"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[55618],{9728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const s={},o=void 0,l={unversionedId:"guides/built-ins/actions/warn/index",id:"version-3.13.0/guides/built-ins/actions/warn/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.13.0/guides/built-ins/actions/warn/index.mdx",sourceDirName:"guides/built-ins/actions/warn",slug:"/guides/built-ins/actions/warn/",permalink:"/guides/built-ins/actions/warn/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/warn/index.mdx",tags:[],version:"3.13.0",frontMatter:{}},d={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Adds a message to the warnings section of the report."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"comment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The comment to be added in the warnings.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$warn("Please do not forget to add the tests.")\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: validate-changes\n    if:\n      - $hasFilePattern("*.lock")\n    then:\n      - $warn("Please remove the lock file from the commit.")\n'))}c.isMDXComponent=!0}}]);