(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{395:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},408:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"reviews"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:120}};n.loc.source={body:"query MyQuery {\r\n  reviews {\r\n    id\r\n    first_name\r\n    last_name\r\n    content\r\n    websites\r\n    created_at\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var o={};function c(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[c(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=o[t]||new Set,l=new Set,d=new Set;for(r.forEach((function(e){d.add(e)}));d.size>0;){var v=d;d=new Set,v.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return l.forEach((function(t){var r=c(e,t);r&&n.definitions.push(r)})),n}(n,"MyQuery")},432:function(e,t,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("2b386af1",content,!0,{sourceMap:!1})},466:function(e,t,n){"use strict";n(432)},467:function(e,t,n){var r=n(65)(!1);r.push([e.i,"input,option,select{padding:5px}",""]),e.exports=r},514:function(e,t,n){"use strict";n.r(t);var r,o=n(9),c=n(395),l=(n(46),n(111)),d=n(408),v=n.n(d),m=Object(l.a)(r||(r=Object(c.a)(["\n    mutation ($first_name:String!,$last_name:String!$websites:String!,$content:String){\n    insert_reviews(objects: {first_name: $first_name, last_name: $last_name, websites: $websites, content: $content}) {\n        affected_rows\n        returning {\n            first_name\n            last_name\n            websites\n            content\n    }\n  }\n}"]))),f={data:function(){return{first_name:" ",last_name:" ",websites:" ",content:" "}},head:{title:"Add New Review"},methods:{addReview:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.first_name,r=e.last_name,o=e.websites,content=e.content,t.next=6,e.$apollo.mutate({mutation:m,variables:{first_name:n,last_name:r,websites:o,content:content},update:function(e,t){var n=t.data.insertReviews;try{var r=n.returning;console.log(r),e.writeQuery({query:v.a})}catch(e){console.error(e)}}}).then((function(){e.$router.push({path:"../marketing/reviews"})})).catch((function(e){return console.log(e)}));case 6:e.first_name=" ",e.last_name=" ",e.websites=" ",e.content=" ";case 10:case"end":return t.stop()}}),t)})))()}}},_=(n(466),n(22)),component=Object(_.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{attrs:{method:"get"},on:{submit:function(e){e.preventDefault()}}},[n("nav",{staticClass:"navbar navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[e._m(0),e._v(" "),n("a",{staticClass:"navbar-brand"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.addReview}},[e._v("Save Review")])])])]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"row"},[e._m(1),e._v(" "),n("div",{staticClass:"col-9"},[n("div",{staticClass:"tab-content",attrs:{id:"v-tabs-tabContent"}},[n("div",{staticClass:"tab-pane fade show active",attrs:{id:"v-tabs-home",role:"tabpanel","aria-labelledby":"v-tabs-home-tab"}},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("First Name")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],attrs:{type:"text"},domProps:{value:e.first_name},on:{input:function(t){t.target.composing||(e.first_name=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Last Name")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],attrs:{type:"text"},domProps:{value:e.last_name},on:{input:function(t){t.target.composing||(e.last_name=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Website")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.websites,expression:"websites"}],attrs:{id:"websites",name:"websites"},domProps:{value:e.websites},on:{input:function(t){t.target.composing||(e.websites=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Review Content")]),e._v(" "),n("td",[n("vue-simplemde",{attrs:{id:"reviewDescription"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)])])])])])])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-brand"},[n("button",{staticClass:"btn btn-warning",attrs:{type:"reset"}},[e._v("Reset")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-3"},[n("div",{staticClass:"nav flex-column nav-tabs text-center",attrs:{id:"v-tabs-tab",role:"tablist","aria-orientation":"vertical"}},[n("a",{staticClass:"nav-link active",attrs:{id:"v-tabs-home-tab","data-mdb-toggle":"tab",href:"#v-tabs-home",role:"tab","aria-controls":"v-tabs-home","aria-selected":"true"}},[e._v("Create A New Review")])])])}],!1,null,null,null);t.default=component.exports}}]);