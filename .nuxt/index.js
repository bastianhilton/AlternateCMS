import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_558287a0 from 'nuxt_plugin_plugin_558287a0' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_plugin_733b5854 from 'nuxt_plugin_plugin_733b5854' // Source: .\\vuetify\\plugin.js (mode: 'all')
import nuxt_plugin_sentryserver_d4f08ef2 from 'nuxt_plugin_sentryserver_d4f08ef2' // Source: .\\sentry.server.js (mode: 'server')
import nuxt_plugin_sentryclient_2fce46ff from 'nuxt_plugin_sentryclient_2fce46ff' // Source: .\\sentry.client.js (mode: 'client')
import nuxt_plugin_nuxtjsdarkmodejsmodule_53302d3c from 'nuxt_plugin_nuxtjsdarkmodejsmodule_53302d3c' // Source: .\\nuxtjs-darkmode-js-module.js (mode: 'all')
import nuxt_plugin_image_d8d12e84 from 'nuxt_plugin_image_d8d12e84' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_adsbygoogle_44703479 from 'nuxt_plugin_adsbygoogle_44703479' // Source: .\\adsbygoogle.js (mode: 'all')
import nuxt_plugin_googleanalytics_64b1f6fa from 'nuxt_plugin_googleanalytics_64b1f6fa' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_storage_d6c179c4 from 'nuxt_plugin_storage_d6c179c4' // Source: .\\storage.js (mode: 'all')
import nuxt_plugin_nuxtsocketio_c189f202 from 'nuxt_plugin_nuxtsocketio_c189f202' // Source: .\\nuxt-socket-io.js (mode: 'all')
import nuxt_plugin_gtm_162f4759 from 'nuxt_plugin_gtm_162f4759' // Source: .\\gtm.js (mode: 'all')
import nuxt_plugin_pluginutils_187ca10b from 'nuxt_plugin_pluginutils_187ca10b' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_bc4dd0d4 from 'nuxt_plugin_pluginrouting_bc4dd0d4' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_d7fa28ce from 'nuxt_plugin_pluginmain_d7fa28ce' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtleaflet_1f7018bc from 'nuxt_plugin_nuxtleaflet_1f7018bc' // Source: .\\nuxt-leaflet.js (mode: 'client')
import nuxt_plugin_apollomodule_814e76e2 from 'nuxt_plugin_apollomodule_814e76e2' // Source: .\\apollo-module.js (mode: 'all')
import nuxt_plugin_workbox_47f4fc1f from 'nuxt_plugin_workbox_47f4fc1f' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_1b253cc2 from 'nuxt_plugin_metaplugin_1b253cc2' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_11d5f1da from 'nuxt_plugin_iconplugin_11d5f1da' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_aedf287a from 'nuxt_plugin_axios_aedf287a' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_nuxtplugin42f9166c_588c1882 from 'nuxt_plugin_nuxtplugin42f9166c_588c1882' // Source: .\\nuxt.plugin.42f9166c.js (mode: 'all')
import nuxt_plugin_moment_78289e35 from 'nuxt_plugin_moment_78289e35' // Source: .\\moment.js (mode: 'all')
import nuxt_plugin_simplemde_45e761dc from 'nuxt_plugin_simplemde_45e761dc' // Source: ..\\client\\plugins\\simplemde.js (mode: 'client')
import nuxt_plugin_main_101ad5e7 from 'nuxt_plugin_main_101ad5e7' // Source: ..\\client\\plugins\\main.js (mode: 'client')
import nuxt_plugin_paypal_f3b367a6 from 'nuxt_plugin_paypal_f3b367a6' // Source: ..\\client\\plugins\\paypal.js (mode: 'client')
import nuxt_plugin_client_14eb6855 from 'nuxt_plugin_client_14eb6855' // Source: ..\\client\\plugins\\client.js (mode: 'client')
import nuxt_plugin_libnuxtclientinitpluginclient5afc8b3a_4347f19a from 'nuxt_plugin_libnuxtclientinitpluginclient5afc8b3a_4347f19a' // Source: .\\lib.nuxt-client-init.plugin.client.5afc8b3a.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"AlternateCMS","meta":[{"name":"robots","content":"noindex,noarchive,nofollow"},{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"name":"csrf-token","content":"{{csrfToken}}"},{"name":"format-detection","content":"telephone=no"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"alternatenuxt"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"alternatenuxt"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"alternatenuxt"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F5.15.1\u002Fcss\u002Fall.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:300,400,500,700&display=swap"},{"rel":"stylesheet","href":"\u002Fassets\u002Fweb\u002Fassets\u002Fmobirise-icons2\u002Fmobirise2.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Ftether\u002Ftether.min.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fdropdown\u002Fcss\u002Fstyle.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fsocicon\u002Fcss\u002Fstyles.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Ftheme\u002Fcss\u002Fstyle.css"},{"rel":"stylesheet","href":"\u002Fassets\u002Fmobirise\u002Fcss\u002Fmbr-additional.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fmdb-ui-kit\u002F3.10.0\u002Fmdb.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"},{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.e3e9fb.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.e3e9fb.png","sizes":"512x512"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.12b2966c.json","hid":"manifest"}],"script":[{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fchart.js","mode":"client"},{"src":"https:\u002F\u002Fpolyfill.io\u002Fv3\u002Fpolyfill.min.js?features=es2015","mode":"client"},{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fjquery\u002Fdist\u002Fjquery.min.js","mode":"client"},{"src":"\u002Fassets\u002Fpopper\u002Fpopper.min.js","mode":"client"},{"src":"\u002Fassets\u002Ftether\u002Ftether.min.js","mode":"client"},{"src":"\u002Fassets\u002Fsmoothscroll\u002Fsmooth-scroll.js","mode":"client"},{"src":"\u002Fassets\u002Fdropdown\u002Fjs\u002Fnav-dropdown.js","mode":"client"},{"src":"\u002Fassets\u002Fdropdown\u002Fjs\u002Fnavbar-dropdown.js","mode":"client"},{"src":"\u002Fassets\u002Ftouchswipe\u002Fjquery.touch-swipe.min.js","mode":"client"},{"src":"\u002Fassets\u002Ftheme\u002Fjs\u002Fscript.js","mode":"client"},{"src":"https:\u002F\u002Feditor.unlayer.com\u002Fembed.js","mode":"client"},{"hid":"adsbygoogle-script","defer":true,"crossorigin":"anonymous","src":"\u002F\u002Fpagead2.googlesyndication.com\u002Fpagead\u002Fjs\u002Fadsbygoogle.js?client=ca-google"},{"hid":"adsbygoogle","innerHTML":"if (!window.__abg_called){ (window.adsbygoogle = window.adsbygoogle || []); adsbygoogle.pauseAdRequests=0;\n          adsbygoogle.push({\n      google_ad_client: \"ca-google\",\n      overlays: {bottom: false},\n      \n    }); window.__abg_called = true;}"}],"style":[],"__dangerouslyDisableSanitizersByTagID":{"adsbygoogle":["innerHTML"]},"htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_558287a0 === 'function') {
    await nuxt_plugin_plugin_558287a0(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_733b5854 === 'function') {
    await nuxt_plugin_plugin_733b5854(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_sentryserver_d4f08ef2 === 'function') {
    await nuxt_plugin_sentryserver_d4f08ef2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_sentryclient_2fce46ff === 'function') {
    await nuxt_plugin_sentryclient_2fce46ff(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtjsdarkmodejsmodule_53302d3c === 'function') {
    await nuxt_plugin_nuxtjsdarkmodejsmodule_53302d3c(app.context, inject)
  }

  if (typeof nuxt_plugin_image_d8d12e84 === 'function') {
    await nuxt_plugin_image_d8d12e84(app.context, inject)
  }

  if (typeof nuxt_plugin_adsbygoogle_44703479 === 'function') {
    await nuxt_plugin_adsbygoogle_44703479(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_64b1f6fa === 'function') {
    await nuxt_plugin_googleanalytics_64b1f6fa(app.context, inject)
  }

  if (typeof nuxt_plugin_storage_d6c179c4 === 'function') {
    await nuxt_plugin_storage_d6c179c4(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtsocketio_c189f202 === 'function') {
    await nuxt_plugin_nuxtsocketio_c189f202(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_162f4759 === 'function') {
    await nuxt_plugin_gtm_162f4759(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_187ca10b === 'function') {
    await nuxt_plugin_pluginutils_187ca10b(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_bc4dd0d4 === 'function') {
    await nuxt_plugin_pluginrouting_bc4dd0d4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_d7fa28ce === 'function') {
    await nuxt_plugin_pluginmain_d7fa28ce(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nuxtleaflet_1f7018bc === 'function') {
    await nuxt_plugin_nuxtleaflet_1f7018bc(app.context, inject)
  }

  if (typeof nuxt_plugin_apollomodule_814e76e2 === 'function') {
    await nuxt_plugin_apollomodule_814e76e2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_47f4fc1f === 'function') {
    await nuxt_plugin_workbox_47f4fc1f(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_1b253cc2 === 'function') {
    await nuxt_plugin_metaplugin_1b253cc2(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_11d5f1da === 'function') {
    await nuxt_plugin_iconplugin_11d5f1da(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_aedf287a === 'function') {
    await nuxt_plugin_axios_aedf287a(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtplugin42f9166c_588c1882 === 'function') {
    await nuxt_plugin_nuxtplugin42f9166c_588c1882(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_78289e35 === 'function') {
    await nuxt_plugin_moment_78289e35(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_simplemde_45e761dc === 'function') {
    await nuxt_plugin_simplemde_45e761dc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_main_101ad5e7 === 'function') {
    await nuxt_plugin_main_101ad5e7(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_paypal_f3b367a6 === 'function') {
    await nuxt_plugin_paypal_f3b367a6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_client_14eb6855 === 'function') {
    await nuxt_plugin_client_14eb6855(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_libnuxtclientinitpluginclient5afc8b3a_4347f19a === 'function') {
    await nuxt_plugin_libnuxtclientinitpluginclient5afc8b3a_4347f19a(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
