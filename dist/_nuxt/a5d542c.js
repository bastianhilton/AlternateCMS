(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1214:function(f,_,s){"use strict";s.r(_);var l=function(){var e=this,d=e.$createElement,n=e._self._c||d;return n("div",[e._m(0),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table",attrs:{id:"table","data-toggle":"table"}},[e._m(1),e._v(" "),e._l(e.statistics,function(r){return n("tbody",{key:r},[n("tr",[n("td",[e._v(e._s(r.id))]),e._v(" "),n("td",[e._v(e._s(r.name))]),e._v(" "),n("td",[e._v(e._s(r.expiration))]),e._v(" "),n("td",[e._v(e._s(r.coupons))]),e._v(" "),n("td",[e._v(e._s(r.categories))]),e._v(" "),n("td",[e._v(e._s(r.rewards))]),e._v(" "),n("td",[e._v(e._s(r.products))]),e._v(" "),n("td",[e._v(e._s(r.users))]),e._v(" "),n("td",[e._v("Amet")]),e._v(" "),n("td",[e._v("Consectetur")]),e._v(" "),n("td",[n("a",{attrs:{href:"/admin/edit/statistic/"+r.id}},[e._v("View")])])])])})],2)])])},p=[function(){var e=this,d=e.$createElement,n=e._self._c||d;return n("nav",{staticClass:"navbar navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"})])},function(){var e=this,d=e.$createElement,n=e._self._c||d;return n("thead",{staticClass:"table table-dark"},[n("tr",[n("th",[e._v("Statistics ID")]),e._v(" "),n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Expiration")]),e._v(" "),n("th",[e._v("Coupons")]),e._v(" "),n("th",[e._v("Categories")]),e._v(" "),n("th",[e._v("Rewards")]),e._v(" "),n("th",[e._v("Products")]),e._v(" "),n("th",[e._v("Users")]),e._v(" "),n("th",[e._v("Action")])])])}],c=s(929),u=s.n(c),o={data:function(){return{statistics:[]}},apollo:{statistics:{prefetch:!0,query:u.a}},head:{title:"Statistics"}},k=o,i=s(31),t=Object(i.a)(k,l,p,!1,null,null,null),a=_.default=t.exports},929:function(f,_){var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"statistics"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"expiration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"excerpt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"coupons"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customers"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"published"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reports"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"rewards"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"special_offers"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"users"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:260}};s.loc.source={body:`query MyQuery {\r
  statistics {\r
    id\r
    expiration\r
    excerpt\r
    description\r
    coupons\r
    customers\r
    categories\r
    articles\r
    image\r
    name\r
    products\r
    published\r
    reports\r
    rewards\r
    special_offers\r
    users\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var l={};function p(i){return i.filter(function(t){if(t.kind!=="FragmentDefinition")return!0;var a=t.name.value;return l[a]?!1:(l[a]=!0,!0)})}function c(i,t){if(i.kind==="FragmentSpread")t.add(i.name.value);else if(i.kind==="VariableDefinition"){var a=i.type;a.kind==="NamedType"&&t.add(a.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(e){c(e,t)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(e){c(e,t)}),i.definitions&&i.definitions.forEach(function(e){c(e,t)})}var u={};(function(){s.definitions.forEach(function(t){if(t.name){var a=new Set;c(t,a),u[t.name.value]=a}})})();function o(i,t){for(var a=0;a<i.definitions.length;a++){var e=i.definitions[a];if(e.name&&e.name.value==t)return e}}function k(i,t){var a={kind:i.kind,definitions:[o(i,t)]};i.hasOwnProperty("loc")&&(a.loc=i.loc);var e=u[t]||new Set,d=new Set,n=new Set;for(e.forEach(function(v){n.add(v)});n.size>0;){var r=n;n=new Set,r.forEach(function(v){if(!d.has(v)){d.add(v);var m=u[v]||new Set;m.forEach(function(h){n.add(h)})}})}return d.forEach(function(v){var m=o(i,v);m&&a.definitions.push(m)}),a}f.exports=s,f.exports.MyQuery=k(s,"MyQuery")}}]);