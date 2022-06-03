(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1144:function(l,m,t){"use strict";t.r(m);var s=function(){var a=this,_=a.$createElement,e=a._self._c||_;return e("div",{attrs:{id:"editor"}},[e("FormulateForm",{attrs:{method:"POST",enctype:"multipart/form-data"},on:{submit:function(u){u.preventDefault()}}},[e("nav",{staticClass:"navbar navbar-dark bg-dark"},[e("div",{staticClass:"container-fluid"},[e("a",{staticClass:"navbar-brand"},[e("button",{staticClass:"btn btn-warning",attrs:{type:"reset"}},[a._v("Reset")])]),a._v(" "),e("a",{staticClass:"navbar-brand"},[e("FormulateInput",{attrs:{type:"button",label:"Save Glossary"},on:{click:a.addGlossary}})],1)])]),a._v(" "),e("br"),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-3"},[e("div",{staticClass:"nav flex-column nav-tabs text-center",attrs:{id:"v-tabs-tab",role:"tablist","aria-orientation":"vertical"}},[e("a",{staticClass:"nav-link active",attrs:{id:"v-tabs-home-tab","data-mdb-toggle":"tab",href:"#v-tabs-home",role:"tab","aria-controls":"v-tabs-home","aria-selected":"true"}},[a._v("Create A New Glossary")])])]),a._v(" "),e("div",{staticClass:"col-9"},[e("div",{staticClass:"tab-scope",attrs:{id:"v-tabs-tabContent"}},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"v-tabs-home",role:"tabpanel","aria-labelledby":"v-tabs-home-tab"}},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[a._v("Glossary Name")]),a._v(" "),e("td",[e("FormulateInput",{attrs:{type:"text",required:""},model:{value:a.name,callback:function(u){a.name=u},expression:"name"}})],1)])])])]),a._v(" "),e("br"),e("br"),a._v(" "),e("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[e("FormulateInput",{staticClass:"accordion-button",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[a._v(`
                    Content
                `)])],1),a._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-mdb-parent":"#accordionExample"}},[e("div",{staticClass:"accordion-body"},[e("div",{staticClass:"table table-responsive"},[e("table",{staticClass:"table"},[e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"right"}},[a._v("Description")]),a._v(" "),e("td",[e("div",{staticClass:"form-check form-switch"},[e("vue-simplemde",{attrs:{id:"glossaryDescription"},model:{value:a.content,callback:function(u){a.content=u},expression:"content"}})],1)])])])])])])])]),a._v(" "),e("div",{staticClass:"accordion-item"},[e("h2",{staticClass:"accordion-header",attrs:{id:"headingThree"}},[e("FormulateInput",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[a._v(`
                    Images and Videos
                `)])],1),a._v(" "),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-mdb-parent":"#accordionExample"}},[e("div",{staticClass:"accordion-body"},[e("td",[e("FormulateInput",{attrs:{type:"image",name:"headshot",label:"Select an image to upload",help:"Select a png, jpg or gif to upload.",validation:"mime:image/jpeg,image/png,image/gif"},model:{value:a.image,callback:function(u){a.image=u},expression:"image"}})],1)])])])])])])])])])],1)},d=[],c=t(6),g=t(546),h=t(42),C=t(25),n=t(158),i=t(575),o,r=Object(n.a)(o||(o=Object(g.a)([`
    mutation ($name:String!,$product:String,$content:String,$image:String,$published:timestamp){
    insert_glossary(objects: {name: $name, content: $content, image: $image}) {
        affected_rows
        returning {
            name
            content
            image
    }
  }
}`]))),b={data:function(){return{name:" ",content:" ",image:" "}},methods:{addGlossary:function(){var _=this;return Object(c.a)(regeneratorRuntime.mark(function e(){var u,S,j;return regeneratorRuntime.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return u=_.name,S=_.content,j=_.image,y.next=5,_.$apollo.mutate({mutation:r,variables:{name:u,content:S,image:j},update:function(w,E){var D=E.data.insertGlossaries;try{var F=D.returning;console.log(F),w.writeQuery({query:i.glossaries})}catch(R){console.error(R)}}}).then(function(){_.$router.push({path:"../content/glossary"})}).catch(function(k){return console.log(k)});case 5:_.name=" ",_.content=" ",_.image=" ";case 8:case"end":return y.stop()}},e)}))()}},head:{title:"Add New Glossary"}},f=b,O=t(807),v=t(31),p=Object(v.a)(f,s,d,!1,null,null,null),x=m.default=p.exports},546:function(l,m,t){"use strict";t.d(m,"a",function(){return s});function s(d,c){return c||(c=d.slice(0)),Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(c)}}))}},575:function(l,m){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"glossary"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"published"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:96}};t.loc.source={body:`query MyQuery {\r
  glossary {\r
    id\r
    name\r
    image\r
    content\r
    published\r
  }\r
}\r
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var s={};function d(n){return n.filter(function(i){if(i.kind!=="FragmentDefinition")return!0;var o=i.name.value;return s[o]?!1:(s[o]=!0,!0)})}function c(n,i){if(n.kind==="FragmentSpread")i.add(n.name.value);else if(n.kind==="VariableDefinition"){var o=n.type;o.kind==="NamedType"&&i.add(o.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(r){c(r,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(r){c(r,i)}),n.definitions&&n.definitions.forEach(function(r){c(r,i)})}var g={};(function(){t.definitions.forEach(function(i){if(i.name){var o=new Set;c(i,o),g[i.name.value]=o}})})();function h(n,i){for(var o=0;o<n.definitions.length;o++){var r=n.definitions[o];if(r.name&&r.name.value==i)return r}}function C(n,i){var o={kind:n.kind,definitions:[h(n,i)]};n.hasOwnProperty("loc")&&(o.loc=n.loc);var r=g[i]||new Set,b=new Set,f=new Set;for(r.forEach(function(v){f.add(v)});f.size>0;){var O=f;f=new Set,O.forEach(function(v){if(!b.has(v)){b.add(v);var p=g[v]||new Set;p.forEach(function(x){f.add(x)})}})}return b.forEach(function(v){var p=h(n,v);p&&o.definitions.push(p)}),o}l.exports=t,l.exports.MyQuery=C(t,"MyQuery")},650:function(l,m,t){var s=t(808);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[l.i,s,""]]),s.locals&&(l.exports=s.locals);var d=t(52).default,c=d("169a6a0a",s,!0,{sourceMap:!1})},807:function(l,m,t){"use strict";var s=t(650),d=t.n(s)},808:function(l,m,t){var s=t(51),d=s(!1);d.push([l.i,"input,option,select{padding:5px}li{display:inline-block}",""]),l.exports=d}}]);