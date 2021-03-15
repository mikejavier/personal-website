<template>
  <div class="content">
    <the-intro />
    <the-skills />
    <the-works />
  </div>
</template>

<script>
import TheIntro from '@/components/TheIntro'
import TheSkills from '@/components/TheSkills'
import TheWorks from '@/components/TheWorks'

export default {
  name: 'About',

  components: {
    TheIntro,
    TheSkills,
    TheWorks
  }
}
</script>
