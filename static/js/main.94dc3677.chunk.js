(this["webpackJsonpseattle-tolls"]=this["webpackJsonpseattle-tolls"]||[]).push([[0],{175:function(e,t,r){e.exports=r(427)},180:function(e,t,r){},208:function(e,t){},222:function(e,t){},224:function(e,t){},426:function(e,t,r){},427:function(e,t,r){"use strict";r.r(t);var n=r(8),a=r.n(n),o=r(171),c=r.n(o),s=(r(180),r(3)),u=r.n(s),i=r(17),l=r(174),f=r(172),p=r.n(f),d=r(173),h=r.n(d),v=function(e){var t=e.toLowerCase().trim();if("midnight"===t)return 0;var r=t.split(" "),n=parseInt(r[0]);return"p.m."==r[1]&&(n+=12),n},b=function(){var e=Object(i.a)(u.a.mark((function e(t,r,n){var a,o,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.codetabs.com/v1/proxy?quest=".concat(t));case 2:return e.next=4,e.sent.text();case 4:return a=e.sent,o=p.a.parse(a).results,c=Array.from(Array(24)),s=Array.from(Array(24)),[{table:o[0],col:r,ans:c},{table:o[1],col:n,ans:s}].forEach((function(e){var t=e.table,r=e.col,n=e.ans;t.forEach((function(e){var t=e[r].split("to"),a=e["Good To Go! Pass"];if(1!=t.length||"All day"!==t[0])for(var o=v(t[0]);o!=v(t[1]);)n[o]=a,o=(o+1)%24;else for(var c=0;c<24;c++)n[c]=a}))})),e.abrupt("return",{hourToPriceRegular:c,hourToPriceWeekendHoliday:s});case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(u.a.mark((function e(){var t,r,n,a,o,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("https://wsdot.wa.gov/Tolling/520/520tollrates.htm","Monday - Friday","Weekends and Holidays**");case 2:return t=e.sent,r=t.hourToPriceRegular,n=t.hourToPriceWeekendHoliday,e.next=7,b("https://wsdot.wa.gov/tolling/sr-99-tunnel-toll-rates","Monday through Friday","Weekends");case 7:return a=e.sent,o=a.hourToPriceRegular,c=a.hourToPriceWeekendHoliday,e.abrupt("return",{road520Regular:r,road520Special:n,road99Regular:o,road99Special:c});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;if(6===e.getDay()||0===e.getDay())return!0;var t=new h.a("US"),r=["New Years","Memorial Day","Independence Day","Labor Day","Thanksgiving","Christmas Day"];return t.isHoliday(e)&&r.indexOf(t.isHoliday(e).name)>=0},m=function(){var e=Object(i.a)(u.a.mark((function e(t){var r,n,a,o,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:if(r=e.sent,n=r.road520Regular,a=r.road520Special,o=r.road99Regular,c=r.road99Special,"520"!=t){e.next=15;break}if(!g()){e.next=12;break}return e.abrupt("return",a);case 12:return e.abrupt("return",n);case 13:e.next=20;break;case 15:if(!g()){e.next=19;break}return e.abrupt("return",o);case 19:return e.abrupt("return",c);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(u.a.mark((function e(t){var r,n,a,o,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Date,e.next=3,m(t);case 3:n=e.sent,a="",a+="520"===t?"The 520 bridge costs ":"The 99 tunnel costs ",a+=n[r.getHours()],a+=".",o=r.getHours()%24,c=!1;case 10:if(c){e.next=17;break}if((o=(o+1)%24)!==r.getHours()){e.next=14;break}return e.abrupt("return",a);case 14:c=n[r.getHours()]!==n[o],e.next=10;break;case 17:return a+=" It will cost "+n[o]+" at "+(0==o?"12":o%12)+" "+(o<12?"AM":"PM")+".",e.abrupt("return",a);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();r(426);var x=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,w("520");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"text"},r))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.94dc3677.chunk.js.map