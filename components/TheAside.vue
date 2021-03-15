<template>
  <aside class="aside p-5" :class="{ open: isOpen }">
    <figure class="image is-128x128" style="margin-bottom: 1rem">
      <img
        class="is-rounded"
        src="~/assets/images/photo.png"
        alt="Michael Santillán photo"
      />
    </figure>
    <h1 class="has-text-weight-medium is-size-4">
      Michael Santillán
    </h1>
    <h2 class="has-text-grey-light has-text-weight-normal is-size-5">
      {{ $t('profession') }}
    </h2>
    <br />
    <p>
      Born in Ecuador, JavaScript lover and an advocate for online privacy and
      open-source software.
    </p>
    <br />
    <p class="buttons">
      <a href="https://github.com/mikejavier" target="_blank" class="button">
        <span class="icon is-small">
          <i class="fab fa-github"></i>
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/mikejavier"
        target="_blank"
        class="button"
      >
        <span class="icon is-small">
          <i class="fab fa-linkedin-in"></i>
        </span>
      </a>
      <button class="button">
        <span class="icon is-small">
          <i class="fas fa-rss"></i>
        </span>
      </button>
    </p>
    <hr />
    <div class="block">
      <app-menu />
    </div>

    <div class="block">
      <div class="dropdown is-hoverable is-up">
        <div class="dropdown-trigger">
          <button
            class="button is-capitalized is-white"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span class="icon is-small">
              <i class="fas fa-globe" aria-hidden="true"></i>
            </span>
            <span>{{ selectedLocale }}</span>
          </button>
        </div>
        <div id="dropdown-menu" class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="dropdown-item is-capitalized"
              :class="{ 'is-active': locale.code === selectedLocale }"
              exact
            >
              {{ $t(locale.label) }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="content">
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
  </aside>
</template>

<script>
import AppMenu from '@/components/AppMenu'

export default {
  components: {
    AppMenu
  },

  props: {
    isOpen: {
      type: Boolean,
      require: true
    }
  },

  computed: {
    availableLocales() {
      const locales = this.$i18n.locales.filter(
        ({ code }) => code !== this.$i18n.locale
      )

      return locales.map(({ code, label }) => ({
        code,
        label
      }))
    },

    getCurrentYear() {
      const today = new Date()
      return today.getFullYear()
    },

    selectedLocale() {
      const currentLocale = this.$i18n.locales.find(
        ({ code }) => this.$i18n.locale === code
      )

      return this.$t(currentLocale.label)
    }
  }
}
</script>

<style scoped lang="scss">
.aside {
  background-color: #fff;
  width: 100%;
  max-width: 260px;
  position: fixed;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  transform: translateX(-260px);
  transition: transform 0.5s;
  overflow-y: scroll;
  overflow-x: hidden;

  @media only screen and (min-width: 375px) {
    max-width: 320px;
    transform: translateX(-320px);
  }

  @media only screen and (min-width: 1024px) {
    top: initial;
    left: initial;
    z-index: initial;
    transform: translateX(0);
    width: 30%;
    overflow: initial;
  }
}

.aside.open {
  transform: translateX(0);
}
</style>
