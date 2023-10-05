<template>
  <i :class="getClasses" :style="getIconSize" />
</template>

<script>
export default {
  name: 'AppIcon',

  props: {
    name: {
      type: String,
      required: true
    },

    size: {
      type: [String, Number],
      default: 15
    }
  },

  computed: {
    getClasses () {
      return [`icon-${this.name}`]
    },

    getIconSize () {
      return { fontSize: `${this.size}px` }
    }
  }
}
</script>
