(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1014:function(c,k){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"meeting"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assigned_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"end_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"invitees"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"related_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reminders"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scheduling"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"start_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:255}};r.loc.source={body:`query MyQuery ($id: Int){\r
  meeting (where: {id: {_eq: $id}}){\r
    id\r
    assigned_to\r
    content\r
    created_at\r
    duration\r
    end_date\r
    invitees\r
    related_to\r
    reminders\r
    scheduling\r
    start_date\r
    status\r
    subject\r
  }\r
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function m(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var a=i.name.value;return s[a]?!1:(s[a]=!0,!0)})}function o(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(d){o(d,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(d){o(d,i)}),n.definitions&&n.definitions.forEach(function(d){o(d,i)})}var p={};(function(){r.definitions.forEach(function(i){if(i.name){var a=new Set;o(i,a),p[i.name.value]=a}})})();function b(n,i){for(var a=0;a<n.definitions.length;a++){var d=n.definitions[a];if(d.name&&d.name.value==i)return d}}function x(n,i){var a={kind:n.kind,definitions:[b(n,i)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var d=p[i]||new Set,g=new Set,_=new Set;for(d.forEach(function(u){_.add(u)});_.size>0;){var F=_;_=new Set,F.forEach(function(u){if(!g.has(u)){g.add(u);var f=p[u]||new Set;f.forEach(function(S){_.add(S)})}})}return g.forEach(function(u){var f=b(n,u);f&&a.definitions.push(f)}),a}c.exports=r,c.exports.MyQuery=x(r,"MyQuery")},1015:function(c,k,r){"use strict";var s=r(719),m=r.n(s)},1016:function(c,k,r){var s=r(51),m=s(!1);m.push([c.i,"input,option,select{padding:5px}li{display:inline-block}",""]),c.exports=m},1277:function(c,k,r){"use strict";r.r(k);var s=function(){var e=this,y=e.$createElement,t=e._self._c||y;return t("div",e._l(e.meetings,function(v){return t("FormulateForm",{key:v.id,attrs:{method:"POST",enctype:"multipart/form-data"},on:{submit:function(l){l.preventDefault()}}},[t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th"),e._v(" "),t("th",{staticClass:"meetingAddOptions",attrs:{scope:"col"}},[t("li",[t("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addMeeting}})],1)])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Subject")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text",required:""},model:{value:e.subject,callback:function(l){e.subject=l},expression:"subject"}}),e._v(e._s(v.subject))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Start Date")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.start_date,callback:function(l){e.start_date=l},expression:"start_date"}}),e._v(e._s(v.start_date))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("End Date")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.due_date,callback:function(l){e.due_date=l},expression:"due_date"}}),e._v(e._s(v.end_date))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Duration")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"datetime-local"},model:{value:e.duration,callback:function(l){e.duration=l},expression:"duration"}}),e._v(e._s(v.duration))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Status")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.status,callback:function(l){e.status=l},expression:"status"}}),e._v(e._s(v.status))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Related To")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.related_to,callback:function(l){e.related_to=l},expression:"related_to"}}),e._v(e._s(v.related_to))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Reminders")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.reminders,callback:function(l){e.reminders=l},expression:"reminders"}}),e._v(e._s(v.reminders))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Description")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"textarea"},model:{value:e.content,callback:function(l){e.content=l},expression:"content"}}),e._v(e._s(v.content))],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Assigned To")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"textarea"},model:{value:e.assigned_to,callback:function(l){e.assigned_to=l},expression:"assigned_to"}}),e._v(e._s(v.assigned_to))],1)])])])])])}),1)},m=[],o=r(6),p=r(546),b=r(42),x=r(158),n=r(1014),i=r.n(n),a=r(579),d=r.n(a),g,_,F=Object(x.a)(g||(g=Object(p.a)([`
  mutation delete_meeting($id: Int!){
  delete_meeting(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),u=Object(x.a)(_||(_=Object(p.a)([`
  mutation update_meeting($id: Int!){
  update_meeting(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),f={head:{name:"Edit Meeting"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deleteMeeting:function(y){var t=this;return Object(o.a)(regeneratorRuntime.mark(function v(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,t.$apollo.mutate({mutation:F,variables:{id:y.id},refetchQueries:[{query:d.a}]}).then(function(){t.$router.push({path:"../customers/meetings"})}).catch(function(E){return console.log(E)});case 2:case"end":return h.stop()}},v)}))()},updateMeeting:function(y){var t=this;return Object(o.a)(regeneratorRuntime.mark(function v(){return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,t.$apollo.mutate({mutation:u,variables:{id:y.id},refetchQueries:[{query:d.a}]});case 2:case"end":return h.stop()}},v)}))()},forceRerender:function(){this.componentKey+=1}},apollo:{meeting:{query:i.a,prefetch:function(y){var t=y.route;return{id:t.params.id}},variables:function(){return{id:this.$route.params.id}}}}},S=f,N=r(1015),j=r(31),O=Object(j.a)(S,s,m,!1,null,null,null),D=k.default=O.exports},546:function(c,k,r){"use strict";r.d(k,"a",function(){return s});function s(m,o){return o||(o=m.slice(0)),Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(o)}}))}},579:function(c,k){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"meeting"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assigned_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"end_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"invitees"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"related_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reminders"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"scheduling"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"start_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:220}};r.loc.source={body:`query MyQuery {\r
  meeting {\r
    id\r
    assigned_to\r
    content\r
    created_at\r
    duration\r
    end_date\r
    invitees\r
    related_to\r
    reminders\r
    scheduling\r
    start_date\r
    status\r
    subject\r
  }\r
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function m(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var a=i.name.value;return s[a]?!1:(s[a]=!0,!0)})}function o(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(d){o(d,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(d){o(d,i)}),n.definitions&&n.definitions.forEach(function(d){o(d,i)})}var p={};(function(){r.definitions.forEach(function(i){if(i.name){var a=new Set;o(i,a),p[i.name.value]=a}})})();function b(n,i){for(var a=0;a<n.definitions.length;a++){var d=n.definitions[a];if(d.name&&d.name.value==i)return d}}function x(n,i){var a={kind:n.kind,definitions:[b(n,i)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var d=p[i]||new Set,g=new Set,_=new Set;for(d.forEach(function(u){_.add(u)});_.size>0;){var F=_;_=new Set,F.forEach(function(u){if(!g.has(u)){g.add(u);var f=p[u]||new Set;f.forEach(function(S){_.add(S)})}})}return g.forEach(function(u){var f=b(n,u);f&&a.definitions.push(f)}),a}c.exports=r,c.exports.MyQuery=x(r,"MyQuery")},719:function(c,k,r){var s=r(1016);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[c.i,s,""]]),s.locals&&(c.exports=s.locals);var m=r(52).default,o=m("2fa06dd8",s,!0,{sourceMap:!1})}}]);