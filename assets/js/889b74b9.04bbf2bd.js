"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[95624],{66032:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var i=s(87462),t=(s(67294),s(3905)),a=s(90814);const o={title:"Assign review to a team",id:"assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team"},r=void 0,c={unversionedId:"use-cases/reviewer-assignment/assign-review-to-a-team/assign-review-to-a-team",id:"version-3.10.0/use-cases/reviewer-assignment/assign-review-to-a-team/assign-review-to-a-team",title:"Assign review to a team",description:"Please note that this function requires the Reviewpad Action to be installed with a GitHub token",source:"@site/versioned_docs/version-3.10.0/use-cases/reviewer-assignment/assign-review-to-a-team/index.mdx",sourceDirName:"use-cases/reviewer-assignment/assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team",permalink:"/3.10.0/use-cases/assign-review-to-a-team",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/reviewer-assignment/assign-review-to-a-team/index.mdx",tags:[],version:"3.10.0",frontMatter:{title:"Assign review to a team",id:"assign-review-to-a-team",slug:"/use-cases/assign-review-to-a-team"},sidebar:"DocsSidebar",previous:{title:"Assign review to 3 developers",permalink:"/3.10.0/use-cases/assign-review-to-3-developers"},next:{title:"Assign senior reviewers to new joiners",permalink:"/3.10.0/use-cases/assign-senior-reviewers-to-new-joiners"}},m={},g=[],d={toc:g};function v(e){let{components:n,...s}=e;return(0,t.kt)("wrapper",(0,i.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("admonition",{title:"Requires GitHub token",type:"warning"},(0,t.kt)("p",{parentName:"admonition"},"Please note that this function requires the ",(0,t.kt)("a",{parentName:"p",href:"/getting-started/installation-action-tokenized"},"Reviewpad Action to be installed with a GitHub token"))),(0,t.kt)("p",null,"An example of assigning a review to a team when touching a specific folder."),(0,t.kt)(a.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changes-to-configurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: '$hasFilePattern(\"src/config/**\")'\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changes-to-configurations\n    then:\n      # Assign the review to devops team\n      - '$assignTeamReviewer(\"devops\")'\n"),(0,t.kt)("p",null,"An example of assigning a review to a specific number of elements on a team."),(0,t.kt)(a.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changes-to-configurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: \'$hasFilePattern("src/config/**")\'\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changes-to-configurations\n    then:\n      # Assign the review to 3 random reviewers from devops team\n      - \'$assignReviewer($team("devops"), 3, "reviewpad")\'\n'),(0,t.kt)("p",null,"An example of assigning a review to a team and a specific element."),(0,t.kt)(a.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changes-to-configurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: \'$hasFilePattern("src/config/**")\'\n\nworkflows:\n  - name: ask\n    description: Ask John and devops team\n    if:\n      - rule: changes-to-configurations\n    then:\n      # Assign the review to john\n      - \'$assignReviewer(["john"], "random")\'\n      # Assign the review to devops team\n      - \'$assignTeamReviewer("devops")\'\n'))}v.isMDXComponent=!0}}]);