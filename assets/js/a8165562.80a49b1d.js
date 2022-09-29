"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[4024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"Installation with a GitHub Token",id:"installation-with-github-token"},r=void 0,l={unversionedId:"getting-started/installation-with-github-token",id:"version-3.2.0/getting-started/installation-with-github-token",title:"Installation with a GitHub Token",description:"This guide describes how to install Reviewpad with a GitHub Token.",source:"@site/versioned_docs/version-3.2.0/getting-started/installation-with-github-token.md",sourceDirName:"getting-started",slug:"/getting-started/installation-with-github-token",permalink:"/3.2.0/getting-started/installation-with-github-token",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/installation-with-github-token.md",tags:[],version:"3.2.0",frontMatter:{title:"Installation with a GitHub Token",id:"installation-with-github-token"}},s={},p=[{value:"Why?",id:"why",level:3},{value:"Step 1. Generate a GitHub token",id:"step-1-generate-a-github-token",level:2},{value:"Step 2. Add the generated GitHub token to Actions Secrets",id:"step-2-add-the-generated-github-token-to-actions-secrets",level:2},{value:"Step 3. Open the GitHub project on your IDE",id:"step-3-open-the-github-project-on-your-ide",level:2},{value:"Step 4. Add <code>Reviewpad Action</code> workflow file",id:"step-4-add-reviewpad-action-workflow-file",level:2},{value:"Step 5. Add <code>reviewpad.yml</code> to the root of the repository",id:"step-5-add-reviewpadyml-to-the-root-of-the-repository",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide describes how to install Reviewpad with a GitHub Token."),(0,a.kt)("h3",{id:"why"},"Why?"),(0,a.kt)("p",null,"Reviewpad runs as a GitHub Action and by default a GitHub Action runs with an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/automatic-token-authentication"},"automatic token")," generated and provided by GitHub."),(0,a.kt)("p",null,"Although this generate token is enough to run most of Reviewpad functions, there are functions that need more permissions to run. An example is the function ",(0,a.kt)("inlineCode",{parentName:"p"},"$team")," that requires access to the organizations' members."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"All functions that require a GitHub Token to be provided are marked with the following message:")),(0,a.kt)("admonition",{title:"Requires GitHub token",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please note that this function requires the ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-with-github-token"},"Reviewpad to be installed with a GitHub token"))),(0,a.kt)("p",null,"Therefore in order to setup Reviewpad with a GitHub Token, follow the following steps:"),(0,a.kt)("h2",{id:"step-1-generate-a-github-token"},"Step 1. Generate a GitHub token"),(0,a.kt)("p",null,"In order to do that, please follow ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"GitHub tutorial"),". Don't forget to save the token. We will use it in the next step."),(0,a.kt)("p",null,"Make sure that you give the following permissions when generating the token:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub Permissions",src:n(82290).Z,width:"799",height:"1280"})),(0,a.kt)("h2",{id:"step-2-add-the-generated-github-token-to-actions-secrets"},"Step 2. Add the generated GitHub token to Actions Secrets"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to your GitHub project (the project where you want the Reviewpad Action to run)"),(0,a.kt)("li",{parentName:"ol"},"Select the tab ",(0,a.kt)("inlineCode",{parentName:"li"},"Setting")),(0,a.kt)("li",{parentName:"ol"},"On the left select ",(0,a.kt)("inlineCode",{parentName:"li"},"Actions")," under ",(0,a.kt)("inlineCode",{parentName:"li"},"Secrets")),(0,a.kt)("li",{parentName:"ol"},"Click the button ",(0,a.kt)("inlineCode",{parentName:"li"},"New Repository Secret")),(0,a.kt)("li",{parentName:"ol"},"Add the new secret and then click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Add secret"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"GH_TOKEN")),(0,a.kt)("li",{parentName:"ul"},"Value: ",(0,a.kt)("em",{parentName:"li"},"THE_GENERATED_TOKEN_ON_STEP_1"))))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub Secrets",src:n(74775).Z,width:"1148",height:"823"})),(0,a.kt)("h2",{id:"step-3-open-the-github-project-on-your-ide"},"Step 3. Open the GitHub project on your IDE"),(0,a.kt)("p",null,"Open the GitHub project where you wish to install the Reviewpad."),(0,a.kt)("p",null,"Use you're IDE for this since we will be adding new files to the project."),(0,a.kt)("h2",{id:"step-4-add-reviewpad-action-workflow-file"},"Step 4. Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"Reviewpad Action")," workflow file"),(0,a.kt)("p",null,"At the root of your repository navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},".github > workflows")," (This is where your project actions live. If you don't have these folders, please create them)."),(0,a.kt)("p",null,"Add the file ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Reviewpad Action\n\non:\n  pull_request\n\njobs:\n  reviewpad-action:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Running reviewpad action\n        uses: reviewpad/action@v3.x\n        with:\n          token: ${{ secrets.GH_TOKEN }}\n")),(0,a.kt)("h2",{id:"step-5-add-reviewpadyml-to-the-root-of-the-repository"},"Step 5. Add ",(0,a.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of the repository"),(0,a.kt)("p",null,"Let's add a simple Reviewpad configuration. You can change it later on \ud83d\udcaa"),(0,a.kt)("p",null,"On the root of your repository create the ",(0,a.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file and copy the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  small:\n    color: "294b69"\n  medium:\n    color: "a8c3f7"\n  large:\n    color: "8a2138"\n\nrules:\n  - name: isSmall\n    kind: patch\n    spec: $size() <= 30\n\n  - name: isMedium\n    kind: patch\n    spec: $size() > 30 && $size() <= 100\n\n  - name: isLarge\n    kind: patch\n    spec: $size() > 100\n\nworkflows:\n  - name: label-pull-request-with-size\n    if:\n      - rule: isSmall\n        extra-actions:\n          - $addLabel("small")\n      - rule: isMedium\n        extra-actions:\n          - $addLabel("medium")\n      - rule: isLarge\n        extra-actions:\n          - $addLabel("large")\n')),(0,a.kt)("p",null,"This particular configuration will ask Reviewpad to label you PRs based on their size."),(0,a.kt)("p",null,"You can do much more with Reviewpad. Start by looking at some of Reviewpad ",(0,a.kt)("a",{parentName:"p",href:"/use-cases"},"use cases")," or jump right into the available ",(0,a.kt)("a",{parentName:"p",href:"/guides/built-ins"},"built-ins"),"."),(0,a.kt)("admonition",{title:"Terms and Conditions",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By running this action you're agreeing with ",(0,a.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad's Terms and Conditions"),".")))}d.isMDXComponent=!0},82290:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/install-token-permissions-93d5663900ba8b1f6eab6ca3b2174c82.png"},74775:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/install-token-secrets-c32ac0e91a397fd4a00b4b4c3e2044e0.png"}}]);