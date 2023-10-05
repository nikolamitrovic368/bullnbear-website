module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.js'
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      name: 'Français',
      file: 'fr.js'
    }
  ],
  defaultLocale: 'en',
  seo: false,
  lazy: true,
  detectBrowserLanguage: false,
  langDir: 'i18n/',
  parsePages: false,
  pages: {
    'advice/_uid': {
      en: '/blog/:uid',
      fr: '/blog/:uid'
    }
  },
  vueI18n: {
    fallbackLocale: 'en'
  }
}
