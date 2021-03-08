<template>
  <div class="wrapper">
    <the-aside />
    <the-main>
      <!-- <the-header /> -->
      <nuxt />
    </the-main>
    <!-- <the-footer /> -->
  </div>
</template>

<script>
import TheAside from '@/components/TheAside'
import TheHeader from '@/components/TheHeader'
import TheMain from '@/components/TheMain'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheAside,
    TheHeader,
    TheMain,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 1280px;
  position: relative;
  margin-right: auto;
  margin-left: auto;
}
</style>
