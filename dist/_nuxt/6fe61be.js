(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{632:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"emails"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recipients"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:114}};t.loc.source={body:"query MyQuery {\r\n  emails {\r\n    id\r\n    recipients\r\n    subject\r\n    title\r\n    created_at\r\n    content\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function l(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.MyQuery=function(e,n){var t={kind:e.kind,definitions:[l(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,o=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var v=c;c=new Set,v.forEach((function(e){o.has(e)||(o.add(e),(d[e]||new Set).forEach((function(e){c.add(e)})))}))}return o.forEach((function(n){var r=l(e,n);r&&t.definitions.push(r)})),t}(t,"MyQuery")},773:function(e,n,t){"use strict";t.r(n);var r=t(632),d={data:function(){return{emails:[]}},apollo:{emails:{prefetch:!0,query:t.n(r).a}},head:{title:"Communications"}},l=t(35),component=Object(l.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav",{staticClass:"navbar navbar-dark bg-dark"},[t("div",{staticClass:"container-fluid"},[t("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/email"}},[t("FormulateInput",{attrs:{type:"button",label:"Send Email"}})],1),e._v(" "),t("a",{staticClass:"navbar-brand",attrs:{href:"/admin/marketing/email/email-designer"}},[t("FormulateInput",{staticStyle:{float:"right",right:"15px",position:"absolute"},attrs:{type:"button",label:"Email Designer"}})],1)])]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[e._m(0),e._v(" "),e._l(e.emails,(function(n){return t("tbody",{key:n.id},[t("tr",[t("td",[e._v(e._s(n.id))]),e._v(" "),t("td",[e._v(e._s(n.email))]),e._v(" "),t("td",[e._v(e._s(n.subject))]),e._v(" "),t("td",[e._v(e._s(n.created_at))]),e._v(" "),t("td",[t("a",{attrs:{href:"/admin/edit/email/"+n.id}},[e._v("View")])])])])}))],2)])])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("thead",{staticClass:"table table-dark"},[t("tr",[t("th",[e._v("ID")]),e._v(" "),t("th",[e._v("Customer Email")]),e._v(" "),t("th",[e._v("Email Subject")]),e._v(" "),t("th",[e._v("Email Created On")]),e._v(" "),t("th",[e._v("Actions")])])])}],!1,null,null,null);n.default=component.exports}}]);