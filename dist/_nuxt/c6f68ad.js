(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{484:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},488:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attribute_set"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"file"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"manufacture"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visibility"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax_class"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"stock_status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"size"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sku"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"salable_quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity_per_source"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:476}};n.loc.source={body:"query MyQuery {\r\n  products {\r\n    attribute_set\r\n    categories\r\n    content\r\n    country\r\n    file\r\n    format\r\n    height\r\n    id\r\n    image\r\n    manufacture\r\n    meta_description\r\n    meta_keywords\r\n    meta_title\r\n    meta_url\r\n    name\r\n    price\r\n    visibility\r\n    type\r\n    thumbnail\r\n    tax_class\r\n    stock_status\r\n    status\r\n    size\r\n    sku\r\n    short_description\r\n    salable_quantity\r\n    quantity_per_source\r\n    product\r\n    websites\r\n    weight\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var d={};function l(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),d[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[l(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=d[t]||new Set,o=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){o.has(e)||(o.add(e),(d[e]||new Set).forEach((function(e){c.add(e)})))}))}return o.forEach((function(t){var r=l(e,t);r&&n.definitions.push(r)})),n}(n,"MyQuery")},568:function(e,t,n){var content=n(687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("054698f4",content,!0,{sourceMap:!1})},685:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attribute_set"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"file"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"manufacture"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visibility"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax_class"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"stock_status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"size"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sku"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"salable_quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity_per_source"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:511}};n.loc.source={body:"query MyQuery ($id: Int){\r\n  products (where: {id: {_eq: $id}}){\r\n    attribute_set\r\n    categories\r\n    content\r\n    country\r\n    file\r\n    format\r\n    height\r\n    id\r\n    image\r\n    manufacture\r\n    meta_description\r\n    meta_keywords\r\n    meta_title\r\n    meta_url\r\n    name\r\n    price\r\n    visibility\r\n    type\r\n    thumbnail\r\n    tax_class\r\n    stock_status\r\n    status\r\n    size\r\n    sku\r\n    short_description\r\n    salable_quantity\r\n    quantity_per_source\r\n    product\r\n    websites\r\n    weight\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var d={};function l(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),d[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[l(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=d[t]||new Set,o=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){o.has(e)||(o.add(e),(d[e]||new Set).forEach((function(e){c.add(e)})))}))}return o.forEach((function(t){var r=l(e,t);r&&n.definitions.push(r)})),n}(n,"MyQuery")},686:function(e,t,n){"use strict";n(568)},687:function(e,t,n){var r=n(74)(!1);r.push([e.i,"input,option,select{padding:5px}",""]),e.exports=r},833:function(e,t,n){"use strict";n.r(t);var r,d,l=n(5),o=n(484),c=(n(39),n(144)),m=n(685),v=n.n(m),_=n(488),k=n.n(_),f=Object(c.a)(r||(r=Object(o.a)(["\n  mutation delete_products($id: Int!){\n  delete_products(where: {id: {_eq: $id}}){\n    affected_rows\n  }\n}\n"]))),h=Object(c.a)(d||(d=Object(o.a)(["\n  mutation update_products($id: Int!){\n  update_products(where: {id: {_eq: $id}}){\n    affected_rows\n  }\n}\n"]))),y={head:{name:"Edit Product"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deleteProduct:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$apollo.mutate({mutation:f,variables:{id:e.id},refetchQueries:[{query:k.a}]}).then((function(){t.$router.push({path:"../admin/shop/products"})})).catch((function(e){return console.log(e)}));case 2:case"end":return n.stop()}}),n)})))()},updateProduct:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$apollo.mutate({mutation:h,variables:{id:e.id},refetchQueries:[{query:k.a}]});case 2:case"end":return n.stop()}}),n)})))()},forceRerender:function(){this.componentKey+=1}},apollo:{products:{query:v.a,prefetch:function(e){return{id:e.route.params.id}},variables:function(){return{id:this.$route.params.id}}}}},F=(n(686),n(35)),component=Object(F.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.products,(function(t){return n("FormulateForm",{key:t.id,attrs:{method:"POST"},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th"),e._v(" "),n("th",{staticClass:"productAddOptions",attrs:{scope:"col"}},[n("li",[n("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addProduct}})],1)])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Product Type")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"productType",type:"text",label:"What type of product is this?"}}),e._v(e._s(t.type)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Attribute")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"productAttribute",type:"text",label:"Example is apple, bag, etc"}}),e._v(e._s(t.attribute)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Product Name")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",required:""}}),e._v(e._s(t.name)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Price")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",placeholder:"$",required:""}}),e._v(e._s(t.price)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Tax Class")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"productTax",type:"text"}}),e._v(e._s(t.type_class)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Quantity")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text"}}),e._v(e._s(t.quantity_per_source)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Stock")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",name:"stockStatus"}}),e._v(e._s(t.stock_status)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Height")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text"}}),e._v(e._s(t.height)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Weight")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text"}}),e._v(e._s(t.weight)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Visibility")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"productVisibility",type:"text"}}),e._v(e._s(t.visibility)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Categories")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"productCategory",type:"text"}}),e._v(e._s(t.categories)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Product of manufacture")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"productManufacture",type:"text",label:"Where is this product made?"}}),e._v(e._s(t.manufacture)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Size")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"productSize",type:"text"}}),e._v(e._s(t.size)+"\n            ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Format")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"productFormat",type:"text",label:"Downloadable or Shipped"}}),e._v(e._s(t.format)+"\n            ")],1)])])])]),e._v(" "),n("br"),n("br"),e._v(" "),n("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[n("FormulateInput",{staticClass:"accordion-button",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[e._v("\n            Content\n          ")])],1),e._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Short Description")]),e._v(" "),n("td",[n("div",{staticClass:"form-check form-switch"},[n("FormulateInput",{attrs:{type:"textarea",label:"Enter a short description",validation:"required|max:50,length","validation-name":"excerpt","error-behavior":"live",help:"Keep it under 50 characters. "+(50-e.short_description.length)+" left."}}),e._v(e._s(t.short_description)+"\n                      ")],1)])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Description")]),e._v(" "),n("td",[n("div",{staticClass:"form-check form-switch"},[n("vue-simplemde",{attrs:{id:"longDescription"}}),e._v(e._s(t.content)+"\n                      ")],1)])])])])])])])]),e._v(" "),n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingThree"}},[n("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[e._v("\n            Images and Videos\n          ")])],1),e._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("td",[n("FormulateInput",{attrs:{type:"image","upload-url":"/media",name:"headshot",label:"Select an image to upload",help:"Select a png, jpg or gif to upload.",validation:"mime:image/jpeg,image/png,image/gif"}}),e._v(e._s(t.image)+"\n            ")],1)])]),e._v(" "),n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingFour"}},[n("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseFour","aria-expanded":"false","aria-controls":"collapseFour"}},[e._v("\n              Search Engine Optimization\n            ")])],1),e._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseFour","aria-labelledby":"headingFour","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td"),e._v(" "),n("td",[e._v("Meta Title, Meta Keywords, and Meta Description are used to describe your products to\n                      potential customers using search engine like Google, Bing, etc.")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Meta Title")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",label:"Product Url",required:""}}),e._v(e._s(t.meta_title)+"\n                    ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Meta Keywords")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",label:"Product Keywords"}}),e._v(e._s(t.meta_keywords)+"\n                    ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Meta Description")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"textarea",label:"Product Description",rows:"10",cols:"50"}}),e._v(e._s(t.meta_description)+"\n                    ")],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Product Url")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"url",label:"Product URL"}}),e._v(e._s(t.meta_url)+"\n                    ")],1)])])])])])]),e._v(" "),n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingFive"}},[n("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseFive","aria-expanded":"false","aria-controls":"collapseFive"}},[e._v("\n              Upload Product File(s)\n            ")])],1),e._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseFive","aria-labelledby":"headingFive","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("td",[n("FormulateInput",{attrs:{type:"file","upload-url":"/media",name:"file",label:"Select your documents to upload",help:"Select one or more files to upload",validation:"mime:video/mp4,text/plain,text/csv,application/pdf,audio/mpeg,audio/vorbis",multiple:""}})],1),e._v(e._s(t.file)+"\n            ")])])])])])])})),1)}),[],!1,null,null,null);t.default=component.exports}}]);