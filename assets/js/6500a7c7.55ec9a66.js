"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33514],{57581:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=s(87462),o=(s(67294),s(3905)),n=s(90814);const r={title:"Blocking Merge",id:"blocking-merge",slug:"/use-cases/blocking-merge"},a=void 0,l={unversionedId:"use-cases/blocking-merge/blocking-merge",id:"version-3.22.0/use-cases/blocking-merge/blocking-merge",title:"Blocking Merge",description:"Reviewpad can be used to ensure pull requests are safely merged and follow the rules of your repository.",source:"@site/versioned_docs/version-3.22.0/use-cases/blocking-merge/index.mdx",sourceDirName:"use-cases/blocking-merge",slug:"/use-cases/blocking-merge",permalink:"/3.22.0/use-cases/blocking-merge",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/blocking-merge/index.mdx",tags:[],version:"3.22.0",frontMatter:{title:"Blocking Merge",id:"blocking-merge",slug:"/use-cases/blocking-merge"},sidebar:"DocsSidebar",previous:{title:"Attention set",permalink:"/3.22.0/use-cases/attention-set"},next:{title:"Check issue description",permalink:"/3.22.0/use-cases/check-issue-description"}},c={},u=[{value:"Example",id:"example",level:2}],g={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Reviewpad can be used to ensure pull requests are safely merged and follow the rules of your repository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"By taking advantage of GitHub branch protection rules and status checks you can configure Reviewpad to safetly block a pull request from being merged.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's say we want to block merging pull requests that modify the license of our repository."),(0,o.kt)("p",null,"We can achieve this by adding a workflow to our Reviewpad that fails when the ",(0,o.kt)("inlineCode",{parentName:"p"},"LICENSE")," file is being modified on a pull request."),(0,o.kt)(n.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},"api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: unauthorized-license-workflow\n    description: Protect unauthorized modifications to the LICENSE\n    if:\n      - rule: '$hasFileName(\"LICENSE\")'\n    then:\n      - '$fail(\"Pull Requests should not touch the LICENSE file\")'\n"),(0,o.kt)("p",null,"After which we can configure a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule"},"branch protection rule")," on our\nGitHub repository and add a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks"},"status check")," that prevents merging if the Reviewpad status check fails."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configure Status Check",src:s(55557).Z,width:"786",height:"641"})),(0,o.kt)("p",null,"With that in place, once a pull request tries to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"LICENSE")," file in our repository, the merging ability will be blocked."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Merge button blocked",src:s(39670).Z,width:"1108",height:"613"})))}p.isMDXComponent=!0},55557:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/configure-status-check-7788fc5e69c3517ccd0ae4523c48ec0c.png"},39670:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/merge-blocked-5ab88e6bc0a58eb0bb0e1ca3bc64e2bb.png"}}]);