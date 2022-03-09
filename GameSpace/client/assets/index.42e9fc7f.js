import{r as G,c as A,a as v,o as c,b as l,d as n,e as f,w as y,F as N,f as T,n as W,g as U,p as x,h as E,i as Y,j as J,k as Q,l as X,S as B,m as Z,t as w,q as ee,s as te,u as oe,v as se,x as $,M as D,y as R,z as j,A as S,B as ne,C as ae,D as re}from"./vendor.91c45adf.js";const ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}};ie();const _=G({user:{},account:{},posts:{}});var P=(o,e)=>{for(const[t,s]of e)o[t]=s;return o};const ce={name:"App",setup(){return{appState:A(()=>_)}}},le=T("Create a new post...");function de(o,e,t,s,a,i){const r=v("Navbar"),u=v("router-view"),C=v("NewPost"),K=v("Modal");return c(),l(N,null,[n("header",null,[f(r)]),n("main",null,[f(u)]),f(K,{id:"newPost",dark:""},{"modal-title":y(()=>[le]),"modal-body":y(()=>[f(C)]),_:1})],64)}var ue=P(ce,[["render",de]]);const _e={props:{dark:{type:Boolean,default:!1}},setup(){return{pauseVideo(){var o=document.getElementById("viewPost-"+props.post.id);o.addEventListener("hide.bs.modal",function(){document.getElementById("video").pause()})}}}},me=o=>(x("data-v-4c583f24"),o=o(),E(),o),pe={class:"modal",tabindex:"-1"},ge={class:"modal-dialog modal-dialog-centered modal-xl"},he={class:"modal-header"},ve={class:"modal-title"},fe=me(()=>n("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",title:"Close Window"},null,-1)),be={class:"modal-body"};function ye(o,e,t,s,a,i){return c(),l("div",pe,[n("div",ge,[n("div",{class:W(["modal-content",t.dark?"bg-dark":""])},[n("div",he,[n("h5",ve,[U(o.$slots,"modal-title",{},void 0,!0)]),fe]),n("div",be,[U(o.$slots,"modal-body",{},void 0,!0)])],2)])])}var we=P(_e,[["render",ye],["__scopeId","data-v-4c583f24"]]),Pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:we});const L=window.location.origin.includes("localhost"),M=L?"http://localhost:3000":"",ke="dev-hgqjrro9.us.auth0.com",xe="JrqqXscucubFtUlHT7GxKeNrn0rvmBXv",Ee="https://gregslist.com",$e={apiKey:"AIzaSyD0cueFOFHxAgrJ0Qk7jx0kBn4nMdgvC9k",authDomain:"gamespace-5e220.firebaseapp.com",projectId:"gamespace-5e220",storageBucket:"gamespace-5e220.appspot.com",messagingSenderId:"304411184638",appId:"1:304411184638:web:e79382659f4c7678b384af",measurementId:"G-PZ88VNR84V"},Se="modulepreload",q={},Ce="/",I=function(e,t){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=`${Ce}${s}`,s in q)return;q[s]=!0;const a=s.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":Se,a||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),a)return new Promise((u,C)=>{r.addEventListener("load",u),r.addEventListener("error",C)})})).then(()=>e())};function Ae(o){switch(o){case"./pages/AboutPage.vue":return I(()=>import("./AboutPage.3b91b24f.js"),["assets/AboutPage.3b91b24f.js","assets/vendor.91c45adf.js"]);case"./pages/AccountPage.vue":return I(()=>import("./AccountPage.83d582ab.js"),["assets/AccountPage.83d582ab.js","assets/AccountPage.1d38451d.css","assets/vendor.91c45adf.js"]);case"./pages/HomePage.vue":return I(()=>import("./HomePage.6de0f8a2.js"),["assets/HomePage.6de0f8a2.js","assets/HomePage.68b4940b.css","assets/vendor.91c45adf.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+o)))})}}function O(o){return()=>Ae(`./pages/${o}.vue`)}const Te=[{path:"/",name:"Home",component:O("HomePage")},{path:"/about",name:"About",component:O("AboutPage")},{path:"/account",name:"Account",component:O("AccountPage"),beforeEnter:Q}],V=Y({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:J(),routes:Te});function k(o,e){if(L)console[o](`[${o}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(o){case"log":case"assert":return}console[o](`[${o}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const m={log(){k("log",arguments)},error(){k("error",arguments)},warn(){k("warn",arguments)},assert(){k("assert",arguments)},trace(){k("trace",arguments)}},p=X.create({baseURL:M,timeout:8e3});class Ie{async getAccount(){try{const e=await p.get("/account");_.account=e.data}catch(e){m.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const Oe=new Ie;class g{static async confirm(e="Are you sure?",t="You won't be able to revert this!",s="warning",a="Yes, delete it!"){try{return!!(await B.fire({title:e,text:t,icon:s,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:a})).isConfirmed}catch{return!1}}static toast(e="Warning!",t="warning",s="top-end",a=3e3,i=!0){B.fire({title:e,icon:t,position:s,timer:a,timerProgressBar:i,toast:!0,showConfirmButton:!1})}}const Ne={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class Ue{constructor(e=!1,t=M){}on(e,t){var s;return(s=this.socket)==null||s.on(e,t.bind(this)),this}onConnected(e){m.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){m.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var t;(t=this.socket)==null||t.emit(Ne.authenticate,e)}onError(e){m.error("[SOCKET_ERROR]",e)}enqueue(e,t){m.log("[ENQUEING_ACTION]",{action:e,payload:t}),this.queue.push({action:e,payload:t})}playback(){m.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(t=>{this.emit(t.action,t.payload)})}emit(e,t=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,t);if(!this.connected)return this.enqueue(e,t);this.socket.emit(e,t)}}class Be extends Ue{constructor(){super();this.on("error",this.onError)}onError(e){g.toast(e.message,"error")}}const H=new Be,d=Z({domain:ke,clientId:xe,audience:Ee,useRefreshTokens:!0,onRedirectCallback:o=>{V.push(o&&o.targetUrl?o.targetUrl:window.location.pathname)}});d.on(d.AUTH_EVENTS.AUTHENTICATED,async function(){p.defaults.headers.authorization=d.bearer,p.interceptors.request.use(De),_.user=d.user,await Oe.getAccount(),H.authenticate(d.bearer)});async function De(o){if(!d.isAuthenticated)return o;const e=d.identity.exp*1e3,t=e<Date.now(),s=e<Date.now()+1e3*60*60*12;return t?await d.loginWithPopup():s&&(await d.getTokenSilently(),p.defaults.headers.authorization=d.bearer,H.authenticate(d.bearer)),o}const Re={setup(){return{user:A(()=>_.user),async login(){d.loginWithPopup()},async logout(){d.logout({returnTo:window.location.origin})}}}},b=o=>(x("data-v-429e9275"),o=o(),E(),o),je={class:"navbar navbar-expand-lg navbar-dark bg-dark px-3"},Le=b(()=>n("i",{class:"mdi mdi-gamepad fw-bold fst-italic me-2"},null,-1)),Me=b(()=>n("div",{class:"d-flex flex-column align-items-center"},"GameSpace",-1)),qe=b(()=>n("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[n("span",{class:"navbar-toggler-icon"})],-1)),Ve={class:"collapse navbar-collapse",id:"navbarText"},He=b(()=>n("ul",{class:"navbar-nav me-auto"},[n("li")],-1)),Fe={class:"navbar-text"},ze={key:1,class:"dropdown my-2 my-lg-0"},Ke={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},Ge={class:"text-success lighten-30"},We=["src"],Ye={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},Je=b(()=>n("div",{class:"list-group-item list-group-item-action hoverable","data-bs-toggle":"modal","data-bs-target":"#newPost"}," Create Post ",-1)),Qe=T(" Logout "),Xe=b(()=>n("i",{class:"mdi mdi-logout"},null,-1)),Ze=[Qe,Xe];function et(o,e,t,s,a,i){const r=v("router-link");return c(),l("nav",je,[f(r,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:y(()=>[Le,Me]),_:1}),qe,n("div",Ve,[He,n("span",Fe,[s.user.isAuthenticated?(c(),l("div",ze,[n("div",Ke,[n("span",Ge,w(s.user.name),1),n("img",{src:s.user.picture,alt:"user photo",height:"40",class:"rounded mx-3"},null,8,We)]),n("div",Ye,[Je,n("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...u)=>s.logout&&s.logout(...u))},Ze)])])):(c(),l("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...u)=>s.login&&s.login(...u))}," Login "))])])])}var tt=P(Re,[["render",et],["__scopeId","data-v-429e9275"]]),ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tt});class st{async getPosts(e=""){const t=await p.get("api/posts"+e);_.posts=t.data}async createPost(e){const t=await p.post("api/posts",e);_.posts.unshift(t.data),g.toast("Post was successfully created!","success")}async editPost(e){const t=await p.put("api/posts/"+e.id,e);m.log(t.data)}async deletePost(e){await p.delete("api/posts/"+e),_.posts=_.posts.filter(t=>t.id!==e),g.toast("Post successfully removed!","success")}}const F=new st,nt=ee($e),at=te(nt);class rt{async uploadFile(e){try{const t=_.account.id,s=oe(at,`${t}/${e.name}`),a=await se(s,e);return"https://firebasestorage.googleapis.com/v0/b/gamespace-5e220.appspot.com/o/"+s.fullPath.replace(/\//ig,"%2F")+"?alt=media"}catch(t){g.toast(t.message,"error")}}}const it=new rt;const ct={setup(){const o=$({}),e=$("image"),t=$(""),s=$(!1);return{editable:o,filetype:e,loading:s,previewUrl:t,async createPost(){try{s.value=!0;const r=event.target.mediaInput.files[0];if(!r)return;const u=await it.uploadFile(r,o.value);o.value.contentUrl=u,await F.createPost(o.value),D.getOrCreateInstance(document.getElementById("newPost")).hide(),o.value={},o.value.contentUrl="",s.value=!1}catch(a){g.toast(a.message,"error"),m.log(a)}},async handleFileChange(){try{const a=event.target.files[0];if(!a)return;o.value.filetype=a.type.includes("image")?"image":"video",t.value=URL.createObjectURL(a)}catch(a){g.toast(a.message,"error"),m.log(a)}}}}},h=o=>(x("data-v-434eab50"),o=o(),E(),o),lt={class:"form-group mb-2"},dt=h(()=>n("label",{for:"postTitle"},"Post Title:",-1)),ut={class:"form-group mb-2"},_t=h(()=>n("label",{for:"postDescription"},"Post Description:",-1)),mt={class:"form-group mb-2"},pt=h(()=>n("label",{for:"contentUrl"},"Upload Content:",-1)),gt={key:0,class:"preview d-flex justify-content-center my-2"},ht=["src"],vt=["src"],ft=h(()=>n("hr",null,null,-1)),bt={class:"d-flex justify-content-between mb-2"},yt=h(()=>n("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal"}," Cancel ",-1)),wt={key:0,class:"btn btn-warning",type:"button",disabled:""},Pt=h(()=>n("span",null,"Posting...",-1)),kt=h(()=>n("span",{class:"spinner-border spinner-border-sm ms-2",role:"status","aria-hidden":"true"},null,-1)),xt=[Pt,kt],Et={key:1,type:"submit",class:"btn btn-success"};function $t(o,e,t,s,a,i){return c(),l("form",{onSubmit:e[3]||(e[3]=ne(r=>s.createPost(),["prevent"]))},[n("div",lt,[dt,R(n("input",{class:"form-control",placeholder:"Please enter a title...",type:"text","onUpdate:modelValue":e[0]||(e[0]=r=>s.editable.title=r),required:""},null,512),[[j,s.editable.title]])]),n("div",ut,[_t,R(n("input",{class:"form-control",placeholder:"Please enter a description...",type:"text","onUpdate:modelValue":e[1]||(e[1]=r=>s.editable.description=r)},null,512),[[j,s.editable.description]])]),n("div",mt,[pt,n("input",{class:"form-control",placeholder:"Please select your content to upload.",type:"file",id:"mediaInput",onChange:e[2]||(e[2]=r=>s.handleFileChange()),accept:"image/*, video/*"},null,32)]),s.previewUrl?(c(),l("div",gt,[s.editable.filetype=="image"?(c(),l("img",{key:0,src:s.previewUrl,alt:""},null,8,ht)):S("",!0),s.editable.filetype=="video"?(c(),l("video",{key:1,src:s.previewUrl,controls:""},null,8,vt)):S("",!0)])):S("",!0),ft,n("div",bt,[yt,s.loading==!0?(c(),l("button",wt,xt)):(c(),l("button",Et,"Submit"))])],32)}var St=P(ct,[["render",$t],["__scopeId","data-v-434eab50"]]),Ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:St});const At={props:{post:{type:Object,required:!0}},setup(o){return ae(()=>{var e=document.getElementById("viewPost-"+o.post.id);e.addEventListener("hide.bs.modal",function(){document.getElementById("video-"+o.post.id).pause()})}),{account:A(()=>_.account),async deletePost(){try{await g.confirm()&&(D.getOrCreateInstance(document.getElementById("viewPost-"+o.post.id)).hide(),await F.deletePost(o.post.id))}catch(e){g.toast(e.message,"error"),m.log(e)}}}}},Tt=o=>(x("data-v-6dd7aee2"),o=o(),E(),o),It={class:"col-md-3 d-flex justify-content-center"},Ot=["data-bs-target"],Nt=["src"],Ut=["src"],Bt={class:"card-img-overlay on-hover"},Dt={class:"d-flex justify-content-between"},Rt={class:"card-title"},jt={key:0,class:"mdi mdi-camera text-secondary"},Lt={key:1,class:"mdi mdi-video-vintage text-secondary"},Mt=Tt(()=>n("div",{class:"d-flex align-items-baseline"},null,-1)),qt={key:0},Vt=["src"],Ht={key:1,class:"ratio ratio-16x9 videoElem"},Ft=["id","src"],zt={class:"mt-3 d-flex justify-content-between"},Kt=["src"];function Gt(o,e,t,s,a,i){const r=v("Modal");return c(),l(N,null,[n("div",It,[n("div",{class:"card content shadow bg-dark text-white selectable my-2","data-bs-toggle":"modal","data-bs-target":"#viewPost-"+t.post.id},[t.post.filetype=="image"?(c(),l("img",{key:0,src:t.post.contentUrl,class:"card-img",alt:"..."},null,8,Nt)):(c(),l("video",{key:1,src:t.post.contentUrl,preload:"metadata"},null,8,Ut)),n("div",Bt,[n("div",Dt,[n("h5",Rt,w(t.post.title),1),t.post.filetype=="image"?(c(),l("i",jt)):(c(),l("i",Lt))]),Mt])],8,Ot)]),f(r,{id:"viewPost-"+t.post.id,dark:""},{"modal-title":y(()=>[t.post.creatorId==s.account.id?(c(),l("div",qt,[n("button",{class:"btn btn-danger mdi mdi-delete",onClick:e[0]||(e[0]=u=>s.deletePost())})])):S("",!0)]),"modal-body":y(()=>[t.post.filetype=="image"?(c(),l("img",{key:0,src:t.post.contentUrl,class:"card-img",alt:"..."},null,8,Vt)):(c(),l("div",Ht,[n("video",{id:"video-"+t.post.id,src:t.post.contentUrl,controls:"",preload:"metadata"},null,8,Ft)])),n("div",zt,[n("div",null,[n("h4",null,w(t.post.title),1),n("p",null,w(t.post.description),1)]),n("div",null,[n("p",null,[T(w(t.post.creator.name)+" ",1),n("img",{src:t.post.creator.picture,class:"profilePic ms-3 rounded-circle",alt:"profile picture"},null,8,Kt)])])])]),_:1},8,["id"])],64)}var Wt=P(At,[["render",Gt],["__scopeId","data-v-6dd7aee2"]]),Yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wt});function Jt(o){Object.entries({"./components/Modal.vue":Pe,"./components/Navbar.vue":ot,"./components/NewPost.vue":Ct,"./components/Post.vue":Yt}).forEach(([t,s])=>{const a=s.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");o.component(a,s.default)})}const z=re(ue);Jt(z);z.use(V).mount("#app");export{_ as A,g as P,P as _,m as l,F as p};
