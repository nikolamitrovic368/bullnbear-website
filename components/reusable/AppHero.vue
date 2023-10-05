<template>
  <section id="hero" class="hero flex flex-col relative w-full">
    <!-- BACKGROUND -->
    <img
      :src="getBackgroundImg"
      alt="background"
      class="hero__bg fixed top-0 left-0 right-0 w-full h-full md:h-full object-cover md:object-initial"
    >

    <!-- MOUNTAIN -->
    <img
      ref="mountain"
      :src="getMountainImg"
      alt="mountain"
      class="absolute top-0 left-0 w-full h-full object-cover"
    >

    <!-- SHIP -->
    <img
      src="~/static/images/home/hero/paralax/ship.png"
      alt="ship"
      class="hero__ship absolute right-0"
    >

    <!-- CONTENT -->
    <div class="flex flex-col flex-grow">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppHero',

  methods: {
    handleScroll (value) {
      const mountain = this.$refs.mountain
      mountain.style.transform = `translate3d(0px, ${value * 0.1}px, 0px)`
    }
  },
  computed: {
    getBackgroundImg () {
      if (this.$mq !== 'sm' && this.$mq !== 'md') {
        return require('~/static/images/home/hero/paralax/background.png')
      } else {
        return require('~/static/images/home/hero/paralax/background-mobile.png')
      }
    },
    getMountainImg () {
      if (this.$mq !== 'sm' && this.$mq !== 'md') {
        return require('~/static/images/home/hero/paralax/mountain.png')
      } else {
        return require('~/static/images/home/hero/paralax/mountain-mobile.png')
      }
    }
  },

  watch: {
    '$windowInstance.scrollY' (newVal) {
      this.handleScroll(newVal)
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  &__bg {
    z-index: -10;
  }

  &__ship {
    width: 30%;
  }

  /* Large Devices, Wide Screens */
  @media(min-width: 1024px) {
    &__ship {
      top: 24%;
    }
  }

  /* Medium Devices, Desktops */
  @media(max-width: 1023px) {
    &__ship {
      bottom: 30%;
    }
  }
}
</style>
