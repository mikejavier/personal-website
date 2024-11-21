<template>
  <div class="block">
    <h1 class="has-text-weight-normal">
      {{ $t('aboutPage.tooLongDontReadBlock.title') }}
    </h1>
    <p>
      {{ $t('aboutPage.tooLongDontReadBlock.firstParagraph') }}
    </p>
    <i18n-t keypath="aboutPage.tooLongDontReadBlock.secondParagraph" tag="p" scope="global">
      <template v-slot:mail>
        <nuxt-link :to="localePath('/contact')">{{ $t('here') }}</nuxt-link>
      </template>
    </i18n-t>
    <ul>
      <li>
        <strong>E-mail:</strong>
        <span>
          contato[at]michaelsantillan[dot]com
        </span>
        <small>(<nuxt-link :to="localePath('/pubkey')">GPG</nuxt-link>)</small>
      </li>
      <li>
        <strong>Fediverse:</strong>
        <a
          rel="me"
          href="https://social.michaelsantillan.com/mikejavier"
          target="_blank"
          >@mikejavier@social.michaelsantillan.com</a
        >
      </li>
    </ul>
    <p>
      {{ $t('aboutPage.tooLongDontReadBlock.thirdParagraph') }}
    </p>
    <ul>
      <li>
        <strong>Github:</strong>
        <a href="https://github.com/mikejavier" target="_blank">
          @mikejavier
        </a>
      </li>
      <li>
        <strong>Reddit:</strong>
        <a href="https://www.reddit.com/user/mikejavier" target="_blank">
          @mikejavier
        </a>
      </li>
      <li>
        <strong>Lichess:</strong>
        <a href="https://lichess.org/@/mikejavier" target="_blank">
          @mikejavier
        </a>
      </li>
      <li>
        <strong>GoodReads:</strong>
        <a href="https://www.goodreads.com/mikejavier" target="_blank">
          @mikejavier
        </a>
      </li>
      <li>
        <strong>LinkedIn:</strong>
        <a href="https://www.linkedin.com/in/mikejavier" target="_blank">
          @mikejavier ({{ $t('aboutPage.tooLongDontReadBlock.linkedinAlert') }})
        </a>
      </li>
    </ul>
    <div class="notification is-warning is-light">
      {{ $t('aboutPage.tooLongDontReadBlock.alertMessage') }}
    </div>
  </div>
</template>
<script setup>
const localePath = useLocalePath()
</script>
