import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8c3791c0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _2e61864a = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _708cdab4 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _65d4a508 = () => interopDefault(import('..\\pages\\Admin\\profile.vue' /* webpackChunkName: "pages/Admin/profile" */))
const _0e78ed6c = () => interopDefault(import('..\\pages\\User\\login.vue' /* webpackChunkName: "pages/User/login" */))
const _beb522ce = () => interopDefault(import('..\\pages\\User\\my-account.vue' /* webpackChunkName: "pages/User/my-account" */))
const _2e73b820 = () => interopDefault(import('..\\pages\\User\\register.vue' /* webpackChunkName: "pages/User/register" */))
const _1bc74b8c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-agreement.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-agreement" */))
const _5cc64526 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-article.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-article" */))
const _19d819cc = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-attribute.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-attribute" */))
const _6f8aa2fe = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-category.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-category" */))
const _5b6c162a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-city.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-city" */))
const _a9866ac4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-collection.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-collection" */))
const _58030074 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-country.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-country" */))
const _494337b4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-coupon.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-coupon" */))
const _6c8dabde = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-customergroup.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-customergroup" */))
const _8538826c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-event.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-event" */))
const _a484482e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-gift-certificates.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-gift-certificates" */))
const _446aa01e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-glossary.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-glossary" */))
const _0ec07046 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-invoice.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-invoice" */))
const _fdbec98e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-newsletter.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-newsletter" */))
const _95ec6cf8 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-newslettersubscriber copy.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-newslettersubscriber copy" */))
const _5a3e8c0f = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-page.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-page" */))
const _59cebec2 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-product.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-product" */))
const _2a26aa34 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-report.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-report" */))
const _06bc3430 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-return.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-return" */))
const _46039a58 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-review.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-review" */))
const _19969e3a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-segment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-segment" */))
const _33dda99a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-shipment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-shipment" */))
const _3f303d41 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-state.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-state" */))
const _62cd51ca = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-tag.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-tag" */))
const _6694b68a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-taxrate.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-taxrate" */))
const _3de8fe52 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-taxrule.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-taxrule" */))
const _9d529964 = () => interopDefault(import('..\\pages\\Admin\\Content\\blog.vue' /* webpackChunkName: "pages/Admin/Content/blog" */))
const _98c3f46c = () => interopDefault(import('..\\pages\\Admin\\Content\\glossary.vue' /* webpackChunkName: "pages/Admin/Content/glossary" */))
const _52b993c8 = () => interopDefault(import('..\\pages\\Admin\\Content\\media-manager.vue' /* webpackChunkName: "pages/Admin/Content/media-manager" */))
const _77a0f0c8 = () => interopDefault(import('..\\pages\\Admin\\Content\\pages.vue' /* webpackChunkName: "pages/Admin/Content/pages" */))
const _a76cb776 = () => interopDefault(import('..\\pages\\Admin\\Content\\tags.vue' /* webpackChunkName: "pages/Admin/Content/tags" */))
const _721d0311 = () => interopDefault(import('..\\pages\\Admin\\Customers\\all-customers.vue' /* webpackChunkName: "pages/Admin/Customers/all-customers" */))
const _7ce364ea = () => interopDefault(import('..\\pages\\Admin\\Customers\\customer-groups.vue' /* webpackChunkName: "pages/Admin/Customers/customer-groups" */))
const _4c8afaa3 = () => interopDefault(import('..\\pages\\Admin\\Customers\\online-customers.vue' /* webpackChunkName: "pages/Admin/Customers/online-customers" */))
const _71da3e68 = () => interopDefault(import('..\\pages\\Admin\\Customers\\segments.vue' /* webpackChunkName: "pages/Admin/Customers/segments" */))
const _334552f6 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\communications.vue' /* webpackChunkName: "pages/Admin/Marketing/communications" */))
const _1416489c = () => interopDefault(import('..\\pages\\Admin\\Marketing\\events.vue' /* webpackChunkName: "pages/Admin/Marketing/events" */))
const _7fd3cdb1 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\invitations.vue' /* webpackChunkName: "pages/Admin/Marketing/invitations" */))
const _b3b3f25c = () => interopDefault(import('..\\pages\\Admin\\Marketing\\newsletter.vue' /* webpackChunkName: "pages/Admin/Marketing/newsletter" */))
const _3ceb965c = () => interopDefault(import('..\\pages\\Admin\\Marketing\\reviews.vue' /* webpackChunkName: "pages/Admin/Marketing/reviews" */))
const _311ab394 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\seo.vue' /* webpackChunkName: "pages/Admin/Marketing/seo" */))
const _90aa90ac = () => interopDefault(import('..\\pages\\Admin\\Reports\\business-intelligence.vue' /* webpackChunkName: "pages/Admin/Reports/business-intelligence" */))
const _c5e72be8 = () => interopDefault(import('..\\pages\\Admin\\Reports\\customer-engagement.vue' /* webpackChunkName: "pages/Admin/Reports/customer-engagement" */))
const _3173a5c5 = () => interopDefault(import('..\\pages\\Admin\\Reports\\customers-reports.vue' /* webpackChunkName: "pages/Admin/Reports/customers-reports" */))
const _d3ac7bd4 = () => interopDefault(import('..\\pages\\Admin\\Reports\\marketing-reports.vue' /* webpackChunkName: "pages/Admin/Reports/marketing-reports" */))
const _4fd632c8 = () => interopDefault(import('..\\pages\\Admin\\Reports\\products-reports.vue' /* webpackChunkName: "pages/Admin/Reports/products-reports" */))
const _22a3ab19 = () => interopDefault(import('..\\pages\\Admin\\Reports\\reviews.vue' /* webpackChunkName: "pages/Admin/Reports/reviews" */))
const _5cac3afc = () => interopDefault(import('..\\pages\\Admin\\Reports\\sales-reports.vue' /* webpackChunkName: "pages/Admin/Reports/sales-reports" */))
const _c71502d6 = () => interopDefault(import('..\\pages\\Admin\\Reports\\statistics.vue' /* webpackChunkName: "pages/Admin/Reports/statistics" */))
const _83855bb0 = () => interopDefault(import('..\\pages\\Admin\\Sales\\agreements.vue' /* webpackChunkName: "pages/Admin/Sales/agreements" */))
const _ee72d60a = () => interopDefault(import('..\\pages\\Admin\\Sales\\certificates.vue' /* webpackChunkName: "pages/Admin/Sales/certificates" */))
const _b68f0d38 = () => interopDefault(import('..\\pages\\Admin\\Sales\\credit-memos.vue' /* webpackChunkName: "pages/Admin/Sales/credit-memos" */))
const _6db68ca5 = () => interopDefault(import('..\\pages\\Admin\\Sales\\invoices.vue' /* webpackChunkName: "pages/Admin/Sales/invoices" */))
const _441412e4 = () => interopDefault(import('..\\pages\\Admin\\Sales\\orders.vue' /* webpackChunkName: "pages/Admin/Sales/orders" */))
const _1f68b824 = () => interopDefault(import('..\\pages\\Admin\\Sales\\payment-virtual-terminal.vue' /* webpackChunkName: "pages/Admin/Sales/payment-virtual-terminal" */))
const _52dec754 = () => interopDefault(import('..\\pages\\Admin\\Sales\\returns.vue' /* webpackChunkName: "pages/Admin/Sales/returns" */))
const _59ef2a2c = () => interopDefault(import('..\\pages\\Admin\\Sales\\shipments.vue' /* webpackChunkName: "pages/Admin/Sales/shipments" */))
const _45ffb814 = () => interopDefault(import('..\\pages\\Admin\\Sales\\transactions.vue' /* webpackChunkName: "pages/Admin/Sales/transactions" */))
const _78bafbaa = () => interopDefault(import('..\\pages\\Admin\\Shop\\attributes.vue' /* webpackChunkName: "pages/Admin/Shop/attributes" */))
const _1a7eadef = () => interopDefault(import('..\\pages\\Admin\\Shop\\categories.vue' /* webpackChunkName: "pages/Admin/Shop/categories" */))
const _a064cbc8 = () => interopDefault(import('..\\pages\\Admin\\Shop\\cities.vue' /* webpackChunkName: "pages/Admin/Shop/cities" */))
const _2ea96c5c = () => interopDefault(import('..\\pages\\Admin\\Shop\\collections.vue' /* webpackChunkName: "pages/Admin/Shop/collections" */))
const _4b99dcb1 = () => interopDefault(import('..\\pages\\Admin\\Shop\\countries.vue' /* webpackChunkName: "pages/Admin/Shop/countries" */))
const _7b2cafca = () => interopDefault(import('..\\pages\\Admin\\Shop\\coupons.vue' /* webpackChunkName: "pages/Admin/Shop/coupons" */))
const _49029ffa = () => interopDefault(import('..\\pages\\Admin\\Shop\\fullfillment.vue' /* webpackChunkName: "pages/Admin/Shop/fullfillment" */))
const _f94a714e = () => interopDefault(import('..\\pages\\Admin\\Shop\\inventory.vue' /* webpackChunkName: "pages/Admin/Shop/inventory" */))
const _5da1fd6f = () => interopDefault(import('..\\pages\\Admin\\Shop\\multi-vendor.vue' /* webpackChunkName: "pages/Admin/Shop/multi-vendor" */))
const _e21c3012 = () => interopDefault(import('..\\pages\\Admin\\Shop\\products.vue' /* webpackChunkName: "pages/Admin/Shop/products" */))
const _38f8af56 = () => interopDefault(import('..\\pages\\Admin\\Shop\\states.vue' /* webpackChunkName: "pages/Admin/Shop/states" */))
const _37970d56 = () => interopDefault(import('..\\pages\\Admin\\Shop\\tax-rate.vue' /* webpackChunkName: "pages/Admin/Shop/tax-rate" */))
const _0eeb551e = () => interopDefault(import('..\\pages\\Admin\\Shop\\tax-rule.vue' /* webpackChunkName: "pages/Admin/Shop/tax-rule" */))
const _81ef6398 = () => interopDefault(import('..\\pages\\Admin\\System\\general-settings.vue' /* webpackChunkName: "pages/Admin/System/general-settings" */))
const _35767b8d = () => interopDefault(import('..\\pages\\Admin\\System\\help.vue' /* webpackChunkName: "pages/Admin/System/help" */))
const _0ea25e6b = () => interopDefault(import('..\\pages\\Admin\\System\\integrations.vue' /* webpackChunkName: "pages/Admin/System/integrations" */))
const _31b9c322 = () => interopDefault(import('..\\pages\\Admin\\System\\role-manager.vue' /* webpackChunkName: "pages/Admin/System/role-manager" */))
const _5ba22522 = () => interopDefault(import('..\\pages\\Admin\\System\\settings.vue' /* webpackChunkName: "pages/Admin/System/settings" */))
const _0f36f970 = () => interopDefault(import('..\\pages\\Admin\\Customers\\customer\\newcustomer.vue' /* webpackChunkName: "pages/Admin/Customers/customer/newcustomer" */))
const _3e76ee18 = () => interopDefault(import('..\\pages\\Admin\\Shop\\Product\\Edit\\_id.vue' /* webpackChunkName: "pages/Admin/Shop/Product/Edit/_id" */))
const _3af41e4b = () => interopDefault(import('..\\pages\\Admin\\Edit\\Article\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/Article/_id" */))
const _2f2cdfd7 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\Email\\_id.vue' /* webpackChunkName: "pages/Admin/Marketing/Email/_id" */))

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
    component: _8c3791c0,
    name: "index___es"
  }, {
    path: "/fr",
    component: _8c3791c0,
    name: "index___fr"
  }, {
    path: "/search",
    component: _2e61864a,
    name: "search___en"
  }, {
    path: "/test",
    component: _708cdab4,
    name: "test___en"
  }, {
    path: "/Admin/profile",
    component: _65d4a508,
    name: "Admin-profile___en"
  }, {
    path: "/es/search",
    component: _2e61864a,
    name: "search___es"
  }, {
    path: "/es/test",
    component: _708cdab4,
    name: "test___es"
  }, {
    path: "/fr/search",
    component: _2e61864a,
    name: "search___fr"
  }, {
    path: "/fr/test",
    component: _708cdab4,
    name: "test___fr"
  }, {
    path: "/User/login",
    component: _0e78ed6c,
    name: "User-login___en"
  }, {
    path: "/User/my-account",
    component: _beb522ce,
    name: "User-my-account___en"
  }, {
    path: "/User/register",
    component: _2e73b820,
    name: "User-register___en"
  }, {
    path: "/Admin/Add-New/add-new-agreement",
    component: _1bc74b8c,
    name: "Admin-Add-New-add-new-agreement___en"
  }, {
    path: "/Admin/Add-New/add-new-article",
    component: _5cc64526,
    name: "Admin-Add-New-add-new-article___en"
  }, {
    path: "/Admin/Add-New/add-new-attribute",
    component: _19d819cc,
    name: "Admin-Add-New-add-new-attribute___en"
  }, {
    path: "/Admin/Add-New/add-new-category",
    component: _6f8aa2fe,
    name: "Admin-Add-New-add-new-category___en"
  }, {
    path: "/Admin/Add-New/add-new-city",
    component: _5b6c162a,
    name: "Admin-Add-New-add-new-city___en"
  }, {
    path: "/Admin/Add-New/add-new-collection",
    component: _a9866ac4,
    name: "Admin-Add-New-add-new-collection___en"
  }, {
    path: "/Admin/Add-New/add-new-country",
    component: _58030074,
    name: "Admin-Add-New-add-new-country___en"
  }, {
    path: "/Admin/Add-New/add-new-coupon",
    component: _494337b4,
    name: "Admin-Add-New-add-new-coupon___en"
  }, {
    path: "/Admin/Add-New/add-new-customergroup",
    component: _6c8dabde,
    name: "Admin-Add-New-add-new-customergroup___en"
  }, {
    path: "/Admin/Add-New/add-new-event",
    component: _8538826c,
    name: "Admin-Add-New-add-new-event___en"
  }, {
    path: "/Admin/Add-New/add-new-gift-certificates",
    component: _a484482e,
    name: "Admin-Add-New-add-new-gift-certificates___en"
  }, {
    path: "/Admin/Add-New/add-new-glossary",
    component: _446aa01e,
    name: "Admin-Add-New-add-new-glossary___en"
  }, {
    path: "/Admin/Add-New/add-new-invoice",
    component: _0ec07046,
    name: "Admin-Add-New-add-new-invoice___en"
  }, {
    path: "/Admin/Add-New/add-new-newsletter",
    component: _fdbec98e,
    name: "Admin-Add-New-add-new-newsletter___en"
  }, {
    path: "/Admin/Add-New/add-new-newslettersubscriber%20copy",
    component: _95ec6cf8,
    name: "Admin-Add-New-add-new-newslettersubscriber copy___en"
  }, {
    path: "/Admin/Add-New/add-new-page",
    component: _5a3e8c0f,
    name: "Admin-Add-New-add-new-page___en"
  }, {
    path: "/Admin/Add-New/add-new-product",
    component: _59cebec2,
    name: "Admin-Add-New-add-new-product___en"
  }, {
    path: "/Admin/Add-New/add-new-report",
    component: _2a26aa34,
    name: "Admin-Add-New-add-new-report___en"
  }, {
    path: "/Admin/Add-New/add-new-return",
    component: _06bc3430,
    name: "Admin-Add-New-add-new-return___en"
  }, {
    path: "/Admin/Add-New/add-new-review",
    component: _46039a58,
    name: "Admin-Add-New-add-new-review___en"
  }, {
    path: "/Admin/Add-New/add-new-segment",
    component: _19969e3a,
    name: "Admin-Add-New-add-new-segment___en"
  }, {
    path: "/Admin/Add-New/add-new-shipment",
    component: _33dda99a,
    name: "Admin-Add-New-add-new-shipment___en"
  }, {
    path: "/Admin/Add-New/add-new-state",
    component: _3f303d41,
    name: "Admin-Add-New-add-new-state___en"
  }, {
    path: "/Admin/Add-New/add-new-tag",
    component: _62cd51ca,
    name: "Admin-Add-New-add-new-tag___en"
  }, {
    path: "/Admin/Add-New/add-new-taxrate",
    component: _6694b68a,
    name: "Admin-Add-New-add-new-taxrate___en"
  }, {
    path: "/Admin/Add-New/add-new-taxrule",
    component: _3de8fe52,
    name: "Admin-Add-New-add-new-taxrule___en"
  }, {
    path: "/Admin/Content/blog",
    component: _9d529964,
    name: "Admin-Content-blog___en"
  }, {
    path: "/Admin/Content/glossary",
    component: _98c3f46c,
    name: "Admin-Content-glossary___en"
  }, {
    path: "/Admin/Content/media-manager",
    component: _52b993c8,
    name: "Admin-Content-media-manager___en"
  }, {
    path: "/Admin/Content/pages",
    component: _77a0f0c8,
    name: "Admin-Content-pages___en"
  }, {
    path: "/Admin/Content/tags",
    component: _a76cb776,
    name: "Admin-Content-tags___en"
  }, {
    path: "/Admin/Customers/all-customers",
    component: _721d0311,
    name: "Admin-Customers-all-customers___en"
  }, {
    path: "/Admin/Customers/customer-groups",
    component: _7ce364ea,
    name: "Admin-Customers-customer-groups___en"
  }, {
    path: "/Admin/Customers/online-customers",
    component: _4c8afaa3,
    name: "Admin-Customers-online-customers___en"
  }, {
    path: "/Admin/Customers/segments",
    component: _71da3e68,
    name: "Admin-Customers-segments___en"
  }, {
    path: "/Admin/Marketing/communications",
    component: _334552f6,
    name: "Admin-Marketing-communications___en"
  }, {
    path: "/Admin/Marketing/events",
    component: _1416489c,
    name: "Admin-Marketing-events___en"
  }, {
    path: "/Admin/Marketing/invitations",
    component: _7fd3cdb1,
    name: "Admin-Marketing-invitations___en"
  }, {
    path: "/Admin/Marketing/newsletter",
    component: _b3b3f25c,
    name: "Admin-Marketing-newsletter___en"
  }, {
    path: "/Admin/Marketing/reviews",
    component: _3ceb965c,
    name: "Admin-Marketing-reviews___en"
  }, {
    path: "/Admin/Marketing/seo",
    component: _311ab394,
    name: "Admin-Marketing-seo___en"
  }, {
    path: "/Admin/Reports/business-intelligence",
    component: _90aa90ac,
    name: "Admin-Reports-business-intelligence___en"
  }, {
    path: "/Admin/Reports/customer-engagement",
    component: _c5e72be8,
    name: "Admin-Reports-customer-engagement___en"
  }, {
    path: "/Admin/Reports/customers-reports",
    component: _3173a5c5,
    name: "Admin-Reports-customers-reports___en"
  }, {
    path: "/Admin/Reports/marketing-reports",
    component: _d3ac7bd4,
    name: "Admin-Reports-marketing-reports___en"
  }, {
    path: "/Admin/Reports/products-reports",
    component: _4fd632c8,
    name: "Admin-Reports-products-reports___en"
  }, {
    path: "/Admin/Reports/reviews",
    component: _22a3ab19,
    name: "Admin-Reports-reviews___en"
  }, {
    path: "/Admin/Reports/sales-reports",
    component: _5cac3afc,
    name: "Admin-Reports-sales-reports___en"
  }, {
    path: "/Admin/Reports/statistics",
    component: _c71502d6,
    name: "Admin-Reports-statistics___en"
  }, {
    path: "/Admin/Sales/agreements",
    component: _83855bb0,
    name: "Admin-Sales-agreements___en"
  }, {
    path: "/Admin/Sales/certificates",
    component: _ee72d60a,
    name: "Admin-Sales-certificates___en"
  }, {
    path: "/Admin/Sales/credit-memos",
    component: _b68f0d38,
    name: "Admin-Sales-credit-memos___en"
  }, {
    path: "/Admin/Sales/invoices",
    component: _6db68ca5,
    name: "Admin-Sales-invoices___en"
  }, {
    path: "/Admin/Sales/orders",
    component: _441412e4,
    name: "Admin-Sales-orders___en"
  }, {
    path: "/Admin/Sales/payment-virtual-terminal",
    component: _1f68b824,
    name: "Admin-Sales-payment-virtual-terminal___en"
  }, {
    path: "/Admin/Sales/returns",
    component: _52dec754,
    name: "Admin-Sales-returns___en"
  }, {
    path: "/Admin/Sales/shipments",
    component: _59ef2a2c,
    name: "Admin-Sales-shipments___en"
  }, {
    path: "/Admin/Sales/transactions",
    component: _45ffb814,
    name: "Admin-Sales-transactions___en"
  }, {
    path: "/Admin/Shop/attributes",
    component: _78bafbaa,
    name: "Admin-Shop-attributes___en"
  }, {
    path: "/Admin/Shop/categories",
    component: _1a7eadef,
    name: "Admin-Shop-categories___en"
  }, {
    path: "/Admin/Shop/cities",
    component: _a064cbc8,
    name: "Admin-Shop-cities___en"
  }, {
    path: "/Admin/Shop/collections",
    component: _2ea96c5c,
    name: "Admin-Shop-collections___en"
  }, {
    path: "/Admin/Shop/countries",
    component: _4b99dcb1,
    name: "Admin-Shop-countries___en"
  }, {
    path: "/Admin/Shop/coupons",
    component: _7b2cafca,
    name: "Admin-Shop-coupons___en"
  }, {
    path: "/Admin/Shop/fullfillment",
    component: _49029ffa,
    name: "Admin-Shop-fullfillment___en"
  }, {
    path: "/Admin/Shop/inventory",
    component: _f94a714e,
    name: "Admin-Shop-inventory___en"
  }, {
    path: "/Admin/Shop/multi-vendor",
    component: _5da1fd6f,
    name: "Admin-Shop-multi-vendor___en"
  }, {
    path: "/Admin/Shop/products",
    component: _e21c3012,
    name: "Admin-Shop-products___en"
  }, {
    path: "/Admin/Shop/states",
    component: _38f8af56,
    name: "Admin-Shop-states___en"
  }, {
    path: "/Admin/Shop/tax-rate",
    component: _37970d56,
    name: "Admin-Shop-tax-rate___en"
  }, {
    path: "/Admin/Shop/tax-rule",
    component: _0eeb551e,
    name: "Admin-Shop-tax-rule___en"
  }, {
    path: "/Admin/System/general-settings",
    component: _81ef6398,
    name: "Admin-System-general-settings___en"
  }, {
    path: "/Admin/System/help",
    component: _35767b8d,
    name: "Admin-System-help___en"
  }, {
    path: "/Admin/System/integrations",
    component: _0ea25e6b,
    name: "Admin-System-integrations___en"
  }, {
    path: "/Admin/System/role-manager",
    component: _31b9c322,
    name: "Admin-System-role-manager___en"
  }, {
    path: "/Admin/System/settings",
    component: _5ba22522,
    name: "Admin-System-settings___en"
  }, {
    path: "/es/Admin/profile",
    component: _65d4a508,
    name: "Admin-profile___es"
  }, {
    path: "/es/User/login",
    component: _0e78ed6c,
    name: "User-login___es"
  }, {
    path: "/es/User/my-account",
    component: _beb522ce,
    name: "User-my-account___es"
  }, {
    path: "/es/User/register",
    component: _2e73b820,
    name: "User-register___es"
  }, {
    path: "/fr/Admin/profile",
    component: _65d4a508,
    name: "Admin-profile___fr"
  }, {
    path: "/fr/User/login",
    component: _0e78ed6c,
    name: "User-login___fr"
  }, {
    path: "/fr/User/my-account",
    component: _beb522ce,
    name: "User-my-account___fr"
  }, {
    path: "/fr/User/register",
    component: _2e73b820,
    name: "User-register___fr"
  }, {
    path: "/Admin/Customers/customer/newcustomer",
    component: _0f36f970,
    name: "Admin-Customers-customer-newcustomer___en"
  }, {
    path: "/es/Admin/Add-New/add-new-agreement",
    component: _1bc74b8c,
    name: "Admin-Add-New-add-new-agreement___es"
  }, {
    path: "/es/Admin/Add-New/add-new-article",
    component: _5cc64526,
    name: "Admin-Add-New-add-new-article___es"
  }, {
    path: "/es/Admin/Add-New/add-new-attribute",
    component: _19d819cc,
    name: "Admin-Add-New-add-new-attribute___es"
  }, {
    path: "/es/Admin/Add-New/add-new-category",
    component: _6f8aa2fe,
    name: "Admin-Add-New-add-new-category___es"
  }, {
    path: "/es/Admin/Add-New/add-new-city",
    component: _5b6c162a,
    name: "Admin-Add-New-add-new-city___es"
  }, {
    path: "/es/Admin/Add-New/add-new-collection",
    component: _a9866ac4,
    name: "Admin-Add-New-add-new-collection___es"
  }, {
    path: "/es/Admin/Add-New/add-new-country",
    component: _58030074,
    name: "Admin-Add-New-add-new-country___es"
  }, {
    path: "/es/Admin/Add-New/add-new-coupon",
    component: _494337b4,
    name: "Admin-Add-New-add-new-coupon___es"
  }, {
    path: "/es/Admin/Add-New/add-new-customergroup",
    component: _6c8dabde,
    name: "Admin-Add-New-add-new-customergroup___es"
  }, {
    path: "/es/Admin/Add-New/add-new-event",
    component: _8538826c,
    name: "Admin-Add-New-add-new-event___es"
  }, {
    path: "/es/Admin/Add-New/add-new-gift-certificates",
    component: _a484482e,
    name: "Admin-Add-New-add-new-gift-certificates___es"
  }, {
    path: "/es/Admin/Add-New/add-new-glossary",
    component: _446aa01e,
    name: "Admin-Add-New-add-new-glossary___es"
  }, {
    path: "/es/Admin/Add-New/add-new-invoice",
    component: _0ec07046,
    name: "Admin-Add-New-add-new-invoice___es"
  }, {
    path: "/es/Admin/Add-New/add-new-newsletter",
    component: _fdbec98e,
    name: "Admin-Add-New-add-new-newsletter___es"
  }, {
    path: "/es/Admin/Add-New/add-new-newslettersubscriber%20copy",
    component: _95ec6cf8,
    name: "Admin-Add-New-add-new-newslettersubscriber copy___es"
  }, {
    path: "/es/Admin/Add-New/add-new-page",
    component: _5a3e8c0f,
    name: "Admin-Add-New-add-new-page___es"
  }, {
    path: "/es/Admin/Add-New/add-new-product",
    component: _59cebec2,
    name: "Admin-Add-New-add-new-product___es"
  }, {
    path: "/es/Admin/Add-New/add-new-report",
    component: _2a26aa34,
    name: "Admin-Add-New-add-new-report___es"
  }, {
    path: "/es/Admin/Add-New/add-new-return",
    component: _06bc3430,
    name: "Admin-Add-New-add-new-return___es"
  }, {
    path: "/es/Admin/Add-New/add-new-review",
    component: _46039a58,
    name: "Admin-Add-New-add-new-review___es"
  }, {
    path: "/es/Admin/Add-New/add-new-segment",
    component: _19969e3a,
    name: "Admin-Add-New-add-new-segment___es"
  }, {
    path: "/es/Admin/Add-New/add-new-shipment",
    component: _33dda99a,
    name: "Admin-Add-New-add-new-shipment___es"
  }, {
    path: "/es/Admin/Add-New/add-new-state",
    component: _3f303d41,
    name: "Admin-Add-New-add-new-state___es"
  }, {
    path: "/es/Admin/Add-New/add-new-tag",
    component: _62cd51ca,
    name: "Admin-Add-New-add-new-tag___es"
  }, {
    path: "/es/Admin/Add-New/add-new-taxrate",
    component: _6694b68a,
    name: "Admin-Add-New-add-new-taxrate___es"
  }, {
    path: "/es/Admin/Add-New/add-new-taxrule",
    component: _3de8fe52,
    name: "Admin-Add-New-add-new-taxrule___es"
  }, {
    path: "/es/Admin/Content/blog",
    component: _9d529964,
    name: "Admin-Content-blog___es"
  }, {
    path: "/es/Admin/Content/glossary",
    component: _98c3f46c,
    name: "Admin-Content-glossary___es"
  }, {
    path: "/es/Admin/Content/media-manager",
    component: _52b993c8,
    name: "Admin-Content-media-manager___es"
  }, {
    path: "/es/Admin/Content/pages",
    component: _77a0f0c8,
    name: "Admin-Content-pages___es"
  }, {
    path: "/es/Admin/Content/tags",
    component: _a76cb776,
    name: "Admin-Content-tags___es"
  }, {
    path: "/es/Admin/Customers/all-customers",
    component: _721d0311,
    name: "Admin-Customers-all-customers___es"
  }, {
    path: "/es/Admin/Customers/customer-groups",
    component: _7ce364ea,
    name: "Admin-Customers-customer-groups___es"
  }, {
    path: "/es/Admin/Customers/online-customers",
    component: _4c8afaa3,
    name: "Admin-Customers-online-customers___es"
  }, {
    path: "/es/Admin/Customers/segments",
    component: _71da3e68,
    name: "Admin-Customers-segments___es"
  }, {
    path: "/es/Admin/Marketing/communications",
    component: _334552f6,
    name: "Admin-Marketing-communications___es"
  }, {
    path: "/es/Admin/Marketing/events",
    component: _1416489c,
    name: "Admin-Marketing-events___es"
  }, {
    path: "/es/Admin/Marketing/invitations",
    component: _7fd3cdb1,
    name: "Admin-Marketing-invitations___es"
  }, {
    path: "/es/Admin/Marketing/newsletter",
    component: _b3b3f25c,
    name: "Admin-Marketing-newsletter___es"
  }, {
    path: "/es/Admin/Marketing/reviews",
    component: _3ceb965c,
    name: "Admin-Marketing-reviews___es"
  }, {
    path: "/es/Admin/Marketing/seo",
    component: _311ab394,
    name: "Admin-Marketing-seo___es"
  }, {
    path: "/es/Admin/Reports/business-intelligence",
    component: _90aa90ac,
    name: "Admin-Reports-business-intelligence___es"
  }, {
    path: "/es/Admin/Reports/customer-engagement",
    component: _c5e72be8,
    name: "Admin-Reports-customer-engagement___es"
  }, {
    path: "/es/Admin/Reports/customers-reports",
    component: _3173a5c5,
    name: "Admin-Reports-customers-reports___es"
  }, {
    path: "/es/Admin/Reports/marketing-reports",
    component: _d3ac7bd4,
    name: "Admin-Reports-marketing-reports___es"
  }, {
    path: "/es/Admin/Reports/products-reports",
    component: _4fd632c8,
    name: "Admin-Reports-products-reports___es"
  }, {
    path: "/es/Admin/Reports/reviews",
    component: _22a3ab19,
    name: "Admin-Reports-reviews___es"
  }, {
    path: "/es/Admin/Reports/sales-reports",
    component: _5cac3afc,
    name: "Admin-Reports-sales-reports___es"
  }, {
    path: "/es/Admin/Reports/statistics",
    component: _c71502d6,
    name: "Admin-Reports-statistics___es"
  }, {
    path: "/es/Admin/Sales/agreements",
    component: _83855bb0,
    name: "Admin-Sales-agreements___es"
  }, {
    path: "/es/Admin/Sales/certificates",
    component: _ee72d60a,
    name: "Admin-Sales-certificates___es"
  }, {
    path: "/es/Admin/Sales/credit-memos",
    component: _b68f0d38,
    name: "Admin-Sales-credit-memos___es"
  }, {
    path: "/es/Admin/Sales/invoices",
    component: _6db68ca5,
    name: "Admin-Sales-invoices___es"
  }, {
    path: "/es/Admin/Sales/orders",
    component: _441412e4,
    name: "Admin-Sales-orders___es"
  }, {
    path: "/es/Admin/Sales/payment-virtual-terminal",
    component: _1f68b824,
    name: "Admin-Sales-payment-virtual-terminal___es"
  }, {
    path: "/es/Admin/Sales/returns",
    component: _52dec754,
    name: "Admin-Sales-returns___es"
  }, {
    path: "/es/Admin/Sales/shipments",
    component: _59ef2a2c,
    name: "Admin-Sales-shipments___es"
  }, {
    path: "/es/Admin/Sales/transactions",
    component: _45ffb814,
    name: "Admin-Sales-transactions___es"
  }, {
    path: "/es/Admin/Shop/attributes",
    component: _78bafbaa,
    name: "Admin-Shop-attributes___es"
  }, {
    path: "/es/Admin/Shop/categories",
    component: _1a7eadef,
    name: "Admin-Shop-categories___es"
  }, {
    path: "/es/Admin/Shop/cities",
    component: _a064cbc8,
    name: "Admin-Shop-cities___es"
  }, {
    path: "/es/Admin/Shop/collections",
    component: _2ea96c5c,
    name: "Admin-Shop-collections___es"
  }, {
    path: "/es/Admin/Shop/countries",
    component: _4b99dcb1,
    name: "Admin-Shop-countries___es"
  }, {
    path: "/es/Admin/Shop/coupons",
    component: _7b2cafca,
    name: "Admin-Shop-coupons___es"
  }, {
    path: "/es/Admin/Shop/fullfillment",
    component: _49029ffa,
    name: "Admin-Shop-fullfillment___es"
  }, {
    path: "/es/Admin/Shop/inventory",
    component: _f94a714e,
    name: "Admin-Shop-inventory___es"
  }, {
    path: "/es/Admin/Shop/multi-vendor",
    component: _5da1fd6f,
    name: "Admin-Shop-multi-vendor___es"
  }, {
    path: "/es/Admin/Shop/products",
    component: _e21c3012,
    name: "Admin-Shop-products___es"
  }, {
    path: "/es/Admin/Shop/states",
    component: _38f8af56,
    name: "Admin-Shop-states___es"
  }, {
    path: "/es/Admin/Shop/tax-rate",
    component: _37970d56,
    name: "Admin-Shop-tax-rate___es"
  }, {
    path: "/es/Admin/Shop/tax-rule",
    component: _0eeb551e,
    name: "Admin-Shop-tax-rule___es"
  }, {
    path: "/es/Admin/System/general-settings",
    component: _81ef6398,
    name: "Admin-System-general-settings___es"
  }, {
    path: "/es/Admin/System/help",
    component: _35767b8d,
    name: "Admin-System-help___es"
  }, {
    path: "/es/Admin/System/integrations",
    component: _0ea25e6b,
    name: "Admin-System-integrations___es"
  }, {
    path: "/es/Admin/System/role-manager",
    component: _31b9c322,
    name: "Admin-System-role-manager___es"
  }, {
    path: "/es/Admin/System/settings",
    component: _5ba22522,
    name: "Admin-System-settings___es"
  }, {
    path: "/fr/Admin/Add-New/add-new-agreement",
    component: _1bc74b8c,
    name: "Admin-Add-New-add-new-agreement___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-article",
    component: _5cc64526,
    name: "Admin-Add-New-add-new-article___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-attribute",
    component: _19d819cc,
    name: "Admin-Add-New-add-new-attribute___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-category",
    component: _6f8aa2fe,
    name: "Admin-Add-New-add-new-category___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-city",
    component: _5b6c162a,
    name: "Admin-Add-New-add-new-city___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-collection",
    component: _a9866ac4,
    name: "Admin-Add-New-add-new-collection___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-country",
    component: _58030074,
    name: "Admin-Add-New-add-new-country___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-coupon",
    component: _494337b4,
    name: "Admin-Add-New-add-new-coupon___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-customergroup",
    component: _6c8dabde,
    name: "Admin-Add-New-add-new-customergroup___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-event",
    component: _8538826c,
    name: "Admin-Add-New-add-new-event___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-gift-certificates",
    component: _a484482e,
    name: "Admin-Add-New-add-new-gift-certificates___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-glossary",
    component: _446aa01e,
    name: "Admin-Add-New-add-new-glossary___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-invoice",
    component: _0ec07046,
    name: "Admin-Add-New-add-new-invoice___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-newsletter",
    component: _fdbec98e,
    name: "Admin-Add-New-add-new-newsletter___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-newslettersubscriber%20copy",
    component: _95ec6cf8,
    name: "Admin-Add-New-add-new-newslettersubscriber copy___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-page",
    component: _5a3e8c0f,
    name: "Admin-Add-New-add-new-page___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-product",
    component: _59cebec2,
    name: "Admin-Add-New-add-new-product___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-report",
    component: _2a26aa34,
    name: "Admin-Add-New-add-new-report___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-return",
    component: _06bc3430,
    name: "Admin-Add-New-add-new-return___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-review",
    component: _46039a58,
    name: "Admin-Add-New-add-new-review___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-segment",
    component: _19969e3a,
    name: "Admin-Add-New-add-new-segment___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-shipment",
    component: _33dda99a,
    name: "Admin-Add-New-add-new-shipment___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-state",
    component: _3f303d41,
    name: "Admin-Add-New-add-new-state___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-tag",
    component: _62cd51ca,
    name: "Admin-Add-New-add-new-tag___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-taxrate",
    component: _6694b68a,
    name: "Admin-Add-New-add-new-taxrate___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-taxrule",
    component: _3de8fe52,
    name: "Admin-Add-New-add-new-taxrule___fr"
  }, {
    path: "/fr/Admin/Content/blog",
    component: _9d529964,
    name: "Admin-Content-blog___fr"
  }, {
    path: "/fr/Admin/Content/glossary",
    component: _98c3f46c,
    name: "Admin-Content-glossary___fr"
  }, {
    path: "/fr/Admin/Content/media-manager",
    component: _52b993c8,
    name: "Admin-Content-media-manager___fr"
  }, {
    path: "/fr/Admin/Content/pages",
    component: _77a0f0c8,
    name: "Admin-Content-pages___fr"
  }, {
    path: "/fr/Admin/Content/tags",
    component: _a76cb776,
    name: "Admin-Content-tags___fr"
  }, {
    path: "/fr/Admin/Customers/all-customers",
    component: _721d0311,
    name: "Admin-Customers-all-customers___fr"
  }, {
    path: "/fr/Admin/Customers/customer-groups",
    component: _7ce364ea,
    name: "Admin-Customers-customer-groups___fr"
  }, {
    path: "/fr/Admin/Customers/online-customers",
    component: _4c8afaa3,
    name: "Admin-Customers-online-customers___fr"
  }, {
    path: "/fr/Admin/Customers/segments",
    component: _71da3e68,
    name: "Admin-Customers-segments___fr"
  }, {
    path: "/fr/Admin/Marketing/communications",
    component: _334552f6,
    name: "Admin-Marketing-communications___fr"
  }, {
    path: "/fr/Admin/Marketing/events",
    component: _1416489c,
    name: "Admin-Marketing-events___fr"
  }, {
    path: "/fr/Admin/Marketing/invitations",
    component: _7fd3cdb1,
    name: "Admin-Marketing-invitations___fr"
  }, {
    path: "/fr/Admin/Marketing/newsletter",
    component: _b3b3f25c,
    name: "Admin-Marketing-newsletter___fr"
  }, {
    path: "/fr/Admin/Marketing/reviews",
    component: _3ceb965c,
    name: "Admin-Marketing-reviews___fr"
  }, {
    path: "/fr/Admin/Marketing/seo",
    component: _311ab394,
    name: "Admin-Marketing-seo___fr"
  }, {
    path: "/fr/Admin/Reports/business-intelligence",
    component: _90aa90ac,
    name: "Admin-Reports-business-intelligence___fr"
  }, {
    path: "/fr/Admin/Reports/customer-engagement",
    component: _c5e72be8,
    name: "Admin-Reports-customer-engagement___fr"
  }, {
    path: "/fr/Admin/Reports/customers-reports",
    component: _3173a5c5,
    name: "Admin-Reports-customers-reports___fr"
  }, {
    path: "/fr/Admin/Reports/marketing-reports",
    component: _d3ac7bd4,
    name: "Admin-Reports-marketing-reports___fr"
  }, {
    path: "/fr/Admin/Reports/products-reports",
    component: _4fd632c8,
    name: "Admin-Reports-products-reports___fr"
  }, {
    path: "/fr/Admin/Reports/reviews",
    component: _22a3ab19,
    name: "Admin-Reports-reviews___fr"
  }, {
    path: "/fr/Admin/Reports/sales-reports",
    component: _5cac3afc,
    name: "Admin-Reports-sales-reports___fr"
  }, {
    path: "/fr/Admin/Reports/statistics",
    component: _c71502d6,
    name: "Admin-Reports-statistics___fr"
  }, {
    path: "/fr/Admin/Sales/agreements",
    component: _83855bb0,
    name: "Admin-Sales-agreements___fr"
  }, {
    path: "/fr/Admin/Sales/certificates",
    component: _ee72d60a,
    name: "Admin-Sales-certificates___fr"
  }, {
    path: "/fr/Admin/Sales/credit-memos",
    component: _b68f0d38,
    name: "Admin-Sales-credit-memos___fr"
  }, {
    path: "/fr/Admin/Sales/invoices",
    component: _6db68ca5,
    name: "Admin-Sales-invoices___fr"
  }, {
    path: "/fr/Admin/Sales/orders",
    component: _441412e4,
    name: "Admin-Sales-orders___fr"
  }, {
    path: "/fr/Admin/Sales/payment-virtual-terminal",
    component: _1f68b824,
    name: "Admin-Sales-payment-virtual-terminal___fr"
  }, {
    path: "/fr/Admin/Sales/returns",
    component: _52dec754,
    name: "Admin-Sales-returns___fr"
  }, {
    path: "/fr/Admin/Sales/shipments",
    component: _59ef2a2c,
    name: "Admin-Sales-shipments___fr"
  }, {
    path: "/fr/Admin/Sales/transactions",
    component: _45ffb814,
    name: "Admin-Sales-transactions___fr"
  }, {
    path: "/fr/Admin/Shop/attributes",
    component: _78bafbaa,
    name: "Admin-Shop-attributes___fr"
  }, {
    path: "/fr/Admin/Shop/categories",
    component: _1a7eadef,
    name: "Admin-Shop-categories___fr"
  }, {
    path: "/fr/Admin/Shop/cities",
    component: _a064cbc8,
    name: "Admin-Shop-cities___fr"
  }, {
    path: "/fr/Admin/Shop/collections",
    component: _2ea96c5c,
    name: "Admin-Shop-collections___fr"
  }, {
    path: "/fr/Admin/Shop/countries",
    component: _4b99dcb1,
    name: "Admin-Shop-countries___fr"
  }, {
    path: "/fr/Admin/Shop/coupons",
    component: _7b2cafca,
    name: "Admin-Shop-coupons___fr"
  }, {
    path: "/fr/Admin/Shop/fullfillment",
    component: _49029ffa,
    name: "Admin-Shop-fullfillment___fr"
  }, {
    path: "/fr/Admin/Shop/inventory",
    component: _f94a714e,
    name: "Admin-Shop-inventory___fr"
  }, {
    path: "/fr/Admin/Shop/multi-vendor",
    component: _5da1fd6f,
    name: "Admin-Shop-multi-vendor___fr"
  }, {
    path: "/fr/Admin/Shop/products",
    component: _e21c3012,
    name: "Admin-Shop-products___fr"
  }, {
    path: "/fr/Admin/Shop/states",
    component: _38f8af56,
    name: "Admin-Shop-states___fr"
  }, {
    path: "/fr/Admin/Shop/tax-rate",
    component: _37970d56,
    name: "Admin-Shop-tax-rate___fr"
  }, {
    path: "/fr/Admin/Shop/tax-rule",
    component: _0eeb551e,
    name: "Admin-Shop-tax-rule___fr"
  }, {
    path: "/fr/Admin/System/general-settings",
    component: _81ef6398,
    name: "Admin-System-general-settings___fr"
  }, {
    path: "/fr/Admin/System/help",
    component: _35767b8d,
    name: "Admin-System-help___fr"
  }, {
    path: "/fr/Admin/System/integrations",
    component: _0ea25e6b,
    name: "Admin-System-integrations___fr"
  }, {
    path: "/fr/Admin/System/role-manager",
    component: _31b9c322,
    name: "Admin-System-role-manager___fr"
  }, {
    path: "/fr/Admin/System/settings",
    component: _5ba22522,
    name: "Admin-System-settings___fr"
  }, {
    path: "/es/Admin/Customers/customer/newcustomer",
    component: _0f36f970,
    name: "Admin-Customers-customer-newcustomer___es"
  }, {
    path: "/fr/Admin/Customers/customer/newcustomer",
    component: _0f36f970,
    name: "Admin-Customers-customer-newcustomer___fr"
  }, {
    path: "/es/Admin/Shop/Product/Edit/:id?",
    component: _3e76ee18,
    name: "Admin-Shop-Product-Edit-id___es"
  }, {
    path: "/fr/Admin/Shop/Product/Edit/:id?",
    component: _3e76ee18,
    name: "Admin-Shop-Product-Edit-id___fr"
  }, {
    path: "/Admin/Shop/Product/Edit/:id?",
    component: _3e76ee18,
    name: "Admin-Shop-Product-Edit-id___en"
  }, {
    path: "/es/Admin/Edit/Article/:id?",
    component: _3af41e4b,
    name: "Admin-Edit-Article-id___es"
  }, {
    path: "/es/Admin/Marketing/Email/:id?",
    component: _2f2cdfd7,
    name: "Admin-Marketing-Email-id___es"
  }, {
    path: "/fr/Admin/Edit/Article/:id?",
    component: _3af41e4b,
    name: "Admin-Edit-Article-id___fr"
  }, {
    path: "/fr/Admin/Marketing/Email/:id?",
    component: _2f2cdfd7,
    name: "Admin-Marketing-Email-id___fr"
  }, {
    path: "/Admin/Edit/Article/:id?",
    component: _3af41e4b,
    name: "Admin-Edit-Article-id___en"
  }, {
    path: "/Admin/Marketing/Email/:id?",
    component: _2f2cdfd7,
    name: "Admin-Marketing-Email-id___en"
  }, {
    path: "/",
    component: _8c3791c0,
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
