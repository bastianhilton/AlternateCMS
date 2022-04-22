(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{484:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},500:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"invoices"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subtotal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_information"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_and_handling"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"payment_method"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"order_number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"invoice_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"invoice"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grand_total_purchased"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grand_total_base"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_group"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bill_to_name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:347}};n.loc.source={body:"query MyQuery {\r\n  invoices {\r\n    subtotal\r\n    status\r\n    shipping_information\r\n    shipping_and_handling\r\n    shipping_address\r\n    payment_method\r\n    order_number\r\n    invoice_date\r\n    invoice\r\n    grand_total_purchased\r\n    grand_total_base\r\n    email\r\n    customer_name\r\n    customer_group\r\n    billing_address\r\n    bill_to_name\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var o={};function l(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[l(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=o[t]||new Set,d=new Set,m=new Set;for(r.forEach((function(e){m.add(e)}));m.size>0;){var c=m;m=new Set,c.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){m.add(e)})))}))}return d.forEach((function(t){var r=l(e,t);r&&n.definitions.push(r)})),n}(n,"MyQuery")},536:function(e,t,n){var content=n(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("7b7605bf",content,!0,{sourceMap:!1})},603:function(e,t,n){"use strict";n(536)},604:function(e,t,n){var r=n(74)(!1);r.push([e.i,"input,option,select{padding:5px}",""]),e.exports=r},750:function(e,t,n){"use strict";n.r(t);var r,o=n(5),l=n(484),d=(n(39),n(144)),m=n(500),c=Object(d.a)(r||(r=Object(l.a)(["\n    mutation ($subtotal: String!,$customer_name: String!,$shipping_information: String!,$shipping_address: String!,$shipping_and_handling: String!,$payment_method: String!,$bill_to_name: String!,$grand_total_purchased: String!,$customer_group: String!,$email: String!,$billing_address: String!,$grand_total_base: String){\n    insert_invoices(objects: {subtotal: $subtotal,customer_name: $customer_name,shipping_information: $shipping_information,shipping_and_handling: $shipping_and_handling,shipping_address: $shipping_address,payment_method: $payment_method,bill_to_name: $bill_to_name,customer_group: $customer_group,grand_total_purchased: $grand_total_purchased,grand_total_base: $grand_total_base,email: $email,billing_address: $billing_address}) {\n        affected_rows\n        returning {\n            subtotal\n            customer_name\n            shipping_information\n            shipping_and_handling\n            payment_method\n            bill_to_name\n            customer_group\n            grand_total_purchased\n            grand_total_base\n            email\n            billing_address\n            shipping_address\n    }\n  }\n}"]))),_={data:function(){return{grand_total_base:[],attributes:[],subtotal:" ",customer_name:" ",shipping_information:" ",shipping_and_handling:" ",payment_method:" ",bill_to_name:" ",customer_group:" ",grand_total_purchased:" ",email:" ",billing_address:" ",shipping_address:" ",options:{url:"../../media/",subtotalWidth:150,maxFilesize:10,createImageThumbnails:!0,maxThumbnailFileSize:4,duplicateCheck:!0,includeStyling:!0,headers:{"My-Awesome-Header":"header value"}}}},head:{title:"Add New Invoice"},methods:{addInvoice:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,d,_,h,v,f,y,k,S;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.subtotal,r=e.customer_name,o=e.shipping_information,l=e.shipping_and_handling,d=e.payment_method,_=e.bill_to_name,h=e.customer_group,v=e.grand_total_purchased,f=e.grand_total_base,y=e.email,k=e.billing_address,S=e.shipping_address,t.next=14,e.$apollo.mutate({mutation:c,variables:{subtotal:n,customer_name:r,shipping_information:o,shipping_and_handling:l,payment_method:d,bill_to_name:_,customer_group:h,grand_total_purchased:v,grand_total_base:f,email:y,billing_address:k,shipping_address:S},update:function(e,t){var n=t.data,r=n.insertCategories,o=n.insertCountries;try{var l=r.returning,d=o.returning;console.log(l,d),e.writeQuery({query:m.invoices})}catch(e){console.error(e)}}}).then((function(){e.$router.push({path:"../sales/invoices"})})).catch((function(e){return console.log(e)}));case 14:e.subtotal=" ",e.customer_name=" ",e.shipping_information=" ",e.shipping_and_handling=" ",e.payment_method=" ",e.bill_to_name=" ",e.customer_group=" ",e.grand_total_purchased=" ",e.grand_total_base=" ",e.email=" ",e.billing_address=" ",e.shipping_address=" ";case 26:case"end":return t.stop()}}),t)})))()}},apollo:{}},h=(n(603),n(35)),component=Object(h.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("FormulateForm",{attrs:{method:"POST"},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th"),e._v(" "),n("th",{staticClass:"eventAddOptions",attrs:{scope:"col"}},[n("li",{staticStyle:{display:"inline-block"}},[n("FormulateInput",{attrs:{type:"button",label:"Save"},on:{click:e.addInvoice}})],1)])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Customer Name")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"customerName",type:"text",label:"Customer Name on the Invoice",required:""},model:{value:e.customer_name,callback:function(t){e.customer_name=t},expression:"customer_name"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Bill to Name")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"orderNumber",type:"text",label:"Who should we bill to?",required:""},model:{value:e.bill_to_name,callback:function(t){e.bill_to_name=t},expression:"bill_to_name"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Customer Email")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",required:"",label:"Customer's Email used to email the invoice"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Billing Address")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",label:"Billing address for this invoice",required:""},model:{value:e.billing_address,callback:function(t){e.billing_address=t},expression:"billing_address"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Customer Group")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",label:"Group this customer belongs to"},model:{value:e.customer_group,callback:function(t){e.customer_group=t},expression:"customer_group"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Shipping Information")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"shippingInformation",type:"text",label:"Shipping service used for shipping"},model:{value:e.shipping_information,callback:function(t){e.shipping_information=t},expression:"shipping_information"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Shipping and Handling")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"shippingHandling",type:"text",label:"How much does shipping cost?"},model:{value:e.shipping_and_handling,callback:function(t){e.shipping_and_handling=t},expression:"shipping_and_handling"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Shipping Address")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"shippingInformation",type:"text",label:"Where is this the address where the products are shipped to?"},model:{value:e.shipping_address,callback:function(t){e.shipping_address=t},expression:"shipping_address"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Payment Method")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"payment",type:"text",label:"What payment method is used for this transaction?"},model:{value:e.payment_method,callback:function(t){e.payment_method=t},expression:"payment_method"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Grand Total Base")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"grandTotal",type:"text",label:"Amount of transaction with tax excluded"},model:{value:e.grand_total_base,callback:function(t){e.grand_total_base=t},expression:"grand_total_base"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Grand Total Purchased")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"grandTotal",type:"text",label:"Amount of transaction with tax included"},model:{value:e.grand_total_purchased,callback:function(t){e.grand_total_purchased=t},expression:"grand_total_purchased"}})],1)])])])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);