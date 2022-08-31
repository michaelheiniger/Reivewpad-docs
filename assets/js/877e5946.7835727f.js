"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[3596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"Installation",slug:"installation"},a=void 0,l={unversionedId:"getting-started/installation",id:"version-3.4.0/getting-started/installation",title:"Installation",description:"This guide describes how to install Reviewpad",source:"@site/versioned_docs/version-3.4.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/installation.md",tags:[],version:"3.4.0",frontMatter:{title:"Installation",slug:"installation"},sidebar:"DocsSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Security",permalink:"/getting-started/security"}},s={},p=[{value:"Step 1. Open the GitHub project on your IDE",id:"step-1-open-the-github-project-on-your-ide",level:2},{value:"Step 2. Add <code>Reviewpad Action</code> workflow file",id:"step-2-add-reviewpad-action-workflow-file",level:2},{value:"Step 3. Add <code>reviewpad.yml</code> to the root of your repository",id:"step-3-add-reviewpadyml-to-the-root-of-your-repository",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide describes how to install Reviewpad \u26a1"),(0,o.kt)("admonition",{title:"INFO",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some actions require a GitHub token \ud83d\udd11"),(0,o.kt)("p",{parentName:"admonition"},"To install Reviewpad with a GitHub token please ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation-with-github-token"},"follow this tutorial"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reviewpad runs as a GitHub action")," at the level of a single GitHub repository, which means that you need to install Reviewpad for each repository where you wish to run it."),(0,o.kt)("p",null,"To install Reviewpad on a repository, please follow the following steps."),(0,o.kt)("h2",{id:"step-1-open-the-github-project-on-your-ide"},"Step 1. Open the GitHub project on your IDE"),(0,o.kt)("p",null,"Open the GitHub project where you wish to install Reviewpad."),(0,o.kt)("p",null,"Use your IDE for this since we will be adding new files to the project."),(0,o.kt)("h2",{id:"step-2-add-reviewpad-action-workflow-file"},"Step 2. Add ",(0,o.kt)("inlineCode",{parentName:"h2"},"Reviewpad Action")," workflow file"),(0,o.kt)("p",null,"At the root of your repository navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},".github > workflows")," (This is where your project GitHub actions live. If you don't have these folders, please create them). "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186570617-9dab7df4-35e2-41f2-8dd3-b2823b822813.png",alt:"root of the repo"}),(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186570760-4a8f72f8-09d5-4e88-97bb-860c40d6364f.png",alt:"workspcase folder"})),(0,o.kt)("p",null,"Add the file ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," and copy the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Reviewpad Action\non:\n  pull_request\n\njobs:\n  reviewpad-action:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Running reviewpad action\n        uses: reviewpad/action@v3.x\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186570845-52bf0570-567d-48eb-8855-019b2c2de54f.png",alt:"file inside workspace folder"}),(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186571129-83c04a46-85ea-46fb-8199-b3ead06f55f5.png",alt:"reviewpad action"})),(0,o.kt)("h2",{id:"step-3-add-reviewpadyml-to-the-root-of-your-repository"},"Step 3. Add ",(0,o.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of your repository"),(0,o.kt)("p",null,"Let's add a simple Reviewpad configuration. You can change it later on \ud83d\udcaa"),(0,o.kt)("p",null,"On the root of your repository create the ",(0,o.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file and copy the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  small:\n    color: "294b69"\n  medium:\n    color: "a8c3f7"\n  large:\n    color: "8a2138"\n\nworkflows:\n  - name: label-pull-request-with-size\n    if:\n      - rule: $size() <= 30\n        extra-actions:\n          - $addLabel("small")\n      - rule: $size() > 30 && $size() <= 100\n        extra-actions:\n          - $addLabel("medium")\n      - rule: $size() > 100\n        extra-actions:\n          - $addLabel("large")\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186571053-7221fe45-205a-44cb-a199-9e5963e277b5.png",alt:"reviewpad file in root folder"}),(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43396684/186571269-368f57f1-f16d-47d4-91c1-485f5531fe7f.png",alt:"reviewpad config"})),(0,o.kt)("p",null,"This particular configuration will label the pull requests based on their size."),(0,o.kt)("p",null,"You can do much more with Reviewpad. Start by looking at some of Reviewpad ",(0,o.kt)("a",{parentName:"p",href:"/use-cases"},"use cases")," or jump right into the available [built-ins/guides/built-ins)."),(0,o.kt)("admonition",{title:"Terms and Conditions",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By running this action you're agreeing with ",(0,o.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad's Terms and Conditions"),".")))}u.isMDXComponent=!0}}]);