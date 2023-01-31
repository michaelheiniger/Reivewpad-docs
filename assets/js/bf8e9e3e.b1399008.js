"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27985],{13546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),i=n(90814);const o={},s=void 0,r={unversionedId:"guides/built-ins/actions/close/index",id:"version-3.13.0/guides/built-ins/actions/close/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.13.0/guides/built-ins/actions/close/index.mdx",sourceDirName:"guides/built-ins/actions/close",slug:"/guides/built-ins/actions/close/",permalink:"/3.13.0/guides/built-ins/actions/close/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/close/index.mdx",tags:[],version:"3.13.0",frontMatter:{}},p={},d=[],m={toc:d};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description"),":"),(0,l.kt)("p",null,"Closes an issue / pull request with a given comment - without merging it."),(0,l.kt)("p",null,"By default, if no comment is provided, it will close the issue / pull request without a comment."),(0,l.kt)("p",null,"For issues, it can also be given a closure reason."),(0,l.kt)("p",null,"By default, if no closure reason is provided, the issue will be closed as ",(0,l.kt)("inlineCode",{parentName:"p"},"completed"),"."),(0,l.kt)("p",null,"When a closure reason is provided and we don't want to close the issue with a comment then we need to pass the comment parameter as ",(0,l.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Available for:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Available"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"issue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pull_request")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"comment")," (optional)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The body of the comment.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"reason")," (optional) (issues only)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The reason for closing. The options are ",(0,l.kt)("inlineCode",{parentName:"td"},"completed")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"not_planned"),".")))),(0,l.kt)("p",null,"Please note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"reason")," parameter is only available for issues."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'$close()                                            # close without comment or reason\n$close("Closed due inactivity")                     # close with comment and no reason\n$close("", "not_planned")                           # close with no comment but reason\n$close("This project is deprecated", "not_planned") # close with a comment and reason\n')),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,l.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: stale\n    if:\n      - rule: $lastEventAt() < 30 days ago\n    then:\n      - $addLabel("stale")\n      - $close("This pull request has been automatically closed due to inactivity")\n  - name: project_deprecated\n    on:\n      - "issue"\n    if:\n      - rule: $isElementOf("jupiter", $labels())\n    then:\n      - $close("The project `jupiter` is deprecated", "not_planned")\n'))}c.isMDXComponent=!0}}]);