(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1237:function(m,h,r){"use strict";r.r(h);var c=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("nav",{staticClass:"navbar navbar-dark bg-dark"},[t("div",{staticClass:"container-fluid"},[t("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-state"}},[t("FormulateInput",{attrs:{type:"button"}},[e._v("Add New State")])],1)])]),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table",attrs:{id:"table","data-toggle":"table"}},[e._m(0),e._v(" "),e._l(e.states,function(s){return t("tbody",{key:s.id},[t("tr",[t("td",[e._v(e._s(s.id))]),e._v(" "),t("td",[e._v(e._s(s.name))]),e._v(" "),t("td",[e._v(e._s(s.description))]),e._v(" "),t("td",[e._v(e._s(s.country))]),e._v(" "),t("td",[t("a",{attrs:{href:"/admin/edit/states/"+s.id}},[e._v("View")])])])])})],2)])])},p=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("thead",{staticClass:"table table-dark"},[t("tr",[t("th",[e._v("State ID")]),e._v(" "),t("th",[e._v("State Title")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Country")]),e._v(" "),t("th",[e._v("Action")])])])}],v=r(556),l=r.n(v),u={data:function(){return{states:[]}},apollo:{states:{prefetch:!0,query:l.a}},head:{title:"States"}},_=u,n=r(31),a=Object(n.a)(_,c,p,!1,null,null,null),i=h.default=a.exports},556:function(m,h){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"states"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:96}};r.loc.source={body:`query MyQuery {\r
  states {\r
    id\r
    name\r
    description\r
    image\r
    country\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var c={};function p(n){return n.filter(function(a){if(a.kind!=="FragmentDefinition")return!0;var i=a.name.value;return c[i]?!1:(c[i]=!0,!0)})}function v(n,a){if(n.kind==="FragmentSpread")a.add(n.name.value);else if(n.kind==="VariableDefinition"){var i=n.type;i.kind==="NamedType"&&a.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(e){v(e,a)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(e){v(e,a)}),n.definitions&&n.definitions.forEach(function(e){v(e,a)})}var l={};(function(){r.definitions.forEach(function(a){if(a.name){var i=new Set;v(a,i),l[a.name.value]=i}})})();function u(n,a){for(var i=0;i<n.definitions.length;i++){var e=n.definitions[i];if(e.name&&e.name.value==a)return e}}function _(n,a){var i={kind:n.kind,definitions:[u(n,a)]};n.hasOwnProperty("loc")&&(i.loc=n.loc);var e=l[a]||new Set,o=new Set,t=new Set;for(e.forEach(function(d){t.add(d)});t.size>0;){var s=t;t=new Set,s.forEach(function(d){if(!o.has(d)){o.add(d);var f=l[d]||new Set;f.forEach(function(k){t.add(k)})}})}return o.forEach(function(d){var f=u(n,d);f&&i.definitions.push(f)}),i}m.exports=r,m.exports.MyQuery=_(r,"MyQuery")}}]);