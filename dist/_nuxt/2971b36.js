(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{447:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"product_attribute"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"default_label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"default_value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribute_code"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:114}};n.loc.source={body:"query MyQuery {\r\n  product_attribute {\r\n    default_label\r\n    id\r\n    default_value\r\n    attribute_code\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var d={};function o(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),d[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[o(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=d[t]||new Set,l=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var v=c;c=new Set,v.forEach((function(e){l.has(e)||(l.add(e),(d[e]||new Set).forEach((function(e){c.add(e)})))}))}return l.forEach((function(t){var r=o(e,t);r&&n.definitions.push(r)})),n}(n,"MyQuery")},603:function(e,t,n){"use strict";n.r(t);var r=n(447),d={data:function(){return{product_attribute:[]}},apollo:{product_attribute:{prefetch:!0,query:n.n(r).a}},head:{title:"Attributes"}},o=n(29),component=Object(o.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"navbar navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-attribute"}},[n("FormulateInput",{attrs:{type:"button"}},[e._v("Add New Attribute")])],1)])]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"table table-responsive"},[n("table",{attrs:{id:"table","data-toggle":"table","data-pagination":"true","data-search":"true","data-show-columns":"true","data-show-export":"true","data-show-toggle":"true","data-click-to-select":"true","data-show-multi-sort":"true","data-show-print":"true"}},[e._m(0),e._v(" "),e._l(e.product_attribute,(function(t){return n("tbody",{key:t.id},[n("tr",[n("td",[e._v(e._s(t.default_label))]),e._v(" "),n("td",[e._v(e._s(t.attribute_code))]),e._v(" "),n("td",[e._v(e._s(t.default_value))]),e._v(" "),e._m(1,!0)])])}))],2)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",{staticClass:"table table-dark"},[n("tr",[n("th",[e._v("Attribute Name")]),e._v(" "),n("th",[e._v("Attribute Code")]),e._v(" "),n("th",[e._v("Attribute Value")]),e._v(" "),n("th",[e._v("Action")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",[n("a",{attrs:{href:"/"}},[e._v("View")])])}],!1,null,null,null);t.default=component.exports}}]);