<template>
  <div>
    <the-header />
    <the-main>
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
