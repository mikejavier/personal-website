<template>
  <div class="wrapper section">
    <span class="icon" @click="openMenu">
      <i class="fas fa-bars"></i>
    </span>
    <the-aside :is-open="menuIsOpen" />
    <the-main>
      <nuxt :key="$route.fullPath" />
    </the-main>
    <div
      class="overflow"
      :class="{ 'is-hidden': !menuIsOpen }"
      @click="openMenu"
    ></div>
  </div>
</template>

<script>
import TheAside from '@/components/TheAside'
import TheMain from '@/components/TheMain'

export default {
  components: {
    TheAside,
    TheMain
  },

  data() {
    return {
      menuIsOpen: false
    }
  },

  watch: {
    $route() {
      this.menuIsOpen = false
    }
  },

  methods: {
    openMenu() {
      this.menuIsOpen = !this.menuIsOpen
    }
  },

  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://www.michaelsantillan.com' + this.$route.path
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  position: relative;
  margin-right: auto;
  margin-left: auto;

  > .icon {
    position: fixed;
    left: 20px;
    top: 20px;

    @media only screen and (min-width: 1024px) {
      display: none;
    }
  }
}

.overflow {
  content: '';
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
}
</style>
