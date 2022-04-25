<template>
  <div class="content">
    <the-too-long-dont-read />
    <hr />
    <the-about-me />
    <the-skills />
    <the-works />
    <the-hobbies />
    <the-purposes />
  </div>
</template>

<script>
import TheTooLongDontRead from '@/components/TheTooLongDontRead'
import TheAboutMe from '@/components/TheAboutMe'
import TheSkills from '@/components/TheSkills'
import TheWorks from '@/components/TheWorks'
import TheHobbies from '@/components/TheHobbies'
import ThePurposes from '@/components/ThePurposes'

export default {
  name: 'About',

  components: {
    TheTooLongDontRead,
    TheAboutMe,
    TheSkills,
    TheWorks,
    TheHobbies,
    ThePurposes
  }
}
</script>
