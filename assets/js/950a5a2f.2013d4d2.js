"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90765],{31261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s={},l=void 0,o={unversionedId:"guides/built-ins/functions/hasBinaryFile/index",id:"version-3.17.0/guides/built-ins/functions/hasBinaryFile/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.17.0/guides/built-ins/functions/hasBinaryFile/index.mdx",sourceDirName:"guides/built-ins/functions/hasBinaryFile",slug:"/guides/built-ins/functions/hasBinaryFile/",permalink:"/3.17.0/guides/built-ins/functions/hasBinaryFile/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasBinaryFile/index.mdx",tags:[],version:"3.17.0",frontMatter:{}},p={},d=[],u={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Checks if a pull request has a binary file in the patch."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,i.kt)("strong",{parentName:"p"},"not")," available for ",(0,i.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"none")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the pull request contains a binary file, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$hasBinaryFile()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: disallow-binary-file\n    if:\n      - $hasBinaryFile()\n    then:\n      - $close()\n      - $error("Please don\'t add any binary file into the repository")\n'))}m.isMDXComponent=!0}}]);