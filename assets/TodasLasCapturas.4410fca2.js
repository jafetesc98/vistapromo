import{_ as g}from"./loading.16b03cf4.js";import{d as v,b as s,v as C,e as b,f as l,w as a,N as k,t as h,o as m,g as o,h as y,m as c,i,O as $,a as w,P as x}from"./index.d4fa4833.js";import{_ as B}from"./TablePrmCap.973d097c.js";import{_ as T}from"./SectionTitleLine.8ce3544d.js";import{C as V}from"./CardBoxComponentEmpty.68fcfdaf.js";import{g as O}from"./getData.5726d001.js";const P=w("img",{src:g,alt:"",class:"block mx-auto"},null,-1),F={__name:"TodasLasCapturas",setup(N){const p=v(),t=s(!0),u=s(!1),_=C(()=>n.value),n=s([]);s("/vistapromo/capturar");const f=async function(){let r=await O(h+"prom?compr="+p.nomCto);if(r.ok)await r.json().then(e=>{n.value=e});else return console.log("Respuesta de red OK pero respuesta HTTP no OK"),{}};return b(async function(){await f(),u.value=Object.keys(n).length>0,t.value=!1}),(r,e)=>(m(),l(k,null,{default:a(()=>[o(y,{hasFooter:!1,modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=d=>t.value=d),blocked:!0,title:"Cargando la informaci\xF3n"},{default:a(()=>[P]),_:1},8,["modelValue"]),o($,null,{default:a(()=>[o(T,{icon:c(x),title:"Todas las Promociones Capturadas",main:""},null,8,["icon"]),u.value?(m(),l(i,{key:0,class:"mb-6","has-table":""},{default:a(()=>[o(B,{promos:c(_)},null,8,["promos"])]),_:1})):(m(),l(i,{key:1},{default:a(()=>[o(V)]),_:1}))]),_:1})]),_:1}))}};export{F as default};
