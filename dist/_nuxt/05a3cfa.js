(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{506:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"states"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:96}};t.loc.source={body:"query MyQuery {\r\n  states {\r\n    id\r\n    name\r\n    description\r\n    image\r\n    country\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.MyQuery=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,c=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){c.has(e)||(c.add(e),(d[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"MyQuery")},806:function(e,n,t){"use strict";t.r(n);var r=t(506),d={data:function(){return{states:[]}},apollo:{states:{prefetch:!0,query:t.n(r).a}},head:{title:"States"}},o=t(35),component=Object(o.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav",{staticClass:"navbar navbar-dark bg-dark"},[t("div",{staticClass:"container-fluid"},[t("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-state"}},[t("FormulateInput",{attrs:{type:"button"}},[e._v("Add New State")])],1)])]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[e._m(0),e._v(" "),e._l(e.states,(function(n){return t("tbody",{key:n.id},[t("tr",[t("td",[e._v(e._s(n.id))]),e._v(" "),t("td",[e._v(e._s(n.name))]),e._v(" "),t("td",[e._v(e._s(n.description))]),e._v(" "),t("td",[e._v(e._s(n.country))]),e._v(" "),t("td",[t("a",{attrs:{href:"/admin/edit/states/"+n.id}},[e._v("View")])])])])}))],2)])])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("thead",{staticClass:"table table-dark"},[t("tr",[t("th",[e._v("State ID")]),e._v(" "),t("th",[e._v("State Title")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Country")]),e._v(" "),t("th",[e._v("Action")])])])}],!1,null,null,null);n.default=component.exports}}]);