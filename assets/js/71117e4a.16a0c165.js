"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2367],{47068:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var t=i(87462),a=(i(67294),i(3905)),s=i(90814);const r={},o=void 0,d={unversionedId:"guides/built-ins/actions/assignRandomReviewer/index",id:"version-3.21.0/guides/built-ins/actions/assignRandomReviewer/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.21.0/guides/built-ins/actions/assignRandomReviewer/index.mdx",sourceDirName:"guides/built-ins/actions/assignRandomReviewer",slug:"/guides/built-ins/actions/assignRandomReviewer/",permalink:"/3.21.0/guides/built-ins/actions/assignRandomReviewer/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/assignRandomReviewer/index.mdx",tags:[],version:"3.21.0",frontMatter:{}},l={},p=[],u={toc:p};function m(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Assigns a random user of the GitHub organization as the reviewer.\nThis action will always pick a user different than the author of the pull request."),(0,a.kt)("p",null,"However, if the pull request already has a reviewer, nothing happens. This is to prevent\nadding a reviewer each time the pull request is updated."),(0,a.kt)("p",null,"When there's no reviewers to assign to, an error is returned."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,a.kt)("strong",{parentName:"p"},"not")," available for ",(0,a.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,a.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$assignRandomReviewer()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: assign-reviewer\n    if:\n      - $description() != ""\n    then:\n      - $assignRandomReviewer()\n'))}m.isMDXComponent=!0}}]);