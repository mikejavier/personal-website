<template>
  <article class="media">
    <div class="media-content">
      <div class="content">
        <strong>
          <nuxt-link
            :to="
              localePath({
                name: 'blog-slug',
                params: { slug: article.slug }
              })
            "
            class="has-text-grey-dark is-size-4"
            >{{ article.title }}</nuxt-link
          >
        </strong>

        <small class="has-text-grey" :datetime="article.date">{{
          new Date(article.createdAt) | fullDate($i18n.locale)
        }}</small>

        <small class="has-text-grey"
          >· {{ `${article.readingTime} ${$t('read')}` }}</small
        >

        <p>{{ article.summary }}</p>

        <nav class="tags">
          <nuxt-link
            v-for="(tag, index) in article.tags"
            :key="index"
            :to="localePath({ name: 'blog', query: { tag } })"
            class="tag is-link is-light"
            >#{{ tag }}</nuxt-link
          >
        </nav>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.media-content {
 overflow-x: visible;
}
</style>
