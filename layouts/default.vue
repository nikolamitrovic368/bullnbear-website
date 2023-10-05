<template>
  <div class="flex flex-col">
    <!-- ROOT -->
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>

    <!-- NOTIFICATIONS -->
    <client-only>
      <notifications group="global" position="top right" :width="400" />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  animation: coming 0.3s;
  animation-delay: 0.1s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.3s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
