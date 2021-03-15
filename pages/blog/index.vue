<template>
  <div>
    <div class="block">
      <h1 class="title" v-if="hasQueryParams">#{{ getTag }}</h1>
      <div class="field" v-else>
        <div class="control is-expanded">
          <input
            class="input"
            v-model="searchQuery"
            type="search"
            autocomplete="off"
            :placeholder="$t('findAnArticle')"
          />
        </div>
      </div>
    </div>
    <hr />
    <div v-if="hasArticles">
      <app-article
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      />
    </div>
    <div v-else class="section">
      <p class="has-text-centered">{{ $t('articlesNotFound') }}</p>
    </div>
  </div>
</template>

<script>
import AppArticle from '@/components/AppArticle'

export default {
  name: 'Blog',

  components: {
    AppArticle
  },

  data() {
    return {
      articles: [],
      searchQuery: ''
    }
  },

  computed: {
    getTag() {
      const { tag } = this.$route.query

      return tag
    },

    hasQueryParams() {
      return Object.keys(this.$route.query).length !== 0
    },

    hasArticles() {
      return !!this.articles.length
    }
  },

  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = await this.$content('articles')
          .sortBy('createdAt', 'desc')
          .fetch()
        return
      }
      this.articles = await this.$content('articles')
        .search(searchQuery)
        .sortBy('createdAt', 'desc')
        .fetch()
    }
  },

  async mounted() {
    if (Object.keys(this.$route.query).includes('tag')) {
      const { tag } = this.$route.query

      this.articles = await this.$content('articles')
        .where({ tags: { $contains: tag } })
        .sortBy('createdAt', 'desc')
        .fetch()

      return
    }

    this.articles = await this.$content('articles').fetch()
  },

  head() {
    return {
      title: 'Blog - Michael Santillán',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The list of Michael Santillán articles'
        }
      ]
    }
  }
}
</script>
