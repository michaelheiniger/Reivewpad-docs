"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[46132],{54717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905)),s=n(90814);const a={},u=void 0,l={unversionedId:"guides/built-ins/functions/requestedReviewers/index",id:"guides/built-ins/functions/requestedReviewers/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/requestedReviewers/index.mdx",sourceDirName:"guides/built-ins/functions/requestedReviewers",slug:"/guides/built-ins/functions/requestedReviewers/",permalink:"/next/guides/built-ins/functions/requestedReviewers/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/requestedReviewers/index.mdx",tags:[],version:"current",frontMatter:{}},o={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Retrieves the list of GitHub user logins or team slugs that were requested to review the pull request."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,r.kt)("strong",{parentName:"p"},"not")," avaible for ",(0,r.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,r.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"none")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The list of GitHub user logins or team slugs that were requested to review the pull request.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"$requestedReviewers()\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: assign-reviewer\n    if:\n      - $requestedReviewers() == []\n    then:\n      - $info("Please assign a reviewer.")\n'))}m.isMDXComponent=!0}}]);