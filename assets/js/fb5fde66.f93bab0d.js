"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[90492],{21440:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),o=n(90814);const r={},s=void 0,l={unversionedId:"guides/built-ins/actions/commentOnce/index",id:"guides/built-ins/actions/commentOnce/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/actions/commentOnce/index.mdx",sourceDirName:"guides/built-ins/actions/commentOnce",slug:"/guides/built-ins/actions/commentOnce/",permalink:"/next/guides/built-ins/actions/commentOnce/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/commentOnce/index.mdx",tags:[],version:"current",frontMatter:{}},m={},c=[],u={toc:c};function p(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Posts a comment to the pull request once."),(0,i.kt)("p",null,"If the comment is already present, then the action does nothing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"comment")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The body of the comment.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$commentOnce("This is your first contribution! Thank you!")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(o.Z,{language:"yml",mdxType:"CodeBlock"},"workflows:\n  - name: comment-pull-request\n    description: Comment pull request\n    if:\n      - rule: first-contribution\n    then:\n      - '$commentOnce(\"This is your first contribution! Thank you!\")'\n"))}p.isMDXComponent=!0}}]);