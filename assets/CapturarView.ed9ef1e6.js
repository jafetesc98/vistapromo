import{b as E,v as ae,r as Pe,d as nt,e as st,f as B,w as d,N as ct,t as w,o as m,g as r,h as W,a as I,C as j,m as P,i as xe,j as Se,c as D,K as Me,F as Ue,D as v,O as Te,X as qe,ah as re,k as ut,l as de,p as it,Y as mt,ai as pt}from"./index.fa63ad44.js";import{_ as gt}from"./loading.16b03cf4.js";import{_ as we}from"./checked.4cad9791.js";import{_ as ee,R as bt,a as ft,b as vt,c as _t,d as yt,e as Et,f as Bt,g as It}from"./Accordion.68a01ca1.js";import{_ as Ct}from"./FormCheckRadioGroup.d9c82a79.js";import{_ as n}from"./FormField.f98f3e2b.js";import{_ as u}from"./FormControl.0758363c.js";import{_ as ht}from"./SectionTitleLine.2529a64a.js";import"./FormCheckRadio.91eb2f5a.js";const Vt=I("img",{src:gt,alt:"",class:"block mx-auto"},null,-1),At=I("img",{src:we,alt:"",class:"block mx-auto"},null,-1),kt=I("img",{src:It,alt:"",class:"block mx-auto"},null,-1),Pt=I("img",{src:we,alt:"",class:"block mx-auto"},null,-1),xt={id:"prov_list"},St=["value"],Mt={id:"ac_list"},Ut=["value"],Tt=I("label",null,"Art\xEDculos Capturados: ",-1),qt={key:1,class:"mt-6"},wt={key:0},Dt={key:1},$t={class:"mx-auto mt-8"},Nt=I("label",null,"Art\xEDculos Capturados: ",-1),Lt={key:0,class:"ml-60"},Yt={__name:"CapturarView",setup(Rt){const ne=it(),De=["ene","feb","mar","abr","may","jun","jul","ago","sep","ago","oct","nov","dic"],be=[{id:"001",label:"001"},{id:"002",label:"002"},{id:"003",label:"003"},{id:"012",label:"012"},{id:"013",label:"013"},{id:"015",label:"015"},{id:"024",label:"024"},{id:"-1",label:"Sucursal seleccionada"}],fe=[{id:1,label:"Promoci\xF3n De Precio",default:!0},{id:5,label:"Mercanc\xEDa sin Cargo"},{id:6,label:"Precio + Mercanc\xEDa sin Cargo"},{id:3,label:"Precio Especifico por Articulo"},{id:2,label:"Combo"}],ve=[{id:0,label:"Baja de precio",default:!0},{id:1,label:"Promoci\xF3n"}],$e=[{id:"CRED",label:"CR\xC9DITO"},{id:"CTDO",label:"CONTADO"},{id:"XCOB",label:"POR COBRAR"}],_e=[{id:1,label:"Paga Proveedor"},{id:2,label:"Paga MiniAbastos"},{id:3,label:"Pagan Ambos"}],$=[{id:"PZA",label:"PIEZA"},{id:"PAQ",label:"PAQUETE"},{id:"CJA",label:"CAJA"}],T=[{id:"",label:"SELECCIONE UNO"},{id:"BAS",label:"TARJETA BASICA"},{id:"CON",label:"CONSUMO TIENDA"},{id:"ESP",label:"CLIENTE ESPECIAL"},{id:"EXP",label:"CLIENTE CREDITO EXPO"},{id:"INA",label:"INAPAM"},{id:"MAY",label:"PRUEBA SEG MAY"},{id:"MIN",label:"MINORISTAS"},{id:"MUJ",label:"MUJER"},{id:"PRF",label:"TARJETA PREFERENCIAL"},{id:"PRM",label:"TARJETA PREMIUM"},{id:"PUB",label:"PUBLICO"},{id:"RUT",label:"VENTA EN RUTA"}],se=E(""),H=E(""),ce=E(""),N=E(""),F=E(""),c=ae(()=>te.value),ue=ae(()=>e),te=E([]);E([]);const e=Pe({nombre:"",tipo:fe[0].id,indicador:ve[0].id,proveedor:"",paga:_e[0].id,folioAcuerdo:"",limPzs:"",udsVenta:"",cantMin:"",montoMin:"",vigencia:"",fec_ini:"",fec_fin:"",aplicaSim:"",cliente:"",condPago:"",seg1:T[0].id,seg2:T[0].id,seg3:T[0].id,seg4:T[0].id,sucSelected:[],aplicaA:"",mostrador:null,retail:null,u_alta:"",precBase:be[1].id,arts:te,fac_min_reg:$[0].id,fac_min_compra:$[0].id,cobradas:1,regaladas:1,fac_min_regalo:1,cod_reg:"",cod_cob:"",boletin:"",cve:""});Pe({});const J=nt(),Ne=ae(()=>le.value),le=E({}),Z=ae(()=>z.value),z=E({}),_=E(!1),f=E(""),U=E(!1),K=E(!1),ye=()=>{};E(!0),E(0);async function Le(){var o=document.getElementById("seg1"),l=document.getElementById("seg2"),t=document.getElementById("seg3"),a=document.getElementById("seg4");o[0].disabled=!0,l[0].disabled=!0,t[0].disabled=!0,a[0].disabled=!0;let s=J.numComprador;return await fetch(w+"prov?compr="+s+"&usr="+J.nomCto).then(async function(b){if(b.ok)await b.json().then(p=>(le.value=p,X));else return console.log("Respuesta de red OK pero respuesta HTTP no OK"),{}}).catch(function(b){return console.log("Hubo un problema con la petici\xF3n Fetch:"+b.message),{}})}async function Ee(){let o=J.numComprador,l=e.proveedor.trim().split(" ");return l=l[0],await fetch(w+"acuerdos?compr="+o+"&prov="+l+"&usr="+J.nomCto).then(async function(t){if(t.ok)await t.json().then(a=>(z.value=a,X));else return console.log("Respuesta de red OK pero respuesta HTTP no OK"),{}}).catch(function(t){return console.log("Hubo un problema con la petici\xF3n Fetch:"+t.message),{}})}function Re(){let o=document.getElementById("acuerdo").value,l=0;for(let t=0;t<z.value.length;t++)z.value[t].Folio==o&&l++;l==0?(console.log("cuando no hay datos iguales"),acuerdo.setAttribute("enable",""),acuerdo.classList.add("ring","ring-red-500"),H.value="No se encontr\xF3 ning\xFAn acuerdo ligado a este proveedor"):(acuerdo.setAttribute("enable",""),acuerdo.classList.remove("ring","ring-red-500"),H.value="")}st(async()=>{await Le(),await Ee(),document.getElementById("acc_desc").click(),document.getElementById("acc_prov").click(),document.getElementById("acc_suc").click(),document.getElementById("acuerdo").addEventListener("blur",Re,!0);let l=document.getElementsByName("zona");for(let a=0;a<l.length;a++)l[a].addEventListener("change",Oe,!0);let t=document.querySelectorAll("[zona]");for(let a=0;a<t.length;a++)t[a].addEventListener("change",Fe,!0)});function Oe(o){switch(o.target.value){case"COSTA":e.precBase="013";break;case"ISTMO":e.precBase="024";break;case"VALLES":e.precBase="001";break;case"TODAS":e.precBase="001";break}}function Fe(o){document.getElementById("zona-valles");let l=document.getElementById("zona-costa"),t=document.getElementById("zona-istmo"),a=document.getElementById("zona-todas"),s=document.getElementById("zona-custom"),b=document.getElementById("suc_001"),p=document.getElementById("suc_013"),i=document.getElementById("suc_024");switch(document.getElementById("suc_003"),document.getElementById("suc_012"),document.getElementById("suc_015"),o.target.value){case"001":o.target.checked?e.precBase="001":p.checked?e.precBase="013":i.checked?e.precBase="024":e.precBase="003";break;case"013":o.target.checked?b.checked||(e.precBase="013"):l.checked?e.precBase="012":(s.checked||a.checked)&&(i.checked?e.precBase="024":e.precBase="003");break;case"024":o.target.checked?b.checked||(e.precBase="024"):t.checked&&(e.precBase="015");break;default:!o.target.checked&&!b.checked&&!p.checked&&!i.checked&&(a.checked||s.checked)&&(e.precBase="003");break}}var X={};function ze(){te.value=[],(e.tipo==5||e.tipo==6)&&(document.getElementById("cod_cob"),document.getElementById("art_reg")),e.tipo==6&&et(),(e.tipo==3||e.tipo==2)&&document.getElementById("cod_cob");var o=document.getElementById("mostrador"),l=document.getElementById("txtmost"),t=document.getElementById("retail"),a=document.getElementById("cod_cob");e.tipo==2||e.tipo==3||e.tipo==4?(console.log("entra condicion para deshabilitar mostrador"),l.style.opacity="0.5",o.style.opacity="0.5",o.disabled=!0,o.checked=!1,t.checked=!0,a.disabled=!1,je()):(l.style.opacity="1",o.style.opacity="1",o.disabled=!1,o.checked=!0,t.checked=!1)}function Ke(o){console.log(Z);for(let l=0;l<Z.value.length;l++)if(Z.value[l].Folio==o.target.value){e.boletin=Z.value[l].boletin;return}}function Y(o){return new Promise(l=>setTimeout(l,o))}function je(){let o=document.getElementById("suc_001"),l=document.getElementById("txt_001");o.style.opacity="0.5",l.style.opacity="0.5",o.disabled=!0,o.checked=!1;let t=document.getElementById("suc_002"),a=document.getElementById("txt_002");t.style.opacity="0.5",a.style.opacity="0.5",t.disabled=!0,t.checked=!1;let s=document.getElementById("suc_013"),b=document.getElementById("txt_013");s.style.opacity="0.5",b.style.opacity="0.5",s.disabled=!0,s.checked=!1;let p=document.getElementById("suc_024"),i=document.getElementById("txt_024");p.style.opacity="0.5",i.style.opacity="0.5",p.disabled=!0,p.checked=!1;let G=document.getElementById("suc_037"),S=document.getElementById("txt_037");G.style.opacity="0.5",S.style.opacity="0.5",G.disabled=!0,G.checked=!1;let h=document.getElementById("suc_051"),M=document.getElementById("txt_051");h.style.opacity="0.5",M.style.opacity="0.5",h.disabled=!0,h.checked=!1;let V=document.getElementById("suc_053"),g=document.getElementById("txt_053");V.style.opacity="0.5",g.style.opacity="0.5",V.disabled=!0,V.checked=!1;let y=document.getElementById("suc_057"),C=document.getElementById("txt_057");y.style.opacity="0.5",C.style.opacity="0.5",y.disabled=!0,y.checked=!1}E(!1);const q=E(!1),Be=E(!1);async function He(o){let l=document.getElementById("cliente").value;if(o.target.classList.remove("ring","ring-red-500"),ce.value="",l!="")return console.log("entra el else"),await fetch(w+"cliente?nCliente="+l).then(async function(t){if(t.ok)await t.json().then(a=>{z.value=a,console.log(a);var s=a.cve+"-"+a.nom;return document.getElementById("cliente").value=s,X});else return o.target.classList.add("ring","ring-red-500"),ce.value="El cliente no existe",console.log("Respuesta "),{}}).catch(function(t){return console.log("Hubo un problema con la petici\xF3n Fetch:"+t.message),{}})}async function oe(o){var l=document.getElementById("seg1"),t=document.getElementById("seg2"),a=document.getElementById("seg3"),s=document.getElementById("seg4"),b=document.getElementById("seg1").selectedIndex,p=document.getElementById("seg2").selectedIndex,i=document.getElementById("seg3").selectedIndex,G=document.getElementById("seg4").selectedIndex,S="",h="",M="",V="";if(b!=-1&&(S=l.options[document.getElementById("seg1").selectedIndex].value),p!=-1&&(h=t.options[document.getElementById("seg2").selectedIndex].value),i!=-1&&(M=a.options[document.getElementById("seg3").selectedIndex].value),G!=-1&&(V=s.options[document.getElementById("seg4").selectedIndex].value),o=="seg1"){for(var S=l.options[document.getElementById("seg1").selectedIndex].value,g=0;g<t.length;g++){var y=t[g],C=a[g],A=s[g];y.value==M||y.value==V?y.disabled=!0:y.disabled=!1,C.value==h||C.value==V?C.disabled=!0:C.disabled=!1,A.value==h||A.value==M?A.disabled=!0:A.disabled=!1}let R=t.querySelector(`option[value="${S}"]`);R.disabled=!0;let O=a.querySelector(`option[value="${S}"]`);O.disabled=!0;let dt=s.querySelector(`option[value="${S}"]`);dt.disabled=!0}if(o=="seg2"){for(var g=0;g<t.length;g++){var k=l[g],C=a[g],A=s[g];k.value==M||k.value==V?k.disabled=!0:k.disabled=!1,C.value==S||C.value==V?C.disabled=!0:C.disabled=!1,A.value==S||A.value==M?A.disabled=!0:A.disabled=!1}let Q=l.querySelector(`option[value="${h}"]`);Q.disabled=!0;let R=a.querySelector(`option[value="${h}"]`);R.disabled=!0;let O=s.querySelector(`option[value="${h}"]`);O.disabled=!0}if(o=="seg3"){for(var g=0;g<t.length;g++){var k=l[g],y=t[g],A=s[g];k.value==h||k.value==V?k.disabled=!0:k.disabled=!1,y.value==S||y.value==V?y.disabled=!0:y.disabled=!1,A.value==S||A.value==h?A.disabled=!0:A.disabled=!1}let Q=l.querySelector(`option[value="${M}"]`);Q.disabled=!0;let R=t.querySelector(`option[value="${M}"]`);R.disabled=!0;let O=s.querySelector(`option[value="${M}"]`);O.disabled=!0}if(o=="seg4"){for(var g=0;g<l.length;g++){var k=l[g],y=t[g],C=a[g];k.value==h||k.value==M?k.disabled=!0:k.disabled=!1,y.value==S||y.value==M?y.disabled=!0:y.disabled=!1,C.value==S||C.value==h?C.disabled=!0:C.disabled=!1}let Q=l.querySelector(`option[value="${V}"]`);Q.disabled=!0;let R=t.querySelector(`option[value="${V}"]`);R.disabled=!0;let O=a.querySelector(`option[value="${V}"]`);O.disabled=!0}l[0].disabled=!0,t[0].disabled=!0,a[0].disabled=!0,s[0].disabled=!0}function ie(o){window.open(w+"formato?idprom="+o,"_blank")}async function Je(){let o=document.querySelectorAll("[atr='requerido']");for(let i=0;i<o.length;i++)if(o[i].value==""||o[i].value==null){_.value=!0,f.value='El campo "'+o[i].name+'" no puede quedar vac\xEDo';return}let l=document.getElementById("idvig").value;if(l==""){_.value=!0,f.value='El campo "vigencia" no puede quedar vac\xEDo';return}let t=l.split("~");if(new Date(t[0]),new Date(t[1]),e.vigencia=l,e.fec_ini=Ie(t[0]),e.fec_fin=Ie(t[1]),c.value.length<1){_.value=!0,f.value="No captur\xF3 ning\xFAn art\xEDculo en la promoci\xF3n.";return}if(e.sucSelected=Ce(),e.sucSelected.length<1){_.value=!0,f.value="No seleccion\xF3 ninguna sucursal para aplicar la promoci\xF3n.";return}e.precBase=="-1"&&(e.precBase=e.sucSelected[0]);let a=document.getElementById("mostrador"),s=document.getElementById("retail");a.checked?e.mostrador=1:e.mostrador=0,s.checked?e.retail=1:e.retail=0,e.u_alta=J.nomCto;let b=e.proveedor.trim().split(" ");e.proveedor=b[0];let p={datos:e};if(console.log(p),(e.tipo==1||e.tipo==5||e.tipo==6)&&await me(w+"crea-prm",p).then(async i=>{ie(i.id+" "+e.tipo),console.log("respuesta post"),console.log(i),"error"in i?(console.log("Tiene errores"),f.value="Ocurri\xF3 un error al guardar. "+i.error,_.value=!0):(console.log("NO tiene errores"),q.value=!0,await Y(1500),q.value=!1,ne.push({path:"/vistapromo/mis-capturas"}))}),e.tipo==2)if(c.value[c.value.length-1].cobradas==1)await me(w+"crea-cmb",p).then(async i=>{ie(i.id+" "+e.tipo),console.log("respuesta post"),console.log(i),"error"in i?(console.log("Tiene errores"),f.value="Ocurri\xF3 un error al guardar. "+i.error,_.value=!0):(console.log("NO tiene errores"),q.value=!0,await Y(1500),q.value=!1,ne.push({path:"/vistapromo/mis-capturas"}))});else{_.value=!0,f.value="El \xFAltimo art\xEDculo agregado debe tener cantidad 1";return}(e.tipo==3||e.tipo==4)&&(console.log(c.value),await me(w+"crea-cmb",p).then(async i=>{ie(i.id+" "+e.tipo),console.log("respuesta post"),console.log(i),"error"in i?(console.log("Tiene errores"),f.value="Ocurri\xF3 un error al guardar. "+i.error,_.value=!0):(console.log("NO tiene errores"),q.value=!0,await Y(1500),q.value=!1,ne.push({path:"/vistapromo/mis-capturas"}))}))}function Ze(o){return o<10?"0"+(o+1):""+o}function Ie(o){o=o.trim();let l=o.split(" "),t=Ze(De.indexOf(l[1]+"")),a=l[2]+""+t+l[0];return console.log(a),a}async function me(o="",l={}){const t=await fetch(o,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(l)});return console.log(t),t.json()}function Ce(){let o=[],l=document.getElementsByClassName("sucursal");for(let t=0;t<l.length;t++)l[t].checked&&o.push(l[t].value);return o}async function Xe(o){e.proveedor,te.value=[],o.target.classList.remove("ring","ring-red-500"),se.value="";let l=!1,t=document.getElementById("acuerdo");e.folioAcuerdo="",t.removeAttribute("disabled"),t.classList.remove("ring","ring-red-500"),H.value="";for(let a=0;a<le.value.length;a++)if(le.value[a].proveedor==e.proveedor.trim().split(" ")[0]){l=!0;break}l||(o.target.classList.add("ring","ring-red-500"),se.value="Proveedor no existe o no est\xE1 ligado a su usuario"),await Ee(),z.value.length==0&&(t.setAttribute("disabled",""),t.classList.add("ring","ring-red-500"),H.value="No se encontr\xF3 ning\xFAn acuerdo ligado a este proveedor")}async function he(o){o.target.id=="cod_cob"?(console.log("Fue el cobrado"),document.getElementById("desc_art_cob")):document.getElementById("desc_art_reg");let l=o.target.value;document.getElementById("sucbase").value,e.sucSelected=Ce(),e.precBase=="-1"&&(e.precBase=e.sucSelected[0],console.log("antes de consultar",e.precBase,e.sucSelected[0]));let t;e.tipo==2?t="N":t=document.getElementById("prov").value.slice(0,9);var a=document.getElementById("emp_cob"),s=a.options[document.getElementById("emp_cob").selectedIndex].value;s.length==0&&(s=""),await Ye(l,e.precBase,t,s,o.target)}async function Ye(o,l,t,a,s){U.value=!0,fetch(w+"art?art="+o+"&suc="+l+"&prov="+t+"&empaque="+a).then(function(b){U.value=!1,b.ok?b.json().then(p=>{X=p,s.value=o,s.id=="cod_cob"&&e.tipo==3||e.tipo==2?(N.value="",document.getElementById("desc_art_cob").value=p.des1,document.getElementById("desc_art_reg").value=p.precio_vta0):(console.log(X),(s.id=="cod_cob"&&e.tipo==5||e.tipo==6)&&(N.value="",document.getElementById("desc_art_cob").value=p.des1),(s.id=="art_reg"&&e.tipo==5||e.tipo==6)&&(console.log("entra la condicion que sea de tipo 6 "),F.value="",document.getElementById("desc_art_reg").value=p.des1))}):(b.json().then(async p=>{f.value=p.message,K.value=!0,await Y(1500),K.value=!1,s.id=="cod_cob"?(document.getElementById("cod_cob").focus(),N.value=p.message):F.value=p.message}),console.log("Respuesta de red OK pero respuesta HTTP no OK"))}).catch(function(b){console.log("Hubo un problema con la petici\xF3n Fetch:"+b.message),s.value=o})}function pe(o){console.log(c.value,"artscapturados");for(let l=0;l<c.value.length;l++)if(c.value[l].cve==o)return!0;return!1}async function x(o,l){U.value=!1,f.value=o,K.value=!0,l.target.removeAttribute("disabled"),await Y(1500),K.value=!1}async function Ge(o){if(console.log("inicia el metodo"),e.tipo==5||e.tipo==6){if(o.target.setAttribute("disabled",!0),U.value=!0,N.value!=""||F.value!="")return console.log("tiene errores en campos de regalo"),x("El c\xF3digo capturado no existe, o no corresponde al proveedor seleccionado",o);if(pe(e.cve))return console.log("Esta duplicada"),x("El art\xEDculo ya est\xE1 capturado",o);if(e.tipo==6){let t=document.getElementById("cod_cob");if(console.log(t.value,"codigo cobrado"),t.value==null)return console.log("el tipo de proo6 detono la promo"),x("El c\xF3digo capturado no existe, o no corresponde al proveedor seleccionado",o);e.cve=t.value.trim(),e.des1=document.getElementById("desc_art_cob").value}let l={};if(l.cve=e.cve,l.cod_reg=e.cod_reg,l.cobradas=e.cobradas,l.regaladas=e.regaladas,l.emp_cob=e.fac_min_compra,l.emp_reg=e.fac_min_reg,l.des1=document.getElementById("desc_art_cob").value,l.desc_reg=document.getElementById("desc_art_reg").value,l.fac_min_reg=e.fac_min_regalo,l.cve==""||l.cve==null||l.cod_reg==""||l.cod_reg==null||l.regaladas==""||l.regaladas==null||l.cobradas==""||l.cobradas==null||l.emp_cob==""||l.emp_cob==null||l.emp_reg==""||l.emp_reg==null||l.des1==""||l.des1==null||l.desc_reg==""||l.desc_reg==null||l.fac_min_reg==""||l.fac_min_reg==null)return x("Debe capturar todos los campos requeridos",o);e.tipo==6&&(document.getElementById("desc_art").textContent="",document.getElementById("inputConsultar").value="",document.getElementById("cod_cob").value="",l=Qe(l)),c.value.push(l),U.value=!1,o.target.removeAttribute("disabled"),console.log(c.value),L(),e.tipo==6&&ke(),console.log(l)}if(e.tipo==3){let l=document.getElementById("cobradas").value;if(console.log(l),l<=1){_.value=!0,f.value="Debe de capturar una cantidad mayor a 1";return}if(document.getElementById("regaladas").value<=1){_.value=!0,f.value="Debe de capturar un precio mayor a $1";return}if(o.target.setAttribute("disabled",!0),U.value=!0,N.value!=""||F.value!="")return x("El c\xF3digo capturado no existe, o no corresponde al proveedor seleccionado",o);if(pe(e.cve))return x("El art\xEDculo ya est\xE1 capturado",o);let a={};if(a.cve=e.cve,a.cod_reg=e.cod_reg,a.cobradas=e.cobradas,a.regaladas=e.regaladas,a.emp_cob=e.fac_min_compra,a.emp_reg=e.fac_min_reg,a.des1=document.getElementById("desc_art_cob").value,a.desc_reg=document.getElementById("desc_art_reg").value,a.fac_min_reg=e.fac_min_regalo,a.regaladas==""||a.regaladas==null||a.cobradas==""||a.cobradas==null||a.emp_cob==""||a.emp_cob==null||a.des1==""||a.des1==null||a.desc_reg==""||a.desc_reg==null)return x("Debe capturar todos los campos requeridos",o);c.value.push(a),U.value=!1,o.target.removeAttribute("disabled"),L()}if(e.tipo==2||e.tipo==4){let l=document.getElementById("cobradas").value;if(console.log(l),l<1){_.value=!0,f.value="Debe de capturar una cantidad mayor a 0";return}if(document.getElementById("regaladas").value<=1){_.value=!0,f.value="Debe de capturar un precio mayor a $1";return}if(o.target.setAttribute("disabled",!0),U.value=!0,N.value!=""||F.value!="")return x("El c\xF3digo capturado no existe, o no corresponde al proveedor seleccionado",o);if(pe(e.cve))return x("El art\xEDculo ya est\xE1 capturado",o);let a={};if(a.cve=e.cve,a.cod_reg=e.cod_reg,a.cobradas=e.cobradas,a.regaladas=e.regaladas,a.emp_cob=e.fac_min_compra,a.emp_reg=e.fac_min_reg,a.des1=document.getElementById("desc_art_cob").value,a.desc_reg=document.getElementById("desc_art_reg").value,a.fac_min_reg=e.fac_min_regalo,a.regaladas==""||a.regaladas==null||a.cobradas==""||a.cobradas==null||a.emp_cob==""||a.emp_cob==null||a.des1==""||a.des1==null||a.desc_reg==""||a.desc_reg==null)return x("Debe capturar todos los campos requeridos",o);c.value.push(a),U.value=!1,o.target.removeAttribute("disabled"),L(),Ve(c.value)}}function Ve(o){console.log(o);let l=0;for(let a=0;a<o.length;a++)l+=o[a].cobradas*o[a].regaladas;let t=document.getElementById("totalCombo");console.log(l),t.innerText="$"+l.toFixed(2)}function Qe(o){let l=document.getElementById("pre_prom1").value,t=document.getElementById("pre_prom2").value,a=document.getElementById("pre_prom3").value,s=document.getElementById("pre_prom4").value,b=document.getElementById("pre_prom5").value;return o.precio1=l,o.precio2=t,o.precio3=a,o.precio4=s,o.precio5=b,o}const Ae=function(o){var l=[".","-","+","e","ArrowDown","ArrowUp"];l.includes(o.key)&&o.preventDefault()};function L(){e.fac_min_reg=$[0].id,e.fac_min_compra=$[0].id,e.cobradas=1,e.regaladas=1,e.fac_min_regalo=1,e.cod_reg="",e.cod_cob="",e.cve="",document.getElementById("desc_art_cob").value="",document.getElementById("desc_art_reg").value="",document.getElementById("btn-upd-reg").classList.add("hidden"),document.getElementById("btn-cancel-reg").classList.add("hidden"),document.getElementById("add-reg").classList.remove("hidden"),e.tipo==6&&(console.log("deberia ser de hibirda"),ke(),document.getElementById("desc_art").textContent="",document.getElementById("inputConsultar").value="")}function We(){if(e.tipo==5||e.tipo==6){let o={};if(o.cod_cob=e.cod_cob,o.cve=e.cve,o.cod_reg=e.cod_reg,o.cobradas=e.cobradas,o.regaladas=e.regaladas,o.emp_cob=e.fac_min_compra,o.emp_reg=e.fac_min_reg,o.desc_cob=document.getElementById("desc_art_cob").value,o.des1=document.getElementById("desc_art_cob").value,o.desc_reg=document.getElementById("desc_art_reg").value,o.fac_min_reg=e.fac_min_regalo,console.log(o.desc_reg,o.desc_cob,"descripciones"),o.cve==""||o.cve==null||o.cod_reg==""||o.cod_reg==null||o.regaladas==""||o.regaladas==null||o.cobradas==""||o.cobradas==null||o.emp_cob==""||o.emp_cob==null||o.emp_reg==""||o.emp_reg==null||o.desc_cob==""||o.desc_cob==null||o.desc_reg==""||o.desc_reg==null||o.fac_min_reg==""||o.fac_min_reg==null)return x("Debe capturar todos los campos requeridos",event);console.log("art modificado",c.value);let l=document.getElementById("cod_cob").getAttribute("data-label"),t=ge(l);c.value[t],c.value[t]=o,e.tipo==6&&tt(t),document.getElementById("btn-upd-reg").classList.add("hidden"),document.getElementById("btn-cancel-reg").classList.add("hidden"),document.getElementById("add-reg").classList.remove("hidden"),L()}if(e.tipo==3){let o=document.getElementById("cobradas").value;if(console.log(o),o<=1){_.value=!0,f.value="Debe de capturar una cantidad mayor a 1";return}if(document.getElementById("regaladas").value<=1){_.value=!0,f.value="Debe de capturar un precio mayor a $1";return}let t={};if(t.cod_cob=e.cod_cob,t.cve=e.cve,t.cod_reg=e.cod_reg,t.cobradas=e.cobradas,t.regaladas=e.regaladas,t.emp_cob=e.fac_min_compra,t.emp_reg=e.fac_min_reg,t.desc_cob=document.getElementById("desc_art_cob").value,t.des1=document.getElementById("desc_art_cob").value,t.desc_reg=document.getElementById("desc_art_reg").value,t.fac_min_reg=e.fac_min_regalo,t.regaladas==""||t.regaladas==null||t.cobradas==""||t.cobradas==null||t.emp_cob==""||t.emp_cob==null||t.des1==""||t.des1==null||t.desc_reg==""||t.desc_reg==null)return x("Debe capturar todos los campos requeridos",event);let a=document.getElementById("cod_cob").getAttribute("data-label"),s=ge(a);c.value[s],c.value[s]=t,console.log(t),document.getElementById("btn-upd-reg").classList.add("hidden"),document.getElementById("btn-cancel-reg").classList.add("hidden"),document.getElementById("add-reg").classList.remove("hidden"),L()}if(e.tipo==2){if(document.getElementById("cobradas").value<1){_.value=!0,f.value="Debe de capturar una cantidad mayor a 1";return}if(document.getElementById("regaladas").value<=1){_.value=!0,f.value="Debe de capturar un precio mayor a $1";return}let t={};if(t.cod_cob=e.cod_cob,t.cve=e.cve,t.cod_reg=e.cod_reg,t.cobradas=e.cobradas,t.regaladas=e.regaladas,t.emp_cob=e.fac_min_compra,t.emp_reg=e.fac_min_reg,t.desc_cob=document.getElementById("desc_art_cob").value,t.des1=document.getElementById("desc_art_cob").value,t.desc_reg=document.getElementById("desc_art_reg").value,t.fac_min_reg=e.fac_min_regalo,t.regaladas==""||t.regaladas==null||t.cobradas==""||t.cobradas==null||t.emp_cob==""||t.emp_cob==null||t.des1==""||t.des1==null||t.desc_reg==""||t.desc_reg==null)return x("Debe capturar todos los campos requeridos",event);let a=document.getElementById("cod_cob").getAttribute("data-label"),s=ge(a);c.value[s],c.value[s]=t,console.log("se actualizo el articulo",t),document.getElementById("btn-upd-reg").classList.add("hidden"),document.getElementById("btn-cancel-reg").classList.add("hidden"),document.getElementById("add-reg").classList.remove("hidden"),L(),Ve(c.value)}}function ge(o){for(let l=0;l<c.value.length;l++)if(c.value[l].cve==o)return l;return-1}function et(){let o=document.getElementById("cod_cob");o.setAttribute("disabled",!0),o.classList.add("disabled:opacity-75"),document.getElementById("btn_add").classList.add("hidden")}function ke(){for(let o=1;o<6;o++){let l=document.getElementById("precio"+o);l.textContent="";let t=document.getElementById("pre_prom"+o);t.classList.remove("ring","ring-red-500"),t.value="";let a=document.getElementById("emp"+o);a.textContent="";let s=document.getElementById("porcen_prom"+o);s.classList.remove("ring","ring-red-500"),s.value="",document.getElementById("dif"+o).textContent=""}}function tt(o){c.value[o].precio1=document.getElementById("pre_prom1").value,c.value[o].precio2=document.getElementById("pre_prom2").value,c.value[o].precio3=document.getElementById("pre_prom3").value,c.value[o].precio4=document.getElementById("pre_prom4").value,c.value[o].precio5=document.getElementById("pre_prom5").value}const lt=function(o){let l=document.getElementById("regaladas");(e.tipo==2||e.tipo==3)&&(l.focus(),l.select()),(e.tipo==5||e.tipo==6)&&(l.focus(),l.select()),he(o)},ot=function(o){he(o)},at=function(o){document.getElementById("emp_reg").focus()},rt=function(o){document.getElementById("cod_cob").focus()};return(o,l)=>(m(),B(ct,null,{default:d(()=>[r(W,{hasFooter:!1,modelValue:U.value,"onUpdate:modelValue":l[0]||(l[0]=t=>U.value=t),blocked:!0,title:"Cargando la informaci\xF3n"},{default:d(()=>[Vt]),_:1},8,["modelValue"]),r(W,{modelValue:_.value,"onUpdate:modelValue":l[1]||(l[1]=t=>_.value=t),title:"No se pudo guardar la promoci\xF3n",button:"secondary",hasButton:""},{default:d(()=>[I("p",null,j(f.value),1)]),_:1},8,["modelValue"]),r(W,{hasFooter:!1,modelValue:q.value,"onUpdate:modelValue":l[2]||(l[2]=t=>q.value=t),title:"Promoci\xF3n creada correctamente",blocked:!0},{default:d(()=>[At]),_:1},8,["modelValue"]),r(W,{modelValue:K.value,"onUpdate:modelValue":l[3]||(l[3]=t=>K.value=t),title:"Error al capturar el art\xEDculo",hasFooter:!1,titleClass:"mx-auto mb-3",blocked:!0},{default:d(()=>[kt,I("p",null,j(f.value),1)]),_:1},8,["modelValue"]),r(W,{hasFooter:!1,modelValue:Be.value,"onUpdate:modelValue":l[4]||(l[4]=t=>Be.value=t),title:"Art\xEDculo agregado",blocked:!0},{default:d(()=>[Pt]),_:1},8,["modelValue"]),r(Te,{id:"sect"},{default:d(()=>[r(ht,{icon:P(mt),title:"Capturar nueva Promoci\xF3n/Combo",main:""},null,8,["icon"]),r(xe,{form:"",onSubmit:Se(ye,["prevent"])},{default:d(()=>[r(ee,{label:"Descripci\xF3n y Tipo",id:"acc_desc"},{default:d(()=>[r(n,null,{default:d(()=>[r(n,null,{default:d(()=>[r(n,null,{default:d(()=>[r(n,{label:"Nombre de la promoci\xF3n*"},{default:d(()=>[r(u,{type:"text",modelValue:e.nombre,"onUpdate:modelValue":l[5]||(l[5]=t=>e.nombre=t),attrr:"requerido",name:"nombre",id:"nom",required:"",placeholder:"Nombre de la promoci\xF3n*",otherClasses:"uppercase"},null,8,["modelValue"])]),_:1}),r(n,null,{default:d(()=>[r(n,null,{default:d(()=>[r(n,{label:"Tipo de promoci\xF3n*"},{default:d(()=>[(m(),B(u,{modelValue:e.tipo,"onUpdate:modelValue":l[6]||(l[6]=t=>e.tipo=t),options:fe,key:o.prueba,attrr:"requerido",required:"",onChange:ze,name:"tipo",title:"Tipo De Promoci\xF3n*",otherClasses:"campo",id:"tipo"},null,8,["modelValue"]))]),_:1})]),_:1})]),_:1}),r(n,null,{default:d(()=>[r(n,{label:"Tipo de indicador*"},{default:d(()=>[r(u,{modelValue:e.indicador,"onUpdate:modelValue":l[7]||(l[7]=t=>e.indicador=t),options:ve,attrr:"requerido",required:"",name:"indicador",title:"Tipo De Indicador*",otherClasses:"campo"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e.tipo==1||e.tipo==5||e.tipo==6||e.tipo==3?(m(),B(ee,{key:0,label:"Proveedor y Acuerdo",id:"acc_prov"},{default:d(()=>[r(n,null,{default:d(()=>[r(n,null,{default:d(()=>[r(n,{label:"Num Proveedor:*"},{default:d(()=>[r(u,{type:"text",id:"prov",modelValue:e.proveedor,"onUpdate:modelValue":l[8]||(l[8]=t=>e.proveedor=t),attrr:"requerido",name:"proveedor",otherClasses:"campo",placeholder:"N\xFAmero de Proveedor*",required:"",errorMsg:se.value,onChange:Xe,multiple:"",list:"prov_list"},null,8,["modelValue","errorMsg"])]),_:1}),r(n,null,{default:d(()=>[r(n,{label:"Paga:*"},{default:d(()=>[r(u,{options:_e,modelValue:e.paga,"onUpdate:modelValue":l[9]||(l[9]=t=>e.paga=t),required:"",attrr:"requerido",name:"paga",otherClasses:"campo"},null,8,["modelValue"])]),_:1}),r(n,{label:"Folio Acuerdo:*"},{default:d(()=>[r(u,{type:"text",id:"acuerdo",multiple:"",list:"ac_list",required:"",attrr:"requerido",name:"folioAcuerdo",otherClasses:"campo",onChange:Ke,modelValue:e.folioAcuerdo,"onUpdate:modelValue":l[10]||(l[10]=t=>e.folioAcuerdo=t),errorMsg:H.value,placeholder:"Folio de Acuerdo"},null,8,["modelValue","errorMsg"])]),_:1}),r(n,{label:"Bolet\xEDn:"},{default:d(()=>[r(u,{type:"text",modelValue:e.boletin,"onUpdate:modelValue":l[11]||(l[11]=t=>e.boletin=t),disabled:"",placeholder:"Bolet\xEDn",id:"boletin"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),I("datalist",xt,[(m(!0),D(Ue,null,Me(P(Ne),t=>(m(),D("option",{key:t.proveedor,value:t.proveedor+" - "+t.nom},j(t.proveedor),9,St))),128))]),I("datalist",Mt,[(m(!0),D(Ue,null,Me(P(Z),t=>(m(),D("option",{key:t.folio,value:t.Folio},j(t.Folio),9,Ut))),128))])]),_:1})):v("",!0),r(ee,{label:"Restricciones",id:"acc_restric"},{default:d(()=>[r(n,{otherClasses:""},{default:d(()=>[r(n,{label:"Limitado a:"},{default:d(()=>[r(u,{type:"number",modelValue:e.limPzs,"onUpdate:modelValue":l[12]||(l[12]=t=>e.limPzs=t),name:"limPzs",otherClasses:"campo",placeholder:"Piezas"},null,8,["modelValue"])]),_:1}),r(n,{label:"Unidades por venta:"},{default:d(()=>[r(u,{type:"number",modelValue:e.udsVenta,"onUpdate:modelValue":l[13]||(l[13]=t=>e.udsVenta=t),name:"udsVenta",otherClasses:"campo",placeholder:"PZAS"},null,8,["modelValue"])]),_:1}),e.tipo==1||e.tipo==5||e.tipo==6?(m(),B(n,{key:0,label:"Cantidad m\xEDnima:"},{default:d(()=>[r(u,{type:"number",modelValue:e.cantMin,"onUpdate:modelValue":l[14]||(l[14]=t=>e.cantMin=t),name:"cantMin",otherClasses:"campo",placeholder:"PZS"},null,8,["modelValue"])]),_:1})):v("",!0),e.tipo==1||e.tipo==5||e.tipo==6?(m(),B(n,{key:1,label:"Monto compra m\xEDnima:"},{default:d(()=>[r(u,{type:"number",modelValue:e.montoMin,"onUpdate:modelValue":l[15]||(l[15]=t=>e.montoMin=t),name:"montoMin",otherClasses:"campo",placeholder:"$0.00"},null,8,["modelValue"])]),_:1})):v("",!0)]),_:1})]),_:1}),r(n,{otherClasses:"mt-3 mb-6 mx-3",label:"Vigencia*"},{default:d(()=>[r(bt,{idDate:"idvig"}),r(Ct,{class:"ml-3",attrr:"requerido",otherClasses:"campo",modelValue:e.aplicaSim,"onUpdate:modelValue":l[16]||(l[16]=t=>e.aplicaSim=t),name:"similares",type:"switch",options:{one:"Aplica similares"}},null,8,["modelValue"])]),_:1}),r(ee,{label:"Cliente y Pago",id:"acc_cli"},{default:d(()=>[r(n,null,{default:d(()=>[r(n,{label:"Cliente:"},{default:d(()=>[r(u,{type:"text",modelValue:e.cliente,"onUpdate:modelValue":l[17]||(l[17]=t=>e.cliente=t),onChange:He,placeholder:"N\xFAmero de Cliente",id:"cliente",errorMsg:ce.value},null,8,["modelValue","errorMsg"])]),_:1}),r(n,{label:"Condici\xF3n de Pago:"},{default:d(()=>[r(u,{options:$e,modelValue:e.condPago,"onUpdate:modelValue":l[18]||(l[18]=t=>e.condPago=t)},null,8,["modelValue"])]),_:1})]),_:1}),r(n,{label:"Segmentos de Mercado:",otherClasses:"mt-3"},{default:d(()=>[r(u,{modelValue:e.seg1,"onUpdate:modelValue":l[19]||(l[19]=t=>e.seg1=t),options:T,name:"seg1",id:"seg1",onChange:l[20]||(l[20]=t=>oe("seg1")),title:"Segmento 1 mercado",otherClasses:"campo"},null,8,["modelValue"]),r(u,{modelValue:e.seg2,"onUpdate:modelValue":l[21]||(l[21]=t=>e.seg2=t),options:T,name:"seg2",id:"seg2",onChange:l[22]||(l[22]=t=>oe("seg2")),title:"Segmento 2 mercado",otherClasses:"campo"},null,8,["modelValue"]),r(u,{modelValue:e.seg3,"onUpdate:modelValue":l[23]||(l[23]=t=>e.seg3=t),options:T,name:"seg3",id:"seg3",onChange:l[24]||(l[24]=t=>oe("seg3")),title:"Segmento 3 mercado",otherClasses:"campo"},null,8,["modelValue"]),r(u,{modelValue:e.seg4,"onUpdate:modelValue":l[25]||(l[25]=t=>e.seg4=t),options:T,name:"seg4",id:"seg4",onChange:l[26]||(l[26]=t=>oe("seg4")),title:"Segmento 4 mercado",otherClasses:"campo"},null,8,["modelValue"])]),_:1})]),_:1}),r(ee,{label:"Aplica para:*",id:"acc_suc"},{default:d(()=>[r(n,null,{default:d(()=>[r(ft,{sucBase:e.precBase},null,8,["sucBase"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}),r(Te,{class:"pt-0"},{default:d(()=>[r(xe,{CardBox:"",form:"",onSubmit:Se(ye,["prevent"])},{footer:d(()=>[]),default:d(()=>[r(n,{label:"Art\xEDculos"},{default:d(()=>[r(n,{label:"Precios seg\xFAn:"},{default:d(()=>[r(u,{options:be,modelValue:e.precBase,"onUpdate:modelValue":l[27]||(l[27]=t=>e.precBase=t),id:"sucbase",name:"forzado",title:"Precios seg\xFAn: ",placeholder:"Precios seg\xFAn:"},null,8,["modelValue"])]),_:1}),I("div",null,[Tt,I("span",null,[I("b",null,j(P(c).length),1)])])]),_:1}),r(qe),e.tipo==1||e.tipo==6?(m(),B(vt,{key:0,arts:P(c)},null,8,["arts"])):v("",!0),e.tipo==5||e.tipo==6||e.tipo==3||e.tipo==4||e.tipo==2?(m(),D("div",qt,[r(n,null,{default:d(()=>[r(n,{label:"Comprando:*"},{default:d(()=>[r(u,{modelValue:e.cobradas,"onUpdate:modelValue":l[28]||(l[28]=t=>e.cobradas=t),type:"number",onKeydown:Ae,name:"cobradas",otherClasses:"campo",id:"cobradas",onKeyup:re(rt,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e.tipo==5||e.tipo==6?(m(),D("div",wt,[r(n,{label:"Emp:*"},{default:d(()=>[r(u,{options:$,modelValue:e.fac_min_compra,"onUpdate:modelValue":l[29]||(l[29]=t=>e.fac_min_compra=t),id:"emp_cob",name:"emp_cob",otherClasses:"campo"},null,8,["modelValue"])]),_:1})])):v("",!0),e.tipo==2||e.tipo==3||e.tipo==4?(m(),D("div",Dt,[r(n,{label:"Emp:*"},{default:d(()=>[r(u,{options:$,modelValue:e.fac_min_compra,"onUpdate:modelValue":l[30]||(l[30]=t=>e.fac_min_compra=t),id:"emp_cob",name:"emp_cob",otherClasses:"campo",disabled:""},null,8,["modelValue"])]),_:1})])):v("",!0),r(n,{label:"Del C\xF3digo:*"},{default:d(()=>[r(u,{type:"text",id:"cod_cob",modelValue:e.cve,"onUpdate:modelValue":l[31]||(l[31]=t=>e.cve=t),onKeyup:re(lt,["enter"]),name:"cod_cob",otherClasses:"campo",errorMsg:N.value},null,8,["modelValue","onKeyup","errorMsg"])]),_:1}),r(n,{label:"Descripci\xF3n"},{default:d(()=>[r(u,{type:"text",disabled:"",id:"desc_art_cob"})]),_:1})]),_:1}),r(n,{class:"mt-4"},{default:d(()=>[e.tipo==3||e.tipo==4||e.tipo==2?(m(),B(n,{key:0,label:"Precio Art:"},{default:d(()=>[r(u,{type:"text",disabled:"",id:"desc_art_reg"})]),_:1})):v("",!0),e.tipo==3?(m(),B(n,{key:1,label:"Precio del Combo: $*"},{default:d(()=>[r(u,{modelValue:e.regaladas,"onUpdate:modelValue":l[32]||(l[32]=t=>e.regaladas=t),type:"number",id:"regaladas",name:"regaladas",otherClasses:"campo"},null,8,["modelValue"])]),_:1})):v("",!0),e.tipo==4||e.tipo==2?(m(),B(n,{key:2,label:"Precio del Articulo: $*"},{default:d(()=>[r(u,{modelValue:e.regaladas,"onUpdate:modelValue":l[33]||(l[33]=t=>e.regaladas=t),type:"number",id:"regaladas",name:"regaladas",otherClasses:"campo"},null,8,["modelValue"])]),_:1})):v("",!0),e.tipo==1||e.tipo==5||e.tipo==6?(m(),B(n,{key:3,label:"Se regalan:*"},{default:d(()=>[r(u,{modelValue:e.regaladas,"onUpdate:modelValue":l[34]||(l[34]=t=>e.regaladas=t),type:"number",onKeydown:Ae,id:"regaladas",onKeyup:re(at,["enter"]),name:"regaladas",otherClasses:"campo"},null,8,["modelValue","onKeyup"])]),_:1})):v("",!0),e.tipo==1||e.tipo==5||e.tipo==6?(m(),B(n,{key:4,label:"Emp:*"},{default:d(()=>[r(u,{options:$,modelValue:e.fac_min_reg,"onUpdate:modelValue":l[35]||(l[35]=t=>e.fac_min_reg=t),id:"emp_reg",name:"emp_reg",otherClasses:"campo"},null,8,["modelValue"])]),_:1})):v("",!0),e.tipo==1||e.tipo==5||e.tipo==6?(m(),B(n,{key:5,label:"Del C\xF3digo:*"},{default:d(()=>[r(u,{type:"text",id:"art_reg",modelValue:e.cod_reg,"onUpdate:modelValue":l[36]||(l[36]=t=>e.cod_reg=t),onKeyup:re(ot,["enter"]),name:"art_reg",otherClasses:"campo",errorMsg:F.value},null,8,["modelValue","onKeyup","errorMsg"])]),_:1})):v("",!0),e.tipo==1||e.tipo==5||e.tipo==6?(m(),B(n,{key:6,label:"De Regalo"},{default:d(()=>[r(u,{type:"text",disabled:"",id:"desc_art_reg"})]),_:1})):v("",!0),e.tipo==1||e.tipo==5||e.tipo==6?(m(),B(n,{key:7,label:"Fac Min Reg",help:"ATENCI\xD3N: Se recomienda no modificar este valor"},{default:d(()=>[r(u,{type:"number",modelValue:e.fac_min_regalo,"onUpdate:modelValue":l[37]||(l[37]=t=>e.fac_min_regalo=t),placeholder:"1",id:"fac_min_reg"},null,8,["modelValue"])]),_:1})):v("",!0),I("div",$t,[r(ut,{type:"justify-start lg:justify-end","no-wrap":""},{default:d(()=>[r(de,{id:"add-reg",color:"success",class:"f-left",label:"Agregar art\xEDculo",onClick:Ge}),r(de,{color:"success",class:"f-left hidden",label:"Actualizar art\xEDculo",id:"btn-upd-reg",onClick:We}),r(de,{color:"danger",class:"f-left hidden",label:"Cancelar",onClick:L,id:"btn-cancel-reg"})]),_:1})])]),_:1})])):v("",!0),r(qe),I("div",null,[Nt,I("span",null,[I("b",null,j(P(c).length),1)]),e.tipo==2?(m(),D("label",Lt,"Recuarda ingresar el \xFAltimo art\xEDculo del combo con cantidad 1 ")):v("",!0)]),e.tipo==1?(m(),B(_t,{key:2,arts:P(c)},null,8,["arts"])):v("",!0),e.tipo==5||e.tipo==6?(m(),B(yt,{key:3,campos:P(ue),arts:P(c)},null,8,["campos","arts"])):v("",!0),e.tipo==3?(m(),B(Et,{key:4,campos:P(ue),arts:P(c)},null,8,["campos","arts"])):v("",!0),e.tipo==4||e.tipo==2?(m(),B(Bt,{key:5,campos:P(ue),arts:P(c)},null,8,["campos","arts"])):v("",!0)]),_:1},8,["onSubmit"]),r(de,{label:"Guardar Promoci\xF3n",id:"btn_save",type:"submit",class:"mt-4 w-full",icon:P(pt),color:"success",onClick:Je},null,8,["icon"])]),_:1})]),_:1}))}};export{Yt as default};
