<template>
  <div class="container">
    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <div class="buttons">
            <nuxt-link
              :to="localePath('index')"
              exact
              class="button is-white is-capitalized"
            >
              {{ $t('whoIAm') }}
            </nuxt-link>
            <nuxt-link
              :to="localePath('blog')"
              exact
              class="button is-white is-capitalized"
            >
              blog
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <div class="dropdown is-hoverable is-right">
            <div class="dropdown-trigger">
              <button
                class="button is-white is-capitalized"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>{{ selectedLocale }}</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpened: false
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

    selectedLocale() {
      const currentLocale = this.$i18n.locales.find(
        ({ code }) => this.$i18n.locale === code
      )

      return this.$t(currentLocale.label)
    }
  },

  methods: {
    openMenu() {
      this.menuIsOpened = !this.menuIsOpened
    }
  }
}
</script>

<style lang="scss" scoped>
.level {
  padding: 0.5rem;
}
</style>
