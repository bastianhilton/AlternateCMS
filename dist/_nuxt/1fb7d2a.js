(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{399:function(t,e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"product_attribute"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"default_label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"default_value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribute_code"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:114}};n.loc.source={body:"query MyQuery {\r\n  product_attribute {\r\n    default_label\r\n    id\r\n    default_value\r\n    attribute_code\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(t,e){if("FragmentSpread"===t.kind)e.add(t.name.value);else if("VariableDefinition"===t.kind){var n=t.type;"NamedType"===n.kind&&e.add(n.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){r(t,e)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){r(t,e)})),t.definitions&&t.definitions.forEach((function(t){r(t,e)}))}var l={};function c(t,e){for(var i=0;i<t.definitions.length;i++){var element=t.definitions[i];if(element.name&&element.name.value==e)return element}}n.definitions.forEach((function(t){if(t.name){var e=new Set;r(t,e),l[t.name.value]=e}})),t.exports=n,t.exports.MyQuery=function(t,e){var n={kind:t.kind,definitions:[c(t,e)]};t.hasOwnProperty("loc")&&(n.loc=t.loc);var r=l[e]||new Set,o=new Set,d=new Set;for(r.forEach((function(t){d.add(t)}));d.size>0;){var v=d;d=new Set,v.forEach((function(t){o.has(t)||(o.add(t),(l[t]||new Set).forEach((function(t){d.add(t)})))}))}return o.forEach((function(e){var r=c(t,e);r&&n.definitions.push(r)})),n}(n,"MyQuery")},551:function(t,e,n){"use strict";n.r(e);var r=n(399),l={data:function(){return{product_attribute:[]}},apollo:{product_attribute:{prefetch:!0,query:n.n(r).a}},head:{title:"Attributes"}},c=n(22),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("br"),t._v(" "),t._m(1),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-striped"},[t._m(2),t._v(" "),t._l(t.product_attribute,(function(e){return n("tbody",{key:e.id},[n("tr",[t._m(3,!0),t._v(" "),n("td",[t._v(t._s(e.default_label))]),t._v(" "),n("td",[t._v(t._s(e.attribute_code))]),t._v(" "),n("td",[t._v(t._s(e.default_value))]),t._v(" "),t._m(4,!0)])])}))],2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-attribute"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Add New Attribute")])]),t._v(" "),n("form",{staticClass:"d-flex input-group w-auto"},[n("input",{staticClass:"form-control rounded",attrs:{type:"search",placeholder:"Search","aria-label":"Search By Keyword","aria-describedby":"search-addon"}}),t._v(" "),n("span",{staticClass:"input-group-text border-0",attrs:{id:"search-addon"}},[n("i",{staticClass:"fas fa-search"})])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("div",{staticClass:"container-fluid"},[n("h6",{staticClass:"navTotal"},[t._v("3 items found")]),t._v(" "),n("ul",{staticClass:"nav navbar-nav ms-auto"},[n("form",{staticClass:"filterPage",attrs:{action:"/"}},[n("select",{attrs:{id:"filterPagination",name:"filterPagination"}},[n("option",{attrs:{value:"twenty"}},[t._v(" 20 ")]),t._v(" "),n("option",{attrs:{value:"thirty"}},[t._v(" 30 ")]),t._v(" "),n("option",{attrs:{value:"fifty"}},[t._v(" 50 ")]),t._v(" "),n("option",{attrs:{value:"onehundred"}},[t._v(" 100 ")]),t._v(" "),n("option",{attrs:{value:"twohundred"}},[t._v(" 200 ")])]),t._v(" "),n("label",{attrs:{for:"cars"}},[t._v("per page ")])]),t._v(" "),n("nav",{attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"table-dark"},[n("tr",[n("th",{attrs:{scope:"col"}},[n("div",{staticClass:"form-check"},[n("input",{staticClass:"form-check-input",attrs:{id:"flexCheckDefault",type:"checkbox",value:""}})])]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Attribute Name")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Attribute Code")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Attribute Value")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",{attrs:{scope:"row"}},[e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{id:"flexCheckDefault",type:"checkbox",value:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("a",{attrs:{href:"/"}},[t._v("View")])])}],!1,null,null,null);e.default=component.exports}}]);