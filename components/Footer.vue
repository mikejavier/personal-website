<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>Michael Santillán © {{getCurrentYear}}</p>
        <p><small>Made with <a href="https://vuejs.org/" target="_blank">Vue</a>, <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>, <a href="http://bulma.io/" target="_blank">Bulma</a> and <i class="fa fa-heart"></i></small></p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      getCurrentYear () {
        const today = new Date()
        return today.getFullYear()
      }
    }
  }
</script>

<style lang="scss" scoped></style>
