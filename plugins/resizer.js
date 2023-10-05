import Vue from 'vue'
import { scrollThrottle } from '@/core/helper-functions'

export default ({ app }, inject) => {
  /* Reactive Window Parameters */
  const windowInstanceMap = new Vue({
    data () {
      return {
        innerWidth: window.innerWidth,
        scrollY: 0
      }
    },

    created () {
      this.windowResize()
      this.windowScroll()
    },

    methods: {
      /* listening for window resize event */
      windowResize () {
        window.addEventListener(
          'resize',
          (e) => {
            this.innerWidth = window.innerWidth
          },
          true
        )
        window.dispatchEvent(new Event('resize'))
      },

      windowScroll () {
        window.addEventListener(
          'scroll',
          scrollThrottle((e) => {
            this.scrollY = window.scrollY
          }, 25),
          true
        )
      }
    }
  })

  inject('windowInstance', windowInstanceMap)
}
