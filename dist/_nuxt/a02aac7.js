(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1087:function(c,g){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visits"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"emergency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"end_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meeting"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reason"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"start_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"task"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:217}};r.loc.source={body:`query MyQuery ($id: Int){\r
  visits (where: {id: {_eq: $id}}){\r
    content\r
    created_at\r
    emergency\r
    end_date\r
    id\r
    location\r
    meeting\r
    reason\r
    start_date\r
    task\r
    username\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var d={};function m(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var a=i.name.value;return d[a]?!1:(d[a]=!0,!0)})}function l(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(s){l(s,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(s){l(s,i)}),n.definitions&&n.definitions.forEach(function(s){l(s,i)})}var f={};(function(){r.definitions.forEach(function(i){if(i.name){var a=new Set;l(i,a),f[i.name.value]=a}})})();function h(n,i){for(var a=0;a<n.definitions.length;a++){var s=n.definitions[a];if(s.name&&s.name.value==i)return s}}function b(n,i){var a={kind:n.kind,definitions:[h(n,i)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var s=f[i]||new Set,p=new Set,_=new Set;for(s.forEach(function(u){_.add(u)});_.size>0;){var x=_;_=new Set,x.forEach(function(u){if(!p.has(u)){p.add(u);var v=f[u]||new Set;v.forEach(function(S){_.add(S)})}})}return p.forEach(function(u){var v=h(n,u);v&&a.definitions.push(v)}),a}c.exports=r,c.exports.MyQuery=b(r,"MyQuery")},1088:function(c,g,r){"use strict";var d=r(744),m=r.n(d)},1089:function(c,g,r){var d=r(51),m=d(!1);m.push([c.i,"input,option,select{padding:5px}li{display:inline-block}.form-wrapper{padding:2em;border:1px solid #a8a8a8;border-radius:.5em;box-sizing:border-box}@media (min-width:650px){.reminder{display:flex}}@media (min-width:720px){.reminder{display:block}}@media (min-width:850px){.reminder{display:flex}.reminder .formulate-input{margin-right:1.5em}}.reminder .formulate-input{margin-right:2em;margin-bottom:0}strong{display:block;margin:1em 0}strong.price{margin-top:1.25em;margin-bottom:0;height:2.5em;display:inline-flex;align-items:center}",""]),c.exports=m},1302:function(c,g,r){"use strict";r.r(g);var d=function(){var e=this,y=e.$createElement,t=e._self._c||y;return t("div",e._l(e.visits,function(F){return t("FormulateForm",{key:F.id,attrs:{method:"POST",enctype:"multipart/form-data"},on:{submit:function(o){o.preventDefault()}}},[t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th"),e._v(" "),t("th",{staticClass:"visitsAddOptions",attrs:{scope:"col"}},[t("li",[t("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addVisit}})],1)])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Username")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"textarea"},model:{value:e.username,callback:function(o){e.username=o},expression:"username"}}),e._v(e._s(e.visits.username)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Reason")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text",required:""},model:{value:e.reason,callback:function(o){e.reason=o},expression:"reason"}}),e._v(e._s(e.visits.reason)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Start Date")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.start_date,callback:function(o){e.start_date=o},expression:"start_date"}}),e._v(e._s(e.visits.start_date)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("End Date")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.end_date,callback:function(o){e.end_date=o},expression:"end_date"}}),e._v(e._s(e.visits.end_date)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Emergency")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.emergency,callback:function(o){e.emergency=o},expression:"emergency"}}),e._v(e._s(e.visits.emergency)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Location")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.location,callback:function(o){e.location=o},expression:"location"}}),e._v(e._s(e.visits.location)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Task")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text"},model:{value:e.task,callback:function(o){e.task=o},expression:"task"}}),e._v(e._s(e.visits.task)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Description")]),e._v(" "),t("td",[t("vue-simplemde",{attrs:{id:"longDescription"},model:{value:e.content,callback:function(o){e.content=o},expression:"content"}}),e._v(e._s(e.visits.content)+`
            `)],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Meetings")]),e._v(" "),t("td",[t("div",{staticClass:"form-wrapper"},[t("FormulateForm",[t("FormulateInput",{attrs:{type:"group",name:"meeting",repeatable:!0,label:"Add Meetings","add-label":"+ Add Meeting"}},[t("div",{staticClass:"reminder"},[t("FormulateInput",{attrs:{name:"name",type:"text",label:"Meeting"},model:{value:e.meeting,callback:function(o){e.meeting=o},expression:"meeting"}}),e._v(e._s(e.visits.meeting)+`
                    `)],1)])],1)],1)])])])])])])}),1)},m=[],l=r(6),f=r(546),h=r(42),b=r(158),n=r(1087),i=r.n(n),a=r(594),s=r.n(a),p,_,x=Object(b.a)(p||(p=Object(f.a)([`
  mutation delete_visits($id: Int!){
  delete_visits(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),u=Object(b.a)(_||(_=Object(f.a)([`
  mutation update_visits($id: Int!){
  update_visits(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`]))),v={head:{name:"Edit Visit"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deleteVisit:function(y){var t=this;return Object(l.a)(regeneratorRuntime.mark(function F(){return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,t.$apollo.mutate({mutation:x,variables:{id:y.id},refetchQueries:[{query:s.a}]}).then(function(){t.$router.push({path:"../admin/marketing/visits"})}).catch(function(E){return console.log(E)});case 2:case"end":return k.stop()}},F)}))()},updateVisit:function(y){var t=this;return Object(l.a)(regeneratorRuntime.mark(function F(){return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,t.$apollo.mutate({mutation:u,variables:{id:y.id},refetchQueries:[{query:s.a}]});case 2:case"end":return k.stop()}},F)}))()},forceRerender:function(){this.componentKey+=1}},apollo:{visits:{query:i.a,prefetch:function(y){var t=y.route;return{id:t.params.id}},variables:function(){return{id:this.$route.params.id}}}}},S=v,w=r(1088),O=r(31),j=Object(O.a)(S,d,m,!1,null,null,null),D=g.default=j.exports},546:function(c,g,r){"use strict";r.d(g,"a",function(){return d});function d(m,l){return l||(l=m.slice(0)),Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(l)}}))}},594:function(c,g){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visits"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"emergency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"end_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meeting"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reason"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"start_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"task"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:182}};r.loc.source={body:`query MyQuery {\r
  visits {\r
    content\r
    created_at\r
    emergency\r
    end_date\r
    id\r
    location\r
    meeting\r
    reason\r
    start_date\r
    task\r
    username\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var d={};function m(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var a=i.name.value;return d[a]?!1:(d[a]=!0,!0)})}function l(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(s){l(s,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(s){l(s,i)}),n.definitions&&n.definitions.forEach(function(s){l(s,i)})}var f={};(function(){r.definitions.forEach(function(i){if(i.name){var a=new Set;l(i,a),f[i.name.value]=a}})})();function h(n,i){for(var a=0;a<n.definitions.length;a++){var s=n.definitions[a];if(s.name&&s.name.value==i)return s}}function b(n,i){var a={kind:n.kind,definitions:[h(n,i)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var s=f[i]||new Set,p=new Set,_=new Set;for(s.forEach(function(u){_.add(u)});_.size>0;){var x=_;_=new Set,x.forEach(function(u){if(!p.has(u)){p.add(u);var v=f[u]||new Set;v.forEach(function(S){_.add(S)})}})}return p.forEach(function(u){var v=h(n,u);v&&a.definitions.push(v)}),a}c.exports=r,c.exports.MyQuery=b(r,"MyQuery")},744:function(c,g,r){var d=r(1089);d.__esModule&&(d=d.default),typeof d=="string"&&(d=[[c.i,d,""]]),d.locals&&(c.exports=d.locals);var m=r(52).default,l=m("5f4bacb8",d,!0,{sourceMap:!1})}}]);