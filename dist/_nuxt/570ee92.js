(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{1116:function(d,t,r){"use strict";r.r(t);var l=function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("FormulateInput",{on:{click:a.showMessageFromBackend}},[a._v("Show message from backend")])},c=[],u=r(6),h=r(42),v={methods:{showMessageFromBackend:function(){var s=this;return Object(u.a)(regeneratorRuntime.mark(function n(){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.$axios.get("/api/test");case 3:o=e.sent,console.log(o.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},n,null,[[0,7]])}))()}}},i=v,m=r(31),p=Object(m.a)(i,l,c,!1,null,null,null),g=t.default=p.exports}}]);