<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppAccordion',

  provide () {
    return {
      accordion: {
        defaultOpen: this.defaultOpen
      }
    }
  },

  props: {
    accordionBehave: {
      type: Boolean,
      default: true
    },

    defaultOpen: {
      type: Number,
      default: 0
    }
  },

  methods: {
    handleCollapseAction (activeIndex) {
      this.$children.forEach((accordion) => {
        if (this.accordionBehave && activeIndex !== accordion.index) {
          accordion.close()
        }
      })
    }
  }
}
</script>
