(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1159:function(c,y,r){"use strict";r.r(y);var _=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("FormulateForm",{attrs:{method:"POST",enctype:"multipart/form-data"},on:{submit:function(n){n.preventDefault()}}},[e("nav",{staticClass:"navbar navbar-dark bg-dark"},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"navbar-brand"},[e("button",{staticClass:"btn btn-warning",attrs:{type:"reset"}},[t._v("Reset")])]),t._v(" "),e("a",{staticClass:"navbar-brand"},[e("FormulateInput",{attrs:{type:"button",label:"Save Quote"},on:{click:t.addQuote}})],1)])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"nav flex-column nav-tabs text-center",attrs:{id:"v-tabs-tab",role:"tablist","aria-orientation":"vertical"}},[e("a",{staticClass:"nav-link active",attrs:{id:"v-tabs-home-tab","data-mdb-toggle":"tab",href:"#v-tabs-home",role:"tab","aria-controls":"v-tabs-home","aria-selected":"true"}},[t._v("Create A New Quote")])])]),t._v(" "),e("div",{staticClass:"col-9"},[e("div",{staticClass:"tab-scope",attrs:{id:"v-tabs-tabContent"}},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"v-tabs-home",role:"tabpanel","aria-labelledby":"v-tabs-home-tab"}},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Title")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",required:""},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Opportunity")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.opportunity,callback:function(n){t.opportunity=n},expression:"opportunity"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Valid Until")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",required:""},model:{value:t.valid_until,callback:function(n){t.valid_until=n},expression:"valid_until"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Quote Stage")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",required:""},model:{value:t.quote_stage,callback:function(n){t.quote_stage=n},expression:"quote_stage"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Assigned To")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.assigned_to,callback:function(n){t.assigned_to=n},expression:"assigned_to"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Invoice Status")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.invoice_status,callback:function(n){t.invoice_status=n},expression:"invoice_status"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Payment Terms")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.payment_terms,callback:function(n){t.payment_terms=n},expression:"payment_terms"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Approval Status")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.approval_status,callback:function(n){t.approval_status=n},expression:"approval_status"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Approval Issues:")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"textarea"},model:{value:t.approval_issues,callback:function(n){t.approval_issues=n},expression:"approval_issues"}})],1)])])])]),t._v(" "),e("br"),e("br"),t._v(" "),e("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[e("FormulateInput",{staticClass:"accordion-button",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v(`
            Address Information
          `)])],1),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-mdb-parent":"#accordionExample"}},[e("div",{staticClass:"accordion-body"},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table row"},[e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Account")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.account,callback:function(n){t.account=n},expression:"account"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Contact")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.contact,callback:function(n){t.contact=n},expression:"contact"}})],1)])]),t._v(" "),e("tbody",{staticClass:"col"},[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Billing Address")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Street Address")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.billing_street,callback:function(n){t.billing_street=n},expression:"billing_street"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("City")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.billing_city,callback:function(n){t.billing_city=n},expression:"billing_city"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("State/Region")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.billing_state,callback:function(n){t.billing_state=n},expression:"billing_state"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Postal Code")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.billing_postal,callback:function(n){t.billing_postal=n},expression:"billing_postal"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Country")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.billing_country,callback:function(n){t.billing_country=n},expression:"billing_country"}})],1)])]),t._v(" "),e("tbody",{staticClass:"col"},[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Shipping Address")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Street Address")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.shipping_street,callback:function(n){t.shipping_street=n},expression:"shipping_street"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("City")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.shipping_city,callback:function(n){t.shipping_city=n},expression:"shipping_city"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("State/Region")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.shipping_state,callback:function(n){t.shipping_state=n},expression:"shipping_state"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Postal Code")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.shipping_postal,callback:function(n){t.shipping_postal=n},expression:"shipping_postal"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Country")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.shipping_country,callback:function(n){t.shipping_country=n},expression:"shipping_country"}})],1)])])])])])])]),t._v(" "),e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:"headingFive"}},[e("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseFive","aria-expanded":"false","aria-controls":"collapseFive"}},[t._v(`
            Line Items
          `)])],1),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseFive","aria-labelledby":"headingFive","data-mdb-parent":"#accordionExample"}},[e("div",{staticClass:"accordion-body"},[e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Currency")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{options:{us:"US Dollar:: $"},type:"select"},model:{value:t.currency,callback:function(n){t.currency=n},expression:"currency"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Total:")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",label:"0.00"},model:{value:t.total,callback:function(n){t.total=n},expression:"total"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Discount:")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",label:"0.00"},model:{value:t.discount,callback:function(n){t.discount=n},expression:"discount"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Subtotal:")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",label:"0.00"},model:{value:t.subtotal,callback:function(n){t.subtotal=n},expression:"subtotal"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Shipping:")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",label:"0.00"},model:{value:t.shipping,callback:function(n){t.shipping=n},expression:"shipping"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Shipping Tax:")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",label:"0.00"},model:{value:t.shipping_tax,callback:function(n){t.shipping_tax=n},expression:"shipping_tax"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Grand Total:")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",label:"0.00"},model:{value:t.grand_total,callback:function(n){t.grand_total=n},expression:"grand_total"}})],1)])])])])])])])])])])])],1)},m=[],u=r(6),b=r(546),f=r(42),x=r(25),a=r(158),s=r(584),l=r(549),o=r.n(l),g,p=Object(a.a)(g||(g=Object(b.a)([`
    mutation ($account: String!, $contact: String!, $name: String!, $grand_total: String!, $categories: String!, $quote_stage: String!, $valid_until: String!, $approval_issues: String!, $approval_status: String!, $assigned_to: String!, $billing_city: String!, $billing_country: String!, $billing_postal: String!, $billing_state: String!, $billing_street: String!, $contact: String!, $created_at: String!, $currency: String!, $cust_id: String!, $customers: String!, $discount: String!, $invoice_status: String!, $line_item_discount: String!, $line_item_group_total: String!, $line_item_name: String!, $name: String!, $line_item_total: String!, $line_item_tax: String!, $line_item_subtotal: String!, $prod_id: String!, $payment_terms: String!, $order_id: String!, $tax: String!, $subtotal: String!, $shipping_tax: String!, $shipping_street: String!, $shipping_state: String!, $shipping_postal: String!, $shipping_country: String!, $shipping_city: String!, $shipping: String!, $quote_stage: String!, $total: String!, $opportunity: String){
    insert_quotes(objects: {account: $account, contact: $contact, name: $name, grand_total: $grand_total, categories: $categories, quote_stage: $quote_stage, valid_until: $valid_until, approval_issues: $approval_issues, approval_status: $approval_status, assigned_to: $assigned_to, billing_city: $billing_city, billing_country: $billing_country, billing_postal: $billing_postal, billing_state: $billing_state, billing_street: $billing_street, contact: $contact, created_at: $created_at, currency: $currency, cust_id: $cust_id, customers: $customers, discount: $discount, invoice_status: $invoice_status, line_item_discount: $line_item_discount, line_item_group_total: $line_item_group_total, line_item_name: $line_item_name, line_item_total: $line_item_total, line_item_tax: $line_item_tax, line_item_subtotal: $line_item_subtotal, prod_id: $prod_id, payment_terms: $payment_terms, order_id: $order_id, tax: $tax, subtotal: $subtotal, shipping_tax: $shipping_tax, shipping_street: $shipping_street, shipping_state: $shipping_state, shipping_postal: $shipping_postal, shipping_country: $shipping_country, shipping_city: $shipping_city, shipping: $shipping, total: $total, opportunity: $opportunity}) {
        affected_rows
        returning {
            account
            approval_issues
            approval_status
            assigned_to
            billing_city
            billing_country
            billing_postal
            billing_state
            billing_street
            categories
            contact
            created_at
            currency
            cust_id
            customers
            discount
            grand_total
            id
            opportunity
            invoice_status
            line_item_discount
            line_item_group_total
            line_item_name
            name
            line_item_total
            line_item_tax
            line_item_subtotal
            prod_id
            payment_terms
            order_id
            tax
            subtotal
            shipping_tax
            shipping_street
            shipping_state
            shipping_postal
            shipping_country
            shipping_city
            shipping
            quote_stage
            total
            valid_until
    }
  }
}`]))),h={data:function(){return{categories:[],account:" ",name:" ",grand_total:" ",quote_stage:" ",valid_until:" ",approval_issues:" ",approval_status:" ",assigned_to:" ",billing_city:" ",billing_country:" ",billing_postal:" ",billing_state:" ",billing_street:" ",contact:" ",opportunity:" ",created_at:" ",currency:" ",cust_id:" ",customers:" ",discount:" ",invoice_status:" ",line_item_discount:" ",line_item_group_total:" ",line_item_name:" ",line_item_total:" ",line_item_tax:" ",line_item_subtotal:" ",prod_id:" ",payment_terms:" ",order_id:" ",tax:" ",subtotal:" ",shipping_tax:" ",shipping_street:" ",shipping_state:" ",shipping_postal:" ",shipping_country:" ",shipping_city:" ",shipping:" ",total:" "}},methods:{addQuote:function(){var i=this;return Object(u.a)(regeneratorRuntime.mark(function e(){var n,F,$,N,C,O,I,w,E,j,q,D,R,Q,A,T,P,M,L,z,U,G,B,V,J,K,W,X,H,Y,Z,tt,et,it,nt,at,st,lt,rt,ot,_t;return regeneratorRuntime.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return n=i.name,F=i.grand_total,$=i.categories,N=i.quote_stage,C=i.valid_until,O=i.approval_issues,I=i.approval_status,w=i.assigned_to,E=i.billing_city,j=i.billing_country,q=i.billing_postal,D=i.billing_state,R=i.billing_street,Q=i.account,A=i.contact,T=i.created_at,P=i.currency,M=i.cust_id,L=i.customers,z=i.discount,U=i.opportunity,G=i.invoice_status,B=i.line_item_discount,V=i.line_item_group_total,J=i.line_item_name,K=i.line_item_total,W=i.line_item_tax,X=i.line_item_subtotal,H=i.prod_id,Y=i.payment_terms,Z=i.order_id,tt=i.tax,et=i.subtotal,it=i.shipping_tax,nt=i.shipping_street,at=i.shipping_state,st=i.shipping_postal,lt=i.shipping_country,rt=i.shipping_city,ot=i.shipping,_t=i.total,S.next=43,i.$apollo.mutate({mutation:p,variables:{name:n,opportunity:U,grand_total:F,categories:$,quote_stage:N,valid_until:C,approval_issues:O,approval_status:I,assigned_to:w,billing_city:E,billing_country:j,billing_postal:q,billing_state:D,billing_street:R,contact:A,created_at:T,account:Q,currency:P,cust_id:M,customers:L,discount:z,invoice_status:G,line_item_discount:B,line_item_group_total:V,line_item_name:J,line_item_total:K,line_item_tax:W,line_item_subtotal:X,prod_id:H,payment_terms:Y,order_id:Z,tax:tt,subtotal:et,shipping_tax:it,shipping_street:nt,shipping_state:at,shipping_postal:st,shipping_country:lt,shipping_city:rt,shipping:ot,total:_t},update:function(ct,pt){var mt=pt.data.insertCategories;try{var gt=mt.returning;console.log(gt),ct.writeQuery({query:s.quotes})}catch(vt){console.error(vt)}}}).then(function(){i.$router.push({path:"../sales/quotes"})}).catch(function(dt){return console.log(dt)});case 43:i.name=" ",i.grand_total=" ",i.categories=" ",i.quote_stage=" ",i.valid_until=" ",i.approval_issues=" ",i.approval_status=" ",i.assigned_to=" ",i.billing_city=" ",i.billing_country=" ",i.billing_postal=" ",i.billing_state=" ",i.billing_street=" ",i.categories=" ",i.contact=" ",i.account=" ",i.created_at=" ",i.currency=" ",i.cust_id=" ",i.customers=" ",i.discount=" ",i.grand_total=" ",i.invoice_status=" ",i.line_item_discount=" ",i.line_item_group_total=" ",i.line_item_name=" ",i.opportunity=" ",i.line_item_total=" ",i.line_item_tax=" ",i.line_item_subtotal=" ",i.prod_id=" ",i.payment_terms=" ",i.order_id=" ",i.tax=" ",i.subtotal=" ",i.shipping_tax=" ",i.shipping_street=" ",i.shipping_state=" ",i.shipping_postal=" ",i.shipping_country=" ",i.shipping_city=" ",i.shipping=" ",i.quote_stage=" ",i.total=" ",i.valid_until=" ";case 88:case"end":return S.stop()}},e)}))()}},apollo:{categories:{prefetch:!0,query:o.a}},head:{title:"Add New Quote"}},d=h,v=r(837),k=r(31),ut=Object(k.a)(d,_,m,!1,null,null,null),yt=y.default=ut.exports},546:function(c,y,r){"use strict";r.d(y,"a",function(){return _});function _(m,u){return u||(u=m.slice(0)),Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(u)}}))}},549:function(c,y){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:154}};r.loc.source={body:`query MyQuery {\r
  categories {\r
    id\r
    name\r
    content\r
    image\r
    meta_description\r
    meta_keywords\r
    meta_url\r
    meta_title\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var _={};function m(a){return a.filter(function(s){if(s.kind!=="FragmentDefinition")return!0;var l=s.name.value;return _[l]?!1:(_[l]=!0,!0)})}function u(a,s){if(a.kind==="FragmentSpread")s.add(a.name.value);else if(a.kind==="VariableDefinition"){var l=a.type;l.kind==="NamedType"&&s.add(l.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(o){u(o,s)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(o){u(o,s)}),a.definitions&&a.definitions.forEach(function(o){u(o,s)})}var b={};(function(){r.definitions.forEach(function(s){if(s.name){var l=new Set;u(s,l),b[s.name.value]=l}})})();function f(a,s){for(var l=0;l<a.definitions.length;l++){var o=a.definitions[l];if(o.name&&o.name.value==s)return o}}function x(a,s){var l={kind:a.kind,definitions:[f(a,s)]};a.hasOwnProperty("loc")&&(l.loc=a.loc);var o=b[s]||new Set,g=new Set,p=new Set;for(o.forEach(function(d){p.add(d)});p.size>0;){var h=p;p=new Set,h.forEach(function(d){if(!g.has(d)){g.add(d);var v=b[d]||new Set;v.forEach(function(k){p.add(k)})}})}return g.forEach(function(d){var v=f(a,d);v&&l.definitions.push(v)}),l}c.exports=r,c.exports.MyQuery=x(r,"MyQuery")},584:function(c,y){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"quotes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"account"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"approval_issues"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"approval_status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assigned_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_city"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_postal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"billing_street"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contact"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cust_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customers"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"discount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"grand_total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"invoice_status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_discount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_group_total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_tax"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"line_item_subtotal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prod_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"payment_terms"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"order_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subtotal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_tax"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_street"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_postal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping_city"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"shipping"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quote_stage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"valid_until"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"order"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bill_to_name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"customer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:922}};r.loc.source={body:`query MyQuery {\r
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
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var _={};function m(a){return a.filter(function(s){if(s.kind!=="FragmentDefinition")return!0;var l=s.name.value;return _[l]?!1:(_[l]=!0,!0)})}function u(a,s){if(a.kind==="FragmentSpread")s.add(a.name.value);else if(a.kind==="VariableDefinition"){var l=a.type;l.kind==="NamedType"&&s.add(l.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(o){u(o,s)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(o){u(o,s)}),a.definitions&&a.definitions.forEach(function(o){u(o,s)})}var b={};(function(){r.definitions.forEach(function(s){if(s.name){var l=new Set;u(s,l),b[s.name.value]=l}})})();function f(a,s){for(var l=0;l<a.definitions.length;l++){var o=a.definitions[l];if(o.name&&o.name.value==s)return o}}function x(a,s){var l={kind:a.kind,definitions:[f(a,s)]};a.hasOwnProperty("loc")&&(l.loc=a.loc);var o=b[s]||new Set,g=new Set,p=new Set;for(o.forEach(function(d){p.add(d)});p.size>0;){var h=p;p=new Set,h.forEach(function(d){if(!g.has(d)){g.add(d);var v=b[d]||new Set;v.forEach(function(k){p.add(k)})}})}return g.forEach(function(d){var v=f(a,d);v&&l.definitions.push(v)}),l}c.exports=r,c.exports.MyQuery=x(r,"MyQuery")},665:function(c,y,r){var _=r(838);_.__esModule&&(_=_.default),typeof _=="string"&&(_=[[c.i,_,""]]),_.locals&&(c.exports=_.locals);var m=r(52).default,u=m("39e4e046",_,!0,{sourceMap:!1})},837:function(c,y,r){"use strict";var _=r(665),m=r.n(_)},838:function(c,y,r){var _=r(51),m=_(!1);m.push([c.i,"input,option,select{padding:5px}li{display:inline-block}",""]),c.exports=m}}]);