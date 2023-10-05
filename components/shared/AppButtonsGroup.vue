<template>
  <div class="app-buttons-group" :class="[buttonTypes, buttonSizes]">
    <ul class="flex">
      <!-- ITEM -->
      <li v-for="(item, index) in options" :key="index" class="mr-20 last:mr-0">
        <!-- BUTTON -->
        <div
          class="
            app-buttons-group__item-link
            relative
            flex
            justify-center
            items-center
            text-time-warp
            font-accidental-presidency
            tracking-xxs
            uppercase
            focus:outline-none
            cursor-pointer
          "
          :class="[
            { 'is-active': item.value === value },
            { 'is-disabled': disabled || isDisabled(item.value) },
          ]"
          :style="getItemWidth"
          :disabled="disabled || isDisabled(item.value)"
          @click="disabled || isDisabled(item.value) ? null : setSelection(item)"
        >
          <!-- SLOT TAB -->
          <slot name="tab" :data="item">
            <span :class="{ 'text-opacity-50': item.value !== value }">
              {{ languageKey ? $t(`${languageKey}.${index}`) : "Lang not provided" }}
            </span>
          </slot>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const types = Object.freeze({ primary: 'is-primary' })
const sizes = Object.freeze({ md: 'size-md' })

export default {
  name: 'AppButtonsGroup',

  props: {
    value: {
      type: [String, Number],
      required: true
    },

    options: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.length > 1
      }
    },

    width: {
      type: String,
      default: 'auto'
    },

    type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary'].includes(value)
      }
    },

    size: {
      type: String,
      default: 'md',
      validator: function (value) {
        return ['md'].includes(value)
      }
    },

    languageKey: {
      type: String,
      required: true
    },

    disabledOptions: {
      type: Array,
      default: () => []
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    buttonTypes () {
      return types[this.type]
    },

    buttonSizes () {
      return sizes[this.size]
    },

    getItemWidth () {
      return `width: ${this.width}`
    }
  },

  methods: {
    setSelection (option) {
      this.$emit('input', option.value)
    },

    isDisabled (item) {
      return this.disabledOptions.includes(item)
    }
  }
}
</script>

<style lang="scss">
.app-buttons-group {
  &.is-primary {
    .app-buttons-group {
      &__item-link {
        &.is-active {
          &.is-active {
            @apply text-white;

            &::before {
              content: '';
              @apply absolute left-1/2 bottom-0 transform -translate-x-1/2 w-full h-4 transition-all duration-500;
              width: calc(100% - 60px);
              background: linear-gradient(
                90deg,
                theme('colors.china-pink') 12.96%,
                theme('colors.norkolk-sky') 100%
              );
            }
          }
        }
      }
    }
  }

  &__item-link {
    &.is-disabled {
      @apply cursor-not-allowed opacity-50;
    }
  }

  &.size-md {
    .app-buttons-group {
      &__item-link {
        @apply text-20 md:text-25 py-10 px-30;
      }
    }
  }
}
</style>
