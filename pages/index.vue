<template>
  <section>
    <app-header></app-header>
    <main>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <about></about>
            <skills></skills>
            <projects :repositories="contributedRepos"></projects>
            <blog :posts="posts"></blog>
          </div>
        </div>
      </div>
    </main>
    <app-footer></app-footer>
  </section>
</template>

<script>
import axios from 'axios'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'
import Blog from '~/components/Blog.vue'
import Projects from '~/components/Projects.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    About,
    Skills,
    Projects,
    Blog
  },
  async asyncData () {
    try {
      const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mikejavier%2F')
      const posts = response.data.items

      const repos = await axios.get('https://api.github.com/users/mikejavier/repos?client_id=f5095e6204e7bfccb7be&client_secret=9509f372612b4b1719bc3fdc465f06e6c2fb2107&per_page=100')
      const forkedRepos = repos.data.filter(({fork}) => fork)
      const promises = forkedRepos.map(async (repo) => {
        const { data } = await axios.get(`${repo.contributors_url}?client_id=f5095e6204e7bfccb7be&client_secret=9509f372612b4b1719bc3fdc465f06e6c2fb2107`)
        repo.contributors = data
        return repo
      })

      const forkedReposWithContributors = await Promise.all(promises)

      const contributedRepos = forkedReposWithContributors.filter(({contributors}) => contributors.some(({login}) => login === 'mikejavier'))

      return { posts, contributedRepos }
    } catch (e) {
      return e
    }
  }
}
</script>
