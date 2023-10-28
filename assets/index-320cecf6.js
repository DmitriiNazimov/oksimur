var E=Object.defineProperty;var b=(r,e,t)=>e in r?E(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var h=(r,e,t)=>(b(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const v="/oksimur/bg/greeting-background.jpg",w="/oksimur/bg/greeting-background-mobile.jpg",L=document.querySelector("#greeting__wrapper"),a=document.querySelector(".greeting__arrow-down-img"),S=document.querySelector(".greeting__content"),u=new Image;u.src=window.screen.width<=1024?w:v;u.onload=()=>{L.classList.remove("greeting__wrapper_zoom-wait-load"),setTimeout(()=>{a.classList.remove("greeting_opacity-wait-load"),a.classList.remove("jump-wait-load")},2e3)};const k=new FontFace("Montserrat","url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2)");k.load().then(()=>{S.classList.remove("greeting_opacity-wait-load")});a.addEventListener("click",()=>{document.querySelector("#about").scrollIntoView({block:"center",behavior:"smooth"})});window.addEventListener("scroll",()=>{const r=document.querySelector("#button-top"),e=document.querySelector("#greeting__wrapper").offsetHeight;window.scrollY>e?r.classList.add("button-top_visible"):r.classList.remove("button-top_visible")});class q{constructor(e){h(this,"changeImg",(e=!0)=>{const t=e?this.current.index+1:this.current.index-1;this.current.index=t;const i=this.current.items[t];i?(this.stub.hide(),this.addImg(i,t,this.current.items)):!i&&this.stubElem.classList.contains("hidden")?(this.stub.show(),this.toggleControlBtns()):this.toggle(i)});this.setProperties(),this.setListeners(e)}setProperties(){this.galleryElem=document.querySelector(".gallery"),this.burgerMenuBtn=document.querySelector(".burger-menu"),this.galleryContentElem=this.galleryElem.querySelector(".gallery__content"),this.stubElem=this.galleryElem.querySelector(".gallery__stub"),this.imgContainer=this.galleryElem.querySelector(".gallery__img-container"),this.titleElem=this.galleryElem.querySelector(".gallery__title"),this.overlayElem=this.galleryElem.querySelector(".gallery__overlay"),this.closeBtn=this.galleryElem.querySelector(".gallery__close-btn"),this.prevBtn=this.galleryElem.querySelector(".gallery__prev"),this.nextBtn=this.galleryElem.querySelector(".gallery__next"),this.current={items:null,index:null},this.stub={show:()=>{this.stubElem.classList.remove("hidden"),this.titleElem.classList.add("hidden"),this.imgContainer.classList.add("hidden")},hide:()=>{this.stubElem.classList.add("hidden"),this.titleElem.classList.remove("hidden"),this.imgContainer.classList.remove("hidden")}}}toggle(e){this.galleryElem.classList.toggle("hidden"),this.burgerMenuBtn.classList.toggle("hidden"),document.body.style.overflow="auto",e&&(this.stub.hide(),document.body.style.overflow="hidden")}addImg(e,t,i){this.titleElem.textContent=e.getAttribute("alt"),this.current.items=i,this.current.index=t,this.imgContainer.innerHTML="",this.imgContainer.append(this.createImgClone(e)),this.startFadeEffect(),this.toggleControlBtns()}createImgClone(e){const t=e.cloneNode(!0);return t.classList.add("gallery__img"),t.style.opacity=0,t.addEventListener("click",()=>this.changeImg()),t}startFadeEffect(){setTimeout(()=>{this.imgContainer.firstChild.style.opacity=1},50)}toggleControlBtns(){this.current.index<0?this.prevBtn.classList.add("hidden"):this.prevBtn.classList.remove("hidden"),this.current.index>=this.current.items.length?this.nextBtn.classList.add("hidden"):this.nextBtn.classList.remove("hidden")}setListeners(e){e.forEach(t=>{const i=document.querySelectorAll(t);i.forEach((s,n)=>{s.addEventListener("click",()=>{this.toggle(s),this.addImg(s,n,i)})})}),this.overlayElem.addEventListener("click",()=>this.toggle()),this.closeBtn.addEventListener("click",()=>this.toggle()),this.stubElem.addEventListener("click",()=>this.toggle()),this.prevBtn.addEventListener("click",()=>this.changeImg(!1)),this.nextBtn.addEventListener("click",()=>this.changeImg()),this.galleryContentElem.addEventListener("click",t=>{t.target===t.currentTarget&&this.toggle()}),window.addEventListener("keydown",t=>{this.galleryElem.classList.contains("hidden")||(t.key==="Escape"&&this.toggle(),t.key==="ArrowLeft"&&this.changeImg(!1),t.key==="ArrowRight"&&this.changeImg(),t.key===" "&&this.changeImg())})}}new q([".artwork__item-img",".velvet-trash__item-img",".awards__item-img"]);const C="+7 916 970",I="-55-00",x="omur5",B="@rambler.ru",g=document.querySelector("#contacts__item-content-phone"),A="contacts__item-content-phone_active",m=document.querySelector("#contacts__item-content-email"),P="contacts__item-content-email_active",y=(r,e,t,i,s,n)=>{e.classList.contains(t)||(r.preventDefault(),e.textContent=i+s,e.href=`${n}:${i}${s}`,e.classList.add(t))};g.addEventListener("click",r=>y(r,g,A,C,I,"tel"));m.addEventListener("click",r=>y(r,m,P,x,B,"mailto"));const M=document.querySelectorAll(".burger-menu__wrapper .burger-menu__list-item"),T=document.querySelector("#burger-menu-checkbox");M.forEach(r=>{r.addEventListener("click",()=>{T.checked=!1})});function f(r,e,t="block",i=3){const s=document.querySelector(r),n=s.querySelector(".link-button"),l=document.querySelectorAll(e);l.length<=i&&(n.style.display="none"),s.addEventListener("click",p=>{p.preventDefault();const c=Array.from(l).filter(o=>window.getComputedStyle(o).display==="none"),d=c.length-i,_=d<=0?c.length:i;for(let o=0;o<_;o+=1)c[o].style.display=t,o===0&&c[o].scrollIntoView({block:"center",behavior:"smooth"});d<=0&&(n.style.display="none")})}f("#artwork__show-more-btn",".artwork__item");f("#velvet-trash__show-more-btn",".velvet-trash__item","flex");
