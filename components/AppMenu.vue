<template>
  <aside class="menu">
    <ul class="menu-list">
      <li class="is-capitalized">
        <nuxt-link exactActiveClass="is-active" :to="localePath('/')" exact>{{
          $t('aboutMe')
        }}</nuxt-link>
      </li>
      <li class="is-capitalized">
        <nuxt-link to="https://blog.michaelsantillan.com/" target="_blank">
          <span class="icon-text">
            <span>Blog</span>
            <span class="icon">
              <i class="fas fa-external-link-alt fa-xs"></i>
            </span>
          </span>
        </nuxt-link>
      </li>
      <li class="is-capitalized">
        <nuxt-link to="https://mastodon.social/@_mikejavier" target="_blank">
          <span class="icon-text">
            <span>Social</span>
            <span class="icon">
              <i class="fas fa-external-link-alt fa-xs"></i>
            </span>
          </span>
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const localePath = useLocalePath()
</script>
