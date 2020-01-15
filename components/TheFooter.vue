<template>
  <footer class="footer has-background-white">
    <div class="container">
      <div class="content has-text-centered">
        <p>Michael Santillán © {{ getCurrentYear }}</p>
        <p>
          <i18n path="footerMessage" tag="small">
            <template v-slot:vue>
              <a href="https://vuejs.org/" target="_blank">Vue</a>
            </template>
            <template v-slot:nuxt>
              <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>
            </template>
            <template v-slot:bulma>
              <a href="http://bulma.io/" target="_blank">Bulma</a>
            </template>
            <template v-slot:heart>
              <i class="fa fa-heart"></i>
            </template>
          </i18n>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    getCurrentYear() {
      const today = new Date()
      return today.getFullYear()
    }
  }
}
</script>
