<template>
  <div class="container">
    <section class="section">
      <div class="columns is-centered">
        <div
          class="column is-three-thirds-tablet is-two-thirds-desktop is-two-thirds-fullhd is-two-thirds-widescreen"
        >
          <slot></slot>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TheMain'
}
</script>

<style lang="scss" scoped>
.image {
  margin-right: auto;
  margin-left: auto;
}
</style>
