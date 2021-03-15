<template>
  <div class="block">
    <h2 class="has-text-weight-normal">{{ $t('aboutPage.projects.title') }}</h2>

    <i18n path="aboutPage.projects.description" tag="p">
      <template v-slot:github>
        <a href="https://github.com/mikejavier" target="_blank">Github</a>
      </template>
      <template v-slot:repositories>
        <a
          v-for="(repo, index) in repos"
          :key="index"
          :href="repo.html_url"
          target="_blank"
        >
          {{ repo.name + getDot(index) }}
        </a>
      </template>
    </i18n>
  </div>
</template>

<script>
export default {
  props: {
    repos: {
      required: true,
      type: Array
    }
  },

  methods: {
    getDot(index) {
      return index === this.repos.length - 1 ? '.' : ','
    }
  }
}
</script>
