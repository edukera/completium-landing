(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{180:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),n=t(304),i=t(302),c=t(276),l=t(299),s=t(301),d=t(190),m=t(196),p=t(200),u=t(303),g=t(3),b=t(193),h=(t(1),t(194)),v=t(239),f=Object(v.a)(o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),y=t(197),x=t(213),O=t(215),w=t(202),j=t(307);function k(e){return"Backspace"===e.key||"Delete"===e.key}var C=o.forwardRef((function(e,a){var t=e.avatar,r=e.classes,n=e.className,i=e.clickable,c=e.color,l=void 0===c?"default":c,s=e.component,d=e.deleteIcon,m=e.disabled,p=void 0!==m&&m,u=e.icon,v=e.label,y=e.onClick,x=e.onDelete,C=e.onKeyDown,E=e.onKeyUp,S=e.size,N=void 0===S?"medium":S,z=e.variant,T=void 0===z?"default":z,R=Object(b.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),L=o.useRef(null),$=Object(O.a)(L,a),I=function(e){e.stopPropagation(),x&&x(e)},D=!(!1===i||!y)||i,P="small"===N,A=s||(D?j.a:"div"),q=A===j.a?{component:"div"}:{},M=null;if(x){var V=Object(h.a)("default"!==l&&("default"===T?r["deleteIconColor".concat(Object(w.a)(l))]:r["deleteIconOutlinedColor".concat(Object(w.a)(l))]),P&&r.deleteIconSmall);M=d&&o.isValidElement(d)?o.cloneElement(d,{className:Object(h.a)(d.props.className,r.deleteIcon,V),onClick:I}):o.createElement(f,{className:Object(h.a)(r.deleteIcon,V),onClick:I})}var F=null;t&&o.isValidElement(t)&&(F=o.cloneElement(t,{className:Object(h.a)(r.avatar,t.props.className,P&&r.avatarSmall,"default"!==l&&r["avatarColor".concat(Object(w.a)(l))])}));var B=null;return u&&o.isValidElement(u)&&(B=o.cloneElement(u,{className:Object(h.a)(r.icon,u.props.className,P&&r.iconSmall,"default"!==l&&r["iconColor".concat(Object(w.a)(l))])})),o.createElement(A,Object(g.a)({role:D||x?"button":void 0,className:Object(h.a)(r.root,n,"default"!==l&&[r["color".concat(Object(w.a)(l))],D&&r["clickableColor".concat(Object(w.a)(l))],x&&r["deletableColor".concat(Object(w.a)(l))]],"default"!==T&&[r.outlined,{primary:r.outlinedPrimary,secondary:r.outlinedSecondary}[l]],p&&r.disabled,P&&r.sizeSmall,D&&r.clickable,x&&r.deletable),"aria-disabled":!!p||void 0,tabIndex:D||x?0:void 0,onClick:y,onKeyDown:function(e){e.currentTarget===e.target&&k(e)&&e.preventDefault(),C&&C(e)},onKeyUp:function(e){e.currentTarget===e.target&&(x&&k(e)?x(e):"Escape"===e.key&&L.current&&L.current.blur()),E&&E(e)},ref:$},q,R),F||B,o.createElement("span",{className:Object(h.a)(r.label,P&&r.labelSmall)},v),M)})),E=Object(y.a)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=Object(x.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(x.b)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(x.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(x.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(x.b)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(x.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(x.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(x.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(x.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(x.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(x.c)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(x.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(x.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(x.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(x.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(C),S=o.forwardRef((function(e,a){var t=e.classes,r=e.className,n=e.component,i=void 0===n?"div":n,c=e.square,l=void 0!==c&&c,s=e.elevation,d=void 0===s?1:s,m=e.variant,p=void 0===m?"elevation":m,u=Object(b.a)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(i,Object(g.a)({className:Object(h.a)(t.root,r,"outlined"===p?t.outlined:t["elevation".concat(d)],!l&&t.rounded),ref:a},u))})),N=Object(y.a)((function(e){var a={};return e.shadows.forEach((function(e,t){a["elevation".concat(t)]={boxShadow:e}})),Object(g.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},a)}),{name:"MuiPaper"})(S),z=o.forwardRef((function(e,a){var t=e.classes,r=e.className,n=e.raised,i=void 0!==n&&n,c=Object(b.a)(e,["classes","className","raised"]);return o.createElement(N,Object(g.a)({className:Object(h.a)(t.root,r),elevation:i?8:1,ref:a},c))})),T=Object(y.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(z),R=o.forwardRef((function(e,a){var t=e.children,r=e.classes,n=e.className,i=e.focusVisibleClassName,c=Object(b.a)(e,["children","classes","className","focusVisibleClassName"]);return o.createElement(j.a,Object(g.a)({className:Object(h.a)(r.root,n),focusVisibleClassName:Object(h.a)(i,r.focusVisible),ref:a},c),t,o.createElement("span",{className:r.focusHighlight}))})),L=Object(y.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(R),$=o.forwardRef((function(e,a){var t=e.classes,r=e.className,n=e.component,i=void 0===n?"div":n,c=Object(b.a)(e,["classes","className","component"]);return o.createElement(i,Object(g.a)({className:Object(h.a)(t.root,r),ref:a},c))})),I=Object(y.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})($),D=["video","audio","picture","iframe","img"],P=o.forwardRef((function(e,a){var t=e.children,r=e.classes,n=e.className,i=e.component,c=void 0===i?"div":i,l=e.image,s=e.src,d=e.style,m=Object(b.a)(e,["children","classes","className","component","image","src","style"]),p=-1!==D.indexOf(c),u=!p&&l?Object(g.a)({backgroundImage:'url("'.concat(l,'")')},d):d;return o.createElement(c,Object(g.a)({className:Object(h.a)(r.root,n,p&&r.media,-1!=="picture img".indexOf(c)&&r.img),ref:a,style:u,src:p?l||s:void 0},m),t)})),A=Object(y.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(P),q=t(306),M=t(256);const V=[{name:"miles",title:"Fidelity program",img:"streamline-icon-takeoff-ticket.svg",chips:["Marketing"],text:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},{name:"iot",title:"Connected object",img:"streamline-icon-phone-app-idea.svg",chips:["IoT"],text:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},{name:"ideabox",title:"Idea box",img:"streamline-icon-idea-box.svg",chips:["Governance"],text:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},{name:"game",title:"2048 competition",img:"streamline-icon-programming-module.svg",chips:["Gaming","Oracle"],text:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},{name:"escrow",title:"Online purchase",img:"streamline-icon-customize-shirt-browser.svg",chips:["Escrow","Payment","DeFi"],text:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},{name:"nonfungible",title:"Collectible cards",img:"streamline-icon-card-poker.svg",chips:["Token","DeFi","Gaming"],text:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},{name:"dex",title:"Dex",img:"streamline-icon-currencies-exchange.svg",chips:["Token","DeFi"],text:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},{name:"zcb",title:"Zero coupon bond",img:"streamline-icon-contract-handshake.svg",chips:["Legal","Payment","DeFi"],text:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"},{name:"bids",title:"Bids",img:"streamline-icon-gavel.svg",chips:["Governance"],text:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}],F=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(q.a)(e,Object(g.a)({defaultTheme:M.a},a))}({root:{maxWidth:"100%",minWidth:"300px",backgroundColor:"#101010",border:"2px solid #3e3e3e"},media:{height:250,backgroundSize:"70%"}});function B(e){const a=F();return r.a.createElement(T,{className:a.root},r.a.createElement(L,{component:d.a,to:Object(m.a)("docs/dapp-"+e.name+"/"),style:{textDecoration:"none"}},r.a.createElement(A,{className:a.media,image:Object(m.a)("img/"+e.img),title:e.title}),r.a.createElement(I,null,r.a.createElement(i.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(i.a,{variant:"body2",color:"textSecondary",component:"p"},e.text),r.a.createElement("div",{style:{marginTop:"20px"}}),e.chips.map((e=>r.a.createElement(E,{style:{marginRight:"8px"},variant:"outlined",label:e}))))))}a.default=function(){const e=r.a.useMemo((()=>Object(c.a)({palette:{type:"dark"}})),[true]);return r.a.createElement(p.a,null,r.a.createElement(l.a,{theme:e},r.a.createElement(u.a,{maxWidth:"md"},r.a.createElement(n.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:4},r.a.createElement(n.a,{item:!0,style:{textAlign:"center"}},r.a.createElement(i.a,{variant:"h3",style:{marginTop:"40px"}},"Learn to developp Dapps")),r.a.createElement(n.a,{item:!0,style:{paddingTop:0}},r.a.createElement(i.a,{variant:"h5"},"with examples")),r.a.createElement(n.a,{item:!0},r.a.createElement(i.a,null,"Dapps presented below are potential real-life applications that illustrate how to leverage the Tezos blockchain technology to create a new generation of game-changing applications. Tezos is a powerfull self-amending blockchain that comes with a rich technical ecosystem.")),r.a.createElement(n.a,{item:!0,style:{marginBottom:"60px"}},r.a.createElement(s.a,{component:d.a,to:Object(m.a)("docs/dapp-tools/tezos/"),variant:"outlined",size:"large"},"Learn about Tezos")),r.a.createElement(n.a,{item:!0},r.a.createElement(n.a,{container:!0,direction:"row",spacing:4,justify:"center",alignItems:"center"},V.map((e=>r.a.createElement(n.a,{item:!0,md:4,sm:6,xs:12},r.a.createElement(B,{name:e.name,img:e.img,title:e.title,text:e.text,chips:e.chips})))))),r.a.createElement(n.a,{item:!0,style:{marginTop:"60px",marginBottom:"60px"}},r.a.createElement(i.a,null,"Each Dapp comes with several documents:",r.a.createElement("ul",null,r.a.createElement("li",null,"an introduction that explains the business issue it solves with a focus on the rationale behind the use of blockchain, and how the business logic is split between on-chain and off-chain process"),r.a.createElement("li",null,"an open source live demo of the Dapp"),r.a.createElement("li",null,"a user manual that presents how to use the Dapp"),r.a.createElement("li",null,"a technical implementation that presents step-by-step instructions to implement the required interactions between the Dapp, the smart contract, and the wallet; the user is invited to test and implement these instructions in a gitpod environment."),r.a.createElement("li",null,"a commented presentation of the smart contract's source code"))))))))}}}]);