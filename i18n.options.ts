import locales from './static/locales'

export default defineI18nConfig(() => ({
  baseUrl: 'https://michaelsantillan.com',
  seo: true,
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      label: 'english'
    },
    {
      code: 'es',
      iso: 'es-ES',
      label: 'spanish'
    },
    {
      code: 'pt',
      iso: 'pt-BR',
      label: 'portuguese'
    }
  ],
  defaultLocale: 'en',
  legacy: false,
  fallbackLocale: 'en',
  messages: locales
}));
