<template>
  <component
    :is="tag"
    :type="type"
    class="app-button flex items-center justify-center focus:outline-none"
    :class="getButtonStyles"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
const types = Object.freeze({
  primary: 'is-primary gradient-primary',
  'text-primary-link': 'is-text-primary-link',
  'gradient-underlined': 'is-gradient-underlined'
})
const sizes = Object.freeze({ sm: 'size-sm', md: 'size-md' })

export default {
  name: 'AppButton',

  props: {
    title: {
      type: String,
      default: 'Button'
    },

    tag: {
      type: String,
      default: 'button'
    },

    type: {
      type: String,
      default: 'button',
      validator: function (value) {
        return ['button', 'reset', 'submit'].includes(value)
      }
    },

    styleType: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'text-primary-link', 'gradient-underlined'].includes(value)
      }
    },

    size: {
      type: String,
      default: 'md',
      validator: function (value) {
        return ['sm', 'md'].includes(value)
      }
    },

    rounded: {
      type: String,
      default: 'full'
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getButtonSizes () {
      return types[this.styleType]
    },

    getButtonTypes () {
      return sizes[this.size]
    },

    getButtonRounded () {
      return `rounded-${this.rounded}`
    },

    isDisabled () {
      return this.disabled && 'is-disabled'
    },

    getButtonStyles () {
      return [
        this.getButtonSizes,
        this.getButtonTypes,
        this.getButtonRounded,
        this.isDisabled
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-button {
  &.size-sm {
    @apply px-20 py-4;
    height: 42px;
  }

  &.size-md {
    @apply px-20 py-4;
    min-height: 48px;
  }

  &.is-disabled {
    @apply opacity-50 cursor-not-allowed;
  }

  &.is-primary,
  &.is-gradient-underlined {
    @apply transition-all duration-500;
  }

  &.is-primary,
  &.is-text-primary-link,
  &.is-gradient-underlined {
    @apply text-white text-20 font-accidental-presidency tracking-xxs;
  }

  &.is-primary {
    background-size: 100% 100%;

    &:not(.is-disabled) {
      &:hover {
        background-size: 150% 100%;
      }

      &:active {
        background-size: 100% 100%;
      }
    }
  }

  &.is-gradient-underlined {
    @apply relative;

    &::before {
      content: '';
      @apply absolute left-1/2 bottom-0 transform -translate-x-1/2 w-full h-4 transition-all duration-500;
      width: calc(100% - 40px);
      background: linear-gradient(
        90deg,
        theme('colors.china-pink') 12.96%,
        theme('colors.norkolk-sky') 100%
      );
      background-size: 100% 100%;
    }

    &:not(.is-disabled) {
      &:hover {
        &::before {
          background-size: 200% 100%;
        }
      }

      &:active {
        &::before {
          background-size: 300% 100%;
        }
      }
    }
  }
}
</style>
