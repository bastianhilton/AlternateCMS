(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{452:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"glossary"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"published"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:96}};t.loc.source={body:"query MyQuery {\r\n  glossary {\r\n    id\r\n    name\r\n    image\r\n    content\r\n    published\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function d(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.MyQuery=function(e,n){var t={kind:e.kind,definitions:[d(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,l=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var v=c;c=new Set,v.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){c.add(e)})))}))}return l.forEach((function(n){var r=d(e,n);r&&t.definitions.push(r)})),t}(t,"MyQuery")},573:function(e,n,t){"use strict";t.r(n);var r=t(452),o={data:function(){return{glossary:[]}},apollo:{glossary:{prefetch:!0,query:t.n(r).a}},head:{title:"Glossary"}},d=t(29),component=Object(d.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav",{staticClass:"navbar navbar-dark bg-dark"},[t("div",{staticClass:"container-fluid"},[t("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-glossary"}},[t("FormulateInput",{attrs:{type:"button"}},[e._v("Add New Glossary Term")])],1)])]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"table table-responsive"},[t("table",{attrs:{id:"table","data-toggle":"table","data-pagination":"true","data-search":"true","data-show-columns":"true","data-show-export":"true","data-show-toggle":"true","data-click-to-select":"true","data-show-multi-sort":"true","data-show-print":"true"}},[e._m(0),e._v(" "),e._l(e.glossary,(function(n){return t("tbody",{key:n.id},[t("tr",[t("td",[e._v(e._s(n.id))]),e._v(" "),t("td",[e._v(e._s(n.image))]),e._v(" "),t("td",[e._v(e._s(n.name))]),e._v(" "),t("td",[e._v(e._s(n.content))]),e._v(" "),e._m(1,!0)])])}))],2)])])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("thead",{staticClass:"table table-dark"},[t("tr",[t("th",[e._v("Glossary ID")]),e._v(" "),t("th",[e._v("Glossary Image")]),e._v(" "),t("th",[e._v("Glossary Name")]),e._v(" "),t("th",[e._v("Glossary Description")]),e._v(" "),t("th",[e._v("Action")])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("td",[t("a",{attrs:{href:"/"}},[e._v("View")])])}],!1,null,null,null);n.default=component.exports}}]);