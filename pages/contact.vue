<template>
  <div class="block">
    <h1 class="title">{{ $t('contactPage.title') }}</h1>
    <h2 class="subtitle">{{ $t('contactPage.subtitle') }}</h2>
    <div v-if="notificationSuccess" class="notification is-primary is-light">
      {{ $t('contactPage.messageSuccess') }}
    </div>
    <div v-if="notificationError" class="notification is-danger is-light">
      {{ $t('contactPage.messageError') }}
    </div>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="submitHandler"
    >
      <p class="is-invisible">
        <label
          >Don’t fill this out if you’re human:
          <input v-model="form.bot" name="bot-field"
        /></label>
      </p>
      <div class="field">
        <label class="label">{{
          $t('contactPage.form.nameField.label')
        }}</label>
        <div class="control">
          <input
            v-model="form.name"
            name="name"
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
            v-model="form.email"
            name="email"
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
            <select v-model="form.subject" name="subject">
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
            v-model="form.message"
            name="message"
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
import axios from 'axios'

export default {
  name: 'Contact',

  data() {
    return {
      notificationSuccess: false,
      notificationError: false,
      form: {
        bot: '',
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },

  computed: {
    showNotification() {
      return Object.keys(this.$route.query).includes('sent')
    }
  },

  methods: {
    cleanForm() {
      this.form = {
        name: '',
        phone: '',
        email: '',
        mesage: ''
      }
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    async submitHandler() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      try {
        await axios.post(
          '/',
          this.encode({
            'form-name': 'contact',
            ...this.form
          }),
          axiosConfig
        )
        this.notificationSuccess = true
        this.cleanForm()
      } catch (error) {
        this.notificationError = true
      }
    }
  }
}
</script>
