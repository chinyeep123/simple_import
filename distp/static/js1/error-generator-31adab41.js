import{o as g}from"./_element-plus-37671e98.js";import{u as x}from"../js2/app-485f8aa4.js";import{j as y,r as c,o as l,c as d,E as r,a4 as t,L as w,a as s,a7 as e}from"./_@vue-37f9eba6.js";import"./__vendor-1966d9c6.js";import"./_@element-plus-51f61cc2.js";const v={class:"scroll-y"},k=s("div",{class:"mt-20px mb-5px font-bold"},"throw unhandledrejection",-1),C=s("div",{class:"mt-20px mb-5px font-bold"},"throw console.error",-1),E=s("div",{class:"mt-20px mb-5px font-bold"},"throw normalError",-1),q=s("div",{class:"mt-20px mb-5px font-bold"},"throw req cross origin",-1),B=s("div",{class:"mt-20px mb-5px font-bold"},"throw req 404 error",-1),L=s("div",{class:"mt-20px mb-5px font-bold"},"throw image load error",-1),j={key:0,src:"http://img.png"},z={__name:"error-generator",setup(N){const m=x();y(()=>m.settings||{});const p=()=>{new Promise((n,i)=>{i("reject promise")}).then(n=>{console.log("ok")})};c(null);const u=()=>{console.error("console.error")},_=()=>{throw new Error(` throw new Error("")
`)},h=()=>{axiosReq({baseURL:"https://github.jzfai.top/micro-service-test",url:"/integration-front/brand/updateBy",data:{id:"fai"},method:"put",isParams:!0,bfLoading:!0}).then(()=>{})},f=()=>{axiosReq({url:"/integration-front/brand/updateBy1",data:{id:"fai"},method:"put",isParams:!0,bfLoading:!0}).then(n=>{})},a=c(!1),b=()=>{a.value=!a.value};return(n,i)=>{const o=g;return l(),d("div",v,[k,r(o,{type:"primary",onClick:p},{default:t(()=>[e("unhandledrejection")]),_:1}),C,r(o,{type:"primary",onClick:u},{default:t(()=>[e("console.error")]),_:1}),E,r(o,{type:"primary",onClick:_},{default:t(()=>[e("normalError")]),_:1}),q,r(o,{type:"primary",onClick:h},{default:t(()=>[e("reqCrossOrigin")]),_:1}),B,r(o,{type:"primary",onClick:f},{default:t(()=>[e("req404")]),_:1}),L,r(o,{type:"primary",onClick:b},{default:t(()=>[e("imageLoadError")]),_:1}),a.value?(l(),d("img",j)):w("",!0)])}}};export{z as default};
//# sourceMappingURL=error-generator-31adab41.js.map
