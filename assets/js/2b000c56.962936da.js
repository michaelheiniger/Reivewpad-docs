"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85284],{55042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var i=n(87462),a=(n(67294),n(3905)),o=n(90814),s=n(85555);const r={title:"Install Reviewpad as GitHub action with a GitHub token",id:"installation-action-tokenized",slug:"installation-action-tokenized"},l=void 0,d={unversionedId:"getting-started/installation-action-tokenized",id:"version-3.22.0/getting-started/installation-action-tokenized",title:"Install Reviewpad as GitHub action with a GitHub token",description:"To get the most out of Reviewpad we advise you to install Reviewpad as a GitHub App.",source:"@site/versioned_docs/version-3.22.0/getting-started/installation-action-tokenized.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation-action-tokenized",permalink:"/3.22.0/getting-started/installation-action-tokenized",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/installation-action-tokenized.mdx",tags:[],version:"3.22.0",frontMatter:{title:"Install Reviewpad as GitHub action with a GitHub token",id:"installation-action-tokenized",slug:"installation-action-tokenized"}},p={},u=[{value:"Why a GitHub token is required?",id:"why-a-github-token-is-required",level:3},{value:"Step 1. Generate a GitHub token",id:"step-1-generate-a-github-token",level:2},{value:"Step 2. Add the generated GitHub token to Actions Secrets",id:"step-2-add-the-generated-github-token-to-actions-secrets",level:2},{value:"Step 3. Open the GitHub project on your IDE",id:"step-3-open-the-github-project-on-your-ide",level:2},{value:"Step 4. Add <code>Reviewpad Action</code> workflow file",id:"step-4-add-reviewpad-action-workflow-file",level:2},{value:"Step 5. Add <code>reviewpad.yml</code> to the root of the repository",id:"step-5-add-reviewpadyml-to-the-root-of-the-repository",level:2},{value:"Bonus: Checkout Reviewpad use cases",id:"bonus-checkout-reviewpad-use-cases",level:2}],c={toc:u};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"To get the most out of Reviewpad we advise you to ",(0,a.kt)("a",{parentName:"strong",href:"/getting-started/installation"},"install Reviewpad as a GitHub App"),"."),"\nThis will allow you to access all Reviewpad features."),(0,a.kt)("p",{parentName:"admonition"},"If you are not able to install the Reviewpad GitHub App, please continue with this installation.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This installation requires a GitHub token to be configured in your repository secrets.")),(0,a.kt)("p",{parentName:"admonition"},"This token will be used by Reviewpad to execute the defined actions.\n",(0,a.kt)("strong",{parentName:"p"},"This means, that the actions will appear as if they were executed by the user who created the token"),"."),(0,a.kt)("p",{parentName:"admonition"},"We advise you to create a dedicated GitHub user for this purpose and to use a token generated for this user."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"If you wish to execute Reviewpad without a GitHub token, you can ",(0,a.kt)("a",{parentName:"em",href:"/getting-started/installation-action"},"install Reviewpad as GitHub action"),".\nPlease note that you won't be able to access all  Reviewpad features."))),(0,a.kt)("p",null,"This guide describes how to install ",(0,a.kt)("strong",{parentName:"p"},"Reviewpad as a GitHub action with a GitHub token"),"."),(0,a.kt)("h3",{id:"why-a-github-token-is-required"},"Why a GitHub token is required?"),(0,a.kt)("p",null,"By default a GitHub action runs with an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/automatic-token-authentication"},"automatic token")," generated and provided by GitHub."),(0,a.kt)("p",null,"Although this generated token is enough to run most of Reviewpad features, there are features that need more permissions to run."),(0,a.kt)("p",null,"Therefore, in order to take the most out of Reviewpad, you need to generate a GitHub token with the required permissions and add it to your repository secrets."),(0,a.kt)("h2",{id:"step-1-generate-a-github-token"},"Step 1. Generate a GitHub token"),(0,a.kt)("p",null,"Navigate to the option ",(0,a.kt)("inlineCode",{parentName:"p"},"Tokens (classic)")," in your ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"GitHub Developer Settings"),", click the button ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate new token"),", and choose the option ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate new token (classic)"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub Fined-grained access",src:n(99907).Z,width:"1511",height:"1018"})),(0,a.kt)("p",null,"Fill the form with the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Token name: ",(0,a.kt)("inlineCode",{parentName:"li"},"Reviewpad Token")),(0,a.kt)("li",{parentName:"ul"},"Expiration: ",(0,a.kt)("inlineCode",{parentName:"li"},"No expiration"))),(0,a.kt)("p",null,"And select the following scopes:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub add token",src:n(13511).Z,width:"984",height:"1896"})),(0,a.kt)("p",null,"After that, click the green button ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate token")," and copy the generated token."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please note that if your organization uses SAML single sign-on (SSO), you must first ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on"},"authorize the token"),".")),(0,a.kt)("h2",{id:"step-2-add-the-generated-github-token-to-actions-secrets"},"Step 2. Add the generated GitHub token to Actions Secrets"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to your GitHub project (the project where you want the Reviewpad action to run)."),(0,a.kt)("li",{parentName:"ol"},"Select the tab ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"On the left, select ",(0,a.kt)("inlineCode",{parentName:"li"},"Actions")," under ",(0,a.kt)("inlineCode",{parentName:"li"},"Secrets")," section."),(0,a.kt)("li",{parentName:"ol"},"Click the button ",(0,a.kt)("inlineCode",{parentName:"li"},"New repository secret"),"."),(0,a.kt)("li",{parentName:"ol"},"Add the new secret and then click on green button ",(0,a.kt)("inlineCode",{parentName:"li"},"Add secret"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"GH_TOKEN")),(0,a.kt)("li",{parentName:"ul"},"Value: ",(0,a.kt)("em",{parentName:"li"},"<THE_TOKEN_GENERATED_ON_STEP_1>"))))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub add token",src:n(57954).Z,width:"1511",height:"1018"})),(0,a.kt)("h2",{id:"step-3-open-the-github-project-on-your-ide"},"Step 3. Open the GitHub project on your IDE"),(0,a.kt)("p",null,"Open the GitHub project where you wish to install Reviewpad."),(0,a.kt)("p",null,"Use your IDE for this since we will be adding new files to the project."),(0,a.kt)("h2",{id:"step-4-add-reviewpad-action-workflow-file"},"Step 4. Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"Reviewpad Action")," workflow file"),(0,a.kt)("p",null,"At the root of your repository navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},".github > workflows")," (this is where your project's GitHub actions live; if you don't have these folders, please create them)."),(0,a.kt)("p",null,"Add the file ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Reviewpad Action\n\non:\n    - issues\n    - pull_request\n\njobs:\n    reviewpad-action:\n        runs-on: ubuntu-latest\n        steps:\n            - name: Running reviewpad action\n              uses: reviewpad/action@v3.x\n              with:\n                  token: ${{ secrets.GH_TOKEN }}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub add workflow",src:n(43907).Z,width:"1515",height:"1056"})),(0,a.kt)("h2",{id:"step-5-add-reviewpadyml-to-the-root-of-the-repository"},"Step 5. Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of the repository"),(0,a.kt)("p",null,"In order for Reviewpad to run, you need to add a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," to the root of your repository."),(0,a.kt)("p",null,"This file contains the configuration for Reviewpad."),(0,a.kt)("p",null,"Let's add a simple Reviewpad configuration. You can change it later on \ud83d\udcaa"),(0,a.kt)("p",null,"On the root of your repository create the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file and copy the following content:"),(0,a.kt)(o.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},s.Z),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Reviewpad add configuration",src:n(62975).Z,width:"1515",height:"1056"})),(0,a.kt)("p",null,"This particular configuration will label every pull requests based on their size."),(0,a.kt)("p",null,"That's it! \ud83c\udf89"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Don't forget to commit and push the ",(0,a.kt)("inlineCode",{parentName:"strong"},"reviewpad.yml")," file to your repository.")),(0,a.kt)("p",null,"Reviewpad will run on every pull request and follow the configuration you have set."),(0,a.kt)("h2",{id:"bonus-checkout-reviewpad-use-cases"},"Bonus: Checkout Reviewpad use cases"),(0,a.kt)("p",null,"You can do much more with Reviewpad."),(0,a.kt)("p",null,"Start by looking at some of Reviewpad ",(0,a.kt)("a",{parentName:"p",href:"/use-cases"},"use cases")," or jump right into the available ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins"},"built-ins"),"."),(0,a.kt)("admonition",{title:"Terms and Conditions",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By running Reviewpad, you are agreeing with ",(0,a.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad's Terms and Conditions"),".")))}h.isMDXComponent=!0},85555:(e,t,n)=>{n.d(t,{Z:()=>i});const i='api-version: reviewpad.com/v3.x\n\nlabels:\n    small:\n        color: 294b69\n    medium:\n        color: a8c3f7\n    large:\n        color: 8a2138\n\nworkflows:\n    - name: label-pull-request-with-size\n      if:\n          - rule: $size() <= 30\n            extra-actions:\n                - $addLabel("small")\n          - rule: $size() > 30 && $size() <= 100\n            extra-actions:\n                - $addLabel("medium")\n          - rule: $size() > 100\n            extra-actions:\n                - $addLabel("large")\n'},13511:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/permissions-ea26a41ffdce467e1563aa23df3d6ba6.png"},99907:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/step1-2e509f9da1205d879df6e20345d71c1f.gif"},57954:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/step2-7abb30dc2ee3c5aa260e48d8adf96f69.gif"},43907:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/step3-f55f11234c09d1065c0a54ff9c00dad7.gif"},62975:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/step4-49e95e8adb360e3d5ab77d1ec68862f0.gif"}}]);