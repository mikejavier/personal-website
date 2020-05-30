import blogs from './content/blogs.json'
import locales from './static/locales'

module.exports = {
  mode: 'universal',

  generate: {
    routes: [].concat(blogs.map(blog => `/blog/${blog.slug}`))
  },

  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active'
  },

  plugins: ['~/plugins/filters.js'],

  modules: ['nuxt-i18n', '@nuxtjs/style-resources'],

  buildModules: ['@nuxtjs/google-analytics'],

  googleAnalytics: {
    id: 'UA-40750162-3'
  },

  i18n: {
    baseUrl: 'https://michaelsantillan.com',
    seo: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        label: 'english'
      },
      {
        code: 'es',
        iso: 'es-ES',
        label: 'spanish'
      },
      {
        code: 'pt',
        iso: 'pt-BR',
        label: 'portuguese'
      }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: locales
    }
  },

  styleResources: {
    scss: ['~/assets/css/_variables.scss']
  },

  css: ['~/assets/css/main.scss'],
  /*
   ** Headers of the page
   */
  head: {
    title: 'Michael Santillán - Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'JavaScript Developer | Javascript Lover | Vue/Nuxt enthusiast'
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Michael Santillán' },
      {
        name: 'msapplication-config',
        content: '/browserconfig.xml?v=m2lnn8L340'
      },
      { name: 'theme-color', content: '#fff' },
      { name: 'robots', content: 'index,follow' },
      { name: 'google', content: 'nositelinkssearchbox' },
      { name: 'google', content: 'notranslate' },
      { name: 'generator', content: 'nuxtjs' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'referrer', content: 'no-referrer' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Michael Santillán - JavaScript Developer'
      },
      {
        property: 'og:description',
        content: 'JavaScript Developer | Javascript Lover | Vue/Nuxt enthusiast'
      },
      { property: 'og:url', content: 'https://www.michaelsantillan.com' },
      {
        property: 'og:site_name',
        content: 'Michael Santillán - JavaScript Developer'
      },
      { property: 'og:image', content: '/site_shared.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:description',
        content: 'JavaScript Developer | Javascript Lover | Vue/Nuxt enthusiast'
      },
      {
        name: 'twitter:title',
        content: 'Michael Santillán - JavaScript Developer'
      },
      { name: 'twitter:site', content: '@_mikejavier' },
      { name: 'twitter:image', content: '/site_shared.png' },
      {
        name: 'google-site-verification',
        content: 'BgpI-6B9mNjw2qYXUz0Q7VnTuEr-bi9hmnuK4rBnBaA'
      }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico?v=m2lnn8L340' },
      {
        rel: 'mask-icon',
        href: '/favicons/safari-pinned-tab.svg?v=m2lnn8L340',
        color: '#000000'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon.png?v=m2lnn8L340',
        size: '180x180'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-32x32.png?v=m2lnn8L340',
        size: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-16x16.png?v=m2lnn8L340',
        size: '16x16'
      },
      { rel: 'manifest', href: '/manifest.json?v=m2lnn8L340' },
      { rel: 'canonical', href: 'https://www.michaelsantillan.com' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
        integrity:
          'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'
      }
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
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      })
    }
  }
}
