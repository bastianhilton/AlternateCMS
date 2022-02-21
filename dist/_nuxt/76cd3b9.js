(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{408:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"reviews"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:120}};n.loc.source={body:"query MyQuery {\r\n  reviews {\r\n    id\r\n    first_name\r\n    last_name\r\n    content\r\n    websites\r\n    created_at\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var l={};function c(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),l[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[c(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=l[t]||new Set,o=new Set,v=new Set;for(r.forEach((function(e){v.add(e)}));v.size>0;){var d=v;v=new Set,d.forEach((function(e){o.has(e)||(o.add(e),(l[e]||new Set).forEach((function(e){v.add(e)})))}))}return o.forEach((function(t){var r=c(e,t);r&&n.definitions.push(r)})),n}(n,"MyQuery")},533:function(e,t,n){"use strict";n.r(t);var r=n(408),l={data:function(){return{reviews:[]}},apollo:{reviews:{prefetch:!0,query:n.n(r).a}},head:{title:"Reviews"}},c=n(22),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("br"),e._v(" "),e._m(1),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-striped"},[e._m(2),e._v(" "),e._l(e.reviews,(function(t){return n("tbody",{key:t.id},[n("tr",[e._m(3,!0),e._v(" "),n("td",[e._v(e._s(t.first_name)+" "+e._s(t.last_name))]),e._v(" "),n("td",[e._v(e._s(t.content))]),e._v(" "),n("td",[e._v(e._s(t.created_at))]),e._v(" "),e._m(4,!0)])])}))],2)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-review"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[e._v("Create A Review")])]),e._v(" "),n("form",{staticClass:"d-flex input-group w-auto"},[n("input",{staticClass:"form-control rounded",attrs:{type:"search",placeholder:"Search","aria-label":"Search By Keyword","aria-describedby":"search-addon"}}),e._v(" "),n("span",{staticClass:"input-group-text border-0",attrs:{id:"search-addon"}},[n("i",{staticClass:"fas fa-search"})])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("div",{staticClass:"container-fluid"},[n("h6",{staticClass:"navTotal"},[e._v("3 items found")]),e._v(" "),n("ul",{staticClass:"nav navbar-nav ms-auto"},[n("form",{staticClass:"filterPage",attrs:{action:"/"}},[n("select",{attrs:{id:"filterPagination",name:"filterPagination"}},[n("option",{attrs:{value:"twenty"}},[e._v(" 20 ")]),e._v(" "),n("option",{attrs:{value:"thirty"}},[e._v(" 30 ")]),e._v(" "),n("option",{attrs:{value:"fifty"}},[e._v(" 50 ")]),e._v(" "),n("option",{attrs:{value:"onehundred"}},[e._v(" 100 ")]),e._v(" "),n("option",{attrs:{value:"twohundred"}},[e._v(" 200 ")])]),e._v(" "),n("label",{attrs:{for:"cars"}},[e._v("per page ")])]),e._v(" "),n("nav",{attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])]),e._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[e._v("1")])]),e._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[e._v("2")])]),e._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[e._v("3")])]),e._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])])])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",{staticClass:"table-dark"},[n("tr",[n("th",{attrs:{scope:"col"}},[n("div",{staticClass:"form-check"},[n("input",{staticClass:"form-check-input",attrs:{id:"flexCheckDefault",type:"checkbox",value:""}})])]),e._v(" "),n("th",{attrs:{scope:"col"}},[e._v("Customer Name")]),e._v(" "),n("th",{attrs:{scope:"col"}},[e._v("Review")]),e._v(" "),n("th",{attrs:{scope:"col"}},[e._v("Created On")]),e._v(" "),n("th",{attrs:{scope:"col"}},[e._v("Action")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("th",{attrs:{scope:"row"}},[t("div",{staticClass:"form-check"},[t("input",{staticClass:"form-check-input",attrs:{id:"flexCheckDefault",type:"checkbox",value:""}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",[n("a",{attrs:{href:"/"}},[e._v("View")])])}],!1,null,null,null);t.default=component.exports}}]);