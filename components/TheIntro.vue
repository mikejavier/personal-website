<template>
  <div class="section">
    <h2 class="has-text-weight-normal">
      {{ $t('aboutPage.intro.title') }}
    </h2>

    <p>{{ $t('aboutPage.intro.firstText', { age: getAge }) }}</p>

    <p>{{ $t('aboutPage.intro.secondText') }}</p>

    <div class="buttons">
      <a
        href="https://bit.ly/2TRi2Hn"
        target="_blank"
        class="button is-success"
      >
        <span class="icon">
          <i class="fab fa-whatsapp"></i>
        </span>
        <span>Whatsapp</span>
      </a>
      <a href="https://bit.ly/2yLDI0l" target="_blank" class="button is-info">
        <span class="icon">
          <i class="fab fa-telegram-plane"></i>
        </span>
        <span>Telegram</span>
      </a>
      <a
        href="mailto:me@michaelsantillan.com"
        target="_blank"
        class="button is-dark"
      >
        <span class="icon">
          <i class="fa fa-envelope"></i>
        </span>
        <span>Email</span>
      </a>
    </div>
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
