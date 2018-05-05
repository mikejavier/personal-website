<template>
  <section class="section">
    <div class="container">

      <h1 class="title">Projects</h1>

      <h2 class="subtitle">In my freetime develop or contribute some projects to learn.</h2>

      <div class="tabs is-boxed">
        <ul>
          <li :class="{'is-active': !fork}">
            <a @click.prevent="projectsToogle('source')"><span>Developments</span></a>
          </li>
          <li :class="{'is-active': fork}">
            <a @click.prevent="projectsToogle('fork')"><span>Contributions</span></a>
          </li>
        </ul>
      </div>

      <div class="columns is-multiline is-tablet">
        <div class="column is-one-quarter" v-for="(repo, index) in repos" :key="index" v-if="repo.fork === fork">
          <article class="card">
            <header class="card-header">
              <p class="card-header-title">{{repo.name}}</p>
              <a :href="repo.html_url" target="_blank" class="card-header-icon">
                <span class="icon">
                  <i class="fa fa-github" ></i>
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                <p>{{repo.description}}</p>
                <span class="tag is-light">{{repo.language ? repo.language : 'Markdown'}}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: '',
  props: ['repos'],
  data () {
    return {
      fork: false,
      activeTab: 'source'
    }
  },
  methods: {
    projectsToogle (activeTab) {
      if (this.activeTab === activeTab) return
      this.fork = !this.fork
      this.activeTab = activeTab
    }
  }
}
</script>
