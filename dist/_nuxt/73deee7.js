(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{395:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},396:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"customers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address_two"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"confirmed_email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_group"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_since"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date_of_birth"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"first_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"middle_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name_prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"last_name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name_suffix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"product"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"short_description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tax_vat_number"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"websites"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"zipcode"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:424}};n.loc.source={body:"query MyQuery {\r\n  customers {\r\n    Address\r\n    address_two\r\n    confirmed_email\r\n    country\r\n    customer_group\r\n    customer_since\r\n    date_of_birth\r\n    description\r\n    email\r\n    first_name\r\n    gender\r\n    id\r\n    image\r\n    middle_name\r\n    name_prefix\r\n    last_name\r\n    name_suffix\r\n    phone\r\n    product\r\n    short_description\r\n    state\r\n    tax_vat_number\r\n    thumbnail\r\n    websites\r\n    zipcode\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var o={};function d(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.MyQuery=function(e,t){var n={kind:e.kind,definitions:[d(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=o[t]||new Set,m=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var c=l;l=new Set,c.forEach((function(e){m.has(e)||(m.add(e),(o[e]||new Set).forEach((function(e){l.add(e)})))}))}return m.forEach((function(t){var r=d(e,t);r&&n.definitions.push(r)})),n}(n,"MyQuery")},428:function(e,t,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("4444ea1f",content,!0,{sourceMap:!1})},458:function(e,t,n){"use strict";n(428)},459:function(e,t,n){var r=n(65)(!1);r.push([e.i,"input,option,select{padding:5px}",""]),e.exports=r},510:function(e,t,n){"use strict";n.r(t);var r,o=n(9),d=n(395),m=(n(46),n(32),n(52),n(111)),l=n(396),c=n.n(l),v=Object(m.a)(r||(r=Object(d.a)(["\n    mutation ($first_name:String!,$middle_name:String!,$last_name:String!,$gender:String!,$email:String!,$description:String!,$date_of_birth:String!,$websites:String!,$customer_group:String!,$phone:String!,$zipcode:String!,$name_prefix:String!,$name_suffix:String!,$product:String!,$state:String!,$country:String!,$tax_vat_number: String!,$Address:String!,$address_two:String!,$short_description:String!,$image: String){\n    insert_customers(objects: {first_name: $first_name, middle_name: $middle_name, last_name: $last_name, gender: $gender, email: $email, description: $description, product: $product, state: $state, date_of_birth: $date_of_birth, websites: $websites, customer_group: $customer_group, phone: $phone, zipcode: $zipcode, name_suffix: $name_suffix, name_prefix: $name_prefix, country: $country, Address: $Address, address_two: $address_two, tax_vat_number: $tax_vat_number, short_description: $short_description, image: $image}) {\n        affected_rows\n        returning {\n            first_name\n            middle_name\n            last_name\n            gender\n            email\n            description\n            product\n            state\n            date_of_birth\n            websites\n            customer_group\n            phone\n            zipcode\n            name_prefix\n            name_suffix\n            tax_vat_number\n            country\n            Address\n            address_two\n            short_description\n            image\n    }\n  }\n}"]))),_={data:function(){return{first_name:" ",middle_name:" ",last_name:" ",gender:" ",email:" ",description:" ",date_of_birth:" ",websites:" ",customer_group:" ",phone:" ",product:" ",zipcode:" ",name_prefix:" ",name_suffix:" ",tax_vat_number:" ",state:" ",country:" ",Address:" ",address_two:" ",short_description:" ",image:" ",dropzoneOptions:{url:"../../static/media/",thumbnailWidth:150,maxFileAddress:10,createImageThumbnails:!0,maxThumbnailFileSize:4,duplicateCheck:!0,includeStyling:!0,headers:{"My-Awesome-Header":"header value"}}}},head:{title:"Add New Customer"},methods:{addCustomer:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,d,m,l,_,f,h,x,y,k,w,S,N,$,F,C,z,A,image;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.first_name,r=e.middle_name,o=e.last_name,d=e.gender,m=e.email,l=e.description,_=e.product,f=e.state,h=e.date_of_birth,x=e.websites,y=e.customer_group,k=e.tax_vat_number,w=e.phone,S=e.zipcode,N=e.name_prefix,$=e.name_suffix,F=e.country,C=e.Address,z=e.address_two,A=e.short_description,image=e.image,t.next=23,e.$apollo.mutate({mutation:v,variables:{first_name:n,middle_name:r,last_name:o,gender:d,email:m,description:l,product:_,state:f,date_of_birth:h,tax_vat_number:k,websites:x,customer_group:y,phone:w,zipcode:S,name_prefix:N,name_suffix:$,country:F,Address:C,address_two:z,short_description:A,image:image},update:function(e,t){var n=t.data.insertCustomers;try{var r=n.returning;console.log(r),e.writeQuery({query:c.a})}catch(e){console.error(e)}}}).then((function(){e.$router.push({path:"../customers/all-customers"})})).catch((function(e){return console.log(e)}));case 23:e.first_name=" ",e.middle_name=" ",e.last_name=" ",e.gender=" ",e.email=" ",e.description=" ",e.product=" ",e.state=" ",e.date_of_birth=" ",e.websites=" ",e.customer_group=" ",e.tax_vat_number=" ",e.phone=" ",e.zipcode=" ",e.name_prefix=" ",e.name_suffix=" ",e.country=" ",e.Address=" ",e.address_two=" ",e.short_description=" ",e.image=" ";case 44:case"end":return t.stop()}}),t)})))()},onFileAdded:function(e){},onError:function(e){},onSuccess:function(e){},onComplete:function(e){}}},f=(n(458),n(22)),component=Object(f.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{attrs:{method:"get"},on:{submit:function(e){e.preventDefault()}}},[n("nav",{staticClass:"navbar navbar-dark bg-dark"},[n("div",{staticClass:"container-fluid"},[e._m(0),e._v(" "),n("a",{staticClass:"navbar-brand"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.addCustomer}},[e._v("Save Customer")])])])]),e._v(" "),n("br"),e._v(" "),n("div",{staticClass:"row"},[e._m(1),e._v(" "),n("div",{staticClass:"col-9"},[n("div",{staticClass:"tab-content",attrs:{id:"v-tabs-tabContent"}},[n("div",{staticClass:"tab-pane fade show active",attrs:{id:"v-tabs-home",role:"tabpanel","aria-labelledby":"v-tabs-home-tab"}},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table"},[n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Name Prefix")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name_prefix,expression:"name_prefix"}],attrs:{type:"text"},domProps:{value:e.name_prefix},on:{input:function(t){t.target.composing||(e.name_prefix=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("First Name")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"first_name"}],attrs:{type:"text",required:""},domProps:{value:e.first_name},on:{input:function(t){t.target.composing||(e.first_name=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Middle Name/Initial")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.middle_name,expression:"middle_name"}],attrs:{type:"text"},domProps:{value:e.middle_name},on:{input:function(t){t.target.composing||(e.middle_name=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Last Name")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"last_name"}],attrs:{type:"text",required:""},domProps:{value:e.last_name},on:{input:function(t){t.target.composing||(e.last_name=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Name Suffix")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name_suffix,expression:"name_suffix"}],attrs:{type:"text"},domProps:{value:e.name_suffix},on:{input:function(t){t.target.composing||(e.name_suffix=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Email")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Date of Birth")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.date_of_birth,expression:"date_of_birth"}],attrs:{type:"text"},domProps:{value:e.date_of_birth},on:{input:function(t){t.target.composing||(e.date_of_birth=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Phone Number")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Tax/VAT Number")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.tax_vat_number,expression:"tax_vat_number"}],attrs:{type:"text"},domProps:{value:e.tax_vat_number},on:{input:function(t){t.target.composing||(e.tax_vat_number=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Gender")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{id:"gender",name:"gender"},domProps:{value:e.gender},on:{input:function(t){t.target.composing||(e.gender=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("About Customer")]),e._v(" "),n("td",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.short_description,expression:"short_description"}],attrs:{id:"aboutCustomer",name:"aboutCustomer"},domProps:{value:e.short_description},on:{input:function(t){t.target.composing||(e.short_description=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Address Line 1")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.Address,expression:"Address"}],attrs:{type:"text"},domProps:{value:e.Address},on:{input:function(t){t.target.composing||(e.Address=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Address Line 2")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.address_two,expression:"address_two"}],attrs:{type:"text"},domProps:{value:e.address_two},on:{input:function(t){t.target.composing||(e.address_two=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("State")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],attrs:{id:"state",name:"state"},domProps:{value:e.state},on:{input:function(t){t.target.composing||(e.state=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Postal Code")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.zipcode,expression:"zipcode"}],attrs:{type:"text"},domProps:{value:e.zipcode},on:{input:function(t){t.target.composing||(e.zipcode=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Country")]),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],attrs:{id:"country",name:"country"},domProps:{value:e.country},on:{input:function(t){t.target.composing||(e.country=t.target.value)}}})])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"right"}},[e._v("Image")]),e._v(" "),n("td",[n("dropzone",{ref:"myDropzone",attrs:{id:"dropzone",options:e.dropzoneOptions},on:{"vdropzone-file-added":e.onFileAdded,"vdropzone-error":e.onError,"vdropzone-success":e.onSuccess,"vdropzone-complete":e.onComplete},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],1)])])])])])])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-brand"},[n("button",{staticClass:"btn btn-warning",attrs:{type:"reset"}},[e._v("Reset")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-3"},[n("div",{staticClass:"nav flex-column nav-tabs text-center",attrs:{id:"v-tabs-tab",role:"tablist","aria-orientation":"vertical"}},[n("a",{staticClass:"nav-link active",attrs:{id:"v-tabs-home-tab","data-mdb-toggle":"tab",href:"#v-tabs-home",role:"tab","aria-controls":"v-tabs-home","aria-selected":"true"}},[e._v("Account Information")])])])}],!1,null,null,null);t.default=component.exports}}]);