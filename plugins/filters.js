import Vue from 'vue'
import { format, formatDistanceToNow } from 'date-fns'
import { es, ptBR } from 'date-fns/locale'

const locales = { es, pt: ptBR }

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

Vue.filter('truncateText', (text, length = 180) => {
  if (text.length > length) {
    return text.substring(0, length) + '...'
  }
})
