"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89609],{61889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),r=n(90814);const s={},l=void 0,o={unversionedId:"guides/built-ins/actions/review/index",id:"version-3.22.0/guides/built-ins/actions/review/index",title:"index",description:"Description:",source:"@site/versioned_docs/version-3.22.0/guides/built-ins/actions/review/index.mdx",sourceDirName:"guides/built-ins/actions/review",slug:"/guides/built-ins/actions/review/",permalink:"/3.22.0/guides/built-ins/actions/review/",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/built-ins/actions/review/index.mdx",tags:[],version:"3.22.0",frontMatter:{}},p={},d=[],m={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),":"),(0,i.kt)("p",null,"Submits a pull request review."),(0,i.kt)("p",null,"The action fails when review type is ",(0,i.kt)("inlineCode",{parentName:"p"},"REQUEST_CHANGES")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"COMMENT")," and no message is provided."),(0,i.kt)("p",null,"The review will only be performed if the following conditions are met:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the last review is not ",(0,i.kt)("inlineCode",{parentName:"li"},"APPROVED"),";"),(0,i.kt)("li",{parentName:"ul"},"the pull request has changes since the last submitted review.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This buit-in is ",(0,i.kt)("strong",{parentName:"p"},"not")," available for ",(0,i.kt)("a",{parentName:"p",href:"/guides/syntax#workflow"},(0,i.kt)("inlineCode",{parentName:"a"},"issue")),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"review_type")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The kind of review, can be ",(0,i.kt)("inlineCode",{parentName:"td"},"APPROVE"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"REQUEST_CHANGES"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"COMMENT"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The message to write as a comment.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'$review("APPROVE", "")\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," example:"),(0,i.kt)(r.Z,{language:"yml",title:"reviewpad.yml",mdxType:"CodeBlock"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: missing-tests\n    spec: $changed("src/@1.java", "test/@1.java") == false\n\nworkflows:\n  - name: validate-changes\n    if:\n      - rule: missing-tests\n    then:\n      - $review("REQUEST_CHANGES", "Please include the tests for your change")\n'))}u.isMDXComponent=!0}}]);