(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{458:function(t,e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shipments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"carrier_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ship_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"speed_grade"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tracking_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"transit_time"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:158}};n.loc.source={body:"query MyQuery {\r\n  shipments {\r\n    id\r\n    carrier_name\r\n    image\r\n    product\r\n    ship_date\r\n    speed_grade\r\n    tracking_url\r\n    transit_time\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(t,e){if("FragmentSpread"===t.kind)e.add(t.name.value);else if("VariableDefinition"===t.kind){var n=t.type;"NamedType"===n.kind&&e.add(n.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){r(t,e)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){r(t,e)})),t.definitions&&t.definitions.forEach((function(t){r(t,e)}))}var l={};function o(t,e){for(var i=0;i<t.definitions.length;i++){var element=t.definitions[i];if(element.name&&element.name.value==e)return element}}n.definitions.forEach((function(t){if(t.name){var e=new Set;r(t,e),l[t.name.value]=e}})),t.exports=n,t.exports.MyQuery=function(t,e){var n={kind:t.kind,definitions:[o(t,e)]};t.hasOwnProperty("loc")&&(n.loc=t.loc);var r=l[e]||new Set,d=new Set,v=new Set;for(r.forEach((function(t){v.add(t)}));v.size>0;){var c=v;v=new Set,c.forEach((function(t){d.has(t)||(d.add(t),(l[t]||new Set).forEach((function(t){v.add(t)})))}))}return d.forEach((function(e){var r=o(t,e);r&&n.definitions.push(r)})),n}(n,"MyQuery")},601:function(t,e,n){"use strict";n.r(e);var r=n(458),l={data:function(){return{shipments:[]}},apollo:{shipments:{prefetch:!0,query:n.n(r).a}},head:{title:"Shipments"}},o=n(29),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-shipment"}},[n("FormulateInput",{attrs:{type:"button"}},[t._v("Create new Shipment")])],1),t._v(" "),n("ul",{staticClass:"navbar-nav"},[n("form",{staticClass:"filterAction",attrs:{action:"/"}},[n("label",{attrs:{for:"actions"}},[t._v("Actions: ")]),t._v(" "),n("FormulateInput",{attrs:{type:"select",options:t.categories.name,id:"actions",name:"actions"}},[n("option",{attrs:{value:"volvo"}},[t._v("Volvo")]),t._v(" "),n("option",{attrs:{value:"saab"}},[t._v("Saab")]),t._v(" "),n("option",{attrs:{value:"opel"}},[t._v("Opel")]),t._v(" "),n("option",{attrs:{value:"audi"}},[t._v("Audi")])])],1)]),t._v(" "),n("h6",{staticClass:"navTotal"},[t._v("3 items found")]),t._v(" "),n("ul",{staticClass:"nav navbar-nav ms-auto"},[n("form",{staticClass:"filterPage",attrs:{action:"/"}},[n("FormulateInput",{attrs:{type:"select",options:t.categories.name,id:"filterPagination",name:"filterPagination"}},[n("option",{attrs:{value:"twenty"}},[t._v(" 20 ")]),t._v(" "),n("option",{attrs:{value:"thirty"}},[t._v(" 30 ")]),t._v(" "),n("option",{attrs:{value:"fifty"}},[t._v(" 50 ")]),t._v(" "),n("option",{attrs:{value:"onehundred"}},[t._v(" 100 ")]),t._v(" "),n("option",{attrs:{value:"twohundred"}},[t._v(" 200 ")])]),t._v(" "),n("label",{attrs:{for:"cars"}},[t._v("per page ")])],1),t._v(" "),t._m(0)])])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"table table-responsive"},[n("table",{attrs:{id:"table","data-toggle":"table","data-pagination":"true","data-search":"true","data-show-columns":"true","data-show-export":"true","data-show-toggle":"true","data-click-to-select":"true","data-show-multi-sort":"true","data-show-print":"true"}},[t._m(1),t._v(" "),t._l(t.shipments,(function(e){return n("tbody",{key:e.id},[n("tr",[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.carrier_name))]),t._v(" "),n("td",[t._v(t._s(e.image))]),t._v(" "),n("td",[t._v(t._s(e.transit_time))]),t._v(" "),n("td",[t._v(t._s(e.speed_grade))]),t._v(" "),t._m(2,!0)])])}))],2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("2")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("3")])]),t._v(" "),n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"table table-dark"},[n("tr",[n("th",[t._v("ID")]),t._v(" "),n("th",[t._v("Carrier Name")]),t._v(" "),n("th",[t._v("Logo")]),t._v(" "),n("th",[t._v("Transit Time")]),t._v(" "),n("th",[t._v("Transit Speed")]),t._v(" "),n("th",[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("a",{attrs:{href:"/"}},[t._v("View")])])}],!1,null,null,null);e.default=component.exports}}]);