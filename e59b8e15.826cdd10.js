(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),c=(a(0),a(184)),o=a(187),l=a(185),r=a(186),p={id:"miles7",title:"Contract setup",sidebar_label:"Contract setup",slug:"/dapp-miles/miles-tg-contract"},b={unversionedId:"dapp-miles/miles7",id:"dapp-miles/miles7",isDocsHomePage:!1,title:"Contract setup",description:"The smart contract is at this location:",source:"@site/docs/dapp-miles/miles7.md",slug:"/dapp-miles/miles-tg-contract",permalink:"/completium-landing/docs/dapp-miles/miles-tg-contract",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-miles/miles7.md",version:"current",sidebar_label:"Contract setup",sidebar:"miles",previous:{title:"Presentation",permalink:"/completium-landing/docs/dapp-miles/miles-tg-overview"},next:{title:"Interactions with contract",permalink:"/completium-landing/docs/dapp-miles/miles-tg-interactions"}},s=[{value:"Origination",id:"origination",children:[]},{value:"Add miles",id:"add-miles",children:[]},{value:"Skip this step?",id:"skip-this-step",children:[]}],d={toc:s};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The smart contract is at this location:"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"~/completium-dapp-miles/contract/miles_with_expiration.arl")),Object(c.b)("p",null,"The contract is written in ",Object(c.b)(o.a,{to:"/docs/dapp-tools/archetype",mdxType:"Link"},"Archetype")," language. Go to the Smart contract section for a detailed presentation."),Object(c.b)("p",null,"The setup consists in deploying the contract and adding mile to the user account."),Object(c.b)("h2",{id:"origination"},"Origination"),Object(c.b)("p",null,"Open the ",Object(c.b)(o.a,{to:"/docs/dapp-tools/gitpod#open-terminal",mdxType:"Link"},"terminal")," and enter the following command line to originate (deploy) the smart contract is:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"completium-cli deploy ./contract/miles_with_expiration.arl as admin --named miles\n")),Object(c.b)("p",null,"The ",Object(c.b)(o.a,{to:"/docs/dapp-tools/completium-cli#deploy",mdxType:"Link"},"originate command")," triggers two operations:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"the contract compilation to Michelson with archetype compiler"),Object(c.b)("li",{parentName:"ul"},"the Michelson contract origination with Tezos client")),Object(c.b)("p",null,"The contract may then be referred to as ",Object(c.b)("inlineCode",{parentName:"p"},"miles")," in future interactions."),Object(c.b)("p",null,"If you are using the preset ",Object(c.b)(o.a,{to:"/docs/dapp-tools/gitpod",mdxType:"Link"},"Gitpod")," environement, note that ",Object(c.b)(o.a,{to:"/docs/dapp-tools/completium-cli",mdxType:"Link"},"completium-cli")," is pre-installed with the ",Object(c.b)(o.a,{to:"/docs/dapp-tools/accounts#admin-account",mdxType:"Link"},"admin")," account. See this section for more information."),Object(c.b)("p",null,"The address of the newly originated contract is visible in the command output, as illustrated below:"),Object(c.b)(l.a,{img:"miles-newcontract.png",mdxType:"DappFigure"}),Object(c.b)("p",null,"A smart contract address starts with ",Object(c.b)("inlineCode",{parentName:"p"},"KT1"),". In the situation above, the new contract's address is ",Object(c.b)("inlineCode",{parentName:"p"},"KT19TYkVxnUb1m9DoWbSASqY6XQdVLQFCK8F"),"."),Object(c.b)("p",null,"You may got to ",Object(c.b)(o.a,{to:"/docs/dapp-tools/bcd",mdxType:"Link"},"Better call dev")," contract explorer to check it:"),Object(c.b)(r.a,{url:"https://better-call.dev/",txt:"go to better call dev",mdxType:"DappButton"}),Object(c.b)("p",null,"The new contract address needs to be set in the DApp's ",Object(c.b)("inlineCode",{parentName:"p"},"src/settings.js")," file:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'/////////////////////////////////////////////////////////////////////////////\n// FIX ME\n// set new contract address\n/////////////////////////////////////////////////////////////////////////////\nexport const  contractAddress = "KT1F5DqPwKJC9qeEjTgdEQKGGBZpcAv5DX86"\n')),Object(c.b)("h2",{id:"add-miles"},"Add miles"),Object(c.b)("p",null,"In order to provide miles to a user, the amdin must call the 'add' entry point of the contract."),Object(c.b)("p",null,"If you don't have a user account, follow these ",Object(c.b)(o.a,{to:"/docs/dapp-tools/accounts#create-test-account",mdxType:"Link"},"instructions")," to get one."),Object(c.b)("p",null,"The entry point signature is presented below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype"}),"entry add (ow                 : address,\n           newmile_id         : string,\n           newmile_amount     : int,\n           newmile_expiration : date) {\n   called by admin\n   effect {\n     ...\n   }\n}\n")),Object(c.b)("p",null,"Parameters are presented below:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ow"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"USER_ADDRESS"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"address of the miles' owner, for example '@tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw'")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"newmile_id"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),'USER_ADDRESS + "_0"'),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"a unique identifier for the created miles, for example 'tz1MZrh8CvYkp7BfLQMcm6mg5FvL5HRZfACw_0'")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"newmile_amount"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"20"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"number of miles to create")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"newmile_expiration"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"TOMORROW"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"date beyond which miles are expired, for example '2021-06-28'")))),Object(c.b)("p",null,"where:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"USER_ADDRESS is replaced by the DApp user account to receive the miles"),Object(c.b)("li",{parentName:"ul"},"TOMORROW is replaced by a date in the future, for example tomorrow")),Object(c.b)("p",null,"In the ",Object(c.b)(o.a,{to:"/docs/dapp-tools/gitpod#open-terminal",mdxType:"Link"},"terminal")," enter the following command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"completium-cli call miles as admin\n        --entry '%add'\n        --with '(<USER_ADDRESS>, \"mileid\", 20, 2021-06-28)'\n")),Object(c.b)("h2",{id:"skip-this-step"},"Skip this step?"),Object(c.b)("p",null,"It is possible to skip this phase and use the contract already deployed for the demo, and available at the following address:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"KT1F5DqPwKJC9qeEjTgdEQKGGBZpcAv5DX86\n")),Object(c.b)(r.a,{url:"https://better-call.dev/delphinet/KT1F5DqPwKJC9qeEjTgdEQKGGBZpcAv5DX86/operations",txt:"open in better call dev",mdxType:"DappButton"}),Object(c.b)("p",null,"Go to the ",Object(c.b)(o.a,{to:"/docs/dapp-miles/create-miles#miles-creation-transaction",mdxType:"Link"},"use case")," section to know how to add miles for your user account."))}m.isMDXComponent=!0}}]);