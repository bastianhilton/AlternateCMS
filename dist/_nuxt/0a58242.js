(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1256:function(o,p,i){"use strict";i.r(p);var s=function(){var a=this,b=a.$createElement,r=a._self._c||b;return r("div",a._l(a.attributes,function(O){return r("FormulateForm",{key:O.id,attrs:{method:"POST"},on:{submit:function(N){N.preventDefault()}}},[r("div",{staticClass:"table table-responsive"},[r("table",{staticClass:"table"},[r("thead",[r("tr",[r("th"),a._v(" "),r("th",{staticClass:"attributesAddOptions",attrs:{scope:"col"}},[r("li",[r("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:a.addAttribute}})],1)])])]),a._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"right"}},[a._v("Attribute Name")]),a._v(" "),r("td",[r("FormulateInput",{attrs:{id:"attributesLabel",type:"text",required:""}}),a._v(a._s(a.agreement.default_label))],1)]),a._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[a._v("Attribute Code")]),a._v(" "),r("td",[r("FormulateInput",{attrs:{id:"attributesCode",type:"text",required:""}}),a._v(a._s(a.agreement.attribute_code))],1)]),a._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[a._v("Default Value")]),a._v(" "),r("td",[r("FormulateInput",{attrs:{id:"attributesValue",type:"text",required:""}}),a._v(a._s(a.agreement.default_value))],1)])])])])])}),1)},c=[],u=i(6),v=i(546),g=i(42),h=i(158),e=i(951),t=i.n(e),n=i(559),d=i.n(n),f,_,y=Object(h.a)(f||(f=Object(v.a)([`
  mutation delete_attributes($id: Int!){
  delete_attributes(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),l=Object(h.a)(_||(_=Object(v.a)([`
  mutation update_attributes($id: Int!){
  update_attributes(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),m={head:{name:"Edit Attribute"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deleteAttribute:function(b){var r=this;return Object(u.a)(regeneratorRuntime.mark(function O(){return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,r.$apollo.mutate({mutation:y,variables:{id:b.id},refetchQueries:[{query:d.a}]}).then(function(){r.$router.push({path:"../admin/shop/attributes"})}).catch(function(E){return console.log(E)});case 2:case"end":return k.stop()}},O)}))()},updateAttribute:function(b){var r=this;return Object(u.a)(regeneratorRuntime.mark(function O(){return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,r.$apollo.mutate({mutation:l,variables:{id:b.id},refetchQueries:[{query:d.a}]});case 2:case"end":return k.stop()}},O)}))()},forceRerender:function(){this.componentKey+=1}},apollo:{attributes:{query:t.a,prefetch:function(b){var r=b.route;return{id:r.params.id}},variables:function(){return{id:this.$route.params.id}}}}},F=m,w=i(952),S=i(31),j=Object(S.a)(F,s,c,!1,null,null,null),x=p.default=j.exports},546:function(o,p,i){"use strict";i.d(p,"a",function(){return s});function s(c,u){return u||(u=c.slice(0)),Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(u)}}))}},559:function(o,p){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"product_attribute"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"allow_html_tags_storefront"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribute_class"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribute_code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribute_value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"column_options"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"faceted_navigation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filter_options"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isPublic"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"layered_navigation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"position"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prod_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"default_label"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:349}};i.loc.source={body:`query MyQuery {\r
  product_attribute {\r
    allow_html_tags_storefront\r
    attribute_class\r
    attribute_code\r
    attribute_value\r
    column_options\r
    faceted_navigation\r
    filter_options\r
    id\r
    isPublic\r
    layered_navigation\r
    meta_description\r
    meta_name\r
    meta_url\r
    position\r
    prod_id\r
    default_label\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function c(e){return e.filter(function(t){if(t.kind!=="FragmentDefinition")return!0;var n=t.name.value;return s[n]?!1:(s[n]=!0,!0)})}function u(e,t){if(e.kind==="FragmentSpread")t.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(d){u(d,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(d){u(d,t)}),e.definitions&&e.definitions.forEach(function(d){u(d,t)})}var v={};(function(){i.definitions.forEach(function(t){if(t.name){var n=new Set;u(t,n),v[t.name.value]=n}})})();function g(e,t){for(var n=0;n<e.definitions.length;n++){var d=e.definitions[n];if(d.name&&d.name.value==t)return d}}function h(e,t){var n={kind:e.kind,definitions:[g(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var d=v[t]||new Set,f=new Set,_=new Set;for(d.forEach(function(l){_.add(l)});_.size>0;){var y=_;_=new Set,y.forEach(function(l){if(!f.has(l)){f.add(l);var m=v[l]||new Set;m.forEach(function(F){_.add(F)})}})}return f.forEach(function(l){var m=g(e,l);m&&n.definitions.push(m)}),n}o.exports=i,o.exports.MyQuery=h(i,"MyQuery")},698:function(o,p,i){var s=i(953);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[o.i,s,""]]),s.locals&&(o.exports=s.locals);var c=i(52).default,u=c("76b82af5",s,!0,{sourceMap:!1})},951:function(o,p){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"product_attribute"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"allow_html_tags_storefront"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribute_class"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribute_code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"attribute_value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"column_options"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"faceted_navigation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filter_options"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isPublic"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"layered_navigation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"position"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prod_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"default_label"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:384}};i.loc.source={body:`query MyQuery ($id: Int){\r
  product_attribute (where: {id: {_eq: $id}}){\r
    allow_html_tags_storefront\r
    attribute_class\r
    attribute_code\r
    attribute_value\r
    column_options\r
    faceted_navigation\r
    filter_options\r
    id\r
    isPublic\r
    layered_navigation\r
    meta_description\r
    meta_name\r
    meta_url\r
    position\r
    prod_id\r
    default_label\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function c(e){return e.filter(function(t){if(t.kind!=="FragmentDefinition")return!0;var n=t.name.value;return s[n]?!1:(s[n]=!0,!0)})}function u(e,t){if(e.kind==="FragmentSpread")t.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(d){u(d,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(d){u(d,t)}),e.definitions&&e.definitions.forEach(function(d){u(d,t)})}var v={};(function(){i.definitions.forEach(function(t){if(t.name){var n=new Set;u(t,n),v[t.name.value]=n}})})();function g(e,t){for(var n=0;n<e.definitions.length;n++){var d=e.definitions[n];if(d.name&&d.name.value==t)return d}}function h(e,t){var n={kind:e.kind,definitions:[g(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var d=v[t]||new Set,f=new Set,_=new Set;for(d.forEach(function(l){_.add(l)});_.size>0;){var y=_;_=new Set,y.forEach(function(l){if(!f.has(l)){f.add(l);var m=v[l]||new Set;m.forEach(function(F){_.add(F)})}})}return f.forEach(function(l){var m=g(e,l);m&&n.definitions.push(m)}),n}o.exports=i,o.exports.MyQuery=h(i,"MyQuery")},952:function(o,p,i){"use strict";var s=i(698),c=i.n(s)},953:function(o,p,i){var s=i(51),c=s(!1);c.push([o.i,"input,option,select{padding:5px}li{display:inline-block}.form-switch .form-check-input:after,.form-switch .form-check-input:checked[type=checkbox]:after{margin-top:-7px}",""]),o.exports=c}}]);
