<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="nuxt.err ? 'nuxt' : layout"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/css/custom-bulma.scss'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"Michael Santillán - Desenvolvedor Front-End","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Trabalho com desenvolvimento web utilizando as melhores técnicas e padrões atuais."},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-status-bar-style","content":"black"},{"name":"apple-mobile-web-app-title","content":"Michael Santillán"},{"name":"msapplication-config","content":"/browserconfig.xml?v=m2lnn8L340"},{"name":"theme-color","content":"#fff"},{"name":"robots","content":"noodp"},{"property":"og:locale","content":"pt_BR"},{"property":"og:type","content":"website"},{"property":"og:title","content":"Michael Santillán - Desenvolvedor Front-End"},{"property":"og:description","content":"Trabalho com desenvolvimento web utilizando as melhores técnicas e padrões atuais."},{"property":"og:url","content":"https://www.michaelsantillan.com"},{"property":"og:site_name","content":"Michael Santillán - Desenvolvedor Front-End"},{"property":"og:image","content":"/site_shared.png"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:description","content":"Trabalho com desenvolvimento web utilizando as melhores técnicas e padrões atuais."},{"name":"twitter:title","content":"Michael Santillán - Desenvolvedor Front-End"},{"name":"twitter:site","content":"@_mikejavier"},{"name":"twitter:image","content":"/site_shared.png"},{"name":"google-site-verification","content":"BgpI-6B9mNjw2qYXUz0Q7VnTuEr-bi9hmnuK4rBnBaA"}],"link":[{"rel":"shortcut icon","href":"/favicon.ico?v=m2lnn8L340"},{"rel":"mask-icon","href":"/favicons/safari-pinned-tab.svg?v=m2lnn8L340","color":"#000000"},{"rel":"apple-touch-icon","href":"/favicons/apple-touch-icon.png?v=m2lnn8L340","size":"180x180"},{"rel":"icon","type":"image/png","href":"/favicons/favicon-32x32.png?v=m2lnn8L340","size":"32x32"},{"rel":"icon","type":"image/png","href":"/favicons/favicon-16x16.png?v=m2lnn8L340","size":"16x16"},{"rel":"manifest","href":"/manifest.json?v=m2lnn8L340"},{"rel":"canonical","href":"https://www.michaelsantillan.com"},{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"},{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},{"rel":"stylesheet","href":"https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css?family=Open+Sans:400,700"}],"style":[],"script":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options._nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

