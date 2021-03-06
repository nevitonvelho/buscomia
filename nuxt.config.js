export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cupom de Desconto VÁLIDO Hoje → 100% Válido → busconomia.com.br',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'lomadee-verification', content: '22983943' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      "normalize.css/normalize.css","@/assets/scss/base.scss", "@/assets/scss/custon.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Lexend: {
        wght: [400, 600, 800],
        ital: [300]
      },
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'GTM-TNN23S7',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  }
}
