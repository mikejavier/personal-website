<template>
  <section class="section">
    <h1 class="title">About</h1>
    <div class="content">
      <p>Hi, my name is Michael Santillán born in Ecuador, i am {{getAge}} years old and currently live in Brazil where i work as a Front End Developer. In free time i do not dispense a good video game or a trip with my wife and our shih-tzu. Passionate by remote work and open-source, i'm moved driven by curiosity and the desire to evolve more and more.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',

  computed: {
    getAge () {
      const today = new Date()
      return today.getFullYear() - 1992
    }
  }
}
</script>
