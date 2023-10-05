<template>
  <transition name="fade">
    <div
      v-show="isScrolled"
      class="
        gradient-primary
        flex
        flex-col
        items-center
        justify-center
        w-40
        h-40
        rounded-full
        transition
        duration-500
        hover:scale-110
        cursor-pointer
      "
      @click="backToTop"
    >
      <Icon name="chevron" class="text-white transform -rotate-180" />
    </div>
  </transition>
</template>

<script>
import Icon from '@/components/shared/AppIcon.vue'

export default {
  name: 'BackToTop',

  components: { Icon },

  data () {
    return {
      userScrollPosition: 0
    }
  },

  computed: {
    isScrolled () {
      return this.userScrollPosition > 100
    }
  },

  mounted () {
    window.addEventListener('scroll', this.updateScrollPosition)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.updateScrollPosition)
  },

  methods: {
    updateScrollPosition () {
      this.userScrollPosition = window.scrollY
    },

    backToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
