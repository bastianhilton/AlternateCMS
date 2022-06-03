(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1257:function(c,y,r){"use strict";r.r(y);var d=function(){var e=this,h=e.$createElement,t=e._self._c||h;return t("div",e._l(e.cases,function(v){return t("FormulateForm",{key:v.id,attrs:{method:"POST",enctype:"multipart/form-data"},on:{submit:function(o){o.preventDefault()}}},[t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th"),e._v(" "),t("th",{staticClass:"caseAddOptions",attrs:{scope:"col"}},[t("li",[t("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addCase}})],1)])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("State")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.state,callback:function(o){e.state=o},expression:"state"}}),e._v(e._s(v.state))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Type")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.type,callback:function(o){e.type=o},expression:"type"}}),e._v(e._s(v.type))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Subject")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.subject,callback:function(o){e.subject=o},expression:"subject"}}),e._v(e._s(v.subject))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Description")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"textarea"},model:{value:e.description,callback:function(o){e.description=o},expression:"description"}}),e._v(e._s(v.description))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Resolution")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"textarea"},model:{value:e.resolution,callback:function(o){e.resolution=o},expression:"resolution"}}),e._v(e._s(v.resolution))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Assigned To")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.assigned_to,callback:function(o){e.assigned_to=o},expression:"assigned_to"}}),e._v(e._s(v.assigned_to))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Priority")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.priority,callback:function(o){e.priority=o},expression:"priority"}}),e._v(e._s(v.priority))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Status")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.status,callback:function(o){e.status=o},expression:"status"}}),e._v(e._s(v.status))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Account Name")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.account_name,callback:function(o){e.account_name=o},expression:"account_name"}}),e._v(e._s(v.account_name))],1)])])])])])}),1)},m=[],l=r(6),p=r(546),b=r(42),x=r(158),n=r(954),i=r.n(n),a=r(565),s=r.n(a),k,_,S=Object(x.a)(k||(k=Object(p.a)([`
  mutation delete_cases($id: Int!){
  delete_cases(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),u=Object(x.a)(_||(_=Object(p.a)([`
  mutation update_cases($id: Int!){
  update_cases(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),f={head:{name:"Edit Case"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deleteCase:function(h){var t=this;return Object(l.a)(regeneratorRuntime.mark(function v(){return regeneratorRuntime.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,t.$apollo.mutate({mutation:S,variables:{id:h.id},refetchQueries:[{query:s.a}]}).then(function(){t.$router.push({path:"../admin/reports/cases"})}).catch(function(N){return console.log(N)});case 2:case"end":return g.stop()}},v)}))()},updateCase:function(h){var t=this;return Object(l.a)(regeneratorRuntime.mark(function v(){return regeneratorRuntime.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,t.$apollo.mutate({mutation:u,variables:{id:h.id},refetchQueries:[{query:s.a}]});case 2:case"end":return g.stop()}},v)}))()},forceRerender:function(){this.componentKey+=1}},apollo:{cases:{query:i.a,prefetch:function(h){var t=h.route;return{id:t.params.id}},variables:function(){return{id:this.$route.params.id}}}}},F=f,E=r(955),j=r(31),O=Object(j.a)(F,d,m,!1,null,null,null),D=y.default=O.exports},546:function(c,y,r){"use strict";r.d(y,"a",function(){return d});function d(m,l){return l||(l=m.slice(0)),Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(l)}}))}},565:function(c,y){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"cases"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"priority"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"resolution"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date_modified"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"case_number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assigned_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"account_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:224}};r.loc.source={body:`query MyQuery {\r
  cases {\r
    id\r
    priority\r
    resolution\r
    state\r
    status\r
    subject\r
    description\r
    created_at\r
    date_modified\r
    case_number\r
    assigned_to\r
    account_name\r
    type\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var d={};function m(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var a=i.name.value;return d[a]?!1:(d[a]=!0,!0)})}function l(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(s){l(s,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(s){l(s,i)}),n.definitions&&n.definitions.forEach(function(s){l(s,i)})}var p={};(function(){r.definitions.forEach(function(i){if(i.name){var a=new Set;l(i,a),p[i.name.value]=a}})})();function b(n,i){for(var a=0;a<n.definitions.length;a++){var s=n.definitions[a];if(s.name&&s.name.value==i)return s}}function x(n,i){var a={kind:n.kind,definitions:[b(n,i)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var s=p[i]||new Set,k=new Set,_=new Set;for(s.forEach(function(u){_.add(u)});_.size>0;){var S=_;_=new Set,S.forEach(function(u){if(!k.has(u)){k.add(u);var f=p[u]||new Set;f.forEach(function(F){_.add(F)})}})}return k.forEach(function(u){var f=b(n,u);f&&a.definitions.push(f)}),a}c.exports=r,c.exports.MyQuery=x(r,"MyQuery")},699:function(c,y,r){var d=r(956);d.__esModule&&(d=d.default),typeof d=="string"&&(d=[[c.i,d,""]]),d.locals&&(c.exports=d.locals);var m=r(52).default,l=m("79a94f9c",d,!0,{sourceMap:!1})},954:function(c,y){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"cases"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"priority"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"resolution"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date_modified"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"case_number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assigned_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"account_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:261}};r.loc.source={body:`query MyQuery ($id: Int!) {\r
  cases(where: {id: {_eq: $id}}) {\r
    id\r
    priority\r
    resolution\r
    state\r
    status\r
    subject\r
    description\r
    created_at\r
    date_modified\r
    case_number\r
    assigned_to\r
    account_name\r
    type\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var d={};function m(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var a=i.name.value;return d[a]?!1:(d[a]=!0,!0)})}function l(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(s){l(s,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(s){l(s,i)}),n.definitions&&n.definitions.forEach(function(s){l(s,i)})}var p={};(function(){r.definitions.forEach(function(i){if(i.name){var a=new Set;l(i,a),p[i.name.value]=a}})})();function b(n,i){for(var a=0;a<n.definitions.length;a++){var s=n.definitions[a];if(s.name&&s.name.value==i)return s}}function x(n,i){var a={kind:n.kind,definitions:[b(n,i)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var s=p[i]||new Set,k=new Set,_=new Set;for(s.forEach(function(u){_.add(u)});_.size>0;){var S=_;_=new Set,S.forEach(function(u){if(!k.has(u)){k.add(u);var f=p[u]||new Set;f.forEach(function(F){_.add(F)})}})}return k.forEach(function(u){var f=b(n,u);f&&a.definitions.push(f)}),a}c.exports=r,c.exports.MyQuery=x(r,"MyQuery")},955:function(c,y,r){"use strict";var d=r(699),m=r.n(d)},956:function(c,y,r){var d=r(51),m=d(!1);m.push([c.i,"input,option,select{padding:5px}li{display:inline-block}",""]),c.exports=m}}]);