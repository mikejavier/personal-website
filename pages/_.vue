<template>
  <div class="block">
    <h1 class="title has-text-centered">404</h1>
    <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
      <iframe
        src="https://giphy.com/embed/l0Iyi71CgKG35n54Y"
        width="100%"
        height="100%"
        style="position:absolute"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
    <p>
      <a
        target="_blank"
        href="https://giphy.com/gifs/RJFilmSchool-bts-hulu-l0Iyi71CgKG35n54Y"
        >via GIPHY</a
      >
    </p>
    <h1 class="title has-text-centered">{{ $t('notFoundPage.message') }}</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style></style>
