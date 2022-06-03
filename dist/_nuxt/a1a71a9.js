(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1195:function(f,k,r){"use strict";r.r(k);var u=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",[n("nav",{staticClass:"navbar navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-email"}},[n("FormulateInput",{attrs:{type:"button",label:"Send Email"}})],1)])]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table",attrs:{id:"table","data-toggle":"table"}},[e._m(0),e._v(" "),e._l(e.emails,function(d){return n("tbody",{key:d.id},[n("tr",[n("td",[e._v(e._s(d.id))]),e._v(" "),n("td",[e._v(e._s(d.cc))]),e._v(" "),n("td",[e._v(e._s(d.subject))]),e._v(" "),n("td",[e._v(e._s(d.created_at))]),e._v(" "),n("td",[n("a",{attrs:{href:"/admin/edit/email/"+d.id}},[e._v("View")])])])])})],2)])])},g=[function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("thead",{staticClass:"table table-dark"},[n("tr",[n("th",[e._v("ID")]),e._v(" "),n("th",[e._v("Customer Email")]),e._v(" "),n("th",[e._v("Email Subject")]),e._v(" "),n("th",[e._v("Email Created On")]),e._v(" "),n("th",[e._v("Actions")])])])}],c=r(605),m=r.n(c),v={data:function(){return{emails:[]}},apollo:{emails:{prefetch:!0,query:m.a}},head:{title:"Communications"}},_=v,i=r(31),a=Object(i.a)(_,u,g,!1,null,null,null),t=k.default=a.exports},605:function(f,k){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"emails"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cust_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"bcc"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cc"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"from"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"media"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"staff_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:326}};r.loc.source={body:`query MyQuery {\r
  emails {\r
    id\r
    cust_id\r
    created_at\r
    content\r
    subject\r
    customer {\r
      id\r
      first_name\r
      last_name\r
      email\r
    }\r
    bcc\r
    cc\r
    from\r
    media\r
    staff_id\r
    user {\r
      email\r
      id\r
      last_name\r
      username\r
      first_name\r
    }\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var u={};function g(i){return i.filter(function(a){if(a.kind!=="FragmentDefinition")return!0;var t=a.name.value;return u[t]?!1:(u[t]=!0,!0)})}function c(i,a){if(i.kind==="FragmentSpread")a.add(i.name.value);else if(i.kind==="VariableDefinition"){var t=i.type;t.kind==="NamedType"&&a.add(t.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(e){c(e,a)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(e){c(e,a)}),i.definitions&&i.definitions.forEach(function(e){c(e,a)})}var m={};(function(){r.definitions.forEach(function(a){if(a.name){var t=new Set;c(a,t),m[a.name.value]=t}})})();function v(i,a){for(var t=0;t<i.definitions.length;t++){var e=i.definitions[t];if(e.name&&e.name.value==a)return e}}function _(i,a){var t={kind:i.kind,definitions:[v(i,a)]};i.hasOwnProperty("loc")&&(t.loc=i.loc);var e=m[a]||new Set,s=new Set,n=new Set;for(e.forEach(function(l){n.add(l)});n.size>0;){var d=n;n=new Set,d.forEach(function(l){if(!s.has(l)){s.add(l);var o=m[l]||new Set;o.forEach(function(h){n.add(h)})}})}return s.forEach(function(l){var o=v(i,l);o&&t.definitions.push(o)}),t}f.exports=r,f.exports.MyQuery=_(r,"MyQuery")}}]);
