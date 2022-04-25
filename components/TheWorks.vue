<template>
  <div class="block">
    <h1 class="has-text-weight-normal">
      {{ $t('aboutPage.worksBlock.title') }}
    </h1>

    <p v-for="(n, index) in 4" :key="index">
      <i18n :path="`aboutPage.worksBlock.job${n}.title`" tag="strong">
        <template v-slot:questrade>
          <a href="https://www.questrade.com" target="_blank">Questrade</a>
        </template>
        <template v-slot:vizir>
          <a href="https://vizir.com.br" target="_blank">Vizir</a>
        </template>
        <template v-slot:leet>
          <a href="https://leet.tech" target="_blank">Leet</a>
        </template>
      </i18n>
      <br />
      <i18n :path="`aboutPage.worksBlock.job${n}.description`" tag="span">
        <template v-slot:postgrain>
          <a href="https://postgrain.com" target="_blank">Postgrain</a>
        </template>
      </i18n>
    </p>

    <i18n path="aboutPage.worksBlock.lastParagraph" tag="p">
      <template v-slot:linkedin>
        <a href="http://br.linkedin.com/in/mikejavier/" target="_blank"
          >Linkedin</a
        >
      </template>
    </i18n>
  </div>
</template>
