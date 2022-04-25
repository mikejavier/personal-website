<template>
  <div class="block">
    <h1 class="has-text-weight-normal">
      {{ $t('aboutPage.skillsBlock.title') }}
    </h1>

    <p>{{ $t('aboutPage.skillsBlock.firstParagraph') }}</p>

    <p
      class="field is-grouped"
      style="justify-content: space-between; flex-wrap: wrap;"
    >
      <span class="control is-size-1"
        ><i class="devicon-nodejs-plain colored"></i
      ></span>
      <span class="control is-size-1"
        ><i class="devicon-typescript-plain colored"></i
      ></span>
      <span class="control is-size-1"
        ><i class="devicon-vuejs-plain-wordmark colored"></i
      ></span>
      <span class="control is-size-1"
        ><i class="devicon-postgresql-plain-wordmark colored"></i
      ></span>
      <span class="control is-size-1"
        ><i class="devicon-docker-plain colored"></i
      ></span>
      <span class="control is-size-1"
        ><i class="devicon-amazonwebservices-plain-wordmark colored"></i
      ></span>
    </p>

    <p>{{ $t('aboutPage.skillsBlock.secondParagraph') }}</p>

    <ul>
      <li>{{ $t('aboutPage.skillsBlock.item1') }}</li>
      <li>{{ $t('aboutPage.skillsBlock.item2') }}</li>
      <li>{{ $t('aboutPage.skillsBlock.item3') }}</li>
      <li>{{ $t('aboutPage.skillsBlock.item4') }}</li>
      <li>{{ $t('aboutPage.skillsBlock.item5') }}</li>
      <li>{{ $t('aboutPage.skillsBlock.item6') }}</li>
      <li>{{ $t('aboutPage.skillsBlock.item7') }}</li>
      <li>{{ $t('aboutPage.skillsBlock.item8') }}</li>
      <li>{{ $t('aboutPage.skillsBlock.item9') }}</li>
    </ul>

    <p>{{ $t('aboutPage.skillsBlock.thirdParagraph') }}</p>
  </div>
</template>
