"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76325],{92056:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),r=n(90814);const o={},l=void 0,s={unversionedId:"guides/built-ins/functions/isLinkedToProject/index",id:"version-3.21.0/guides/built-ins/functions/isLinkedToProject/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.21.0/guides/built-ins/functions/isLinkedToProject/index.mdx",sourceDirName:"guides/built-ins/functions/isLinkedToProject",slug:"/guides/built-ins/functions/isLinkedToProject/",permalink:"/3.21.0/guides/built-ins/functions/isLinkedToProject/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/isLinkedToProject/index.mdx",tags:[],version:"3.21.0",frontMatter:{}},p={},d=[],k={toc:d};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Checks if the pull request / issue is linked to a GitHub project with a given title."),(0,a.kt)("p",null,"If the project doesn't exist, an error is returned."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"project_title")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The title of the project - case sensitive.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return value"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," if the pull request / issue is linked to the project, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'$isLinkedToProject("project title")\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,a.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: add-to-project\n    if:\n      - \'!$isLinkedToProject("project-title")\'\n    then:\n      - $addToProject("project-title", "column")\n'))}u.isMDXComponent=!0}}]);