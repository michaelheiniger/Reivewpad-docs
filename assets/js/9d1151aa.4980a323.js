"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94058],{50342:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var i=n(87462),o=(n(67294),n(3905)),a=n(90814);const s={},m=void 0,r={unversionedId:"guides/built-ins/actions/commitLint/index",id:"version-3.17.0/guides/built-ins/actions/commitLint/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.17.0/guides/built-ins/actions/commitLint/index.mdx",sourceDirName:"guides/built-ins/actions/commitLint",slug:"/guides/built-ins/actions/commitLint/",permalink:"/3.17.0/guides/built-ins/actions/commitLint/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/commitLint/index.mdx",tags:[],version:"3.17.0",frontMatter:{}},c={},p=[],l={toc:p};function d(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),":"),(0,o.kt)("p",null,"Checks if the commits in the pull request follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits specification"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,o.kt)("strong",{parentName:"p"},"not")," available for ",(0,o.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,o.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"none")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"$commitLint()\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,o.kt)(a.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: check-conventional-commits\n    if:\n      - $base() == "main"\n    then:\n      - $commitLint()\n'))}d.isMDXComponent=!0}}]);