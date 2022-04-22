(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{484:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},493:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collections"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:174}};n.loc.source={body:"query MyQuery {\r\n  collections {\r\n    id\r\n    image\r\n    meta_description\r\n    meta_keywords\r\n    meta_title\r\n    name\r\n    product\r\n    description\r\n    created_at\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var o={};function d(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[d(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=o[t]||new Set,l=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){c.add(e)})))}))}return l.forEach((function(t){var r=d(e,t);r&&n.definitions.push(r)})),n}(n,"MyQuery")},557:function(e,t,n){var content=n(656);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("dac539e6",content,!0,{sourceMap:!1})},654:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collections"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:209}};n.loc.source={body:"query MyQuery ($id: Int){\r\n  collections (where: {id: {_eq: $id}}){\r\n    id\r\n    image\r\n    meta_description\r\n    meta_keywords\r\n    meta_title\r\n    name\r\n    product\r\n    description\r\n    created_at\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var o={};function d(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[d(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=o[t]||new Set,l=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){c.add(e)})))}))}return l.forEach((function(t){var r=d(e,t);r&&n.definitions.push(r)})),n}(n,"MyQuery")},655:function(e,t,n){"use strict";n(557)},656:function(e,t,n){var r=n(74)(!1);r.push([e.i,"input,option,select{padding:5px;width:50%}li{display:inline-block}",""]),e.exports=r},822:function(e,t,n){"use strict";n.r(t);var r,o,d=n(5),l=n(484),c=(n(39),n(144)),m=n(654),v=n.n(m),f=n(493),k=n.n(f),h=Object(c.a)(r||(r=Object(l.a)(["\n  mutation delete_collections($id: Int!){\n  delete_collections(where: {id: {_eq: $id}}){\n    affected_rows\n  }\n}\n"]))),_=Object(c.a)(o||(o=Object(l.a)(["\n  mutation update_collections($id: Int!){\n  update_collections(where: {id: {_eq: $id}}){\n    affected_rows\n  }\n}\n"]))),y={head:{name:"Edit Collection"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deleteCollection:function(e){var t=this;return Object(d.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$apollo.mutate({mutation:h,variables:{id:e.id},refetchQueries:[{query:k.a}]}).then((function(){t.$router.push({path:"../admin/shop/collections"})})).catch((function(e){return console.log(e)}));case 2:case"end":return n.stop()}}),n)})))()},updateCollection:function(e){var t=this;return Object(d.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$apollo.mutate({mutation:_,variables:{id:e.id},refetchQueries:[{query:k.a}]});case 2:case"end":return n.stop()}}),n)})))()},forceRerender:function(){this.componentKey+=1}},apollo:{collections:{query:v.a,prefetch:function(e){return{id:e.route.params.id}},variables:function(){return{id:this.$route.params.id}}}}},w=(n(655),n(35)),component=Object(w.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.collections,(function(t){return n("FormulateForm",{key:t.id,attrs:{method:"POST"},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th"),e._v(" "),n("th",{staticClass:"collectionsAddOptions",attrs:{scope:"col"}},[n("li",[n("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addCollection}})],1)])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Collection Name")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{id:"collectionsName",type:"collectionsName",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(e._s(t.name))],1)])])])]),e._v(" "),n("br"),n("br"),e._v(" "),n("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[n("FormulateInput",{staticClass:"accordion-button",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[e._v("\n                      Content\n                  ")])],1),e._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Description")]),e._v(" "),n("td",[n("div",{staticClass:"form-check form-switch"},[n("FormulateInput",{attrs:{type:"textarea",label:"Product Description",rows:"10",cols:"50"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(e._s(t.description)+"\n                                          ")],1)])])])])])])])]),e._v(" "),n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingThree"}},[n("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[e._v("\n                      Images and Videos\n                  ")])],1),e._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("td",[n("FormulateInput",{attrs:{type:"image","upload-url":"/media",name:"headshot",label:"Select an image to upload",help:"Select a png, jpg or gif to upload.",validation:"mime:image/jpeg,image/png,image/gif"}}),e._v(e._s(t.image))],1)])])]),e._v(" "),n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingFour"}},[n("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseFour","aria-expanded":"false","aria-controls":"collapseFour"}},[e._v("\n                      Search Engine Optimization\n                  ")])],1),e._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseFour","aria-labelledby":"headingFour","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td"),e._v(" "),n("td",[e._v("Meta Title, Meta Keywords, and Meta Description are used to describe your products to potential customers using search engine like Google, Bing, etc.")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Meta Title")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",label:"Product Url",required:""}}),e._v(e._s(t.meta_title))],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Meta Keywords")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",label:"Product Keywords"}}),e._v(e._s(t.meta_keywords))],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Meta Description")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"textarea",label:"Product Description",rows:"10",cols:"50"}}),e._v(e._s(t.meta_description))],1)])])])])])])])])})),1)}),[],!1,null,null,null);t.default=component.exports}}]);