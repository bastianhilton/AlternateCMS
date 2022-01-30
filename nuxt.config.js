export default {
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
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.css'
      },
    ],
    script: [{ src: 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.js', mode: 'client' },
      { src: 'https://cdn.headwayapp.co/widget.js', mode: 'client' },
      { src: 'https://cdn.jsdelivr.net/npm/chart.js', mode: 'client' },
    ]
  },

  css: [
    '~/static/styles/styles.css',
    'simplemde/dist/simplemde.min.css',
  ],

  script: [],

  /* router: {
    middleware: ['ssr-cookie']
  }, */

  plugins: [
    { src: '~plugins/simplemde.js', mode: 'client' },
    // '~/plugins/auth.js'
  ],

  components: true,
  middleware: ['auth'],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '@aceforth/nuxt-optimized-images',
    'nuxt-client-init-module',
    'nuxt-headway',
  ],

  headway: {
    account: '7zjnG7'
  },

  optimizedImages: {
    optimizeImages: true
  },

  modules: [
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/sentry',
    ['nuxt-stripe-module', {
      publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
    }],
    // 'nuxt-adyen-module',
    {
      src: '@nuxtjs/lunr-module',
      // These are the default options:
      options: {
        includeComponent: true,
        globalComponent: false,
        css: true,
        defaultLanguage: 'en',
        languages: false,
        path: 'search-index',
        ref: 'id',
        fields: [
          'title',
          'body'
        ]
      }
    },
    'nuxt-highcharts',
    '@nuxtjs/apollo',
    '@nuxtjs/auth-next',
    'nuxt-helmet',
    '@nuxtjs/moment',
  ],

  helmet: {
    /*
    frameguard: false,
    ...
    */
 },

  auth: {
    strategies: {
      graphql: {
        scheme: '~/schemes/graphqlScheme.js',
      },
    },
    redirect: {
      login: '/login',
      logout: '/login?logout=true',
      callback: false,
      home: '/dashboard',
    },
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

  privateRuntimeConfig: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
  },

  serverMiddleware: [
    { path: '/api', handler: '~/api'},
  ],

  build: {
    transpile: [],
    extend(config, ctx) {
      
    }
  },
}
