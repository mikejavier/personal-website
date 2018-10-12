<template>
  <section>
    <app-header></app-header>
    <main>
      <about></about>
      <skills></skills>
      <blog :posts="posts"></blog>
      <projects :repos="repos"></projects>
    </main>
    <ms-footer></ms-footer>
  </section>
</template>

<script>
import axios from 'axios'
import MsHeader from '~/components/Header.vue'
import MsFooter from '~/components/Footer.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'
import Timeline from '~/components/Timeline.vue'
import Projects from '~/components/Projects.vue'
import Blog from '~/components/Blog.vue'

export default {
  components: {
    MsHeader,
    MsFooter,
    About,
    Skills,
    Timeline,
    Projects,
    Blog
  },

  asyncData () {
    return axios.all([
      axios.get('https://api.github.com/users/mikejavier/repos'),
      axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mikejavier%2F')
    ]).then(axios.spread((repos, posts) => {
      return {
        repos: repos.data,
        posts: posts.data.items
      }
    }))
  }
}
</script>

<style lang="scss"></style>
