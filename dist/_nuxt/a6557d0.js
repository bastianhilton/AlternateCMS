(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1196:function(_,f,d){"use strict";d.r(f);var u=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",[n("nav",{staticClass:"navbar navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-contract"}},[n("FormulateInput",{attrs:{type:"button"}},[e._v("Add New Contract")])],1)])]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table",attrs:{id:"table","data-toggle":"table"}},[e._m(0),e._v(" "),e._l(e.contracts,function(r){return n("tbody",{key:r.id},[n("tr",[n("td",[e._v(e._s(r.contract_title))]),e._v(" "),n("td",[e._v(e._s(r.status))]),e._v(" "),n("td",[e._v(e._s(r.contract_manager))]),e._v(" "),n("td",[e._v(e._s(r.account))]),e._v(" "),n("td",[e._v(e._s(r.contract_value))]),e._v(" "),n("td",[e._v(e._s(r.start_date))]),e._v(" "),n("td",[e._v(e._s(r.end_date))]),e._v(" "),n("td",[n("a",{attrs:{href:"/admin/edit/contracts/"+r.id}},[e._v("View")])])])])})],2)])])},g=[function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("thead",{staticClass:"table table-dark"},[n("tr",[n("th",[e._v("Contract Title")]),e._v(" "),n("th",[e._v("Status")]),e._v(" "),n("th",[e._v("Contract Manager")]),e._v(" "),n("th",[e._v("Account")]),e._v(" "),n("th",[e._v("Contract Value")]),e._v(" "),n("th",[e._v("Start Date")]),e._v(" "),n("th",[e._v("End Date")]),e._v(" "),n("th",[e._v("Action")])])])}],l=d(569),v=d.n(l),o={data:function(){return{contracts:[]}},apollo:{contracts:{prefetch:!0,query:v.a}},head:{title:"Contracts"}},k=o,t=d(31),a=Object(t.a)(k,u,g,!1,null,null,null),i=f.default=a.exports},569:function(_,f){var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"contracts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"account"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"company_signed_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contact"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contract_manager"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contract_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contract_type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contract_value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_signed_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"discount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"end_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grand_total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_items"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"opportunity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"renewal_reminder"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_tax"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"start_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subtotal"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:447}};d.loc.source={body:`query MyQuery {\r
  contracts {\r
    id\r
    account\r
    company_signed_date\r
    contact\r
    contract_manager\r
    contract_title\r
    contract_type\r
    contract_value\r
    created_at\r
    currency\r
    customer_signed_date\r
    description\r
    discount\r
    end_date\r
    grand_total\r
    line_items\r
    opportunity\r
    renewal_reminder\r
    shipping\r
    shipping_tax\r
    start_date\r
    status\r
    total\r
    tax\r
    subtotal\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var u={};function g(t){return t.filter(function(a){if(a.kind!=="FragmentDefinition")return!0;var i=a.name.value;return u[i]?!1:(u[i]=!0,!0)})}function l(t,a){if(t.kind==="FragmentSpread")a.add(t.name.value);else if(t.kind==="VariableDefinition"){var i=t.type;i.kind==="NamedType"&&a.add(i.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(e){l(e,a)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(e){l(e,a)}),t.definitions&&t.definitions.forEach(function(e){l(e,a)})}var v={};(function(){d.definitions.forEach(function(a){if(a.name){var i=new Set;l(a,i),v[a.name.value]=i}})})();function o(t,a){for(var i=0;i<t.definitions.length;i++){var e=t.definitions[i];if(e.name&&e.name.value==a)return e}}function k(t,a){var i={kind:t.kind,definitions:[o(t,a)]};t.hasOwnProperty("loc")&&(i.loc=t.loc);var e=v[a]||new Set,s=new Set,n=new Set;for(e.forEach(function(c){n.add(c)});n.size>0;){var r=n;n=new Set,r.forEach(function(c){if(!s.has(c)){s.add(c);var m=v[c]||new Set;m.forEach(function(p){n.add(p)})}})}return s.forEach(function(c){var m=o(t,c);m&&i.definitions.push(m)}),i}_.exports=d,_.exports.MyQuery=k(d,"MyQuery")}}]);
