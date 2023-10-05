/* META DATA */
import { metaConfig } from './core/meta.config'

/* CONTENTFUL GET BLOG POSTS FOR GENERATE ROUTES */
import { getBlogPosts } from './core/contentful'

import i18n from './i18n'

export default {
  /* Target: https://go.nuxtjs.dev/config-target */
  ssr: true,

  target: 'static',

  /* Global page headers: https://go.nuxtjs.dev/config-head */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'BullnBear',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'BullnBear' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@BullnBear_Fi' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'og:image', property: 'og:image', content: metaConfig.rootDomain + metaConfig.ogImagePreview },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: metaConfig.rootDomain + metaConfig.ogImagePreview },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'BullnBear' },
      { hid: 'twitter:image', property: 'twitter:image', content: metaConfig.rootDomain + metaConfig.ogImagePreview },
      { hid: 'apple-mobile-web-app-title', name: 'og:image:alt', content: 'BullnBear' },
      { hid: 'charset', charset: 'utf-8' },
      { hid: 'mobile-web-app-capable', name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'BullnBear' },
      { name: 'application-name', content: 'BullnBear' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#39C9E0' },
      { name: 'msapplication-config', content: metaConfig.rootDomain + metaConfig.msapplicationConfig },
      { hid: 'theme-color', name: 'theme-color', content: '#39C9E0' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'author', name: 'author', content: 'BullnBear' },
      { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
      { hid: 'og:locale', name: 'og:locale', content: 'en_US' }
    ],

    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' },
      { rel: 'manifest', href: '/images/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/images/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'preload', href: 'https://www.google-analytics.com/analytics.js', as: 'script' }
    ],

    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-NBZQB2Z8TB', async: true },
      { src: '/js/analytics.js', async: true }
    ]
  },

  /* Customize the progress-bar color */
  loading: { color: '#FF7EE2' },

  /* Global CSS: https://go.nuxtjs.dev/config-css */
  css: ['~/assets/scss/main.scss', 'aos/dist/aos.css'],

  /* Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins */
  plugins: [
    { src: '~/plugins/resizer', mode: 'client' },
    { src: '~/plugins/global-mounted' },
    { src: '~/plugins/smoothscroll-polyfill', mode: 'client' },
    { src: '~/core/directives/index' },
    { src: '~/plugins/aos', mode: 'client' },
    { src: '~/plugins/notifications-ssr', mode: 'server' },
    { src: '~/plugins/notifications-client', mode: 'client' },
    { src: '~/plugins/tooltip', mode: 'client' },
    { src: '~/plugins/social-sharing', mode: 'client' },
    { src: '~/core/filters' }
  ],

  /* Auto import components: https://go.nuxtjs.dev/config-components */
  components: true,

  /* Build plugins */
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    },

    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /* Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules */
  buildModules: [],

  devServerHandlers: [],

  /* Modules: https://go.nuxtjs.dev/config-modules */
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    [
      'nuxt-mq',
      {
        /* Default breakpoint for SSR */
        defaultBreakpoint: 'sm',
        breakpoints: {
          sm: 577,
          md: 768,
          md2: 993,
          lg: 1024,
          xl: 1280,
          xlg: Infinity
        }
      }
    ],
    ['@nuxtjs/i18n', i18n]
  ],

  /* Generate static routes */
  generate: {
    fallback: true,
    async routes () {
      const availableLocales = ['fr', 'en']

      const results = await Promise.all(
        availableLocales.map(async (locale) => {
          const param = { i18n: locale }
          const posts = await getBlogPosts(param)
          return posts.map((item) => `/blog/${item.fields.slug}`)
        })
      )
      return results
    }
  },

  env: {
    rootDomain: metaConfig.rootDomain
  },

  /* You will need to add this: */
  server: {
    host: '0',
    port: '3000' // optional
  }
}
