"use strict";(self["webpackChunkfrom_end_vue"]=self["webpackChunkfrom_end_vue"]||[]).push([[319],{8058:function(n,o,t){t.r(o),t.d(o,{default:function(){return W}});var e=t(3396);const l={class:"card"},a=(0,e._)("div",{class:"card-header"},"SetupHook",-1),s={class:"card-body"};function c(n,o,t,c,u,r){return(0,e.wg)(),(0,e.iD)("div",l,[a,(0,e._)("div",s,[(0,e._)("button",{onClick:o[0]||(o[0]=(...n)=>c.handleBtn&&c.handleBtn(...n)),class:"btn btn-info btn-sm mr-2"},"버튼"),(0,e._)("button",{onClick:o[1]||(o[1]=(...n)=>c.emitEvent&&c.emitEvent(...n)),class:"btn btn-info btn-sm"},"이벤트 발생")])])}var u=t(4870),r={props:["prop1"],emits:["component-event"],setup(n,o){console.log("created 상태가 될 때 setup() 실행"),console.log(n);const t=(0,u.iH)(0);function e(){console.log("handleBtn")}function l(){o.emit("component-event","value1")}return{count:t,handleBtn:e,emitEvent:l}}},d=t(89);const i=(0,d.Z)(r,[["render",c]]);var v=i;const b={class:"card"},m=(0,e._)("div",{class:"card-header"},"MountHook",-1),f=(0,e._)("div",{class:"card-body"},null,-1),_=[m,f];var p={setup(n){return(0,e.wF)((()=>{console.log("onBeforeMount")})),(0,e.bv)((()=>{console.log("onMounted")})),(0,e.Jd)((()=>{console.log("onBeforeUnmount")})),(0,e.Ah)((()=>{console.log("onUnmounted")})),(n,o)=>((0,e.wg)(),(0,e.iD)("div",b,_))}};const h=p;var g=h,k=t(7139);const w={class:"card"},C=(0,e._)("div",{class:"card-header"},"UpdateHook",-1),H={class:"card-body"};var y={setup(n){const o=(0,u.iH)(0);function t(){return console.log("method() 실행"),100*o.value}return(0,e.Xn)((()=>{console.log("onBeforeUpdate Hook")})),(0,e.ic)((()=>{console.log("onUpdated")})),(n,l)=>((0,e.wg)(),(0,e.iD)("div",w,[C,(0,e._)("div",H,[(0,e._)("p",null,"Count: "+(0,k.zw)(o.value),1),(0,e._)("p",null,"Method Return Value: "+(0,k.zw)(t()),1),(0,e._)("button",{onClick:l[0]||(l[0]=n=>o.value++),class:"btn btn-info btn-sm mr-2"},"증가"),(0,e._)("button",{onClick:l[1]||(l[1]=n=>o.value--),class:"btn btn-info btn-sm"},"감소")])]))}};const B=y;var D=B;const E={class:"card"},U=(0,e._)("div",{class:"card-header"},"Exam01LifeCycleHooks",-1),z={class:"card-body"};var M={setup(n){function o(n){console.log("arg:",n)}return(n,t)=>((0,e.wg)(),(0,e.iD)("div",E,[U,(0,e._)("div",z,[(0,e.Wm)(v,{prop1:"value1",onComponentEvent:o}),(0,e.Wm)(g),(0,e.Wm)(D)])]))}};const x=M;var W=x},7137:function(n,o,t){t.r(o),t.d(o,{default:function(){return k}});var e=t(3396),l=t(7139),a=t(4870);const s={class:"card"},c=(0,e._)("div",{class:"card-header"},"Child",-1),u={class:"card-body"};var r={setup(n,{expose:o}){const t=(0,a.iH)(10);function r(){t.value-=1}return o({data:t,method:r}),(n,o)=>((0,e.wg)(),(0,e.iD)("div",s,[c,(0,e._)("div",u,[(0,e._)("p",null,"data: "+(0,l.zw)(t.value),1)])]))}};const d=r;var i=d;const v={class:"card"},b=(0,e._)("div",{class:"card-header"},"Exam02TemplateRefs",-1),m={class:"card-body"},f=(0,e._)("h6",null,"[DOM 요소 참조]",-1),_=(0,e._)("hr",null,null,-1),p=(0,e._)("h6",null,"[자식 컴포넌트 참조]",-1);var h={setup(n){const o=(0,a.iH)("summer"),t=(0,a.iH)(null),s=(0,a.iH)(null);function c(){t.value.value=o.value}function u(){s.value.data+=1}function r(){s.value.method()}return(0,e.bv)((()=>{console.log(t.value),t.value.focus(),console.log(s)})),(n,d)=>((0,e.wg)(),(0,e.iD)("div",v,[b,(0,e._)("div",m,[(0,e._)("div",null,[f,(0,e._)("p",null,"data: "+(0,l.zw)(o.value),1),(0,e._)("button",{onClick:c,class:"btn btn-info btn-sm mr-2"},"데이터 변경"),(0,e._)("input",{type:"text",ref_key:"inputTag",ref:t,name:"mid"},null,512)]),_,(0,e._)("div",null,[p,(0,e._)("p",null,"child data: "+(0,l.zw)(null!==s.value?s.value.data:""),1),(0,e._)("button",{onClick:u,class:"btn btn-info btn-sm mr-2"},"자식 데이터 변경"),(0,e._)("button",{onClick:r,class:"btn btn-info btn-sm mr-2"},"자식 메소드 호출"),(0,e.Wm)((0,a.SU)(i),{ref_key:"childRef",ref:s},null,512)])])]))}};const g=h;var k=g}}]);
//# sourceMappingURL=menu05.ae39da42.js.map