const a=async function(n="",t={}){return await fetch(n).catch(function(e){return console.log("Hubo un problema con la petici\xF3n Fetch:"+e.message),null})};export{a as g};
