"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[18503],{68269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(87462),s=(n(67294),n(3905)),i=n(90814);const r={},l=void 0,o={unversionedId:"guides/built-ins/functions/base/index",id:"version-3.12.0/guides/built-ins/functions/base/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.12.0/guides/built-ins/functions/base/index.mdx",sourceDirName:"guides/built-ins/functions/base",slug:"/guides/built-ins/functions/base/",permalink:"/3.12.0/guides/built-ins/functions/base/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/base/index.mdx",tags:[],version:"3.12.0",frontMatter:{}},p={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Retrieves the name of the branch the pull request should be pulled into."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Return value"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name of the branch the pull request should be pulled into.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$base()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: staging-changes\n    if:\n      - $base() == "stage"\n    then:\n      - $info("Please make sure you\'ve tested your changes in staging environment.")\n'))}m.isMDXComponent=!0}}]);