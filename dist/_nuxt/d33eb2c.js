(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{439:function(t,e,r){var content=r(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("88cd1726",content,!0,{sourceMap:!1})},483:function(t,e,r){"use strict";r(439)},484:function(t,e,r){var c=r(65)(!1);c.push([t.i,"input,option,select{padding:5px}li{display:inline-block}",""]),t.exports=c},572:function(t,e,r){"use strict";r.r(e);var c=r(9),l=(r(47),r(15),r(36),r(275),r(31),r(46),{created:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetchArticles();case 1:case"end":return e.stop()}}),e)})))()},data:function(){return{articles:[],loaded:!1}},methods:{fetchArticles:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.$supabase.auth.user()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.$supabase.from("articles").select("*").filter("user_id","eq",r.id);case 5:c=e.sent,l=c.data,c.error,t.articles=l,t.loaded=!0;case 10:case"end":return e.stop()}}),e)})))()},deleteArticle:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$supabase.from("articles").delete().match({id:t});case 2:e.fetchArticles();case 3:case"end":return r.stop()}}),r)})))()}},head:{title:(void 0).article.name}}),o=(r(483),r(22)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{attrs:{action:"../content/blog",method:"POST"}},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}}),t._v(" "),r("th",{staticClass:"articleAddOptions",attrs:{scope:"col"}},[r("li",[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.deleteArticle(t.article.id)}}},[t._v("Delete Article")])]),t._v(" "),t._m(0)])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("Article Name")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.articleName,expression:"articleName"}],attrs:{type:"articleName",required:"",placeholder:t.article.name},domProps:{value:t.articleName},on:{input:function(e){e.target.composing||(t.articleName=e.target.value)}}})])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("Categories")]),t._v(" "),r("td",[r("select",{directives:[{name:"model",rawName:"v-model",value:t.articleCategories,expression:"articleCategories"}],attrs:{name:"Select"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.articleCategories=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"music"}},[t._v(t._s(t.article.categories))])])])])])])]),t._v(" "),r("br"),r("br"),t._v(" "),r("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[r("div",{staticClass:"accordion-item"},[t._m(1),t._v(" "),r("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-mdb-parent":"#accordionExample"}},[r("div",{staticClass:"accordion-body"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("Excerpt")]),t._v(" "),r("td",[r("div",{staticClass:"form-check form-switch"},[r("client-only",[r("vue-simplemde",{attrs:{id:"articleExcerpt",placeholder:t.article.excerpt},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("Description")]),t._v(" "),r("td",[r("div",{staticClass:"form-check form-switch"},[r("client-only",[r("vue-simplemde",{attrs:{id:"articleDescription",placeholder:t.article.description},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)])])])])])])])]),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"accordion-item"},[t._m(3),t._v(" "),r("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseFour","aria-labelledby":"headingFour","data-mdb-parent":"#accordionExample"}},[r("div",{staticClass:"accordion-body"},[r("table",{staticClass:"table"},[r("tbody",[t._m(4),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("Meta Title")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.articleMetaTitle,expression:"articleMetaTitle"}],attrs:{type:"text",placeholder:t.article.meta_title,required:""},domProps:{value:t.articleMetaTitle},on:{input:function(e){e.target.composing||(t.articleMetaTitle=e.target.value)}}})])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("Meta Keywords")]),t._v(" "),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.articleMetaKeywords,expression:"articleMetaKeywords"}],attrs:{type:"text",placeholder:t.article.meta_keywords},domProps:{value:t.articleMetaKeywords},on:{input:function(e){e.target.composing||(t.articleMetaKeywords=e.target.value)}}})])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("Meta Description")]),t._v(" "),r("td",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.articleMetaDescription,expression:"articleMetaDescription"}],attrs:{type:"text",placeholder:t.article.meta_description,rows:"10",cols:"50"},domProps:{value:t.articleMetaDescription},on:{input:function(e){e.target.composing||(t.articleMetaDescription=e.target.value)}}})])])])])])])]),t._v(" "),t._m(5)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Save")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[r("button",{staticClass:"accordion-button",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v("\n                    Content\n                ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion-item"},[r("h2",{staticClass:"accordion-header",attrs:{id:"headingThree"}},[r("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[t._v("\n                    Images and Videos\n                ")])]),t._v(" "),r("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-mdb-parent":"#accordionExample"}},[r("div",{staticClass:"accordion-body"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"accordion-header",attrs:{id:"headingFour"}},[r("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseFour","aria-expanded":"false","aria-controls":"collapseFour"}},[t._v("\n                    Search Engine Optimization\n                ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td"),t._v(" "),r("td",[t._v("Meta Title, Meta Keywords, and Meta Description are used to describe your articles to potential customers using search engine like Google, Bing, etc.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"accordion-item"},[r("h2",{staticClass:"accordion-header",attrs:{id:"headingFive"}},[r("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseFive","aria-expanded":"false","aria-controls":"collapseFive"}},[t._v("\n                    Related Products, Up-Sells, and Cross-Sells\n                ")])]),t._v(" "),r("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseFive","aria-labelledby":"headingFive","data-mdb-parent":"#accordionExample"}},[r("div",{staticClass:"accordion-body"})])])}],!1,null,null,null);e.default=component.exports}}]);