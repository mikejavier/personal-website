<template>
  <section class="section">
    <h1 class="title">About</h1>
    <div class="content">
      <p>Hi, my name is Michael Santillán born in Ecuador, I am {{getAge}} years old and currently live in Brazil where I work as Front End Engineer. In free time I do not dispense a good video game or a trip with my wife and our shih-tzu. Passionate by remote work and open-source, I'm moved driven by curiosity and the desire to evolve more and more.</p>
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
