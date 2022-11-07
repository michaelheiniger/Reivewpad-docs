"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[86492],{23426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),s=(n(67294),n(3905)),i=n(90814);const o={title:"Auto-merge",id:"auto-merge",slug:"/use-cases/auto-merge"},r=void 0,l={unversionedId:"use-cases/auto-merge/auto-merge",id:"version-3.11.0/use-cases/auto-merge/auto-merge",title:"Auto-merge",description:"Please note that this function requires the Reviewpad Action to be installed with a GitHub token",source:"@site/versioned_docs/version-3.11.0/use-cases/auto-merge/index.mdx",sourceDirName:"use-cases/auto-merge",slug:"/use-cases/auto-merge",permalink:"/3.11.0/use-cases/auto-merge",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/auto-merge/index.mdx",tags:[],version:"3.11.0",frontMatter:{title:"Auto-merge",id:"auto-merge",slug:"/use-cases/auto-merge"},sidebar:"DocsSidebar",previous:{title:"Use Cases",permalink:"/3.11.0/use-cases"},next:{title:"Automated Labelling",permalink:"/3.11.0/use-cases/automated-labelling"}},u={},c=[{value:"Auto-merge based on file properties",id:"auto-merge-based-on-file-properties",level:2},{value:"Auto-merge small pull requests",id:"auto-merge-small-pull-requests",level:2},{value:"Auto-merge non-critical pull requests",id:"auto-merge-non-critical-pull-requests",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Requires GitHub token",type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Please note that this function requires the ",(0,s.kt)("a",{parentName:"p",href:"/getting-started/installation-action-tokenized"},"Reviewpad Action to be installed with a GitHub token"))),(0,s.kt)("p",null,"The ability to configure automatic pull requests merges can greatly unblock developers that typically wait for hours, or even days, to receive a LGTM review."),(0,s.kt)("p",null,"Since not every pull request needs the same review process, using the semantic features of Reviewpad, you can configure many scenarios where auto-merge seems natural."),(0,s.kt)("p",null,"Out of the box, Reviewpad supports a ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins#merge"},"merge action")," which can be used in multiple scenarios."),(0,s.kt)("h2",{id:"auto-merge-based-on-file-properties"},"Auto-merge based on file properties"),(0,s.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: 76dbbe\n\nrules:\n  - name: changes-to-md-files\n    kind: patch\n    description: Patch only contains changes to files with extension .md\n    spec: '$hasFileExtensions([\".md\"])'\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: changes-to-md-files\n    then:\n      - '$addLabel(\"ship\")'\n      - '$merge()'\n"),(0,s.kt)("h2",{id:"auto-merge-small-pull-requests"},"Auto-merge small pull requests"),(0,s.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    color: 76dbbe\n\nrules:\n  - name: is-small-patch\n    kind: patch\n    description: Patch has less than 90 changes and 6 files\n    spec: '$size() < 90 && $fileCount() <= 5'\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: is-small-patch\n    then:\n      - '$addLabel(\"ship\")'\n      - '$merge(\"rebase\")'\n"),(0,s.kt)("h2",{id:"auto-merge-non-critical-pull-requests"},"Auto-merge non-critical pull requests"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins#hasannotation"},(0,s.kt)("strong",{parentName:"a"},"hasAnnotation"))," built-in can be used to configure powerful auto-merges. See a more in-depth example of the usage of ",(0,s.kt)("a",{parentName:"p",href:"/guides/built-ins#hasannotation"},(0,s.kt)("strong",{parentName:"a"},"hasAnnotation"))," in the ",(0,s.kt)("a",{parentName:"p",href:"/use-cases/label-critical-changes-with-semantic-code-annotations"},"automated labelling section"),"."),(0,s.kt)(i.Z,{language:"yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nlabels:\n  ship:\n    description: Ship mode\n    color: 76dbbe\n\nrules:\n  - name: not-critical-changes\n    kind: patch\n    description: Patch does not touch critical code\n    spec: '!$hasAnnotation(\"critical\")'\n\nworkflows:\n  - name: ship\n    description: Ship process - bypass the review and merge with rebase\n    if:\n      - rule: not-critical-changes\n    then:\n      - '$addLabel(\"ship\")'\n      - '$merge(\"rebase\")'\n"))}m.isMDXComponent=!0}}]);