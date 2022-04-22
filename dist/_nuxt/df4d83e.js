(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{484:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},505:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shipments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"carrier_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ship_date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"speed_grade"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tracking_url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"transit_time"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:158}};n.loc.source={body:"query MyQuery {\r\n  shipments {\r\n    id\r\n    carrier_name\r\n    image\r\n    product\r\n    ship_date\r\n    speed_grade\r\n    tracking_url\r\n    transit_time\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var o={};function c(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[c(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=o[t]||new Set,d=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var m=l;l=new Set,m.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){l.add(e)})))}))}return d.forEach((function(t){var r=c(e,t);r&&n.definitions.push(r)})),n}(n,"MyQuery")},545:function(e,t,n){var content=n(622);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("bcc0f996",content,!0,{sourceMap:!1})},621:function(e,t,n){"use strict";n(545)},622:function(e,t,n){var r=n(74)(!1);r.push([e.i,"input,option,select{padding:5px;width:50%}li{display:inline-block}",""]),e.exports=r},759:function(e,t,n){"use strict";n.r(t);var r,o=n(5),c=n(484),d=(n(39),n(144)),l=n(505),m=Object(d.a)(r||(r=Object(c.a)(["\n    mutation ($carrier_name:String!,$transit_time:String!,$image:String!,$tracking_url:String!,$speed_grade:String!,$product:String!){\n    insert_shipments(objects: {carrier_name: $carrier_name, transit_time: $transit_time, image: $image, tracking_url: $tracking_url, product: $product, speed_grade: $speed_grade}) {\n        affected_rows\n        returning {\n            carrier_name\n            transit_time\n            image\n            tracking_url\n            speed_grade\n            product\n    }\n  }\n}"]))),f={data:function(){return{carrier_name:" ",transit_time:" ",image:" ",tracking_url:" ",speed_grade:" ",product:" "}},head:{title:"Add New Shipment"},methods:{addShipment:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,image,o,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.carrier_name,r=e.transit_time,image=e.image,o=e.tracking_url,c=e.speed_grade,d=e.product,t.next=8,e.$apollo.mutate({mutation:m,variables:{carrier_name:n,transit_time:r,image:image,tracking_url:o,speed_grade:c,product:d},update:function(e,t){var n=t.data.insertShipments;try{var r=n.returning;console.log(r),e.writeQuery({query:l.shipments})}catch(e){console.error(e)}}}).then((function(){e.$router.push({path:"../sales/shipments"})})).catch((function(e){return console.log(e)}));case 8:e.carrier_name=" ",e.transit_time=" ",e.image=" ",e.tracking_url=" ",e.speed_grade=" ",e.product=" ";case 14:case"end":return t.stop()}}),t)})))()},onFileAdded:function(e){},onError:function(e){},onSuccess:function(e){},onComplete:function(e){}}},_=(n(621),n(35)),component=Object(_.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("FormulateForm",{attrs:{method:"POST"},on:{submit:function(e){e.preventDefault()}}},[n("div",{staticClass:"table table-responsive"},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th"),e._v(" "),n("th",{staticClass:"shipmentsAddOptions",attrs:{scope:"col"}},[n("li",[n("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addShipment}})],1)])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Carrier Name")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{id:"shipmentsName",type:"shipmentsName",required:""},model:{value:e.carrier_name,callback:function(t){e.carrier_name=t},expression:"carrier_name"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Transit Time")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{id:"shipmentsTime",type:"shipmentsTime",required:""},model:{value:e.transit_time,callback:function(t){e.transit_time=t},expression:"transit_time"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Speed grade")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{id:"shipmentsSpeed",type:"text"},model:{value:e.speed_grade,callback:function(t){e.speed_grade=t},expression:"speed_grade"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Tracking URL")]),e._v(" "),n("td",[n("FormulateInput",{attrs:{id:"shipmentsTracking",type:"text"},model:{value:e.tracking_url,callback:function(t){e.tracking_url=t},expression:"tracking_url"}})],1)]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Logo")]),e._v(" "),n("td"),n("td",[n("FormulateInput",{attrs:{type:"image",name:"headshot",label:"Select an image to upload",help:"Select a png, jpg or gif to upload.",validation:"mime:image/jpeg,image/png,image/gif"},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],1)])])])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);