<template>
  <section class="section">
    <h1 class="title">Articles</h1>
    <p>
      When inspired I write and put everything on my
      <a
        href="https://medium.com/@mikejavier/latest"
        target="_blank">Medium</a>
      channel. <br>
      My last post was:
      <a
        :href="getLastPost.link"
        target="_blank">{{ getLastPost.title }}</a>
    </p>
  </section>
</template>

<script>
export default {
  name: 'Blog',

  props: {
    posts: {
      type: Array,
      required: true
    }
  },

  computed: {
    getLastPost () {
      return this.posts.filter(post => post.categories.length)[0]
    }
  }
}
</script>
