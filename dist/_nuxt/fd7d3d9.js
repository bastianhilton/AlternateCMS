(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(t,e,r){"use strict";r.r(e);var n=r(22),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("footer",{staticClass:"bg-light text-center text-lg-start"},[r("div",{staticClass:"text-center p-3",staticStyle:{"background-color":"rgba(0, 0, 0, 0.2)"}},[t._v("\n          © 2022 Copyright:\n          "),r("a",{staticClass:"text-dark",attrs:{href:"https://alternatecms.com/"}},[t._v("Alternate CMS")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:r(134).default})},177:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(46),{methods:{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),l=r(22),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark topnav"},[r("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"d-flex align-items-center"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t.isAuthenticated?t._e():r("ul",{staticClass:"dropdown-menu dropdown-menu-end",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[t._m(6),t._v(" "),t._m(7),t._v(" "),r("li",{on:{click:t.logout}},[r("a",{staticClass:"dropdown-item",attrs:{"aria-current":"page",to:"#"}},[t._v("Logout")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("i",{staticClass:"fas fa-bars"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("a",{staticClass:"navbar-brand mt-2 mt-lg-0",attrs:{href:"/"}},[t._v("\n                  AlternateCMS\n              ")]),t._v(" "),r("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink",href:"#",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                          Sales\n                      ")]),t._v(" "),r("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/sales/orders"}},[t._v("Orders")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/sales/invoices"}},[t._v("Invoices")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/sales/shipments"}},[t._v("Shipments")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/sales/credit-memos"}},[t._v("Credit Memos")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/sales/returns"}},[t._v("Returns")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/sales/billing-agreements"}},[t._v("Billing Agreements")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/sales/transactions"}},[t._v("Transactions")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/sales/payment-virtual-terminal"}},[t._v("Payment Virtual Terminal")])])])]),t._v(" "),r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink",href:"#",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                          Customers\n                      ")]),t._v(" "),r("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/customers/all-customers"}},[t._v("All Customers")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/customers/online-customers"}},[t._v("Online Customers")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/customers/segments"}},[t._v("Segments")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/customers/customer-groups"}},[t._v("Customer Groups")])])])]),t._v(" "),r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink",href:"#",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                          Marketing\n                      ")]),t._v(" "),r("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/marketing/events"}},[t._v("Events")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/marketing/invitations"}},[t._v("Invitations")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/marketing/seo"}},[t._v("SEO & Search")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/marketing/customer-engagement"}},[t._v("Customer Engagement")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/marketing/communications"}},[t._v("Communications")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/marketing/reviews"}},[t._v("Reviews")])])])]),t._v(" "),r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink",href:"#",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                          Content\n                      ")]),t._v(" "),r("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/content/pages"}},[t._v("Pages")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/content/blog"}},[t._v("Blog")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/content/media-manager"}},[t._v("Media Manager")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/content/tags"}},[t._v("Tags")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/content/glossary"}},[t._v("Glossary")])])])]),t._v(" "),r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink",href:"#",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                          Reports\n                      ")]),t._v(" "),r("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/reports/marketing-reports"}},[t._v("Marketing Reports")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/reports/sales-reports"}},[t._v("Sales Reports")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/reports/customers-reports"}},[t._v("Customers Reports")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/reports/business-intelligence"}},[t._v("Business Intelligence")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/reports/reviews"}},[t._v("Reviews")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/reports/products-reports"}},[t._v("Products Reports")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/reports/statistics"}},[t._v("Statistics")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/reports/customer-engagement"}},[t._v("Customer Engagement")])])])]),t._v(" "),r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink",href:"#",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                          Shop\n                      ")]),t._v(" "),r("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/shop/products"}},[t._v("Products")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/shop/categories"}},[t._v("Categories")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/shop/collections"}},[t._v("Collections")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/shop/cities"}},[t._v("Cities")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/shop/countries"}},[t._v("Countries")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/shop/states"}},[t._v("States")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/shop/attributes"}},[t._v("Attributes")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/shop/tax-rule"}},[t._v("Tax Rule")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/shop/tax-rate"}},[t._v("Tax Rate")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"d-flex input-group w-auto"},[r("input",{staticClass:"form-control rounded",attrs:{type:"search",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"}}),t._v(" "),r("span",{staticClass:"input-group-text border-0",attrs:{id:"search-addon"}},[r("i",{staticClass:"fas fa-search"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"text-reset me-3 dropdown-toggle hidden-arrow",attrs:{id:"navbarDropdownMenuLink",href:"#",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"}},[r("i",{staticClass:"fas fa-bell"}),t._v(" "),r("span",{staticClass:"badge rounded-pill badge-notification bg-danger"},[t._v("1")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"dropdown-menu dropdown-menu-end",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/"}},[t._v("Some news")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/"}},[t._v("Another news")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/"}},[t._v("Something else here")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dropdown-toggle d-flex align-items-center hidden-arrow",attrs:{id:"navbarDropdownMenuLink",href:"#",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"}},[e("img",{staticClass:"rounded-circle",attrs:{src:"https://mdbootstrap.com/img/new/avatars/2.jpg",height:"25",alt:"",loading:"lazy"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/profile"}},[t._v("My Account")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"/admin/"}},[t._v("Customer View")])])}],!1,null,null,null);e.default=component.exports},178:function(t,e,r){"use strict";r.r(e);var n={},o=r(22),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"#"}},[t._v("Home")])]),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"#"}},[t._v("Library")])]),t._v(" "),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Data")])])]),t._v(" "),r("h2",{staticClass:"pageTitle"},[t._v("Dashboard")])])}],!1,null,null,null);e.default=component.exports},187:function(t,e,r){"use strict";var n=r(3),o=r(272);r(225);n.a.component("vue-simplemde",o.a)},271:function(t,e,r){"use strict";var n=r(177),o=r(178),l=r(134),d={components:{Header:n.default,Breadcrumbs:o.default,Footer:l.default}},c=r(22),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),t._v(" "),r("div",{staticClass:"dashboard"},[r("Breadcrumbs"),t._v(" "),r("Nuxt")],1),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:r(177).default,Breadcrumbs:r(178).default,Footer:r(134).default})},273:function(t,e,r){"use strict";var n=r(22),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},278:function(t,e,r){r(279),t.exports=r(280)},323:function(t,e,r){var content=r(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("6b0846b0",content,!0,{sourceMap:!1})},324:function(t,e,r){var n=r(65)(!1);n.push([t.i,"body{margin:0}.topnav li{display:grid}.pageTitle{position:relative;padding-top:15px;padding-bottom:15px}.navTotal{padding-left:20px}.filterPage,.navTotal{position:relative;top:3px}.filterPage{padding-right:20px}#filterPagination #actions{font-size:20px}#filterAction select,#filterPagination select{width:100px;height:30px}.dashboard{position:relative;min-height:95vh;top:30px;margin:10px 10px 15%}.productAddOptions li{display:inline-block;padding-right:10px;position:relative}.loginCollective{width:100%;margin:0}.loginPage{background-color:#346dd8;color:#fff}.loginImage,.loginPage{width:50%;height:100vh}.loginImage{background-size:cover;padding:0}.loginImage img{width:100%;height:100%}#loginForm{position:relative;top:20%;left:25%;padding:20px}#loginForm label{width:100%;text-align:justify}#loginForm input{display:grid;margin-bottom:10px;width:50%;padding:10px}",""]),t.exports=n},330:function(t,e){},331:function(t,e){function r(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=331},350:function(t,e,r){"use strict";r.r(e);var n=r(83);e.default=function(t){return{httpLinkOptions:{uri:"https://star-gobbler-68.hasura.app/v1/graphql",credentials:"same-origin",headers:{"x-hasura-admin-secret":"H6RyPGzrnqzzdfmAJk0ykWBOpe92o12MHN0bOLsMNuDP8qKuHrni5fV4dLv2WmPR","content-type":"application/json"}},cache:new n.a,wsEndpoint:"ws://star-gobbler-68.hasura.app/v1/graphql"}}},351:function(t,e,r){"use strict";r.r(e),e.default=function(t,e){console.log("Global error handler"),console.error(t)}},387:function(t,e){}},[[278,85,1,86]]]);