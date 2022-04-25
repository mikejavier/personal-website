<template>
  <div class="block">
    <h1 class="has-text-weight-normal">
      {{ $t('aboutPage.aboutMeBlock.title') }}
    </h1>
    <p>{{ $t('aboutPage.aboutMeBlock.firstParagraph', { age: getAge }) }}</p>
    <p>{{ $t('aboutPage.aboutMeBlock.secondParagraph') }}</p>
    <p>{{ $t('aboutPage.aboutMeBlock.thirdParagraph') }}</p>
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
