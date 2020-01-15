<template>
  <div>
    <the-header />
    <the-main>
      <div class="has-text-centered">
        <figure class="image is-128x128" style="margin-bottom: 1rem">
          <img
            class="is-rounded"
            src="~/assets/images/photo.png"
            alt="Michael Santillán photo"
          />
        </figure>
        <h1 class="title is-2 has-text-weight-medium">
          Michael Santillán
        </h1>
        <h2 class="subtitle has-text-grey-light has-text-weight-normal">
          JavaScript Developer
        </h2>
      </div>
      <hr />
      <nuxt />
    </the-main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheMain from '@/components/TheMain'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter
  }
}
</script>
