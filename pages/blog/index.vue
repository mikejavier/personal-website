<template>
  <div v-if="hasPost" class="section">
    <article v-for="(post, index) in posts" :key="index" class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong style="margin-right: 1rem">
              <nuxt-link
                :to="
                  localePath({ name: 'blog-slug', params: { slug: post.link } })
                "
                class="has-text-grey-dark is-size-4"
                >{{ post.title }}</nuxt-link
              >
            </strong>
            <time class="has-text-grey" :datetime="post.date">{{
              new Date(post.date) | dateSince($i18n.locale)
            }}</time>
            <br />
            {{ post.summary | truncateText }}
          </p>
        </div>
      </div>
    </article>
  </div>
  <div v-else class="section">
    <p class="has-text-centered">{{ $t('articlesNotFound') }}</p>
  </div>
</template>

<script>
import blogs from '~/content/blogs.json'

export default {
  async asyncData() {
    const awaitImport = async blog => {
      const blogMD = await import(`~/content/blog/${blog.slug}.md`)

      return {
        ...blogMD.attributes,
        link: blog.slug,
        text: blogMD.body
      }
    }

    return await Promise.all(
      blogs.map(blog => awaitImport(blog))
    ).then(res => ({ blogList: res }))
  },

  computed: {
    posts() {
      return this.filteredPosts(this.blogList)
    },

    getQuery() {
      return this.$route.query
    },

    hasPost() {
      return !!this.posts.length
    }
  },

  methods: {
    filteredPosts(postList) {
      const query = this.getQuery

      if (Object.keys(query).includes('tag')) {
        return postList.filter(post => post.tags.includes(query.tag))
      }

      if (Object.keys(query).includes('category')) {
        return postList.filter(post => post.category === query.category)
      }

      return postList
    }
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
