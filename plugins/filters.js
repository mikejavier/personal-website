import Vue from 'vue'
import { format, formatDistanceToNow } from 'date-fns'
import { es, pt } from 'date-fns/locale'
import readingTime from 'reading-time'

const locales = { es, pt }

Vue.filter('fullDate', (date, locale) => {
  if (locale === 'en') {
    format(date, 'PPP')
  }

  return format(date, 'PPP', { locale: locales[locale] })
})

Vue.filter('dateSince', (date, locale) => {
  if (locale === 'en') {
    formatDistanceToNow(date, { addSuffix: true })
  }

  return formatDistanceToNow(date, { addSuffix: true, locale: locales[locale] })
})

Vue.filter('readingTime', (time, text = 'read') => {
  const timeToRead = Math.ceil(readingTime(time).minutes.toFixed(2))

  return `${timeToRead} min ${text}`
})

Vue.filter('truncateText', (text, length = 180) => {
  if (text.length > length) {
    return text.substring(0, length) + '...'
  }
})
