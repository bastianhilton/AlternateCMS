(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{502:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"returns"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"return_prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"validity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:105}};t.loc.source={body:"query MyQuery {\r\n  returns {\r\n    id\r\n    name\r\n    return_prefix\r\n    validity\r\n    created_at\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.MyQuery=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,l=new Set,v=new Set;for(r.forEach((function(e){v.add(e)}));v.size>0;){var c=v;v=new Set,c.forEach((function(e){l.has(e)||(l.add(e),(d[e]||new Set).forEach((function(e){v.add(e)})))}))}return l.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"MyQuery")},793:function(e,n,t){"use strict";t.r(n);var r=t(502),d={data:function(){return{returns:[]}},apollo:{returns:{prefetch:!0,query:t.n(r).a}},head:{title:"Returns"}},o=t(35),component=Object(o.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav",{staticClass:"navbar navbar-dark bg-dark"},[t("div",{staticClass:"container-fluid"},[t("a",{staticClass:"navbar-brand",attrs:{href:"/Admin/Add-new/add-new-return"}},[t("FormulateInput",{attrs:{type:"button"}},[e._v("New Return Request")])],1)])]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[e._m(0),e._v(" "),e._l(e.returns,(function(n){return t("tbody",{key:n.id},[t("tr",[t("td",[e._v(e._s(n.id))]),e._v(" "),t("td",[e._v(e._s(n.name))]),e._v(" "),t("td",[e._v(e._s(n.validity))]),e._v(" "),t("td",[e._v(e._s(n.return_prefix))]),e._v(" "),t("td",[e._v(e._s(n.created_at))]),e._v(" "),t("td",[t("a",{attrs:{href:"/admin/edit/return/"+n.id}},[e._v("View")])])])])}))],2)])])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("thead",{staticClass:"table table-dark"},[t("tr",[t("th",[e._v("Returns ID")]),e._v(" "),t("th",[e._v("Returns Name")]),e._v(" "),t("th",[e._v("Days of Return")]),e._v(" "),t("th",[e._v("Returns Prefix")]),e._v(" "),t("th",[e._v("Return Created")]),e._v(" "),t("th",[e._v("Action")])])])}],!1,null,null,null);n.default=component.exports}}]);