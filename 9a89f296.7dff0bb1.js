(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{177:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(308),i=a(306),c=a(280),l=a(303),s=a(305),m=a(187),d=a(194),p=a(198),u=a(307),b=a(3),h=a(191),g=(a(1),a(192)),y=a(242),f=Object(y.a)(o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),v=a(195),O=a(212),k=a(214),x=a(200),j=a(311);function C(e){return"Backspace"===e.key||"Delete"===e.key}var w=o.forwardRef((function(e,t){var a=e.avatar,n=e.classes,r=e.className,i=e.clickable,c=e.color,l=void 0===c?"default":c,s=e.component,m=e.deleteIcon,d=e.disabled,p=void 0!==d&&d,u=e.icon,y=e.label,v=e.onClick,O=e.onDelete,w=e.onKeyDown,E=e.onKeyUp,S=e.size,N=void 0===S?"medium":S,T=e.variant,R=void 0===T?"default":T,D=Object(h.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),$=o.useRef(null),z=Object(k.a)($,t),I=function(e){e.stopPropagation(),O&&O(e)},P=!(!1===i||!v)||i,L="small"===N,A=s||(P?j.a:"div"),M=A===j.a?{component:"div"}:{},F=null;if(O){var V=Object(g.a)("default"!==l&&("default"===R?n["deleteIconColor".concat(Object(x.a)(l))]:n["deleteIconOutlinedColor".concat(Object(x.a)(l))]),L&&n.deleteIconSmall);F=m&&o.isValidElement(m)?o.cloneElement(m,{className:Object(g.a)(m.props.className,n.deleteIcon,V),onClick:I}):o.createElement(f,{className:Object(g.a)(n.deleteIcon,V),onClick:I})}var B=null;a&&o.isValidElement(a)&&(B=o.cloneElement(a,{className:Object(g.a)(n.avatar,a.props.className,L&&n.avatarSmall,"default"!==l&&n["avatarColor".concat(Object(x.a)(l))])}));var H=null;return u&&o.isValidElement(u)&&(H=o.cloneElement(u,{className:Object(g.a)(n.icon,u.props.className,L&&n.iconSmall,"default"!==l&&n["iconColor".concat(Object(x.a)(l))])})),o.createElement(A,Object(b.a)({role:P||O?"button":void 0,className:Object(g.a)(n.root,r,"default"!==l&&[n["color".concat(Object(x.a)(l))],P&&n["clickableColor".concat(Object(x.a)(l))],O&&n["deletableColor".concat(Object(x.a)(l))]],"default"!==R&&[n.outlined,{primary:n.outlinedPrimary,secondary:n.outlinedSecondary}[l]],p&&n.disabled,L&&n.sizeSmall,P&&n.clickable,O&&n.deletable),"aria-disabled":!!p||void 0,tabIndex:P||O?0:void 0,onClick:v,onKeyDown:function(e){e.currentTarget===e.target&&C(e)&&e.preventDefault(),w&&w(e)},onKeyUp:function(e){e.currentTarget===e.target&&(O&&C(e)?O(e):"Escape"===e.key&&$.current&&$.current.blur()),E&&E(e)},ref:z},M,D),B||H,o.createElement("span",{className:Object(g.a)(n.label,L&&n.labelSmall)},y),F)})),E=Object(v.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(O.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(O.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(O.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(O.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(O.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(O.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(O.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(O.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(O.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(O.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(O.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(O.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(w),S=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"div":r,c=e.square,l=void 0!==c&&c,s=e.elevation,m=void 0===s?1:s,d=e.variant,p=void 0===d?"elevation":d,u=Object(h.a)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(i,Object(b.a)({className:Object(g.a)(a.root,n,"outlined"===p?a.outlined:a["elevation".concat(m)],!l&&a.rounded),ref:t},u))})),N=Object(v.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(b.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(S),T=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.raised,i=void 0!==r&&r,c=Object(h.a)(e,["classes","className","raised"]);return o.createElement(N,Object(b.a)({className:Object(g.a)(a.root,n),elevation:i?8:1,ref:t},c))})),R=Object(v.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(T),D=o.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.focusVisibleClassName,c=Object(h.a)(e,["children","classes","className","focusVisibleClassName"]);return o.createElement(j.a,Object(b.a)({className:Object(g.a)(n.root,r),focusVisibleClassName:Object(g.a)(i,n.focusVisible),ref:t},c),a,o.createElement("span",{className:n.focusHighlight}))})),$=Object(v.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(D),z=o.forwardRef((function(e,t){var a=e.classes,n=e.className,r=e.component,i=void 0===r?"div":r,c=Object(h.a)(e,["classes","className","component"]);return o.createElement(i,Object(b.a)({className:Object(g.a)(a.root,n),ref:t},c))})),I=Object(v.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(z),P=["video","audio","picture","iframe","img"],L=o.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.component,c=void 0===i?"div":i,l=e.image,s=e.src,m=e.style,d=Object(h.a)(e,["children","classes","className","component","image","src","style"]),p=-1!==P.indexOf(c),u=!p&&l?Object(b.a)({backgroundImage:'url("'.concat(l,'")')},m):m;return o.createElement(c,Object(b.a)({className:Object(g.a)(n.root,r,p&&n.media,-1!=="picture img".indexOf(c)&&n.img),ref:t,style:u,src:p?l||s:void 0},d),a)})),A=Object(v.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(L),M=a(310),F=a(259);var V=[{name:"miles",title:"Fidelity program",img:"streamline-icon-takeoff-ticket.svg",chips:["Marketing"],text:"Customers of a service (transport, gaming, grocery, ...) receive miles and trade them in for gifts, cash-back, or any kind of reward."},{name:"iot",title:"Connected object",img:"streamline-icon-phone-app-idea.svg",chips:["IoT"],text:"Switch on for a certain duration or interrupt an online bulb connected to a Tezos smart contract, by transferring fund to this smart contract."},{name:"ideabox",title:"Idea box",img:"streamline-icon-idea-box.svg",chips:["Governance"],text:"An online retail company provides an ideabox for customers and/or employees to post ideas to improve customer experience."},{name:"game",title:"2048 competition",img:"streamline-icon-programming-module.svg",chips:["Gaming","Oracle"],text:"Win the competition of the famous 2048 game by sliding numbered tiles that pops up at random position on the grid and obtain the highest score."},{name:"escrow",title:"Online purchase",img:"streamline-icon-customize-shirt-browser.svg",chips:["Escrow","Payment","DeFi"],text:"An online retailer provides a decentralized process to transfer payment from buyer to seller without the need for a third party."},{name:"nonfungible",title:"Collectible cards",img:"streamline-icon-card-poker.svg",chips:["Token","DeFi","Gaming"],text:"The cryptobot company is issuing a hundred collectible robot cards. Build your optimal card deck by buying and selling them online!"},{name:"dex",title:"Dex",img:"streamline-icon-currencies-exchange.svg",chips:["Token","DeFi"],text:"A Decentralized Exchange (DEX) enbable customers to trade cryptocurrencies without the need for an intermediary."},{name:"zcb",title:"Zero coupon bond",img:"streamline-icon-contract-handshake.svg",chips:["Legal","Payment","DeFi"],text:"Use your company\u2019s online DeFi solution to deploy a templated Zero Coupon bond contract on the Tezos blockchain for your customers."},{name:"bids",title:"Auction",img:"streamline-icon-gavel.svg",chips:["Governance"],text:"Participate in an blockchain-powered online auction of exceptional rare paintings and don\u2019t forget to overbid! (coming soon ...)"}],B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(M.a)(e,Object(b.a)({defaultTheme:F.a},t))}({root:{maxWidth:"100%",minWidth:"300px",backgroundColor:"#101010",border:"2px solid #3e3e3e"},media:{height:250,backgroundSize:"70%"}});function H(e){var t=B();return n.a.createElement(R,{className:t.root},n.a.createElement($,{component:m.a,to:Object(d.a)("docs/dapp-"+e.name+"/"),style:{textDecoration:"none"}},n.a.createElement(A,{className:t.media,image:Object(d.a)("img/"+e.img),title:e.title}),n.a.createElement(I,null,n.a.createElement(i.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),n.a.createElement(i.a,{variant:"body2",color:"textSecondary",component:"p"},e.text),n.a.createElement("div",{style:{marginTop:"20px"}}),e.chips.map((function(e){return n.a.createElement(E,{style:{marginRight:"8px"},variant:"outlined",label:e})})))))}t.default=function(){var e=n.a.useMemo((function(){return Object(c.a)({palette:{type:"dark"}})}),[true]);return n.a.createElement(p.a,null,n.a.createElement(l.a,{theme:e},n.a.createElement(u.a,{maxWidth:"md"},n.a.createElement(r.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:4},n.a.createElement(r.a,{item:!0,style:{textAlign:"center"}},n.a.createElement(i.a,{variant:"h3",style:{marginTop:"40px"}},"Learn to developp Dapps")),n.a.createElement(r.a,{item:!0,style:{paddingTop:0}},n.a.createElement(i.a,{variant:"h5"},"with examples")),n.a.createElement(r.a,{item:!0},n.a.createElement(i.a,null,"Dapps presented below are potential real-life applications that illustrate how to leverage the ",n.a.createElement(m.a,{to:"/docs/dapp-tools/tezos"},"Tezos")," blockchain technology to create a new generation of game-changing applications. Tezos is a powerfull self-amending blockchain that comes with a rich technical ecosystem. Click button below to discover the technical stack used to developp these DApps.")),n.a.createElement(r.a,{item:!0,style:{marginBottom:"60px"}},n.a.createElement(s.a,{component:m.a,to:Object(d.a)("docs/dapp-tools/"),variant:"outlined",size:"large"},"Technical Stack")),n.a.createElement(r.a,{item:!0},n.a.createElement(r.a,{container:!0,direction:"row",spacing:4,justify:"center",alignItems:"center"},V.map((function(e){return n.a.createElement(r.a,{item:!0,md:4,sm:6,xs:12},n.a.createElement(H,{name:e.name,img:e.img,title:e.title,text:e.text,chips:e.chips}))})))),n.a.createElement(r.a,{item:!0,style:{marginTop:"60px",marginBottom:"60px"}},n.a.createElement(i.a,null,"Each Dapp comes with several documents:",n.a.createElement("ul",null,n.a.createElement("li",null,"an introduction that explains the business issue it solves with a focus on the rationale behind the use of blockchain, and how the business logic is split between on-chain and off-chain process"),n.a.createElement("li",null,"an open source live demo of the Dapp"),n.a.createElement("li",null,"a user manual that presents how to use the Dapp"),n.a.createElement("li",null,"a technical implementation that presents step-by-step instructions to implement the required interactions between the Dapp, the smart contract, and the wallet; the user is invited to test and implement these instructions in a gitpod environment."),n.a.createElement("li",null,"a commented presentation of the smart contract's source code"))))))))}}}]);