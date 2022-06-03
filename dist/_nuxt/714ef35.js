(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1177:function(_,v,i){"use strict";i.r(v);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("FormulateForm",{attrs:{method:"POST",enctype:"multipart/form-data"},on:{submit:function(r){r.preventDefault()}}},[e("nav",{staticClass:"navbar navbar-dark bg-dark"},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"navbar-brand"},[e("button",{staticClass:"btn btn-warning",attrs:{type:"reset"}},[t._v("Reset")])]),t._v(" "),e("a",{staticClass:"navbar-brand"},[e("FormulateInput",{attrs:{type:"button",label:"Save Visit"},on:{click:t.addVisit}})],1)])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"nav flex-column nav-tabs text-center",attrs:{id:"v-tabs-tab",role:"tablist","aria-orientation":"vertical"}},[e("a",{staticClass:"nav-link active",attrs:{id:"v-tabs-home-tab","data-mdb-toggle":"tab",href:"#v-tabs-home",role:"tab","aria-controls":"v-tabs-home","aria-selected":"true"}},[t._v("Create A New Visit")])])]),t._v(" "),e("div",{staticClass:"col-9"},[e("div",{staticClass:"tab-scope",attrs:{id:"v-tabs-tabContent"}},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"v-tabs-home",role:"tabpanel","aria-labelledby":"v-tabs-home-tab"}},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Username")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"textarea"},model:{value:t.username,callback:function(r){t.username=r},expression:"username"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Reason")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",required:""},model:{value:t.reason,callback:function(r){t.reason=r},expression:"reason"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Start Date")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.start_date,callback:function(r){t.start_date=r},expression:"start_date"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("End Date")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.end_date,callback:function(r){t.end_date=r},expression:"end_date"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Emergency")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.emergency,callback:function(r){t.emergency=r},expression:"emergency"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Location")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.location,callback:function(r){t.location=r},expression:"location"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Task")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.task,callback:function(r){t.task=r},expression:"task"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Description")]),t._v(" "),e("td",[e("vue-simplemde",{attrs:{id:"longDescription"},model:{value:t.content,callback:function(r){t.content=r},expression:"content"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Meetings")]),t._v(" "),e("td",[e("div",{staticClass:"form-wrapper"},[e("FormulateForm",[e("FormulateInput",{attrs:{type:"group",name:"meeting",repeatable:!0,label:"Add Meetings","add-label":"+ Add Meeting"}},[e("div",{staticClass:"reminder"},[e("FormulateInput",{attrs:{name:"name",type:"text",label:"Meeting"},model:{value:t.meeting,callback:function(r){t.meeting=r},expression:"meeting"}})],1)])],1)],1)])])])])])])])])])])],1)},c=[],u=i(6),g=i(546),k=i(42),h=i(158),n=i(594),o,d=Object(h.a)(o||(o=Object(g.a)([`
    mutation ($reason:String!,$location:String!,$end_date:String!,$content:String!,$username:String!,$emergency:String!,$meeting:String!,$start_date:String!,$task:String!){
    insert_visits(objects: {reason: $reason, location: $location, end_date: $end_date, content: $content, username: $username, emergency: $emergency, meeting: $meeting, start_date: $start_date, task: $task}) {
        affected_rows
        returning {
            reason
            location
            end_date
            content
            username
            emergency
            meeting
            start_date
            task
    }
  }
}`]))),l={data:function(){return{reason:" ",location:" ",content:" ",username:" ",emergency:" ",meeting:" ",start_date:" ",end_date:" ",task:" "}},head:{title:"Add New Visit"},computed:{total:function(){var a=Array.isArray(this.formData.visits)?this.formData.visits.length:1;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a*100)}},methods:{addVisit:function(){var a=this;return Object(u.a)(regeneratorRuntime.mark(function e(){var r,S,F,j,w,O,D,C,$;return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return r=a.reason,S=a.content,F=a.location,j=a.end_date,w=a.username,O=a.emergency,D=a.meeting,C=a.start_date,$=a.task,b.next=11,a.$apollo.mutate({mutation:d,variables:{reason:r,location:F,end_date:j,content:S,username:w,emergency:O,meeting:D,start_date:C,task:$},update:function(I,R){var N=R.data.insertVisits;try{var M=N.returning;console.log(M),I.writeQuery({query:n.visits})}catch(A){console.error(A)}}}).then(function(){a.$router.push({path:"../marketing/visits"})}).catch(function(E){return console.log(E)});case 11:a.reason=" ",a.location=" ",a.end_date=" ",a.content=" ",a.username=" ",a.emergency=" ",a.meeting=" ",a.start_date=" ",a.task=" ";case 20:case"end":return b.stop()}},e)}))()}}},p=l,f=i(873),x=i(31),m=Object(x.a)(p,s,c,!1,null,null,null),y=v.default=m.exports},546:function(_,v,i){"use strict";i.d(v,"a",function(){return s});function s(c,u){return u||(u=c.slice(0)),Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(u)}}))}},594:function(_,v){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visits"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"emergency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"end_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"meeting"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reason"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"start_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"task"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:182}};i.loc.source={body:`query MyQuery {\r
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
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function c(n){return n.filter(function(o){if(o.kind!=="FragmentDefinition")return!0;var d=o.name.value;return s[d]?!1:(s[d]=!0,!0)})}function u(n,o){if(n.kind==="FragmentSpread")o.add(n.name.value);else if(n.kind==="VariableDefinition"){var d=n.type;d.kind==="NamedType"&&o.add(d.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(l){u(l,o)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(l){u(l,o)}),n.definitions&&n.definitions.forEach(function(l){u(l,o)})}var g={};(function(){i.definitions.forEach(function(o){if(o.name){var d=new Set;u(o,d),g[o.name.value]=d}})})();function k(n,o){for(var d=0;d<n.definitions.length;d++){var l=n.definitions[d];if(l.name&&l.name.value==o)return l}}function h(n,o){var d={kind:n.kind,definitions:[k(n,o)]};n.hasOwnProperty("loc")&&(d.loc=n.loc);var l=g[o]||new Set,p=new Set,f=new Set;for(l.forEach(function(m){f.add(m)});f.size>0;){var x=f;f=new Set,x.forEach(function(m){if(!p.has(m)){p.add(m);var y=g[m]||new Set;y.forEach(function(t){f.add(t)})}})}return p.forEach(function(m){var y=k(n,m);y&&d.definitions.push(y)}),d}_.exports=i,_.exports.MyQuery=h(i,"MyQuery")},683:function(_,v,i){var s=i(874);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[_.i,s,""]]),s.locals&&(_.exports=s.locals);var c=i(52).default,u=c("129e203d",s,!0,{sourceMap:!1})},873:function(_,v,i){"use strict";var s=i(683),c=i.n(s)},874:function(_,v,i){var s=i(51),c=s(!1);c.push([_.i,"input,option,select{padding:5px}li{display:inline-block}.form-wrapper{padding:2em;border:1px solid #a8a8a8;border-radius:.5em;box-sizing:border-box}@media (min-width:650px){.reminder{display:flex}}@media (min-width:720px){.reminder{display:block}}@media (min-width:850px){.reminder{display:flex}.reminder .formulate-input{margin-right:1.5em}}.reminder .formulate-input{margin-right:2em;margin-bottom:0}strong{display:block;margin:1em 0}strong.price{margin-top:1.25em;margin-bottom:0;height:2.5em;display:inline-flex;align-items:center}",""]),_.exports=c}}]);