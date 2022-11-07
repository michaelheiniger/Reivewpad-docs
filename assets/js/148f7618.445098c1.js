"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[16134],{39693:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905)),r=a(90814);const l={},s=void 0,o={unversionedId:"guides/built-ins/functions/team/index",id:"guides/built-ins/functions/team/index",title:"index",description:"Description:",source:"@site/docs/guides/built-ins/functions/team/index.mdx",sourceDirName:"guides/built-ins/functions/team",slug:"/guides/built-ins/functions/team/",permalink:"/next/guides/built-ins/functions/team/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/functions/team/index.mdx",tags:[],version:"current",frontMatter:{}},m={},p=[],d={toc:p};function u(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Retrieves the members of a team and child teams."),(0,i.kt)("p",null,"To list members in a team, the team must be visible to the authenticated user."),(0,i.kt)("p",null,"By default, a GitHub action does not have permission to access organization members."),(0,i.kt)("p",null,"Because of that, in order for the ",(0,i.kt)("inlineCode",{parentName:"p"},"team")," built-in to work we need to provide a GitHub token to the Reviewpad action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"team_slug")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The slug of the team name on GitHub.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return value"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The list of all team and child teams members GitHub login.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$team("devops")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: assign-devops-reviewer\n    if:\n      - $isElementOf($author(), $team("devops"))\n    then:\n      - $assignTeamReviewer(["devops"])\n'))}u.isMDXComponent=!0}}]);