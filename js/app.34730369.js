(function(e){function t(t){for(var o,l,a=t[0],i=t[1],d=t[2],u=0,b=[];u<a.length;u++)l=a[u],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&b.push(s[l][0]),s[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);r&&r(t);while(b.length)b.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},s={app:0},c=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/seat-cheats/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var r=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d8e":function(e,t,n){},"1e68":function(e,t,n){},"35e3":function(e,t,n){"use strict";n("6b73")},"45e6":function(e,t,n){"use strict";n("f05e")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),s=n("be92"),c=n("2344");function l(e,t,n,s,c,l){const a=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:e.$route.fullPath})}var a={name:"App"},i=(n("e32d"),n("6b0d")),d=n.n(i);const r=d()(a,[["render",l]]);var u=r,b=n("6605");const m=e=>(Object(o["pushScopeId"])("data-v-0c798eca"),e=e(),Object(o["popScopeId"])(),e),p={class:"content"},O={class:"hero"},j=m(()=>Object(o["createElementVNode"])("div",{class:"heading"},[Object(o["createElementVNode"])("h1",null,"Seat Cheats"),Object(o["createElementVNode"])("p",null,"Classroom Seating Chart Manager")],-1)),h=m(()=>Object(o["createElementVNode"])("h2",null,"My Charts",-1)),C={class:"classroom-links-container"};function v(e,t,n,s,c,l){const a=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",p,[Object(o["createElementVNode"])("div",O,[j,Object(o["createVNode"])(a,{class:"new-btn",to:"/new"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("New Seating Chart ➡")]),_:1})]),h,Object(o["createElementVNode"])("div",C,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.allClasses,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(a,{key:t,class:"classroom-link-btn",to:"/"+t},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.name),1)]),_:2},1032,["to"]))),128))])])}const S=Object(s["b"])("classStore",{state:()=>({classes:[]}),persist:!0,actions:{updateClass(e,t){this.classes[e]=t}},getters:{}});var N={name:"Home",computed:{...Object(s["d"])(S,{allClasses:"classes"})},created(){},data(){return{}}};n("83fe");const g=d()(N,[["render",v],["__scopeId","data-v-0c798eca"]]);var f=g;const k=e=>(Object(o["pushScopeId"])("data-v-ed1eef42"),e=e(),Object(o["popScopeId"])(),e),y={class:"navbar noprint"},E={class:"navbar-item home-link-container"},V={class:"navbar-item heading-container"},w={class:"navbar-item settings-container"},M=k(()=>Object(o["createElementVNode"])("label",{for:"classSelect"},"🏫",-1)),I=["value","selected"],x=k(()=>Object(o["createElementVNode"])("option",{value:"new"},"+ New Class",-1)),D={class:"add-student-input"},z=k(()=>Object(o["createElementVNode"])("button",{type:"submit"},"Add Student",-1)),A={class:"tools-container noprint"},B={class:"canvas"},T=["onClick"],$=["onClick"],_={class:"student-name"},X=["onClick"],Y={class:"modal-form-control"},P=k(()=>Object(o["createElementVNode"])("label",{for:"studentName"},"Name",-1)),F={class:"modal-form-control"},J=k(()=>Object(o["createElementVNode"])("label",{for:"studentNotes"},"Notes",-1)),L={class:"modal-form-control"},Z=k(()=>Object(o["createElementVNode"])("label",{for:"studentIcon"},"Icon",-1)),U={class:"icon-select"},q={class:"modal-form-control"},H=k(()=>Object(o["createElementVNode"])("label",{for:"className"},"Class Name",-1)),G=k(()=>Object(o["createElementVNode"])("div",{class:"modal-form-control"},null,-1)),R={class:"modal-form-control"},K=k(()=>Object(o["createElementVNode"])("label",{for:"className"},"Class Name",-1)),Q=k(()=>Object(o["createElementVNode"])("div",{class:"modal-form-control"},null,-1)),W=k(()=>Object(o["createElementVNode"])("h4",null,"This action can't be undone.",-1)),ee=k(()=>Object(o["createElementVNode"])("h4",null,"This action can't be undone.",-1));function te(e,t,n,s,c,l){const a=Object(o["resolveComponent"])("router-link"),i=Object(o["resolveComponent"])("DraggableDiv"),d=Object(o["resolveComponent"])("Modal");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",y,[Object(o["createElementVNode"])("div",E,[Object(o["createVNode"])(a,{to:"/"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("🏠 Home")]),_:1})]),Object(o["createElementVNode"])("div",V,[Object(o["createElementVNode"])("h1",null,Object(o["toDisplayString"])(c.activeClass.name),1)]),Object(o["createElementVNode"])("div",w,[M,c.activeClass?(Object(o["openBlock"])(),Object(o["createElementBlock"])("select",{key:0,onChange:t[0]||(t[0]=(...e)=>l.changeClass&&l.changeClass(...e)),name:"",id:"classSelect"},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.allClasses,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("option",{value:t,key:t,selected:t===c.activeIndex},Object(o["toDisplayString"])(e.name),9,I))),128)),x],32)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("button",{onClick:t[1]||(t[1]=(...e)=>l.openSettingsModal&&l.openSettingsModal(...e))},"⚙️")])]),Object(o["createElementVNode"])("form",{onSubmit:t[3]||(t[3]=Object(o["withModifiers"])((...e)=>l.addStudent&&l.addStudent(...e),["prevent"])),class:"add-student-form noprint"},[Object(o["createElementVNode"])("div",D,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>c.newStudent=e)},null,512),[[o["vModelText"],c.newStudent]]),z])],32),Object(o["createElementVNode"])("div",A,[Object(o["createElementVNode"])("button",{onClick:t[4]||(t[4]=(...e)=>l.randomize&&l.randomize(...e))},"Randomize"),c.swapModeActive?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,type:"button",onClick:t[5]||(t[5]=(...e)=>l.toggleSwapMode&&l.toggleSwapMode(...e))},"End Swap")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:1,type:"button",onClick:t[6]||(t[6]=(...e)=>l.toggleSwapMode&&l.toggleSwapMode(...e))},"Swap")),Object(o["createElementVNode"])("button",{onClick:t[7]||(t[7]=(...e)=>l.saveClass&&l.saveClass(...e))},"Save"),Object(o["createElementVNode"])("button",{type:"button",onClick:t[8]||(t[8]=(...e)=>l.print&&l.print(...e))},"Print")]),Object(o["createElementVNode"])("div",B,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.activeClass.students,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:t},[e.placeholder?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:0,class:Object(o["normalizeClass"])([l.indexIsSelected(t)?"selected-for-swap":"","draggable-div"]),name:e.name,top:e.position.top,left:e.position.left,onStopDragging:t=>l.stopDragging(t,e),onLock:t=>l.toggleLock(e),onFocus:e=>l.addToSelected(t)},{body:Object(o["withCtx"])(()=>[e.locked?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,type:"button",onClick:t=>l.toggleLock(e),class:"lock-icon noprint"}," 🔒 ",8,T)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:1,type:"button",onClick:t=>l.toggleLock(e),class:"lock-icon lock-icon--unlocked noprint"}," 🔓 ",8,$)),Object(o["createElementVNode"])("p",_,Object(o["toDisplayString"])(e.name),1),Object(o["createElementVNode"])("button",{type:"button",onClick:e=>l.editStudentClicked(e,t),class:"notes-icon"}," ✏️ ",8,X),Object(o["withDirectives"])(Object(o["createElementVNode"])("span",{class:"student-icon"},Object(o["toDisplayString"])(e.icon),513),[[o["vShow"],e.icon]])]),_:2},1032,["class","name","top","left","onStopDragging","onLock","onFocus"]))],64))),128))]),Object(o["createVNode"])(d,{modalTitle:"Student Notes",modalActive:c.editStudentModalActive,onClose:l.closeEditModal},{body:Object(o["withCtx"])(()=>[c.editStudent&&c.editStudent.index?(Object(o["openBlock"])(),Object(o["createElementBlock"])("form",{key:0,onSubmit:t[53]||(t[53]=Object(o["withModifiers"])(()=>{},["prevent"]))},[Object(o["createElementVNode"])("div",Y,[P,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"studentName",type:"text","onUpdate:modelValue":t[9]||(t[9]=e=>c.editStudent.name=e)},null,512),[[o["vModelText"],c.editStudent.name]])]),Object(o["createElementVNode"])("div",F,[J,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{id:"studentNotes",name:"studentNotes",rows:"6","onUpdate:modelValue":t[10]||(t[10]=e=>c.editStudent.notes=e)},null,512),[[o["vModelText"],c.editStudent.notes]])]),Object(o["createElementVNode"])("div",L,[Z,Object(o["createElementVNode"])("div",U,[Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"😃"===c.editStudent.icon}),type:"button",onClick:t[11]||(t[11]=e=>l.setStudentIcon("😃"))}," 😃 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"😥"===c.editStudent.icon}),type:"button",onClick:t[12]||(t[12]=e=>l.setStudentIcon("😥"))}," 😥 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"😰"===c.editStudent.icon}),type:"button",onClick:t[13]||(t[13]=e=>l.setStudentIcon("😰"))}," 😰 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"😇"===c.editStudent.icon}),type:"button",onClick:t[14]||(t[14]=e=>l.setStudentIcon("😇"))}," 😇 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"👿"===c.editStudent.icon}),type:"button",onClick:t[15]||(t[15]=e=>l.setStudentIcon("👿"))}," 👿 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"⭐️"===c.editStudent.icon}),type:"button",onClick:t[16]||(t[16]=e=>l.setStudentIcon("⭐️"))}," ⭐️ ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"✏️"===c.editStudent.icon}),type:"button",onClick:t[17]||(t[17]=e=>l.setStudentIcon("✏️"))}," ✏️ ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"📚"===c.editStudent.icon}),type:"button",onClick:t[18]||(t[18]=e=>l.setStudentIcon("📚"))}," 📚 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🆕"===c.editStudent.icon}),type:"button",onClick:t[19]||(t[19]=e=>l.setStudentIcon("🆕"))}," 🆕 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"⚠️"===c.editStudent.icon}),type:"button",onClick:t[20]||(t[20]=e=>l.setStudentIcon("⚠️"))}," ⚠️ ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🥜"===c.editStudent.icon}),type:"button",onClick:t[21]||(t[21]=e=>l.setStudentIcon("🥜"))}," 🥜 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🍞"===c.editStudent.icon}),type:"button",onClick:t[22]||(t[22]=e=>l.setStudentIcon("🍞"))}," 🍞 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🥦"===c.editStudent.icon}),type:"button",onClick:t[23]||(t[23]=e=>l.setStudentIcon("🥦"))}," 🥦 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🌽"===c.editStudent.icon}),type:"button",onClick:t[24]||(t[24]=e=>l.setStudentIcon("🌽"))}," 🌽 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🥛"===c.editStudent.icon}),type:"button",onClick:t[25]||(t[25]=e=>l.setStudentIcon("🥛"))}," 🥛 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🍪"===c.editStudent.icon}),type:"button",onClick:t[26]||(t[26]=e=>l.setStudentIcon("🍪"))}," 🍪 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🍫"===c.editStudent.icon}),type:"button",onClick:t[27]||(t[27]=e=>l.setStudentIcon("🍫"))}," 🍫 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🍬"===c.editStudent.icon}),type:"button",onClick:t[28]||(t[28]=e=>l.setStudentIcon("🍬"))}," 🍬 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"♿"===c.editStudent.icon}),type:"button",onClick:t[29]||(t[29]=e=>l.setStudentIcon("♿"))}," ♿ ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"⚕️"===c.editStudent.icon}),type:"button",onClick:t[30]||(t[30]=e=>l.setStudentIcon("⚕️"))}," ⚕️ ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🦯"===c.editStudent.icon}),type:"button",onClick:t[31]||(t[31]=e=>l.setStudentIcon("🦯"))}," 🦯 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🌈"===c.editStudent.icon}),type:"button",onClick:t[32]||(t[32]=e=>l.setStudentIcon("🌈"))}," 🌈 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"♀️"===c.editStudent.icon}),type:"button",onClick:t[33]||(t[33]=e=>l.setStudentIcon("♀️"))}," ♀️ ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"♂️"===c.editStudent.icon}),type:"button",onClick:t[34]||(t[34]=e=>l.setStudentIcon("♂️"))}," ♂️ ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"⚧️"===c.editStudent.icon}),type:"button",onClick:t[35]||(t[35]=e=>l.setStudentIcon("⚧️"))}," ⚧️ ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"❤️"===c.editStudent.icon}),type:"button",onClick:t[36]||(t[36]=e=>l.setStudentIcon("❤️"))}," ❤️ ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🧡"===c.editStudent.icon}),type:"button",onClick:t[37]||(t[37]=e=>l.setStudentIcon("🧡"))}," 🧡 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"💛"===c.editStudent.icon}),type:"button",onClick:t[38]||(t[38]=e=>l.setStudentIcon("💛"))}," 💛 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"💚"===c.editStudent.icon}),type:"button",onClick:t[39]||(t[39]=e=>l.setStudentIcon("💚"))}," 💚 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"💙"===c.editStudent.icon}),type:"button",onClick:t[40]||(t[40]=e=>l.setStudentIcon("💙"))}," 💙 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"💜"===c.editStudent.icon}),type:"button",onClick:t[41]||(t[41]=e=>l.setStudentIcon("💜"))}," 💜 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🔴"===c.editStudent.icon}),type:"button",onClick:t[42]||(t[42]=e=>l.setStudentIcon("🔴"))}," 🔴 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🟠"===c.editStudent.icon}),type:"button",onClick:t[43]||(t[43]=e=>l.setStudentIcon("🟠"))}," 🟠 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🟡"===c.editStudent.icon}),type:"button",onClick:t[44]||(t[44]=e=>l.setStudentIcon("🟡"))}," 🟡 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🟢"===c.editStudent.icon}),type:"button",onClick:t[45]||(t[45]=e=>l.setStudentIcon("🟢"))}," 🟢 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🔵"===c.editStudent.icon}),type:"button",onClick:t[46]||(t[46]=e=>l.setStudentIcon("🔵"))}," 🔵 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"🟣"===c.editStudent.icon}),type:"button",onClick:t[47]||(t[47]=e=>l.setStudentIcon("🟣"))}," 🟣 ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"IEP"===c.editStudent.icon}),type:"button",onClick:t[48]||(t[48]=e=>l.setStudentIcon("IEP"))}," IEP ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"ESL"===c.editStudent.icon}),type:"button",onClick:t[49]||(t[49]=e=>l.setStudentIcon("ESL"))}," ESL ",2),Object(o["createElementVNode"])("button",{class:Object(o["normalizeClass"])({"student-icon--selected":"BSI"===c.editStudent.icon}),type:"button",onClick:t[50]||(t[50]=e=>l.setStudentIcon("BSI"))}," BSI ",2)])]),Object(o["createElementVNode"])("button",{onClick:t[51]||(t[51]=e=>l.editClassStudent())},"submit"),Object(o["createElementVNode"])("button",{onClick:t[52]||(t[52]=e=>l.openDeleteStudentModal())},"Delete")],32)):Object(o["createCommentVNode"])("",!0)]),_:1},8,["modalActive","onClose"]),c.activeClass?(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:0,modalTitle:"Settings",modalActive:c.settingsModalActive,onClose:l.closeSettingsModal},{body:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("form",{onSubmit:t[58]||(t[58]=Object(o["withModifiers"])(()=>{},["prevent"]))},[Object(o["createElementVNode"])("div",q,[H,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"className",type:"text","onUpdate:modelValue":t[54]||(t[54]=e=>c.activeClass.name=e)},null,512),[[o["vModelText"],c.activeClass.name,void 0,{lazy:!0}]])]),G,Object(o["createElementVNode"])("button",{type:"button",onClick:t[55]||(t[55]=e=>l.openDeleteClassModal())},"Delete This Class"),Object(o["createElementVNode"])("button",{type:"submit",onClick:t[56]||(t[56]=e=>l.saveEditedName())},"Submit"),Object(o["createElementVNode"])("button",{type:"button",onClick:t[57]||(t[57]=e=>l.generateJson())},"Get JSON")],32)]),_:1},8,["modalActive","onClose"])):Object(o["createCommentVNode"])("",!0),c.activeClass?(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:1,modalTitle:"Add a Class Name",modalActive:c.newClassNameModalActive,onClose:l.closeNewClassNameModal},{body:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("form",{onSubmit:t[61]||(t[61]=Object(o["withModifiers"])(()=>{},["prevent"]))},[Object(o["createElementVNode"])("div",R,[K,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"className",type:"text","onUpdate:modelValue":t[59]||(t[59]=e=>c.activeClass.name=e)},null,512),[[o["vModelText"],c.activeClass.name,void 0,{lazy:!0}]])]),Q,Object(o["createElementVNode"])("button",{onClick:t[60]||(t[60]=e=>l.saveEditedName())},"Submit")],32)]),_:1},8,["modalActive","onClose"])):Object(o["createCommentVNode"])("",!0),c.editStudent?(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:2,modalTitle:"Delete Student?",modalActive:c.deleteStudentModalActive,onClose:l.closedeleteStudentModal},{body:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("form",{onSubmit:t[63]||(t[63]=Object(o["withModifiers"])(()=>{},["prevent"]))},[Object(o["createElementVNode"])("h3",null,"Do you really want to delete "+Object(o["toDisplayString"])(c.editStudent.name)+"?",1),W,Object(o["createElementVNode"])("button",{onClick:t[62]||(t[62]=e=>l.deleteStudent(c.editStudent.index))},"Delete")],32)]),_:1},8,["modalActive","onClose"])):Object(o["createCommentVNode"])("",!0),c.activeIndex?(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:3,modalTitle:"Delete Class?",modalActive:c.deleteClassModalActive,onClose:l.closedeleteClassModal},{body:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("form",{onSubmit:t[65]||(t[65]=Object(o["withModifiers"])(()=>{},["prevent"]))},[Object(o["createElementVNode"])("h3",null,"Do you really want to delete "+Object(o["toDisplayString"])(c.activeClass.name)+"?",1),ee,Object(o["createElementVNode"])("button",{onClick:t[64]||(t[64]=e=>l.deleteClass(c.activeIndex))},"Delete")],32)]),_:1},8,["modalActive","onClose"])):Object(o["createCommentVNode"])("",!0)],64)}n("14d9");function ne(e,t,n,s,c,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{tabindex:"0",ref:"draggableContainer",id:"draggable-container",class:"draggable-container",onFocus:t[3]||(t[3]=(...e)=>l.handleFocus&&l.handleFocus(...e))},[Object(o["renderSlot"])(e.$slots,"header",{},()=>[Object(o["createElementVNode"])("span",{onTouchstart:t[0]||(t[0]=(...e)=>l.dragTouchDown&&l.dragTouchDown(...e)),onMousedown:t[1]||(t[1]=(...e)=>l.dragMouseDown&&l.dragMouseDown(...e)),class:"hand-icon"},"✋",32)],!0),Object(o["createElementVNode"])("div",{class:"body",onClick:t[2]||(t[2]=(...e)=>l.clickOnBody&&l.clickOnBody(...e))},[Object(o["renderSlot"])(e.$slots,"body",{},void 0,!0)])],544)}var oe={name:"DraggableDiv",props:{name:{type:String,default:"Student"},top:{type:String,default:null},left:{type:String,default:null}},mounted(){this.top&&(this.$refs.draggableContainer.style.top=this.top),this.left&&(this.$refs.draggableContainer.style.left=this.left),this.updateZIndex()},data(){return{showUtils:!1,positions:{clientX:void 0,clientY:void 0,movementX:0,movementY:0}}},methods:{getMaxZIndex(){return Math.max(...Array.from(document.querySelectorAll(".canvas .draggable-div"),e=>parseFloat(window.getComputedStyle(e).zIndex)).filter(e=>!Number.isNaN(e)),0)},handleFocus(){this.updateZIndex()},updateZIndex(){let e=this.getMaxZIndex();(e>this.$refs.draggableContainer.style.zIndex||0===e)&&(this.$refs.draggableContainer.style.zIndex=e+1)},dragTouchDown(e){e.preventDefault(),this.updateZIndex(),this.positions.clientX=e.clientX,this.positions.clientY=e.clientY,document.ontouchmove=this.elementTouchDrag,document.ontouchend=this.closeDragElement},dragMouseDown(e){e.preventDefault(),this.updateZIndex(),this.positions.clientX=e.clientX,this.positions.clientY=e.clientY,document.ontouchmove=this.elementDrag,document.ontouchend=this.closeDragElement,document.onmousemove=this.elementDrag,document.onmouseup=this.closeDragElement},elementDrag(e){e.preventDefault(),this.positions.movementX=this.positions.clientX-e.clientX,this.positions.movementY=this.positions.clientY-e.clientY,this.positions.clientX=e.clientX,this.positions.clientY=e.clientY,this.$refs.draggableContainer.style.top=Math.max(0,this.$refs.draggableContainer.offsetTop-this.positions.movementY)+"px",this.$refs.draggableContainer.style.left=Math.max(-30,this.$refs.draggableContainer.offsetLeft-this.positions.movementX)+"px"},elementTouchDrag(e){e.preventDefault();let t=e.touches[0];this.positions.movementX=this.positions.clientX-t.pageX,this.positions.movementY=this.positions.clientY-t.pageY,this.positions.clientX=t.pageX,this.positions.clientY=t.pageY,this.$refs.draggableContainer.style.top=this.$refs.draggableContainer.offsetTop-this.positions.movementY+"px",this.$refs.draggableContainer.style.left=this.$refs.draggableContainer.offsetLeft-this.positions.movementX+"px"},closeDragElement(e){var t;document.onmouseup=null,document.onmousemove=null,document.ontouchmove=null,document.ontouchend=null,null===(t=document.activeElement)||void 0===t||t.blur(),this.$emit("stopDragging",e)},clickOnBody(){this.$emit("clickOnBody")}}};n("35e3");const se=d()(oe,[["render",ne],["__scopeId","data-v-6bbfeab3"]]);var ce=se;const le={class:"modal"},ae={class:"modal-inner"},ie={class:"modal-content"},de={class:"modal-header"};function re(e,t,n,s,c,l){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Transition"],{name:"modal-animation"},{default:Object(o["withCtx"])(()=>[Object(o["withDirectives"])(Object(o["createElementVNode"])("div",le,[Object(o["createVNode"])(o["Transition"],{name:"modal-animation-inner"},{default:Object(o["withCtx"])(()=>[Object(o["withDirectives"])(Object(o["createElementVNode"])("div",ae,[Object(o["createElementVNode"])("div",ie,[Object(o["createElementVNode"])("div",de,[Object(o["createElementVNode"])("h2",null,Object(o["toDisplayString"])(n.modalTitle),1),Object(o["createElementVNode"])("button",{class:"close-btn",type:"button",onClick:t[0]||(t[0]=(...e)=>l.close&&l.close(...e))},"×")]),Object(o["renderSlot"])(e.$slots,"body",{},void 0,!0)])],512),[[o["vShow"],n.modalActive]])]),_:3})],512),[[o["vShow"],n.modalActive]])]),_:3})}var ue={name:"Modal",props:["modalTitle","modalActive"],methods:{close(){this.$emit("close")}}};n("45e6");const be=d()(ue,[["render",re],["__scopeId","data-v-e0907090"]]);var me=be,pe={name:"SeatCheats",components:{DraggableDiv:ce,Modal:me},computed:{...Object(s["d"])(S,{allClasses:"classes"})},created(){this.classes=JSON.parse(JSON.stringify(this.allClasses)),this.$route.params&&("new"===this.$route.params.id?(this.classes.push({name:"",students:[]}),this.activeIndex=this.classes.length-1,this.activeClass=this.classes[this.activeIndex]):!isNaN(this.$route.params.id)&&this.$route.params.id>=0&&this.$route.params.id<this.classes.length&&(this.activeIndex=parseInt(this.$route.params.id),this.activeClass=this.classes[this.$route.params.id],this.activeClass.students=this.activeClass.students.filter(e=>e.position))),this.activeClass||(this.activeIndex=0,this.activeClass=this.classes[0]),""===this.activeClass.name&&(this.activeClass.name="New Class",setTimeout(()=>{this.newClassNameModalActive=!0},1e3))},methods:{...Object(s["c"])(S,["updateClass"]),indexIsSelected(e){return this.selected.includes(e)},generateJson(){console.log(JSON.stringify(this.activeClass))},saveClass(){this.updateClass(this.activeIndex,this.activeClass)},changeClass(e){this.$router.push("/"+e.target.value)},addToSelected(e){if(this.swapModeActive&&(this.selected.includes(e)?this.selected=[]:this.selected.push(e),this.selected.length>=2)){let e=this.selected[0],t=this.selected[1],n=this.activeClass.students;[n[e],n[t]]=[n[t],n[e]],this.selected=[],this.saveStudentPositions()}},toggleSwapMode(){this.swapModeActive=!this.swapModeActive,this.selected=[]},stopDragging(e,t){t.position.top=e.target.parentNode.style.top,t.position.left=e.target.parentNode.style.left},saveStudentPositions(){let e=Array.from(document.querySelectorAll(".draggable-div"));for(let t=0;t<this.activeClass.students.length;t++){let n=this.activeClass.students[t];n.position||e.splice(t,0,null);let o=e[t];n.position&&o&&(n.position.top=o.style.top,n.position.left=o.style.left)}this.saveClass()},setStudentIcon(e){this.editStudent.icon===e?this.editStudent.icon="":this.editStudent.icon=e},increaseFontSize(){const e=document.querySelector(".canvas");console.log(e.style.fontSize),e.style.fontSize="2em"},decreaseFontSize(){const e=document.querySelector(".canvas");e.style.fontSize="0.8em"},editStudentClicked(e,t){e.preventDefault(),this.editStudent=JSON.parse(JSON.stringify(this.activeClass.students[t])),this.editStudent.index=""+t,this.editStudentModalActive=!0},closeEditModal(){this.editStudentModalActive=!1,setTimeout(()=>{this.editStudent=null},1e3)},openNewClassNameModal(){this.newClassNameModalActive=!0},closeNewClassNameModal(){this.newClassNameModalActive=!1},openSettingsModal(){this.settingsModalActive=!0},closeSettingsModal(){this.settingsModalActive=!1},openDeleteStudentModal(){this.deleteStudentModalActive=!0},closedeleteStudentModal(){this.deleteStudentModalActive=!1},openDeleteClassModal(){this.deleteClassModalActive=!0},closedeleteClassModal(){this.deleteClassModalActive=!1},saveEditedName(){this.settingsModalActive=!1,this.newClassNameModalActive=!1,this.saveClass()},print(){window.print()},toggleLock(e){e.locked=!e.locked},addStudent(){this.newStudent&&(this.activeClass.students.push({name:this.newStudent,icon:"",notes:"",locked:!1,position:{top:"auto",left:"auto"}}),this.saveClass(),this.newStudent="")},deleteStudent(e){this.deleteStudentModalActive=!1,this.editStudentModalActive=!1,this.activeClass.students.splice(e,1),this.activeClass.students.splice(e,0,{locked:!0,placeholder:!0}),this.saveClass(),setTimeout(()=>{this.editStudent=null},1e3)},editClassStudent(){let e=this.editStudent.index;this.activeClass.students[e]=JSON.parse(JSON.stringify(this.editStudent)),delete this.activeClass.students[e].index,this.closeEditModal()},shuffleArray(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},randomize(){let e=JSON.parse(JSON.stringify(this.activeClass.students)),t=new Map;for(let o=e.length-1;o>=0;o--)e[o].locked&&t.set(o,e.splice(o,1));this.shuffleArray(e);const n=[...t].reverse();n.forEach(([t,n])=>{e.splice(t,0,n[0])}),this.activeClass.students=e,this.saveStudentPositions()},deleteClass(e){this.allClasses.splice(e,1),this.$router.push("/")}},data(){return{newClassNameModalActive:!1,editStudentModalActive:!1,settingsModalActive:!1,deleteClassModalActive:!1,deleteStudentModalActive:!1,swapModeActive:!1,editStudent:null,newStudent:"",activeClass:null,activeIndex:0,classes:[],selected:[]}}};n("6cbb");const Oe=d()(pe,[["render",te],["__scopeId","data-v-ed1eef42"]]);var je=Oe;const he=[{path:"/",name:"Seating Chart Manager | Seat Cheats",component:f},{path:"/:id",name:"Class View | Seat Cheats",component:je}],Ce=Object(b["a"])({history:Object(b["b"])("/seat-cheats/"),routes:he});Ce.afterEach(e=>{Object(o["nextTick"])(()=>{document.title=e.name||"Seat Cheats"})});var ve=Ce;const Se=Object(s["a"])();Se.use(c["a"]),Object(o["createApp"])(u).use(Se).use(ve).mount("#app")},"6b73":function(e,t,n){},"6cbb":function(e,t,n){"use strict";n("1e68")},"83fe":function(e,t,n){"use strict";n("1d8e")},b282:function(e,t,n){},e32d:function(e,t,n){"use strict";n("b282")},f05e:function(e,t,n){}});
//# sourceMappingURL=app.34730369.js.map