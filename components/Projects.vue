<template>
  <section class="section">
    <h1 class="title">Open-source</h1>
    <p>
      In my free time I try contribute in cool projects...
      <a
      v-for="(repo, index) in repositories"
      :key="index"
      :href="repo.html_url"
      target="_blank">
        {{ repo.name + getDot(index) }}
      </a>
      Also turning crazy
      <a
      href="https://github.com/mikejavier/ideas"
      target="_blank">
        ideas
      </a>
      into code.
      You can find more on
      <a
        href="https://github.com/mikejavier?tab=repositories"
        target="_blank">GitHub</a>.
    </p>
  </section>
</template>

<script>
export default {
  name: 'Projects',

  props: {
    repositories: {
      type: Array,
      required: true
    }
  },

  methods: {
    getDot (index) {
      return index === this.repositories.length - 1 ? '.' : ','
    }
  }
}
</script>
