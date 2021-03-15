<template>
  <div class="block">
    <p>{{ $t('aboutPage.intro.firstText', { age: getAge }) }}</p>

    <i18n path="aboutPage.intro.secondText" tag="p">
      <template v-slot:mail>
        <nuxt-link :to="localePath('/contact')">{{ $t('contactMe') }}</nuxt-link>
      </template>
    </i18n>
  </div>
</template>

<script>
export default {
  computed: {
    getAge() {
      const today = new Date()
      return today.getFullYear() - 1992
    }
  }
}
</script>
