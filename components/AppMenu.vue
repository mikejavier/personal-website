<template>
  <aside class="menu">
    <ul class="menu-list">
      <li class="is-capitalized">
        <nuxt-link exactActiveClass="is-active" :to="localePath('/')" exact>{{
          $t('aboutMe')
        }}</nuxt-link>
      </li>
      <li class="is-capitalized">
        <nuxt-link exactActiveClass="is-active" :to="localePath('/blog')">Blog</nuxt-link>
      </li>
      <li class="is-capitalized">
        <nuxt-link exactActiveClass="is-active" :to="localePath('/contact')">{{ $t('contact') }}</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const localePath = useLocalePath()
</script>

<style></style>
