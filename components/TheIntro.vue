<template>
  <div class="section">
    <h2 class="has-text-weight-normal">
      {{ $t('aboutPage.intro.title') }}
    </h2>

    <p>{{ $t('aboutPage.intro.firstText', { age: getAge }) }}</p>

    <i18n path="aboutPage.intro.secondText" tag="p">
      <template v-slot:mail>
        <a
        href="mailto:contato@michaelsantillan.com"
      >
      {{ $t('contactMe') }}
      </a>
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
