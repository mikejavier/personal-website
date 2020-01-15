<template>
  <div>
    <div class="content has-text-centered">
      <h1 class="title is-1 has-text-weight-medium">
        {{ title }}
      </h1>
      <p class="has-text-grey-light is-uppercase">
        <span class="is-uppercase">{{
          new Date(date) | fullDate($i18n.locale)
        }}</span>
        <span style="margin-right: 1rem; margin-left: 1rem" />
        {{ postInText | readingTime($t('read'), $i18n.locale) }}
      </p>
    </div>
    <hr />
    <div class="content" v-html="postInHtml"></div>
    <span>
      <span class="icon">
        <i class="fas fa-tags"></i>
      </span>
      <nuxt-link
        v-for="(tag, index) in tags"
        :key="index"
        :to="localePath({ name: 'blog', query: { tag } })"
        class="tag is-white"
        >#{{ tag }}</nuxt-link
      >
    </span>
    <hr />
    <div id="disqus_thread"></div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',

  layout: 'post',

  async asyncData({ params }) {
    const post = await import(`~/content/blog/${params.slug}.md`)

    return {
      ...post.attributes,
      slug: params.slug,
      postInText: post.body,
      postInHtml: post.html
    }
  },

  head() {
    return {
      title: `${this.title} - Michael Santillán | blog`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.summary
        }
      ],
      script: [{ src: '/scripts/disqus.js' }]
    }
  }
}
</script>
