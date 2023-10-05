<template>
  <div class="gradient-secondary flex flex-col rounded-sm p-20">
    <!-- TITLE -->
    <h3 class="relative text-white font-semibold text-18 mb-20 z-20">
      {{ $t(title) }}
    </h3>

    <!-- SLOT -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BlogDetailedCard',

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
