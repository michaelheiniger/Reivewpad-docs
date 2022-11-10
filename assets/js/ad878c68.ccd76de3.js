"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[44463],{31534:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),s=n(90814);const o={},r=void 0,l={unversionedId:"guides/built-ins/actions/info/index",id:"version-3.12.0/guides/built-ins/actions/info/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.12.0/guides/built-ins/actions/info/index.mdx",sourceDirName:"guides/built-ins/actions/info",slug:"/guides/built-ins/actions/info/",permalink:"/3.12.0/guides/built-ins/actions/info/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/info/index.mdx",tags:[],version:"3.12.0",frontMatter:{}},d={},p=[],m={toc:p};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Adds a message to the info section of the report."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"comment")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The comment to be added in the informations.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$info("Please do not forget to add the tests.")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: when-transactions\n    if:\n      - $hasFilePattern("**/transactions")\n    then:\n      - $info("You have changed transactions. Please schedule a meeting.")\n      - $addLabel("critical")\n'))}u.isMDXComponent=!0}}]);