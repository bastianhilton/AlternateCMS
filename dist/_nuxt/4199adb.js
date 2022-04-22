(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{500:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"invoices"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subtotal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_information"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_and_handling"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"payment_method"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"order_number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"invoice_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"invoice"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grand_total_purchased"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grand_total_base"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_group"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bill_to_name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:347}};t.loc.source={body:"query MyQuery {\r\n  invoices {\r\n    subtotal\r\n    status\r\n    shipping_information\r\n    shipping_and_handling\r\n    shipping_address\r\n    payment_method\r\n    order_number\r\n    invoice_date\r\n    invoice\r\n    grand_total_purchased\r\n    grand_total_base\r\n    email\r\n    customer_name\r\n    customer_group\r\n    billing_address\r\n    bill_to_name\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.MyQuery=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,l=new Set,v=new Set;for(r.forEach((function(e){v.add(e)}));v.size>0;){var c=v;v=new Set,c.forEach((function(e){l.has(e)||(l.add(e),(d[e]||new Set).forEach((function(e){v.add(e)})))}))}return l.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"MyQuery")},790:function(e,n,t){"use strict";t.r(n);var r=t(500),d={data:function(){return{invoices:[]}},apollo:{invoices:{prefetch:!0,query:t.n(r).a}},head:{title:"Invoices"}},o=t(35),component=Object(o.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav",{staticClass:"navbar navbar-dark bg-dark"},[t("div",{staticClass:"container-fluid"},[t("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-invoice"}},[t("FormulateInput",{attrs:{type:"button"}},[e._v("Create New Invoice")])],1)])]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[e._m(0),e._v(" "),e._l(e.invoices,(function(n){return t("tbody",{key:n.id},[t("tr",[t("td",[e._v(e._s(n.id))]),e._v(" "),t("td",[e._v(e._s(n.customer_name))]),e._v(" "),t("td",[e._v(e._s(n.bill_to_name))]),e._v(" "),t("td",[e._v(e._s(n.email))]),e._v(" "),t("td",[e._v(e._s(n.subtotal))]),e._v(" "),t("td",[e._v(e._s(n.order_number))]),e._v(" "),t("td",[e._v(e._s(n.billing_address))]),e._v(" "),t("td",[e._v(e._s(n.grand_total_base))]),e._v(" "),t("td",[e._v(e._s(n.grand_total_purchased))]),e._v(" "),t("td",[t("a",{attrs:{href:"/admin/edit/invoice/"+n.id}},[e._v("View")])])])])}))],2)])])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("thead",{staticClass:"table table-dark"},[t("tr",[t("th",[e._v("Invoice ID")]),e._v(" "),t("th",[e._v("Customer Name")]),e._v(" "),t("th",[e._v("Bill to Name")]),e._v(" "),t("th",[e._v("Email")]),e._v(" "),t("th",[e._v("Subtotal")]),e._v(" "),t("th",[e._v("Order Number")]),e._v(" "),t("th",[e._v("Billing Address")]),e._v(" "),t("th",[e._v("Grand Total Base")]),e._v(" "),t("th",[e._v("Grand Total Purchased")]),e._v(" "),t("th",[e._v("Action")])])])}],!1,null,null,null);n.default=component.exports}}]);