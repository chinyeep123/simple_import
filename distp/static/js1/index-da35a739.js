import{u as $,v as H,F as j,w as F,G as J,H as G,I,r as K}from"./_element-plus-f5bcd71c.js";import{af as Q}from"./__vendor-340aa8e5.js";import{c as T,e as V,d as z,f as W}from"../js2/app-1d3b7445.js";import{d as h,z as X,x as Z,i as ee,o as Y,c as B,E as t,a3 as a,u as r,a7 as U,a as b,a8 as te,a6 as le}from"./_@vue-7f267340.js";import"./_@element-plus-0bd66e96.js";const ne=(p,n)=>{const D=h([]),v=h(0),g=h(1),f=h(20),w=e=>{const l=Object.assign({pageNum:g.value,pageSize:f.value},JSON.parse(JSON.stringify(p)));Object.keys(l).forEach(i=>{["",null,void 0,Number.NaN].includes(l[i])&&delete l[i],e.method==="get"&&(Array.isArray(l[i])&&delete l[i],l[i]instanceof Object&&delete l[i])});const c={data:l,...e};return T(c)},k=e=>{e&&e.length===2?(p.startTime=e[0],p.endTime&&(p.endTime=Q(e[1]).endOf("day").format("YYYY-MM-DD HH:mm:ss"))):(p.startTime="",p.endTime="")},E=e=>{g.value=e,n()},_=e=>{f.value=e,n()},m=()=>{g.value=1,n()},C=h([]);return{pageNum:g,pageSize:f,totalPage:v,tableListData:D,tableListReq:w,dateRangePacking:k,multipleSelection:C,handleSelectionChange:e=>{C.value=e},handleCurrentChange:E,handleSizeChange:_,resetPageReq:m,multiDelBtnDill:e=>{let l=[],c="";if(l=C.value.map(d=>(c=`${c+d.id},`,d.id)),l.length===0){V("selection is required","warning");return}const i=c.length-1;z("delete",`Are you confirm to delete \u3010${c.slice(0,i)}\u3011 ?`).then(()=>{T({data:l,method:"DELETE",bfLoading:!0,...e}).then(()=>{V("Delete Success"),m()})})},tableDelDill:(e,l)=>{z("Confirm",`Are you sure to delete\u3010${e.id}\u3011?`).then(()=>{T(l).then(()=>{m(),V(`\u3010${e.id}\u3011delete success`)})})}}},oe={class:"mt-10px query-page-style"},ae={class:"rowES mb-10px"},re=b("span",{style:{"vertical-align":"middle"}},"multiDel",-1),ie=["onClick"],se={class:"table-operation-btn"},de=["onClick"],ce={key:0,class:"rowCC mt-20px"},fe=X({__name:"index",setup(p){const n=Z({log:"",pageUrl:"",startEndArr:""}),D=()=>{C({url:"/integration-front/errorCollection/selectPage",method:"get"}).then(({data:o})=>{m.value=o.records,_.value=o.total})},v=h(),g=()=>{v.value.resetFields(),S(["",""]),l()},f=()=>{c({url:"/integration-front/errorCollection/deleteBatchIds",method:"delete",bfLoading:!0})},w=d=>{const o={url:"/integration-front/errorCollection/deleteById",params:{id:d.id},method:"delete"};i(d,o)};ee(()=>{D()});let{pageNum:k,pageSize:E,totalPage:_,tableListData:m,tableListReq:C,dateRangePacking:S,handleSelectionChange:L,handleCurrentChange:N,handleSizeChange:e,resetPageReq:l,multiDelBtnDill:c,tableDelDill:i}=ne(n,D);return(d,o)=>{const q=$,y=H,M=j,x=K,P=F,u=J,A=G,R=I;return Y(),B("div",oe,[t(P,{ref_key:"refSearchForm",ref:v,inline:!0,model:n},{default:a(()=>[t(y,{prop:"log"},{default:a(()=>[t(q,{modelValue:n.log,"onUpdate:modelValue":o[0]||(o[0]=s=>n.log=s),class:"w-150px",placeholder:"log"},null,8,["modelValue"])]),_:1}),t(y,{prop:"pageUrl"},{default:a(()=>[t(q,{modelValue:n.pageUrl,"onUpdate:modelValue":o[1]||(o[1]=s=>n.pageUrl=s),class:"w-200px",placeholder:"pageUrl"},null,8,["modelValue"])]),_:1}),t(y,{prop:"startEndArr"},{default:a(()=>[t(M,{modelValue:n.startEndArr,"onUpdate:modelValue":o[2]||(o[2]=s=>n.startEndArr=s),type:"daterange",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD HH:mm:ss",class:"w-250px","range-separator":"-","start-placeholder":"startDate","end-placeholder":"endDate",onChange:r(S)},null,8,["modelValue","onChange"])]),_:1}),t(y,null,{default:a(()=>[t(x,{type:"primary",onClick:r(l)},{default:a(()=>[U("search")]),_:1},8,["onClick"]),t(x,{type:"primary",onClick:g},{default:a(()=>[U("reset")]),_:1})]),_:1})]),_:1},8,["model"]),b("div",ae,[t(x,{type:"primary",onClick:f},{default:a(()=>[re]),_:1})]),t(A,{id:"resetElementDialog",ref:"refuserTable",height:"calc(100vh - 260px)",border:"",data:r(m),onSelectionChange:r(L)},{default:a(()=>[t(u,{type:"selection",align:"center",width:"50"}),t(u,{align:"center",prop:"errorLog",label:"Log","min-width":"250"},{default:a(({row:s})=>[b("div",{class:"btn-click-style",onClick:O=>r(W)(s.errorLog)},te(s.errorLog)+"}",9,ie)]),_:1}),t(u,{"show-overflow-tooltip":"",align:"center",prop:"pageUrl",label:"Page URL","min-width":"120"}),t(u,{"show-overflow-tooltip":"",align:"center",prop:"version",label:"Version","min-width":"80"}),t(u,{"show-overflow-tooltip":"",align:"center",prop:"browserType",label:"Browser","min-width":"120"}),t(u,{"show-overflow-tooltip":"",align:"center",prop:"createTime",label:"Created At","min-width":"120"}),t(u,{fixed:"right",align:"center",label:"Action",width:"72"},{default:a(({row:s})=>[b("div",se,[b("span",{onClick:O=>w(s)},"Delete",8,de)])]),_:1})]),_:1},8,["height","data","onSelectionChange"]),r(_)>=10?(Y(),B("div",ce,[t(R,{"current-page":r(k),"page-sizes":[10,20,50,100],"page-size":r(E),layout:"total, sizes, prev, pager, next, jumper",total:r(_),onSizeChange:r(e),onCurrentChange:r(N)},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])):le("",!0)])}}});export{fe as default};
//# sourceMappingURL=index-da35a739.js.map
