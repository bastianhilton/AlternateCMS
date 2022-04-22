(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{489:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"allAgreements"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"agreements"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"excerpt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reference_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updated"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:156}};t.loc.source={body:"query allAgreements {\r\n  agreements {\r\n    id\r\n    name\r\n    image\r\n    created\r\n    excerpt\r\n    content\r\n    reference_id\r\n    type\r\n    updated\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.allAgreements=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,c=new Set,o=new Set;for(r.forEach((function(e){o.add(e)}));o.size>0;){var v=o;o=new Set,v.forEach((function(e){c.has(e)||(c.add(e),(d[e]||new Set).forEach((function(e){o.add(e)})))}))}return c.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"allAgreements")},787:function(e,n,t){"use strict";t.r(n);var r=t(489),d={data:function(){return{agreements:[]}},apollo:{agreements:{prefetch:!0,query:t.n(r).a}},head:{title:"Agreements"}},l=t(35),component=Object(l.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav",{staticClass:"navbar navbar-dark bg-dark"},[t("div",{staticClass:"container-fluid"},[t("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-agreement"}},[t("FormulateInput",{attrs:{type:"button"}},[e._v("Create New Agreement")])],1)])]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[e._m(0),e._v(" "),e._l(e.agreements,(function(n){return t("tbody",{key:n.id},[t("tr",[t("td",[e._v(e._s(n.id))]),e._v(" "),t("td",[e._v(e._s(n.name))]),e._v(" "),t("td",[e._v(e._s(n.excerpt))]),e._v(" "),t("td",[e._v(e._s(n.created))]),e._v(" "),t("td",[e._v(e._s(n.updated))]),e._v(" "),t("td",[e._v(e._s(n.type))]),e._v(" "),t("td",[t("a",{attrs:{href:"/admin/edit/agreement/"+n.id}},[e._v("View")])])])])}))],2)])])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("thead",{staticClass:"table table-dark"},[t("tr",[t("th",[e._v("Agreement ID")]),e._v(" "),t("th",[e._v("Agreement Name")]),e._v(" "),t("th",[e._v("Agreement Excerpt")]),e._v(" "),t("th",[e._v("Agreement Created On")]),e._v(" "),t("th",[e._v("Agreement Updated On")]),e._v(" "),t("td",[e._v("Agreement Type")]),e._v(" "),t("th",[e._v("Action")])])])}],!1,null,null,null);n.default=component.exports}}]);