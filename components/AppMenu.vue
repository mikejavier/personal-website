<template>
  <aside class="menu">
    <ul class="menu-list">
      <li class="is-capitalized">
        <nuxt-link :to="localePath('/')" exact>{{
          $t('aboutMe')
        }}</nuxt-link>
      </li>
      <li class="is-capitalized">
        <nuxt-link :to="localePath('/blog')">Blog</nuxt-link>
      </li>
      <li class="is-capitalized">
        <nuxt-link :to="localePath('/contact')">{{ $t('contact') }}</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'AppMenu'
}
</script>

<style></style>
