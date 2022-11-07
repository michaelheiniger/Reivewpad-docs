"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[45874],{91479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const l={},s=void 0,o={unversionedId:"guides/built-ins/actions/merge/index",id:"version-3.10.0/guides/built-ins/actions/merge/index",title:"index",description:"Please note that this function requires the Reviewpad Action to be installed with a GitHub token",source:"@site/versioned_docs/version-3.10.0/guides/built-ins/actions/merge/index.mdx",sourceDirName:"guides/built-ins/actions/merge",slug:"/guides/built-ins/actions/merge/",permalink:"/3.10.0/guides/built-ins/actions/merge/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/merge/index.mdx",tags:[],version:"3.10.0",frontMatter:{}},m={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Requires GitHub token",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Please note that this function requires the ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation-action-tokenized"},"Reviewpad Action to be installed with a GitHub token"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Merges a pull request with a specific merge method."),(0,i.kt)("p",null,"By default, if no parameter is provided, it will perform a standard git merge."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"method")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The merge method (merge, rebase or squash).")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"$merge()\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},"workflows:\n  - name: auto-merge-small-pull-request\n    description: Auto-merge small pull request\n    if:\n      - rule: is-small\n    then:\n      - '$merge()'\n"))}d.isMDXComponent=!0}}]);