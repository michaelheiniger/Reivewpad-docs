"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[81153],{22456:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=a(87462),t=(a(67294),a(3905)),s=a(90814);const r={title:"Enforce branch conventions",id:"enforce-branch-conventions",slug:"/use-cases/enforce-branch-conventions"},c=void 0,i={unversionedId:"use-cases/enforce-branch-conventions/enforce-branch-conventions",id:"version-3.12.0/use-cases/enforce-branch-conventions/enforce-branch-conventions",title:"Enforce branch conventions",description:"To maintain consistency of development and best practices of CI/CD, it is important to enforce a policy of branch naming.",source:"@site/versioned_docs/version-3.12.0/use-cases/enforce-branch-conventions/index.mdx",sourceDirName:"use-cases/enforce-branch-conventions",slug:"/use-cases/enforce-branch-conventions",permalink:"/3.12.0/use-cases/enforce-branch-conventions",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/enforce-branch-conventions/index.mdx",tags:[],version:"3.12.0",frontMatter:{title:"Enforce branch conventions",id:"enforce-branch-conventions",slug:"/use-cases/enforce-branch-conventions"},sidebar:"DocsSidebar",previous:{title:"Comment on pull requests",permalink:"/3.12.0/use-cases/comment-on-pull-requests"},next:{title:"Enforce conventional commits",permalink:"/3.12.0/use-cases/enforce-conventional-commits"}},l={},d=[{value:"Enforce branch name and add label based on branches",id:"enforce-branch-name-and-add-label-based-on-branches",level:2}],u={toc:d};function p(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"To maintain consistency of development and best practices of CI/CD, it is important to enforce a policy of branch naming."),(0,t.kt)("p",null,"Reviewpad can be used to enforce a branch naming policy and also automatically add labels based on the branch names."),(0,t.kt)("h2",{id:"enforce-branch-name-and-add-label-based-on-branches"},"Enforce branch name and add label based on branches"),(0,t.kt)(s.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  type-bugfix:\n    name: \'type:bugfix :beetle:\'\n    description: Provides a bug fix\n    color: F9B1C9\n  type-feature:\n    name: \'type:feature :rocket:\'\n    description: Provides a new feature\n    color: 65ECA3\n  type-support:\n    name: \'type:support :hammer:\'\n    description: Provides a misc change\n    color: CDDBDC\n\nworkflows:\n  - name: enforce-branch-naming\n    if:\n      - rule: $startsWith($head(), "bugfix/")\n        extra-actions:\n          - $addLabel("type-bugfix")\n      - rule: $startsWith($head(), "feature/")\n        extra-actions:\n          - $addLabel("type-feature")\n      - rule: $startsWith($head(), "support/")\n        extra-actions:\n          - $addLabel("type-support")\n\n  - name: default-policy\n    description: By default it will put a warning\n    if:\n      - \'true\'\n    then:\n      - $addLabel("needs-review")\n      # The expression is wrapped in quotes to avoid YAML parsing errors\n      - \'$warn("All branches must use the following nomenclature: prefix/name where prefix can be one of: bugfix, enhancement, feature, hotfix or support.")\'\n\n  - name: require-linear-history\n    always-run: true\n    if:\n      - $hasLinearHistory() == false\n    then:\n      - $warn("This pull request does not have linear history - please fix this!")\n'))}p.isMDXComponent=!0}}]);