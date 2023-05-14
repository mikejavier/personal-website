<template>
  <div class="block">
    <h1 class="has-text-weight-normal">
      {{ $t('aboutPage.aboutMeBlock.title') }}
    </h1>
    <p>{{ $t('aboutPage.aboutMeBlock.firstParagraph', { age: getAge }) }}</p>
    <p>{{ $t('aboutPage.aboutMeBlock.secondParagraph') }}</p>
    <p>{{ $t('aboutPage.aboutMeBlock.thirdParagraph') }}</p>
    <p>{{ $t('aboutPage.aboutMeBlock.fourthParagraph') }}</p>
    <p>{{ $t('aboutPage.aboutMeBlock.fifthParagraph') }}</p>
    <p>{{ $t('aboutPage.aboutMeBlock.sixthParagraph') }}</p>
    <p>{{ $t('aboutPage.aboutMeBlock.seventhParagraph') }}</p>
    <p>{{ $t('aboutPage.aboutMeBlock.eighthParagraph') }}</p>
    <p>{{ $t('aboutPage.aboutMeBlock.ninthParagraph') }}</p>
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
