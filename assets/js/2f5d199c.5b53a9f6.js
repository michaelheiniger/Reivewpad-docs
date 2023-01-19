"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79469],{67410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const s={title:"Aladino syntax",id:"syntax",slug:"syntax"},o=void 0,r={unversionedId:"guides/aladino/syntax",id:"version-3.21.0/guides/aladino/syntax",title:"Aladino syntax",description:"The syntax of Aladino is quite simple. Here's the BNF grammar representation:",source:"@site/versioned_docs/version-3.21.0/guides/aladino/syntax.md",sourceDirName:"guides/aladino",slug:"/guides/aladino/syntax",permalink:"/3.21.0/guides/aladino/syntax",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/guides/aladino/syntax.md",tags:[],version:"3.21.0",frontMatter:{title:"Aladino syntax",id:"syntax",slug:"syntax"},sidebar:"DocsSidebar",previous:{title:"Aladino specification",permalink:"/3.21.0/guides/aladino/specification"},next:{title:"Aladino semantics",permalink:"/3.21.0/guides/aladino/semantics"}},l={},d=[],p={toc:d};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The syntax of Aladino is quite simple. Here's the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form"},"BNF")," grammar representation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"prog := stat_list\n\nstat := expr\n\nexpr := expr BINOP expr\n      | UNARYOP expr\n      | TIMESTAMP\n      | RELATIVE_TIMESTAMP\n      | NUMBER\n      | STRING\n      | BOOLEAN\n      | '(' expr ')'\n      | '[' expr_list ']'\n      | '$' IDENTIFIER '(' expr_list ')'\n      | '(' expr_list '=>' expr  ')'\n\nexpr_list :=\n        expr ',' expr_list\n      | expr\n      |\n\nTIMESTAMP :=\n        YYYYMMDD\n      | YYYY-MM-DD\n      | YYYYMMDDTHH:MM:SS\n      | YYYY-MM-DDTHH:MM:SS\n\nRELATIVE_TIMESTAMP := NUMBER TIME_UNIT ago\n\nTIME_UNIT :=\n        'year'   | 'years'\n      | 'month'  | 'months'\n      | 'week'   | 'weeks'\n      | 'day'    | 'days'\n      | 'hour'   | 'hours'\n      | 'minute' | 'minutes'\n\nBINOP :=\n        '==' | '>=' | '>' | '<' | '<='\n      | '&&' | '||'\n\nUNARYOP := '!'\n")),(0,i.kt)("p",null,"This allows us to specify:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Logical expressions: e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'"a" == "a"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},"$fun() == 1"),";"),(0,i.kt)("li",{parentName:"ol"},"Function calls: e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'$label("bug")')),(0,i.kt)("li",{parentName:"ol"},"Lambda functions: e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"($dev => $dev == $author())"))))}u.isMDXComponent=!0}}]);