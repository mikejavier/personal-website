<template>
  <div class="content">
    <the-intro />
    <the-skills />
    <the-works />
    <the-projects :repos="contributedRepos" />
  </div>
</template>

<script>
import axios from 'axios'
import TheIntro from '@/components/TheIntro'
import TheSkills from '@/components/TheSkills'
import TheWorks from '@/components/TheWorks'
import TheProjects from '@/components/TheProjects'

export default {
  components: {
    TheIntro,
    TheSkills,
    TheWorks,
    TheProjects
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
  }
}
</script>
