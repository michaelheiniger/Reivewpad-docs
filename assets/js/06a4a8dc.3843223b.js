"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[83944],{63452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(90814);const l={},s=void 0,p={unversionedId:"guides/built-ins/functions/hasFilePattern/index",id:"version-3.12.0/guides/built-ins/functions/hasFilePattern/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.12.0/guides/built-ins/functions/hasFilePattern/index.mdx",sourceDirName:"guides/built-ins/functions/hasFilePattern",slug:"/guides/built-ins/functions/hasFilePattern/",permalink:"/3.12.0/guides/built-ins/functions/hasFilePattern/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/hasFilePattern/index.mdx",tags:[],version:"3.12.0",frontMatter:{}},o={},d=[],m={toc:d};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),":"),(0,r.kt)("p",null,"Determines whether the provided file pattern matches any of the files in the patch, returning ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," as appropriate."),(0,r.kt)("p",null,"The file pattern needs to be a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Glob_(programming)"},"glob"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"file_pattern")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The file pattern glob to look for in the patch.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")," if any of the files in the patch matches the provided file pattern, ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'$hasFilePattern("src/transactions/**")\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,r.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: core-changes\n    if:\n      - $hasFilePattern("src/transactions/**")\n    then:\n      - $assignTeamReviewer(["core"])\n'))}k.isMDXComponent=!0}}]);