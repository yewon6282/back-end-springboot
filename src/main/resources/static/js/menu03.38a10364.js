"use strict";(self["webpackChunkfrom_end_vue"]=self["webpackChunkfrom_end_vue"]||[]).push([[47],{5020:function(l,o,n){n.r(o),n.d(o,{default:function(){return k}});var e=n(3396),s=n(7139),c=n(9242),t=n(4870);const u={class:"card"},a=(0,e._)("div",{class:"card-header"},"Exam01EventHandling",-1),r={class:"card-body"},d=(0,e._)("h6",null,"[Event Handling]",-1),i=(0,e._)("h6",null,"[DOM Event 객체 참조]",-1),m=["value"],p=(0,e._)("br",null,null,-1),v=(0,e._)("h6",null,"[이벤트 수식어 사용]",-1),g=["onClick"],_=["onSubmit"],b=(0,e.Uk)(),f=(0,e._)("br",null,null,-1),h=(0,e._)("input",{type:"submit",value:"제출",class:"btn btn-success btn-sm mt-2"},null,-1);var y={setup(l){const o=(0,t.iH)("");function n(){console.log("handleBtn1() 실행")}function y(l,o){console.log("handleBtn2() 실행"),console.log("message : "+l),console.log(o),console.log(o.target)}function w(l){console.log("handleInput(event) 실행"),console.log(l.target),console.log(l.target.name),console.log(l.target.value),o.value=l.target.value}function k(){console.log("handleLink")}function U(){console.log("handleForm")}return(l,t)=>((0,e.wg)(),(0,e.iD)("div",u,[a,(0,e._)("div",r,[(0,e._)("div",null,[d,(0,e._)("button",{onClick:n,class:"btn btn-info btn-sm mr-2"},"버튼1"),(0,e._)("button",{onClick:t[0]||(t[0]=l=>y("vue is good",l)),class:"btn btn-info btn-sm mr-2"},"버튼2")]),(0,e._)("div",null,[i,(0,e._)("input",{type:"text",name:"userId",value:o.value,onKeyup:t[1]||(t[1]=l=>w(l))},null,40,m),p,(0,e.Uk)(" 입력 내용: "+(0,s.zw)(o.value),1)]),(0,e._)("div",null,[v,(0,e._)("a",{href:"https://vuejs.org/guide/introduction.html",onClick:(0,c.iM)(k,["prevent"])},"링크",8,g),(0,e._)("form",{action:"https://vuejs.org/guide/introduction.html",onSubmit:(0,c.iM)(U,["prevent"])},[(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=l=>o.value=l)},null,512),[[c.nr,o.value]]),b,f,h],40,_)])])]))}};const w=y;var k=w},5259:function(l,o,n){n.r(o),n.d(o,{default:function(){return C}});var e=n(3396),s=n(9242),c=n(4870);const t={class:"card"},u=(0,e._)("div",{class:"card-header"},"Exam02Watch",-1),a={class:"card-body"},r={class:"form-group row"},d=(0,e._)("label",{class:"col-sm-2 col-form-label"},"UserId",-1),i={class:"col-sm-10"},m=(0,e._)("hr",null,null,-1),p={class:"form-group row"},v=(0,e._)("label",{class:"col-sm-2 col-form-label"},"Name",-1),g={class:"col-sm-10"},_={class:"form-group row"},b=(0,e._)("label",{class:"col-sm-2 col-form-label"},"Company",-1),f={class:"col-sm-10"},h={class:"form-group row"},y=(0,e._)("label",{class:"col-sm-2 col-form-label"},"Price",-1),w={class:"col-sm-10"},k=(0,e._)("hr",null,null,-1);var U={setup(l){const o=(0,c.iH)(""),n=(0,c.iH)({name:"",company:"",price:0});function U(){n.value={name:"",company:"",price:0}}return(0,e.YP)(o,((l,o)=>{console.group("userId 변경 감시"),console.log("uewUserId: ",l),console.log("oldUserId: ",o),console.groupEnd()})),(0,e.YP)(n,((l,o)=>{console.group("product 변경 감시"),console.log("uewProduct: ",l),console.log("oldProduct: ",o),console.groupEnd()}),{deep:!0}),(0,e.YP)((()=>n.value.name),((l,o)=>{console.group("product 객체의 name 속성 변경 감시"),console.log("newName: ",l),console.log("oldName: ",o),console.groupEnd()})),(0,e.YP)([o,n],(([l,o],[n,e])=>{console.group("멀티 반응형 속성 감지 설정"),console.log("new: ",[l,o]),console.log("old: ",[n,e]),console.groupEnd()})),(l,c)=>((0,e.wg)(),(0,e.iD)("div",t,[u,(0,e._)("div",a,[(0,e._)("div",r,[d,(0,e._)("div",i,[(0,e.wy)((0,e._)("input",{type:"text",class:"form-control","onUpdate:modelValue":c[0]||(c[0]=l=>o.value=l)},null,512),[[s.nr,o.value]])])]),m,(0,e._)("form",null,[(0,e._)("div",p,[v,(0,e._)("div",g,[(0,e.wy)((0,e._)("input",{type:"text",class:"form-control","onUpdate:modelValue":c[1]||(c[1]=l=>n.value.name=l)},null,512),[[s.nr,n.value.name]])])]),(0,e._)("div",_,[b,(0,e._)("div",f,[(0,e.wy)((0,e._)("input",{type:"text",class:"form-control","onUpdate:modelValue":c[2]||(c[2]=l=>n.value.company=l)},null,512),[[s.nr,n.value.company]])])]),(0,e._)("div",h,[y,(0,e._)("div",w,[(0,e.wy)((0,e._)("input",{type:"number",class:"form-control","onUpdate:modelValue":c[3]||(c[3]=l=>n.value.price=l)},null,512),[[s.nr,n.value.price,void 0,{number:!0}]])])])]),k,(0,e._)("button",{onClick:U,class:"btn btn-info btn-sm"},"product 객체 변경")])]))}};const E=U;var C=E}}]);
//# sourceMappingURL=menu03.38a10364.js.map