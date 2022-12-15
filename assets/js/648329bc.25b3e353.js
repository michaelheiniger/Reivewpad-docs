"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12931],{42059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),s=n(90814);const r={},o=void 0,l={unversionedId:"guides/built-ins/actions/disableActions/index",id:"version-3.17.0/guides/built-ins/actions/disableActions/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.17.0/guides/built-ins/actions/disableActions/index.mdx",sourceDirName:"guides/built-ins/actions/disableActions",slug:"/guides/built-ins/actions/disableActions/",permalink:"/3.17.0/guides/built-ins/actions/disableActions/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/disableActions/index.mdx",tags:[],version:"3.17.0",frontMatter:{}},d={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Disables the list of actions passed as an argument."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"actions")),(0,a.kt)("td",{parentName:"tr",align:"left"},"[","]string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The list of actions to be disabled.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$disableActions(["assignReviewer"])\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: protect-actions\n    if:\n      - $isDraft()\n    then:\n      - $disableActions(["assignReviewer", "assignTeamReviewer", "assignRandomReviewer"])\n      - $disableActions(["merge"])\n'))}m.isMDXComponent=!0}}]);