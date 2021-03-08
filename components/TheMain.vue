<template>
  <main>
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
  // background-color: #f00;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: 70%;
    margin-left: 320px;
  }
}
.image {
  margin-right: auto;
  margin-left: auto;
}
</style>
