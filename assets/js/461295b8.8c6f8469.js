"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[66707],{1653:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),s=(t(67294),t(3905)),r=t(90814);const i={title:"Auto-merge",id:"auto-merge",slug:"/use-cases/auto-merge"},o=void 0,l={unversionedId:"use-cases/auto-merge/auto-merge",id:"version-3.12.0/use-cases/auto-merge/auto-merge",title:"Auto-merge",description:"The ability to configure automatic pull requests merges can greatly unblock developers that typically wait for hours, or even days, to receive a LGTM review.",source:"@site/versioned_docs/version-3.12.0/use-cases/auto-merge/index.mdx",sourceDirName:"use-cases/auto-merge",slug:"/use-cases/auto-merge",permalink:"/use-cases/auto-merge",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/auto-merge/index.mdx",tags:[],version:"3.12.0",frontMatter:{title:"Auto-merge",id:"auto-merge",slug:"/use-cases/auto-merge"},sidebar:"DocsSidebar",previous:{title:"Use Cases",permalink:"/use-cases"},next:{title:"Automated Labelling",permalink:"/use-cases/automated-labelling"}},u={},c=[{value:"Auto-merge based on file properties",id:"auto-merge-based-on-file-properties",level:2},{value:"Auto-merge small pull requests",id:"auto-merge-small-pull-requests",level:2},{value:"Auto-merge non-critical pull requests",id:"auto-merge-non-critical-pull-requests",level:2},{value:"Auto-merge on required approvals",id:"auto-merge-on-required-approvals",level:2}],p={toc:c};function m(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ability to configure automatic pull requests merges can greatly unblock developers that typically wait for hours, or even days, to receive a LGTM review."),(0,s.kt)("p",null,"Since not every pull request needs the same review process, using the semantic features of Reviewpad, you can configure many scenarios where auto-merge seems natural."),(0,s.kt)("p",null,"Out of the box, Reviewpad supports a ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins#merge"},"merge action")," which can be used in multiple scenarios."),(0,s.kt)("h2",{id:"auto-merge-based-on-file-properties"},"Auto-merge based on file properties"),(0,s.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: 76dbbe\n\nrules:\n  - name: changes-to-md-files\n    kind: patch\n    description: Patch only contains changes to files with extension .md\n    spec: '$hasFileExtensions([\".md\"])'\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: changes-to-md-files\n    then:\n      - '$addLabel(\"ship\")'\n      - '$merge()'\n"),(0,s.kt)("h2",{id:"auto-merge-small-pull-requests"},"Auto-merge small pull requests"),(0,s.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    color: 76dbbe\n\nrules:\n  - name: is-small-patch\n    kind: patch\n    description: Patch has less than 90 changes and 6 files\n    spec: '$size() < 90 && $fileCount() <= 5'\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: is-small-patch\n    then:\n      - '$addLabel(\"ship\")'\n      - '$merge(\"rebase\")'\n"),(0,s.kt)("h2",{id:"auto-merge-non-critical-pull-requests"},"Auto-merge non-critical pull requests"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins#hasannotation"},(0,s.kt)("strong",{parentName:"a"},"hasAnnotation"))," built-in can be used to configure powerful auto-merges. See a more in-depth example of the usage of ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins#hasannotation"},(0,s.kt)("strong",{parentName:"a"},"hasAnnotation"))," in the ",(0,s.kt)("a",{parentName:"p",href:"/use-cases/label-critical-changes-with-semantic-code-annotations"},"automated labelling section"),"."),(0,s.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    color: 76dbbe\n\nrules:\n  - name: not-critical-changes\n    kind: patch\n    description: Patch does not touch critical code\n    spec: '!$hasAnnotation(\"critical\")'\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: not-critical-changes\n    then:\n      - '$addLabel(\"ship\")'\n      - '$merge(\"rebase\")'\n"),(0,s.kt)("h2",{id:"auto-merge-on-required-approvals"},"Auto-merge on required approvals"),(0,s.kt)("p",null,"In GitHub, repository administrators can require a minimum number of pull request approvals before merging into a protected branch."),(0,s.kt)("p",null,"However, we may want the required number of approvals to come from a defined set of users/team. In this case, GitHub does not offer this ability."),(0,s.kt)("p",null,"We can use Reviewpad to verify if a pull request has the required number of approvals from a specific team."),(0,s.kt)("p",null,"Here's an example of a ",(0,s.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that verifies if a pull request has at least 2 approvals from the core team when changes are critical."),(0,s.kt)(r.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changes-critical-code\n    description: Changes to critical code\n    spec: '$hasAnnotation(\"critical\")'\n\nworkflows:\n  - name: auto-merge-on-required-approvals\n    if:\n      - '$rule(\"changes-critical-code\") && $hasRequiredApprovals(2, $team(\"core\"))'\n    then:\n      - 'merge()'\n"))}m.isMDXComponent=!0}}]);