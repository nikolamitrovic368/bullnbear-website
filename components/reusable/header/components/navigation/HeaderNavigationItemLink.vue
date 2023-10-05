<template>
  <a
    class="
      flex
      items-center
      relative
      hover:bg-telopea
      uppercase
      whitespace-nowrap
      rounded-md
      p-12
      cursor-pointer
      transition
      ease-in-out
      duration-500
    "
    :target="data.scrollTo ? null : '__blank'"
    :href="data.scrollTo ? null : data.href"
  >
    <div
      class="
        flex
        items-center
        justify-center
        h-50
        w-50
        bg-telopea
        rounded-md
        mr-12
      "
    >
      <AppIcon :name="data.icon" size="22" class="text-white" />
    </div>

    <div class="flex flex-col">
      <span class="text-white text-18">
        {{ $t(`nav.dropdownLinks.${index}.options.${subIndex}.value`)}}
      </span>
      <span class="text-time-warp text-14 leading-none">
        {{ $t(`nav.dropdownLinks.${index}.options.${subIndex}.subValue`)}}
      </span>
    </div>
  </a>
</template>

<script>
import AppIcon from '@/components/shared/AppIcon.vue'

export default {
  name: 'HeaderNavigationItemLink',

  components: { AppIcon },

  props: {
    data: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
      required: true
    },

    subIndex: {
      type: Number,
      required: true
    }
  }
}
</script>
