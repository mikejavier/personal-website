<template>
  <div class="section">
    <h2 class="has-text-weight-normal">{{ $t('aboutPage.skills.title') }}</h2>

    <p>{{ $t('aboutPage.skills.firstText') }}</p>

    <p
      class="field is-grouped"
      style="justify-content: space-between; flex-wrap: wrap;"
    >
      <span class="control is-size-1"
        ><i class="devicon-typescript-plain colored"></i
      ></span>
      <span class="control is-size-1"
        ><i class="devicon-vuejs-plain-wordmark colored"></i
      ></span>
      <span class="control is-size-1"
        ><i class="devicon-nodejs-plain colored"></i
      ></span>
      <span class="control is-size-1"
        ><i class="devicon-mocha-plain colored"></i
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

    <p>{{ $t('aboutPage.skills.secondText') }}</p>

    <ul>
      <li>{{ $t('aboutPage.skills.item1') }}</li>
      <li>{{ $t('aboutPage.skills.item2') }}</li>
      <li>{{ $t('aboutPage.skills.item3') }}</li>
      <li>{{ $t('aboutPage.skills.item4') }}</li>
      <li>{{ $t('aboutPage.skills.item5') }}</li>
      <li>{{ $t('aboutPage.skills.item6') }}</li>
      <li>{{ $t('aboutPage.skills.item7') }}</li>
      <li>{{ $t('aboutPage.skills.item8') }}</li>
      <li>{{ $t('aboutPage.skills.item9') }}</li>
    </ul>

    <p>{{ $t('aboutPage.skills.thirdText') }}</p>
  </div>
</template>
