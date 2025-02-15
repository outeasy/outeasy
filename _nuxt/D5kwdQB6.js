import{M as xe,Z as fe,av as Ie,aw as Z,bh as ze,aj as Ce,d as oe,bi as be,bj as $e,bk as Re,aa as Le,b1 as Ae,r as h,bl as Pe,bm as Me,j as p,F as ve,o as _e,al as me,v as w,A as g,z as u,b6 as Be,x as y,au as we,an as m,a8 as a,b7 as Ve,am as I,t as L,ar as x,ap as Fe,aG as T,bn as Ye,as as ne,bo as De,aS as Xe,B as je,y as Ee,bp as He,bq as Ke,at as qe,be as We,bf as Ze,aC as Ge,ao as Ue,aR as Je,ba as Qe,aP as F,br as V,ab as Se,az as Ne,bs as ea,bt as aa,ad as W,a5 as ta,b8 as ye,bu as he,bv as ke,aM as sa,$ as na,bw as oa}from"./Cp4OiNuB.js";import{t as Oe,A as la}from"./CEYMlhzy.js";import{d as ra,u as ia,a as ua,i as ca}from"./L_HZIE7E.js";var da="Expected a function";function de(c,R,d){var f=!0,n=!0;if(typeof c!="function")throw new TypeError(da);return xe(d)&&(f="leading"in d?!!d.leading:f,n="trailing"in d?!!d.trailing:n),ra(c,R,{leading:f,maxWait:R,trailing:n})}const fa=Ie({urlList:{type:Z(Array),default:()=>ze([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},showProgress:{type:Boolean,default:!1},crossorigin:{type:Z(String)}}),va={close:()=>!0,switch:c=>fe(c),rotate:c=>fe(c)},ma=oe({name:"ElImageViewer"}),pa=oe({...ma,props:fa,emits:va,setup(c,{expose:R,emit:d}){var f;const n=c,$={CONTAIN:{name:"contain",icon:be(Re)},ORIGINAL:{name:"original",icon:be($e)}},{t:_}=Oe(),o=Le("image-viewer"),{nextZIndex:G}=Ae(),Y=h(),A=h([]),S=Pe(),b=h(!0),v=h(n.initialIndex),E=Me($.CONTAIN),s=h({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),le=h((f=n.zIndex)!=null?f:G()),D=p(()=>{const{urlList:t}=n;return t.length<=1}),P=p(()=>v.value===0),U=p(()=>v.value===n.urlList.length-1),re=p(()=>n.urlList[v.value]),X=p(()=>[o.e("btn"),o.e("prev"),o.is("disabled",!n.infinite&&P.value)]),ie=p(()=>[o.e("btn"),o.e("next"),o.is("disabled",!n.infinite&&U.value)]),J=p(()=>{const{scale:t,deg:i,offsetX:l,offsetY:k,enableTransition:z}=s.value;let C=l/t,O=k/t;const q=i*Math.PI/180,pe=Math.cos(q),ge=Math.sin(q);C=C*pe+O*ge,O=O*pe-l/t*ge;const ce={transform:`scale(${t}) rotate(${i}deg) translate(${C}px, ${O}px)`,transition:z?"transform .3s":""};return E.value.name===$.CONTAIN.name&&(ce.maxWidth=ce.maxHeight="100%"),ce}),j=p(()=>`${v.value+1} / ${n.urlList.length}`);function M(){Q(),d("close")}function ue(){const t=de(l=>{switch(l.code){case V.esc:n.closeOnPressEscape&&M();break;case V.space:B();break;case V.left:K();break;case V.up:r("zoomIn");break;case V.right:e();break;case V.down:r("zoomOut");break}}),i=de(l=>{const k=l.deltaY||l.deltaX;r(k<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});S.run(()=>{F(document,"keydown",t),F(document,"wheel",i)})}function Q(){S.stop()}function ee(){b.value=!1}function ae(t){b.value=!1,t.target.alt=_("el.image.error")}function te(t){if(b.value||t.button!==0||!Y.value)return;s.value.enableTransition=!1;const{offsetX:i,offsetY:l}=s.value,k=t.pageX,z=t.pageY,C=de(q=>{s.value={...s.value,offsetX:i+q.pageX-k,offsetY:l+q.pageY-z}}),O=F(document,"mousemove",C);F(document,"mouseup",()=>{O()}),t.preventDefault()}function se(){s.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function B(){if(b.value)return;const t=la($),i=Object.values($),l=E.value.name,z=(i.findIndex(C=>C.name===l)+1)%t.length;E.value=$[t[z]],se()}function H(t){const i=n.urlList.length;v.value=(t+i)%i}function K(){P.value&&!n.infinite||H(v.value-1)}function e(){U.value&&!n.infinite||H(v.value+1)}function r(t,i={}){if(b.value)return;const{minScale:l,maxScale:k}=n,{zoomRate:z,rotateDeg:C,enableTransition:O}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...i};switch(t){case"zoomOut":s.value.scale>l&&(s.value.scale=Number.parseFloat((s.value.scale/z).toFixed(3)));break;case"zoomIn":s.value.scale<k&&(s.value.scale=Number.parseFloat((s.value.scale*z).toFixed(3)));break;case"clockwise":s.value.deg+=C,d("rotate",s.value.deg);break;case"anticlockwise":s.value.deg-=C,d("rotate",s.value.deg);break}s.value.enableTransition=O}function N(t){var i;((i=t.detail)==null?void 0:i.focusReason)==="pointer"&&t.preventDefault()}function Te(){n.closeOnPressEscape&&M()}return ve(re,()=>{Se(()=>{const t=A.value[0];t!=null&&t.complete||(b.value=!0)})}),ve(v,t=>{se(),d("switch",t)}),_e(()=>{ue()}),R({setActiveItem:H}),(t,i)=>(w(),me(a(Qe),{to:"body",disabled:!t.teleported},{default:g(()=>[u(Be,{name:"viewer-fade",appear:""},{default:g(()=>[y("div",{ref_key:"wrapper",ref:Y,tabindex:-1,class:m(a(o).e("wrapper")),style:we({zIndex:le.value})},[u(a(Ve),{loop:"",trapped:"","focus-trap-el":Y.value,"focus-start-el":"container",onFocusoutPrevented:N,onReleaseRequested:Te},{default:g(()=>[y("div",{class:m(a(o).e("mask")),onClick:Fe(l=>t.hideOnClickModal&&M(),["self"])},null,10,["onClick"]),I(" CLOSE "),y("span",{class:m([a(o).e("btn"),a(o).e("close")]),onClick:M},[u(a(T),null,{default:g(()=>[u(a(Ye))]),_:1})],2),I(" ARROW "),a(D)?I("v-if",!0):(w(),L(ne,{key:0},[y("span",{class:m(a(X)),onClick:K},[u(a(T),null,{default:g(()=>[u(a(De))]),_:1})],2),y("span",{class:m(a(ie)),onClick:e},[u(a(T),null,{default:g(()=>[u(a(Xe))]),_:1})],2)],64)),t.showProgress?(w(),L("div",{key:1,class:m([a(o).e("btn"),a(o).e("progress")])},[x(t.$slots,"progress",{activeIndex:v.value,total:t.urlList.length},()=>[je(Ee(a(j)),1)])],2)):I("v-if",!0),I(" ACTIONS "),y("div",{class:m([a(o).e("btn"),a(o).e("actions")])},[y("div",{class:m(a(o).e("actions__inner"))},[x(t.$slots,"toolbar",{actions:r,prev:K,next:e,reset:B,activeIndex:v.value},()=>[u(a(T),{onClick:l=>r("zoomOut")},{default:g(()=>[u(a(He))]),_:1},8,["onClick"]),u(a(T),{onClick:l=>r("zoomIn")},{default:g(()=>[u(a(Ke))]),_:1},8,["onClick"]),y("i",{class:m(a(o).e("actions__divider"))},null,2),u(a(T),{onClick:B},{default:g(()=>[(w(),me(qe(a(E).icon)))]),_:1}),y("i",{class:m(a(o).e("actions__divider"))},null,2),u(a(T),{onClick:l=>r("anticlockwise")},{default:g(()=>[u(a(We))]),_:1},8,["onClick"]),u(a(T),{onClick:l=>r("clockwise")},{default:g(()=>[u(a(Ze))]),_:1},8,["onClick"])])],2)],2),I(" CANVAS "),y("div",{class:m(a(o).e("canvas"))},[(w(!0),L(ne,null,Ge(t.urlList,(l,k)=>Ue((w(),L("img",{ref_for:!0,ref:z=>A.value[k]=z,key:l,src:l,style:we(a(J)),class:m(a(o).e("img")),crossorigin:t.crossorigin,onLoad:ee,onError:ae,onMousedown:te},null,46,["src","crossorigin"])),[[Je,k===v.value]])),128))],2),x(t.$slots,"default")]),_:3},8,["focus-trap-el"])],6)]),_:3})]),_:3},8,["disabled"]))}});var ga=Ce(pa,[["__file","image-viewer.vue"]]);const ba=Ne(ga),wa=Ie({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:Z([String,Object])},previewSrcList:{type:Z(Array),default:()=>ze([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},showProgress:{type:Boolean,default:!1},crossorigin:{type:Z(String)}}),ya={load:c=>c instanceof Event,error:c=>c instanceof Event,switch:c=>fe(c),close:()=>!0,show:()=>!0},ha=oe({name:"ElImage",inheritAttrs:!1}),ka=oe({...ha,props:wa,emits:ya,setup(c,{expose:R,emit:d}){const f=c;let n="";const{t:$}=Oe(),_=Le("image"),o=ea(),G=p(()=>aa(Object.entries(o).filter(([e])=>/^(data-|on[A-Z])/i.test(e)||["id","style"].includes(e)))),Y=ia({excludeListeners:!0,excludeKeys:p(()=>Object.keys(G.value))}),A=h(),S=h(!1),b=h(!0),v=h(!1),E=h(),s=h(),le=W&&"loading"in HTMLImageElement.prototype;let D,P;const U=p(()=>[_.e("inner"),X.value&&_.e("preview"),b.value&&_.is("loading")]),re=p(()=>{const{fit:e}=f;return W&&e?{objectFit:e}:{}}),X=p(()=>{const{previewSrcList:e}=f;return ta(e)&&e.length>0}),ie=p(()=>{const{previewSrcList:e,initialIndex:r}=f;let N=r;return r>e.length-1&&(N=0),N}),J=p(()=>f.loading==="eager"?!1:!le&&f.loading==="lazy"||f.lazy),j=()=>{W&&(b.value=!0,S.value=!1,A.value=f.src)};function M(e){b.value=!1,S.value=!1,d("load",e)}function ue(e){b.value=!1,S.value=!0,d("error",e)}function Q(){ca(E.value,s.value)&&(j(),te())}const ee=oa(Q,200,!0);async function ae(){var e;if(!W)return;await Se();const{scrollContainer:r}=f;sa(r)?s.value=r:na(r)&&r!==""?s.value=(e=document.querySelector(r))!=null?e:void 0:E.value&&(s.value=ua(E.value)),s.value&&(D=F(s,"scroll",ee),setTimeout(()=>Q(),100))}function te(){!W||!s.value||!ee||(D==null||D(),s.value=void 0)}function se(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function B(){X.value&&(P=F("wheel",se,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",v.value=!0,d("show"))}function H(){P==null||P(),document.body.style.overflow=n,v.value=!1,d("close")}function K(e){d("switch",e)}return ve(()=>f.src,()=>{J.value?(b.value=!0,S.value=!1,te(),ae()):j()}),_e(()=>{J.value?ae():j()}),R({showPreview:B}),(e,r)=>(w(),L("div",ye({ref_key:"container",ref:E},a(G),{class:[a(_).b(),e.$attrs.class]}),[S.value?x(e.$slots,"error",{key:0},()=>[y("div",{class:m(a(_).e("error"))},Ee(a($)("el.image.error")),3)]):(w(),L(ne,{key:1},[A.value!==void 0?(w(),L("img",ye({key:0},a(Y),{src:A.value,loading:e.loading,style:a(re),class:a(U),crossorigin:e.crossorigin,onClick:B,onLoad:M,onError:ue}),null,16,["src","loading","crossorigin"])):I("v-if",!0),b.value?(w(),L("div",{key:1,class:m(a(_).e("wrapper"))},[x(e.$slots,"placeholder",{},()=>[y("div",{class:m(a(_).e("placeholder"))},null,2)])],2)):I("v-if",!0)],64)),a(X)?(w(),L(ne,{key:2},[v.value?(w(),me(a(ba),{key:0,"z-index":e.zIndex,"initial-index":a(ie),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"show-progress":e.showProgress,"url-list":e.previewSrcList,crossorigin:e.crossorigin,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:H,onSwitch:K},{progress:g(N=>[x(e.$slots,"progress",he(ke(N)))]),toolbar:g(N=>[x(e.$slots,"toolbar",he(ke(N)))]),default:g(()=>[e.$slots.viewer?(w(),L("div",{key:0},[x(e.$slots,"viewer")])):I("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","show-progress","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):I("v-if",!0)],64)):I("v-if",!0)],16))}});var Ia=Ce(ka,[["__file","image.vue"]]);const _a=Ne(Ia);export{_a as E};
