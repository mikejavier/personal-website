<template>
  <div>
    <div class="block">
      <h1 v-if="hasQueryParams" class="title">#{{ getTag }}</h1>
      <div v-else class="field">
        <h1 class="title">{{ $t('blogPage.title') }}</h1>
        <h2 class="subtitle">{{ $t('blogPage.subtitle') }}</h2>
        <div class="control is-expanded">
          <input
            v-model="searchQuery"
            class="input"
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
      <div v-if="isFetching" class="has-text-centered">
        <div class="lds-dual-ring"></div>
      </div>
      <p v-else class="has-text-centered">
        {{ $t('blogPage.articlesNotFound') }}
      </p>
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
      isFetching: false,
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

    this.isFetching = true

    this.articles = await this.$content('articles').fetch()

    this.isFetching = false
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
<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #b5b5b5;
  border-color: #b5b5b5 transparent #b5b5b5 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
