import { extend, scrollToSection } from '~/core/helper-functions'

export default ({ app, route }) => {
  extend(app, {
    mounted () {
      // scroll to section if navigated from other pages
      if (this.$route.hash && document.querySelector(this.$route.hash)) {
        scrollToSection(this.$route.hash)
      }
      // fix for page scroll reset to 0 after page-reload || nuxt-router issue
      if (process.client && window) {
        window.history.scrollRestoration = 'auto'
      }
      window.dispatchEvent(new CustomEvent('scroll'))
    }
  })
}
