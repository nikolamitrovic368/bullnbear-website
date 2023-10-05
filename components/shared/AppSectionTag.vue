<template>
  <div
    class="app-section-tag flex items-center uppercase font-kusanagi"
    :class="[color, size, weight]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppSectionTag',

  props: {
    color: {
      type: String,
      default: 'text-splash-of-grenadine'
    },

    size: {
      type: String,
      default: 'text-base'
    },

    weight: {
      type: String,
      default: 'font-normal'
    }
  }
}
</script>
