(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{564:function(f,k){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"customers"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"5"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address_two"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"confirmed_email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_group"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_since"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date_of_birth"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"middle_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name_prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name_suffix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax_vat_number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"zipcode"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:434}};r.loc.source={body:`query MyQuery {\r
  customers(limit: 5) {\r
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
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var v={};function g(n){return n.filter(function(a){if(a.kind!=="FragmentDefinition")return!0;var t=a.name.value;return v[t]?!1:(v[t]=!0,!0)})}function u(n,a){if(n.kind==="FragmentSpread")a.add(n.name.value);else if(n.kind==="VariableDefinition"){var t=n.type;t.kind==="NamedType"&&a.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(e){u(e,a)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(e){u(e,a)}),n.definitions&&n.definitions.forEach(function(e){u(e,a)})}var l={};(function(){r.definitions.forEach(function(a){if(a.name){var t=new Set;u(a,t),l[a.name.value]=t}})})();function c(n,a){for(var t=0;t<n.definitions.length;t++){var e=n.definitions[t];if(e.name&&e.name.value==a)return e}}function _(n,a){var t={kind:n.kind,definitions:[c(n,a)]};n.hasOwnProperty("loc")&&(t.loc=n.loc);var e=l[a]||new Set,d=new Set,i=new Set;for(e.forEach(function(m){i.add(m)});i.size>0;){var s=i;i=new Set,s.forEach(function(m){if(!d.has(m)){d.add(m);var o=l[m]||new Set;o.forEach(function(p){i.add(p)})}})}return d.forEach(function(m){var o=c(n,m);o&&t.definitions.push(o)}),t}f.exports=r,f.exports.MyQuery=_(r,"MyQuery")},624:function(f,k,r){"use strict";r.r(k);var v=function(){var e=this,d=e.$createElement,i=e._self._c||d;return i("div",[i("div",{staticClass:"table table-responsive table-bordered latestOrders col"},[i("table",{staticClass:"table"},[e._m(0),e._v(" "),e._l(e.customers,function(s){return i("tbody",{key:s.id},[i("tr",[i("th",{attrs:{scope:"row"}},[e._v(e._s(s.id))]),e._v(" "),i("td",[e._v(e._s(s.first_name))]),e._v(" "),i("td",[e._v(e._s(s.last_name))]),e._v(" "),i("td",[e._v(e._s(s.customer_since))]),e._v(" "),i("td",[e._v(e._s(s.email))])])])})],2)])])},g=[function(){var e=this,d=e.$createElement,i=e._self._c||d;return i("thead",[i("tr",[i("th",[e._v("Customer ID")]),e._v(" "),i("th",[e._v("Customer First Name")]),e._v(" "),i("th",[e._v("Customer Last Name")]),e._v(" "),i("th",[e._v("Customer Since")]),e._v(" "),i("th",[e._v("Email")])])])}],u=r(564),l=r.n(u),c={data:function(){return{customers:[]}},apollo:{customers:{prefetch:!0,query:l.a}}},_=c,n=r(31),a=Object(n.a)(_,v,g,!1,null,null,null),t=k.default=a.exports}}]);
