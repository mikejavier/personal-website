<template>
  <div>
    <h1 class="title is-1 has-text-weight-medium">
      {{ article.title }}
    </h1>

    <h2 class="subtitle">{{ article.summary }}</h2>

    <div class="block">
      <span class="has-text-grey" :datetime="article.date"
        >{{ new Date(article.createdAt) | fullDate($i18n.locale) }} ({{
          $t('updated')
        }}
        {{ new Date(article.updatedAt) | dateSince($i18n.locale) }})</span
      >
      <span class="has-text-grey"
        >· {{ `${article.readingTime} ${$t('read')}` }}</span
      >
    </div>

    <nav class="tags">
      <nuxt-link
        v-for="(tag, index) in article.tags"
        :key="index"
        :to="localePath({ name: 'blog', query: { tag } })"
        class="tag is-link is-light"
        >#{{ tag }}</nuxt-link
      >
    </nav>

    <nuxt-content :document="article" class="content" />

    <hr />

    <div class="block">
      <!-- <script
        src="https://utteranc.es/client.js"
        repo="mikejavier/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async
      ></script> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',

  async asyncData({ $content, params, redirect }) {
    const article = await $content('articles', params.slug)
      .fetch()
      .catch(() => {
        redirect('/404')
      })

    return { article }
  },

  head() {
    return {
      title: `${this.article.title} - Michael Santillán | blog`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.summary
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.icon.icon-link {
  width: 20px;
  height: 20px;
  position: relative;
  margin-right: 3px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  font-size: 16px;
  text-rendering: auto;
  line-height: 1;

  &:before {
    position: absolute;
    content: '\f0c1';
    font-family: 'Font Awesome 5 Free';
    top: 4px;
    left: 0;
  }
}

.utterances {
  max-width: none;
}
</style>
