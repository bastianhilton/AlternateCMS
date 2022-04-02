(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{439:function(e,t,n){"use strict";function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return o}))},449:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collections"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:174}};n.loc.source={body:"query MyQuery {\r\n  collections {\r\n    id\r\n    image\r\n    meta_description\r\n    meta_keywords\r\n    meta_title\r\n    name\r\n    product\r\n    description\r\n    created_at\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,t)})),e.definitions&&e.definitions.forEach((function(e){o(e,t)}))}var r={};function c(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;o(e,t),r[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[c(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var o=r[t]||new Set,l=new Set,d=new Set;for(o.forEach((function(e){d.add(e)}));d.size>0;){var m=d;d=new Set,m.forEach((function(e){l.has(e)||(l.add(e),(r[e]||new Set).forEach((function(e){d.add(e)})))}))}return l.forEach((function(t){var o=c(e,t);o&&n.definitions.push(o)})),n}(n,"MyQuery")},470:function(e,t,n){var content=n(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(78).default)("c7ccfd06",content,!0,{sourceMap:!1})},498:function(e,t,n){"use strict";n(470)},499:function(e,t,n){var o=n(77)(!1);o.push([e.i,"input,option,select{padding:5px;width:50%}li{display:inline-block}",""]),e.exports=o},555:function(e,t,n){"use strict";n.r(t);var o,r=n(6),c=n(439),l=(n(43),n(24),n(20),n(54),n(129)),d=n(449),m=Object(l.a)(o||(o=Object(c.a)(["\n    mutation ($name:String!,$description:String!,$image:String!,$meta_description:String!,$meta_keywords:String!,$meta_title:String!){\n    insert_collections(objects: {name: $name, description: $description, image: $image, meta_description: $meta_description, meta_title: $meta_title, meta_keywords: $meta_keywords}) {\n        affected_rows\n        returning {\n            name\n            description\n            image\n            meta_description\n            meta_keywords\n            meta_title\n    }\n  }\n}"]))),v={data:function(){return{name:" ",description:" ",image:" ",meta_description:" ",meta_keywords:" ",meta_title:" ",options:{url:"../../static/media/",thumbnailWidth:150,maxFilesize:10,createImageThumbnails:!0,maxThumbnailFileSize:4,duplicateCheck:!0,includeStyling:!0,headers:{"My-Awesome-Header":"header value"}}}},head:{title:"Add New Collection"},methods:{addCollection:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o,image,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,o=e.description,image=e.image,r=e.meta_description,c=e.meta_keywords,l=e.meta_title,t.next=8,e.$apollo.mutate({mutation:m,variables:{name:n,description:o,image:image,meta_description:r,meta_keywords:c,meta_title:l},update:function(e,t){var n=t.data.insertCollections;try{var o=n.returning;console.log(o),e.writeQuery({query:d.collections})}catch(e){console.error(e)}}}).then((function(){e.$router.push({path:"../shop/collections"})})).catch((function(e){return console.log(e)}));case 8:e.name=" ",e.description=" ",e.image=" ",e.meta_description=" ",e.meta_keywords=" ",e.meta_title=" ";case 14:case"end":return t.stop()}}),t)})))()},onFileAdded:function(e){},onError:function(e){},onSuccess:function(e){},onComplete:function(e){}}},f=(n(498),n(29)),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{attrs:{method:"POST"},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table table"},[n("thead",[n("tr",[n("th"),e._v(" "),n("th",{staticClass:"collectionsAddOptions",attrs:{scope:"col"}},[n("li",[n("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addCollection}})],1)])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Collection Name")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{id:"collectionsName",type:"collectionsName",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)])])])]),e._v(" "),n("br"),n("br"),e._v(" "),n("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[n("FormulateInput",{staticClass:"accordion-button",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[e._v("\n                      Content\n                  ")])],1),e._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table table"},[n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Description")]),e._v(" "),n("td",[n("div",{staticClass:"form-check form-switch"},[n("FormulateInput",{attrs:{type:"textarea",label:"Product Description",rows:"10",cols:"50"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)])])])])])])])]),e._v(" "),n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingThree"}},[n("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[e._v("\n                      Images and Videos\n                  ")])],1),e._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("dropzone",{ref:"myDropzone",attrs:{id:"dropzone",options:e.options},on:{"vdropzone-file-added":e.onFileAdded,"vdropzone-error":e.onError,"vdropzone-success":e.onSuccess,"vdropzone-complete":e.onComplete},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],1)])]),e._v(" "),n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingFour"}},[n("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseFour","aria-expanded":"false","aria-controls":"collapseFour"}},[e._v("\n                      Search Engine Optimization\n                  ")])],1),e._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseFour","aria-labelledby":"headingFour","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("table",{staticClass:"table table"},[n("tbody",[e._m(0),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Meta Title")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",label:"Product Url",required:""},model:{value:e.meta_title,callback:function(t){e.meta_title=t},expression:"meta_title"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Meta Keywords")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",label:"Product Keywords"},model:{value:e.meta_keywords,callback:function(t){e.meta_keywords=t},expression:"meta_keywords"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Meta Description")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"textarea",label:"Product Description",rows:"10",cols:"50"},model:{value:e.meta_description,callback:function(t){e.meta_description=t},expression:"meta_description"}})],1)])])])])])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td"),e._v(" "),n("td",[e._v("Meta Title, Meta Keywords, and Meta Description are used to describe your products to potential customers using search engine like Google, Bing, etc.")])])}],!1,null,null,null);t.default=component.exports}}]);