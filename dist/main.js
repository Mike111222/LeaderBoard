(()=>{"use strict";var t={426:(t,n,e)=>{e.d(n,{Z:()=>o});var s=e(81),r=e.n(s),i=e(645),a=e.n(i)()(r());a.push([t.id,"/* styling of the to do list project */\n\n/* body styles */\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  background-color: beige;\n}\n\nh1 {\n  text-align: center;\n}\n\n/* todo tasks form and buttons */\n\n#reset:hover {\n  cursor: pointer;\n}\n\nform {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n/* todays container style  */\n\n.today-container {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  align-items: center;\n}\n\n/* input button */\n\n.inputBtn {\n  display: flex;\n  justify-content: center;\n  width: 90%;\n}\n\n/* text fields input styles */\n\nform input[type='text'] {\n  width: 80%;\n  padding: 10px;\n  border: 2px solid #ccc;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n\n#task-input {\n  width: 80%;\n}\n\n/* submit button */\n\nform button[type='submit'] {\n  padding: 10px;\n  font-size: 1rem;\n  background-color: lightgrey;\n  color: rgba(51, 49, 49, 0.8);\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nform button[type='submit']:hover,\nform button[type='submit']:active {\n  transform: scale(1.1);\n  transition: all 0.2s ease-in;\n  color: green;\n}\n\n/* list container and list items styles */\n\nul {\n  list-style-type: none;\n  padding: 0;\n  width: 80%;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n  border-bottom: 1px solid grey;\n}\n\nli input[type='checkbox'] {\n  margin-right: 12px;\n}\n\nli span {\n  margin-right: 12px;\n  flex: 1;\n}\n\nli button.delete-btn {\n  background-color: beige;\n  color: darkgrey;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n  margin-left: 10px;\n  font-size: 1.2rem;\n}\n\nli button.delete-btn:hover,\nli button.delete-btn:active {\n  transform: scale(1.1);\n  color: black;\n  transition: all 0.3s ease-in-out;\n}\n\n/* Clear Completed Button styles */\n\n#clear-completed {\n  width: 40%;\n  height: 3em;\n  background-color: #fff;\n  font-size: 1em;\n  font-weight: 600;\n  margin-top: -1rem;\n  border-radius: 5px;\n}\n\n#clear-completed:hover {\n  cursor: pointer;\n  transition: all 0.4s ease-in-out;\n  background-color: rgba(243, 37, 37, 0.8);\n  color: #fff;\n}\n\n.clear-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* checkbox checked styles */\n\n.checked {\n  text-decoration: line-through;\n}\n",""]);const o=a},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",s=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),s&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),s&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,s,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(s)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);s&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,s=0;s<n.length;s++)if(n[s].identifier===t){e=s;break}return e}function s(t,s){for(var i={},a=[],o=0;o<t.length;o++){var c=t[o],l=s.base?c[0]+s.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=e(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=r(h,s);s.byIndex=o,n.splice(o,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var i=s(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var o=e(i[a]);n[o].references--}for(var c=s(t,r),l=0;l<i.length;l++){var d=e(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:t=>{var n={};t.exports=function(t,e){var s=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var s="";e.supports&&(s+="@supports (".concat(e.supports,") {")),e.media&&(s+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(s+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),s+=e.css,r&&(s+="}"),e.media&&(s+="}"),e.supports&&(s+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(s,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(s){var r=n[s];if(void 0!==r)return r.exports;var i=n[s]={id:s,exports:{}};return t[s](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),s=e(795),r=e.n(s),i=e(569),a=e.n(i),o=e(565),c=e.n(o),l=e(216),d=e.n(l),u=e(589),p=e.n(u),h=e(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;(new class{constructor(){this.tasks=JSON.parse(localStorage.getItem("tasks"))||[],this.taskForm=document.getElementById("task-form"),this.taskInput=document.getElementById("task-input"),this.taskList=document.getElementById("task-list"),this.clearCompletedBtn=document.getElementById("clear-completed"),this.resetBtn=document.getElementById("reset"),this.taskForm.addEventListener("submit",(t=>{t.preventDefault(),this.tasks=function(t,n){const e=t.value.trim(),s=n.length+1;if(""!==e){const t=new class{constructor(t,n,e){this.name=t,this.status=n,this.id=e}}(e,!1,s);n.push(t)}return n}(this.taskInput,this.tasks),this.saveTasks(),this.displayTasks(),this.taskInput.value=""})),this.clearCompletedBtn.addEventListener("click",(()=>{this.tasks=this.tasks.filter((t=>!t.status)),this.saveTasks(),this.displayTasks()})),this.resetBtn.addEventListener("click",(()=>{this.tasks=[],this.saveTasks(),this.displayTasks()})),this.displayTasks()}editTask(t,n){!function(t,n,e,s,r){const i=e.findIndex((n=>n.id===t));-1!==i&&(e[i].name=n,s(),r())}(t,n,this.tasks,this.saveTasks.bind(this),this.displayTasks.bind(this))}removeTask(t){this.tasks=function(t,n){const e=n.filter((n=>n.id!==t));for(let t=0;t<e.length;t+=1)e[t].id=t+1;return e}(t,this.tasks),this.saveTasks(),this.displayTasks()}toggleTaskStatus(t){this.tasks=function(t,n){return n.map((n=>n.id===t?{...n,status:!n.status}:n))}(t,this.tasks),this.saveTasks(),this.displayTasks()}resetTasks(){this.tasks=[],this.saveTasks(),this.displayTasks()}saveTasks(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}displayTasks(){this.taskList.innerHTML="";for(let t=0;t<this.tasks.length;t+=1){const n=this.tasks[t],e=document.createElement("li");e.innerHTML=`\n        <input type='checkbox' ${n.status?"checked":""}>\n        <span ${n.status?'style="text-decoration: line-through"':""}>\n          ${n.name}\n        </span>\n        <button class="edit-btn">Edit</button>\n        <button class='delete-btn'><i class="fa fa-trash-o" aria-hidden="true"></i></button>\n      `,e.querySelector("input[type=checkbox]").addEventListener("change",(()=>this.toggleTaskStatus(n.id))),e.querySelector(".edit-btn").addEventListener("click",(()=>{const t=prompt("Enter new task name:",n.name);null!==t&&""!==t.trim()&&this.editTask(n.id,t.trim())})),e.querySelector(".delete-btn").addEventListener("click",(()=>this.removeTask(n.id))),this.taskList.appendChild(e)}}}).displayTasks()})()})();