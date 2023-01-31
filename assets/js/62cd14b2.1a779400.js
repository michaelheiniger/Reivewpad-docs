"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71860],{39898:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const l={},o=void 0,s={unversionedId:"guides/built-ins/functions/toJSON/index",id:"version-3.19.0/guides/built-ins/functions/toJSON/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.19.0/guides/built-ins/functions/toJSON/index.mdx",sourceDirName:"guides/built-ins/functions/toJSON",slug:"/guides/built-ins/functions/toJSON/",permalink:"/3.19.0/guides/built-ins/functions/toJSON/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/toJSON/index.mdx",tags:[],version:"3.19.0",frontMatter:{}},p={},d=[],m={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Converts a JSON serialized string to a JSON object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"json_string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON serialized string")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"JSON")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The JSON object corresponding to the serialized string.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$toJSON($context())\n$toJSON("[1, 2, 3]")\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: label-mergeable\n    if:\n      - rule: $selectFromJSON($toJSON($context()), "$.mergeable") == "true"\n    then:\n      - $addLabel("mergeable")\n'))}u.isMDXComponent=!0}}]);