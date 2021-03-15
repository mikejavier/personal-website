<template>
  <main class="px-5">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'TheMain'
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: 70%;
    margin-left: 320px;
  }
}
</style>
