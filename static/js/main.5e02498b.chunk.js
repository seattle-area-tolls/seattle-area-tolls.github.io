(this["webpackJsonpseattle-tolls"]=this["webpackJsonpseattle-tolls"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('{"99":{"hourToPriceRegular":["$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.25","$1.50","$1.50","$1.25","$1.25","$1.25","$1.25","$1.25","$1.25","$2.25","$2.25","$2.25","$1.25","$1.25","$1.25","$1.25","$1.25","$1.00"],"hourToPriceWeekendHoliday":["$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00","$1.00"]},"520":{"hourToPriceRegular":["$1.25","$1.25","$1.25","$1.25","$1.25","$2.00","$3.40","$4.30","$4.30","$3.40","$2.70","$2.70","$2.70","$2.70","$3.40","$4.30","$4.30","$4.30","$3.40","$2.70","$2.70","$2.00","$2.00","$1.25"],"hourToPriceWeekendHoliday":["$1.25","$1.25","$1.25","$1.25","$1.25","$1.40","$1.40","$1.40","$2.05","$2.05","$2.05","$2.65","$2.65","$2.65","$2.65","$2.65","$2.65","$2.65","$2.05","$2.05","$2.05","$1.40","$1.40","$1.25"]}}')},31:function(e,t,n){e.exports=n(75)},36:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(26),$=n.n(c),o=(n(36),n(4)),u=n.n(o),i=n(8),s=n(30),l=n(27),f=n.n(l),h=n(28),m=function(e){if(6===e.getDay()||0===e.getDay())return!0;var t=new f.a("US");return t.isHoliday(e)&&["New Years","Memorial Day","Independence Day","Labor Day","Thanksgiving","Christmas Day"].indexOf(t.isHoliday(e).name)>=0},p=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,r,a,c,$=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=$.length>1&&void 0!==$[1]?$[1]:new Date,r=h[t],a=r.hourToPriceRegular,c=r.hourToPriceWeekendHoliday,!m(n)){e.next=6;break}return e.abrupt("return",c);case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,r,a,c,$,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return n=new Date,e.next=5,p(t);case 5:r=e.sent,a=r,c="",c+="520"===t?"The 520 bridge costs ":"The 99 tunnel costs ",c+=r[n.getHours()],c+=".",$=n.getHours()%24,o=!1;case 13:if(o){e.next=21;break}if(($+=1)>=24&&($%=24,(i=new Date(n)).setDate(i.getDate()+1),a=p(t,i)),$!==n.getHours()){e.next=18;break}return e.abrupt("return",c);case 18:o=r[n.getHours()]!==a[$],e.next=13;break;case 21:return c+=" It will cost "+r[$]+" at "+(0===$?"12":$%12)+" "+($<12?"AM":"PM")+".",e.abrupt("return",c);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=n(29);n(74);function v(e){var t=e.name,n=Object(r.useState)(""),c=Object(s.a)(n,2),$=c[0],o=c[1];return Object(r.useEffect)((function(){function e(){return n.apply(this,arguments)}function n(){return(n=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,d(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var r=setInterval((function(){e()}),6e4);return e(),function(){return clearInterval(r)}}),[t]),a.a.createElement(a.a.Fragment,null,$)}function g(){return a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"?99"},"99")),a.a.createElement("li",null,a.a.createElement("a",{href:"?520"},"520")))}var b=function(){return a.a.createElement(w.a,{className:"App"},a.a.createElement("div",{className:"text"},function(){switch(window.location.search){case"?520":return a.a.createElement(v,{name:"520"});case"?99":return a.a.createElement(v,{name:"99"});default:return a.a.createElement(g,null)}}()))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));$.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.5e02498b.chunk.js.map