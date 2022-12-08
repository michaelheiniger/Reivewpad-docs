"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[27066],{61390:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var i=n(87462),a=(n(67294),n(3905)),s=n(90814);const o={},l=void 0,r={unversionedId:"guides/built-ins/actions/titleLint/index",id:"guides/built-ins/actions/titleLint/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/titleLint/index.mdx",sourceDirName:"guides/built-ins/actions/titleLint",slug:"/guides/built-ins/actions/titleLint/",permalink:"/next/guides/built-ins/actions/titleLint/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/titleLint/index.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],c={toc:m};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Checks if the pull request title follows the ",(0,a.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits specification"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,a.kt)("strong",{parentName:"p"},"not")," avaible for ",(0,a.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,a.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$titleLint()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: check-conventional-commits\n    if:\n      - $base() == "main"\n    then:\n      - $titleLint()\n'))}u.isMDXComponent=!0}}]);