<template>
  <div class="block">
    <h1 class="has-text-weight-normal">
      {{ $t('aboutPage.tooLongDontReadBlock.title') }}
    </h1>
    <p>
      {{ $t('aboutPage.tooLongDontReadBlock.firstParagraph') }}
    </p>
    <p>
      {{ $t('aboutPage.tooLongDontReadBlock.secondParagraph') }}
    </p>
    <ul>
      <li>
        <strong>E-mail:</strong>
        <span>
          hi[at]michaelsantillan[dot]com
        </span>
        <small>(<nuxt-link :to="localePath('/pubkey')">GPG</nuxt-link>)</small>
      </li>
      <li>
        <strong>Fediverse: </strong>
        <nuxt-link
          rel="me"
          to="https://mastodon.social/@_mikejavier"
          target="_blank"
          >@_mikejavier@mastodon.social</nuxt-link>
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
