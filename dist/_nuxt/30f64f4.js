(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1186:function(f,_,s){"use strict";s.r(_);var v=function(){var e=this,d=e.$createElement,n=e._self._c||d;return n("div",[n("nav",{staticClass:"navbar navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/admin/customers/customer/newcustomer"}},[n("FormulateInput",{attrs:{type:"button"}},[e._v("Add New Customer")])],1)])]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table",attrs:{id:"table","data-toggle":"table"}},[e._m(0),e._v(" "),e._l(e.customers,function(r){return n("tbody",{key:r.id},[n("tr",[n("td",[e._v(e._s(r.id))]),e._v(" "),n("td",[e._v(e._s(r.first_name))]),e._v(" "),n("td",[e._v(e._s(r.last_name))]),e._v(" "),n("td",[e._v(e._s(r.email))]),e._v(" "),n("td",[e._v(e._s(r.customer_since))]),e._v(" "),n("td",[e._v(e._s(r.customer_group))]),e._v(" "),n("td",[n("a",{attrs:{href:"/admin/edit/customer/"+r.id}},[e._v("View")])])])])})],2)])])},g=[function(){var e=this,d=e.$createElement,n=e._self._c||d;return n("thead",{staticClass:"table table-dark"},[n("tr",[n("th",[e._v("Customer ID")]),e._v(" "),n("th",[e._v("Customer First Name")]),e._v(" "),n("th",[e._v("Customer Last Name")]),e._v(" "),n("th",[e._v("Customer Email")]),e._v(" "),n("th",[e._v("Customer Since")]),e._v(" "),n("th",[e._v("Customer Active")]),e._v(" "),n("th",[e._v("Action")])])])}],u=s(558),l=s.n(u),c={data:function(){return{customers:[]}},apollo:{customers:{prefetch:!0,query:l.a}},head:{title:"Customers"}},k=c,i=s(31),a=Object(i.a)(k,v,g,!1,null,null,null),t=_.default=a.exports},558:function(f,_){var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"customers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address_two"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"confirmed_email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_group"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_since"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date_of_birth"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"middle_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name_prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name_suffix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax_vat_number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"zipcode"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:424}};s.loc.source={body:`query MyQuery {\r
  customers {\r
    Address\r
    address_two\r
    confirmed_email\r
    country\r
    customer_group\r
    customer_since\r
    date_of_birth\r
    description\r
    email\r
    first_name\r
    gender\r
    id\r
    image\r
    middle_name\r
    name_prefix\r
    last_name\r
    name_suffix\r
    phone\r
    product\r
    short_description\r
    state\r
    tax_vat_number\r
    thumbnail\r
    websites\r
    zipcode\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var v={};function g(i){return i.filter(function(a){if(a.kind!=="FragmentDefinition")return!0;var t=a.name.value;return v[t]?!1:(v[t]=!0,!0)})}function u(i,a){if(i.kind==="FragmentSpread")a.add(i.name.value);else if(i.kind==="VariableDefinition"){var t=i.type;t.kind==="NamedType"&&a.add(t.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(e){u(e,a)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(e){u(e,a)}),i.definitions&&i.definitions.forEach(function(e){u(e,a)})}var l={};(function(){s.definitions.forEach(function(a){if(a.name){var t=new Set;u(a,t),l[a.name.value]=t}})})();function c(i,a){for(var t=0;t<i.definitions.length;t++){var e=i.definitions[t];if(e.name&&e.name.value==a)return e}}function k(i,a){var t={kind:i.kind,definitions:[c(i,a)]};i.hasOwnProperty("loc")&&(t.loc=i.loc);var e=l[a]||new Set,d=new Set,n=new Set;for(e.forEach(function(m){n.add(m)});n.size>0;){var r=n;n=new Set,r.forEach(function(m){if(!d.has(m)){d.add(m);var o=l[m]||new Set;o.forEach(function(h){n.add(h)})}})}return d.forEach(function(m){var o=c(i,m);o&&t.definitions.push(o)}),t}f.exports=s,f.exports.MyQuery=k(s,"MyQuery")}}]);
