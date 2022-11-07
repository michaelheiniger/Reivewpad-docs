"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[23576],{63198:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var i=n(87462),a=(n(67294),n(3905)),l=n(90814);const r={},s=void 0,p={unversionedId:"guides/built-ins/functions/title/index",id:"guides/built-ins/functions/title/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/title/index.mdx",sourceDirName:"guides/built-ins/functions/title",slug:"/guides/built-ins/functions/title/",permalink:"/next/guides/built-ins/functions/title/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/title/index.mdx",tags:[],version:"current",frontMatter:{}},u={},o=[],d={toc:o};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Retrieves the title of the pull request."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"none")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The title of the pull request.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"$title()\n")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(l.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: check-compliance\n    if:\n      - $title() == ""\n    then:\n      - $error("A pull request must have a title")\n      - $fail()\n'))}m.isMDXComponent=!0}}]);