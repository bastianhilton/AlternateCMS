(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{546:function(p,m,s){"use strict";s.d(m,"a",function(){return u});function u(v,o){return o||(o=v.slice(0)),Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(o)}}))}},553:function(p,m){var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"general_settings"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"http_response"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"customer_support"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"access_restrictions"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"landing_page"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"restriction_mode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startup_page"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"store_contact"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"store_contact_two"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"store_email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tagline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:298}};s.loc.source={body:`query MyQuery {\r
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
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var u={};function v(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var r=i.name.value;return u[r]?!1:(u[r]=!0,!0)})}function o(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var r=n.type;r.kind==="NamedType"&&i.add(r.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(l){o(l,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(l){o(l,i)}),n.definitions&&n.definitions.forEach(function(l){o(l,i)})}var f={};(function(){s.definitions.forEach(function(i){if(i.name){var r=new Set;o(i,r),f[i.name.value]=r}})})();function S(n,i){for(var r=0;r<n.definitions.length;r++){var l=n.definitions[r];if(l.name&&l.name.value==i)return l}}function y(n,i){var r={kind:n.kind,definitions:[S(n,i)]};n.hasOwnProperty("loc")&&(r.loc=n.loc);var l=f[i]||new Set,g=new Set,d=new Set;for(l.forEach(function(c){d.add(c)});d.size>0;){var b=d;d=new Set,b.forEach(function(c){if(!g.has(c)){g.add(c);var e=f[c]||new Set;e.forEach(function(a){d.add(a)})}})}return g.forEach(function(c){var e=S(n,c);e&&r.definitions.push(e)}),r}p.exports=s,p.exports.MyQuery=y(s,"MyQuery")},753:function(p,m,s){"use strict";s.r(m);var u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"accordion accordion-flush",attrs:{id:"accordionFlushExample"}},[t("div",{staticClass:"accordion-item"},[e._m(0),e._v(" "),t("div",{staticClass:"accordion-collapse collapse",attrs:{id:"flush-collapseOne","aria-labelledby":"flush-headingOne","data-mdb-parent":"#accordionFlushExample"}},[t("div",{staticClass:"accordion-body"},[t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th"),e._v(" "),t("th",{staticClass:"generalSettingsAddOptions",attrs:{scope:"col"}},[t("li",[t("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addGeneralSettings}})],1)])])]),e._v(" "),t("tbody",[t("tr",[e._m(1),e._v(" "),t("td",[t("FormulateInput",{attrs:{type:"text",label:"Enter your Sentry API Key"},model:{value:e.siteTitle,callback:function(h){e.siteTitle=h},expression:"siteTitle"}})],1)])])])])])])])])])},v=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h2",{staticClass:"accordion-header",attrs:{id:"flush-headingOne"}},[t("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"}},[e._v(`
        Reporting Settings
      `)])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("td",[e._v("Check the Sentry "),t("a",{attrs:{href:"https://www.sentry.io"}},[e._v("Website for more information.")])])}],o=s(6),f=s(546),S=s(42),y=s(158),n=s(553),i,r=Object(y.a)(i||(i=Object(f.a)([`
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
}`]))),l={data:function(){return{siteUrl:[],siteTitle:" ",tagline:" ",siteAdminEmail:" ",value:" "}},methods:{addGeneralSettings:function(){var a=this;return Object(o.a)(regeneratorRuntime.mark(function t(){var h,_,E,F,w;return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return h=a.siteTitle,_=a.siteAdminEmail,E=a.tagline,F=a.siteUrl,w=a.value,k.next=7,a.$apollo.mutate({mutation:r,variables:{siteTitle:h,tagline:E,siteUrl:F,siteAdminEmail:_,value:w},update:function(O,T){var $=T.data.insertGeneralSettingss;try{var A=$.returning;console.log(A),O.writeQuery({query:n.generalSettings})}catch(j){console.error(j)}}}).then(function(){a.$router.push({path:"../system/general-settings"})}).catch(function(N){return console.log(N)});case 7:a.siteTitle=" ",a.tagline=" ",a.siteUrl=" ",a.siteAdminEmail=" ",a.value=" ";case 12:case"end":return k.stop()}},t)}))()}},head:{title:"General Settings"}},g=l,d=s(31),b=Object(d.a)(g,u,v,!1,null,null,null),c=m.default=b.exports}}]);
