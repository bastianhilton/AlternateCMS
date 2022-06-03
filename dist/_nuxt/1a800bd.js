(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1264:function(u,p,a){"use strict";a.r(p);var s=function(){var r=this,g=r.$createElement,n=r._self._c||g;return n("div",r._l(r.countries,function(y){return n("FormulateForm",{key:y.id,attrs:{method:"POST"},on:{submit:function(j){j.preventDefault()}}},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th"),r._v(" "),n("th",{staticClass:"countriesAddOptions",attrs:{scope:"col"}},[n("li",[n("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:r.addCountry}})],1)])])]),r._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[r._v("Country Name")]),r._v(" "),n("td",[n("FormulateInput",{attrs:{id:"countriesName",type:"countriesName",required:""}}),r._v(r._s(y.name))],1)]),r._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[r._v("Country Region")]),r._v(" "),n("td",[n("FormulateInput",{attrs:{id:"countriesRegion",type:"countriesRegion",required:""}}),r._v(r._s(y.region))],1)])])])]),r._v(" "),n("br"),n("br"),r._v(" "),n("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[n("FormulateInput",{staticClass:"accordion-button",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[r._v(`
                      Content
                  `)])],1),r._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[r._v("Description")]),r._v(" "),n("td",[n("div",{staticClass:"form-check form-switch"},[n("FormulateInput",{attrs:{type:"textarea",id:"tagDesc",name:"tagDesc",cols:"80",rows:"10"}}),r._v(r._s(y.description)+`
                                          `)],1)])])])])])])])])])])}),1)},_=[],d=a(6),v=a(546),k=a(42),b=a(158),e=a(975),t=a.n(e),i=a(551),o=a.n(i),m,c,O=Object(b.a)(m||(m=Object(v.a)([`
  mutation delete_countries($id: Int!){
  delete_countries(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),l=Object(b.a)(c||(c=Object(v.a)([`
  mutation update_countries($id: Int!){
  update_countries(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),f={head:{name:"Edit Country"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deleteCountry:function(g){var n=this;return Object(d.a)(regeneratorRuntime.mark(function y(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.$apollo.mutate({mutation:O,variables:{id:g.id},refetchQueries:[{query:o.a}]}).then(function(){n.$router.push({path:"../admin/shop/countries"})}).catch(function(x){return console.log(x)});case 2:case"end":return h.stop()}},y)}))()},updateCountry:function(g){var n=this;return Object(d.a)(regeneratorRuntime.mark(function y(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,n.$apollo.mutate({mutation:l,variables:{id:g.id},refetchQueries:[{query:o.a}]});case 2:case"end":return h.stop()}},y)}))()},forceRerender:function(){this.componentKey+=1}},apollo:{countries:{query:t.a,prefetch:function(g){var n=g.route;return{id:n.params.id}},variables:function(){return{id:this.$route.params.id}}}}},S=f,D=a(976),E=a(31),R=Object(E.a)(S,s,_,!1,null,null,null),F=p.default=R.exports},546:function(u,p,a){"use strict";a.d(p,"a",function(){return s});function s(_,d){return d||(d=_.slice(0)),Object.freeze(Object.defineProperties(_,{raw:{value:Object.freeze(d)}}))}},551:function(u,p){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"countries"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"region"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:96}};a.loc.source={body:`query MyQuery {\r
  countries {\r
    id\r
    name\r
    description\r
    image\r
    region\r
  }\r
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function _(e){return e.filter(function(t){if(t.kind!=="FragmentDefinition")return!0;var i=t.name.value;return s[i]?!1:(s[i]=!0,!0)})}function d(e,t){if(e.kind==="FragmentSpread")t.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(o){d(o,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(o){d(o,t)}),e.definitions&&e.definitions.forEach(function(o){d(o,t)})}var v={};(function(){a.definitions.forEach(function(t){if(t.name){var i=new Set;d(t,i),v[t.name.value]=i}})})();function k(e,t){for(var i=0;i<e.definitions.length;i++){var o=e.definitions[i];if(o.name&&o.name.value==t)return o}}function b(e,t){var i={kind:e.kind,definitions:[k(e,t)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var o=v[t]||new Set,m=new Set,c=new Set;for(o.forEach(function(l){c.add(l)});c.size>0;){var O=c;c=new Set,O.forEach(function(l){if(!m.has(l)){m.add(l);var f=v[l]||new Set;f.forEach(function(S){c.add(S)})}})}return m.forEach(function(l){var f=k(e,l);f&&i.definitions.push(f)}),i}u.exports=a,u.exports.MyQuery=b(a,"MyQuery")},706:function(u,p,a){var s=a(977);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[u.i,s,""]]),s.locals&&(u.exports=s.locals);var _=a(52).default,d=_("d3d16922",s,!0,{sourceMap:!1})},975:function(u,p){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"countries"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"region"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:131}};a.loc.source={body:`query MyQuery ($id: Int){\r
  countries (where: {id: {_eq: $id}}){\r
    id\r
    name\r
    description\r
    image\r
    region\r
  }\r
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function _(e){return e.filter(function(t){if(t.kind!=="FragmentDefinition")return!0;var i=t.name.value;return s[i]?!1:(s[i]=!0,!0)})}function d(e,t){if(e.kind==="FragmentSpread")t.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(o){d(o,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(o){d(o,t)}),e.definitions&&e.definitions.forEach(function(o){d(o,t)})}var v={};(function(){a.definitions.forEach(function(t){if(t.name){var i=new Set;d(t,i),v[t.name.value]=i}})})();function k(e,t){for(var i=0;i<e.definitions.length;i++){var o=e.definitions[i];if(o.name&&o.name.value==t)return o}}function b(e,t){var i={kind:e.kind,definitions:[k(e,t)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var o=v[t]||new Set,m=new Set,c=new Set;for(o.forEach(function(l){c.add(l)});c.size>0;){var O=c;c=new Set,O.forEach(function(l){if(!m.has(l)){m.add(l);var f=v[l]||new Set;f.forEach(function(S){c.add(S)})}})}return m.forEach(function(l){var f=k(e,l);f&&i.definitions.push(f)}),i}u.exports=a,u.exports.MyQuery=b(a,"MyQuery")},976:function(u,p,a){"use strict";var s=a(706),_=a.n(s)},977:function(u,p,a){var s=a(51),_=s(!1);_.push([u.i,"input,option,select{padding:5px}li{display:inline-block}",""]),u.exports=_}}]);