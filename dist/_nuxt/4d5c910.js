(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1311:function(v,f,t){"use strict";t.r(f);var u=function(){var i=this,d=i.$createElement,r=i._self._c||d;return i._m(0)},p=[function(){var i=this,d=i.$createElement,r=i._self._c||d;return r("div",{staticClass:"col"},[r("iframe",{staticClass:"tableauViz",staticStyle:{display:"block",margin:"0px",padding:"0px",border:"none",width:"100% !important",height:"1000px"},attrs:{frameborder:"0",marginheight:"0",marginwidth:"0",title:"Data Visualization",allowtransparency:"true",allowfullscreen:"true",height:"1000px",src:"https://datadayone.aka.amazon.com/t/ODI/views/IDFPMTracking/IDFPMTracking?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fdatadayone.aka.amazon.com%2F&:embed_code_version=3&:tabs=yes&:toolbar=yes&:showAppBanner=false&:display_spinner=no&:loadOrderID=0&:increment_view_count=no"}})])}],m=t(564),l=t.n(m),o={data:function(){return{customers:[]}},apollo:{customers:{prefetch:!0,query:l.a}}},k=o,e=t(31),n=Object(e.a)(k,u,p,!1,null,null,null),a=f.default=n.exports},564:function(v,f){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"customers"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"5"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address_two"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"confirmed_email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_group"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_since"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date_of_birth"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"middle_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name_prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name_suffix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax_vat_number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"zipcode"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:434}};t.loc.source={body:`query MyQuery {\r
  customers(limit: 5) {\r
    Address\r
    address_two\r
    confirmed_email\r
    country\r
    customer_group\r
    customer_since\r
    date_of_birth\r
    description\r
    email\r
    first_name\r
    gender\r
    id\r
    image\r
    middle_name\r
    name_prefix\r
    last_name\r
    name_suffix\r
    phone\r
    product\r
    short_description\r
    state\r
    tax_vat_number\r
    thumbnail\r
    websites\r
    zipcode\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var u={};function p(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var a=n.name.value;return u[a]?!1:(u[a]=!0,!0)})}function m(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var a=e.type;a.kind==="NamedType"&&n.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(i){m(i,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(i){m(i,n)}),e.definitions&&e.definitions.forEach(function(i){m(i,n)})}var l={};(function(){t.definitions.forEach(function(n){if(n.name){var a=new Set;m(n,a),l[n.name.value]=a}})})();function o(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}function k(e,n){var a={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);var i=l[n]||new Set,d=new Set,r=new Set;for(i.forEach(function(s){r.add(s)});r.size>0;){var g=r;r=new Set,g.forEach(function(s){if(!d.has(s)){d.add(s);var c=l[s]||new Set;c.forEach(function(h){r.add(h)})}})}return d.forEach(function(s){var c=o(e,s);c&&a.definitions.push(c)}),a}v.exports=t,v.exports.MyQuery=k(t,"MyQuery")}}]);
