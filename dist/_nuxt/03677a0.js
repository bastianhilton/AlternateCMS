(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1039:function(c,g){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attribute_set"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"file"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"manufacture"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visibility"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax_class"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"stock_status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"size"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sku"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"salable_quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity_per_source"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:511}};r.loc.source={body:`query MyQuery ($id: Int){\r
  products (where: {id: {_eq: $id}}){\r
    attribute_set\r
    categories\r
    content\r
    country\r
    file\r
    format\r
    height\r
    id\r
    image\r
    manufacture\r
    meta_description\r
    meta_keywords\r
    meta_title\r
    meta_url\r
    name\r
    price\r
    visibility\r
    type\r
    thumbnail\r
    tax_class\r
    stock_status\r
    status\r
    size\r
    sku\r
    short_description\r
    salable_quantity\r
    quantity_per_source\r
    product\r
    websites\r
    weight\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var l={};function v(a){return a.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var n=i.name.value;return l[n]?!1:(l[n]=!0,!0)})}function o(a,i){if(a.kind==="FragmentSpread")i.add(a.name.value);else if(a.kind==="VariableDefinition"){var n=a.type;n.kind==="NamedType"&&i.add(n.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(d){o(d,i)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(d){o(d,i)}),a.definitions&&a.definitions.forEach(function(d){o(d,i)})}var p={};(function(){r.definitions.forEach(function(i){if(i.name){var n=new Set;o(i,n),p[i.name.value]=n}})})();function y(a,i){for(var n=0;n<a.definitions.length;n++){var d=a.definitions[n];if(d.name&&d.name.value==i)return d}}function b(a,i){var n={kind:a.kind,definitions:[y(a,i)]};a.hasOwnProperty("loc")&&(n.loc=a.loc);var d=p[i]||new Set,f=new Set,m=new Set;for(d.forEach(function(u){m.add(u)});m.size>0;){var F=m;m=new Set,F.forEach(function(u){if(!f.has(u)){f.add(u);var _=p[u]||new Set;_.forEach(function(x){m.add(x)})}})}return f.forEach(function(u){var _=y(a,u);_&&n.definitions.push(_)}),n}c.exports=r,c.exports.MyQuery=b(r,"MyQuery")},1040:function(c,g,r){"use strict";var l=r(728),v=r.n(l)},1041:function(c,g,r){var l=r(51),v=l(!1);v.push([c.i,"input,option,select{padding:5px}",""]),c.exports=v},1286:function(c,g,r){"use strict";r.r(g);var l=function(){var t=this,h=t.$createElement,e=t._self._c||h;return e("div",t._l(t.products,function(s){return e("FormulateForm",{key:s.id,attrs:{method:"POST"},on:{submit:function(N){N.preventDefault()}}},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th"),t._v(" "),e("th",{staticClass:"productAddOptions",attrs:{scope:"col"}},[e("li",[e("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:t.addProduct}})],1)])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Product Type")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{name:"productType",type:"text",label:"What type of product is this?"}}),t._v(t._s(s.type)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Attribute")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{name:"productAttribute",type:"text",label:"Example is apple, bag, etc"}}),t._v(t._s(s.attribute)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Product Name")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",required:""}}),t._v(t._s(s.name)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Price")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",placeholder:"$",required:""}}),t._v(t._s(s.price)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Tax Class")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{name:"productTax",type:"text"}}),t._v(t._s(s.type_class)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Quantity")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"}}),t._v(t._s(s.quantity_per_source)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Stock")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",name:"stockStatus"}}),t._v(t._s(s.stock_status)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Height")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"}}),t._v(t._s(s.height)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Weight")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"}}),t._v(t._s(s.weight)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Visibility")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{name:"productVisibility",type:"text"}}),t._v(t._s(s.visibility)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Categories")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{name:"productCategory",type:"text"}}),t._v(t._s(s.categories)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Product of manufacture")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{name:"productManufacture",type:"text",label:"Where is this product made?"}}),t._v(t._s(s.manufacture)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Size")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{name:"productSize",type:"text"}}),t._v(t._s(s.size)+`
            `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Format")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{name:"productFormat",type:"text",label:"Downloadable or Shipped"}}),t._v(t._s(s.format)+`
            `)],1)])])])]),t._v(" "),e("br"),e("br"),t._v(" "),e("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[e("FormulateInput",{staticClass:"accordion-button",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v(`
            Content
          `)])],1),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-mdb-parent":"#accordionExample"}},[e("div",{staticClass:"accordion-body"},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Short Description")]),t._v(" "),e("td",[e("div",{staticClass:"form-check form-switch"},[e("FormulateInput",{attrs:{type:"textarea",label:"Enter a short description",validation:"required|max:50,length","validation-name":"excerpt","error-behavior":"live",help:"Keep it under 50 characters. "+(50-t.short_description.length)+" left."}}),t._v(t._s(s.short_description)+`
                      `)],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Description")]),t._v(" "),e("td",[e("div",{staticClass:"form-check form-switch"},[e("vue-simplemde",{attrs:{id:"longDescription"}}),t._v(t._s(s.content)+`
                      `)],1)])])])])])])])]),t._v(" "),e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:"headingThree"}},[e("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[t._v(`
            Images and Videos
          `)])],1),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-mdb-parent":"#accordionExample"}},[e("div",{staticClass:"accordion-body"},[e("td",[e("FormulateInput",{attrs:{type:"image","upload-url":"/media",name:"headshot",label:"Select an image to upload",help:"Select a png, jpg or gif to upload.",validation:"mime:image/jpeg,image/png,image/gif"}}),t._v(t._s(s.image)+`
            `)],1)])]),t._v(" "),e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:"headingFour"}},[e("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseFour","aria-expanded":"false","aria-controls":"collapseFour"}},[t._v(`
              Search Engine Optimization
            `)])],1),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseFour","aria-labelledby":"headingFour","data-mdb-parent":"#accordionExample"}},[e("div",{staticClass:"accordion-body"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[t._v(`Meta Title, Meta Keywords, and Meta Description are used to describe your products to
                      potential customers using search engine like Google, Bing, etc.`)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Meta Title")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",label:"Product Url",required:""}}),t._v(t._s(s.meta_title)+`
                    `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Meta Keywords")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",label:"Product Keywords"}}),t._v(t._s(s.meta_keywords)+`
                    `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Meta Description")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"textarea",label:"Product Description",rows:"10",cols:"50"}}),t._v(t._s(s.meta_description)+`
                    `)],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Product Url")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"url",label:"Product URL"}}),t._v(t._s(s.meta_url)+`
                    `)],1)])])])])])]),t._v(" "),e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:"headingFive"}},[e("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseFive","aria-expanded":"false","aria-controls":"collapseFive"}},[t._v(`
              Upload Product File(s)
            `)])],1),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseFive","aria-labelledby":"headingFive","data-mdb-parent":"#accordionExample"}},[e("div",{staticClass:"accordion-body"},[e("td",[e("FormulateInput",{attrs:{type:"file","upload-url":"/media",name:"file",label:"Select your documents to upload",help:"Select one or more files to upload",validation:"mime:video/mp4,text/plain,text/csv,application/pdf,audio/mpeg,audio/vorbis",multiple:""}})],1),t._v(t._s(s.file)+`
            `)])])])])])])}),1)},v=[],o=r(6),p=r(546),y=r(42),b=r(158),a=r(1039),i=r.n(a),n=r(562),d=r.n(n),f,m,F=Object(b.a)(f||(f=Object(p.a)([`
  mutation delete_products($id: Int!){
  delete_products(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),u=Object(b.a)(m||(m=Object(p.a)([`
  mutation update_products($id: Int!){
  update_products(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),_={head:{name:"Edit Product"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deleteProduct:function(h){var e=this;return Object(o.a)(regeneratorRuntime.mark(function s(){return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,e.$apollo.mutate({mutation:F,variables:{id:h.id},refetchQueries:[{query:d.a}]}).then(function(){e.$router.push({path:"../admin/shop/products"})}).catch(function(w){return console.log(w)});case 2:case"end":return k.stop()}},s)}))()},updateProduct:function(h){var e=this;return Object(o.a)(regeneratorRuntime.mark(function s(){return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,e.$apollo.mutate({mutation:u,variables:{id:h.id},refetchQueries:[{query:d.a}]});case 2:case"end":return k.stop()}},s)}))()},forceRerender:function(){this.componentKey+=1}},apollo:{products:{query:i.a,prefetch:function(h){var e=h.route;return{id:e.params.id}},variables:function(){return{id:this.$route.params.id}}}}},x=_,C=r(1040),S=r(31),O=Object(S.a)(x,l,v,!1,null,null,null),E=g.default=O.exports},546:function(c,g,r){"use strict";r.d(g,"a",function(){return l});function l(v,o){return o||(o=v.slice(0)),Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(o)}}))}},562:function(c,g){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attribute_set"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"file"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"manufacture"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visibility"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax_class"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"stock_status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"size"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sku"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"salable_quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity_per_source"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:476}};r.loc.source={body:`query MyQuery {\r
  products {\r
    attribute_set\r
    categories\r
    content\r
    country\r
    file\r
    format\r
    height\r
    id\r
    image\r
    manufacture\r
    meta_description\r
    meta_keywords\r
    meta_title\r
    meta_url\r
    name\r
    price\r
    visibility\r
    type\r
    thumbnail\r
    tax_class\r
    stock_status\r
    status\r
    size\r
    sku\r
    short_description\r
    salable_quantity\r
    quantity_per_source\r
    product\r
    websites\r
    weight\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var l={};function v(a){return a.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var n=i.name.value;return l[n]?!1:(l[n]=!0,!0)})}function o(a,i){if(a.kind==="FragmentSpread")i.add(a.name.value);else if(a.kind==="VariableDefinition"){var n=a.type;n.kind==="NamedType"&&i.add(n.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(d){o(d,i)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(d){o(d,i)}),a.definitions&&a.definitions.forEach(function(d){o(d,i)})}var p={};(function(){r.definitions.forEach(function(i){if(i.name){var n=new Set;o(i,n),p[i.name.value]=n}})})();function y(a,i){for(var n=0;n<a.definitions.length;n++){var d=a.definitions[n];if(d.name&&d.name.value==i)return d}}function b(a,i){var n={kind:a.kind,definitions:[y(a,i)]};a.hasOwnProperty("loc")&&(n.loc=a.loc);var d=p[i]||new Set,f=new Set,m=new Set;for(d.forEach(function(u){m.add(u)});m.size>0;){var F=m;m=new Set,F.forEach(function(u){if(!f.has(u)){f.add(u);var _=p[u]||new Set;_.forEach(function(x){m.add(x)})}})}return f.forEach(function(u){var _=y(a,u);_&&n.definitions.push(_)}),n}c.exports=r,c.exports.MyQuery=b(r,"MyQuery")},728:function(c,g,r){var l=r(1041);l.__esModule&&(l=l.default),typeof l=="string"&&(l=[[c.i,l,""]]),l.locals&&(c.exports=l.locals);var v=r(52).default,o=v("471357c8",l,!0,{sourceMap:!1})}}]);
