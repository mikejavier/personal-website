<template>
  <section class="section">
    <div class="container">

      <h1 class="title">About</h1>
      <h2 class="subtitle">Every person has a history.</h2>

      <div class="content">
        <p>Hi, my name is Michael Santillán born in Ecuador, i am {{getAge}} years old and currently live in Brazil where i work as a Front End Developer. In free time i do not dispense a good video game or a trip with my wife and our shih-tzu. Passionate by remote work and open-source, i'm moved driven by curiosity and the desire to evolve more and more.</p>

        <p class="biography-data-label">
          <span class="icon"><i class="fa fa-map-marker"></i></span>
          Recife - Brasil
        </p>

        <p class="biography-data-label">
          <span class="icon"><i class="fa fa-phone"></i></span>
          +55 81 9.96917095
        </p>

        <p class="biography-data-label">
          <span class="icon"><i class="fa fa-envelope"></i></span>
          me@michaelsantillan.com
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      getAge () {
        const today = new Date()
        return today.getFullYear() - 1992
      }
    }
  }
</script>

<style lang="scss" scoped></style>
