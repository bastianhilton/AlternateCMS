
export default {
  target: 'static',
  head: {
    title: 'AlternateCMS',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.css'},
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/chart.js', mode: 'client' },
      { src: 'https://polyfill.io/v3/polyfill.min.js?features=es2015', mode: 'client' },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.js', mode: 'client' },
      { src: 'https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js', mode: 'client' },
    ]
  },

  css: [
    '~/static/styles/styles.css',
    'simplemde/dist/simplemde.min.css',
    '~/static/styles/snow.min.css',
    '~/static/styles/bootstrap-table.min.css'
  ],

  script: [
    { src: '~/static/styles/bootstrap-table.js', mode: 'client'},
  ],

  plugins: [
    { src: '~plugins/simplemde.js', mode: 'client' },
    { src: '~plugins/main.js', mode: 'client' },
    { src: '~plugins/vue-scrollama.js', mode: 'client' },
    { src: '~/plugins/client.js'},
    // { src: '~plugins/vue-chart.js', mode: 'client' },
  ],

  components: true,
  middleware: [],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/moment',
    '@braid/vue-formulate/nuxt',
  ],

  optimizedImages: {
    optimizeImages: true
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    '@nuxtjs/apollo',
    '@nuxtjs/auth-next',
    'nuxt-leaflet',
    '@nuxtjs/i18n',
    '@nuxtjs/gtm',
    'nuxt-socket-io',
    '@nuxtjs/universal-storage',
    '@nuxtjs/recaptcha',
    '@nuxtjs/google-analytics',
    '@nuxtjs/robots',
    '@nuxtjs/google-adsense',
    '@nuxtjs/sitemap',
    '@nuxtjs/vuetify',
    'nuxt-helmet',
  ],

  helmet: {
    /*
    frameguard: false,
    ...
    */
 },
  // Modules Options
    'google-adsense': {
        id: 'ca-pub-#########'
    },

  sitemap: {
    hostname: 'http://localhost'
  },

  googleAnalytics: {
    id: 'UA-XXX-X'
  },

  storage: {
      vuex: {
        namespace: 'storage'
      },
      cookie: {
        prefix: '',
        options: {
          path: '/'
        }
      },
      localStorage: {
        prefix: ''
      },
      ignoreExceptions: false,
  },

  io: {
    sockets: [ // Required
      { // At least one entry is required
        name: 'home',
        url: 'http://localhost:3000',
        default: true,
      },
    ]
  },

  gtm: {
    id: 'GTM-XXXXXXX'
  },

  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },

  auth: {
    
  },

  axios: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000',
  },
  
  apollo: {
    cookieAttributes: {
      expires: 7, // optional, default: 7 (days)
    },
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    authenticationType: 'Bearer', // optional, default: 'Bearer'
    // optional
    errorHandler: '~/plugins/apollo-error-handler.js',
    // required
    clientConfigs: {
      default: '~/apollo/clientConfig.js'
    }
  },

  sentry: {
    dsn: 'https://b54ea5cfd2cc4c23b49c3d5c6fbbd351@o996770.ingest.sentry.io/6140531',
    config: {
    }
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  content: {},

  formulate: {
    configPath: '~/formulate.config.js'
  },

  publicRuntimeConfig: {
    recaptcha: {
      siteKey: process.env.RECAPTCHA_SITE_KEY, // for example
      version: 3
    }
  },

  build: {
    extend(config, ctx) {},
  },
}
