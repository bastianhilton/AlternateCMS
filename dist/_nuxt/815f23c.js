(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1033:function(m,k){var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pdf_templates"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"footer"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assigned_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"active"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_bottom"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_footer"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_header"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_left"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_right"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_top"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"orientation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"page_size"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:329}};d.loc.source={body:`query MyQuery ($id: Int){\r
  pdf_templates (where: {id: {_eq: $id}}){\r
    id\r
    header\r
    footer\r
    created_at\r
    content\r
    assigned_to\r
    active\r
    margin_bottom\r
    margin_footer\r
    margin_header\r
    margin_left\r
    margin_right\r
    margin_top\r
    name\r
    orientation\r
    page_size\r
    type\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function v(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var a=i.name.value;return s[a]?!1:(s[a]=!0,!0)})}function u(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(o){u(o,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(o){u(o,i)}),n.definitions&&n.definitions.forEach(function(o){u(o,i)})}var g={};(function(){d.definitions.forEach(function(i){if(i.name){var a=new Set;u(i,a),g[i.name.value]=a}})})();function x(n,i){for(var a=0;a<n.definitions.length;a++){var o=n.definitions[a];if(o.name&&o.name.value==i)return o}}function F(n,i){var a={kind:n.kind,definitions:[x(n,i)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var o=g[i]||new Set,p=new Set,c=new Set;for(o.forEach(function(_){c.add(_)});c.size>0;){var b=c;c=new Set,b.forEach(function(_){if(!p.has(_)){p.add(_);var f=g[_]||new Set;f.forEach(function(S){c.add(S)})}})}return p.forEach(function(_){var f=x(n,_);f&&a.definitions.push(f)}),a}m.exports=d,m.exports.MyQuery=F(d,"MyQuery")},1034:function(m,k,d){"use strict";var s=d(726),v=d.n(s)},1035:function(m,k,d){var s=d(51),v=s(!1);v.push([m.i,"input,option,select{padding:5px}",""]),m.exports=v},1284:function(m,k,d){"use strict";d.r(k);var s=function(){var e=this,y=e.$createElement,t=e._self._c||y;return t("div",e._l(e.pdf_templates,function(l){return t("FormulateForm",{key:l.id,attrs:{method:"POST",enctype:"multipart/form-data"},on:{submit:function(r){r.preventDefault()}}},[t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th"),e._v(" "),t("th",{staticClass:"pdf_templateAddOptions",attrs:{scope:"col"}},[t("li",[t("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addPDF_TEMPLATE}})],1)])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Active")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"checkbox"},model:{value:e.active,callback:function(r){e.active=r},expression:"active"}}),e._v(e._s(l.active)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Template Name")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text",required:""},model:{value:e.name,callback:function(r){e.name=r},expression:"name"}}),e._v(e._s(l.name)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Orientation")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.orientation,callback:function(r){e.orientation=r},expression:"orientation"}}),e._v(e._s(l.orientation)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Description")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"textarea"},model:{value:e.content,callback:function(r){e.content=r},expression:"content"}}),e._v(e._s(l.description)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Header")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text",placeholder:"#",required:""},model:{value:e.header,callback:function(r){e.header=r},expression:"header"}}),e._v(e._s(l.header)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Footer")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.footer,callback:function(r){e.footer=r},expression:"footer"}}),e._v(e._s(l.footer)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Page Size")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.page_size,callback:function(r){e.page_size=r},expression:"page_size"}}),e._v(e._s(l.page_size)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Height")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.height,callback:function(r){e.height=r},expression:"height"}}),e._v(e._s(l.height)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Type")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.type,callback:function(r){e.type=r},expression:"type"}}),e._v(e._s(l.type)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Margin Header")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.margin_header,callback:function(r){e.margin_header=r},expression:"margin_header"}}),e._v(e._s(l.margin_header)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Margin Bottom")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.margin_bottom,callback:function(r){e.margin_bottom=r},expression:"margin_bottom"}}),e._v(e._s(l.margin_bottom)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Margin Left")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.margin_left,callback:function(r){e.margin_left=r},expression:"margin_left"}}),e._v(e._s(l.margin_left)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Margin Right")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.margin_right,callback:function(r){e.margin_right=r},expression:"margin_right"}}),e._v(e._s(l.margin_right)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Margin Top")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.margin_top,callback:function(r){e.margin_top=r},expression:"margin_top"}}),e._v(e._s(l.margin_top)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Assigned To")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.assigned_to,callback:function(r){e.assigned_to=r},expression:"assigned_to"}}),e._v(e._s(l.assigned_to)+`
            `)],1)])])])])])}),1)},v=[],u=d(6),g=d(546),x=d(42),F=d(158),n=d(1033),i=d.n(n),a=d(609),o=d.n(a),p,c,b=Object(F.a)(p||(p=Object(g.a)([`
  mutation delete_pdf_templates($id: Int!){
  delete_pdf_templates(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),_=Object(F.a)(c||(c=Object(g.a)([`
  mutation update_pdf_templates($id: Int!){
  update_pdf_templates(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),f={head:{name:"Edit Pdf Template"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deletePdf_template:function(y){var t=this;return Object(u.a)(regeneratorRuntime.mark(function l(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,t.$apollo.mutate({mutation:b,variables:{id:y.id},refetchQueries:[{query:o.a}]}).then(function(){t.$router.push({path:"../admin/marketing/pdf_templates"})}).catch(function(E){return console.log(E)});case 2:case"end":return h.stop()}},l)}))()},updatePdf_template:function(y){var t=this;return Object(u.a)(regeneratorRuntime.mark(function l(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,t.$apollo.mutate({mutation:_,variables:{id:y.id},refetchQueries:[{query:o.a}]});case 2:case"end":return h.stop()}},l)}))()},forceRerender:function(){this.componentKey+=1}},apollo:{pdf_templates:{query:i.a,prefetch:function(y){var t=y.route;return{id:t.params.id}},variables:function(){return{id:this.$route.params.id}}}}},S=f,j=d(1034),N=d(31),O=Object(N.a)(S,s,v,!1,null,null,null),D=k.default=O.exports},546:function(m,k,d){"use strict";d.d(k,"a",function(){return s});function s(v,u){return u||(u=v.slice(0)),Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(u)}}))}},609:function(m,k){var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pdf_templates"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"header"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"footer"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assigned_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"active"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_bottom"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_footer"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_header"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_left"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_right"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"margin_top"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"orientation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"page_size"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:294}};d.loc.source={body:`query MyQuery {\r
  pdf_templates {\r
    id\r
    header\r
    footer\r
    created_at\r
    content\r
    assigned_to\r
    active\r
    margin_bottom\r
    margin_footer\r
    margin_header\r
    margin_left\r
    margin_right\r
    margin_top\r
    name\r
    orientation\r
    page_size\r
    type\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function v(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var a=i.name.value;return s[a]?!1:(s[a]=!0,!0)})}function u(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(o){u(o,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(o){u(o,i)}),n.definitions&&n.definitions.forEach(function(o){u(o,i)})}var g={};(function(){d.definitions.forEach(function(i){if(i.name){var a=new Set;u(i,a),g[i.name.value]=a}})})();function x(n,i){for(var a=0;a<n.definitions.length;a++){var o=n.definitions[a];if(o.name&&o.name.value==i)return o}}function F(n,i){var a={kind:n.kind,definitions:[x(n,i)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var o=g[i]||new Set,p=new Set,c=new Set;for(o.forEach(function(_){c.add(_)});c.size>0;){var b=c;c=new Set,b.forEach(function(_){if(!p.has(_)){p.add(_);var f=g[_]||new Set;f.forEach(function(S){c.add(S)})}})}return p.forEach(function(_){var f=x(n,_);f&&a.definitions.push(f)}),a}m.exports=d,m.exports.MyQuery=F(d,"MyQuery")},726:function(m,k,d){var s=d(1035);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[m.i,s,""]]),s.locals&&(m.exports=s.locals);var v=d(52).default,u=v("04b99ad8",s,!0,{sourceMap:!1})}}]);
