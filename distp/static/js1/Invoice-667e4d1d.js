import{y as W,z as j,A as q,B as J,C as Q,D as X,h as Y,a as Z,s as ee,t as se,r as ae,x as le}from"./_element-plus-f5bcd71c.js";import{z as te,d as h,i as oe,e as ne,o as n,c as w,E as s,a3 as e,a2 as p,a as l,a8 as t,u as c,a7 as g,aa as ce,F as V,ah as $,a6 as U,aD as ue,aE as de}from"./_@vue-7f267340.js";import{l as re,_ as _e}from"../js2/app-1d3b7445.js";import{c as ie,f as me}from"./fields-7649c19d.js";import{m as pe}from"./_@element-plus-0bd66e96.js";import"./__vendor-340aa8e5.js";const f=b=>(ue("data-v-6c4a2209"),b=b(),de(),b),fe={class:"card-panel dashboard-card"},he={class:"dashboard-panel-description"},ge={class:"dashboard-panel-top-text"},xe=f(()=>l("span",{class:"font-weight-100"},"Total Due",-1)),ye={class:"text-primary"},ve=f(()=>l("span",{class:"font-weight-100"},"Latest Charges",-1)),be={class:"text-primary"},ke=f(()=>l("span",{class:"font-weight-100"},"Overdue Charges",-1)),we={class:"text-primary"},Ce={class:"dashboard-panel-footer-text"},Ee=f(()=>l("span",null,"What do you want to pay?",-1)),Ve=f(()=>l("h3",null,"Detail charges",-1)),$e={class:"text-primary"},Be={class:"text-primary"},Pe={class:"text-secondary"},Se={class:"text-secondary"},Te=f(()=>l("span",null,"Subtotal",-1)),Ie=f(()=>l("span",null,"Tax (6%)",-1)),ze=f(()=>l("span",null,[l("b",null,"Total amount")],-1)),Ae=te({__name:"Invoice",setup(b){const{formatAmountCurrency:_}=ie(),{dummyCharges:B}=me(),P=h(["parent-0"]),S=h(["sub-1"]),m=h([]),k=h(!1),x=h(!1),y=h([]);oe(()=>{B.forEach(function(i,u){i.children.forEach(function(a,d){console.log(i),y.value.push(`sub-${i.id}-${a.id}`)})})});const T=i=>{},D=()=>{k.value=!0},K=()=>{k.value=!1,x.value=!1,y.value=[],m.value=[]},L=i=>{const u=i.length;x.value=u===y.value.length},F=()=>{Y.confirm('<span class="text-secondary">Date</span><br/><strong>28 Apr 2021</strong><br/><span class="text-secondary">Payment Method</span><br/><strong>Kiple</strong><br/><span class="text-secondary">Total amount</span><br/><strong>RM 2100</strong>',"Payment Success",{dangerouslyUseHTMLString:!0,confirmButtonText:"OK",showCancelButton:!1,showClose:!1,type:"success",center:!0}).then(()=>{Z({type:"success",message:"Payment successful!"})}).catch(()=>{})};return ne(x,i=>{i==!0?m.value=y.value:y.value.length!=m.value.length?m.value:m.value=[]}),(i,u)=>{const a=ee,d=se,C=ae,O=W,I=le,z=j,R=q,A=J,M=Q,G=X;return n(),w("div",null,[s(ce,{name:"slide-fade"},{default:e(()=>[k.value?(n(),p(d,{key:1,gutter:40,class:"mb-2"},{default:e(()=>[s(a,{xs:24,sm:24,lg:24,class:"mb-2"},{default:e(()=>[s(C,{icon:c(pe),class:"pan-back-btn",onClick:K},{default:e(()=>[g(t(c(re)("back")),1)]),_:1},8,["icon"])]),_:1}),s(a,{xs:24,sm:24,lg:24},{default:e(()=>[s(z,{fill:!0,direction:"horizontal",style:{width:"100%"}},{default:e(()=>[s(I,{class:"box-card"},{default:e(()=>[Ee,s(O,{modelValue:x.value,"onUpdate:modelValue":u[0]||(u[0]=o=>x.value=o),class:"ml-2 float-right","inline-prompt":"",size:"large",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949",height:"20px"},"active-text":"Pay all","inactive-text":"Pay all"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})):(n(),p(d,{key:0,gutter:40,class:"panel-group"},{default:e(()=>[s(a,{xs:24,sm:24,lg:24,class:"card-panel-col"},{default:e(()=>[l("div",fe,[l("div",he,[l("div",ge,[s(d,{gutter:20,class:"mb-10"},{default:e(()=>[s(a,{xs:24,sm:24,lg:24,class:"mb-10"},{default:e(()=>[xe,l("h2",ye,[l("b",null,t(c(_)("2100")),1)])]),_:1}),s(a,{xs:12,sm:12,lg:12,class:""},{default:e(()=>[ve,l("h4",be,[l("b",null,t(c(_)(600)),1)])]),_:1}),s(a,{xs:12,sm:12,lg:12,class:""},{default:e(()=>[ke,l("h4",we,[l("b",null,t(c(_)(1600)),1)])]),_:1})]),_:1})]),l("div",Ce,[s(d,{gutter:20},{default:e(()=>[s(a,{xs:12,sm:12,lg:12,class:""}),s(a,{xs:12,sm:12,lg:12,class:""},{default:e(()=>[s(C,{type:"primary",class:"card-panel-call-button",size:"large",onClick:D},{default:e(()=>[g(" Pay Now ")]),_:1})]),_:1})]),_:1})])])])]),_:1})]),_:1}))]),_:1}),s(d,null,{default:e(()=>[s(a,{xs:24,sm:24,lg:24,class:"mb-5"},{default:e(()=>[Ve]),_:1}),s(a,{xs:24,sm:24,lg:24,class:"mb-5"},{default:e(()=>[s(G,{modelValue:m.value,"onUpdate:modelValue":u[3]||(u[3]=o=>m.value=o),onChange:L},{default:e(()=>[s(M,{modelValue:P.value,"onUpdate:modelValue":u[2]||(u[2]=o=>P.value=o),onChange:T,class:"collaos"},{default:e(()=>[(n(!0),w(V,null,$(c(B),(o,v)=>(n(),p(A,{key:v,name:`parent-${v}`},{title:e(()=>[s(a,{xs:16,sm:16,lg:16},{default:e(()=>[l("b",$e,t(o.categories),1)]),_:2},1024),l("b",Be,t(c(_)(o.total)),1)]),default:e(()=>[s(d,null,{default:e(()=>[s(a,{xs:24,sm:24,lg:24},{default:e(()=>[s(M,{modelValue:S.value,"onUpdate:modelValue":u[1]||(u[1]=r=>S.value=r),onChange:T,class:"collaos"},{default:e(()=>[(n(!0),w(V,null,$(o.children,(r,E)=>(n(),p(A,{key:`sub-${v}-${E}`,name:`sub-${v}-${E}`},{title:e(()=>[s(a,{xs:16,sm:16,lg:16},{default:e(()=>[l("b",null,t(r.date),1)]),_:2},1024),s(a,{xs:8,sm:8,lg:8},{default:e(()=>[g(t(c(_)(r.total)),1)]),_:2},1024)]),default:e(()=>[s(d,null,{default:e(()=>[s(a,{xs:14,sm:14,lg:14},{default:e(()=>[l("span",Pe,t(r.date)+" (payment due)",1)]),_:2},1024),s(a,{xs:8,sm:8,lg:8},{default:e(()=>[l("span",Se,t(r.invoice_no),1)]),_:2},1024),k.value?(n(),p(a,{key:0,xs:2,sm:2,lg:2},{default:e(()=>[(n(),p(R,{class:"text-none",name:`sub-${o.id}-${r.id}`,key:`sub-${o.id}-${r.id}`,label:`sub-${o.id}-${r.id}`},null,8,["name","label"]))]),_:2},1024)):U("",!0)]),_:2},1024),(n(!0),w(V,null,$(r.details,(N,H)=>(n(),p(d,{key:`sub-${v}-${E}-${H}`},{default:e(()=>[s(a,{xs:16,sm:16,lg:16},{default:e(()=>[g(" - "+t(N.description),1)]),_:2},1024),s(a,{xs:8,sm:8,lg:8},{default:e(()=>[g(t(c(_)(N.amount)),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["name"]))),128))]),_:2},1032,["modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1})]),_:1}),m.value.length?(n(),p(d,{key:0},{default:e(()=>[s(a,{xs:24,sm:24,lg:24},{default:e(()=>[s(z,{fill:!0,direction:"horizontal",style:{width:"100%"}},{default:e(()=>[s(I,{class:"box-card"},{default:e(()=>[s(d,null,{default:e(()=>[s(a,{xs:16,sm:16,lg:16,class:"mb-2"},{default:e(()=>[Te]),_:1}),s(a,{xs:8,sm:8,lg:8,class:"text-right"},{default:e(()=>[l("span",null,t(c(_)(20)),1)]),_:1}),s(a,{xs:16,sm:16,lg:16,class:"mb-2"},{default:e(()=>[Ie]),_:1}),s(a,{xs:8,sm:8,lg:8,class:"text-right"},{default:e(()=>[l("span",null,t(c(_)(20)),1)]),_:1}),s(a,{xs:16,sm:16,lg:16,class:"mb-2"},{default:e(()=>[ze]),_:1}),s(a,{xs:8,sm:8,lg:8,class:"text-right"},{default:e(()=>[l("span",null,[l("b",null,t(c(_)(20)),1)])]),_:1}),s(a,{xs:24,sm:24,lg:24},{default:e(()=>[s(C,{type:"primary",class:"w-100",onClick:F},{default:e(()=>[g("Pay")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):U("",!0)])}}});const Fe=_e(Ae,[["__scopeId","data-v-6c4a2209"]]);export{Fe as default};
//# sourceMappingURL=Invoice-667e4d1d.js.map
