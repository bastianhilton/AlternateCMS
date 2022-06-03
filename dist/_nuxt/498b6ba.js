(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1222:function(_,k,d){"use strict";d.r(k);var v=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[i("nav",{staticClass:"navbar navbar-dark bg-dark"},[i("div",{staticClass:"container-fluid"},[i("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-quote"}},[i("FormulateInput",{attrs:{type:"button"}},[e._v("Create A Quote")])],1)])]),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"table table-responsive"},[i("table",{staticClass:"table",attrs:{"data-toggle":"table",id:"table"}},[e._m(0),e._v(" "),e._l(e.quotes,function(r){return i("tbody",{key:r.id},[i("tr",[i("td",[e._v(e._s(r.id))]),e._v(" "),i("td",[e._v(e._s(r.name))]),e._v(" "),i("td",[e._v(e._s(r.quote_stage))]),e._v(" "),i("td",[e._v(e._s(r.customers))]),e._v(" "),i("td",[e._v(e._s(r.order.id))]),e._v(" "),i("td",[e._v(e._s(r.grand_total))]),e._v(" "),i("td",[e._v(e._s(r.valid_until))]),e._v(" "),i("td",[i("a",{attrs:{href:"/admin/edit/quotes/"+r.id}},[e._v("View")])])])])})],2)])])},p=[function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("thead",{staticClass:"table table-dark"},[i("tr",[i("th",[e._v("Quote ID")]),e._v(" "),i("th",[e._v("Quote Name")]),e._v(" "),i("th",[e._v("Quote Stage")]),e._v(" "),i("th",[e._v("Contact")]),e._v(" "),i("th",[e._v("Account")]),e._v(" "),i("th",[e._v("Grand Total")]),e._v(" "),i("th",[e._v("Valid Until")]),e._v(" "),i("th",[e._v("Action")])])])}],u=d(584),m=d.n(u),c={data:function(){return{quotes:[]}},apollo:{quotes:{prefetch:!0,query:m.a}},head:{title:"Quotes"}},g=c,n=d(31),a=Object(n.a)(g,v,p,!1,null,null,null),t=k.default=a.exports},584:function(_,k){var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"quotes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"account"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"approval_issues"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"approval_status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assigned_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_city"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_postal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_street"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contact"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cust_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customers"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"discount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grand_total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"invoice_status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_discount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_group_total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_tax"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_subtotal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prod_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"payment_terms"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"order_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subtotal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_tax"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_street"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_postal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_city"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quote_stage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"valid_until"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"order"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bill_to_name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"customer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:922}};d.loc.source={body:`query MyQuery {\r
  quotes {\r
    account\r
    approval_issues\r
    approval_status\r
    assigned_to\r
    billing_city\r
    billing_country\r
    billing_postal\r
    billing_state\r
    billing_street\r
    categories\r
    contact\r
    created_at\r
    currency\r
    cust_id\r
    customers\r
    discount\r
    grand_total\r
    id\r
    invoice_status\r
    line_item_discount\r
    line_item_group_total\r
    line_item_name\r
    name\r
    line_item_total\r
    line_item_tax\r
    line_item_subtotal\r
    prod_id\r
    payment_terms\r
    order_id\r
    tax\r
    subtotal\r
    shipping_tax\r
    shipping_street\r
    shipping_state\r
    shipping_postal\r
    shipping_country\r
    shipping_city\r
    shipping\r
    quote_stage\r
    total\r
    valid_until\r
    product {\r
      id\r
      name\r
      price\r
    }\r
    order {\r
      id\r
      bill_to_name\r
    }\r
    customer {\r
      id\r
      first_name\r
      last_name\r
    }\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var v={};function p(n){return n.filter(function(a){if(a.kind!=="FragmentDefinition")return!0;var t=a.name.value;return v[t]?!1:(v[t]=!0,!0)})}function u(n,a){if(n.kind==="FragmentSpread")a.add(n.name.value);else if(n.kind==="VariableDefinition"){var t=n.type;t.kind==="NamedType"&&a.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(e){u(e,a)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(e){u(e,a)}),n.definitions&&n.definitions.forEach(function(e){u(e,a)})}var m={};(function(){d.definitions.forEach(function(a){if(a.name){var t=new Set;u(a,t),m[a.name.value]=t}})})();function c(n,a){for(var t=0;t<n.definitions.length;t++){var e=n.definitions[t];if(e.name&&e.name.value==a)return e}}function g(n,a){var t={kind:n.kind,definitions:[c(n,a)]};n.hasOwnProperty("loc")&&(t.loc=n.loc);var e=m[a]||new Set,s=new Set,i=new Set;for(e.forEach(function(l){i.add(l)});i.size>0;){var r=i;i=new Set,r.forEach(function(l){if(!s.has(l)){s.add(l);var o=m[l]||new Set;o.forEach(function(f){i.add(f)})}})}return s.forEach(function(l){var o=c(n,l);o&&t.definitions.push(o)}),t}_.exports=d,_.exports.MyQuery=g(d,"MyQuery")}}]);
