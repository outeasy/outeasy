import{av as T,bx as g,aj as A,d as S,ak as N,aa as D,r as I,j as v,al as l,v as a,A as p,ao as V,x as k,an as o,a8 as e,am as n,aG as b,at as z,t as i,ar as h,B as C,y as f,as as $,z as j,by as M,aR as P,b6 as _,az as F}from"./Cp4OiNuB.js";import{A as G}from"./CEYMlhzy.js";const O=["light","dark"],R=T({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:G(g),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:O,default:"light"}}),q={close:r=>r instanceof MouseEvent},H=S({name:"ElAlert"}),J=S({...H,props:R,emits:q,setup(r,{emit:B}){const d=r,{Close:E}=M,w=N(),t=D("alert"),u=I(!0),m=v(()=>g[d.type]),c=v(()=>!!(d.description||w.default)),y=s=>{u.value=!1,B("close",s)};return(s,L)=>(a(),l(_,{name:e(t).b("fade"),persisted:""},{default:p(()=>[V(k("div",{class:o([e(t).b(),e(t).m(s.type),e(t).is("center",s.center),e(t).is(s.effect)]),role:"alert"},[s.showIcon&&e(m)?(a(),l(e(b),{key:0,class:o([e(t).e("icon"),{[e(t).is("big")]:e(c)}])},{default:p(()=>[(a(),l(z(e(m))))]),_:1},8,["class"])):n("v-if",!0),k("div",{class:o(e(t).e("content"))},[s.title||s.$slots.title?(a(),i("span",{key:0,class:o([e(t).e("title"),{"with-description":e(c)}])},[h(s.$slots,"title",{},()=>[C(f(s.title),1)])],2)):n("v-if",!0),e(c)?(a(),i("p",{key:1,class:o(e(t).e("description"))},[h(s.$slots,"default",{},()=>[C(f(s.description),1)])],2)):n("v-if",!0),s.closable?(a(),i($,{key:2},[s.closeText?(a(),i("div",{key:0,class:o([e(t).e("close-btn"),e(t).is("customed")]),onClick:y},f(s.closeText),3)):(a(),l(e(b),{key:1,class:o(e(t).e("close-btn")),onClick:y},{default:p(()=>[j(e(E))]),_:1},8,["class"]))],64)):n("v-if",!0)],2)],2),[[P,u.value]])]),_:3},8,["name"]))}});var K=A(J,[["__file","alert.vue"]]);const W=F(K);export{W as E};
