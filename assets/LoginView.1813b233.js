import{_ as U,o as w,c as B,F as j,a as t,u as A,r as D,b as f,d as E,e as K,f as N,w as a,g as s,h as F,i as I,n as P,j as p,k as q,l as L,m as g,p as H,q as O,s as R,t as T}from"./index.e2c126b3.js";import{_ as z}from"./loading.16b03cf4.js";import{_ as J,a as G}from"./LayoutGuest.df6e3963.js";import{_ as v}from"./FormField.10f216d3.js";import{_ as h}from"./FormControl.0c7a600d.js";const Q=async function(i="",u={}){return await fetch(i,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(u)}).catch(function(l){return console.log("Hubo un problema con la petici\xF3n Fetch:"+l.message),null})},W=""+new URL("../img/logo3.png",import.meta.url).href,X={},Y=t("div",{class:"relative w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 px-6"},[t("div",null,[t("img",{src:W,class:"h-full w-full object-cover object-center px-6 block"})])],-1),Z=t("div",null,[t("h1",{class:"w-full text-center text-3xl font-medium"},"MAB Promociones")],-1);function ee(i,u){return w(),B(j,null,[Y,Z],64)}const oe=U(X,[["render",ee]]),se=t("img",{src:z,alt:"",class:"block mx-auto"},null,-1),ae={class:"mtneg"},ie={__name:"LoginView",setup(i){const u=A(),r=D({usuario:"",clave:"",remember:!0}),l=f(!1),y=H(),b=E(),k=function(o,e,d,n,M,S){o=o.split(" "),b.setUser({name:o[0],email:e,nomCto:d,rol:n,numComprador:M,avatar:(S==1,"img/usuario.png")}),y.push({path:"/capturar"})},C=async function(){l.value=!0;const o=await Q(T+"login",r);let e=await o.json();if(o.ok){k(e.nombre_lar,e.token,e.nomCto,e.rol,e.numcomp,e.sexo);return}switch(l.value=!1,o.status){case 420:m.value=e.message;return;case 421:case 422:c.value=e.message;return}},x=function(o){(o.key=="Enter"||o.key=="ArrowDown")&&(o.preventDefault(),document.getElementById("password").focus())},V=function(o){if(o.key=="ArrowUp"){document.getElementById("login").focus();return}};function $(o){if(o.key=="Enter"){o.preventDefault();return}}function _(o){c.value="",m.value=""}const c=f(""),m=f("");return K(async function(){u.setDarkMode(!0)}),(o,e)=>(w(),N(J,null,{default:a(()=>[s(G,{bg:"purplePink"},{default:a(({cardClass:d})=>[s(F,{hasFooter:!1,modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value=n),blocked:!0,title:"Cargando informaci\xF3n"},{default:a(()=>[se]),_:1},8,["modelValue"]),t("div",ae,[s(oe)]),s(I,{class:P(d),"is-form":"","has-header":"",onSubmit:p(C,["prevent"])},{footer:a(()=>[s(q,null,{default:a(()=>[s(L,{type:"submit",color:"info",label:"Iniciar Sesi\xF3n",otherClasses:"w-full"})]),_:1})]),default:a(()=>[s(v,{label:"Usuario",class:"mb-5"},{default:a(()=>[s(h,{modelValue:r.usuario,"onUpdate:modelValue":e[1]||(e[1]=n=>r.usuario=n),icon:g(O),id:"login",name:"login",otherClasses:"uppercase",required:"",refs:"input-focus",onKeydown:x,onKeyup:p($,["prevent"]),onChange:_,errorMsg:c.value},null,8,["modelValue","icon","onKeyup","errorMsg"])]),_:1}),s(v,{label:"Clave"},{default:a(()=>[s(h,{modelValue:r.clave,"onUpdate:modelValue":e[2]||(e[2]=n=>r.clave=n),id:"password",icon:g(R),required:"",type:"password",name:"password",onKeydown:V,onKeyup:e[3]||(e[3]=p(()=>{},["prevent"])),onChange:_,errorMsg:m.value},null,8,["modelValue","icon","errorMsg"])]),_:1})]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{ie as default};
