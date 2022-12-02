"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[37028],{40335:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),i=(n(67294),n(3905)),t=n(90814);const l={title:"Label potential missing changes",id:"label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes"},o=void 0,c={unversionedId:"use-cases/automated-labelling/label-potential-missing-changes/label-potential-missing-changes",id:"version-3.10.0/use-cases/automated-labelling/label-potential-missing-changes/label-potential-missing-changes",title:"Label potential missing changes",description:"It is fairly common that changes in some files imply changes in other files.",source:"@site/versioned_docs/version-3.10.0/use-cases/automated-labelling/label-potential-missing-changes/index.mdx",sourceDirName:"use-cases/automated-labelling/label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes",permalink:"/3.10.0/use-cases/label-potential-missing-changes",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-potential-missing-changes/index.mdx",tags:[],version:"3.10.0",frontMatter:{title:"Label potential missing changes",id:"label-potential-missing-changes",slug:"/use-cases/label-potential-missing-changes"},sidebar:"DocsSidebar",previous:{title:"Label critical changes with semantic code annotations",permalink:"/3.10.0/use-cases/label-critical-changes-with-semantic-code-annotations"},next:{title:"Remove label based on file paths",permalink:"/3.10.0/use-cases/remove-label-based-on-file-paths"}},m={},p=[],r={toc:p};function g(e){let{components:s,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},r,n,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is fairly common that changes in some files imply changes in other files."),(0,i.kt)("p",null,"As an example, modifying files in the ",(0,i.kt)("em",{parentName:"p"},"src")," directory might need changes in the ",(0,i.kt)("em",{parentName:"p"},"docs")," directory."),(0,i.kt)(t.Z,{language:"yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  missing-specs:\n    description: Likely missing specs\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: 294b69\n\nrules:\n  - name: code-changes-imply-spec-changes\n    kind: patch\n    description: Changes to src and not to spec\n    spec: \'$hasFilePattern("src/**") && !$hasFilePattern("docs/**")\'\n\nworkflows:\n  - name: check-for-specs\n    description: Check for specs\n    if:\n      - rule: code-changes-imply-spec-changes\n    then:\n      - \'$addLabel("missing-specs")\'\n'),(0,i.kt)("p",null,"You can see this policy in the following pull request ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action-demo/pull/2"},"reviewpad/action-demo/#2"),"."))}g.isMDXComponent=!0}}]);