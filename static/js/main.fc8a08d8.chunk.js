(this["webpackJsonpseattle-tolls"]=this["webpackJsonpseattle-tolls"]||[]).push([[0],{175:function(e,t,r){e.exports=r(427)},180:function(e,t,r){},208:function(e,t){},222:function(e,t){},224:function(e,t){},426:function(e,t,r){},427:function(e,t,r){"use strict";r.r(t);var n=r(8),a=r.n(n),o=r(171),c=r.n(o),u=(r(180),r(3)),s=r.n(u),i=r(17),l=r(174),f=r(172),p=r.n(f),h=r(173),d=r.n(h),v=function(e){var t=e.toLowerCase().trim();if("midnight"===t)return 0;var r=t.split(" "),n=parseInt(r[0]);return"p.m."==r[1]&&(n+=12),n},y=function(){var e=Object(i.a)(s.a.mark((function e(t,r,n){var a,o,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.codetabs.com/v1/proxy?quest=".concat(t));case 2:return e.next=4,e.sent.text();case 4:return a=e.sent,o=p.a.parse(a).results,c=Array.from(Array(24)),u=Array.from(Array(24)),[{table:o[0],col:r,ans:c},{table:o[1],col:n,ans:u}].forEach((function(e){var t=e.table,r=e.col,n=e.ans;t.forEach((function(e){var t=e[r].split("to"),a=e["Good To Go! Pass"];if(1!=t.length||"All day"!==t[0])for(var o=v(t[0]);o!=v(t[1]);)n[o]=a,o=(o+1)%24;else for(var c=0;c<24;c++)n[c]=a}))})),e.abrupt("return",{hourToPriceRegular:c,hourToPriceWeekendHoliday:u});case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(s.a.mark((function e(t){var r,n,a,o,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("520"!==t){e.next=9;break}return e.next=3,y("https://wsdot.wa.gov/Tolling/520/520tollrates.htm","Monday - Friday","Weekends and Holidays**");case 3:return r=e.sent,n=r.hourToPriceRegular,a=r.hourToPriceWeekendHoliday,e.abrupt("return",{hourToPriceRegular:n,hourToPriceWeekendHoliday:a});case 9:return e.next=11,y("https://wsdot.wa.gov/tolling/sr-99-tunnel-toll-rates","Monday through Friday","Weekends");case 11:return o=e.sent,c=o.hourToPriceRegular,u=o.hourToPriceWeekendHoliday,e.abrupt("return",{hourToPriceRegular:c,hourToPriceWeekendHoliday:u});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;if(6===e.getDay()||0===e.getDay())return!0;var t=new d.a("US"),r=["New Years","Memorial Day","Independence Day","Labor Day","Thanksgiving","Christmas Day"];return t.isHoliday(e)&&r.indexOf(t.isHoliday(e).name)>=0},m=function(){var e=Object(i.a)(s.a.mark((function e(t){var r,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:if(r=e.sent,n=r.hourToPriceRegular,a=r.hourToPriceWeekendHoliday,!g()){e.next=9;break}return e.abrupt("return",a);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(s.a.mark((function e(t){var r,n,a,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return r=new Date,e.next=5,m(t);case 5:n=e.sent,a="",a+="520"===t?"The 520 bridge costs ":"The 99 tunnel costs ",a+=n[r.getHours()],a+=".",o=r.getHours()%24,c=!1;case 12:if(c){e.next=19;break}if((o=(o+1)%24)!==r.getHours()){e.next=16;break}return e.abrupt("return",a);case 16:c=n[r.getHours()]!==n[o],e.next=12;break;case 19:return a+=" It will cost "+n[o]+" at "+(0==o?"12":o%12)+" "+(o<12?"AM":"PM")+".",e.abrupt("return",a);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();r(426);var k=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,w("520");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"text"},r))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.fc8a08d8.chunk.js.map