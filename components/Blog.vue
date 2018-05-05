<template>
  <section class="section">
    <div class="container">

      <h1 class="title">Articles</h1>

      <h2 class="subtitle">When inspired i write.</h2>

      <article class="media box" v-for="(post, index) in posts" :key="index" v-if="index > 6 && post.categories.length && post.categories[0] !== 'browsers'">
        <div class="media-content">
          <div class="content">
            <h3><a :href="post.link" target="_blank">{{post.title}}</a></h3>
            <p>{{post.description.substr(0, 550).replace(/(<([^>]+)>)/ig,"")}}</p>
          </div>
        </div>
      </article>

      <div class="is-block has-text-centered">
        <a href="https://medium.com/@mikejavier/latest" target="_blank" class="button is-dark">View all posts</a>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: '',

  props: ['posts'],

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped></style>
