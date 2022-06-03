(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{546:function(h,v,r){"use strict";r.d(v,"a",function(){return m});function m(g,c){return c||(c=g.slice(0)),Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(c)}}))}},553:function(h,v){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"general_settings"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"http_response"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_support"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"access_restrictions"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"landing_page"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"restriction_mode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startup_page"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"store_contact"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"store_contact_two"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"store_email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tagline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:298}};r.loc.source={body:`query MyQuery {\r
  general_settings {\r
    id\r
    http_response\r
    email\r
    customer_support\r
    created_at\r
    access_restrictions\r
    landing_page\r
    restriction_mode\r
    startup_page\r
    store_contact\r
    store_contact_two\r
    store_email\r
    tagline\r
    title\r
    url\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var m={};function g(i){return i.filter(function(l){if(l.kind!=="FragmentDefinition")return!0;var s=l.name.value;return m[s]?!1:(m[s]=!0,!0)})}function c(i,l){if(i.kind==="FragmentSpread")l.add(i.name.value);else if(i.kind==="VariableDefinition"){var s=i.type;s.kind==="NamedType"&&l.add(s.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(o){c(o,l)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(o){c(o,l)}),i.definitions&&i.definitions.forEach(function(o){c(o,l)})}var p={};(function(){r.definitions.forEach(function(l){if(l.name){var s=new Set;c(l,s),p[l.name.value]=s}})})();function b(i,l){for(var s=0;s<i.definitions.length;s++){var o=i.definitions[s];if(o.name&&o.name.value==l)return o}}function y(i,l){var s={kind:i.kind,definitions:[b(i,l)]};i.hasOwnProperty("loc")&&(s.loc=i.loc);var o=p[l]||new Set,f=new Set,u=new Set;for(o.forEach(function(d){u.add(d)});u.size>0;){var k=u;u=new Set,k.forEach(function(d){if(!f.has(d)){f.add(d);var t=p[d]||new Set;t.forEach(function(n){u.add(n)})}})}return f.forEach(function(d){var t=b(i,d);t&&s.definitions.push(t)}),s}h.exports=r,h.exports.MyQuery=y(r,"MyQuery")},750:function(h,v,r){"use strict";r.r(v);var m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"accordion accordion-flush",attrs:{id:"accordionFlushExample"}},[e("div",{staticClass:"accordion-item"},[t._m(0),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"flush-collapseOne","aria-labelledby":"flush-headingOne","data-mdb-parent":"#accordionFlushExample"}},[e("div",{staticClass:"accordion-body"},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th"),t._v(" "),e("th",{staticClass:"generalSettingsAddOptions",attrs:{scope:"col"}},[e("li",[e("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:t.addGeneralSettings}})],1)])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Account Type")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",required:""},model:{value:t.siteTitle,callback:function(a){t.siteTitle=a},expression:"siteTitle"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Account Number")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"number"},model:{value:t.tagline,callback:function(a){t.tagline=a},expression:"tagline"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Anonymize IP")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"number"},model:{value:t.siteUrl,callback:function(a){t.siteUrl=a},expression:"siteUrl"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Enable Content Experiments")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"checkbox"},model:{value:t.siteAdminEmail,callback:function(a){t.siteAdminEmail=a},expression:"siteAdminEmail"}})],1)])])])])])])]),t._v(" "),e("div",{staticClass:"accordion-item"},[t._m(1),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"flush-collapseTwo","aria-labelledby":"flush-headingTwo","data-mdb-parent":"#accordionFlushExample"}},[e("div",{staticClass:"accordion-body"},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th"),t._v(" "),e("th",{staticClass:"generalSettingsAddOptions",attrs:{scope:"col"}},[e("li",[e("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:t.addGeneralSettings}})],1)])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Conversion ID")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.siteTitle,callback:function(a){t.siteTitle=a},expression:"siteTitle"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Conversion Language")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.tagline,callback:function(a){t.tagline=a},expression:"tagline"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Conversion Format")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.siteUrl,callback:function(a){t.siteUrl=a},expression:"siteUrl"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Conversion Color")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"color"},model:{value:t.siteAdminEmail,callback:function(a){t.siteAdminEmail=a},expression:"siteAdminEmail"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Conversion Label")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.siteAdminEmail,callback:function(a){t.siteAdminEmail=a},expression:"siteAdminEmail"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Conversion Value Type")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.siteAdminEmail,callback:function(a){t.siteAdminEmail=a},expression:"siteAdminEmail"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Send Order Currency")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.siteAdminEmail,callback:function(a){t.siteAdminEmail=a},expression:"siteAdminEmail"}})],1)])])])])])])]),t._v(" "),e("div",{staticClass:"accordion-item"},[t._m(2),t._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"flush-collapseThree","aria-labelledby":"flush-headingThree","data-mdb-parent":"#accordionFlushExample"}},[e("div",{staticClass:"accordion-body"},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th"),t._v(" "),e("th",{staticClass:"generalSettingsAddOptions",attrs:{scope:"col"}},[e("li",[e("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:t.addGeneralSettings}})],1)])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Anonymize IP")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"number"},model:{value:t.siteTitle,callback:function(a){t.siteTitle=a},expression:"siteTitle"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Enable Content Experiments")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.tagline,callback:function(a){t.tagline=a},expression:"tagline"}})],1)]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"right"}},[t._v("Container ID")]),t._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text"},model:{value:t.siteUrl,callback:function(a){t.siteUrl=a},expression:"siteUrl"}})],1)])])])])])])])])])},g=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h2",{staticClass:"accordion-header",attrs:{id:"flush-headingOne"}},[e("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"}},[t._v(`
        Google Analytics
      `)])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h2",{staticClass:"accordion-header",attrs:{id:"flush-headingTwo"}},[e("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo"}},[t._v(`
        Google Adwords
      `)])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h2",{staticClass:"accordion-header",attrs:{id:"flush-headingThree"}},[e("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree"}},[t._v(`
        Google Tag Manager
      `)])])}],c=r(6),p=r(546),b=r(42),y=r(158),i=r(553),l,s=Object(y.a)(l||(l=Object(p.a)([`
    mutation ($siteTitle:String!,$tagline:String,$siteUrl:String,$siteAdminEmail:String,$value:String){
    insert_generalSettings(objects: {siteTitle: $siteTitle, tagline: $tagline, siteUrl: $siteUrl, siteAdminEmail: $siteAdminEmail, value: $value}) {
        affected_rows
        returning {
            siteTitle
            tagline
            siteUrl
            siteAdminEmail
            value
    }
  }
}`]))),o={data:function(){return{siteUrl:[],siteTitle:" ",tagline:" ",siteAdminEmail:" ",value:" "}},methods:{addGeneralSettings:function(){var n=this;return Object(c.a)(regeneratorRuntime.mark(function e(){var a,S,x,E,F;return regeneratorRuntime.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return a=n.siteTitle,S=n.siteAdminEmail,x=n.tagline,E=n.siteUrl,F=n.value,_.next=7,n.$apollo.mutate({mutation:s,variables:{siteTitle:a,tagline:x,siteUrl:E,siteAdminEmail:S,value:F},update:function(C,A){var I=A.data.insertGeneralSettingss;try{var w=I.returning;console.log(w),C.writeQuery({query:i.generalSettings})}catch(O){console.error(O)}}}).then(function(){n.$router.push({path:"../system/general-settings"})}).catch(function(T){return console.log(T)});case 7:n.siteTitle=" ",n.tagline=" ",n.siteUrl=" ",n.siteAdminEmail=" ",n.value=" ";case 12:case"end":return _.stop()}},e)}))()}},head:{title:"General Settings"}},f=o,u=r(31),k=Object(u.a)(f,m,g,!1,null,null,null),d=v.default=k.exports}}]);