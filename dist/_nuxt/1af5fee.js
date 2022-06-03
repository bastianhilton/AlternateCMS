(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1262:function(c,h,r){"use strict";r.r(h);var s=function(){var t=this,y=t.$createElement,e=t._self._c||y;return e("div",t._l(t.collections,function(v){return e("FormulateForm",{key:v.id,attrs:{method:"POST"},on:{submit:function(b){b.preventDefault()}}},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th"),t._v(" "),e("th",{staticClass:"collectionsAddOptions",attrs:{scope:"col"}},[e("li",[e("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:t.addCollection}})],1)])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Collection Name")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{id:"collectionsName",type:"collectionsName",required:""},model:{value:t.name,callback:function(b){t.name=b},expression:"name"}}),t._v(t._s(v.name))],1)])])])]),t._v(" "),e("br"),e("br"),t._v(" "),e("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[e("FormulateInput",{staticClass:"accordion-button",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v(`
                      Content
                  `)])],1),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-mdb-parent":"#accordionExample"}},[e("div",{staticClass:"accordion-body"},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Description")]),t._v(" "),e("td",[e("div",{staticClass:"form-check form-switch"},[e("FormulateInput",{attrs:{type:"textarea",label:"Product Description",rows:"10",cols:"50"},model:{value:t.description,callback:function(b){t.description=b},expression:"description"}}),t._v(t._s(v.description)+`
                                          `)],1)])])])])])])])]),t._v(" "),e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:"headingThree"}},[e("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[t._v(`
                      Images and Videos
                  `)])],1),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-mdb-parent":"#accordionExample"}},[e("div",{staticClass:"accordion-body"},[e("td",[e("FormulateInput",{attrs:{type:"image","upload-url":"/media",name:"headshot",label:"Select an image to upload",help:"Select a png, jpg or gif to upload.",validation:"mime:image/jpeg,image/png,image/gif"}}),t._v(t._s(v.image))],1)])])]),t._v(" "),e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:"headingFour"}},[e("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseFour","aria-expanded":"false","aria-controls":"collapseFour"}},[t._v(`
                      Search Engine Optimization
                  `)])],1),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseFour","aria-labelledby":"headingFour","data-mdb-parent":"#accordionExample"}},[e("div",{staticClass:"accordion-body"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[t._v("Meta Title, Meta Keywords, and Meta Description are used to describe your products to potential customers using search engine like Google, Bing, etc.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Meta Title")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",label:"Product Url",required:""}}),t._v(t._s(v.meta_title))],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Meta Keywords")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",label:"Product Keywords"}}),t._v(t._s(v.meta_keywords))],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Meta Description")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"textarea",label:"Product Description",rows:"10",cols:"50"}}),t._v(t._s(v.meta_description))],1)])])])])])])])])}),1)},_=[],l=r(6),f=r(546),k=r(42),O=r(158),a=r(969),n=r.n(a),i=r(568),o=r.n(i),p,u,F=Object(O.a)(p||(p=Object(f.a)([`
  mutation delete_collections($id: Int!){
  delete_collections(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),d=Object(O.a)(u||(u=Object(f.a)([`
  mutation update_collections($id: Int!){
  update_collections(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),m={head:{name:"Edit Collection"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deleteCollection:function(y){var e=this;return Object(l.a)(regeneratorRuntime.mark(function v(){return regeneratorRuntime.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.$apollo.mutate({mutation:F,variables:{id:y.id},refetchQueries:[{query:o.a}]}).then(function(){e.$router.push({path:"../admin/shop/collections"})}).catch(function(j){return console.log(j)});case 2:case"end":return g.stop()}},v)}))()},updateCollection:function(y){var e=this;return Object(l.a)(regeneratorRuntime.mark(function v(){return regeneratorRuntime.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,e.$apollo.mutate({mutation:d,variables:{id:y.id},refetchQueries:[{query:o.a}]});case 2:case"end":return g.stop()}},v)}))()},forceRerender:function(){this.componentKey+=1}},apollo:{collections:{query:n.a,prefetch:function(y){var e=y.route;return{id:e.params.id}},variables:function(){return{id:this.$route.params.id}}}}},S=m,E=r(970),x=r(31),C=Object(x.a)(S,s,_,!1,null,null,null),w=h.default=C.exports},546:function(c,h,r){"use strict";r.d(h,"a",function(){return s});function s(_,l){return l||(l=_.slice(0)),Object.freeze(Object.defineProperties(_,{raw:{value:Object.freeze(l)}}))}},568:function(c,h){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collections"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:174}};r.loc.source={body:`query MyQuery {\r
  collections {\r
    id\r
    image\r
    meta_description\r
    meta_keywords\r
    meta_title\r
    name\r
    product\r
    description\r
    created_at\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function _(a){return a.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return s[i]?!1:(s[i]=!0,!0)})}function l(a,n){if(a.kind==="FragmentSpread")n.add(a.name.value);else if(a.kind==="VariableDefinition"){var i=a.type;i.kind==="NamedType"&&n.add(i.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(o){l(o,n)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(o){l(o,n)}),a.definitions&&a.definitions.forEach(function(o){l(o,n)})}var f={};(function(){r.definitions.forEach(function(n){if(n.name){var i=new Set;l(n,i),f[n.name.value]=i}})})();function k(a,n){for(var i=0;i<a.definitions.length;i++){var o=a.definitions[i];if(o.name&&o.name.value==n)return o}}function O(a,n){var i={kind:a.kind,definitions:[k(a,n)]};a.hasOwnProperty("loc")&&(i.loc=a.loc);var o=f[n]||new Set,p=new Set,u=new Set;for(o.forEach(function(d){u.add(d)});u.size>0;){var F=u;u=new Set,F.forEach(function(d){if(!p.has(d)){p.add(d);var m=f[d]||new Set;m.forEach(function(S){u.add(S)})}})}return p.forEach(function(d){var m=k(a,d);m&&i.definitions.push(m)}),i}c.exports=r,c.exports.MyQuery=O(r,"MyQuery")},704:function(c,h,r){var s=r(971);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[c.i,s,""]]),s.locals&&(c.exports=s.locals);var _=r(52).default,l=_("a05b80ea",s,!0,{sourceMap:!1})},969:function(c,h){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collections"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:209}};r.loc.source={body:`query MyQuery ($id: Int){\r
  collections (where: {id: {_eq: $id}}){\r
    id\r
    image\r
    meta_description\r
    meta_keywords\r
    meta_title\r
    name\r
    product\r
    description\r
    created_at\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function _(a){return a.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return s[i]?!1:(s[i]=!0,!0)})}function l(a,n){if(a.kind==="FragmentSpread")n.add(a.name.value);else if(a.kind==="VariableDefinition"){var i=a.type;i.kind==="NamedType"&&n.add(i.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(o){l(o,n)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(o){l(o,n)}),a.definitions&&a.definitions.forEach(function(o){l(o,n)})}var f={};(function(){r.definitions.forEach(function(n){if(n.name){var i=new Set;l(n,i),f[n.name.value]=i}})})();function k(a,n){for(var i=0;i<a.definitions.length;i++){var o=a.definitions[i];if(o.name&&o.name.value==n)return o}}function O(a,n){var i={kind:a.kind,definitions:[k(a,n)]};a.hasOwnProperty("loc")&&(i.loc=a.loc);var o=f[n]||new Set,p=new Set,u=new Set;for(o.forEach(function(d){u.add(d)});u.size>0;){var F=u;u=new Set,F.forEach(function(d){if(!p.has(d)){p.add(d);var m=f[d]||new Set;m.forEach(function(S){u.add(S)})}})}return p.forEach(function(d){var m=k(a,d);m&&i.definitions.push(m)}),i}c.exports=r,c.exports.MyQuery=O(r,"MyQuery")},970:function(c,h,r){"use strict";var s=r(704),_=r.n(s)},971:function(c,h,r){var s=r(51),_=s(!1);_.push([c.i,"input,option,select{padding:5px;width:50%}li{display:inline-block}",""]),c.exports=_}}]);