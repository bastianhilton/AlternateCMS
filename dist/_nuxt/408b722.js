(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{484:function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"a",(function(){return r}))},502:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"returns"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"return_prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"validity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:105}};t.loc.source={body:"query MyQuery {\r\n  returns {\r\n    id\r\n    name\r\n    return_prefix\r\n    validity\r\n    created_at\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.MyQuery=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,c=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var f=l;l=new Set,f.forEach((function(e){c.has(e)||(c.add(e),(d[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"MyQuery")},570:function(e,n,t){var content=t(694);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(75).default)("059d359f",content,!0,{sourceMap:!1})},692:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MyQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"returns"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"return_prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"validity"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"created_at"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:140}};t.loc.source={body:"query MyQuery ($id: Int){\r\n  returns (where: {id: {_eq: $id}}){\r\n    id\r\n    name\r\n    return_prefix\r\n    validity\r\n    created_at\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.MyQuery=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,c=new Set,l=new Set;for(r.forEach((function(e){l.add(e)}));l.size>0;){var f=l;l=new Set,f.forEach((function(e){c.has(e)||(c.add(e),(d[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"MyQuery")},693:function(e,n,t){"use strict";t(570)},694:function(e,n,t){var r=t(74)(!1);r.push([e.i,"input,option,select{padding:5px;width:50%}li{display:inline-block}",""]),e.exports=r},835:function(e,n,t){"use strict";t.r(n);var r,d,o=t(5),c=t(484),l=(t(39),t(144)),f=t(692),m=t.n(f),v=t(502),k=t.n(v),h=Object(l.a)(r||(r=Object(c.a)(["\n  mutation delete_returns($id: Int!){\n  delete_returns(where: {id: {_eq: $id}}){\n    affected_rows\n  }\n}\n"]))),y=Object(l.a)(d||(d=Object(c.a)(["\n  mutation update_returns($id: Int!){\n  update_returns(where: {id: {_eq: $id}}){\n    affected_rows\n  }\n}\n"]))),_={head:{name:"Edit Return"},mounted:function(){this.forceRerender()},data:function(){return{componentKey:0}},methods:{deleteReturn:function(e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$apollo.mutate({mutation:h,variables:{id:e.id},refetchQueries:[{query:k.a}]}).then((function(){n.$router.push({path:"../admin/sales/returns"})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},updateReturn:function(e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$apollo.mutate({mutation:y,variables:{id:e.id},refetchQueries:[{query:k.a}]});case 2:case"end":return t.stop()}}),t)})))()},forceRerender:function(){this.componentKey+=1}},apollo:{returns:{query:m.a,prefetch:function(e){return{id:e.route.params.id}},variables:function(){return{id:this.$route.params.id}}}}},S=(t(693),t(35)),component=Object(S.a)(_,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",e._l(e.returns,(function(n){return t("FormulateForm",{key:n.id,attrs:{method:"POST"},on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"table table-responsive"},[t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th"),e._v(" "),t("th",{staticClass:"returnsAddOptions",attrs:{scope:"col"}},[t("li",[t("FormulateInput",{attrs:{type:"submit",label:"Save"},on:{click:e.addReturn}})],1)])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Returns Name")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{id:"returnsName",type:"returnsName",required:""}}),e._v(e._s(n.name)+"\n                        "),t("p",{attrs:{for:"name"}},[e._v("Name of the return")])],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Time limit of validity")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{id:"returnsName",type:"returnsName",required:""}}),e._v(e._s(n.name)+"\n                        "),t("p",{attrs:{for:"validity"}},[e._v("How many days after the delivery date does the customer have to return a product?")])],1)]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"right"}},[e._v("Returns prefix")]),e._v(" "),t("td",[t("FormulateInput",{attrs:{id:"returnsName",type:"returnsName",required:""}}),e._v(e._s(n.name)+"\n                        "),t("p",{attrs:{for:"returnsPrefix"}},[e._v("Prefix used for returns name (e.g. RE00001).")])],1)])])])])])})),1)}),[],!1,null,null,null);n.default=component.exports}}]);