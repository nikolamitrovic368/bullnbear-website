<template>
  <div
    class="
      flex
      flex-col
      w-full
      relative
      text-20
      font-accidental-presidency
      tracking-xxs
      py-10
      whitespace-nowrap
      pb-20
      md2:pb-0
      border-b
      border-orochimaru
      md2:border-none
      transition
      duration-300
      cursor-pointer
    "
    @click="isDropdownMenuOpen = !isDropdownMenuOpen"
  >
    <!-- PREVIEW -->
    <div class="flex items-center justify-between w-full mb-10">
      <span class="text-orochimaru mr-5">{{ $t(`nav.dropdownLinks.${index}.title`) }}</span>
      <AppIcon
        name="chevron-secondary"
        class="text-orochimaru transform transition duration-500"
        :class="isDropdownMenuOpen ? '-rotate-90' : 'rotate-90'"
      />
    </div>

    <!-- CONTENT -->
    <transition name="slide">
      <ul
        v-if="isDropdownMenuOpen"
        class="flex flex-col pl-10 space-y-10 transition-transform duration-500 ease-in-out origin-top"
      >
        <li v-for="(subItem, subItemIndex) in data.options" :key="subItemIndex">
          <!-- HREF -->
          <a
            v-if="subItem.href"
            target="__blank"
            :href="subItem.href"
            class="header__nav-subitem flex items-center capitalize"
          >
            <span class="text-orochimaru text-18">
              {{ $t(`nav.dropdownLinks.${index}.options.${subItemIndex}.value`)}}
            </span>
          </a>

          <!-- SCROLL TO SECTION -->
          <a
            v-if="subItem.scrollTo"
            class="header__nav-subitem flex items-center capitalize"
            @click.prevent="$emit('on-click', subItem.scrollTo)"
          >
            <span class="text-orochimaru text-18">
              {{ $t(`nav.dropdownLinks.${index}.options.${subItemIndex}.value`)}}
            </span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import AppIcon from '@/components/shared/AppIcon.vue'

export default {
  name: 'HeaderNavigationDropdown',

  components: { AppIcon },

  props: {
    data: {
      type: Object,
      required: true
    },

    index: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      isDropdownMenuOpen: false
    }
  }
}
</script>

<style lang="scss">
.slide-enter,
.slide-leave-to {
  @apply scale-y-0;
}
</style>
