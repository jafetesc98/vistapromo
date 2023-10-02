import{_ as ue,ai as ye,b as y,aj as re,o as b,c as E,g as i,K as Y,a as e,C,F as D,l as K,ak as he,e as me,d as ce,v as N,w as B,h as U,D as z,f as H,al as ne,am as ve,j as M,m as h,an as oe,ao as le,ap as Z,k as O,t as ie,T as pe,B as Ce,A as xe,n as Ee}from"./index.eda8bd0e.js";import{_ as de}from"./loading.16b03cf4.js";import{_ as Be}from"./checked.4cad9791.js";import{_ as ae}from"./FormField.6ef238ad.js";import{_ as j}from"./FormControl.b21d10e7.js";const Ie=""+new URL("../img/cancelar.png",import.meta.url).href,ke={components:{LitepieDatepicker:ye},props:["idDate"],setup(){const p=y([]),r=y({date:"DD MMM YYYY",month:"MMM"});return{dateValue:p,formatter:r,customShortcuts:()=>[{label:"Este mes",atClick:()=>{const d=new Date;return[new Date(d.getFullYear(),d.getMonth(),1),new Date(d.getFullYear(),d.getMonth()+1,0)]}},{label:"Los siguientes 15 d\xEDas",atClick:()=>{const d=new Date;return[d,new Date(d.getFullYear(),d.getMonth(),d.getDate()+15)]}}]}}},we={class:"flex"};function $e(p,r,g,d,I,m){const P=re("litepie-datepicker");return b(),E("div",we,[i(P,{i18n:"es",modelValue:d.dateValue,"onUpdate:modelValue":r[0]||(r[0]=V=>d.dateValue=V),id:g.idDate,formatter:d.formatter,shortcuts:d.customShortcuts,placeholder:"Vigencia de la promoci\xF3n"},null,8,["modelValue","id","formatter","shortcuts"])])}const Vn=ue(ke,[["render",$e]]),Se=["id","aria-describedby","value","zona"],Ae=["for"],Pe={__name:"SucursalCheckBox",setup(p){y("Parent");const r=y(["001","002","003","004","005","006","007","008","009","011","012","013","014","015","016","017","018","020","021","022","023","024","031","032","033","035","036","037","038","039","040","041","042","043","044","045","046","047","048","049","050","051","052","053","055","056","057","058","059","060","061","063","065","066","067","068","070","071","072","075","077","080"]);function g(d){switch(d){case"001":case"002":case"003":case"004":case"005":case"006":case"007":case"008":case"009":case"011":case"014":case"017":case"018":case"020":case"021":case"022":case"031":case"032":case"037":case"040":case"041":case"043":case"045":case"047":case"048":case"050":case"051":case"052":case"055":case"056":case"057":case"058":case"059":case"060":case"063":case"065":case"066":case"067":case"070":case"071":case"072":case"075":case"077":case"080":return 1;case"012":case"013":case"035":case"042":case"044":case"049":case"053":case"061":return 2;case"015":case"016":case"023":case"024":case"033":case"036":case"038":case"039":case"046":case"068":return 3;default:return 1}}return(d,I)=>(b(!0),E(D,null,Y(r.value,m=>(b(),E("div",{key:m,class:"flex items-start items-center inline-flex mr-3 w-16"},[e("input",{id:"suc_"+m,"aria-describedby":"suc_"+m,type:"checkbox",value:m,class:"bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h1 my-1 w-4 rounded cursor-pointer py-2 disabled:opacity-50 disabled:cursor-not-allowed sucursal",zona:g(m)},null,8,Se),e("label",{for:"suc_"+m,class:"text-sm py-2 pl-3 font-medium cursor-pointer"},C(m),9,Ae)]))),128))}},Fe={props:{sucBase:{type:String,default:"1"}},components:{Sucursales:Pe,BaseButton:K},name:"Regiones",setup(p){return{dateValue:y([])}},methods:{seleccionarSucursales(p){switch(p.target.value){case"VALLES":this.marcarZona(1);break;case"COSTA":this.marcarZona(2);break;case"ISTMO":this.marcarZona(3);break;case"TODAS":this.marcarZona(4);break;default:this.desactivarSucursales(!0);break}},desmarcarSucursales(p){document.querySelectorAll("[zona]").forEach(g=>{g.checked=p})},desactivarSucursales(p){let r=document.querySelectorAll("[zona]");p?r.forEach(g=>{g.removeAttribute("disabled"),g.nextElementSibling.classList.remove("opacity-50","cursor-not-allowed"),g.nextElementSibling.classList.add("cursor-pointer")}):r.forEach(g=>{g.setAttribute("disabled",!0),g.nextElementSibling.classList.remove("cursor-pointer"),g.nextElementSibling.classList.add("opacity-50","cursor-not-allowed")})},marcarZona(p=1){if(this.desmarcarSucursales(!1),this.desactivarSucursales(!1),p==4){document.querySelectorAll("[zona]").forEach(d=>{d.removeAttribute("disabled"),d.nextElementSibling.classList.remove("opacity-50","cursor-not-allowed"),d.nextElementSibling.classList.add("cursor-pointer"),d.checked=!0});return}document.querySelectorAll('[zona="'+p+'"]').forEach(g=>{g.removeAttribute("disabled"),g.nextElementSibling.classList.remove("opacity-50","cursor-not-allowed"),g.nextElementSibling.classList.add("cursor-pointer"),g.checked=!0})},personalizado(){this.desactivarSucursales(!1)},limpiar(){this.desmarcarSucursales(!1),this.desactivarSucursales(!0),document.getElementById("zona-custom").checked=!0}}},Le={class:"grid grid-flow-col grid-rows-1"},Ke={class:"mx-5"},Ve={class:"max-w-lg mx-auto"},Me={class:"mb-1"},ze=e("legend",{class:"sr-only"}," Regiones ",-1),De=e("div",{class:"mb-3"},[e("h3",null,[e("b",null,"Regiones:")])],-1),Ne={class:"flex items-center mb-3 pl-2"},je=e("label",{for:"zona-valles",class:"text-sm font-medium pl-2 block"}," Valles ",-1),Te={class:"flex items-center mb-3 pl-2"},Oe=e("label",{for:"zona-costa",class:"text-sm font-medium pl-2 block"}," Costa ",-1),Re={class:"flex items-center mb-3 pl-2"},Ue=e("label",{for:"zona-istmo",class:"text-sm font-medium pl-2 block"}," Istmo ",-1),He={class:"flex items-center mb-3 pl-2"},Ze=e("label",{for:"zona-todas",class:"text-sm font-medium pl-2 block"}," Todas ",-1),Ye={class:"flex items-center mb-1 pl-2"},Xe=e("label",{for:"zona-custom",class:"text-sm font-medium pl-2 block"}," Personalizado ",-1),qe=he('<div class="max-w-lg mx-auto"><fieldset class=""><legend class="sr-only">Aplica para:</legend><div class="mt-2 mb-3"><h3><b>Aplica para:</b></h3></div><div class="flex items-start items-center mb-3 pl-2"><input id="mostrador" aria-describedby="checkbox-3" type="checkbox" name="mostrador" value="1" checked class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"><label for="mostrador" class="text-sm pl-3 font-medium"> Mostrador </label></div><div class="flex items-start items-center mb-3 pl-2"><input id="retail" aria-describedby="checkbox-2" type="checkbox" name="retail" value="1" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"><label for="retail" class="text-sm pl-3 font-medium"> Retail </label></div></fieldset></div>',1),Ge={class:"flex justify-center"},Je={class:"px-5 mx-5 flex flex-wrap py-12",style:{height:"fit-content",margin:"auto"}};function Qe(p,r,g,d,I,m){const P=re("BaseButton"),V=re("Sucursales");return b(),E("div",Le,[e("div",Ke,[e("div",Ve,[e("fieldset",Me,[ze,De,e("div",Ne,[e("input",{id:"zona-valles",type:"radio",name:"zona",value:"VALLES",class:"h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300","aria-labelledby":"zona-valles","aria-describedby":"zona-valles",onChange:r[0]||(r[0]=(...$)=>m.seleccionarSucursales&&m.seleccionarSucursales(...$))},null,32),je]),e("div",Te,[e("input",{id:"zona-costa",type:"radio",name:"zona",value:"COSTA",class:"h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300","aria-labelledby":"zona-costa","aria-describedby":"zona-costa",onChange:r[1]||(r[1]=(...$)=>m.seleccionarSucursales&&m.seleccionarSucursales(...$))},null,32),Oe]),e("div",Re,[e("input",{id:"zona-istmo",type:"radio",name:"zona",value:"ISTMO",class:"h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300","aria-labelledby":"zona-istmo","aria-describedby":"zona-istmo",onChange:r[2]||(r[2]=(...$)=>m.seleccionarSucursales&&m.seleccionarSucursales(...$))},null,32),Ue]),e("div",He,[e("input",{id:"zona-todas",type:"radio",name:"zona",value:"TODAS",class:"h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300","aria-labelledby":"zona-todas","aria-describedby":"zona-todas",onChange:r[3]||(r[3]=(...$)=>m.seleccionarSucursales&&m.seleccionarSucursales(...$))},null,32),Ze]),e("div",Ye,[e("input",{id:"zona-custom",type:"radio",name:"zona",value:"CUSTOM",class:"h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300","aria-labelledby":"zona-custom","aria-describedby":"zona-custom",onChange:r[4]||(r[4]=(...$)=>m.seleccionarSucursales&&m.seleccionarSucursales(...$)),checked:""},null,32),Xe]),i(P,{label:"Limpiar",id:"btn_clean_suc",otherClasses:"w-full mt-3",type:"button",small:!0,color:"info",onClick:m.limpiar},null,8,["onClick"])])]),qe]),e("div",Ge,[e("div",Je,[i(V)])])])}const Mn=ue(Fe,[["render",Qe]]),We=e("img",{src:de,alt:"",class:"block mx-auto"},null,-1),et=e("p",null,"Favor de capturar un precio diferente a los actuales",-1),tt=e("img",{src:Ie,alt:"",class:"block mx-auto"},null,-1),nt=e("p",null,"Favor de capturar uno diferente o eliminar el existente",-1),ot=e("img",{src:Be,alt:"",class:"block mx-auto"},null,-1),lt={key:0},at=e("th",null,"C\xF3digo",-1),st=e("th",null,"Emp",-1),rt=e("th",null,"Precio Actual",-1),ct=e("th",null,"Precio Oferta",-1),it=e("th",null,"Diferencia",-1),dt=e("th",null,null,-1),ut={class:"rounded"},mt={class:"w-48 align-top",rowspan:"5"},pt=["onKeyup"],gt=e("p",{class:"mt-3",id:"desc_art"},null,-1),_t=e("td",{class:"w-8 text-center",id:"emp1"}," 1 ",-1),bt=e("td",{class:"text-right px-5",id:"precio1"},null,-1),ft={class:"w-1/3"},yt=e("td",{class:"text-right px-5",id:"dif1"},null,-1),ht={class:"before:hidden lg:w-1 whitespace-nowrap"},vt=e("td",{class:"w-8 text-center",id:"emp2"}," 1 ",-1),Ct=e("td",{id:"precio2",class:"text-right px-5"},null,-1),xt={"data-label":"pre_prm2"},Et=e("td",{class:"text-right px-5",id:"dif2"},null,-1),Bt={class:"before:hidden lg:w-1 whitespace-nowrap"},It=e("td",{class:"w-8 text-center",id:"emp3"}," 1 ",-1),kt=e("td",{id:"precio3",class:"text-right px-5"},null,-1),wt=e("td",{class:"text-right px-5",id:"dif3"},null,-1),$t={class:"before:hidden lg:w-1 whitespace-nowrap"},St=e("td",{class:"w-8 text-center",id:"emp4"}," 1 ",-1),At=e("td",{id:"precio4",class:"text-right px-5"},null,-1),Pt={"data-label":"pre_prm2"},Ft=e("td",{class:"text-right px-5",id:"dif4"},null,-1),Lt={class:"before:hidden lg:w-1 whitespace-nowrap"},Kt=e("td",{class:"w-8 text-center",id:"emp5"}," 1 ",-1),Vt=e("td",{id:"precio5",class:"text-right px-5"},null,-1),Mt=e("td",{class:"text-right px-5",id:"dif5"},null,-1),zt={class:"before:hidden lg:w-1 whitespace-nowrap"},zn={__name:"PreciosArticulosTable",props:{checkable:Boolean,arts:Array},setup(p){const r=p;me(()=>{document.getElementsByClassName("pre"),document.getElementsByClassName("per")});const g=ce();N(()=>g.clients),y(!1);const d=y(!1),I=y(!1),m=y(!1),P=y(!1),V=y(!0),$=y(!1),X=y("");async function ee(t){let l=document.getElementById("sucbase").value,s=document.querySelectorAll(".sucursal");for(let _=0;_<s.length;_++)if(s[_].checked){l=s[_].value;break}let u=document.getElementById("prov").value.slice(0,9);await w(t.target.value,l,u)}var k={};async function w(t,l,s){$.value=!0,fetch(ie+"art?art="+t+"&suc="+l+"&prov="+s).then(function(u){$.value=!1,u.ok?(R(),u.json().then(_=>{k=_;let L=te(k);L&&(document.getElementById("pre_prom1").focus(),document.getElementsByName("tipo")[0].value!="6"?V.value=!1:T()),q(L)})):(u.json().then(async _=>{console.log(_),document.getElementById("desc_art").textContent=_.message,X.value=_.message,P.value=!0,await G(1500),P.value=!1,document.getElementsByName("tipo")[0].value=="6"&&T(-1)}),console.log("Respuesta de red OK pero respuesta HTTP no OK"))}).catch(function(u){console.log("Hubo un problema con la petici\xF3n Fetch:"+u.message)})}function T(t=0){if(t==-1){document.getElementById("cod_cob").value=null,document.getElementById("desc_art_cob").value=null;return}document.getElementById("cod_cob").value=k.art,document.getElementById("desc_art_cob").value=k.des1}function q(t){let l=document.getElementsByClassName("per"),s=document.getElementsByClassName("pre");[].forEach.call(l,u=>{t?u.removeAttribute("disabled"):u.setAttribute("disabled",!0),u.value=""}),[].forEach.call(s,u=>{t?u.removeAttribute("disabled"):u.setAttribute("disabled",!0),u.value=""})}function R(){for(let t=1;t<6;t++){let l=document.getElementById("precio"+t);l.textContent="";let s=document.getElementById("pre_prom"+t);s.classList.remove("ring","ring-red-500"),s.value="";let u=document.getElementById("emp"+t);u.textContent="";let _=document.getElementById("porcen_prom"+t);_.classList.remove("ring","ring-red-500"),_.value="",document.getElementById("dif"+t).textContent=""}}function te(t){return t.des1?(document.getElementById("desc_art").textContent=t.des1,document.getElementById("emp1").textContent=t.cant_pre0,document.getElementById("emp2").textContent=t.cant_pre1,document.getElementById("emp3").textContent=t.cant_pre2,document.getElementById("emp4").textContent=t.cant_pre3,document.getElementById("emp5").textContent=t.cant_pre4,document.getElementById("precio1").textContent=F(t.precio_vta0),document.getElementById("precio2").textContent=F(t.precio_vta1),document.getElementById("precio3").textContent=F(t.precio_vta2),document.getElementById("precio4").textContent=F(t.precio_vta3),document.getElementById("precio5").textContent=F(t.precio_vta4),!0):(document.getElementById("desc_art").textContent="C\xF3digo no encontrado",!1)}function F(t){return new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",minimumFractionDigits:2}).format(t)}const x=function(t){var l=["-","+","e","ArrowDown","ArrowUp"];l.includes(t.key)&&t.preventDefault()},A=function(t){if(t.key=="Enter"||t.key=="ArrowDown"){let l=t.target.id,s=parseInt(l.slice(-1));if(s<5){s++;let u=l.slice(0,-1)+s;document.getElementById(u).focus();return}s==5&&document.getElementById("btn_add").focus()}if(t.key=="ArrowUp"){let l=t.target.id,s=parseInt(l.slice(-1));if(s>1){s--;let u=l.slice(0,-1)+s;document.getElementById(u).focus()}else s==1&&document.getElementById("inputConsultar").focus()}},c=function(t){let l=t.target.id.slice(-1),s=document.getElementById("pre_prom"+l),u=document.getElementById("porcen_prom"+l),_=document.getElementById("precio"+l).textContent.slice(1);_=_.replace(",",""),_=parseFloat(_);let L={};t.target==s?(L=n(_,s.value,""),u.value=L.porcentaje):(L=n(_,"",u.value),s.value=L.precio),document.getElementById("dif"+l).textContent=F(L.neta)};function n(t,l,s){let u={};if(l!="")u.precio=l,u.neta=Number((t-l).toFixed(2)).toFixed(2),u.porcentaje=Number((100-l*100/t).toFixed(4)).toFixed(4);else{let _=Number(t.toFixed(2)-(t*s/100).toFixed(2)).toFixed(2);u.precio=_,u.neta=Number(t-u.precio),u.porcentaje=s}return u}function o(t){let l=t.target.id.slice(-1),s=document.getElementById("pre_prom"+l),u=document.getElementById("porcen_prom"+l),_=document.getElementById("precio"+l).textContent.slice(1);_=_.replace(",",""),_=parseFloat(_),_<s.value?(s.classList.add("ring","ring-red-500"),u.classList.add("ring","ring-red-500"),s.title="El precio de promoci\xF3n debe ser menor o igual al precio actual",u.title="El precio de promoci\xF3n debe ser menor o igual al precio actual"):(s.classList.remove("ring","ring-red-500"),u.classList.remove("ring","ring-red-500"),s.title="",u.title="")}function a(t){let s=t.target.closest("button").id.slice(-1),u=document.getElementById("pre_prom"+s),_=document.getElementById("porcen_prom"+s);_.value=0;let L=new InputEvent("input");_.dispatchEvent(L),c(L),u.focus()}const f=async function(){let t=S();if(v(t.cve)){m.value=!0,V.value=!0;return}if(t.cve==""&&t.precio1==""&&t.precio2==""&&t.precio3==""&&t.precio4==""&&t.precio5==""&&(I.value=!0),Object.keys(t).length!==0){r.arts.push(t),d.value=!0,R(),await G(500),d.value=!1;let l=document.getElementById("inputConsultar");l.value="",document.getElementById("desc_art").textContent="",l.focus()}else I.value=!0};function S(){let t={},l=[k.precio_vta0,k.precio_vta1,k.precio_vta2,k.precio_vta3,k.precio_vta4],s=document.getElementsByClassName("pre"),u=!1;for(let W=0;W<s.length;W++)if((s[W].value!=""||s[W].value>0)&&parseFloat(l[W])!=parseFloat(s[W].value)){u=!0;break}if(!u)return{};let _=k.art.trim(),L=document.getElementById("pre_prom1").value,ge=document.getElementById("pre_prom2").value,_e=document.getElementById("pre_prom3").value,be=document.getElementById("pre_prom4").value,fe=document.getElementById("pre_prom5").value;return t.cve=_,t.precio1=L,t.precio2=ge,t.precio3=_e,t.precio4=be,t.precio5=fe,t.des1=document.getElementById("desc_art").textContent,t}function v(t){for(let l=0;l<r.arts.length;l++)if(r.arts[l].cve==t)return!0;return!1}function G(t){return new Promise(l=>setTimeout(l,t))}function J(){let t=document.getElementById("inputConsultar").getAttribute("cve"),l=se(t);console.log(r.arts[l]),r.arts[l].precio1=document.getElementById("pre_prom1").value,r.arts[l].precio2=document.getElementById("pre_prom2").value,r.arts[l].precio3=document.getElementById("pre_prom3").value,r.arts[l].precio4=document.getElementById("pre_prom4").value,r.arts[l].precio5=document.getElementById("pre_prom5").value,Q()}function se(t){for(let l=0;l<r.arts.length;l++)if(r.arts[l].cve==t)return l;return-1}function Q(){R(),document.getElementById("desc_art").textContent="",document.getElementById("inputConsultar").value="",document.getElementById("btn_edit").classList.add("hidden"),document.getElementById("btn_cancel").classList.add("hidden"),document.getElementsByName("tipo")[0].value!="6"&&document.getElementById("btn_add").classList.remove("hidden")}return(t,l)=>(b(),E(D,null,[i(U,{hasFooter:!1,modelValue:$.value,"onUpdate:modelValue":l[0]||(l[0]=s=>$.value=s),blocked:!0,title:"Cargando la informaci\xF3n"},{default:B(()=>[We]),_:1},8,["modelValue"]),i(U,{modelValue:I.value,"onUpdate:modelValue":l[1]||(l[1]=s=>I.value=s),title:"No hubo cambio de Precio",button:"secondary",hasButton:""},{default:B(()=>[et]),_:1},8,["modelValue"]),i(U,{modelValue:P.value,"onUpdate:modelValue":l[2]||(l[2]=s=>P.value=s),title:"Error al capturar el art\xEDculo",hasFooter:!1,titleClass:"mx-auto mb-3",blocked:!0},{default:B(()=>[tt,e("p",null,C(X.value),1)]),_:1},8,["modelValue"]),i(U,{modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=s=>m.value=s),title:"Art\xEDculo ya capturado",button:"secondary",hasButton:"",blocked:!0},{default:B(()=>[nt]),_:1},8,["modelValue"]),i(U,{hasFooter:!1,modelValue:d.value,"onUpdate:modelValue":l[4]||(l[4]=s=>d.value=s),title:"Art\xEDculo agregado",blocked:!0},{default:B(()=>[ot]),_:1},8,["modelValue"]),e("table",null,[e("thead",null,[e("tr",null,[p.checkable?(b(),E("th",lt)):z("",!0),at,st,rt,ct,it,dt])]),e("tbody",ut,[e("tr",null,[p.checkable?(b(),H(ne,{key:0,onChecked:l[5]||(l[5]=s=>t.checked(s,t.client))})):z("",!0),e("td",mt,[e("input",{type:"number",id:"inputConsultar",class:"px-3 py-2 max-w-full focus:ring focus:outline-none border border-gray-700 rounded w-full dark:placeholder-gray-400 bg-transparent text-right ring",onKeyup:[ve(ee,["enter"]),M(A,["prevent"])],onKeydown:x},null,40,pt),gt]),_t,bt,e("td",ft,[i(ae,{otherClasses:"mb-3",wrapClass:"row"},{default:B(()=>[i(j,{type:"number",icon:h(oe),id:"pre_prom1",onKeyup:M(A,["prevent"]),onKeydown:x,onInput:c,onChange:o,title:"",otherClasses:"text-right pre",parentClasses:"basis-2/3"},null,8,["icon","onKeyup"]),i(j,{type:"number",icon:h(le),onKeydown:x,iconSide:"right",id:"porcen_prom1",onKeyup:M(A,["prevent"]),onInput:c,onChange:o,title:"",otherClasses:"text-right per pl-0",parentClasses:"basis-1/3"},null,8,["icon","onKeyup"])]),_:1})]),yt,e("td",ht,[i(O,{type:"justify-start lg:justify-end","no-wrap":""},{default:B(()=>[i(K,{color:"danger",icon:h(Z),small:"",onClick:a,id:"btn_erase1"},null,8,["icon"])]),_:1})])]),e("tr",null,[p.checkable?(b(),H(ne,{key:0,onChecked:l[6]||(l[6]=s=>t.checked(s,t.client))})):z("",!0),vt,Ct,e("td",xt,[i(ae,{otherClasses:"mb-3",wrapClass:"row"},{default:B(()=>[i(j,{type:"number",icon:h(oe),id:"pre_prom2",onKeyup:M(A,["prevent"]),onKeydown:x,onInput:c,onChange:o,title:"",otherClasses:"text-right pre",parentClasses:"basis-2/3"},null,8,["icon","onKeyup"]),i(j,{type:"number",icon:h(le),iconSide:"right",id:"porcen_prom2",onKeyup:M(A,["prevent"]),onKeydown:x,onInput:c,onChange:o,title:"",otherClasses:"text-right per pl-0",parentClasses:"basis-1/3"},null,8,["icon","onKeyup"])]),_:1})]),Et,e("td",Bt,[i(O,{type:"justify-start lg:justify-end","no-wrap":""},{default:B(()=>[i(K,{color:"danger",icon:h(Z),small:"",onClick:a,id:"btn_erase2"},null,8,["icon"])]),_:1})])]),e("tr",null,[p.checkable?(b(),H(ne,{key:0,onChecked:l[7]||(l[7]=s=>t.checked(s,t.client))})):z("",!0),It,kt,e("td",null,[i(ae,{otherClasses:"mb-3",wrapClass:"row"},{default:B(()=>[i(j,{type:"number",icon:h(oe),id:"pre_prom3",onKeyup:M(A,["prevent"]),onKeydown:x,onInput:c,onChange:o,title:"",otherClasses:"text-right pre",parentClasses:"basis-2/3"},null,8,["icon","onKeyup"]),i(j,{type:"number",icon:h(le),iconSide:"right",id:"porcen_prom3",onKeyup:M(A,["prevent"]),onKeydown:x,onInput:c,onChange:o,title:"",otherClasses:"text-right per pl-0",parentClasses:"basis-1/3"},null,8,["icon","onKeyup"])]),_:1})]),wt,e("td",$t,[i(O,{type:"justify-start lg:justify-end","no-wrap":""},{default:B(()=>[i(K,{color:"danger",icon:h(Z),small:"",onClick:a,id:"btn_erase3"},null,8,["icon"])]),_:1})])]),e("tr",null,[p.checkable?(b(),H(ne,{key:0,onChecked:l[8]||(l[8]=s=>t.checked(s,t.client))})):z("",!0),St,At,e("td",Pt,[i(ae,{otherClasses:"mb-3",wrapClass:"row"},{default:B(()=>[i(j,{type:"number",icon:h(oe),id:"pre_prom4",onKeyup:M(A,["prevent"]),onKeydown:x,onInput:c,onChange:o,title:"",otherClasses:"text-right pre",parentClasses:"basis-2/3"},null,8,["icon","onKeyup"]),i(j,{type:"number",icon:h(le),id:"porcen_prom4",iconSide:"right",onKeyup:M(A,["prevent"]),onKeydown:x,onInput:c,onChange:o,title:"",otherClasses:"text-right per pl-0",parentClasses:"basis-1/3"},null,8,["icon","onKeyup"])]),_:1})]),Ft,e("td",Lt,[i(O,{type:"justify-start lg:justify-end","no-wrap":""},{default:B(()=>[i(K,{color:"danger",icon:h(Z),small:"",onClick:a,id:"btn_erase4"},null,8,["icon"])]),_:1})])]),e("tr",null,[p.checkable?(b(),H(ne,{key:0,onChecked:l[9]||(l[9]=s=>t.checked(s,t.client))})):z("",!0),Kt,Vt,e("td",null,[i(ae,{otherClasses:"mb-3",wrapClass:"row"},{default:B(()=>[i(j,{type:"number",icon:h(oe),id:"pre_prom5",onKeyup:M(A,["prevent"]),onKeydown:x,onInput:c,onChange:o,title:"",otherClasses:"text-right pre",parentClasses:"basis-2/3"},null,8,["icon","onKeyup"]),i(j,{type:"number",icon:h(le),iconSide:"right",id:"porcen_prom5",title:"",onKeyup:M(A,["prevent"]),onKeydown:x,onInput:c,onChange:o,otherClasses:"text-right per pl-0",parentClasses:"basis-1/3"},null,8,["icon","onKeyup"])]),_:1})]),Mt,e("td",zt,[i(O,{type:"justify-start lg:justify-end","no-wrap":""},{default:B(()=>[i(K,{color:"danger",icon:h(Z),small:"",onClick:a,id:"btn_erase5"},null,8,["icon"])]),_:1})])])])]),i(K,{label:"Agregar Art\xEDculo",id:"btn_add",type:"button",disabled:V.value,color:"info",onClick:f},null,8,["disabled"]),i(K,{label:"Actualizar Precios",id:"btn_edit",type:"button",otherClasses:"hidden mr-4",color:"success",onClick:J}),i(K,{label:"Cancelar",id:"btn_cancel",type:"button",otherClasses:"hidden",color:"danger",onClick:Q})],64))}},Dt=e("img",{src:de,alt:"",class:"block mx-auto"},null,-1),Nt={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},jt={key:0},Tt=e("th",{class:"text-center"},"Art",-1),Ot=e("th",null,"Descripcion",-1),Rt=e("th",{class:"text-center"},"Precio1",-1),Ut=e("th",{class:"text-center"},"Precio2",-1),Ht=e("th",{class:"text-center"},"Precio3",-1),Zt=e("th",{class:"text-center"},"Precio4",-1),Yt=e("th",{class:"text-center"},"Precio5",-1),Xt=e("th",null,null,-1),qt=["data-label"],Gt=["data-label"],Jt=["data-label"],Qt=["data-label"],Wt=["data-label"],en=["data-label"],tn=["data-label"],nn={class:"before:hidden lg:w-1 whitespace-nowrap"},on={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Dn={__name:"TableArtCapturados",props:{checkable:Boolean,arts:Array},setup(p){const r=p;ce(),y(!1),y(!1);const g=y(5),d=y(0),I=y([]),m=N(()=>r.arts.slice(g.value*d.value,g.value*(d.value+1))),P=N(()=>Math.ceil(r.arts.length/g.value)),V=N(()=>d.value+1),$=N(()=>{const c=[];for(let n=0;n<P.value;n++)c.push(n);return c});function X(c){let n=ee(c);n<0||r.arts.splice(n,1)}function ee(c){for(let n=0;n<r.arts.length;n++)if(r.arts[n].cve==c)return n;return-1}const k=y(!1);async function w(c){let o=c.target.closest("td").getAttribute("data-label");console.log("A editar",o);let a=document.getElementById("sucbase").value,f=document.getElementById("prov").value.slice(0,9);k.value=!0,document.getElementById("inputConsultar").setAttribute("cve",o),await A(o,a,f)}const T=y({});function q(){for(let c=1;c<6;c++){let n=document.getElementById("precio"+c);n.textContent="";let o=document.getElementById("pre_prom"+c);o.classList.remove("ring","ring-red-500"),o.value="";let a=document.getElementById("emp"+c);a.textContent="";let f=document.getElementById("porcen_prom"+c);f.classList.remove("ring","ring-red-500"),f.value="",document.getElementById("dif"+c).textContent=""}}async function R(){document.getElementById("btn_add").classList.add("hidden"),document.getElementById("btn_edit").classList.remove("hidden"),document.getElementById("btn_cancel").classList.remove("hidden");let c=document.getElementById("inputConsultar"),n=document.getElementById("pre_prom1"),o=document.getElementById("pre_prom2"),a=document.getElementById("pre_prom3"),f=document.getElementById("pre_prom4"),S=document.getElementById("pre_prom5");c.value=T.value.art.trim(),console.log(r.arts);let v=te(T.value.art.trim());n.value=parseFloat(v.precio1),o.value=parseFloat(v.precio2),a.value=parseFloat(v.precio3),f.value=parseFloat(v.precio4),S.value=parseFloat(v.precio5)}function te(c){for(let n=0;n<r.arts.length;n++){const o=r.arts[n];if(o.cve==c)return o}return{}}function F(c){return c.des1?(document.getElementById("desc_art").textContent=c.des1,document.getElementById("emp1").textContent=c.cant_pre0,document.getElementById("emp2").textContent=c.cant_pre1,document.getElementById("emp3").textContent=c.cant_pre2,document.getElementById("emp4").textContent=c.cant_pre3,document.getElementById("emp5").textContent=c.cant_pre4,document.getElementById("precio1").textContent=x(c.precio_vta0),document.getElementById("precio2").textContent=x(c.precio_vta1),document.getElementById("precio3").textContent=x(c.precio_vta2),document.getElementById("precio4").textContent=x(c.precio_vta3),document.getElementById("precio5").textContent=x(c.precio_vta4),document.getElementsByClassName("per"),!0):(document.getElementById("desc_art").textContent="C\xF3digo no encontrado",!1)}function x(c){return c==null||c==""?"--------":new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",minimumFractionDigits:2}).format(c)}async function A(c,n,o){fetch(ie+"art?art="+c+"&suc="+n+"&prov="+o).then(function(a){k.value=!1,a.ok?(q(),a.json().then(f=>{T.value=f,F(T.value)&&(R(),document.getElementById("pre_prom1").focus())})):(a.json().then(async f=>{document.getElementById("desc_art").textContent=f.message,errorMsg.value=f.message,isModalNoEncontrado.value=!0,await sleep(1500),isModalNoEncontrado.value=!1}),console.log("Respuesta de red OK pero respuesta HTTP no OK"))}).catch(function(a){console.log("Hubo un problema con la petici\xF3n Fetch:"+a.message)})}return(c,n)=>(b(),E(D,null,[i(U,{hasFooter:!1,modelValue:k.value,"onUpdate:modelValue":n[0]||(n[0]=o=>k.value=o),blocked:!0,title:"Cargando la informaci\xF3n"},{default:B(()=>[Dt]),_:1},8,["modelValue"]),I.value.length?(b(),E("div",Nt,[(b(!0),E(D,null,Y(I.value,o=>(b(),E("span",{key:o.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},C(o.name),1))),128))])):z("",!0),e("table",null,[e("thead",null,[e("tr",null,[p.checkable?(b(),E("th",jt)):z("",!0),Tt,Ot,Rt,Ut,Ht,Zt,Yt,Xt])]),e("tbody",null,[(b(!0),E(D,null,Y(h(m),o=>(b(),E("tr",{key:o.cve},[e("td",{"data-label":o.cve,class:"text-center cursor-pointer",onClick:w},C(o.cve),9,qt),e("td",{"data-label":o.cve,onClick:w,class:"cursor-pointer"},C(o.des1),9,Gt),e("td",{"data-label":o.cve,class:"text-center cursor-pointer",onClick:w},C(x(o.precio1)),9,Jt),e("td",{"data-label":o.cve,class:"text-center cursor-pointer",onClick:w},C(x(o.precio2)),9,Qt),e("td",{"data-label":o.cve,class:"text-center cursor-pointer",onClick:w},C(x(o.precio3)),9,Wt),e("td",{"data-label":o.cve,class:"text-center cursor-pointer",onClick:w},C(x(o.precio4)),9,en),e("td",{"data-label":o.cve,class:"text-center cursor-pointer",onClick:w},C(x(o.precio5)),9,tn),e("td",nn,[i(O,{type:"justify-start lg:justify-end","no-wrap":""},{default:B(()=>[i(K,{color:"danger",icon:h(Z),small:"","data-label":o.cve,onClick:a=>X(o.cve)},null,8,["icon","data-label","onClick"])]),_:2},1024)])]))),128))])]),e("div",on,[i(pe,null,{default:B(()=>[i(O,null,{default:B(()=>[(b(!0),E(D,null,Y(h($),o=>(b(),H(K,{key:o,active:o===d.value,label:o+1,color:o===d.value?"lightDark":"whiteDark",small:"",onClick:a=>d.value=o},null,8,["active","label","color","onClick"]))),128))]),_:1}),e("small",null,"P\xE1gina "+C(h(V))+" de "+C(h(P)),1)]),_:1})])],64))}},ln=e("img",{src:de,alt:"",class:"block mx-auto"},null,-1),an={key:0,class:"p-3 bg-gray-100/50 dark:bg-slate-800"},sn={key:0},rn=e("th",{class:"text-center"},"Comprando",-1),cn=e("th",{class:"text-center"},"Emp",-1),dn=e("th",{class:"text-center"},"Art",-1),un=e("th",null,"Descripcion",-1),mn=e("th",{class:"text-center"},"Se regalan",-1),pn=e("th",{class:"text-center"},"Emp Reg",-1),gn=e("th",{class:"text-center"},"Art Reg",-1),_n=e("th",{class:""},"Descripcion regalo",-1),bn=e("th",{class:"text-center"},"Fac Min Reg",-1),fn=e("th",null,null,-1),yn=["data-label"],hn=["data-label"],vn=["data-label"],Cn=["data-label"],xn=["data-label"],En=["data-label"],Bn=["data-label"],In=["data-label"],kn=["data-label"],wn={class:"before:hidden lg:w-1 whitespace-nowrap"},$n={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"},Nn={__name:"TableArtCapturadosRegalo",props:{checkable:Boolean,arts:Array,campos:Object,Array},setup(p){const r=p;me(async()=>{console.log(r.arts,"props value")}),ce(),y(!1),y(!1);const g=y(5),d=y(0),I=y([]),m=N(()=>r.arts.slice(g.value*d.value,g.value*(d.value+1))),P=N(()=>Math.ceil(r.arts.length/g.value)),V=N(()=>d.value+1),$=N(()=>{const n=[];for(let o=0;o<P.value;o++)n.push(o);return n});function X(n){let o=ee(n);o<0||(r.arts.splice(o,1),T())}function ee(n){for(let o=0;o<r.arts.length;o++)if(r.arts[o].cve==n)return o;return-1}const k=y(!1);async function w(n){let a=n.target.closest("td").getAttribute("data-label");document.getElementById("cod_cob").setAttribute("data-label",a);let f=r.campos,S=R(a),v=r.arts[S];if(f.cobradas=v.cobradas,f.regaladas=v.regaladas,f.fac_min_reg=v.emp_reg,f.fac_min_compra=v.emp_cob,f.fac_min_regalo=v.fac_min_reg,f.cod_reg=v.cod_reg,f.cve=v.cve,document.getElementById("desc_art_cob").value=v.des1,document.getElementById("desc_art_reg").value=v.desc_reg,document.getElementById("btn-upd-reg").classList.remove("hidden"),document.getElementById("btn-cancel-reg").classList.remove("hidden"),document.getElementById("add-reg").classList.add("hidden"),document.getElementsByName("tipo")[0].value!="6")return;let J=document.getElementById("sucbase").value;if(J=="-1"){let Q=document.getElementsByClassName("sucursal");for(let t=0;t<Q.length;t++)if(Q[t].checked){J=Q[t].value,console.log(J);break}}let se=document.getElementById("prov").value.slice(0,9);await c(a,J,se,v)}function T(){let n=r.campos;n.cobradas=1,n.regaladas=1,n.fac_min_reg="PZA",n.fac_min_compra="PZA",n.fac_min_regalo=1,n.cod_reg="",n.cod_cob="",n.cve="",document.getElementById("desc_art_cob").value="",document.getElementById("desc_art_reg").value="",document.getElementById("btn-upd-reg").classList.add("hidden"),document.getElementById("btn-cancel-reg").classList.add("hidden"),document.getElementById("add-reg").classList.remove("hidden")}const q=y({});function R(n){for(let o=0;o<r.arts.length;o++)if(r.arts[o].cve==n)return o;return-1}function te(n){return n.des1?(document.getElementById("desc_art").textContent=n.des1,document.getElementById("emp1").textContent=n.cant_pre0,document.getElementById("emp2").textContent=n.cant_pre1,document.getElementById("emp3").textContent=n.cant_pre2,document.getElementById("emp4").textContent=n.cant_pre3,document.getElementById("emp5").textContent=n.cant_pre4,document.getElementById("precio1").textContent=F(n.precio_vta0),document.getElementById("precio2").textContent=F(n.precio_vta1),document.getElementById("precio3").textContent=F(n.precio_vta2),document.getElementById("precio4").textContent=F(n.precio_vta3),document.getElementById("precio5").textContent=F(n.precio_vta4),document.getElementsByClassName("per"),!0):(document.getElementById("desc_art").textContent="C\xF3digo no encontrado",!1)}function F(n){return n==null||n==""?"--------":new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",minimumFractionDigits:2}).format(n)}async function x(n){let o=document.getElementById("inputConsultar"),a=document.getElementById("pre_prom1"),f=document.getElementById("pre_prom2"),S=document.getElementById("pre_prom3"),v=document.getElementById("pre_prom4"),G=document.getElementById("pre_prom5");console.log(n),console.log("precio 3",n.precio3,parseFloat(n.precio3)),o.value=n.cve,a.value=n.precio1!=""?parseFloat(n.precio1):null,f.value=n.precio2!=""?parseFloat(n.precio2):null,S.value=n.precio3!=""?parseFloat(n.precio3)+"":null,v.value=n.precio4!=""?parseFloat(n.precio4):null,G.value=n.precio5!=""?parseFloat(n.precio5):null}function A(){for(let n=1;n<6;n++){let o=document.getElementById("precio"+n);o.textContent="";let a=document.getElementById("pre_prom"+n);a.classList.remove("ring","ring-red-500"),a.value="";let f=document.getElementById("emp"+n);f.textContent="";let S=document.getElementById("porcen_prom"+n);S.classList.remove("ring","ring-red-500"),S.value="",document.getElementById("dif"+n).textContent=""}}async function c(n,o,a,f){fetch(ie+"art?art="+n+"&suc="+o+"&prov="+a).then(function(S){k.value=!1,S.ok?(A(),S.json().then(v=>{q.value=v,te(q.value)&&x(f)})):(S.json().then(async v=>{document.getElementById("desc_art").textContent=v.message,errorMsg.value=v.message,isModalNoEncontrado.value=!0,await sleep(1500),isModalNoEncontrado.value=!1}),console.log("Respuesta de red OK pero respuesta HTTP no OK"))}).catch(function(S){console.log("Hubo un problema con la petici\xF3n Fetch:"+S.message)})}return(n,o)=>(b(),E(D,null,[i(U,{hasFooter:!1,modelValue:k.value,"onUpdate:modelValue":o[0]||(o[0]=a=>k.value=a),blocked:!0,title:"Cargando la informaci\xF3n"},{default:B(()=>[ln]),_:1},8,["modelValue"]),I.value.length?(b(),E("div",an,[(b(!0),E(D,null,Y(I.value,a=>(b(),E("span",{key:a.id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700"},C(a.name),1))),128))])):z("",!0),e("table",null,[e("thead",null,[e("tr",null,[p.checkable?(b(),E("th",sn)):z("",!0),rn,cn,dn,un,mn,pn,gn,_n,bn,fn])]),e("tbody",null,[(b(!0),E(D,null,Y(h(m),a=>(b(),E("tr",{key:a.cve},[e("td",{"data-label":a.cve,class:"text-center cursor-pointer",onClick:w},C(parseFloat(a.cobradas)),9,yn),e("td",{"data-label":a.cve,class:"text-center cursor-pointer",onClick:w},C(a.emp_cob),9,hn),e("td",{"data-label":a.cve,onClick:w,class:"cursor-pointer text-center"},C(a.cve),9,vn),e("td",{"data-label":a.cve,onClick:w,class:"cursor-pointer"},C(a.des1),9,Cn),e("td",{"data-label":a.cve,onClick:w,class:"cursor-pointer text-center"},C(parseFloat(a.regaladas)),9,xn),e("td",{"data-label":a.cve,onClick:w,class:"cursor-pointer text-center"},C(a.emp_reg),9,En),e("td",{"data-label":a.cve,onClick:w,class:"cursor-pointer text-center"},C(a.cod_reg),9,Bn),e("td",{"data-label":a.cve,onClick:w,class:"cursor-pointer"},C(a.desc_reg),9,In),e("td",{"data-label":a.cve,onClick:w,class:"cursor-pointer text-center"},C(parseFloat(a.fac_min_reg)),9,kn),e("td",wn,[i(O,{type:"justify-start lg:justify-end","no-wrap":""},{default:B(()=>[i(K,{color:"danger",icon:h(Z),small:"","data-label":a.cve,onClick:f=>X(a.cve)},null,8,["icon","data-label","onClick"])]),_:2},1024)])]))),128))])]),e("div",$n,[i(pe,null,{default:B(()=>[i(O,null,{default:B(()=>[(b(!0),E(D,null,Y(h($),a=>(b(),H(K,{key:a,active:a===d.value,label:a+1,color:a===d.value?"lightDark":"whiteDark",small:"",onClick:f=>d.value=a},null,8,["active","label","color","onClick"]))),128))]),_:1}),e("small",null,"P\xE1gina "+C(h(V))+" de "+C(h(P)),1)]),_:1})])],64))}},Sn=["id"],jn={__name:"Accordion",props:{label:{type:String,default:null},labelFor:{type:String,default:null},help:{type:String,default:null},otherClasses:{type:String,default:null},id:{type:String,default:null}},setup(p){const r=p;Ce();const g=N(()=>["panel px-2 border-gray-700 border-t-0"]);N(()=>[" last:mb-0",r.otherClasses?r.otherClasses:""]);function d(I){I.target.classList.toggle("active");var m=I.target.nextElementSibling;m.style.maxHeight?(m.style.maxHeight=null,m.classList.remove("border-solid","rounded-b","border-2","pt-3","pb-4"),I.target.classList.remove("font-bold")):(m.classList.add("border-solid","rounded-b","border-2","pt-3","pb-4"),I.target.classList.add("font-bold"),m.style.maxHeight=m.scrollHeight+40+"px")}return(I,m)=>(b(),E(D,null,[p.label?(b(),E("button",{key:0,id:p.id,class:"block accordion hover:bg-blue-600 dark:hover:bg-blue-500 border-solid border-gray-700 rounded bg-gray dark:bg-slate-800 border-2 p-3",onClick:d},C(p.label),9,Sn)):z("",!0),e("div",{class:Ee(h(g))},[xe(I.$slots,"default")],2)],64))}};export{Vn as R,jn as _,Mn as a,zn as b,Dn as c,Nn as d,Ie as e};
