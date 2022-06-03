(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1139:function(c,v,a){"use strict";a.r(v);var i=function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("FormulateForm",{attrs:{method:"POST",enctype:"multipart/form-data"},on:{submit:function(d){d.preventDefault()}}},[e("nav",{staticClass:"navbar navbar-dark bg-dark"},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"navbar-brand"},[e("button",{staticClass:"btn btn-warning",attrs:{type:"reset"}},[t._v("Reset")])]),t._v(" "),e("a",{staticClass:"navbar-brand"},[e("FormulateInput",{attrs:{type:"button",label:"Save Email"},on:{click:t.addEmail}})],1)])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"nav flex-column nav-tabs text-center",attrs:{id:"v-tabs-tab",role:"tablist","aria-orientation":"vertical"}},[e("a",{staticClass:"nav-link active",attrs:{id:"v-tabs-home-tab","data-mdb-toggle":"tab",href:"#v-tabs-home",role:"tab","aria-controls":"v-tabs-home","aria-selected":"true"}},[t._v("Create A New Email")])])]),t._v(" "),e("div",{staticClass:"col-9"},[e("div",{staticClass:"tab-scope",attrs:{id:"v-tabs-tabContent"}},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"v-tabs-home",role:"tabpanel","aria-labelledby":"v-tabs-home-tab"}},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Send Email From")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",required:""},model:{value:t.from,callback:function(d){t.from=d},expression:"from"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Send Email To")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",required:""},model:{value:t.cc,callback:function(d){t.cc=d},expression:"cc"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("BCC")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",label:"BCC is another email address you will be sending email to but won't see anyone else you are emailing"},model:{value:t.bcc,callback:function(d){t.bcc=d},expression:"bcc"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Email Subject")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.subject,callback:function(d){t.subject=d},expression:"subject"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Insert Media")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"file",name:"file",label:"Insert a file, image, video, or other content",multiple:""},model:{value:t.media,callback:function(d){t.media=d},expression:"media"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Email Content")]),t._v(" "),e("td",[e("client-only",[e("vue-simplemde",{attrs:{id:"articleDescription",placeholder:"The content of your emails"},model:{value:t.content,callback:function(d){t.content=d},expression:"content"}})],1)],1)])])])])])])])])])],1)},_=[],u=a(6),b=a(546),y=a(42),h=a(158),n=a(605),r,s=Object(h.a)(r||(r=Object(b.a)([`
    mutation ($from:String!,$subject:String!,$bcc:String!,$content:String!,$media:String!,$bcc:String!,$cc:String!){
    insert_emails(objects: {from: $from, subject: $subject, bcc: $bcc, content: $content, cc: $cc}) {
        affected_rows
        returning {
            from
            subject
            bcc
            cc
            content
            media
    }
  }
}`]))),o={layout:"dashboard",data:function(){return{bcc:[],cc:[],from:" ",subject:" ",content:'``` \nconsole.log("lalala") \n```',media:[]}},head:{from:"Create A New Email"},methods:{addEmail:function(){var l=this;return Object(u.a)(regeneratorRuntime.mark(function e(){var d,S,x,F,E,O;return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return d=l.from,S=l.content,x=l.subject,F=l.bcc,E=l.cc,O=l.media,k.next=8,l.$apollo.mutate({mutation:s,variables:{from:d,subject:x,bcc:F,cc:E,content:S,media:O},update:function(w,N){var D=N.data.insertEmails;try{var R=D.returning;console.log(R),w.writeQuery({query:n.emails})}catch($){console.error($)}}}).then(function(){l.$router.push({path:"../marketing/emails"})}).catch(function(C){return console.log(C)});case 8:l.from=" ",l.subject=" ",l.bcc=" ",l.cc=" ",l.content=" ",l.media=" ";case 14:case"end":return k.stop()}},e)}))()}}},p=o,f=a(797),j=a(31),m=Object(j.a)(p,i,_,!1,null,null,null),g=v.default=m.exports},546:function(c,v,a){"use strict";a.d(v,"a",function(){return i});function i(_,u){return u||(u=_.slice(0)),Object.freeze(Object.defineProperties(_,{raw:{value:Object.freeze(u)}}))}},605:function(c,v){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"emails"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cust_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subject"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"bcc"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cc"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"from"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"media"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"staff_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:326}};a.loc.source={body:`query MyQuery {\r
  emails {\r
    id\r
    cust_id\r
    created_at\r
    content\r
    subject\r
    customer {\r
      id\r
      first_name\r
      last_name\r
      email\r
    }\r
    bcc\r
    cc\r
    from\r
    media\r
    staff_id\r
    user {\r
      email\r
      id\r
      last_name\r
      username\r
      first_name\r
    }\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function _(n){return n.filter(function(r){if(r.kind!=="FragmentDefinition")return!0;var s=r.name.value;return i[s]?!1:(i[s]=!0,!0)})}function u(n,r){if(n.kind==="FragmentSpread")r.add(n.name.value);else if(n.kind==="VariableDefinition"){var s=n.type;s.kind==="NamedType"&&r.add(s.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(o){u(o,r)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(o){u(o,r)}),n.definitions&&n.definitions.forEach(function(o){u(o,r)})}var b={};(function(){a.definitions.forEach(function(r){if(r.name){var s=new Set;u(r,s),b[r.name.value]=s}})})();function y(n,r){for(var s=0;s<n.definitions.length;s++){var o=n.definitions[s];if(o.name&&o.name.value==r)return o}}function h(n,r){var s={kind:n.kind,definitions:[y(n,r)]};n.hasOwnProperty("loc")&&(s.loc=n.loc);var o=b[r]||new Set,p=new Set,f=new Set;for(o.forEach(function(m){f.add(m)});f.size>0;){var j=f;f=new Set,j.forEach(function(m){if(!p.has(m)){p.add(m);var g=b[m]||new Set;g.forEach(function(t){f.add(t)})}})}return p.forEach(function(m){var g=y(n,m);g&&s.definitions.push(g)}),s}c.exports=a,c.exports.MyQuery=h(a,"MyQuery")},645:function(c,v,a){var i=a(798);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[c.i,i,""]]),i.locals&&(c.exports=i.locals);var _=a(52).default,u=_("491a3846",i,!0,{sourceMap:!1})},797:function(c,v,a){"use strict";var i=a(645),_=a.n(i)},798:function(c,v,a){var i=a(51),_=i(!1);_.push([c.i,"input,option,select{padding:5px}li{display:inline-block}",""]),c.exports=_}}]);