module.exports = {
  css: [
    '@/assets/css/custom-bulma.scss'
  ],
  /*
   ** Headers of the page
   */
  head: {
    title: 'Michael Santillán - Front-end Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Front-end Engineer | Javascript Lover | Vue/Nuxt enthusiast' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Michael Santillán' },
      { name: 'msapplication-config', content: '/browserconfig.xml?v=m2lnn8L340' },
      { name: 'theme-color', content: '#fff' },
      { name: 'robots', content: 'noodp' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Michael Santillán - Front-end Engineer' },
      { property: 'og:description', content: 'Front-end Engineer | Javascript Lover | Vue/Nuxt enthusiast' },
      { property: 'og:url', content: 'https://www.michaelsantillan.com' },
      { property: 'og:site_name', content: 'Michael Santillán - Front-end Engineer' },
      { property: 'og:image', content: '/site_shared.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: 'Front-end Engineer | Javascript Lover | Vue/Nuxt enthusiast' },
      { name: 'twitter:title', content: 'Michael Santillán - Front-end Engineer' },
      { name: 'twitter:site', content: '@_mikejavier' },
      { name: 'twitter:image', content: '/site_shared.png' },
      { name: 'google-site-verification', content: 'BgpI-6B9mNjw2qYXUz0Q7VnTuEr-bi9hmnuK4rBnBaA' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico?v=m2lnn8L340' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg?v=m2lnn8L340', color: '#000000' },
      { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png?v=m2lnn8L340', size: '180x180' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png?v=m2lnn8L340', size: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png?v=m2lnn8L340', size: '16x16' },
      { rel: 'manifest', href: '/manifest.json?v=m2lnn8L340' },
      { rel: 'canonical', href: 'https://www.michaelsantillan.com' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU', crossorigin: 'anonymous' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0088CC' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
