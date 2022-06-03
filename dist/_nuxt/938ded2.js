(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1151:function(l,v,n){"use strict";n.r(v);var i=function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",[e("FormulateForm",{attrs:{method:"POST",enctype:"multipart/form-data"},on:{submit:function(_){_.preventDefault()}}},[e("nav",{staticClass:"navbar navbar-dark bg-dark"},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"navbar-brand"},[e("button",{staticClass:"btn btn-warning",attrs:{type:"reset"}},[t._v("Reset")])]),t._v(" "),e("a",{staticClass:"navbar-brand"},[e("FormulateInput",{attrs:{type:"button",label:"Save OOTO"},on:{click:t.addOoto}})],1)])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"nav flex-column nav-tabs text-center",attrs:{id:"v-tabs-tab",role:"tablist","aria-orientation":"vertical"}},[e("a",{staticClass:"nav-link active",attrs:{id:"v-tabs-home-tab","data-mdb-toggle":"tab",href:"#v-tabs-home",role:"tab","aria-controls":"v-tabs-home","aria-selected":"true"}},[t._v("Create A New Out of Office")])])]),t._v(" "),e("div",{staticClass:"col-9"},[e("div",{staticClass:"tab-scope",attrs:{id:"v-tabs-tabContent"}},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"v-tabs-home",role:"tabpanel","aria-labelledby":"v-tabs-home-tab"}},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Login")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",required:""},model:{value:t.login,callback:function(_){t.login=_},expression:"login"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("WHID")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.whid,callback:function(_){t.whid=_},expression:"whid"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Start Date")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"date",required:""},model:{value:t.start_date,callback:function(_){t.start_date=_},expression:"start_date"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("End Date")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"date",required:""},model:{value:t.end_date,callback:function(_){t.end_date=_},expression:"end_date"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Description")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"textarea"},model:{value:t.description,callback:function(_){t.description=_},expression:"description"}})],1)])])])])])])])])])],1)},c=[],u=n(6),g=n(546),y=n(42),w=n(13),a=n(59),o=n(158),r=n(580),s,b=Object(o.a)(s||(s=Object(g.a)([`
    mutation ($login:String!,$description:String!,$whid:String!,$start_date:String!,$end_date:String){
    insert_ooto(objects: {login: $login, description: $description, whid: $whid, start_date: $start_date, end_date: $end_date}) {
        affected_rows
        returning {
            login
            description
            whid
            start_date
            end_date
    }
  }
}`]))),m={data:function(){return{whid:" ",login:" ",description:" ",start_date:" ",end_date:" "}},methods:{addOoto:function(){var d=this;return Object(u.a)(regeneratorRuntime.mark(function e(){var _,S,j,k,D;return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return _=d.login,S=d.start_date,j=d.description,k=d.whid,D=d.end_date,h.next=7,d.$apollo.mutate({mutation:b,variables:{login:_,description:j,whid:k,start_date:S,end_date:D},update:function(F,E){var R=E.data.insertOoto;try{var $=R.returning;console.log($),F.writeQuery({query:r.ooto})}catch(P){console.error(P)}}}).then(function(){d.$router.push({path:"../system/ooto"})}).catch(function(C){return console.log(C)});case 7:d.login=" ",d.description=" ",d.whid=" ",d.start_date=" ",d.end_date=" ";case 12:case"end":return h.stop()}},e)}))()}},head:{title:"Add New OOTO"}},O=m,f=n(821),p=n(31),x=Object(p.a)(O,i,c,!1,null,null,null),T=v.default=x.exports},546:function(l,v,n){"use strict";n.d(v,"a",function(){return i});function i(c,u){return u||(u=c.slice(0)),Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(u)}}))}},580:function(l,v){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ooto"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"end_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"note"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"login"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"start_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:124}};n.loc.source={body:`query MyQuery {\r
  ooto {\r
    id\r
    end_date\r
    note\r
    created_at\r
    login\r
    start_date\r
    location\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function c(a){return a.filter(function(o){if(o.kind!=="FragmentDefinition")return!0;var r=o.name.value;return i[r]?!1:(i[r]=!0,!0)})}function u(a,o){if(a.kind==="FragmentSpread")o.add(a.name.value);else if(a.kind==="VariableDefinition"){var r=a.type;r.kind==="NamedType"&&o.add(r.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(s){u(s,o)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(s){u(s,o)}),a.definitions&&a.definitions.forEach(function(s){u(s,o)})}var g={};(function(){n.definitions.forEach(function(o){if(o.name){var r=new Set;u(o,r),g[o.name.value]=r}})})();function y(a,o){for(var r=0;r<a.definitions.length;r++){var s=a.definitions[r];if(s.name&&s.name.value==o)return s}}function w(a,o){var r={kind:a.kind,definitions:[y(a,o)]};a.hasOwnProperty("loc")&&(r.loc=a.loc);var s=g[o]||new Set,b=new Set,m=new Set;for(s.forEach(function(f){m.add(f)});m.size>0;){var O=m;m=new Set,O.forEach(function(f){if(!b.has(f)){b.add(f);var p=g[f]||new Set;p.forEach(function(x){m.add(x)})}})}return b.forEach(function(f){var p=y(a,f);p&&r.definitions.push(p)}),r}l.exports=n,l.exports.MyQuery=w(n,"MyQuery")},657:function(l,v,n){var i=n(822);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[l.i,i,""]]),i.locals&&(l.exports=i.locals);var c=n(52).default,u=c("c91a3716",i,!0,{sourceMap:!1})},821:function(l,v,n){"use strict";var i=n(657),c=n.n(i)},822:function(l,v,n){var i=n(51),c=i(!1);c.push([l.i,"input,option,select{padding:5px}li{display:inline-block}",""]),l.exports=c}}]);