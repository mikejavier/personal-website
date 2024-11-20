<template>
  <aside class="menu">
    <ul class="menu-list">
      <li class="is-capitalized">
        <nuxt-link  exact>{{
          $t('aboutMe')
        }}</nuxt-link>
      </li>
      <li class="is-capitalized">
        <nuxt-link >Blog</nuxt-link>
      </li>
      <li class="is-capitalized">
        <nuxt-link >{{ $t('contact') }}</nuxt-link>
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
