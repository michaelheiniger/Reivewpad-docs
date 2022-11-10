"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[15561],{30067:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),s=a(90814);const i={},o=void 0,d={unversionedId:"guides/built-ins/actions/addToProject/index",id:"version-3.13.0/guides/built-ins/actions/addToProject/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.13.0/guides/built-ins/actions/addToProject/index.mdx",sourceDirName:"guides/built-ins/actions/addToProject",slug:"/guides/built-ins/actions/addToProject/",permalink:"/guides/built-ins/actions/addToProject/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/addToProject/index.mdx",tags:[],version:"3.13.0",frontMatter:{}},l={},p=[],u={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Adds a pull request to a project with a particular status."),(0,r.kt)("p",null,"If the project doesn't exist, an error is returned."),(0,r.kt)("p",null,"If the status doesn't exist, an error is returned."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"project_name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the project you want to attach the pull request to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The status of the pull request (must be present as a status).")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$addToProject("reviewpad", "in progress")\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: add-to-project\n    if:\n        - $hasLinkedIssues() == false\n    then:\n        - $addToProject("jupiter", "in progress")\n'))}m.isMDXComponent=!0}}]);