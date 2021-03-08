<template>
  <aside class="aside" :class="{ open: menuIsOpened }">
    <span class="icon" @click="openMenu">
      <i
        class="fas"
        :class="{ 'fa-times': menuIsOpened, 'fa-bars': !menuIsOpened }"
      ></i>
    </span>
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
    <br>
    <p>
      Born in Ecuador, JavaScript lover and an advocate for online privacy and open-source software.
    </p>
    <br>
    <p class="buttons">
      <a href="#" class="button">
        <span class="icon is-small">
          <i class="fab fa-github"></i>
        </span>
      </a>
      <a href="#" class="button">
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
    <app-menu />
    <hr />
    <div class="has-text-centered">
      <div class="dropdown is-hoverable is-up">
        <div class="dropdown-trigger">
          <button
            class="button is-capitalized"
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
  </aside>
</template>

<script>
import AppMenu from '@/components/AppMenu'

export default {
  components: {
    AppMenu
  },

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

<style scoped lang="scss">
.aside {
  padding: 1rem;
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
  }

  > .icon {
    position: absolute;
    right: -40px;
    top: 10px;

    @media only screen and (min-width: 1024px) {
      display: none;
    }
  }
}

.aside.open {
  transform: translateX(0);
}
</style>
