import{v as s,o as d,c as p,H as m,M as y,m as u,a as t,J as h,C as V,n as b}from"./index.eda8bd0e.js";const f=["type","name","value"],g=t("span",{class:"check"},null,-1),k={class:"pl-2"},S={__name:"FormCheckRadio",props:{name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},label:{type:String,default:null},modelValue:{type:[Array,String,Number,Boolean],default:null},inputValue:{type:[String,Number,Boolean],required:!0}},emits:["update:modelValue"],setup(e,{emit:i}){const l=e,a=s({get:()=>l.modelValue,set:n=>{i("update:modelValue",n)}}),r=s(()=>l.type==="radio"?"radio":"checkbox");return(n,o)=>(d(),p("label",{class:b(e.type)},[m(t("input",{"onUpdate:modelValue":o[0]||(o[0]=c=>h(a)?a.value=c:null),type:u(r),name:e.name,value:e.inputValue},null,8,f),[[y,u(a)]]),g,t("span",k,V(e.label),1)],2))}};export{S as _};
