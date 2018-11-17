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
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'MinecraftBEのゲームサーバーVectorNetwork公式サイトです。' },
      { name: 'author', content: 'VectorNetworkProject' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://www.vector-network.tk' },
      { name: 'msapplication-TileColor', content: '#bcbcbc' },
      { name: 'theme-color', content: '#bcbcbc' },
      { property: 'og:image', content: 'https://github.com/VectorNetworkProject/Website/blob/master/assets/home/Vector_Network.png?raw=true' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

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
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
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
