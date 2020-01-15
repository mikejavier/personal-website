<template>
  <div class="content">
    <section class="section">
      <div class="content">
        <p>{{ $t('aboutPage.intro', { age: getAge }) }}</p>
        <i18n path="aboutPage.work" tag="p">
          <template v-slot:vizir>
            <a href="https://vizir.com.br/" target="_blank">Vizir</a>
          </template>
          <template v-slot:leet>
            <a href="https://leet.tech/" target="_blank">Leet</a>
          </template>
          <template v-slot:postgrain>
            <a href="https://postgrain.com/" target="_blank">Postgrain</a>
          </template>
          <template v-slot:linkedin>
            <a href="http://br.linkedin.com/in/mikejavier/" target="_blank"
              >Linkedin</a
            >
          </template>
        </i18n>
        <i18n path="aboutPage.openSource" tag="p">
          <template v-slot:github>
            <a href="https://github.com/mikejavier" target="_blank">Github</a>
          </template>
          <template v-slot:repositories>
            <a
              v-for="(repo, index) in contributedRepos"
              :key="index"
              :href="repo.html_url"
              target="_blank"
            >
              {{ repo.name + getDot(index) }}
            </a>
          </template>
        </i18n>
        <i18n path="aboutPage.readings.text1" tag="p">
          <template v-slot:goodreads>
            <a href="https://www.goodreads.com/mikejavier" target="_blank"
              >Goodreads</a
            >
          </template>
        </i18n>
        <p>{{ $t('aboutPage.readings.text2') }}</p>
        <app-books />
        <i18n path="aboutPage.contact" tag="p">
          <template v-slot:twitter>
            <a href="http://www.twitter.com/_mikejavier" target="_blank"
              >Twitter</a
            >
          </template>
          <template v-slot:telegram>
            <a href="https://t.me/mikejavier" target="_blank">Telegram</a>
          </template>
        </i18n>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AppBooks from '@/components/AppBooks'

export default {
  components: {
    AppBooks
  },

  async asyncData() {
    try {
      const repos = await axios.get(
        'https://api.github.com/users/mikejavier/repos?client_id=f5095e6204e7bfccb7be&client_secret=9509f372612b4b1719bc3fdc465f06e6c2fb2107&per_page=100'
      )
      const forkedRepos = repos.data.filter(({ fork }) => fork)
      const promises = forkedRepos.map(async repo => {
        const { data } = await axios.get(
          `${repo.contributors_url}?client_id=f5095e6204e7bfccb7be&client_secret=9509f372612b4b1719bc3fdc465f06e6c2fb2107`
        )
        repo.contributors = data
        return repo
      })

      const forkedReposWithContributors = await Promise.all(promises)

      const contributedRepos = forkedReposWithContributors.filter(
        ({ contributors }) =>
          contributors.some(({ login }) => login === 'mikejavier')
      )

      return { contributedRepos }
    } catch (e) {
      return e
    }
  },
  computed: {
    getAge() {
      const today = new Date()
      return today.getFullYear() - 1992
    }
  },
  methods: {
    getDot(index) {
      return index === this.contributedRepos.length - 1 ? '' : ','
    }
  },
  head() {
    return {
      script: [
        {
          src:
            "https://www.goodreads.com/review/grid_widget/106833259.Michael's%20read%20book%20montage?cover_size=small&hide_link=true&hide_title=true&num_books=5&order=d&shelf=read&sort=date_read&widget_id=1578771578",
          body: true
        }
      ]
    }
  }
}
</script>
