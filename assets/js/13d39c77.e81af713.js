"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[71862],{1989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const o={id:"annotations",slug:"/guides/annotations",title:"Annotations"},r="Annotations",s={unversionedId:"guides/annotations",id:"version-3.16.0/guides/annotations",title:"Annotations",description:"Annotations are a way to add metadata to your code. They are not executed by the compiler, but they can be used by other tools to generate code, generate documentation, or perform other tasks.",source:"@site/versioned_docs/version-3.16.0/guides/annotations.md",sourceDirName:"guides",slug:"/guides/annotations",permalink:"/guides/annotations",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/annotations.md",tags:[],version:"3.16.0",frontMatter:{id:"annotations",slug:"/guides/annotations",title:"Annotations"},sidebar:"DocsSidebar",previous:{title:"Aladino semantics",permalink:"/guides/aladino/semantics"},next:{title:"Commands",permalink:"/guides/commands"}},l={},d=[{value:"Why?",id:"why",level:2},{value:"Reviewpad Annotations",id:"reviewpad-annotations",level:2},{value:"<code>@reviewpad-an: &lt;annotation&gt;</code>",id:"reviewpad-an-annotation",level:3},{value:"Example",id:"example",level:4}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"annotations"},"Annotations"),(0,i.kt)("p",null,"Annotations are a way to add metadata to your code. They are not executed by the compiler, but they can be used by other tools to generate code, generate documentation, or perform other tasks."),(0,i.kt)("h2",{id:"why"},"Why?"),(0,i.kt)("p",null,"There are several reasons why using annotation in code can be beneficial."),(0,i.kt)("p",null,"One reason is to enhance code review by creating means to identify areas that need special care. For example, you can create an annotation that marks a method as deprecated, which can then be used to generate a warning to when the method is changed."),(0,i.kt)("p",null,"Another example is to annotate a symbol as being critical. This can be used to create awareness of when critical code is being changed and therefore to ensure that the change is reviewed by the appropriate people."),(0,i.kt)("h2",{id:"reviewpad-annotations"},"Reviewpad Annotations"),(0,i.kt)("p",null,"Reviewpad supports the following annotations:"),(0,i.kt)("h3",{id:"reviewpad-an-annotation"},(0,i.kt)("inlineCode",{parentName:"h3"},"@reviewpad-an: <annotation>")),(0,i.kt)("p",null,"This annotation marks a symbol with the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"<annotation>"),". The annotation can be any string, but it is recommended to use a short string that is unique to your project. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"@reviewpad-an: critical"),"."),(0,i.kt)("p",null,"This annotation can then be used to identify when a symbol has been changed. We can do that using the built-in ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins/#hasannotation"},"hasAnnotation"),"."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"Here's an example of how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@reviewpad-an")," annotation."),(0,i.kt)("p",null,"Let's say we want to identify all pieces of code (i.e. symbols) that are ",(0,i.kt)("inlineCode",{parentName:"p"},"critical")," to our project. We can do that by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"@reviewpad-an: critical")," annotation to all of the critical symbols."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\n// @reviewpad-an: critical\nfunc main() {\n  fmt.Println("Hello, World!")\n}\n')),(0,i.kt)("p",null,"We've marked our ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function as ",(0,i.kt)("inlineCode",{parentName:"p"},"critical")," symbol to our project."),(0,i.kt)("p",null,"Now, we can use the ",(0,i.kt)("a",{parentName:"p",href:"/guides/built-ins/#hasannotation"},"hasAnnotation")," built-in, in our reviewpad configuration, to identify when a ",(0,i.kt)("inlineCode",{parentName:"p"},"critical")," symbol has been changed, and take the appropriate action."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'api-version: reviewpad.com/v3.x\n\nworkflows:\n  - name: changes-critical-code\n    if:\n      - rule: $hasAnnotation("critical")\n        extra-actions:\n          - $warn("This pull request includes critical changes! Please review it carefully.")\n')),(0,i.kt)("p",null,"Now, every time a ",(0,i.kt)("inlineCode",{parentName:"p"},"critical")," symbol is changed, reviewpad will add add a warning to the pull request."),(0,i.kt)("p",null,"In this example, if we change the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function, because it is a ",(0,i.kt)("inlineCode",{parentName:"p"},"critical")," symbol, reviewpad will add the specified warning to the pull request."))}p.isMDXComponent=!0}}]);