(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1235:function(k,f,r){"use strict";r.r(f);var v=function(){var e=this,d=e.$createElement,i=e._self._c||d;return i("div",[i("nav",{staticClass:"navbar navbar-dark bg-dark"},[i("div",{staticClass:"container-fluid"},[i("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-product"}},[i("FormulateInput",{attrs:{type:"button"}},[e._v("Add New Product")])],1)])]),e._v(" "),i("br"),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"table table-responsive"},[i("table",{staticClass:"table",attrs:{id:"table","data-toggle":"table"}},[e._m(0),e._v(" "),e._l(e.products,function(s){return i("tbody",{key:s.id},[i("tr",[i("td",[e._v(e._s(s.id))]),e._v(" "),i("td",[e._v(e._s(s.sku))]),e._v(" "),i("td",[e._v(e._s(s.name))]),e._v(" "),i("td",[e._v(e._s(s.price))]),e._v(" "),i("td",[e._v(e._s(s.short_description))]),e._v(" "),i("td",[e._v(e._s(s.type))]),e._v(" "),i("td",[i("a",{attrs:{href:"/admin/edit/product/"+e.products.id}},[e._v("View")])])])])})],2)])])},p=[function(){var e=this,d=e.$createElement,i=e._self._c||d;return i("thead",{staticClass:"table table-dark"},[i("tr",[i("th",{attrs:{scope:"col"}},[e._v("ID")]),e._v(" "),i("th",{attrs:{scope:"col"}},[e._v("SKU")]),e._v(" "),i("th",{attrs:{scope:"col"}},[e._v("Product Name")]),e._v(" "),i("th",{attrs:{scope:"col"}},[e._v("Product Price")]),e._v(" "),i("th",{attrs:{scope:"col"}},[e._v("Product Description")]),e._v(" "),i("th",{attrs:{scope:"col"}},[e._v("Type")]),e._v(" "),i("th",{attrs:{scope:"col"}},[e._v("Action")])])])}],l=r(562),c=r.n(l),m={data:function(){return{products:[]}},apollo:{products:{prefetch:!0,query:c.a}},head:{title:"Products"}},_=m,n=r(31),t=Object(n.a)(_,v,p,!1,null,null,null),a=f.default=t.exports},562:function(k,f){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attribute_set"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"file"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"manufacture"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visibility"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax_class"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"stock_status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"size"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sku"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"salable_quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity_per_source"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:476}};r.loc.source={body:`query MyQuery {\r
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
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var v={};function p(n){return n.filter(function(t){if(t.kind!=="FragmentDefinition")return!0;var a=t.name.value;return v[a]?!1:(v[a]=!0,!0)})}function l(n,t){if(n.kind==="FragmentSpread")t.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&t.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(e){l(e,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(e){l(e,t)}),n.definitions&&n.definitions.forEach(function(e){l(e,t)})}var c={};(function(){r.definitions.forEach(function(t){if(t.name){var a=new Set;l(t,a),c[t.name.value]=a}})})();function m(n,t){for(var a=0;a<n.definitions.length;a++){var e=n.definitions[a];if(e.name&&e.name.value==t)return e}}function _(n,t){var a={kind:n.kind,definitions:[m(n,t)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var e=c[t]||new Set,d=new Set,i=new Set;for(e.forEach(function(u){i.add(u)});i.size>0;){var s=i;i=new Set,s.forEach(function(u){if(!d.has(u)){d.add(u);var o=c[u]||new Set;o.forEach(function(g){i.add(g)})}})}return d.forEach(function(u){var o=m(n,u);o&&a.definitions.push(o)}),a}k.exports=r,k.exports.MyQuery=_(r,"MyQuery")}}]);
