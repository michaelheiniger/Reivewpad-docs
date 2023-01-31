"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18479],{35928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),s=(n(67294),n(3905)),r=n(90814);const a={},o=void 0,l={unversionedId:"guides/built-ins/functions/requestedReviewers/index",id:"version-3.17.0/guides/built-ins/functions/requestedReviewers/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.17.0/guides/built-ins/functions/requestedReviewers/index.mdx",sourceDirName:"guides/built-ins/functions/requestedReviewers",slug:"/guides/built-ins/functions/requestedReviewers/",permalink:"/3.17.0/guides/built-ins/functions/requestedReviewers/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/requestedReviewers/index.mdx",tags:[],version:"3.17.0",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Description"),":"),(0,s.kt)("p",null,"Retrieves the list of GitHub user logins or team slugs that were requested to review the pull request."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,s.kt)("strong",{parentName:"p"},"not")," available for ",(0,s.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,s.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"none")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Return value"),":"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"[]string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub user logins or team slugs that were requested to review the pull request.")))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Examples"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"$requestedReviewers()\n")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,s.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: assign-reviewer\n    if:\n      - $requestedReviewers() == []\n    then:\n      - $info("Please assign a reviewer.")\n'))}m.isMDXComponent=!0}}]);