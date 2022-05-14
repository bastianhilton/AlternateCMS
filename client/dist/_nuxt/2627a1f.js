(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{484:function(t,e,n){"use strict";function r(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,"a",(function(){return r}))},497:function(t,e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"events"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"postalcode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"start"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tickets"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"end"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"city"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:192}};n.loc.source={body:"query MyQuery {\r\n  events {\r\n    id\r\n    image\r\n    name\r\n    postalcode\r\n    start\r\n    state\r\n    tickets\r\n    end\r\n    created_at\r\n    country\r\n    content\r\n    city\r\n    category\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(t,e){if("FragmentSpread"===t.kind)e.add(t.name.value);else if("VariableDefinition"===t.kind){var n=t.type;"NamedType"===n.kind&&e.add(n.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){r(t,e)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){r(t,e)})),t.definitions&&t.definitions.forEach((function(t){r(t,e)}))}var o={};function c(t,e){for(var i=0;i<t.definitions.length;i++){var element=t.definitions[i];if(element.name&&element.name.value==e)return element}}n.definitions.forEach((function(t){if(t.name){var e=new Set;r(t,e),o[t.name.value]=e}})),t.exports=n,t.exports.MyQuery=function(t,e){var n={kind:t.kind,definitions:[c(t,e)]};t.hasOwnProperty("loc")&&(n.loc=t.loc);var r=o[e]||new Set,l=new Set,d=new Set;for(r.forEach((function(t){d.add(t)}));d.size>0;){var m=d;d=new Set,m.forEach((function(t){l.has(t)||(l.add(t),(o[t]||new Set).forEach((function(t){d.add(t)})))}))}return l.forEach((function(e){var r=c(t,e);r&&n.definitions.push(r)})),n}(n,"MyQuery")},533:function(t,e,n){var content=n(598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("30bdd75f",content,!0,{sourceMap:!1})},597:function(t,e,n){"use strict";n(533)},598:function(t,e,n){var r=n(74)(!1);r.push([t.i,"input,option,select{padding:5px}",""]),t.exports=r},747:function(t,e,n){"use strict";n.r(e);var r,o=n(5),c=n(484),l=(n(39),n(26),n(144)),d=n(497),m=Object(l.a)(r||(r=Object(c.a)(["\n    mutation ($image: Upload!,$name: String!,$postalcode: String!,$start: String!,$end: String!,$tickets: String!,$content: String!,$country: String!,$city: String!,$state: String!,$category: String){\n    insert_events(objects: {image: $image,name: $name,postalcode: $postalcode,start: $start,end: $end,tickets: $tickets,country: $country,content: $content,category: $category,city: $city,state: $state}) {\n        affected_rows\n        returning {\n            image\n            name\n            postalcode\n            start\n            end\n            tickets\n            country\n            content\n            category\n            city\n            state\n    }\n  }\n}"]))),v={data:function(){return{category:[],attributes:[],image:" ",name:" ",postalcode:" ",start:" ",end:" ",tickets:" ",country:" ",content:" ",city:" ",state:" ",options:{url:"../../media/",imageWidth:150,maxFilesize:10,createImageThumbnails:!0,maxThumbnailFileSize:4,duplicateCheck:!0,includeStyling:!0,headers:{"My-Awesome-Header":"header value"}}}},head:{title:"Add New Event"},methods:{addEvent:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var image,n,r,o,c,l,v,content,y,f,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return image=t.image,n=t.name,r=t.postalcode,o=t.start,c=t.end,l=t.tickets,v=t.country,content=t.content,y=t.category,f=t.city,k=t.state,e.next=13,t.$apollo.mutate({mutation:m,variables:{image:image,name:n,postalcode:r,start:o,end:c,tickets:l,country:v,content:content,category:y,city:f,state:k},update:function(t,e){var n=e.data,r=n.insertCategories,o=n.insertCountries;try{var c=r.returning,l=o.returning;console.log(c,l),t.writeQuery({query:d.events})}catch(t){console.error(t)}}}).then((function(){t.$router.push({path:"../marketing/events"})})).catch((function(t){return console.log(t)}));case 13:t.image=" ",t.name=" ",t.postalcode=" ",t.start=" ",t.end=" ",t.tickets=" ",t.country=" ",t.content=" ",t.category=" ",t.city=" ",t.state=" ";case 24:case"end":return e.stop()}}),e)})))()}},apollo:{}},y=(n(597),n(35)),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("FormulateForm",{attrs:{method:"POST"},on:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th"),t._v(" "),n("th",{staticClass:"eventAddOptions",attrs:{scope:"col"}},[n("li",[n("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:t.addEvent}})],1)])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("Event Name")]),t._v(" "),n("td",[n("FormulateInput",{attrs:{name:"eventName",type:"text",label:"Name of the Event",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("Amount of Tickets Available")]),t._v(" "),n("td",[n("FormulateInput",{attrs:{name:"eventTickets",type:"text",label:"Enter amount of tickets for event",required:""},model:{value:t.tickets,callback:function(e){t.tickets=e},expression:"tickets"}})],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("Event City")]),t._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",required:""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("Event State")]),t._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text",placeholder:"$",required:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("Event Country")]),t._v(" "),n("td",[n("FormulateInput",{attrs:{type:"text"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("Event Postal Code")]),t._v(" "),n("td",[n("FormulateInput",{attrs:{name:"eventPostalCode",type:"text"},model:{value:t.postalcode,callback:function(e){t.postalcode=e},expression:"postalcode"}})],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("Event Start Date")]),t._v(" "),n("td",[n("FormulateInput",{attrs:{name:"eventStart",type:"text"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}})],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("Event End Date")]),t._v(" "),n("td",[n("FormulateInput",{attrs:{name:"eventEnd",type:"text"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}})],1)]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("Category")]),t._v(" "),n("td",[n("FormulateInput",{attrs:{name:"productCategory",type:"text"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1)])])])]),t._v(" "),n("br"),n("br"),t._v(" "),n("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[n("FormulateInput",{staticClass:"accordion-button",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v("\n                    Content\n                ")])],1),t._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[t._v("Description")]),t._v(" "),n("td",[n("div",{staticClass:"form-check form-switch"},[n("vue-simplemde",{attrs:{id:"longDescription"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])])])])])])])]),t._v(" "),n("div",{staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"headingThree"}},[n("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[t._v("\n                    Images and Videos\n                ")])],1),t._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-mdb-parent":"#accordionExample"}},[n("div",{staticClass:"accordion-body"},[n("td",[n("FormulateInput",{attrs:{type:"image",name:"headshot",label:"Select an image to upload",help:"Select a png, jpg or gif to upload.",validation:"mime:image/jpeg,image/png,image/gif"},model:{value:t.image,callback:function(e){t.image=e},expression:"image"}})],1)])])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);