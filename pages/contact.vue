<template>
  <div class="block">
    <h1 class="title">{{ $t('contactPage.title') }}</h1>
    <h2 class="subtitle">{{ $t('contactPage.subtitle') }}</h2>
    <div v-if="showNotification" class="notification is-primary is-light">
      Mensagem enviada com sucesso!
    </div>
    <form
      name="contact"
      :action="localePath({ name: 'contact', query: { sent: true } })"
      method="POST"
      data-netlify="true"
    >
      <div class="field">
        <label class="label">{{
          $t('contactPage.form.nameField.label')
        }}</label>
        <div class="control">
          <input
            class="input"
            type="text"
            :placeholder="$t('contactPage.form.nameField.placeholder')"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">{{
          $t('contactPage.form.emailField.label')
        }}</label>
        <div class="control">
          <input
            class="input"
            type="email"
            :placeholder="$t('contactPage.form.emailField.placeholder')"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">{{
          $t('contactPage.form.subjectField.label')
        }}</label>
        <div class="control">
          <div class="select">
            <select>
              <option value="project">{{
                $t('contactPage.form.subjectField.option1')
              }}</option>
              <option value="talk">{{
                $t('contactPage.form.subjectField.option2')
              }}</option>
              <option value="others">{{
                $t('contactPage.form.subjectField.option3')
              }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">{{
          $t('contactPage.form.messageField.label')
        }}</label>
        <div class="control">
          <textarea
            class="textarea"
            :placeholder="$t('contactPage.form.messageField.placeholder')"
            required
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">
            {{ $t('contactPage.form.submitButton') }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',

  computed: {
    showNotification() {
      return Object.keys(this.$route.query).includes('sent')
    }
  }
}
</script>
