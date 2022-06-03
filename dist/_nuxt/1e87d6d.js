(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1187:function(_,f,d){"use strict";d.r(f);var v=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",[n("nav",{staticClass:"navbar navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-lead"}},[n("FormulateInput",{attrs:{type:"button"}},[e._v("Add New Lead")])],1)])]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table",attrs:{id:"table","data-toggle":"table"}},[e._m(0),e._v(" "),e._l(e.leads,function(r){return n("tbody",{key:r.id},[n("tr",[n("td",[e._v(e._s(r.customer_name))]),e._v(" "),n("td",[e._v(e._s(r.status))]),e._v(" "),n("td",[e._v(e._s(r.account_name))]),e._v(" "),n("td",[e._v(e._s(r.office_phone))]),e._v(" "),n("td",[e._v(e._s(r.email))]),e._v(" "),n("td",[e._v(e._s(r.referred_by))]),e._v(" "),n("td",[e._v(e._s(r.created_at))]),e._v(" "),n("td",[n("a",{attrs:{href:"/admin/edit/leads/"+r.id}},[e._v("View")])])])])})],2)])])},p=[function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("thead",{staticClass:"table table-dark"},[n("tr",[n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Status")]),e._v(" "),n("th",[e._v("Account Name")]),e._v(" "),n("th",[e._v("Office Phone")]),e._v(" "),n("th",[e._v("Email")]),e._v(" "),n("th",[e._v("User")]),e._v(" "),n("th",[e._v("Date Created")]),e._v(" "),n("th",[e._v("Action")])])])}],u=d(578),m=d.n(u),c={data:function(){return{leads:[]}},apollo:{leads:{prefetch:!0,query:m.a}},head:{title:"Leads"}},k=c,a=d(31),i=Object(a.a)(k,v,p,!1,null,null,null),t=f.default=i.exports},578:function(_,f){var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"leads"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"account_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt_address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt_city"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt_country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt_postalcode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"alt_state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"campaign"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"city"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"department"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fax"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"job_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lead_source"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lead_source_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mobile"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"office_phone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"opportunity_amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"postalcode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"referred_by"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:534}};d.loc.source={body:`query MyQuery {\r
  leads {\r
    Prefix\r
    account_name\r
    address\r
    alt_address\r
    alt_city\r
    alt_country\r
    alt_postalcode\r
    alt_state\r
    campaign\r
    city\r
    country\r
    created_at\r
    customer_name\r
    department\r
    description\r
    email\r
    fax\r
    first_name\r
    id\r
    job_title\r
    last_name\r
    lead_source\r
    lead_source_description\r
    mobile\r
    office_phone\r
    opportunity_amount\r
    postalcode\r
    referred_by\r
    state\r
    status\r
    status_description\r
    website\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var v={};function p(a){return a.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var t=i.name.value;return v[t]?!1:(v[t]=!0,!0)})}function u(a,i){if(a.kind==="FragmentSpread")i.add(a.name.value);else if(a.kind==="VariableDefinition"){var t=a.type;t.kind==="NamedType"&&i.add(t.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(e){u(e,i)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(e){u(e,i)}),a.definitions&&a.definitions.forEach(function(e){u(e,i)})}var m={};(function(){d.definitions.forEach(function(i){if(i.name){var t=new Set;u(i,t),m[i.name.value]=t}})})();function c(a,i){for(var t=0;t<a.definitions.length;t++){var e=a.definitions[t];if(e.name&&e.name.value==i)return e}}function k(a,i){var t={kind:a.kind,definitions:[c(a,i)]};a.hasOwnProperty("loc")&&(t.loc=a.loc);var e=m[i]||new Set,s=new Set,n=new Set;for(e.forEach(function(l){n.add(l)});n.size>0;){var r=n;n=new Set,r.forEach(function(l){if(!s.has(l)){s.add(l);var o=m[l]||new Set;o.forEach(function(g){n.add(g)})}})}return s.forEach(function(l){var o=c(a,l);o&&t.definitions.push(o)}),t}_.exports=d,_.exports.MyQuery=k(d,"MyQuery")}}]);
