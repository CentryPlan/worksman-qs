(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function s(e){return i.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"b4434537"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"438b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-gray-200",attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},a=[],s=(n("96cf"),n("1da1")),i={methods:{reload:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$router.go(e.$router.currentRoute);case 1:case"end":return t.stop()}}),t)})))()}}},u=i,c=(n("5a93"),n("2877")),l=Object(c["a"])(u,o,a,!1,null,null,null),f=l.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var p=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Logo",{attrs:{size:"large"}})],1)},m=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-row text-2xl font-bold text-yellow-400",attrs:{id:"logo"}},[r("img",{class:e.logosize,attrs:{alt:"Vue logo",src:n("a92d")}}),r("span",{class:e.text_adjust},[e._v("QS")]),r("span",{class:e.reg_adjust},[e._v("®")])])},v=[],b={name:"logo",props:["size"],data:function(){return{text_adjust:null,reg_adjust:null}},computed:{logosize:function(){return"large"==this.size?(this.text_adjust="mt-5",this.reg_adjust="mt-6 text-lg text-green-400 font-bold","w-32"):"medium"==this.size?(this.text_adjust="mt-1",this.reg_adjust="mt-2 text-lg text-green-400 font-bold","w-16"):"small"==this.size?(this.text_adjust="mt-1 text-lg",this.reg_adjust="mt-1 text-sm text-green-400 font-bold","w-10"):(this.text_adjust="mt-1 text-sm",this.reg_adjust="mt-1 text-sm text-green-400 font-bold","w-8")}}},w=b,x=Object(c["a"])(w,h,v,!1,null,null,null),j=x.exports,_={name:"Home",components:{Logo:j}},y=_,O=Object(c["a"])(y,g,m,!1,null,null,null),k=O.exports;r["a"].use(p["a"]);var P=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],S=new p["a"]({mode:"history",base:"/",routes:P}),z=S,E=n("2f62");r["a"].use(E["a"]);var A=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:z,store:A,render:function(e){return e(f)}}).$mount("#app")},"5a93":function(e,t,n){"use strict";var r=n("438b"),o=n.n(r);o.a},a92d:function(e,t,n){e.exports=n.p+"static/img/favicon.681c3e6a.svg"}});
//# sourceMappingURL=app.fd99e1f6.js.map