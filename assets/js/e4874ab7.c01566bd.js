"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52293],{27628:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=n(87462),s=(n(67294),n(3905)),r=n(90814);const o={title:"Auto-merge",id:"auto-merge",slug:"/use-cases/auto-merge"},i=void 0,l={unversionedId:"use-cases/auto-merge/auto-merge",id:"version-3.17.0/use-cases/auto-merge/auto-merge",title:"Auto-merge",description:"The ability to configure automatic pull request merge can greatly unblock developers that typically wait for hours, or even days, to receive a LGTM review.",source:"@site/versioned_docs/version-3.17.0/use-cases/auto-merge/index.mdx",sourceDirName:"use-cases/auto-merge",slug:"/use-cases/auto-merge",permalink:"/3.17.0/use-cases/auto-merge",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/auto-merge/index.mdx",tags:[],version:"3.17.0",frontMatter:{title:"Auto-merge",id:"auto-merge",slug:"/use-cases/auto-merge"},sidebar:"DocsSidebar",previous:{title:"Use cases",permalink:"/3.17.0/use-cases"},next:{title:"Automated Labelling",permalink:"/3.17.0/use-cases/automated-labelling"}},u={},p=[{value:"Auto-merge based on file properties",id:"auto-merge-based-on-file-properties",level:2},{value:"Auto-merge small pull requests",id:"auto-merge-small-pull-requests",level:2},{value:"Auto-merge non-critical pull requests",id:"auto-merge-non-critical-pull-requests",level:2},{value:"Auto-merge on required approvals",id:"auto-merge-on-required-approvals",level:2}],c={toc:p};function m(e){let{components:a,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ability to configure automatic pull request merge can greatly unblock developers that typically wait for hours, or even days, to receive a LGTM review."),(0,s.kt)("p",null,"Since not every pull request needs the same review process, using the semantic features of Reviewpad, you can configure many scenarios where auto-merge seems natural."),(0,s.kt)("p",null,"Out of the box, Reviewpad supports a ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins#merge"},"merge action")," which can be used in multiple scenarios."),(0,s.kt)("h2",{id:"auto-merge-based-on-file-properties"},"Auto-merge based on file properties"),(0,s.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    color: 76dbbe\n\nrules:\n  - name: only-docs-changes\n    spec: $hasFileExtensions([".md"])\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: only-docs-changes\n    then:\n      - $addLabel("ship")\n      - $merge()\n'),(0,s.kt)("h2",{id:"auto-merge-small-pull-requests"},"Auto-merge small pull requests"),(0,s.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    color: 76dbbe\n\ngroups:\n  - name: ignore-patterns\n    spec: \'["*.lock", "generated/**"]\'\n\nrules:\n  - name: is-small-patch\n    description: Patch has less than 90 changes and 6 files\n    spec: $size($group("ignore-patterns")) < 90 && $fileCount() <= 5\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: is-small-patch\n    then:\n      - $addLabel("ship")\n      - $merge("rebase")\n'),(0,s.kt)("h2",{id:"auto-merge-non-critical-pull-requests"},"Auto-merge non-critical pull requests"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins#hasannotation"},(0,s.kt)("strong",{parentName:"a"},"hasAnnotation"))," built-in can be used to configure powerful auto-merges. See a more in-depth example of the usage of ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins#hasannotation"},(0,s.kt)("strong",{parentName:"a"},"hasAnnotation"))," in the ",(0,s.kt)("a",{parentName:"p",href:"/use-cases/label-critical-changes-with-semantic-code-annotations"},"automated labelling section"),"."),(0,s.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    color: 76dbbe\n\nrules:\n  - name: not-critical-changes\n    description: Patch does not touch critical code\n    spec: $hasAnnotation("critical") == false\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: not-critical-changes\n    then:\n      - $addLabel("ship")\n      - $merge("rebase")\n'),(0,s.kt)("h2",{id:"auto-merge-on-required-approvals"},"Auto-merge on required approvals"),(0,s.kt)("p",null,"In GitHub, repository administrators can require a minimum number of pull request approvals before merging into a protected branch."),(0,s.kt)("p",null,"However, we may want the required number of approvals to come from a defined set of users/team. In this case, GitHub does not offer this ability."),(0,s.kt)("p",null,"We can use Reviewpad to verify if a pull request has the required number of approvals from a specific team."),(0,s.kt)("p",null,"Here's an example of a ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that verifies if a pull request has at least 2 approvals from the core team when changes are critical."),(0,s.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changes-critical-code\n    spec: $hasAnnotation("critical")\n\nworkflows:\n  - name: auto-merge-on-required-approvals\n    if:\n      - $rule("changes-critical-code") && $hasRequiredApprovals(2, $team("core"))\n    then:\n      - $merge()\n'))}m.isMDXComponent=!0}}]);