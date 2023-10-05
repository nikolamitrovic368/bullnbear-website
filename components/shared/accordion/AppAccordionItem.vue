<template>
  <div ref="accordionTitle" class="mb-30 last:mb-0">
    <div class="app-accordion__item rounded-lg overflow-hidden">
      <!-- PREVIEW -->
      <div class="flex items-center p-20 md:p-30 cursor-pointer" @click="toggle">
        <!-- PREVIEW PREPEND -->
        <slot name="preview-prepend" />

        <!-- PREVIEW CONTENT -->
        <slot name="title" :is-opened="isOpen" />

        <!-- PREVIEW APPEND -->
        <slot name="preview-append">
          <AppIcon
            :name="collapseIcon"
            :size="$mq === 'sm' || $mq === 'md' ? '20' : '24'"
            class="text-white ml-14 transform rotate-90 transition duration-300"
            :class="{ 'transform rotate-180 text-splash-of-grenadine': isOpen }"
          />
        </slot>
      </div>

      <!-- CONTENT -->
      <transition
        enter-active-class="enter-active"
        leave-active-class="leave-active"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div v-show="isOpen">
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/shared/AppIcon.vue'

export default {
  name: 'AppAccordionItem',

  components: { AppIcon },

  inject: ['accordion'],

  props: {
    collapseIcon: {
      type: String,
      default: 'chevron-secondary',
      validator: function (value) {
        return ['chevron', 'chevron-secondary'].includes(value)
      }
    },

    defaultOpen: {
      type: Boolean,
      required: false
    },

    index: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      isOpen: false
    }
  },

  created () {
    this.isOpen = this.accordion.defaultOpen === this.index
  },

  methods: {
    toggle () {
      this.isOpen = !this.isOpen
      this.$parent.handleCollapseAction(this.index)
    },

    scrollToActive () {
      setTimeout(() => {
        const yOffset = 60
        const element = this.$refs.accordionTitle
        const y = element.getClientRects()['0'].top + window.scrollY - yOffset

        window && window.scrollTo({ top: y, behavior: 'smooth' })
      }, 0)
    },

    close () {
      this.isOpen = false
    },

    open () {
      this.isOpen = true
    },

    beforeEnter (element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = '0px'
        }

        element.style.display = null
      })
    },

    enter (element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = `${element.scrollHeight}px`
        })
      })
    },

    afterEnter (element) {
      element.style.height = null

      this.scrollToActive()
    },

    beforeLeave (element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = `${element.offsetHeight}px`
        }
      })
    },

    leave (element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = '0px'
        })
      })
    },

    afterLeave (element) {
      element.style.height = null
    }
  }
}
</script>

<style lang="scss" scoped>
.enter-active,
.leave-active {
  @apply overflow-hidden;
  transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.app-accordion {
  &__item {
    background: linear-gradient(
      90deg,
      #482760 12.48%,
      #7833AE 89.53%
    );
  }
}
</style>
