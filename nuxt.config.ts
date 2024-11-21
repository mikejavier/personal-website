// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  target: 'static',
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active'
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],
  site: { 
    url: 'https://michaelsantillan.com', 
    name: 'Michael Santillán - Tech team leader' 
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
    legacy: false,
    fallbackLocale: 'en',
    vueI18n: './i18n.options.ts'
  },

  /*
   ** Headers of the page
   */
  app:{
    head: {
      title: 'Michael Santillán - Tech team leader',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'explorer of technology, travel enthusiast, online privacy advocate, open-source supporter, and seeker of new experiences.'
        },
        { name: 'mobile-web-app-capable', content: 'yes' },
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
          content: 'Michael Santillán - Tech team leader'
        },
        {
          property: 'og:description',
          content:
            'explorer of technology, travel enthusiast, online privacy advocate, open-source supporter, and seeker of new experiences.'
        },
        { property: 'og:url', content: 'https://www.michaelsantillan.com' },
        {
          property: 'og:site_name',
          content: 'Michael Santillán - Tech team leader'
        },
        { property: 'og:image', content: '/website-share-card.jpg' },
        { name: 'twitter:card', content: '/website-share-card.jpg' },
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
        },
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css'
        }
      ]
    }
  },
  
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0088CC' },
})