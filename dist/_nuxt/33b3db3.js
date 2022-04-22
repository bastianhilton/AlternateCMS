(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{488:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"attribute_set"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"file"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"format"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"manufacture"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_keywords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meta_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"visibility"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax_class"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"stock_status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"size"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sku"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"salable_quantity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"quantity_per_source"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:476}};t.loc.source={body:"query MyQuery {\r\n  products {\r\n    attribute_set\r\n    categories\r\n    content\r\n    country\r\n    file\r\n    format\r\n    height\r\n    id\r\n    image\r\n    manufacture\r\n    meta_description\r\n    meta_keywords\r\n    meta_title\r\n    meta_url\r\n    name\r\n    price\r\n    visibility\r\n    type\r\n    thumbnail\r\n    tax_class\r\n    stock_status\r\n    status\r\n    size\r\n    sku\r\n    short_description\r\n    salable_quantity\r\n    quantity_per_source\r\n    product\r\n    websites\r\n    weight\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function c(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.MyQuery=function(e,n){var t={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,l=new Set,m=new Set;for(r.forEach((function(e){m.add(e)}));m.size>0;){var o=m;m=new Set,o.forEach((function(e){l.has(e)||(l.add(e),(d[e]||new Set).forEach((function(e){m.add(e)})))}))}return l.forEach((function(n){var r=c(e,n);r&&t.definitions.push(r)})),t}(t,"MyQuery")},805:function(e,n,t){"use strict";t.r(n);var r=t(488),d={data:function(){return{products:[]}},apollo:{products:{prefetch:!0,query:t.n(r).a}},head:{title:"Products"}},c=t(35),component=Object(c.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav",{staticClass:"navbar navbar-dark bg-dark"},[t("div",{staticClass:"container-fluid"},[t("a",{staticClass:"navbar-brand",attrs:{href:"/admin/add-new/add-new-product"}},[t("FormulateInput",{attrs:{type:"button"}},[e._v("Add New Product")])],1)])]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[e._m(0),e._v(" "),e._l(e.products,(function(n){return t("tbody",{key:n.id},[t("tr",[t("td",[e._v(e._s(n.id))]),e._v(" "),t("td",[e._v(e._s(n.sku))]),e._v(" "),t("td",[e._v(e._s(n.name))]),e._v(" "),t("td",[e._v(e._s(n.price))]),e._v(" "),t("td",[e._v(e._s(n.short_description))]),e._v(" "),t("td",[e._v(e._s(n.type))]),e._v(" "),t("td",[t("a",{attrs:{href:"/admin/edit/product/"+e.products.id}},[e._v("View")])])])])}))],2)])])}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("thead",{staticClass:"table table-dark"},[t("tr",[t("th",{attrs:{scope:"col"}},[e._v("ID")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("SKU")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Product Name")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Product Price")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Product Description")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Type")]),e._v(" "),t("th",{attrs:{scope:"col"}},[e._v("Action")])])])}],!1,null,null,null);n.default=component.exports}}]);