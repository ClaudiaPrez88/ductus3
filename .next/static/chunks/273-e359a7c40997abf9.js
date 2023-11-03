"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{8314:function(e,t,r){r.d(t,{ZP:function(){return n}});let a={_origin:"https://api.emailjs.com"},validateParams=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};let EmailJSResponseStatus=class EmailJSResponseStatus{constructor(e){this.status=e.status,this.text=e.responseText}};let sendPost=(e,t,r={})=>new Promise((n,s)=>{let i=new XMLHttpRequest;i.addEventListener("load",({target:e})=>{let t=new EmailJSResponseStatus(e);200===t.status||"OK"===t.text?n(t):s(t)}),i.addEventListener("error",({target:e})=>{s(new EmailJSResponseStatus(e))}),i.open("POST",a._origin+e,!0),Object.keys(r).forEach(e=>{i.setRequestHeader(e,r[e])}),i.send(t)}),findHTMLForm=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t};var n={init:(e,t="https://api.emailjs.com")=>{a._userID=e,a._origin=t},send:(e,t,r,n)=>{let s=n||a._userID;return validateParams(s,e,t),sendPost("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:s,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:(e,t,r,n)=>{let s=n||a._userID,i=findHTMLForm(r);validateParams(s,e,t);let o=new FormData(i);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",s),sendPost("/api/v1.0/email/send-form",o)}}},4186:function(e,t,r){var a=r(7437);t.Z=e=>{let{fixed:t=!1,extraCls:r=!1}=e;return(0,a.jsx)("div",{className:"iknow_tm_copyright ".concat(r||(t?"fixed":"hidden")),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"inner",children:[(0,a.jsx)("div",{className:"left",children:(0,a.jsxs)("p",{children:["Todos los derechos \xa9"," ",(0,a.jsx)("a",{href:"#",target:"_blank",className:"copy",children:"Ductus Connect Telecomunicaciones"})]})}),(0,a.jsx)("div",{className:"right",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Terms & Condition"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Privacy Policy"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Login"})})]})})]})})})}},7693:function(e,t,r){r.r(t),r.d(t,{default:function(){return layouts_MaryLayout}});var a=r(7437),n=r(2265),components_Audio=()=>((0,n.useEffect)(()=>{var e=document.querySelectorAll("#audio1"),t=document.querySelectorAll("#audio2"),r=document.querySelectorAll(".trigger .hamburger");r.length>0&&r.forEach(r=>{r.addEventListener("click",function(){return this.classList.contains("is-active")?e[0].play():t[0].play(),!1})})},[]),(0,a.jsxs)(n.Fragment,{children:[(0,a.jsx)("audio",{id:"audio1",children:(0,a.jsx)("source",{src:"/audio/1.mp3"})}),(0,a.jsx)("audio",{id:"audio2",children:(0,a.jsx)("source",{src:"/audio/2.mp3"})})]})),s=r(4186),hero_Mary=e=>{let{activeMenu:t}=e;return(0,a.jsx)("div",{className:"iknow_tm_animate_section ".concat("home"==t?"active animated zoomInDown":"active slideInLeft hidden animated"),id:"home",children:(0,a.jsxs)("div",{className:"iknow_tm_hero_fourth",children:[(0,a.jsxs)("div",{className:"background",children:[(0,a.jsx)("div",{className:"image","data-img-url":"/img/hero/9.jpg"}),(0,a.jsx)("div",{className:"overlay"})]}),(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("div",{className:"left",children:(0,a.jsx)("div",{className:"image",children:(0,a.jsx)("img",{src:"/img/hero/avatar.png",alt:""})})}),(0,a.jsxs)("div",{className:"right",children:[(0,a.jsx)("span",{className:"hello",children:"Hello, I'm"}),(0,a.jsx)("h3",{className:"name",children:"Mary Jane"}),(0,a.jsx)("p",{className:"text",children:"A passionate UI/UX Designer and Web Developer based In NYC, USA"}),(0,a.jsx)("div",{className:"iknow_tm_button",children:(0,a.jsx)("a",{href:"img/cv/1.jpg",download:"",children:"Download CV"})})]})]})]})})},i=r(9682),o=r(737),layouts_MaryLayout=e=>{let{darkLogo:t=!0,darkBg:r=!1}=e,[l,c]=(0,n.useState)("home"),[d,u]=(0,n.useState)(!1),{pageContent:m,menus:h,setAboutData:p}=(0,n.useContext)(i.context);return(0,n.useEffect)(()=>{o.Z.imgToSVG(),o.Z.dataImage(),p({img:"/img/hero/12.jpg",name:"Mary Jane",email:"hello@mary.com",bio:"Hi! My name is Mary Jane. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success."})},[]),(0,n.useEffect)(()=>{o.Z.maryMenuTransition()},[l]),(0,a.jsxs)(n.Fragment,{children:[(0,a.jsxs)("div",{className:"iknow_tm_extra_demo",children:[(0,a.jsx)("div",{className:"iknow_tm_fixed_background","data-img-url":r?"/img/hero/5.jpg":"/img/hero/4.jpg"}),(0,a.jsx)("div",{className:"iknow_tm_topbar smaller","data-position":"fixed",children:(0,a.jsxs)("div",{className:"topbar_inner",children:[(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)("a",{href:"#",children:t?(0,a.jsx)("img",{src:"/img/logo/dark.png",alt:"logo"}):(0,a.jsx)("img",{src:"/img/logo/light.png",alt:"logo"})})}),(0,a.jsxs)("div",{className:"wrapper",children:[(0,a.jsxs)("div",{className:"menu transition_link ".concat(d?"opened":""),children:[(0,a.jsx)("ul",{children:h.map(e=>(0,a.jsx)("li",{className:l===e.href?"active":"",children:(0,a.jsx)("a",{href:"#".concat(e.href),onClick:()=>c(e.href),children:e.title})},e.id))}),(0,a.jsx)("span",{className:"ccc"})]}),(0,a.jsx)("div",{className:"trigger",children:(0,a.jsx)("div",{className:"hamburger hamburger--slider ".concat(d?"is-active":""),onClick:()=>u(!d),children:(0,a.jsx)("div",{className:"hamburger-box",children:(0,a.jsx)("div",{className:"hamburger-inner"})})})})]})]})}),(0,a.jsxs)("div",{className:"iknow_tm_mainpart_new",children:[(0,a.jsx)(hero_Mary,{activeMenu:l}),m.map(e=>(0,a.jsx)("div",{className:"iknow_tm_animate_section ".concat(l==e.sectionId?"active animated zoomInDown":"active slideInLeft hidden animated"),id:"about",children:(0,a.jsx)("div",{className:"section_inner",children:e.component})},e.id))]}),(0,a.jsx)(s.Z,{fixed:!0})]}),(0,a.jsx)(components_Audio,{})]})}},8811:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return dynamic}});let a=r(1024);r(2265);let n=a._(r(7075));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function dynamic(e,t){let r=n.default,a={loading:e=>{let{error:t,isLoading:r,pastDelay:a}=e;return null}};"function"==typeof e&&(a.loader=e),Object.assign(a,t);let s=a.loader;return r({...a,loader:()=>null!=s?s().then(convertModule):Promise.resolve(convertModule(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9167:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return suspense},NoSSR:function(){return NoSSR}});let a=r(1283);function suspense(){let e=Error(a.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=a.NEXT_DYNAMIC_NO_SSR_CODE,e}function NoSSR(e){let{children:t}=e;return t}},7075:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _default}});let a=r(1024),n=a._(r(2265)),s=r(9167),_default=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function LoadableComponent(e){let r=t.loading,a=n.default.createElement(r,{isLoading:!0,pastDelay:!0,error:null}),i=t.ssr?n.default.Fragment:s.NoSSR,o=t.lazy;return n.default.createElement(n.default.Suspense,{fallback:a},n.default.createElement(i,null,n.default.createElement(o,e)))}return t.lazy=n.default.lazy(t.loader),LoadableComponent.displayName="LoadableComponent",LoadableComponent}},622:function(e,t,r){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(2265),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var a,s={},c=null,d=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=q,t.jsxs=q},7437:function(e,t,r){e.exports=r(622)},2585:function(e,t,r){r.d(t,{Ip:function(){return n},y3:function(){return buildStyles}});var a=r(2265),extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function Path(e){var t,r,n,s,i,o,l,c=e.className,d=e.counterClockwise,u=e.dashRatio,m=e.pathRadius,h=e.strokeWidth,p=e.style;return(0,a.createElement)("path",{className:c,style:Object.assign({},p,(r=(t={pathRadius:m,dashRatio:u,counterClockwise:d}).counterClockwise,s=(1-t.dashRatio)*(n=2*Math.PI*t.pathRadius),{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(r?-s:s)+"px"})),d:"\n      M 50,50\n      m 0,-"+(o=(i={pathRadius:m,counterClockwise:d}).pathRadius)+"\n      a "+o+","+o+" "+(l=i.counterClockwise?1:0)+" 1 1 0,"+2*o+"\n      a "+o+","+o+" "+l+" 1 1 0,-"+2*o+"\n    ",strokeWidth:h,fillOpacity:0})}var n=function(e){function CircularProgressbar(){return null!==e&&e.apply(this,arguments)||this}return!function(e,t){function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}(CircularProgressbar,e),CircularProgressbar.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},CircularProgressbar.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},CircularProgressbar.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,a=e.maxValue;return(Math.min(Math.max(t,r),a)-r)/(a-r)},CircularProgressbar.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,n=e.classes,s=e.counterClockwise,i=e.styles,o=e.strokeWidth,l=e.text,c=this.getPathRadius(),d=this.getPathRatio();return(0,a.createElement)("svg",{className:n.root+" "+r,style:i.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:n.background,style:i.background,cx:50,cy:50,r:50}):null,(0,a.createElement)(Path,{className:n.trail,counterClockwise:s,dashRatio:t,pathRadius:c,strokeWidth:o,style:i.trail}),(0,a.createElement)(Path,{className:n.path,counterClockwise:s,dashRatio:d*t,pathRadius:c,strokeWidth:o,style:i.path}),l?(0,a.createElement)("text",{className:n.text,style:i.text,x:50,y:50},l):null)},CircularProgressbar.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},CircularProgressbar}(a.Component);function buildStyles(e){var t=e.rotation,r=e.strokeLinecap,a=e.textColor,n=e.textSize,s=e.pathColor,i=e.pathTransition,o=e.pathTransitionDuration,l=e.trailColor,c=e.backgroundColor,d=null==t?void 0:"rotate("+t+"turn)",u=null==t?void 0:"center center";return{root:{},path:removeUndefinedValues({stroke:s,strokeLinecap:r,transform:d,transformOrigin:u,transition:i,transitionDuration:null==o?void 0:o+"s"}),trail:removeUndefinedValues({stroke:l,strokeLinecap:r,transform:d,transformOrigin:u}),text:removeUndefinedValues({fill:a,fontSize:n}),background:removeUndefinedValues({fill:c})}}function removeUndefinedValues(e){return Object.keys(e).forEach(function(t){null==e[t]&&delete e[t]}),e}}}]);