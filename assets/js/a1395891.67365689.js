"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[1184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(87462),o=(n(67294),n(3905));const a={slug:"how-to-contribute",title:"How to Contribute"},r=void 0,s={unversionedId:"contributing/how-to-contribute",id:"version-3.4.0/contributing/how-to-contribute",title:"How to Contribute",description:"Reviewpad is an open source project to empower teams to automate their development process - issues and pull requests. We believe that teams should be able to contribute to a project the the most fast and efficient way. We are very excited to see your interest on how to help us make Reviewpad the best automation tool.",source:"@site/versioned_docs/version-3.4.0/contributing/how-to-contribute.md",sourceDirName:"contributing",slug:"/contributing/how-to-contribute",permalink:"/3.4.0/contributing/how-to-contribute",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/contributing/how-to-contribute.md",tags:[],version:"3.4.0",frontMatter:{slug:"how-to-contribute",title:"How to Contribute"},sidebar:"DocsSidebar",previous:{title:"Notify when long live pull request",permalink:"/3.4.0/use-cases/notify-when-long-live-pull-request"},next:{title:"VSCode Reviewpad YAML Schema",permalink:"/3.4.0/tooling/vscode-reviewpad-yaml-schema"}},l={},u=[{value:"Open Development",id:"open-development",level:3},{value:"Semantic Versioning",id:"semantic-versioning",level:3},{value:"Branch Organization",id:"branch-organization",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Where to Find Known Issues",id:"where-to-find-known-issues",level:4},{value:"Reporting New Issues",id:"reporting-new-issues",level:4},{value:"How to Get in Touch",id:"how-to-get-in-touch",level:3},{value:"Proposing a Change",id:"proposing-a-change",level:3},{value:"Your First Pull Request",id:"your-first-pull-request",level:3},{value:"Sending a Pull Request",id:"sending-a-pull-request",level:3},{value:"Contribution Prerequisites",id:"contribution-prerequisites",level:3},{value:"Development Workflow",id:"development-workflow",level:3},{value:"Style Guide",id:"style-guide",level:3},{value:"License",id:"license",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Reviewpad is an open source project to empower teams to automate their development process - issues and pull requests. We believe that teams should be able to contribute to a project the the most fast and efficient way. We are very excited to see your interest on how to help us make Reviewpad the best automation tool."),(0,o.kt)("h3",{id:"open-development"},"Open Development"),(0,o.kt)("p",null,"All work on Reviewpad happens directly on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/reviewpad"},"GitHub"),". Both core team members and external contributors send pull requests which go through the same review process."),(0,o.kt)("h3",{id:"semantic-versioning"},"Semantic Versioning"),(0,o.kt)("p",null,"Reviewpad follows ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning"),". We release patch versions for critical bugfixes, minor versions for new features or non-essential changes, and major versions for any breaking changes. When we make breaking changes, we also introduce deprecation warnings in a minor version so that our users learn about the upcoming changes and migrate their code in advance."),(0,o.kt)("p",null,"Every significant change is documented in each ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/reviewpad/releases"},"release"),"."),(0,o.kt)("h3",{id:"branch-organization"},"Branch Organization"),(0,o.kt)("p",null,"Submit all changes directly to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/reviewpad/tree/main"},(0,o.kt)("inlineCode",{parentName:"a"},"main branch")),". We don't use separate branches for development or for upcoming releases. We do our best to keep ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," in good shape, with all tests passing."),(0,o.kt)("h3",{id:"bugs"},"Bugs"),(0,o.kt)("h4",{id:"where-to-find-known-issues"},"Where to Find Known Issues"),(0,o.kt)("p",null,"We are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/reviewpad/issues"},"GitHub Issues")," for our bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist."),(0,o.kt)("h4",{id:"reporting-new-issues"},"Reporting New Issues"),(0,o.kt)("p",null,"The best way to get your bug fixed is to provide a good description and reduced test case."),(0,o.kt)("h3",{id:"how-to-get-in-touch"},"How to Get in Touch"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reviewpad.com/discord"},"Discord")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reviewpad/reviewpad/discussions"},"GitHub Discussions"))),(0,o.kt)("p",null,"Please note that the Reviewpad ",(0,o.kt)("a",{parentName:"p",href:"https://reviewpad.com/discord"},"Discord")," is the same used by the team. So you'll be talking directly with the team \ud83d\udcaa"),(0,o.kt)("h3",{id:"proposing-a-change"},"Proposing a Change"),(0,o.kt)("p",null,"If you intend to change a piece of Reviewpad that is not yet being addressed on any issue we first invite you to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/reviewpad/issues/new/choose"},"fill an issue"),". This lets us reach an agreement on your proposal before you put significant effort into it."),(0,o.kt)("p",null,"If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend to file an issue detailing what you're fixing. This is helpful in case we don't accept that specific fix but want to keep track of the issue."),(0,o.kt)("h3",{id:"your-first-pull-request"},"Your First Pull Request"),(0,o.kt)("p",null,"Working on your first Pull Request? You can learn how from this free video series:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=8B_JWf7pG20"},"How to contribute to open source within 10 minutes - start now!"))," by our friend ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/eddiejaoude"},"Eddie Jaoude")),(0,o.kt)("p",null,"To help you get your feet wet and get you familiar with our contribution process, we have a list of ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/reviewpad/reviewpad/issues?q=is:open+is:issue+label:%22good+first+issue%22"},"good first issues"))," that contain bugs that have a relatively limited scope. This is a great place to get started."),(0,o.kt)("p",null,"If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don't accidentally duplicate your effort."),(0,o.kt)("h3",{id:"sending-a-pull-request"},"Sending a Pull Request"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action"},"Reviewpad Action")," is monitoring the pull requests and notifying the team. We will review your pull request and either merge it, request changes to it, or close it with an explanation. We'll do our best to provide updates and feedback throughout the process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before submitting a pull request,")," please make sure the following is done:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fork ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/reviewpad/reviewpad"},"the repository")," and create your branch from ",(0,o.kt)("inlineCode",{parentName:"li"},"main"),"."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"go get")," in the repository root."),(0,o.kt)("li",{parentName:"ol"},"If you've fixed a bug or added code that should be tested, add tests!"),(0,o.kt)("li",{parentName:"ol"},"Ensure the test suite passes (",(0,o.kt)("inlineCode",{parentName:"li"},"task test"),")."),(0,o.kt)("li",{parentName:"ol"},"If you need a debugger, checkout how to run our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/reviewpad/reviewpad#compilation"},"Reviewpad CLI"),"."),(0,o.kt)("li",{parentName:"ol"},"Format you format your code code (",(0,o.kt)("inlineCode",{parentName:"li"},"task format"),")."),(0,o.kt)("li",{parentName:"ol"},"Do a final check (",(0,o.kt)("inlineCode",{parentName:"li"},"task check -f"),").")),(0,o.kt)("h3",{id:"contribution-prerequisites"},"Contribution Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have ",(0,o.kt)("a",{parentName:"li",href:"https://go.dev"},"GO")," installed with minimum version of 1.18.2."),(0,o.kt)("li",{parentName:"ul"},"You have ",(0,o.kt)("a",{parentName:"li",href:"https://taskfile.dev/installation/"},"Taskfile")," installed."),(0,o.kt)("li",{parentName:"ul"},"You have ",(0,o.kt)("inlineCode",{parentName:"li"},"gcc")," installed or are comfortable installing a compiler if needed. Some of our dependencies may require a compilation step. On OS X, the Xcode Command Line Tools will cover this. On Ubuntu, ",(0,o.kt)("inlineCode",{parentName:"li"},"apt-get install build-essential")," will install the required packages. Similar commands should work on other Linux distros. Windows will require some additional steps, see the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nodejs/node-gyp#installation"},(0,o.kt)("inlineCode",{parentName:"a"},"node-gyp")," installation instructions")," for details."),(0,o.kt)("li",{parentName:"ul"},"You are familiar with Git.")),(0,o.kt)("h3",{id:"development-workflow"},"Development Workflow"),(0,o.kt)("p",null,"After cloning React, run ",(0,o.kt)("inlineCode",{parentName:"p"},"go get")," to fetch its dependencies.\nThen, you can run several commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task format")," formats your code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task test")," runs the complete test suite."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task build")," build the project (no output is generated)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task build-ci")," build Reviewpad CLI and creates the executable ",(0,o.kt)("inlineCode",{parentName:"li"},"reviewpad-cli"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task check")," runs the code formatter, the complete test suite, and builds the project.")),(0,o.kt)("p",null,"We recommend running ",(0,o.kt)("inlineCode",{parentName:"p"},"task check -f")," to make sure you don't introduce any issue."),(0,o.kt)("p",null,"The easiest way to try your changes is to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/reviewpad#compilation"},"Reviewpad CLI")," ",(0,o.kt)("inlineCode",{parentName:"p"},"./reviewpad-cli run -u [PULL_REQUEST_URL] -t [GITHUB_TOKEN] -e [GITHUB_EVENT] -f [REVIEWPAD_FILE]"),"."),(0,o.kt)("p",null,"Another great way to test your changes it to use ",(0,o.kt)("inlineCode",{parentName:"p"},"VSCode")," debug tool. You can do that by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},".vscode")," folder in the root of the repository, add the file ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," to it, and copy the following content into the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // Use IntelliSense to learn about possible attributes.\n    // Hover to view descriptions of existing attributes.\n    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "name": "Launch cli",\n            "type": "go",\n            "request": "launch",\n            "mode": "debug",\n            "args": [\n                "run",\n                // Flag to run on dry run\n                "-d=true",\n                // Absolute path to reviewpad.yml file to run\n                "-f=REVIEWPAD_FILE",\n                // GitHub url to run the reviewpad.yml against to\n                // e.g. https://github.com/reviewpad/action-demo/pull/1\n                // e.g.https://github.com/reviewpad/action-demo/issue/1\n                "-u=PULL_REQUEST_URL",\n                // Absolute path to JSON file with GitHub event payload (OPTIONAL)\n                "-e=GITHUB_EVENT",\n                // GiHub PAT (Personal Access Token)\n                // https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token\n                "-t=GITHUB_TOKEN",\n            ],\n            "program": "${workspaceFolder}/cli",\n        },\n    ]\n}\n')),(0,o.kt)("p",null,"We still require that your pull request contains unit tests for any new functionality. This way we can ensure that we don't break your code in the future."),(0,o.kt)("h3",{id:"style-guide"},"Style Guide"),(0,o.kt)("p",null,"We use an automatic code formatter called ",(0,o.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cmd/gofmt"},"gofmt"),".\nRun ",(0,o.kt)("inlineCode",{parentName:"p"},"task format")," after making any changes to the code."),(0,o.kt)("p",null,"Then, our formatter will catch most issues that may exist in your code."),(0,o.kt)("h3",{id:"license"},"License"),(0,o.kt)("p",null,"By contributing to Reviewpad, you agree that your contributions will be licensed under its LGPL-3.0 license."))}d.isMDXComponent=!0}}]);