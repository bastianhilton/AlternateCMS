import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b6fdfab = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _036a21c2 = () => interopDefault(import('..\\client\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _7bf474c9 = () => interopDefault(import('..\\client\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _e321d8cc = () => interopDefault(import('..\\client\\pages\\Auth\\Login.vue' /* webpackChunkName: "pages/Auth/Login" */))
const _2329b1fc = () => interopDefault(import('..\\client\\pages\\Auth\\Register.vue' /* webpackChunkName: "pages/Auth/Register" */))
const _2c35912e = () => interopDefault(import('..\\client\\pages\\User\\my-account.vue' /* webpackChunkName: "pages/User/my-account" */))
const _7d05d776 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-agreement.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-agreement" */))
const _2ed7f41e = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-article.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-article" */))
const _2d8e5852 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-attribute.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-attribute" */))
const _5d74fb93 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-category.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-category" */))
const _820c4000 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-city.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-city" */))
const _70195c1a = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-collection.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-collection" */))
const _5fcc4091 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-country.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-country" */))
const _5bbfddfb = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-coupon.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-coupon" */))
const _79b74e73 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-customer.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-customer" */))
const _26c7e69c = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-customergroup.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-customergroup" */))
const _66b13655 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-event.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-event" */))
const _34b55af4 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-gift-certificates.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-gift-certificates" */))
const _3254f8b3 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-glossary.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-glossary" */))
const _f724eeb0 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-invoice.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-invoice" */))
const _c451bae4 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-newsletter.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-newsletter" */))
const _b1f9e4e2 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-newslettersubscriber copy.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-newslettersubscriber copy" */))
const _46ee7724 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-page.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-page" */))
const _5ee6616a = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-product.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-product" */))
const _aaefb7ee = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-report.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-report" */))
const _f1c4a3f6 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-return.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-return" */))
const _7335d7a6 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-review.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-review" */))
const _03d0498b = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-role.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-role" */))
const _7f0271ae = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-segment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-segment" */))
const _21c8022f = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-shipment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-shipment" */))
const _51d06cce = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-staffmembers.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-staffmembers" */))
const _2f049668 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-state.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-state" */))
const _0f993015 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-tag.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-tag" */))
const _58836586 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-taxrate.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-taxrate" */))
const _6cd941a2 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-taxrule.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-taxrule" */))
const _15840f04 = () => interopDefault(import('..\\client\\pages\\Admin\\Add-New\\add-new-warehouse.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-warehouse" */))
const _478cf93a = () => interopDefault(import('..\\client\\pages\\Admin\\Content\\blog.vue' /* webpackChunkName: "pages/Admin/Content/blog" */))
const _11c0c35f = () => interopDefault(import('..\\client\\pages\\Admin\\Content\\glossary.vue' /* webpackChunkName: "pages/Admin/Content/glossary" */))
const _07f1e95a = () => interopDefault(import('..\\client\\pages\\Admin\\Content\\media-manager.vue' /* webpackChunkName: "pages/Admin/Content/media-manager" */))
const _adcfb95a = () => interopDefault(import('..\\client\\pages\\Admin\\Content\\pages.vue' /* webpackChunkName: "pages/Admin/Content/pages" */))
const _51a7174c = () => interopDefault(import('..\\client\\pages\\Admin\\Content\\tags.vue' /* webpackChunkName: "pages/Admin/Content/tags" */))
const _042a7848 = () => interopDefault(import('..\\client\\pages\\Admin\\Customers\\all-customers.vue' /* webpackChunkName: "pages/Admin/Customers/all-customers" */))
const _de21f0d4 = () => interopDefault(import('..\\client\\pages\\Admin\\Customers\\customer-groups.vue' /* webpackChunkName: "pages/Admin/Customers/customer-groups" */))
const _694181f8 = () => interopDefault(import('..\\client\\pages\\Admin\\Customers\\online-customers.vue' /* webpackChunkName: "pages/Admin/Customers/online-customers" */))
const _5b782a86 = () => interopDefault(import('..\\client\\pages\\Admin\\Customers\\segments.vue' /* webpackChunkName: "pages/Admin/Customers/segments" */))
const _212fab8b = () => interopDefault(import('..\\client\\pages\\Admin\\Marketing\\communications.vue' /* webpackChunkName: "pages/Admin/Marketing/communications" */))
const _54179947 = () => interopDefault(import('..\\client\\pages\\Admin\\Marketing\\events.vue' /* webpackChunkName: "pages/Admin/Marketing/events" */))
const _2921453c = () => interopDefault(import('..\\client\\pages\\Admin\\Marketing\\invitations.vue' /* webpackChunkName: "pages/Admin/Marketing/invitations" */))
const _da541c32 = () => interopDefault(import('..\\client\\pages\\Admin\\Marketing\\newsletter.vue' /* webpackChunkName: "pages/Admin/Marketing/newsletter" */))
const _47bf29dd = () => interopDefault(import('..\\client\\pages\\Admin\\Marketing\\reviews.vue' /* webpackChunkName: "pages/Admin/Marketing/reviews" */))
const _6291e61f = () => interopDefault(import('..\\client\\pages\\Admin\\Marketing\\seo.vue' /* webpackChunkName: "pages/Admin/Marketing/seo" */))
const _14b97435 = () => interopDefault(import('..\\client\\pages\\Admin\\Reports\\business-intelligence.vue' /* webpackChunkName: "pages/Admin/Reports/business-intelligence" */))
const _1726cd57 = () => interopDefault(import('..\\client\\pages\\Admin\\Reports\\customer-engagement.vue' /* webpackChunkName: "pages/Admin/Reports/customer-engagement" */))
const _00d45fd0 = () => interopDefault(import('..\\client\\pages\\Admin\\Reports\\customers-reports.vue' /* webpackChunkName: "pages/Admin/Reports/customers-reports" */))
const _658a7c21 = () => interopDefault(import('..\\client\\pages\\Admin\\Reports\\marketing-reports.vue' /* webpackChunkName: "pages/Admin/Reports/marketing-reports" */))
const _3dc08b5d = () => interopDefault(import('..\\client\\pages\\Admin\\Reports\\products-reports.vue' /* webpackChunkName: "pages/Admin/Reports/products-reports" */))
const _59cf3238 = () => interopDefault(import('..\\client\\pages\\Admin\\Reports\\reviews.vue' /* webpackChunkName: "pages/Admin/Reports/reviews" */))
const _05f9b287 = () => interopDefault(import('..\\client\\pages\\Admin\\Reports\\sales-reports.vue' /* webpackChunkName: "pages/Admin/Reports/sales-reports" */))
const _0641aa2c = () => interopDefault(import('..\\client\\pages\\Admin\\Reports\\statistics.vue' /* webpackChunkName: "pages/Admin/Reports/statistics" */))
const _1c600fbd = () => interopDefault(import('..\\client\\pages\\Admin\\Sales\\agreements.vue' /* webpackChunkName: "pages/Admin/Sales/agreements" */))
const _2d9f7d60 = () => interopDefault(import('..\\client\\pages\\Admin\\Sales\\certificates.vue' /* webpackChunkName: "pages/Admin/Sales/certificates" */))
const _052225b9 = () => interopDefault(import('..\\client\\pages\\Admin\\Sales\\credit-memos.vue' /* webpackChunkName: "pages/Admin/Sales/credit-memos" */))
const _6b25ab7a = () => interopDefault(import('..\\client\\pages\\Admin\\Sales\\invoices.vue' /* webpackChunkName: "pages/Admin/Sales/invoices" */))
const _6ef6e2f9 = () => interopDefault(import('..\\client\\pages\\Admin\\Sales\\orders.vue' /* webpackChunkName: "pages/Admin/Sales/orders" */))
const _64318cf9 = () => interopDefault(import('..\\client\\pages\\Admin\\Sales\\payment-virtual-terminal.vue' /* webpackChunkName: "pages/Admin/Sales/payment-virtual-terminal" */))
const _f7540c42 = () => interopDefault(import('..\\client\\pages\\Admin\\Sales\\returns.vue' /* webpackChunkName: "pages/Admin/Sales/returns" */))
const _f905b296 = () => interopDefault(import('..\\client\\pages\\Admin\\Sales\\shipments.vue' /* webpackChunkName: "pages/Admin/Sales/shipments" */))
const _b32d372e = () => interopDefault(import('..\\client\\pages\\Admin\\Sales\\transactions.vue' /* webpackChunkName: "pages/Admin/Sales/transactions" */))
const _292fb775 = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\attributes.vue' /* webpackChunkName: "pages/Admin/Shop/attributes" */))
const _6a192c8c = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\categories.vue' /* webpackChunkName: "pages/Admin/Shop/categories" */))
const _6c141932 = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\cities.vue' /* webpackChunkName: "pages/Admin/Shop/cities" */))
const _46ce0767 = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\collections.vue' /* webpackChunkName: "pages/Admin/Shop/collections" */))
const _4908fb86 = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\countries.vue' /* webpackChunkName: "pages/Admin/Shop/countries" */))
const _b3e10042 = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\coupons.vue' /* webpackChunkName: "pages/Admin/Shop/coupons" */))
const _fe6c33a4 = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\inventory.vue' /* webpackChunkName: "pages/Admin/Shop/inventory" */))
const _78521b0c = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\multi-vendor.vue' /* webpackChunkName: "pages/Admin/Shop/multi-vendor" */))
const _7f2dcafc = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\products.vue' /* webpackChunkName: "pages/Admin/Shop/products" */))
const _04a7fcc0 = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\states.vue' /* webpackChunkName: "pages/Admin/Shop/states" */))
const _15ababe0 = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\tax-rate.vue' /* webpackChunkName: "pages/Admin/Shop/tax-rate" */))
const _2a0187fc = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\tax-rule.vue' /* webpackChunkName: "pages/Admin/Shop/tax-rule" */))
const _c461b0a4 = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\warehouses.vue' /* webpackChunkName: "pages/Admin/Shop/warehouses" */))
const _4ad60eff = () => interopDefault(import('..\\client\\pages\\Admin\\System\\general-settings.vue' /* webpackChunkName: "pages/Admin/System/general-settings" */))
const _4f9ed4d8 = () => interopDefault(import('..\\client\\pages\\Admin\\System\\help.vue' /* webpackChunkName: "pages/Admin/System/help" */))
const _89238694 = () => interopDefault(import('..\\client\\pages\\Admin\\System\\integrations.vue' /* webpackChunkName: "pages/Admin/System/integrations" */))
const _42f4bd26 = () => interopDefault(import('..\\client\\pages\\Admin\\System\\role-manager.vue' /* webpackChunkName: "pages/Admin/System/role-manager" */))
const _fab8ad8c = () => interopDefault(import('..\\client\\pages\\Admin\\System\\settings.vue' /* webpackChunkName: "pages/Admin/System/settings" */))
const _4cb64913 = () => interopDefault(import('..\\client\\pages\\Admin\\Customers\\customer\\newcustomer.vue' /* webpackChunkName: "pages/Admin/Customers/customer/newcustomer" */))
const _4fac380a = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\providers\\id.vue' /* webpackChunkName: "pages/Admin/Edit/providers/id" */))
const _29b48a8c = () => interopDefault(import('..\\client\\pages\\Admin\\Marketing\\Email\\email-designer.vue' /* webpackChunkName: "pages/Admin/Marketing/Email/email-designer" */))
const _6c9249bf = () => interopDefault(import('..\\client\\pages\\Admin\\Shop\\Product\\Edit\\_id.vue' /* webpackChunkName: "pages/Admin/Shop/Product/Edit/_id" */))
const _549a4222 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\agreement\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/agreement/_id" */))
const _59366194 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\article\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/article/_id" */))
const _9efd2460 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\attribute\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/attribute/_id" */))
const _ef9ef78c = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\category\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/category/_id" */))
const _7713156d = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\city\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/city/_id" */))
const _4d90151a = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\collection\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/collection/_id" */))
const _29483896 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\country\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/country/_id" */))
const _f5dbb0dc = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\coupon\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/coupon/_id" */))
const _28b917ab = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\customergroup\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/customergroup/_id" */))
const _1c176092 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\event\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/event/_id" */))
const _daf11b84 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\gift-certificate\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/gift-certificate/_id" */))
const _513c89cc = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\glossary\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/glossary/_id" */))
const _75193242 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\invoice\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/invoice/_id" */))
const _b3e52542 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\newsletter\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/newsletter/_id" */))
const _00ab6c92 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\newslettersubscriber\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/newslettersubscriber/_id" */))
const _9e59566e = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\page\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/page/_id" */))
const _d0649146 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\product\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/product/_id" */))
const _832d0b78 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\report\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/report/_id" */))
const _26326470 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\return\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/return/_id" */))
const _749100a0 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\review\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/review/_id" */))
const _2a759cce = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\segment\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/segment/_id" */))
const _71f581c4 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\shipment\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/shipment/_id" */))
const _b10b570a = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\state\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/state/_id" */))
const _727b1bdc = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\tag\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/tag/_id" */))
const _1b7ae4c1 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\taxrate\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/taxrate/_id" */))
const _0e363a25 = () => interopDefault(import('..\\client\\pages\\Admin\\Edit\\taxrule\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/taxrule/_id" */))
const _1bdccaec = () => interopDefault(import('..\\client\\pages\\Admin\\Marketing\\Email\\_id.vue' /* webpackChunkName: "pages/Admin/Marketing/Email/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/es",
    component: _1b6fdfab,
    name: "index___es"
  }, {
    path: "/fr",
    component: _1b6fdfab,
    name: "index___fr"
  }, {
    path: "/search",
    component: _036a21c2,
    name: "search___en"
  }, {
    path: "/test",
    component: _7bf474c9,
    name: "test___en"
  }, {
    path: "/Auth/Login",
    component: _e321d8cc,
    name: "Auth-Login___en"
  }, {
    path: "/Auth/Register",
    component: _2329b1fc,
    name: "Auth-Register___en"
  }, {
    path: "/es/search",
    component: _036a21c2,
    name: "search___es"
  }, {
    path: "/es/test",
    component: _7bf474c9,
    name: "test___es"
  }, {
    path: "/fr/search",
    component: _036a21c2,
    name: "search___fr"
  }, {
    path: "/fr/test",
    component: _7bf474c9,
    name: "test___fr"
  }, {
    path: "/User/my-account",
    component: _2c35912e,
    name: "User-my-account___en"
  }, {
    path: "/Admin/Add-New/add-new-agreement",
    component: _7d05d776,
    name: "Admin-Add-New-add-new-agreement___en"
  }, {
    path: "/Admin/Add-New/add-new-article",
    component: _2ed7f41e,
    name: "Admin-Add-New-add-new-article___en"
  }, {
    path: "/Admin/Add-New/add-new-attribute",
    component: _2d8e5852,
    name: "Admin-Add-New-add-new-attribute___en"
  }, {
    path: "/Admin/Add-New/add-new-category",
    component: _5d74fb93,
    name: "Admin-Add-New-add-new-category___en"
  }, {
    path: "/Admin/Add-New/add-new-city",
    component: _820c4000,
    name: "Admin-Add-New-add-new-city___en"
  }, {
    path: "/Admin/Add-New/add-new-collection",
    component: _70195c1a,
    name: "Admin-Add-New-add-new-collection___en"
  }, {
    path: "/Admin/Add-New/add-new-country",
    component: _5fcc4091,
    name: "Admin-Add-New-add-new-country___en"
  }, {
    path: "/Admin/Add-New/add-new-coupon",
    component: _5bbfddfb,
    name: "Admin-Add-New-add-new-coupon___en"
  }, {
    path: "/Admin/Add-New/add-new-customer",
    component: _79b74e73,
    name: "Admin-Add-New-add-new-customer___en"
  }, {
    path: "/Admin/Add-New/add-new-customergroup",
    component: _26c7e69c,
    name: "Admin-Add-New-add-new-customergroup___en"
  }, {
    path: "/Admin/Add-New/add-new-event",
    component: _66b13655,
    name: "Admin-Add-New-add-new-event___en"
  }, {
    path: "/Admin/Add-New/add-new-gift-certificates",
    component: _34b55af4,
    name: "Admin-Add-New-add-new-gift-certificates___en"
  }, {
    path: "/Admin/Add-New/add-new-glossary",
    component: _3254f8b3,
    name: "Admin-Add-New-add-new-glossary___en"
  }, {
    path: "/Admin/Add-New/add-new-invoice",
    component: _f724eeb0,
    name: "Admin-Add-New-add-new-invoice___en"
  }, {
    path: "/Admin/Add-New/add-new-newsletter",
    component: _c451bae4,
    name: "Admin-Add-New-add-new-newsletter___en"
  }, {
    path: "/Admin/Add-New/add-new-newslettersubscriber%20copy",
    component: _b1f9e4e2,
    name: "Admin-Add-New-add-new-newslettersubscriber copy___en"
  }, {
    path: "/Admin/Add-New/add-new-page",
    component: _46ee7724,
    name: "Admin-Add-New-add-new-page___en"
  }, {
    path: "/Admin/Add-New/add-new-product",
    component: _5ee6616a,
    name: "Admin-Add-New-add-new-product___en"
  }, {
    path: "/Admin/Add-New/add-new-report",
    component: _aaefb7ee,
    name: "Admin-Add-New-add-new-report___en"
  }, {
    path: "/Admin/Add-New/add-new-return",
    component: _f1c4a3f6,
    name: "Admin-Add-New-add-new-return___en"
  }, {
    path: "/Admin/Add-New/add-new-review",
    component: _7335d7a6,
    name: "Admin-Add-New-add-new-review___en"
  }, {
    path: "/Admin/Add-New/add-new-role",
    component: _03d0498b,
    name: "Admin-Add-New-add-new-role___en"
  }, {
    path: "/Admin/Add-New/add-new-segment",
    component: _7f0271ae,
    name: "Admin-Add-New-add-new-segment___en"
  }, {
    path: "/Admin/Add-New/add-new-shipment",
    component: _21c8022f,
    name: "Admin-Add-New-add-new-shipment___en"
  }, {
    path: "/Admin/Add-New/add-new-staffmembers",
    component: _51d06cce,
    name: "Admin-Add-New-add-new-staffmembers___en"
  }, {
    path: "/Admin/Add-New/add-new-state",
    component: _2f049668,
    name: "Admin-Add-New-add-new-state___en"
  }, {
    path: "/Admin/Add-New/add-new-tag",
    component: _0f993015,
    name: "Admin-Add-New-add-new-tag___en"
  }, {
    path: "/Admin/Add-New/add-new-taxrate",
    component: _58836586,
    name: "Admin-Add-New-add-new-taxrate___en"
  }, {
    path: "/Admin/Add-New/add-new-taxrule",
    component: _6cd941a2,
    name: "Admin-Add-New-add-new-taxrule___en"
  }, {
    path: "/Admin/Add-New/add-new-warehouse",
    component: _15840f04,
    name: "Admin-Add-New-add-new-warehouse___en"
  }, {
    path: "/Admin/Content/blog",
    component: _478cf93a,
    name: "Admin-Content-blog___en"
  }, {
    path: "/Admin/Content/glossary",
    component: _11c0c35f,
    name: "Admin-Content-glossary___en"
  }, {
    path: "/Admin/Content/media-manager",
    component: _07f1e95a,
    name: "Admin-Content-media-manager___en"
  }, {
    path: "/Admin/Content/pages",
    component: _adcfb95a,
    name: "Admin-Content-pages___en"
  }, {
    path: "/Admin/Content/tags",
    component: _51a7174c,
    name: "Admin-Content-tags___en"
  }, {
    path: "/Admin/Customers/all-customers",
    component: _042a7848,
    name: "Admin-Customers-all-customers___en"
  }, {
    path: "/Admin/Customers/customer-groups",
    component: _de21f0d4,
    name: "Admin-Customers-customer-groups___en"
  }, {
    path: "/Admin/Customers/online-customers",
    component: _694181f8,
    name: "Admin-Customers-online-customers___en"
  }, {
    path: "/Admin/Customers/segments",
    component: _5b782a86,
    name: "Admin-Customers-segments___en"
  }, {
    path: "/Admin/Marketing/communications",
    component: _212fab8b,
    name: "Admin-Marketing-communications___en"
  }, {
    path: "/Admin/Marketing/events",
    component: _54179947,
    name: "Admin-Marketing-events___en"
  }, {
    path: "/Admin/Marketing/invitations",
    component: _2921453c,
    name: "Admin-Marketing-invitations___en"
  }, {
    path: "/Admin/Marketing/newsletter",
    component: _da541c32,
    name: "Admin-Marketing-newsletter___en"
  }, {
    path: "/Admin/Marketing/reviews",
    component: _47bf29dd,
    name: "Admin-Marketing-reviews___en"
  }, {
    path: "/Admin/Marketing/seo",
    component: _6291e61f,
    name: "Admin-Marketing-seo___en"
  }, {
    path: "/Admin/Reports/business-intelligence",
    component: _14b97435,
    name: "Admin-Reports-business-intelligence___en"
  }, {
    path: "/Admin/Reports/customer-engagement",
    component: _1726cd57,
    name: "Admin-Reports-customer-engagement___en"
  }, {
    path: "/Admin/Reports/customers-reports",
    component: _00d45fd0,
    name: "Admin-Reports-customers-reports___en"
  }, {
    path: "/Admin/Reports/marketing-reports",
    component: _658a7c21,
    name: "Admin-Reports-marketing-reports___en"
  }, {
    path: "/Admin/Reports/products-reports",
    component: _3dc08b5d,
    name: "Admin-Reports-products-reports___en"
  }, {
    path: "/Admin/Reports/reviews",
    component: _59cf3238,
    name: "Admin-Reports-reviews___en"
  }, {
    path: "/Admin/Reports/sales-reports",
    component: _05f9b287,
    name: "Admin-Reports-sales-reports___en"
  }, {
    path: "/Admin/Reports/statistics",
    component: _0641aa2c,
    name: "Admin-Reports-statistics___en"
  }, {
    path: "/Admin/Sales/agreements",
    component: _1c600fbd,
    name: "Admin-Sales-agreements___en"
  }, {
    path: "/Admin/Sales/certificates",
    component: _2d9f7d60,
    name: "Admin-Sales-certificates___en"
  }, {
    path: "/Admin/Sales/credit-memos",
    component: _052225b9,
    name: "Admin-Sales-credit-memos___en"
  }, {
    path: "/Admin/Sales/invoices",
    component: _6b25ab7a,
    name: "Admin-Sales-invoices___en"
  }, {
    path: "/Admin/Sales/orders",
    component: _6ef6e2f9,
    name: "Admin-Sales-orders___en"
  }, {
    path: "/Admin/Sales/payment-virtual-terminal",
    component: _64318cf9,
    name: "Admin-Sales-payment-virtual-terminal___en"
  }, {
    path: "/Admin/Sales/returns",
    component: _f7540c42,
    name: "Admin-Sales-returns___en"
  }, {
    path: "/Admin/Sales/shipments",
    component: _f905b296,
    name: "Admin-Sales-shipments___en"
  }, {
    path: "/Admin/Sales/transactions",
    component: _b32d372e,
    name: "Admin-Sales-transactions___en"
  }, {
    path: "/Admin/Shop/attributes",
    component: _292fb775,
    name: "Admin-Shop-attributes___en"
  }, {
    path: "/Admin/Shop/categories",
    component: _6a192c8c,
    name: "Admin-Shop-categories___en"
  }, {
    path: "/Admin/Shop/cities",
    component: _6c141932,
    name: "Admin-Shop-cities___en"
  }, {
    path: "/Admin/Shop/collections",
    component: _46ce0767,
    name: "Admin-Shop-collections___en"
  }, {
    path: "/Admin/Shop/countries",
    component: _4908fb86,
    name: "Admin-Shop-countries___en"
  }, {
    path: "/Admin/Shop/coupons",
    component: _b3e10042,
    name: "Admin-Shop-coupons___en"
  }, {
    path: "/Admin/Shop/inventory",
    component: _fe6c33a4,
    name: "Admin-Shop-inventory___en"
  }, {
    path: "/Admin/Shop/multi-vendor",
    component: _78521b0c,
    name: "Admin-Shop-multi-vendor___en"
  }, {
    path: "/Admin/Shop/products",
    component: _7f2dcafc,
    name: "Admin-Shop-products___en"
  }, {
    path: "/Admin/Shop/states",
    component: _04a7fcc0,
    name: "Admin-Shop-states___en"
  }, {
    path: "/Admin/Shop/tax-rate",
    component: _15ababe0,
    name: "Admin-Shop-tax-rate___en"
  }, {
    path: "/Admin/Shop/tax-rule",
    component: _2a0187fc,
    name: "Admin-Shop-tax-rule___en"
  }, {
    path: "/Admin/Shop/warehouses",
    component: _c461b0a4,
    name: "Admin-Shop-warehouses___en"
  }, {
    path: "/Admin/System/general-settings",
    component: _4ad60eff,
    name: "Admin-System-general-settings___en"
  }, {
    path: "/Admin/System/help",
    component: _4f9ed4d8,
    name: "Admin-System-help___en"
  }, {
    path: "/Admin/System/integrations",
    component: _89238694,
    name: "Admin-System-integrations___en"
  }, {
    path: "/Admin/System/role-manager",
    component: _42f4bd26,
    name: "Admin-System-role-manager___en"
  }, {
    path: "/Admin/System/settings",
    component: _fab8ad8c,
    name: "Admin-System-settings___en"
  }, {
    path: "/es/Auth/Login",
    component: _e321d8cc,
    name: "Auth-Login___es"
  }, {
    path: "/es/Auth/Register",
    component: _2329b1fc,
    name: "Auth-Register___es"
  }, {
    path: "/es/User/my-account",
    component: _2c35912e,
    name: "User-my-account___es"
  }, {
    path: "/fr/Auth/Login",
    component: _e321d8cc,
    name: "Auth-Login___fr"
  }, {
    path: "/fr/Auth/Register",
    component: _2329b1fc,
    name: "Auth-Register___fr"
  }, {
    path: "/fr/User/my-account",
    component: _2c35912e,
    name: "User-my-account___fr"
  }, {
    path: "/Admin/Customers/customer/newcustomer",
    component: _4cb64913,
    name: "Admin-Customers-customer-newcustomer___en"
  }, {
    path: "/Admin/Edit/providers/id",
    component: _4fac380a,
    name: "Admin-Edit-providers-id___en"
  }, {
    path: "/Admin/Marketing/Email/email-designer",
    component: _29b48a8c,
    name: "Admin-Marketing-Email-email-designer___en"
  }, {
    path: "/es/Admin/Add-New/add-new-agreement",
    component: _7d05d776,
    name: "Admin-Add-New-add-new-agreement___es"
  }, {
    path: "/es/Admin/Add-New/add-new-article",
    component: _2ed7f41e,
    name: "Admin-Add-New-add-new-article___es"
  }, {
    path: "/es/Admin/Add-New/add-new-attribute",
    component: _2d8e5852,
    name: "Admin-Add-New-add-new-attribute___es"
  }, {
    path: "/es/Admin/Add-New/add-new-category",
    component: _5d74fb93,
    name: "Admin-Add-New-add-new-category___es"
  }, {
    path: "/es/Admin/Add-New/add-new-city",
    component: _820c4000,
    name: "Admin-Add-New-add-new-city___es"
  }, {
    path: "/es/Admin/Add-New/add-new-collection",
    component: _70195c1a,
    name: "Admin-Add-New-add-new-collection___es"
  }, {
    path: "/es/Admin/Add-New/add-new-country",
    component: _5fcc4091,
    name: "Admin-Add-New-add-new-country___es"
  }, {
    path: "/es/Admin/Add-New/add-new-coupon",
    component: _5bbfddfb,
    name: "Admin-Add-New-add-new-coupon___es"
  }, {
    path: "/es/Admin/Add-New/add-new-customer",
    component: _79b74e73,
    name: "Admin-Add-New-add-new-customer___es"
  }, {
    path: "/es/Admin/Add-New/add-new-customergroup",
    component: _26c7e69c,
    name: "Admin-Add-New-add-new-customergroup___es"
  }, {
    path: "/es/Admin/Add-New/add-new-event",
    component: _66b13655,
    name: "Admin-Add-New-add-new-event___es"
  }, {
    path: "/es/Admin/Add-New/add-new-gift-certificates",
    component: _34b55af4,
    name: "Admin-Add-New-add-new-gift-certificates___es"
  }, {
    path: "/es/Admin/Add-New/add-new-glossary",
    component: _3254f8b3,
    name: "Admin-Add-New-add-new-glossary___es"
  }, {
    path: "/es/Admin/Add-New/add-new-invoice",
    component: _f724eeb0,
    name: "Admin-Add-New-add-new-invoice___es"
  }, {
    path: "/es/Admin/Add-New/add-new-newsletter",
    component: _c451bae4,
    name: "Admin-Add-New-add-new-newsletter___es"
  }, {
    path: "/es/Admin/Add-New/add-new-newslettersubscriber%20copy",
    component: _b1f9e4e2,
    name: "Admin-Add-New-add-new-newslettersubscriber copy___es"
  }, {
    path: "/es/Admin/Add-New/add-new-page",
    component: _46ee7724,
    name: "Admin-Add-New-add-new-page___es"
  }, {
    path: "/es/Admin/Add-New/add-new-product",
    component: _5ee6616a,
    name: "Admin-Add-New-add-new-product___es"
  }, {
    path: "/es/Admin/Add-New/add-new-report",
    component: _aaefb7ee,
    name: "Admin-Add-New-add-new-report___es"
  }, {
    path: "/es/Admin/Add-New/add-new-return",
    component: _f1c4a3f6,
    name: "Admin-Add-New-add-new-return___es"
  }, {
    path: "/es/Admin/Add-New/add-new-review",
    component: _7335d7a6,
    name: "Admin-Add-New-add-new-review___es"
  }, {
    path: "/es/Admin/Add-New/add-new-role",
    component: _03d0498b,
    name: "Admin-Add-New-add-new-role___es"
  }, {
    path: "/es/Admin/Add-New/add-new-segment",
    component: _7f0271ae,
    name: "Admin-Add-New-add-new-segment___es"
  }, {
    path: "/es/Admin/Add-New/add-new-shipment",
    component: _21c8022f,
    name: "Admin-Add-New-add-new-shipment___es"
  }, {
    path: "/es/Admin/Add-New/add-new-staffmembers",
    component: _51d06cce,
    name: "Admin-Add-New-add-new-staffmembers___es"
  }, {
    path: "/es/Admin/Add-New/add-new-state",
    component: _2f049668,
    name: "Admin-Add-New-add-new-state___es"
  }, {
    path: "/es/Admin/Add-New/add-new-tag",
    component: _0f993015,
    name: "Admin-Add-New-add-new-tag___es"
  }, {
    path: "/es/Admin/Add-New/add-new-taxrate",
    component: _58836586,
    name: "Admin-Add-New-add-new-taxrate___es"
  }, {
    path: "/es/Admin/Add-New/add-new-taxrule",
    component: _6cd941a2,
    name: "Admin-Add-New-add-new-taxrule___es"
  }, {
    path: "/es/Admin/Add-New/add-new-warehouse",
    component: _15840f04,
    name: "Admin-Add-New-add-new-warehouse___es"
  }, {
    path: "/es/Admin/Content/blog",
    component: _478cf93a,
    name: "Admin-Content-blog___es"
  }, {
    path: "/es/Admin/Content/glossary",
    component: _11c0c35f,
    name: "Admin-Content-glossary___es"
  }, {
    path: "/es/Admin/Content/media-manager",
    component: _07f1e95a,
    name: "Admin-Content-media-manager___es"
  }, {
    path: "/es/Admin/Content/pages",
    component: _adcfb95a,
    name: "Admin-Content-pages___es"
  }, {
    path: "/es/Admin/Content/tags",
    component: _51a7174c,
    name: "Admin-Content-tags___es"
  }, {
    path: "/es/Admin/Customers/all-customers",
    component: _042a7848,
    name: "Admin-Customers-all-customers___es"
  }, {
    path: "/es/Admin/Customers/customer-groups",
    component: _de21f0d4,
    name: "Admin-Customers-customer-groups___es"
  }, {
    path: "/es/Admin/Customers/online-customers",
    component: _694181f8,
    name: "Admin-Customers-online-customers___es"
  }, {
    path: "/es/Admin/Customers/segments",
    component: _5b782a86,
    name: "Admin-Customers-segments___es"
  }, {
    path: "/es/Admin/Marketing/communications",
    component: _212fab8b,
    name: "Admin-Marketing-communications___es"
  }, {
    path: "/es/Admin/Marketing/events",
    component: _54179947,
    name: "Admin-Marketing-events___es"
  }, {
    path: "/es/Admin/Marketing/invitations",
    component: _2921453c,
    name: "Admin-Marketing-invitations___es"
  }, {
    path: "/es/Admin/Marketing/newsletter",
    component: _da541c32,
    name: "Admin-Marketing-newsletter___es"
  }, {
    path: "/es/Admin/Marketing/reviews",
    component: _47bf29dd,
    name: "Admin-Marketing-reviews___es"
  }, {
    path: "/es/Admin/Marketing/seo",
    component: _6291e61f,
    name: "Admin-Marketing-seo___es"
  }, {
    path: "/es/Admin/Reports/business-intelligence",
    component: _14b97435,
    name: "Admin-Reports-business-intelligence___es"
  }, {
    path: "/es/Admin/Reports/customer-engagement",
    component: _1726cd57,
    name: "Admin-Reports-customer-engagement___es"
  }, {
    path: "/es/Admin/Reports/customers-reports",
    component: _00d45fd0,
    name: "Admin-Reports-customers-reports___es"
  }, {
    path: "/es/Admin/Reports/marketing-reports",
    component: _658a7c21,
    name: "Admin-Reports-marketing-reports___es"
  }, {
    path: "/es/Admin/Reports/products-reports",
    component: _3dc08b5d,
    name: "Admin-Reports-products-reports___es"
  }, {
    path: "/es/Admin/Reports/reviews",
    component: _59cf3238,
    name: "Admin-Reports-reviews___es"
  }, {
    path: "/es/Admin/Reports/sales-reports",
    component: _05f9b287,
    name: "Admin-Reports-sales-reports___es"
  }, {
    path: "/es/Admin/Reports/statistics",
    component: _0641aa2c,
    name: "Admin-Reports-statistics___es"
  }, {
    path: "/es/Admin/Sales/agreements",
    component: _1c600fbd,
    name: "Admin-Sales-agreements___es"
  }, {
    path: "/es/Admin/Sales/certificates",
    component: _2d9f7d60,
    name: "Admin-Sales-certificates___es"
  }, {
    path: "/es/Admin/Sales/credit-memos",
    component: _052225b9,
    name: "Admin-Sales-credit-memos___es"
  }, {
    path: "/es/Admin/Sales/invoices",
    component: _6b25ab7a,
    name: "Admin-Sales-invoices___es"
  }, {
    path: "/es/Admin/Sales/orders",
    component: _6ef6e2f9,
    name: "Admin-Sales-orders___es"
  }, {
    path: "/es/Admin/Sales/payment-virtual-terminal",
    component: _64318cf9,
    name: "Admin-Sales-payment-virtual-terminal___es"
  }, {
    path: "/es/Admin/Sales/returns",
    component: _f7540c42,
    name: "Admin-Sales-returns___es"
  }, {
    path: "/es/Admin/Sales/shipments",
    component: _f905b296,
    name: "Admin-Sales-shipments___es"
  }, {
    path: "/es/Admin/Sales/transactions",
    component: _b32d372e,
    name: "Admin-Sales-transactions___es"
  }, {
    path: "/es/Admin/Shop/attributes",
    component: _292fb775,
    name: "Admin-Shop-attributes___es"
  }, {
    path: "/es/Admin/Shop/categories",
    component: _6a192c8c,
    name: "Admin-Shop-categories___es"
  }, {
    path: "/es/Admin/Shop/cities",
    component: _6c141932,
    name: "Admin-Shop-cities___es"
  }, {
    path: "/es/Admin/Shop/collections",
    component: _46ce0767,
    name: "Admin-Shop-collections___es"
  }, {
    path: "/es/Admin/Shop/countries",
    component: _4908fb86,
    name: "Admin-Shop-countries___es"
  }, {
    path: "/es/Admin/Shop/coupons",
    component: _b3e10042,
    name: "Admin-Shop-coupons___es"
  }, {
    path: "/es/Admin/Shop/inventory",
    component: _fe6c33a4,
    name: "Admin-Shop-inventory___es"
  }, {
    path: "/es/Admin/Shop/multi-vendor",
    component: _78521b0c,
    name: "Admin-Shop-multi-vendor___es"
  }, {
    path: "/es/Admin/Shop/products",
    component: _7f2dcafc,
    name: "Admin-Shop-products___es"
  }, {
    path: "/es/Admin/Shop/states",
    component: _04a7fcc0,
    name: "Admin-Shop-states___es"
  }, {
    path: "/es/Admin/Shop/tax-rate",
    component: _15ababe0,
    name: "Admin-Shop-tax-rate___es"
  }, {
    path: "/es/Admin/Shop/tax-rule",
    component: _2a0187fc,
    name: "Admin-Shop-tax-rule___es"
  }, {
    path: "/es/Admin/Shop/warehouses",
    component: _c461b0a4,
    name: "Admin-Shop-warehouses___es"
  }, {
    path: "/es/Admin/System/general-settings",
    component: _4ad60eff,
    name: "Admin-System-general-settings___es"
  }, {
    path: "/es/Admin/System/help",
    component: _4f9ed4d8,
    name: "Admin-System-help___es"
  }, {
    path: "/es/Admin/System/integrations",
    component: _89238694,
    name: "Admin-System-integrations___es"
  }, {
    path: "/es/Admin/System/role-manager",
    component: _42f4bd26,
    name: "Admin-System-role-manager___es"
  }, {
    path: "/es/Admin/System/settings",
    component: _fab8ad8c,
    name: "Admin-System-settings___es"
  }, {
    path: "/fr/Admin/Add-New/add-new-agreement",
    component: _7d05d776,
    name: "Admin-Add-New-add-new-agreement___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-article",
    component: _2ed7f41e,
    name: "Admin-Add-New-add-new-article___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-attribute",
    component: _2d8e5852,
    name: "Admin-Add-New-add-new-attribute___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-category",
    component: _5d74fb93,
    name: "Admin-Add-New-add-new-category___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-city",
    component: _820c4000,
    name: "Admin-Add-New-add-new-city___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-collection",
    component: _70195c1a,
    name: "Admin-Add-New-add-new-collection___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-country",
    component: _5fcc4091,
    name: "Admin-Add-New-add-new-country___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-coupon",
    component: _5bbfddfb,
    name: "Admin-Add-New-add-new-coupon___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-customer",
    component: _79b74e73,
    name: "Admin-Add-New-add-new-customer___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-customergroup",
    component: _26c7e69c,
    name: "Admin-Add-New-add-new-customergroup___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-event",
    component: _66b13655,
    name: "Admin-Add-New-add-new-event___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-gift-certificates",
    component: _34b55af4,
    name: "Admin-Add-New-add-new-gift-certificates___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-glossary",
    component: _3254f8b3,
    name: "Admin-Add-New-add-new-glossary___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-invoice",
    component: _f724eeb0,
    name: "Admin-Add-New-add-new-invoice___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-newsletter",
    component: _c451bae4,
    name: "Admin-Add-New-add-new-newsletter___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-newslettersubscriber%20copy",
    component: _b1f9e4e2,
    name: "Admin-Add-New-add-new-newslettersubscriber copy___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-page",
    component: _46ee7724,
    name: "Admin-Add-New-add-new-page___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-product",
    component: _5ee6616a,
    name: "Admin-Add-New-add-new-product___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-report",
    component: _aaefb7ee,
    name: "Admin-Add-New-add-new-report___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-return",
    component: _f1c4a3f6,
    name: "Admin-Add-New-add-new-return___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-review",
    component: _7335d7a6,
    name: "Admin-Add-New-add-new-review___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-role",
    component: _03d0498b,
    name: "Admin-Add-New-add-new-role___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-segment",
    component: _7f0271ae,
    name: "Admin-Add-New-add-new-segment___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-shipment",
    component: _21c8022f,
    name: "Admin-Add-New-add-new-shipment___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-staffmembers",
    component: _51d06cce,
    name: "Admin-Add-New-add-new-staffmembers___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-state",
    component: _2f049668,
    name: "Admin-Add-New-add-new-state___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-tag",
    component: _0f993015,
    name: "Admin-Add-New-add-new-tag___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-taxrate",
    component: _58836586,
    name: "Admin-Add-New-add-new-taxrate___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-taxrule",
    component: _6cd941a2,
    name: "Admin-Add-New-add-new-taxrule___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-warehouse",
    component: _15840f04,
    name: "Admin-Add-New-add-new-warehouse___fr"
  }, {
    path: "/fr/Admin/Content/blog",
    component: _478cf93a,
    name: "Admin-Content-blog___fr"
  }, {
    path: "/fr/Admin/Content/glossary",
    component: _11c0c35f,
    name: "Admin-Content-glossary___fr"
  }, {
    path: "/fr/Admin/Content/media-manager",
    component: _07f1e95a,
    name: "Admin-Content-media-manager___fr"
  }, {
    path: "/fr/Admin/Content/pages",
    component: _adcfb95a,
    name: "Admin-Content-pages___fr"
  }, {
    path: "/fr/Admin/Content/tags",
    component: _51a7174c,
    name: "Admin-Content-tags___fr"
  }, {
    path: "/fr/Admin/Customers/all-customers",
    component: _042a7848,
    name: "Admin-Customers-all-customers___fr"
  }, {
    path: "/fr/Admin/Customers/customer-groups",
    component: _de21f0d4,
    name: "Admin-Customers-customer-groups___fr"
  }, {
    path: "/fr/Admin/Customers/online-customers",
    component: _694181f8,
    name: "Admin-Customers-online-customers___fr"
  }, {
    path: "/fr/Admin/Customers/segments",
    component: _5b782a86,
    name: "Admin-Customers-segments___fr"
  }, {
    path: "/fr/Admin/Marketing/communications",
    component: _212fab8b,
    name: "Admin-Marketing-communications___fr"
  }, {
    path: "/fr/Admin/Marketing/events",
    component: _54179947,
    name: "Admin-Marketing-events___fr"
  }, {
    path: "/fr/Admin/Marketing/invitations",
    component: _2921453c,
    name: "Admin-Marketing-invitations___fr"
  }, {
    path: "/fr/Admin/Marketing/newsletter",
    component: _da541c32,
    name: "Admin-Marketing-newsletter___fr"
  }, {
    path: "/fr/Admin/Marketing/reviews",
    component: _47bf29dd,
    name: "Admin-Marketing-reviews___fr"
  }, {
    path: "/fr/Admin/Marketing/seo",
    component: _6291e61f,
    name: "Admin-Marketing-seo___fr"
  }, {
    path: "/fr/Admin/Reports/business-intelligence",
    component: _14b97435,
    name: "Admin-Reports-business-intelligence___fr"
  }, {
    path: "/fr/Admin/Reports/customer-engagement",
    component: _1726cd57,
    name: "Admin-Reports-customer-engagement___fr"
  }, {
    path: "/fr/Admin/Reports/customers-reports",
    component: _00d45fd0,
    name: "Admin-Reports-customers-reports___fr"
  }, {
    path: "/fr/Admin/Reports/marketing-reports",
    component: _658a7c21,
    name: "Admin-Reports-marketing-reports___fr"
  }, {
    path: "/fr/Admin/Reports/products-reports",
    component: _3dc08b5d,
    name: "Admin-Reports-products-reports___fr"
  }, {
    path: "/fr/Admin/Reports/reviews",
    component: _59cf3238,
    name: "Admin-Reports-reviews___fr"
  }, {
    path: "/fr/Admin/Reports/sales-reports",
    component: _05f9b287,
    name: "Admin-Reports-sales-reports___fr"
  }, {
    path: "/fr/Admin/Reports/statistics",
    component: _0641aa2c,
    name: "Admin-Reports-statistics___fr"
  }, {
    path: "/fr/Admin/Sales/agreements",
    component: _1c600fbd,
    name: "Admin-Sales-agreements___fr"
  }, {
    path: "/fr/Admin/Sales/certificates",
    component: _2d9f7d60,
    name: "Admin-Sales-certificates___fr"
  }, {
    path: "/fr/Admin/Sales/credit-memos",
    component: _052225b9,
    name: "Admin-Sales-credit-memos___fr"
  }, {
    path: "/fr/Admin/Sales/invoices",
    component: _6b25ab7a,
    name: "Admin-Sales-invoices___fr"
  }, {
    path: "/fr/Admin/Sales/orders",
    component: _6ef6e2f9,
    name: "Admin-Sales-orders___fr"
  }, {
    path: "/fr/Admin/Sales/payment-virtual-terminal",
    component: _64318cf9,
    name: "Admin-Sales-payment-virtual-terminal___fr"
  }, {
    path: "/fr/Admin/Sales/returns",
    component: _f7540c42,
    name: "Admin-Sales-returns___fr"
  }, {
    path: "/fr/Admin/Sales/shipments",
    component: _f905b296,
    name: "Admin-Sales-shipments___fr"
  }, {
    path: "/fr/Admin/Sales/transactions",
    component: _b32d372e,
    name: "Admin-Sales-transactions___fr"
  }, {
    path: "/fr/Admin/Shop/attributes",
    component: _292fb775,
    name: "Admin-Shop-attributes___fr"
  }, {
    path: "/fr/Admin/Shop/categories",
    component: _6a192c8c,
    name: "Admin-Shop-categories___fr"
  }, {
    path: "/fr/Admin/Shop/cities",
    component: _6c141932,
    name: "Admin-Shop-cities___fr"
  }, {
    path: "/fr/Admin/Shop/collections",
    component: _46ce0767,
    name: "Admin-Shop-collections___fr"
  }, {
    path: "/fr/Admin/Shop/countries",
    component: _4908fb86,
    name: "Admin-Shop-countries___fr"
  }, {
    path: "/fr/Admin/Shop/coupons",
    component: _b3e10042,
    name: "Admin-Shop-coupons___fr"
  }, {
    path: "/fr/Admin/Shop/inventory",
    component: _fe6c33a4,
    name: "Admin-Shop-inventory___fr"
  }, {
    path: "/fr/Admin/Shop/multi-vendor",
    component: _78521b0c,
    name: "Admin-Shop-multi-vendor___fr"
  }, {
    path: "/fr/Admin/Shop/products",
    component: _7f2dcafc,
    name: "Admin-Shop-products___fr"
  }, {
    path: "/fr/Admin/Shop/states",
    component: _04a7fcc0,
    name: "Admin-Shop-states___fr"
  }, {
    path: "/fr/Admin/Shop/tax-rate",
    component: _15ababe0,
    name: "Admin-Shop-tax-rate___fr"
  }, {
    path: "/fr/Admin/Shop/tax-rule",
    component: _2a0187fc,
    name: "Admin-Shop-tax-rule___fr"
  }, {
    path: "/fr/Admin/Shop/warehouses",
    component: _c461b0a4,
    name: "Admin-Shop-warehouses___fr"
  }, {
    path: "/fr/Admin/System/general-settings",
    component: _4ad60eff,
    name: "Admin-System-general-settings___fr"
  }, {
    path: "/fr/Admin/System/help",
    component: _4f9ed4d8,
    name: "Admin-System-help___fr"
  }, {
    path: "/fr/Admin/System/integrations",
    component: _89238694,
    name: "Admin-System-integrations___fr"
  }, {
    path: "/fr/Admin/System/role-manager",
    component: _42f4bd26,
    name: "Admin-System-role-manager___fr"
  }, {
    path: "/fr/Admin/System/settings",
    component: _fab8ad8c,
    name: "Admin-System-settings___fr"
  }, {
    path: "/es/Admin/Customers/customer/newcustomer",
    component: _4cb64913,
    name: "Admin-Customers-customer-newcustomer___es"
  }, {
    path: "/es/Admin/Edit/providers/id",
    component: _4fac380a,
    name: "Admin-Edit-providers-id___es"
  }, {
    path: "/es/Admin/Marketing/Email/email-designer",
    component: _29b48a8c,
    name: "Admin-Marketing-Email-email-designer___es"
  }, {
    path: "/fr/Admin/Customers/customer/newcustomer",
    component: _4cb64913,
    name: "Admin-Customers-customer-newcustomer___fr"
  }, {
    path: "/fr/Admin/Edit/providers/id",
    component: _4fac380a,
    name: "Admin-Edit-providers-id___fr"
  }, {
    path: "/fr/Admin/Marketing/Email/email-designer",
    component: _29b48a8c,
    name: "Admin-Marketing-Email-email-designer___fr"
  }, {
    path: "/es/Admin/Shop/Product/Edit/:id?",
    component: _6c9249bf,
    name: "Admin-Shop-Product-Edit-id___es"
  }, {
    path: "/fr/Admin/Shop/Product/Edit/:id?",
    component: _6c9249bf,
    name: "Admin-Shop-Product-Edit-id___fr"
  }, {
    path: "/Admin/Shop/Product/Edit/:id?",
    component: _6c9249bf,
    name: "Admin-Shop-Product-Edit-id___en"
  }, {
    path: "/es/Admin/Edit/agreement/:id?",
    component: _549a4222,
    name: "Admin-Edit-agreement-id___es"
  }, {
    path: "/es/Admin/Edit/article/:id?",
    component: _59366194,
    name: "Admin-Edit-article-id___es"
  }, {
    path: "/es/Admin/Edit/attribute/:id?",
    component: _9efd2460,
    name: "Admin-Edit-attribute-id___es"
  }, {
    path: "/es/Admin/Edit/category/:id?",
    component: _ef9ef78c,
    name: "Admin-Edit-category-id___es"
  }, {
    path: "/es/Admin/Edit/city/:id?",
    component: _7713156d,
    name: "Admin-Edit-city-id___es"
  }, {
    path: "/es/Admin/Edit/collection/:id?",
    component: _4d90151a,
    name: "Admin-Edit-collection-id___es"
  }, {
    path: "/es/Admin/Edit/country/:id?",
    component: _29483896,
    name: "Admin-Edit-country-id___es"
  }, {
    path: "/es/Admin/Edit/coupon/:id?",
    component: _f5dbb0dc,
    name: "Admin-Edit-coupon-id___es"
  }, {
    path: "/es/Admin/Edit/customergroup/:id?",
    component: _28b917ab,
    name: "Admin-Edit-customergroup-id___es"
  }, {
    path: "/es/Admin/Edit/event/:id?",
    component: _1c176092,
    name: "Admin-Edit-event-id___es"
  }, {
    path: "/es/Admin/Edit/gift-certificate/:id?",
    component: _daf11b84,
    name: "Admin-Edit-gift-certificate-id___es"
  }, {
    path: "/es/Admin/Edit/glossary/:id?",
    component: _513c89cc,
    name: "Admin-Edit-glossary-id___es"
  }, {
    path: "/es/Admin/Edit/invoice/:id?",
    component: _75193242,
    name: "Admin-Edit-invoice-id___es"
  }, {
    path: "/es/Admin/Edit/newsletter/:id?",
    component: _b3e52542,
    name: "Admin-Edit-newsletter-id___es"
  }, {
    path: "/es/Admin/Edit/newslettersubscriber/:id?",
    component: _00ab6c92,
    name: "Admin-Edit-newslettersubscriber-id___es"
  }, {
    path: "/es/Admin/Edit/page/:id?",
    component: _9e59566e,
    name: "Admin-Edit-page-id___es"
  }, {
    path: "/es/Admin/Edit/product/:id?",
    component: _d0649146,
    name: "Admin-Edit-product-id___es"
  }, {
    path: "/es/Admin/Edit/report/:id?",
    component: _832d0b78,
    name: "Admin-Edit-report-id___es"
  }, {
    path: "/es/Admin/Edit/return/:id?",
    component: _26326470,
    name: "Admin-Edit-return-id___es"
  }, {
    path: "/es/Admin/Edit/review/:id?",
    component: _749100a0,
    name: "Admin-Edit-review-id___es"
  }, {
    path: "/es/Admin/Edit/segment/:id?",
    component: _2a759cce,
    name: "Admin-Edit-segment-id___es"
  }, {
    path: "/es/Admin/Edit/shipment/:id?",
    component: _71f581c4,
    name: "Admin-Edit-shipment-id___es"
  }, {
    path: "/es/Admin/Edit/state/:id?",
    component: _b10b570a,
    name: "Admin-Edit-state-id___es"
  }, {
    path: "/es/Admin/Edit/tag/:id?",
    component: _727b1bdc,
    name: "Admin-Edit-tag-id___es"
  }, {
    path: "/es/Admin/Edit/taxrate/:id?",
    component: _1b7ae4c1,
    name: "Admin-Edit-taxrate-id___es"
  }, {
    path: "/es/Admin/Edit/taxrule/:id?",
    component: _0e363a25,
    name: "Admin-Edit-taxrule-id___es"
  }, {
    path: "/es/Admin/Marketing/Email/:id?",
    component: _1bdccaec,
    name: "Admin-Marketing-Email-id___es"
  }, {
    path: "/fr/Admin/Edit/agreement/:id?",
    component: _549a4222,
    name: "Admin-Edit-agreement-id___fr"
  }, {
    path: "/fr/Admin/Edit/article/:id?",
    component: _59366194,
    name: "Admin-Edit-article-id___fr"
  }, {
    path: "/fr/Admin/Edit/attribute/:id?",
    component: _9efd2460,
    name: "Admin-Edit-attribute-id___fr"
  }, {
    path: "/fr/Admin/Edit/category/:id?",
    component: _ef9ef78c,
    name: "Admin-Edit-category-id___fr"
  }, {
    path: "/fr/Admin/Edit/city/:id?",
    component: _7713156d,
    name: "Admin-Edit-city-id___fr"
  }, {
    path: "/fr/Admin/Edit/collection/:id?",
    component: _4d90151a,
    name: "Admin-Edit-collection-id___fr"
  }, {
    path: "/fr/Admin/Edit/country/:id?",
    component: _29483896,
    name: "Admin-Edit-country-id___fr"
  }, {
    path: "/fr/Admin/Edit/coupon/:id?",
    component: _f5dbb0dc,
    name: "Admin-Edit-coupon-id___fr"
  }, {
    path: "/fr/Admin/Edit/customergroup/:id?",
    component: _28b917ab,
    name: "Admin-Edit-customergroup-id___fr"
  }, {
    path: "/fr/Admin/Edit/event/:id?",
    component: _1c176092,
    name: "Admin-Edit-event-id___fr"
  }, {
    path: "/fr/Admin/Edit/gift-certificate/:id?",
    component: _daf11b84,
    name: "Admin-Edit-gift-certificate-id___fr"
  }, {
    path: "/fr/Admin/Edit/glossary/:id?",
    component: _513c89cc,
    name: "Admin-Edit-glossary-id___fr"
  }, {
    path: "/fr/Admin/Edit/invoice/:id?",
    component: _75193242,
    name: "Admin-Edit-invoice-id___fr"
  }, {
    path: "/fr/Admin/Edit/newsletter/:id?",
    component: _b3e52542,
    name: "Admin-Edit-newsletter-id___fr"
  }, {
    path: "/fr/Admin/Edit/newslettersubscriber/:id?",
    component: _00ab6c92,
    name: "Admin-Edit-newslettersubscriber-id___fr"
  }, {
    path: "/fr/Admin/Edit/page/:id?",
    component: _9e59566e,
    name: "Admin-Edit-page-id___fr"
  }, {
    path: "/fr/Admin/Edit/product/:id?",
    component: _d0649146,
    name: "Admin-Edit-product-id___fr"
  }, {
    path: "/fr/Admin/Edit/report/:id?",
    component: _832d0b78,
    name: "Admin-Edit-report-id___fr"
  }, {
    path: "/fr/Admin/Edit/return/:id?",
    component: _26326470,
    name: "Admin-Edit-return-id___fr"
  }, {
    path: "/fr/Admin/Edit/review/:id?",
    component: _749100a0,
    name: "Admin-Edit-review-id___fr"
  }, {
    path: "/fr/Admin/Edit/segment/:id?",
    component: _2a759cce,
    name: "Admin-Edit-segment-id___fr"
  }, {
    path: "/fr/Admin/Edit/shipment/:id?",
    component: _71f581c4,
    name: "Admin-Edit-shipment-id___fr"
  }, {
    path: "/fr/Admin/Edit/state/:id?",
    component: _b10b570a,
    name: "Admin-Edit-state-id___fr"
  }, {
    path: "/fr/Admin/Edit/tag/:id?",
    component: _727b1bdc,
    name: "Admin-Edit-tag-id___fr"
  }, {
    path: "/fr/Admin/Edit/taxrate/:id?",
    component: _1b7ae4c1,
    name: "Admin-Edit-taxrate-id___fr"
  }, {
    path: "/fr/Admin/Edit/taxrule/:id?",
    component: _0e363a25,
    name: "Admin-Edit-taxrule-id___fr"
  }, {
    path: "/fr/Admin/Marketing/Email/:id?",
    component: _1bdccaec,
    name: "Admin-Marketing-Email-id___fr"
  }, {
    path: "/Admin/Edit/agreement/:id?",
    component: _549a4222,
    name: "Admin-Edit-agreement-id___en"
  }, {
    path: "/Admin/Edit/article/:id?",
    component: _59366194,
    name: "Admin-Edit-article-id___en"
  }, {
    path: "/Admin/Edit/attribute/:id?",
    component: _9efd2460,
    name: "Admin-Edit-attribute-id___en"
  }, {
    path: "/Admin/Edit/category/:id?",
    component: _ef9ef78c,
    name: "Admin-Edit-category-id___en"
  }, {
    path: "/Admin/Edit/city/:id?",
    component: _7713156d,
    name: "Admin-Edit-city-id___en"
  }, {
    path: "/Admin/Edit/collection/:id?",
    component: _4d90151a,
    name: "Admin-Edit-collection-id___en"
  }, {
    path: "/Admin/Edit/country/:id?",
    component: _29483896,
    name: "Admin-Edit-country-id___en"
  }, {
    path: "/Admin/Edit/coupon/:id?",
    component: _f5dbb0dc,
    name: "Admin-Edit-coupon-id___en"
  }, {
    path: "/Admin/Edit/customergroup/:id?",
    component: _28b917ab,
    name: "Admin-Edit-customergroup-id___en"
  }, {
    path: "/Admin/Edit/event/:id?",
    component: _1c176092,
    name: "Admin-Edit-event-id___en"
  }, {
    path: "/Admin/Edit/gift-certificate/:id?",
    component: _daf11b84,
    name: "Admin-Edit-gift-certificate-id___en"
  }, {
    path: "/Admin/Edit/glossary/:id?",
    component: _513c89cc,
    name: "Admin-Edit-glossary-id___en"
  }, {
    path: "/Admin/Edit/invoice/:id?",
    component: _75193242,
    name: "Admin-Edit-invoice-id___en"
  }, {
    path: "/Admin/Edit/newsletter/:id?",
    component: _b3e52542,
    name: "Admin-Edit-newsletter-id___en"
  }, {
    path: "/Admin/Edit/newslettersubscriber/:id?",
    component: _00ab6c92,
    name: "Admin-Edit-newslettersubscriber-id___en"
  }, {
    path: "/Admin/Edit/page/:id?",
    component: _9e59566e,
    name: "Admin-Edit-page-id___en"
  }, {
    path: "/Admin/Edit/product/:id?",
    component: _d0649146,
    name: "Admin-Edit-product-id___en"
  }, {
    path: "/Admin/Edit/report/:id?",
    component: _832d0b78,
    name: "Admin-Edit-report-id___en"
  }, {
    path: "/Admin/Edit/return/:id?",
    component: _26326470,
    name: "Admin-Edit-return-id___en"
  }, {
    path: "/Admin/Edit/review/:id?",
    component: _749100a0,
    name: "Admin-Edit-review-id___en"
  }, {
    path: "/Admin/Edit/segment/:id?",
    component: _2a759cce,
    name: "Admin-Edit-segment-id___en"
  }, {
    path: "/Admin/Edit/shipment/:id?",
    component: _71f581c4,
    name: "Admin-Edit-shipment-id___en"
  }, {
    path: "/Admin/Edit/state/:id?",
    component: _b10b570a,
    name: "Admin-Edit-state-id___en"
  }, {
    path: "/Admin/Edit/tag/:id?",
    component: _727b1bdc,
    name: "Admin-Edit-tag-id___en"
  }, {
    path: "/Admin/Edit/taxrate/:id?",
    component: _1b7ae4c1,
    name: "Admin-Edit-taxrate-id___en"
  }, {
    path: "/Admin/Edit/taxrule/:id?",
    component: _0e363a25,
    name: "Admin-Edit-taxrule-id___en"
  }, {
    path: "/Admin/Marketing/Email/:id?",
    component: _1bdccaec,
    name: "Admin-Marketing-Email-id___en"
  }, {
    path: "/",
    component: _1b6fdfab,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
