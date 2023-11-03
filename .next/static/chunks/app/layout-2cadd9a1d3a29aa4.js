(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2088:function(e,s,i){Promise.resolve().then(i.t.bind(i,2853,23)),Promise.resolve().then(i.bind(i,1032)),Promise.resolve().then(i.bind(i,3554)),Promise.resolve().then(i.bind(i,7229)),Promise.resolve().then(i.bind(i,9682)),Promise.resolve().then(i.t.bind(i,2798,23)),Promise.resolve().then(i.t.bind(i,7509,23)),Promise.resolve().then(i.t.bind(i,1394,23)),Promise.resolve().then(i.t.bind(i,4678,23)),Promise.resolve().then(i.t.bind(i,9205,23)),Promise.resolve().then(i.t.bind(i,6984,23))},1032:function(e,s,i){"use strict";i.r(s);var a=i(7437),n=i(737),r=i(2265);s.default=()=>((0,r.useEffect)(()=>{n.Z.customCursor()},[]),(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mouse-cursor cursor-outer"}),(0,a.jsx)("div",{className:"mouse-cursor cursor-inner"})]}))},7229:function(e,s,i){"use strict";i.r(s);var a=i(7437),n=i(737),r=i(2265);s.default=()=>((0,r.useEffect)(()=>{n.Z.preloader()},[]),(0,a.jsx)("div",{id:"preloader",children:(0,a.jsx)("div",{className:"loader_line"})}))},3554:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return popup_Popup}});var a=i(7437),n=i(9682),r=i(2265),t=i(737),utility_useClickOutside=e=>{let s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let maybeHandler=i=>{s.current&&!s.current.contains(i.target)&&e()};return document.addEventListener("mousedown",maybeHandler),()=>{document.removeEventListener("mousedown",maybeHandler)}},[e]),s},popup_ModalLayout=e=>{let{children:s,nullValue:i}=e;(0,r.useEffect)(()=>{t.Z.imgToSVG(),t.Z.dataImage()},[]);let{modalToggle:l}=(0,r.useContext)(n.context),o=utility_useClickOutside(()=>{l(!1),i(null)});return(0,a.jsx)("div",{className:"iknow_tm_modalbox dark",children:(0,a.jsxs)("div",{className:"box_inner",ref:o,children:[(0,a.jsx)("div",{className:"close",children:(0,a.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),l(!1),i(null)},children:(0,a.jsx)("img",{className:"svg",src:"/img/svg/cancel.svg",alt:"img"})})}),(0,a.jsx)("div",{className:"description_wrap",children:s})]})})},popup_BlogPopup=()=>{let{setBlogModal:e,blogModal:s}=(0,r.useContext)(n.context);return(0,a.jsx)(popup_ModalLayout,{nullValue:e,children:(0,a.jsxs)("div",{className:"news_informations",children:[(0,a.jsxs)("div",{className:"image",children:[(0,a.jsx)("img",{src:"/img/thumbs/4-2.jpg",alt:"img"}),(0,a.jsx)("div",{className:"main","data-img-url":s.img})]}),(0,a.jsxs)("div",{className:"details",children:[(0,a.jsxs)("span",{children:[" ",s.category]}),(0,a.jsx)("h3",{children:s.title}),(0,a.jsx)("div",{})]}),(0,a.jsxs)("div",{className:"text",children:[(0,a.jsx)("p",{children:"iKnow is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."}),(0,a.jsx)("p",{children:"In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line."}),(0,a.jsx)("p",{children:"That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."})]})]})})},popup_PortfolioPopup=()=>{let{setPortfolioModal:e}=(0,r.useContext)(n.context);return(0,a.jsx)(popup_ModalLayout,{nullValue:e,children:(0,a.jsxs)("div",{className:"popup_details",children:[(0,a.jsxs)("div",{className:"top_image",children:[(0,a.jsx)("img",{src:"/img/thumbs/4-2.jpg",alt:"img"}),(0,a.jsx)("div",{className:"main","data-img-url":"/img/portfolio/8.jpg"})]}),(0,a.jsxs)("div",{className:"portfolio_main_title",children:[(0,a.jsx)("span",{children:"Detail"}),(0,a.jsx)("h3",{children:"Teresa Melbig"}),(0,a.jsx)("div",{})]}),(0,a.jsxs)("div",{className:"main_details",children:[(0,a.jsxs)("div",{className:"textbox",children:[(0,a.jsx)("p",{children:"We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance ease of modification."}),(0,a.jsx)("p",{children:"Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product."})]}),(0,a.jsx)("div",{className:"detailbox",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"first",children:"Client"}),(0,a.jsx)("span",{children:"Alvaro Morata"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"first",children:"Category"}),(0,a.jsx)("span",{children:(0,a.jsx)("a",{href:"#",children:"Detail"})})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"first",children:"Date"}),(0,a.jsx)("span",{children:"March 07, 2021"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"first",children:"Share"}),(0,a.jsxs)("ul",{className:"share",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{className:"svg",src:"/img/svg/social/facebook.svg",alt:!0})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{className:"svg",src:"/img/svg/social/twitter.svg",alt:!0})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{className:"svg",src:"/img/svg/social/instagram.svg",alt:!0})})})]})]})]})})]}),(0,a.jsx)("div",{className:"additional_images",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{className:"list_inner",children:(0,a.jsxs)("div",{className:"my_image",children:[(0,a.jsx)("img",{src:"/img/thumbs/4-2.jpg",alt:"img"}),(0,a.jsx)("div",{className:"main","data-img-url":"/img/portfolio/1.jpg"})]})})}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{className:"list_inner",children:(0,a.jsxs)("div",{className:"my_image",children:[(0,a.jsx)("img",{src:"/img/thumbs/4-2.jpg",alt:"img"}),(0,a.jsx)("div",{className:"main","data-img-url":"/img/portfolio/2.jpg"})]})})}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{className:"list_inner",children:(0,a.jsxs)("div",{className:"my_image",children:[(0,a.jsx)("img",{src:"/img/thumbs/4-2.jpg",alt:"img"}),(0,a.jsx)("div",{className:"main","data-img-url":"/img/portfolio/3.jpg"})]})})})]})})]})})},popup_ServicePopup=()=>{let{setServiceModal:e,serviceModal:s}=(0,r.useContext)(n.context);return(0,a.jsx)(popup_ModalLayout,{nullValue:e,children:(0,a.jsxs)("div",{className:"service_informations",children:[(0,a.jsxs)("div",{className:"image",children:[(0,a.jsx)("img",{src:"/img/thumbs/4-2.jpg",alt:"img"}),(0,a.jsx)("div",{className:"main","data-img-url":s.img})]}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:s.title})}),(0,a.jsxs)("div",{className:"description",children:[(0,a.jsx)("p",{children:"iKnow is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."}),(0,a.jsx)("p",{children:"In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line."}),(0,a.jsx)("p",{children:"That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."})]})]})})},l=i(429);let VideoPopup_=e=>{let{close:s,videoID:i}=e,n=utility_useClickOutside(()=>{s(!1)});return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mfp-bg mfp-ready",onClick:()=>s(!1)}),(0,a.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,a.jsxs)("div",{className:"mfp-container popup-container mfp-s-ready mfp-iframe-holder",children:[(0,a.jsx)("div",{className:"mfp-content",ref:n,children:(0,a.jsxs)("div",{className:"mfp-iframe-scaler",children:[(0,a.jsx)("button",{title:"Close (Esc)",type:"button",className:"mfp-close",onClick:()=>s(),children:"\xd7"}),(0,a.jsx)(l.Z,{url:i,playing:!0})]})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})};var popup_VideoPopup=()=>{let[e,s]=(0,r.useState)(!1),[i,n]=(0,r.useState)(null);return(0,r.useEffect)(()=>{let e=document.querySelectorAll("a");e.forEach(e=>{(e.href.includes("www.youtube.com")||e.href.includes("vimeo.com")||e.href.includes("soundcloud.com"))&&e.addEventListener("click",i=>{i.preventDefault(),n(e.href),s(!0)})})},[e]),e&&(0,a.jsx)(VideoPopup_,{close:()=>s(!1),videoID:i})},popup_Popup=()=>{let{modal:e,portfolioModal:s,serviceModal:i,blogModal:t}=(0,r.useContext)(n.context);return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(popup_VideoPopup,{}),e&&s&&(0,a.jsx)(popup_PortfolioPopup,{}),e&&i&&(0,a.jsx)(popup_ServicePopup,{}),e&&t&&(0,a.jsx)(popup_BlogPopup,{})]})}},2853:function(){},6984:function(){},4678:function(){},9205:function(){}},function(e){e.O(0,[942,281,971,472,744],function(){return e(e.s=2088)}),_N_E=e.O()}]);