const baseHref = process.env.BASE_HREF || '/';

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'UPay',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {},
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '../node_modules/@ionic/core/css/core.css',
    '../node_modules/@ionic/core/css/normalize.css',
    '../node_modules/@ionic/core/css/structure.css',
    '../node_modules/@ionic/core/css/typography.css',
    '../node_modules/@ionic/core/css/ionic.bundle.css',
    '../assets/style/custom.css',
    '../assets/style/theme.css'

  ],

  generate: {
    routes: [
      '/',
    ],
  },
  router: {
    // router with correct public path
    base: baseHref,
    mode: 'history',
    linkActiveClass: 'active-link'
  },
  env: {
    pKey: process.env.P_KEY,
    sKey: process.env.S_KEY,
  } ,

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/ionic.js', mode: 'client'},
    {src: '~/plugins/flutterwave_pay.js', mode: 'client'},
    {src: '~/plugins/helpers/utils.js', mode: 'client'},
    {src: '~/plugins/helpers/user.js', mode: 'client'},
    {src: '~/plugins/helpers/http.js', mode: 'client'},
    {src: '~/plugins/helpers/wallet.js', mode: 'client'},


  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    prefix: 'https://flutterwave-api-endpoints.herokuapp.com/api/v1',
    //proxy: true,
    // credentials: true,
    browserBaseURL: 'https://flutterwave-api-endpoints.herokuapp.com/api/v1'


  },

  proxy: {
    '/api/': {target: 'https://api.flutterwave.com/v3', pathRewrite: {'^/api/': ''}}
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
