(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{484:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},504:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"segments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customers"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"apply_to"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:144}};n.loc.source={body:"query MyQuery {\r\n  segments {\r\n    id\r\n    name\r\n    status\r\n    website\r\n    customers\r\n    description\r\n    created_at\r\n    apply_to\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var o={};function c(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[c(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=o[t]||new Set,d=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var m=l;l=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){l.add(e)})))}))}return d.forEach((function(t){var r=c(e,t);r&&n.definitions.push(r)})),n}(n,"MyQuery")},544:function(e,t,n){var content=n(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("47396e02",content,!0,{sourceMap:!1})},619:function(e,t,n){"use strict";n(544)},620:function(e,t,n){var r=n(74)(!1);r.push([e.i,"input,option,select{padding:5px}li{display:inline-block}",""]),e.exports=r},758:function(e,t,n){"use strict";n.r(t);var r,o=n(5),c=n(484),d=(n(39),n(26),n(16),n(51),n(144)),l=n(504),m=Object(d.a)(r||(r=Object(c.a)(["\n    mutation ($name:String!,$description:String,$website:String,$status:String,$apply_to:String){\n    insert_segments(objects: {name: $name, description: $description, website: $website, status: $status, apply_to: $apply_to}) {\n        affected_rows\n        returning {\n            name\n            status\n            website\n            description\n            apply_to\n            }\n  }\n}"]))),f={data:function(){return{website:" ",name:" ",description:" ",status:" ",apply_to:" "}},methods:{addSegment:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,r=e.status,o=e.description,c=e.website,d=e.apply_to,t.next=7,e.$apollo.mutate({mutation:m,variables:{name:n,description:o,website:c,status:r,apply_to:d},update:function(e,t){var n=t.data.insertSegments;try{var r=n.returning;console.log(r),e.writeQuery({query:l.segments})}catch(e){console.error(e)}}}).then((function(){e.$router.push({path:"../customers/segments"})})).catch((function(e){return console.log(e)}));case 7:e.name=" ",e.description=" ",e.website=" ",e.status=" ",e.apply_to=" ";case 12:case"end":return t.stop()}}),t)})))()}},head:{title:"Add New Segment"}},v=(n(619),n(35)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("FormulateForm",{attrs:{method:"POST"},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th"),e._v(" "),n("th",{staticClass:"segmentAddOptions",attrs:{scope:"col"}},[n("li",[n("FormulateInput",{attrs:{type:"reset",label:"Reset"}})],1),e._v(" "),n("li",[n("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addSegment}})],1)])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Segment Name")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Description")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{type:"textarea",id:"description",name:"description",cols:"50",rows:"10",label:"Add a short Description"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Assigned to Website")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{name:"website",type:"url"},model:{value:e.website,callback:function(t){e.website=t},expression:"website"}})],1)])])])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);