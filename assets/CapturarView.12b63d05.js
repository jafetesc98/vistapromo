import{b as p,v as ee,r as ye,d as el,e as ll,f as j,w as r,N as al,t as R,o as h,g as t,h as K,a as f,C as q,m as A,i as Ee,j as Be,c as H,K as Ie,F as Ce,O as Ve,X as he,D as le,k as ol,l as ae,p as tl,Y as rl,ah as dl}from"./index.74708cfc.js";import{_ as nl}from"./loading.16b03cf4.js";import{_ as Ae}from"./checked.4cad9791.js";import{_ as J,R as sl,a as ul,b as il,c as cl,d as ml,e as pl}from"./Accordion.d385d9ea.js";import{_ as gl}from"./FormCheckRadioGroup.4536da00.js";import{_ as n}from"./FormField.63451e13.js";import{_ as u}from"./FormControl.314fc145.js";import{_ as fl}from"./SectionTitleLine.f3344fd8.js";import"./FormCheckRadio.2539ad06.js";const vl=f("img",{src:nl,alt:"",class:"block mx-auto"},null,-1),bl=f("img",{src:Ae,alt:"",class:"block mx-auto"},null,-1),_l=f("img",{src:pl,alt:"",class:"block mx-auto"},null,-1),yl=f("img",{src:Ae,alt:"",class:"block mx-auto"},null,-1),El={id:"prov_list"},Bl=["value"],Il={id:"ac_list"},Cl=["value"],Vl=f("label",null,"Art\xEDculos Capturados: ",-1),hl={key:1,class:"mt-6"},Al={class:"mx-auto mt-8"},kl=f("label",null,"Art\xEDculos Capturados: ",-1),Ll={__name:"CapturarView",setup(Pl){const ke=tl(),Pe=["ene","feb","mar","abr","may","jun","jul","ago","sep","ago","oct","nov","dic"],ne=[{id:"001",label:"001"},{id:"002",label:"002"},{id:"003",label:"003"},{id:"012",label:"012"},{id:"013",label:"013"},{id:"015",label:"015"},{id:"024",label:"024"},{id:"-1",label:"Sucursal seleccionada"}],se=[{id:1,label:"Promoci\xF3n De Precio",default:!0},{id:5,label:"Mercanc\xEDa sin Cargo"},{id:6,label:"Precio + Mercanc\xEDa sin Cargo"}],ue=[{id:0,label:"Baja de precio",default:!0},{id:1,label:"Promoci\xF3n"}],Se=[{id:"CRED",label:"CR\xC9DITO"},{id:"CTDO",label:"CONTADO"},{id:"XCOB",label:"POR COBRAR"}],ie=[{id:1,label:"Paga Proveedor"},{id:2,label:"Paga MiniAbastos"},{id:3,label:"Pagan Ambos"}],T=[{id:"PZA",label:"PIEZA"},{id:"PAQ",label:"PAQUETE"},{id:"CJA",label:"CAJA"}],P=[{id:"",label:"SELECCIONE UNO"},{id:"BAS",label:"TARJETA BASICA"},{id:"CON",label:"CONSUMO TIENDA"},{id:"ESP",label:"CLIENTE ESPECIAL"},{id:"EXP",label:"CLIENTE CREDITO EXPO"},{id:"INA",label:"INAPAM"},{id:"MAY",label:"PRUEBA SEG MAY"},{id:"MIN",label:"MINORISTAS"},{id:"MUJ",label:"MUJER"},{id:"PRF",label:"TARJETA PREFERENCIAL"},{id:"PRM",label:"TARJETA PREMIUM"},{id:"PUB",label:"PUBLICO"},{id:"RUT",label:"VENTA EN RUTA"}],oe=p(""),L=p(""),te=p(""),Z=p(""),X=p(""),c=ee(()=>Y.value),Me=ee(()=>a),Y=p([]);p([]);const a=ye({nombre:"",tipo:se[0].id,indicador:ue[0].id,proveedor:"",paga:ie[0].id,folioAcuerdo:"",limPzs:"",udsVenta:"",cantMin:"",montoMin:"",vigencia:"",fec_ini:"",fec_fin:"",aplicaSim:"",cliente:"",condPago:"",seg1:P[0].id,seg2:P[0].id,seg3:P[0].id,seg4:P[0].id,sucSelected:[],aplicaA:"",mostrador:null,retail:null,u_alta:"",precBase:ne[1].id,arts:Y,fac_min_reg:T[0].id,fac_min_compra:T[0].id,cobradas:1,regaladas:1,fac_min_regalo:1,cod_reg:"",cod_cob:"",boletin:"",cve:""});ye({});const O=el(),Ue=ee(()=>G.value),G=p({}),$=ee(()=>N.value),N=p({}),S=p(!1),k=p(""),M=p(!1),w=p(!1),ce=()=>{};p(!0),p(0);async function xe(){var o=document.getElementById("seg1"),e=document.getElementById("seg2"),l=document.getElementById("seg3"),d=document.getElementById("seg4");o[0].disabled=!0,e[0].disabled=!0,l[0].disabled=!0,d[0].disabled=!0;let s=O.numComprador;return await fetch(R+"prov?compr="+s+"&usr="+O.nomCto).then(async function(m){if(m.ok)await m.json().then(g=>(G.value=g,D));else return console.log("Respuesta de red OK pero respuesta HTTP no OK"),{}}).catch(function(m){return console.log("Hubo un problema con la petici\xF3n Fetch:"+m.message),{}})}async function me(){let o=O.numComprador,e=a.proveedor.trim().split(" ");return e=e[0],await fetch(R+"acuerdos?compr="+o+"&prov="+e+"&usr="+O.nomCto).then(async function(l){if(l.ok)await l.json().then(d=>(N.value=d,D));else return console.log("Respuesta de red OK pero respuesta HTTP no OK"),{}}).catch(function(l){return console.log("Hubo un problema con la petici\xF3n Fetch:"+l.message),{}})}function Te(){let o=document.getElementById("acuerdo").value,e=0;for(let l=0;l<N.value.length;l++)N.value[l].Folio==o&&e++;e==0?(console.log("cuando no hay datos iguales"),acuerdo.setAttribute("enable",""),acuerdo.classList.add("ring","ring-red-500"),L.value="No se encontr\xF3 ning\xFAn acuerdo ligado a este proveedor"):(acuerdo.setAttribute("enable",""),acuerdo.classList.remove("ring","ring-red-500"),L.value="")}ll(async()=>{await xe(),await me(),document.getElementById("acc_desc").click(),document.getElementById("acc_prov").click(),document.getElementById("acc_suc").click(),document.getElementById("acuerdo").addEventListener("blur",Te,!0);let e=document.getElementsByName("zona");for(let d=0;d<e.length;d++)e[d].addEventListener("change",Ne,!0);let l=document.querySelectorAll("[zona]");for(let d=0;d<l.length;d++)l[d].addEventListener("change",we,!0)});function Ne(o){switch(o.target.value){case"COSTA":a.precBase="013";break;case"ISTMO":a.precBase="024";break;case"VALLES":a.precBase="001";break;case"TODAS":a.precBase="001";break}}function we(o){document.getElementById("zona-valles");let e=document.getElementById("zona-costa"),l=document.getElementById("zona-istmo"),d=document.getElementById("zona-todas"),s=document.getElementById("zona-custom"),m=document.getElementById("suc_001"),g=document.getElementById("suc_013"),v=document.getElementById("suc_024");switch(document.getElementById("suc_003"),document.getElementById("suc_012"),document.getElementById("suc_015"),o.target.value){case"001":o.target.checked?a.precBase="001":g.checked?a.precBase="013":v.checked?a.precBase="024":a.precBase="003";break;case"013":o.target.checked?m.checked||(a.precBase="013"):e.checked?a.precBase="012":(s.checked||d.checked)&&(v.checked?a.precBase="024":a.precBase="003");break;case"024":o.target.checked?m.checked||(a.precBase="024"):l.checked&&(a.precBase="015");break;default:!o.target.checked&&!m.checked&&!g.checked&&!v.checked&&(d.checked||s.checked)&&(a.precBase="003");break}}var D={};function Re(){if(Y.value=[],a.tipo==5||a.tipo==6){let o=document.getElementById("cod_cob"),e=document.getElementById("art_reg");o.addEventListener("blur",ve,!0),e.addEventListener("blur",ve,!0)}a.tipo==6&&Ye()}function qe(o){console.log($);for(let e=0;e<$.value.length;e++)if($.value[e].Folio==o.target.value){a.boletin=$.value[e].boletin;return}}function re(o){return new Promise(e=>setTimeout(e,o))}p(!1);const Q=p(!1),pe=p(!1);async function Le(o){let e=document.getElementById("cliente").value;if(o.target.classList.remove("ring","ring-red-500"),te.value="",e!="")return console.log("entra el else"),await fetch(R+"cliente?nCliente="+e).then(async function(l){if(l.ok)await l.json().then(d=>{N.value=d,console.log(d);var s=d.cve+"-"+d.nom;return document.getElementById("cliente").value=s,D});else return o.target.classList.add("ring","ring-red-500"),te.value="El cliente no existe",console.log("Respuesta "),{}}).catch(function(l){return console.log("Hubo un problema con la petici\xF3n Fetch:"+l.message),{}})}async function W(o){var e=document.getElementById("seg1"),l=document.getElementById("seg2"),d=document.getElementById("seg3"),s=document.getElementById("seg4"),m=document.getElementById("seg1").selectedIndex,g=document.getElementById("seg2").selectedIndex,v=document.getElementById("seg3").selectedIndex,Qe=document.getElementById("seg4").selectedIndex,B="",I="",C="",V="";if(m!=-1&&(B=e.options[document.getElementById("seg1").selectedIndex].value),g!=-1&&(I=l.options[document.getElementById("seg2").selectedIndex].value),v!=-1&&(C=d.options[document.getElementById("seg3").selectedIndex].value),Qe!=-1&&(V=s.options[document.getElementById("seg4").selectedIndex].value),o=="seg1"){for(var B=e.options[document.getElementById("seg1").selectedIndex].value,i=0;i<l.length;i++){var b=l[i],_=d[i],y=s[i];b.value==C||b.value==V?b.disabled=!0:b.disabled=!1,_.value==I||_.value==V?_.disabled=!0:_.disabled=!1,y.value==I||y.value==C?y.disabled=!0:y.disabled=!1}let U=l.querySelector(`option[value="${B}"]`);U.disabled=!0;let x=d.querySelector(`option[value="${B}"]`);x.disabled=!0;let We=s.querySelector(`option[value="${B}"]`);We.disabled=!0}if(o=="seg2"){for(var i=0;i<l.length;i++){var E=e[i],_=d[i],y=s[i];E.value==C||E.value==V?E.disabled=!0:E.disabled=!1,_.value==B||_.value==V?_.disabled=!0:_.disabled=!1,y.value==B||y.value==C?y.disabled=!0:y.disabled=!1}let z=e.querySelector(`option[value="${I}"]`);z.disabled=!0;let U=d.querySelector(`option[value="${I}"]`);U.disabled=!0;let x=s.querySelector(`option[value="${I}"]`);x.disabled=!0}if(o=="seg3"){for(var i=0;i<l.length;i++){var E=e[i],b=l[i],y=s[i];E.value==I||E.value==V?E.disabled=!0:E.disabled=!1,b.value==B||b.value==V?b.disabled=!0:b.disabled=!1,y.value==B||y.value==I?y.disabled=!0:y.disabled=!1}let z=e.querySelector(`option[value="${C}"]`);z.disabled=!0;let U=l.querySelector(`option[value="${C}"]`);U.disabled=!0;let x=s.querySelector(`option[value="${C}"]`);x.disabled=!0}if(o=="seg4"){for(var i=0;i<e.length;i++){var E=e[i],b=l[i],_=d[i];E.value==I||E.value==C?E.disabled=!0:E.disabled=!1,b.value==B||b.value==C?b.disabled=!0:b.disabled=!1,_.value==B||_.value==I?_.disabled=!0:_.disabled=!1}let z=e.querySelector(`option[value="${V}"]`);z.disabled=!0;let U=l.querySelector(`option[value="${V}"]`);U.disabled=!0;let x=d.querySelector(`option[value="${V}"]`);x.disabled=!0}e[0].disabled=!0,l[0].disabled=!0,d[0].disabled=!0,s[0].disabled=!0}function Oe(o){window.open(R+"formato?idprom="+o,"_blank")}async function $e(){let o=document.querySelectorAll("[atr='requerido']");for(let v=0;v<o.length;v++)if(o[v].value==""||o[v].value==null){S.value=!0,k.value='El campo "'+o[v].name+'" no puede quedar vac\xEDo';return}let e=document.getElementById("idvig").value;if(e==""){S.value=!0,k.value='El campo "vigencia" no puede quedar vac\xEDo';return}let l=e.split("~");if(new Date(l[0]),new Date(l[1]),a.vigencia=e,a.fec_ini=ge(l[0]),a.fec_fin=ge(l[1]),c.value.length<1){S.value=!0,k.value="No captur\xF3 ning\xFAn art\xEDculo en la promoci\xF3n.";return}if(a.sucSelected=fe(),a.sucSelected.length<1){S.value=!0,k.value="No seleccion\xF3 ninguna sucursal para aplicar la promoci\xF3n.";return}a.precBase=="-1"&&(a.precBase=a.sucSelected[0]);let d=document.getElementById("mostrador"),s=document.getElementById("retail");d.checked?a.mostrador=1:a.mostrador=0,s.checked?a.retail=1:a.retail=0,a.u_alta=O.nomCto;let m=a.proveedor.trim().split(" ");a.proveedor=m[0];let g={datos:a};console.log(g),await Fe(R+"crea-prm",g).then(async v=>{Oe(v.id),console.log("respuesta post"),console.log(v),"error"in v?(console.log("Tiene errores"),k.value="Ocurri\xF3 un error al guardar. "+v.error,S.value=!0):(console.log("NO tiene errores"),Q.value=!0,await re(1500),Q.value=!1,ke.push({path:"/vistapromo/mis-capturas"}))})}function De(o){return o<10?"0"+(o+1):""+o}function ge(o){o=o.trim();let e=o.split(" "),l=De(Pe.indexOf(e[1]+"")),d=e[2]+""+l+e[0];return console.log(d),d}async function Fe(o="",e={}){const l=await fetch(o,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(e)});return console.log(l),l.json()}function fe(){let o=[],e=document.getElementsByClassName("sucursal");for(let l=0;l<e.length;l++)e[l].checked&&o.push(e[l].value);return o}async function ze(o){a.proveedor,Y.value=[],o.target.classList.remove("ring","ring-red-500"),oe.value="";let e=!1,l=document.getElementById("acuerdo");a.folioAcuerdo="",l.removeAttribute("disabled"),l.classList.remove("ring","ring-red-500"),L.value="";for(let d=0;d<G.value.length;d++)if(G.value[d].proveedor==a.proveedor.trim().split(" ")[0]){e=!0;break}e||(o.target.classList.add("ring","ring-red-500"),oe.value="Proveedor no existe o no est\xE1 ligado a su usuario"),await me(),N.value.length==0&&(l.setAttribute("disabled",""),l.classList.add("ring","ring-red-500"),L.value="No se encontr\xF3 ning\xFAn acuerdo ligado a este proveedor")}async function ve(o){o.target.id=="cod_cob"?document.getElementById("desc_art_cob"):document.getElementById("desc_art_reg");let e=o.target.value;document.getElementById("sucbase").value,a.sucSelected=fe(),a.precBase=="-1"&&(a.precBase=a.sucSelected[0],console.log("antes de consultar",a.precBase,a.sucSelected[0]));let l=document.getElementById("prov").value.slice(0,9);var d=document.getElementById("emp_cob"),s=d.options[document.getElementById("emp_cob").selectedIndex].value;console.log(s),s.length==0&&(s=""),await je(e,a.precBase,l,s,o.target)}async function je(o,e,l,d,s){M.value=!0,fetch(R+"art?art="+o+"&suc="+e+"&prov="+l+"&empaque="+d).then(function(m){M.value=!1,m.ok?m.json().then(g=>{D=g,s.value=o,console.log(D),s.id=="cod_cob"?(Z.value="",document.getElementById("desc_art_cob").value=g.des1):(X.value="",document.getElementById("desc_art_reg").value=g.des1)}):(m.json().then(async g=>{k.value=g.message,w.value=!0,await re(1500),w.value=!1,s.id=="cod_cob"?Z.value=g.message:X.value=g.message}),console.log("Respuesta de red OK pero respuesta HTTP no OK"))}).catch(function(m){console.log("Hubo un problema con la petici\xF3n Fetch:"+m.message),s.value=o})}function Ke(o){console.log(c.value,"artscapturados");for(let e=0;e<c.value.length;e++)if(c.value[e].cve==o)return!0;return!1}async function F(o,e){M.value=!1,k.value=o,w.value=!0,e.target.removeAttribute("disabled"),await re(1500),w.value=!1}async function He(o){if(o.target.setAttribute("disabled",!0),M.value=!0,Z.value!=""||X.value!="")return console.log("tiene errores en campos de regalo"),F("El c\xF3digo capturado no existe, o no corresponde al proveedor seleccionado",o);if(Ke(a.cve))return console.log("Esta duplicada"),F("El art\xEDculo ya est\xE1 capturado",o);if(a.tipo==6){let l=document.getElementById("cod_cob");if(console.log(l.value,"codigo cobrado"),l.value==null)return console.log("el tipo de proo6 detono la promo"),F("El c\xF3digo capturado no existe, o no corresponde al proveedor seleccionado",o);a.cve=l.value.trim(),a.des1=document.getElementById("desc_art_cob").value}let e={};if(e.cve=a.cve,e.cod_reg=a.cod_reg,e.cobradas=a.cobradas,e.regaladas=a.regaladas,e.emp_cob=a.fac_min_compra,e.emp_reg=a.fac_min_reg,e.des1=document.getElementById("desc_art_cob").value,e.desc_reg=document.getElementById("desc_art_reg").value,e.fac_min_reg=a.fac_min_regalo,e.cve==""||e.cve==null||e.cod_reg==""||e.cod_reg==null||e.regaladas==""||e.regaladas==null||e.cobradas==""||e.cobradas==null||e.emp_cob==""||e.emp_cob==null||e.emp_reg==""||e.emp_reg==null||e.des1==""||e.des1==null||e.desc_reg==""||e.desc_reg==null||e.fac_min_reg==""||e.fac_min_reg==null)return F("Debe capturar todos los campos requeridos",o);a.tipo==6&&(document.getElementById("desc_art").textContent="",document.getElementById("inputConsultar").value="",document.getElementById("cod_cob").value="",e=Je(e)),c.value.push(e),M.value=!1,o.target.removeAttribute("disabled"),console.log(c.value),de(),a.tipo==6&&_e(),console.log(e)}function Je(o){let e=document.getElementById("pre_prom1").value,l=document.getElementById("pre_prom2").value,d=document.getElementById("pre_prom3").value,s=document.getElementById("pre_prom4").value,m=document.getElementById("pre_prom5").value;return o.precio1=e,o.precio2=l,o.precio3=d,o.precio4=s,o.precio5=m,o}const be=function(o){var e=[".","-","+","e","ArrowDown","ArrowUp"];e.includes(o.key)&&o.preventDefault()};function de(){a.fac_min_reg=T[0].id,a.fac_min_compra=T[0].id,a.cobradas=1,a.regaladas=1,a.fac_min_regalo=1,a.cod_reg="",a.cod_cob="",a.cve="",document.getElementById("desc_art_cob").value="",document.getElementById("desc_art_reg").value="",document.getElementById("btn-upd-reg").classList.add("hidden"),document.getElementById("btn-cancel-reg").classList.add("hidden"),document.getElementById("add-reg").classList.remove("hidden"),a.tipo==6&&(console.log("deberia ser de hibirda"),_e(),document.getElementById("desc_art").textContent="",document.getElementById("inputConsultar").value="")}function Ze(){let o={};if(o.cod_cob=a.cod_cob,o.cve=a.cve,o.cod_reg=a.cod_reg,o.cobradas=a.cobradas,o.regaladas=a.regaladas,o.emp_cob=a.fac_min_compra,o.emp_reg=a.fac_min_reg,o.desc_cob=document.getElementById("desc_art_cob").value,o.des1=document.getElementById("desc_art_cob").value,o.desc_reg=document.getElementById("desc_art_reg").value,o.fac_min_reg=a.fac_min_regalo,console.log(o.desc_reg,o.desc_cob,"descripciones"),o.cve==""||o.cve==null||o.cod_reg==""||o.cod_reg==null||o.regaladas==""||o.regaladas==null||o.cobradas==""||o.cobradas==null||o.emp_cob==""||o.emp_cob==null||o.emp_reg==""||o.emp_reg==null||o.desc_cob==""||o.desc_cob==null||o.desc_reg==""||o.desc_reg==null||o.fac_min_reg==""||o.fac_min_reg==null)return F("Debe capturar todos los campos requeridos",event);console.log("art modificado",c.value);let e=document.getElementById("cod_cob").getAttribute("data-label"),l=Xe(e);c.value[l],c.value[l]=o,a.tipo==6&&Ge(l),document.getElementById("btn-upd-reg").classList.add("hidden"),document.getElementById("btn-cancel-reg").classList.add("hidden"),document.getElementById("add-reg").classList.remove("hidden"),de()}function Xe(o){for(let e=0;e<c.value.length;e++)if(c.value[e].cve==o)return e;return-1}function Ye(){let o=document.getElementById("cod_cob");o.setAttribute("disabled",!0),o.classList.add("disabled:opacity-75"),document.getElementById("btn_add").classList.add("hidden")}function _e(){for(let o=1;o<6;o++){let e=document.getElementById("precio"+o);e.textContent="";let l=document.getElementById("pre_prom"+o);l.classList.remove("ring","ring-red-500"),l.value="";let d=document.getElementById("emp"+o);d.textContent="";let s=document.getElementById("porcen_prom"+o);s.classList.remove("ring","ring-red-500"),s.value="",document.getElementById("dif"+o).textContent=""}}function Ge(o){c.value[o].precio1=document.getElementById("pre_prom1").value,c.value[o].precio2=document.getElementById("pre_prom2").value,c.value[o].precio3=document.getElementById("pre_prom3").value,c.value[o].precio4=document.getElementById("pre_prom4").value,c.value[o].precio5=document.getElementById("pre_prom5").value}return(o,e)=>(h(),j(al,null,{default:r(()=>[t(K,{hasFooter:!1,modelValue:M.value,"onUpdate:modelValue":e[0]||(e[0]=l=>M.value=l),blocked:!0,title:"Cargando la informaci\xF3n"},{default:r(()=>[vl]),_:1},8,["modelValue"]),t(K,{modelValue:S.value,"onUpdate:modelValue":e[1]||(e[1]=l=>S.value=l),title:"No se pudo guardar la promoci\xF3n",button:"secondary",hasButton:""},{default:r(()=>[f("p",null,q(k.value),1)]),_:1},8,["modelValue"]),t(K,{hasFooter:!1,modelValue:Q.value,"onUpdate:modelValue":e[2]||(e[2]=l=>Q.value=l),title:"Promoci\xF3n creada correctamente",blocked:!0},{default:r(()=>[bl]),_:1},8,["modelValue"]),t(K,{modelValue:w.value,"onUpdate:modelValue":e[3]||(e[3]=l=>w.value=l),title:"Error al capturar el art\xEDculo",hasFooter:!1,titleClass:"mx-auto mb-3",blocked:!0},{default:r(()=>[_l,f("p",null,q(k.value),1)]),_:1},8,["modelValue"]),t(K,{hasFooter:!1,modelValue:pe.value,"onUpdate:modelValue":e[4]||(e[4]=l=>pe.value=l),title:"Art\xEDculo agregado",blocked:!0},{default:r(()=>[yl]),_:1},8,["modelValue"]),t(Ve,{id:"sect"},{default:r(()=>[t(fl,{icon:A(rl),title:"Capturar nueva Promoci\xF3n",main:""},null,8,["icon"]),t(Ee,{form:"",onSubmit:Be(ce,["prevent"])},{default:r(()=>[t(J,{label:"Descripci\xF3n y Tipo",id:"acc_desc"},{default:r(()=>[t(n,null,{default:r(()=>[t(n,null,{default:r(()=>[t(n,null,{default:r(()=>[t(n,{label:"Nombre de la promoci\xF3n*"},{default:r(()=>[t(u,{type:"text",modelValue:a.nombre,"onUpdate:modelValue":e[5]||(e[5]=l=>a.nombre=l),attrr:"requerido",name:"nombre",id:"nom",required:"",placeholder:"Nombre de la promoci\xF3n*",otherClasses:"uppercase"},null,8,["modelValue"])]),_:1}),t(n,null,{default:r(()=>[t(n,null,{default:r(()=>[t(n,{label:"Tipo de promoci\xF3n*"},{default:r(()=>[(h(),j(u,{modelValue:a.tipo,"onUpdate:modelValue":e[6]||(e[6]=l=>a.tipo=l),options:se,key:o.prueba,attrr:"requerido",required:"",onChange:Re,name:"tipo",title:"Tipo De Promoci\xF3n*",otherClasses:"campo"},null,8,["modelValue"]))]),_:1})]),_:1})]),_:1}),t(n,null,{default:r(()=>[t(n,{label:"Tipo de indicador*"},{default:r(()=>[t(u,{modelValue:a.indicador,"onUpdate:modelValue":e[7]||(e[7]=l=>a.indicador=l),options:ue,attrr:"requerido",required:"",name:"indicador",title:"Tipo De Indicador*",otherClasses:"campo"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(J,{label:"Proveedor y Acuerdo",id:"acc_prov"},{default:r(()=>[t(n,null,{default:r(()=>[t(n,null,{default:r(()=>[t(n,{label:"Num Proveedor:*"},{default:r(()=>[t(u,{type:"text",id:"prov",modelValue:a.proveedor,"onUpdate:modelValue":e[8]||(e[8]=l=>a.proveedor=l),attrr:"requerido",name:"proveedor",otherClasses:"campo",placeholder:"N\xFAmero de Proveedor*",required:"",errorMsg:oe.value,onChange:ze,multiple:"",list:"prov_list"},null,8,["modelValue","errorMsg"])]),_:1}),t(n,null,{default:r(()=>[t(n,{label:"Paga:*"},{default:r(()=>[t(u,{options:ie,modelValue:a.paga,"onUpdate:modelValue":e[9]||(e[9]=l=>a.paga=l),required:"",attrr:"requerido",name:"paga",otherClasses:"campo"},null,8,["modelValue"])]),_:1}),t(n,{label:"Folio Acuerdo:*"},{default:r(()=>[t(u,{type:"text",id:"acuerdo",multiple:"",list:"ac_list",required:"",attrr:"requerido",name:"folioAcuerdo",otherClasses:"campo",onChange:qe,modelValue:a.folioAcuerdo,"onUpdate:modelValue":e[10]||(e[10]=l=>a.folioAcuerdo=l),errorMsg:L.value,placeholder:"Folio de Acuerdo"},null,8,["modelValue","errorMsg"])]),_:1}),t(n,{label:"Bolet\xEDn:"},{default:r(()=>[t(u,{type:"text",modelValue:a.boletin,"onUpdate:modelValue":e[11]||(e[11]=l=>a.boletin=l),disabled:"",placeholder:"Bolet\xEDn",id:"boletin"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),f("datalist",El,[(h(!0),H(Ce,null,Ie(A(Ue),l=>(h(),H("option",{key:l.proveedor,value:l.proveedor+" - "+l.nom},q(l.proveedor),9,Bl))),128))]),f("datalist",Il,[(h(!0),H(Ce,null,Ie(A($),l=>(h(),H("option",{key:l.folio,value:l.Folio},q(l.Folio),9,Cl))),128))])]),_:1}),t(J,{label:"Restricciones",id:"acc_restric"},{default:r(()=>[t(n,{otherClasses:""},{default:r(()=>[t(n,{label:"Limitado a:"},{default:r(()=>[t(u,{type:"text",modelValue:a.limPzs,"onUpdate:modelValue":e[12]||(e[12]=l=>a.limPzs=l),name:"limPzs",otherClasses:"campo",placeholder:"Piezas"},null,8,["modelValue"])]),_:1}),t(n,{label:"Unidades por venta:"},{default:r(()=>[t(u,{type:"text",modelValue:a.udsVenta,"onUpdate:modelValue":e[13]||(e[13]=l=>a.udsVenta=l),name:"udsVenta",otherClasses:"campo",placeholder:"PZAS"},null,8,["modelValue"])]),_:1}),t(n,{label:"Cantidad m\xEDnima:"},{default:r(()=>[t(u,{type:"text",modelValue:a.cantMin,"onUpdate:modelValue":e[14]||(e[14]=l=>a.cantMin=l),name:"cantMin",otherClasses:"campo",placeholder:"PZS"},null,8,["modelValue"])]),_:1}),t(n,{label:"Monto compra m\xEDnima:"},{default:r(()=>[t(u,{type:"text",modelValue:a.montoMin,"onUpdate:modelValue":e[15]||(e[15]=l=>a.montoMin=l),name:"montoMin",otherClasses:"campo",placeholder:"$0.00"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(n,{otherClasses:"mt-3 mb-6 mx-3",label:"Vigencia*"},{default:r(()=>[t(sl,{idDate:"idvig"}),t(gl,{class:"ml-3",attrr:"requerido",otherClasses:"campo",modelValue:a.aplicaSim,"onUpdate:modelValue":e[16]||(e[16]=l=>a.aplicaSim=l),name:"similares",type:"switch",options:{one:"Aplica similares"}},null,8,["modelValue"])]),_:1}),t(J,{label:"Cliente y Pago",id:"acc_cli"},{default:r(()=>[t(n,null,{default:r(()=>[t(n,{label:"Cliente:"},{default:r(()=>[t(u,{type:"text",modelValue:a.cliente,"onUpdate:modelValue":e[17]||(e[17]=l=>a.cliente=l),onChange:Le,placeholder:"N\xFAmero de Cliente",id:"cliente",errorMsg:te.value},null,8,["modelValue","errorMsg"])]),_:1}),t(n,{label:"Condici\xF3n de Pago:"},{default:r(()=>[t(u,{options:Se,modelValue:a.condPago,"onUpdate:modelValue":e[18]||(e[18]=l=>a.condPago=l)},null,8,["modelValue"])]),_:1})]),_:1}),t(n,{label:"Segmentos de Mercado:",otherClasses:"mt-3"},{default:r(()=>[t(u,{modelValue:a.seg1,"onUpdate:modelValue":e[19]||(e[19]=l=>a.seg1=l),options:P,name:"seg1",id:"seg1",onChange:e[20]||(e[20]=l=>W("seg1")),title:"Segmento 1 mercado",otherClasses:"campo"},null,8,["modelValue"]),t(u,{modelValue:a.seg2,"onUpdate:modelValue":e[21]||(e[21]=l=>a.seg2=l),options:P,name:"seg2",id:"seg2",onChange:e[22]||(e[22]=l=>W("seg2")),title:"Segmento 2 mercado",otherClasses:"campo"},null,8,["modelValue"]),t(u,{modelValue:a.seg3,"onUpdate:modelValue":e[23]||(e[23]=l=>a.seg3=l),options:P,name:"seg3",id:"seg3",onChange:e[24]||(e[24]=l=>W("seg3")),title:"Segmento 3 mercado",otherClasses:"campo"},null,8,["modelValue"]),t(u,{modelValue:a.seg4,"onUpdate:modelValue":e[25]||(e[25]=l=>a.seg4=l),options:P,name:"seg4",id:"seg4",onChange:e[26]||(e[26]=l=>W("seg4")),title:"Segmento 4 mercado",otherClasses:"campo"},null,8,["modelValue"])]),_:1})]),_:1}),t(J,{label:"Aplica para:*",id:"acc_suc"},{default:r(()=>[t(n,null,{default:r(()=>[t(ul,{sucBase:a.precBase},null,8,["sucBase"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),t(Ve,{class:"pt-0"},{default:r(()=>[t(Ee,{CardBox:"",form:"",onSubmit:Be(ce,["prevent"])},{footer:r(()=>[]),default:r(()=>[t(n,{label:"Art\xEDculos"},{default:r(()=>[t(n,{label:"Precios seg\xFAn:"},{default:r(()=>[t(u,{options:ne,modelValue:a.precBase,"onUpdate:modelValue":e[27]||(e[27]=l=>a.precBase=l),id:"sucbase",name:"forzado",title:"Precios seg\xFAn: ",placeholder:"Precios seg\xFAn:"},null,8,["modelValue"])]),_:1}),f("div",null,[Vl,f("span",null,[f("b",null,q(A(c).length),1)])])]),_:1}),t(he),a.tipo==1||a.tipo==6?(h(),j(il,{key:0,arts:A(c)},null,8,["arts"])):le("",!0),a.tipo==5||a.tipo==6?(h(),H("div",hl,[t(n,null,{default:r(()=>[t(n,{label:"Comprando:*"},{default:r(()=>[t(u,{modelValue:a.cobradas,"onUpdate:modelValue":e[28]||(e[28]=l=>a.cobradas=l),type:"number",onKeydown:be,name:"cobradas",otherClasses:"campo"},null,8,["modelValue"])]),_:1}),t(n,{label:"Emp:*"},{default:r(()=>[t(u,{options:T,modelValue:a.fac_min_compra,"onUpdate:modelValue":e[29]||(e[29]=l=>a.fac_min_compra=l),id:"emp_cob",name:"emp_cob",otherClasses:"campo"},null,8,["modelValue"])]),_:1}),t(n,{label:"Del C\xF3digo:*"},{default:r(()=>[t(u,{type:"text",id:"cod_cob",modelValue:a.cve,"onUpdate:modelValue":e[30]||(e[30]=l=>a.cve=l),name:"cod_cob",otherClasses:"campo",errorMsg:Z.value},null,8,["modelValue","errorMsg"])]),_:1}),t(n,{label:"Descripci\xF3n"},{default:r(()=>[t(u,{type:"text",disabled:"",id:"desc_art_cob"})]),_:1})]),_:1}),t(n,{class:"mt-4"},{default:r(()=>[t(n,{label:"Se regalan:*"},{default:r(()=>[t(u,{modelValue:a.regaladas,"onUpdate:modelValue":e[31]||(e[31]=l=>a.regaladas=l),type:"number",onKeydown:be,name:"regaladas",otherClasses:"campo"},null,8,["modelValue"])]),_:1}),t(n,{label:"Emp:*"},{default:r(()=>[t(u,{options:T,modelValue:a.fac_min_reg,"onUpdate:modelValue":e[32]||(e[32]=l=>a.fac_min_reg=l),name:"emp_reg",otherClasses:"campo"},null,8,["modelValue"])]),_:1}),t(n,{label:"Del C\xF3digo:*"},{default:r(()=>[t(u,{type:"text",id:"art_reg",modelValue:a.cod_reg,"onUpdate:modelValue":e[33]||(e[33]=l=>a.cod_reg=l),name:"art_reg",otherClasses:"campo",errorMsg:X.value},null,8,["modelValue","errorMsg"])]),_:1}),t(n,{label:"De Regalo"},{default:r(()=>[t(u,{type:"text",disabled:"",id:"desc_art_reg"})]),_:1}),t(n,{label:"Fac Min Reg",help:"ATENCI\xD3N: Se recomienda no modificar este valor"},{default:r(()=>[t(u,{type:"number",modelValue:a.fac_min_regalo,"onUpdate:modelValue":e[34]||(e[34]=l=>a.fac_min_regalo=l),placeholder:"1",id:"fac_min_reg"},null,8,["modelValue"])]),_:1}),f("div",Al,[t(ol,{type:"justify-start lg:justify-end","no-wrap":""},{default:r(()=>[t(ae,{id:"add-reg",color:"success",class:"f-left",label:"Agregar art\xEDculo",onClick:He}),t(ae,{color:"success",class:"f-left hidden",label:"Actualizar art\xEDculo",id:"btn-upd-reg",onClick:Ze}),t(ae,{color:"danger",class:"f-left hidden",label:"Cancelar",onClick:de,id:"btn-cancel-reg"})]),_:1})])]),_:1})])):le("",!0),t(he),f("div",null,[kl,f("span",null,[f("b",null,q(A(c).length),1)])]),a.tipo==1?(h(),j(cl,{key:2,arts:A(c)},null,8,["arts"])):le("",!0),a.tipo==5||a.tipo==6?(h(),j(ml,{key:3,campos:A(Me),arts:A(c)},null,8,["campos","arts"])):le("",!0)]),_:1},8,["onSubmit"]),t(ae,{label:"Guardar Promoci\xF3n",id:"btn_save",type:"submit",class:"mt-4 w-full",icon:A(dl),color:"success",onClick:$e},null,8,["icon"])]),_:1})]),_:1}))}};export{Ll as default};
