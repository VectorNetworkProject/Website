const pkg = require('./package')

module.exports = {
  mode: 'spa',

  generate: {
    fallback: true
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Vector Network Project',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'MinecraftBEのゲームサーバーVectorNetwork公式サイトです。'},
      {name: 'author', content: 'VectorNetworkProject'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:url', content: 'https://www.vector-network.tk'},
      {name: 'msapplication-TileColor', content: '#bcbcbc'},
      {name: 'theme-color', content: '#bcbcbc'},
      {
        property: 'og:image',
        content: 'https://raw.githubusercontent.com/VectorNetworkProject/Website/master/static/home/Network.png'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-113467747-2'
    }],
    ['nuxt-i18n', {
      locales: [
        {code: 'ja', iso: 'ja_JP', file: 'ja-JP.js'},
        {code: 'en', iso: 'en-US', file: 'en-US.js'},
      ],
      defaultLocale: 'ja',
      vueI18n: {
        fallbackLocale: 'ja',
      },
      lazy: true,
      langDir: 'lang/'
    }],
    '@nuxtjs/axios'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
