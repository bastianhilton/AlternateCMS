(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1084:function(m,g){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ticketing"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"department"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date_modified"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"comment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assigned_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"account_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"level"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"media"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"priority"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"projects"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"requester"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"requester_email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"resolution"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ticket_type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"team"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"severity"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:398}};r.loc.source={body:`query MyQuery ($id: Int){\r
  ticketing (where: {id: {_eq: $id}}){\r
    id\r
    department\r
    date_modified\r
    date\r
    created_at\r
    content\r
    comment\r
    assigned_to\r
    account_name\r
    level\r
    location\r
    media\r
    name\r
    priority\r
    products\r
    projects\r
    requester\r
    requester_email\r
    resolution\r
    ticket_type\r
    team\r
    status\r
    severity\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var l={};function _(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var a=i.name.value;return l[a]?!1:(l[a]=!0,!0)})}function u(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(s){u(s,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(s){u(s,i)}),n.definitions&&n.definitions.forEach(function(s){u(s,i)})}var k={};(function(){r.definitions.forEach(function(i){if(i.name){var a=new Set;u(i,a),k[i.name.value]=a}})})();function F(n,i){for(var a=0;a<n.definitions.length;a++){var s=n.definitions[a];if(s.name&&s.name.value==i)return s}}function N(n,i){var a={kind:n.kind,definitions:[F(n,i)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var s=k[i]||new Set,p=new Set,v=new Set;for(s.forEach(function(c){v.add(c)});v.size>0;){var x=v;v=new Set,x.forEach(function(c){if(!p.has(c)){p.add(c);var f=k[c]||new Set;f.forEach(function(b){v.add(b)})}})}return p.forEach(function(c){var f=F(n,c);f&&a.definitions.push(f)}),a}m.exports=r,m.exports.MyQuery=N(r,"MyQuery")},1085:function(m,g,r){"use strict";var l=r(743),_=r.n(l)},1086:function(m,g,r){var l=r(51),_=l(!1);_.push([m.i,"input,option,select{padding:5px}",""]),m.exports=_},1301:function(m,g,r){"use strict";r.r(g);var l=function(){var e=this,h=e.$createElement,t=e._self._c||h;return t("div",e._l(e.ticketing,function(o){return t("FormulateForm",{key:o.id,attrs:{method:"POST",enctype:"multipart/form-data"},on:{submit:function(d){d.preventDefault()}}},[t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th"),e._v(" "),t("th",{staticClass:"ticketingAddOptions",attrs:{scope:"col"}},[t("li",[t("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addTicketing}})],1)])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Severity")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{options:{first:"1",second:"2",third:"3",four:"4",five:"5"},type:"select",label:"Choose the severity based the level of the situation",required:""},model:{value:e.severity,callback:function(d){e.severity=d},expression:"severity"}}),e._v(e._s(o.severity)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Sticketinge of Ticket")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{options:{first:"Assigned",second:"Pending",third:"Work in Progress",four:"Researching",five:"Resolved"},type:"select",label:"Choose the current phase of the ticket",required:""},model:{value:e.level,callback:function(d){e.level=d},expression:"level"}}),e._v(e._s(o.level)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Ticket Name")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{name:"ticketingName",type:"text",required:""},model:{value:e.name,callback:function(d){e.name=d},expression:"name"}}),e._v(e._s(o.name)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Ticket Type")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{name:"ticketingName",required:"",options:{first:"Trouble Ticket",second:"Action Item",third:"Audit",four:"Patrol Action",five:"Private"},type:"select",label:"What type of ticket is this?"},model:{value:e.ticket_type,callback:function(d){e.ticket_type=d},expression:"ticket_type"}}),e._v(e._s(o.ticket_type)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Ticket Department")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text",required:""},model:{value:e.department,callback:function(d){e.department=d},expression:"department"}}),e._v(e._s(o.department)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Account Name")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text",required:""},model:{value:e.account_name,callback:function(d){e.account_name=d},expression:"account_name"}}),e._v(e._s(o.account_name)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Priority")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.priority,callback:function(d){e.priority=d},expression:"priority"}}),e._v(e._s(o.priority)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Requester")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.requester,callback:function(d){e.requester=d},expression:"requester"}}),e._v(e._s(o.requester)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Requester Email")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text",required:""},model:{value:e.requester_email,callback:function(d){e.requester_email=d},expression:"requester_email"}}),e._v(e._s(o.requester_email)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Date")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"datetime-local"},model:{value:e.date,callback:function(d){e.date=d},expression:"date"}}),e._v(e._s(o.date)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Description")]),e._v(" "),t("td",[t("client-only",[t("vue-simplemde",{attrs:{id:"longDescription"},model:{value:e.content,callback:function(d){e.content=d},expression:"content"}}),e._v(e._s(o.content)+`
              `)],1)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Team")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.team,callback:function(d){e.team=d},expression:"team"}}),e._v(e._s(o.team)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Assigned To")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.assigned_to,callback:function(d){e.assigned_to=d},expression:"assigned_to"}}),e._v(e._s(o.assigned_to)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Media")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"file"},model:{value:e.media,callback:function(d){e.media=d},expression:"media"}}),e._v(e._s(o.media)+`
            `)],1)])])])])])}),1)},_=[],u=r(6),k=r(546),F=r(42),N=r(158),n=r(1084),i=r.n(n),a=r(593),s=r.n(a),p,v,x=Object(N.a)(p||(p=Object(k.a)([`
  mutation delete_ticketing($id: Int!){
  delete_ticketing(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),c=Object(N.a)(v||(v=Object(k.a)([`
  mutation update_ticketing($id: Int!){
  update_ticketing(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),f={head:{name:"Edit Ticket"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deleteTicketing:function(h){var t=this;return Object(u.a)(regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,t.$apollo.mutate({mutation:x,variables:{id:h.id},refetchQueries:[{query:s.a}]}).then(function(){t.$router.push({path:"../admin/marketing/ticketing"})}).catch(function(j){return console.log(j)});case 2:case"end":return y.stop()}},o)}))()},updateTicketing:function(h){var t=this;return Object(u.a)(regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,t.$apollo.mutate({mutation:c,variables:{id:h.id},refetchQueries:[{query:s.a}]});case 2:case"end":return y.stop()}},o)}))()},forceRerender:function(){this.componentKey+=1}},apollo:{ticketing:{query:i.a,prefetch:function(h){var t=h.route;return{id:t.params.id}},variables:function(){return{id:this.$route.params.id}}}}},b=f,E=r(1085),S=r(31),O=Object(S.a)(b,l,_,!1,null,null,null),T=g.default=O.exports},546:function(m,g,r){"use strict";r.d(g,"a",function(){return l});function l(_,u){return u||(u=_.slice(0)),Object.freeze(Object.defineProperties(_,{raw:{value:Object.freeze(u)}}))}},593:function(m,g){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ticketing"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"department"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date_modified"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"comment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"assigned_to"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"account_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"level"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"media"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"priority"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"projects"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"requester"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"requester_email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"resolution"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ticket_type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"team"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"severity"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:363}};r.loc.source={body:`query MyQuery {\r
  ticketing {\r
    id\r
    department\r
    date_modified\r
    date\r
    created_at\r
    content\r
    comment\r
    assigned_to\r
    account_name\r
    level\r
    location\r
    media\r
    name\r
    priority\r
    products\r
    projects\r
    requester\r
    requester_email\r
    resolution\r
    ticket_type\r
    team\r
    status\r
    severity\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var l={};function _(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var a=i.name.value;return l[a]?!1:(l[a]=!0,!0)})}function u(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(s){u(s,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(s){u(s,i)}),n.definitions&&n.definitions.forEach(function(s){u(s,i)})}var k={};(function(){r.definitions.forEach(function(i){if(i.name){var a=new Set;u(i,a),k[i.name.value]=a}})})();function F(n,i){for(var a=0;a<n.definitions.length;a++){var s=n.definitions[a];if(s.name&&s.name.value==i)return s}}function N(n,i){var a={kind:n.kind,definitions:[F(n,i)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var s=k[i]||new Set,p=new Set,v=new Set;for(s.forEach(function(c){v.add(c)});v.size>0;){var x=v;v=new Set,x.forEach(function(c){if(!p.has(c)){p.add(c);var f=k[c]||new Set;f.forEach(function(b){v.add(b)})}})}return p.forEach(function(c){var f=F(n,c);f&&a.definitions.push(f)}),a}m.exports=r,m.exports.MyQuery=N(r,"MyQuery")},743:function(m,g,r){var l=r(1086);l.__esModule&&(l=l.default),typeof l=="string"&&(l=[[m.i,l,""]]),l.locals&&(m.exports=l.locals);var _=r(52).default,u=_("4c2c92f9",l,!0,{sourceMap:!1})}}]);
