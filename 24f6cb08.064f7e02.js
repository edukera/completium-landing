(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(7),o=(t(0),t(184)),c=(t(188),t(185)),r=(t(186),t(187)),p={id:"dex4",title:"Exchange",sidebar_label:"Exchange",slug:"/dapp-dex/exchange"},l={unversionedId:"dapp-dex/dex4",id:"dapp-dex/dex4",isDocsHomePage:!1,title:"Exchange",description:"From XTZ to city coin",source:"@site/docs/dapp-dex/dex4.md",slug:"/dapp-dex/exchange",permalink:"/completium-landing/docs/dapp-dex/exchange",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dapp-dex/dex4.md",version:"current",sidebar_label:"Exchange",sidebar:"dex",previous:{title:"Use Case Presentation",permalink:"/completium-landing/docs/dapp-dex/presentation"},next:{title:"Liquidity",permalink:"/completium-landing/docs/dapp-dex/liquidity"}},d=[{value:"From XTZ to city coin",id:"from-xtz-to-city-coin",children:[]},{value:"From city coin to city coin",id:"from-city-coin-to-city-coin",children:[]}],s={toc:d};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"from-xtz-to-city-coin"},"From XTZ to city coin"),Object(o.b)("p",null,"Your are going to London during the week end. You need to buy some London City Coin with XTZ (Tezos currency) to visit museums:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Select 'XTZ' currency"),Object(o.b)("li",{parentName:"ol"},"Enter the amount of XTZ to spend"),Object(o.b)("li",{parentName:"ol"},"Select 'XLD' token"),Object(o.b)("li",{parentName:"ol"},"Quantity of XLD to get in exchange of the XTZ amount")),Object(o.b)(c.a,{img:"dex-exchange1.png",width:"100%",mdxType:"DappFigure"}),Object(o.b)("p",null,"Click on the 'Exchange button'; the temple wallet popup is displayed:"),Object(o.b)(c.a,{img:"dex-exchange2.png",width:"50%",mdxType:"DappFigure"}),Object(o.b)("p",null,"The transaction parameter specifies a call to the smart contract's entry point ",Object(o.b)("inlineCode",{parentName:"p"},"exchange"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[{\n    "kind":"transaction"\n    "to":"KT1J48AfBi8NwNaFQM1AXTvordRgSRJxK313"\n    "amount":144000000\n    "mutez":true\n    "parameter":{\n        "entrypoint":"exchange"\n        "value":{\n            "prim":"Pair"\n            "args":[{\n                "string":"XTZ"\n            } {\n                "prim":"Pair"\n                "args":[{\n                    "int":"144000000"\n                } {\n                    "prim":"Pair"\n                    "args":[{\n                        "string":"XLD"\n                    } {\n                        "int":"661"\n                    }]\n                }]\n            }]\n        }\n    }\n}]\n')),Object(o.b)("p",null,"This will generate a sub-transaction from the DEX contract to XLD FA 1.2 contract (see ",Object(o.b)(r.a,{to:"/docs/dapp-dex",mdxType:"Link"},"DApp presentation"),")."),Object(o.b)("h2",{id:"from-city-coin-to-city-coin"},"From city coin to city coin"),Object(o.b)("p",null,"It is time to come back to Paris. Exchange the XLD tokens you have not spent to XPA tokens:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Select 'XLD' token"),Object(o.b)("li",{parentName:"ol"},"Enter the quantity of XLD tokens"),Object(o.b)("li",{parentName:"ol"},"Select 'XPA' token"),Object(o.b)("li",{parentName:"ol"},"Quantity of XPA to get in exchange of the XLD amount")),Object(o.b)(c.a,{img:"dex-exchange3.png",width:"100%",mdxType:"DappFigure"}),Object(o.b)("p",null,"Click on the 'Exchange button'; the temple wallet popup is displayed:"),Object(o.b)(c.a,{img:"dex-exchange4.png",width:"50%",mdxType:"DappFigure"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[{\n    "kind":"transaction"\n    "to":"KT1H8JUiFbvEMycCuG5sZfCGHkN7vgfLAs3n"\n    "amount":0\n    "mutez":true\n    "parameter":{\n        "entrypoint":"approve"\n        "value":{\n            "prim":"Pair"\n            "args":[{\n                "string":"KT1J48AfBi8NwNaFQM1AXTvordRgSRJxK313"\n            } {\n                "int":"6"\n            }]\n        }\n    }\n} {\n    "kind":"transaction"\n    "to":"KT1J48AfBi8NwNaFQM1AXTvordRgSRJxK313"\n    "amount":0\n    "mutez":true\n    "parameter":{\n        "entrypoint":"exchange"\n        "value":{\n        "prim":"Pair"\n        "args":[{\n            "string":"XLD"\n        } {\n            "prim":"Pair"\n            "args":[{\n                "int":"6"\n            } {\n                "prim":"Pair"\n                "args":[{\n                    "string":"XPA"\n                } {\n                    "int":"16"\n                }]\n            }]\n        }]\n        }\n    }\n}]\n')),Object(o.b)("p",null,"We note that two transactions are generated:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"a call to the ",Object(o.b)("inlineCode",{parentName:"li"},"approve")," entry point of the XLD FA 1.2 smart contract to authorize the DEX to transfer XLD ownership"),Object(o.b)("li",{parentName:"ol"},"a call to the ",Object(o.b)("inlineCode",{parentName:"li"},"exchange")," entry point of the DEX smart contract")))}b.isMDXComponent=!0}}]);