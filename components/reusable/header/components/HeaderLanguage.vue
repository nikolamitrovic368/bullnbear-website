<template>
  <div>
    <client-only>
      <v-popover offset="16" popover-wrapper-class="header-language__tooltip" class="flex">
        <!-- This will be the popover target (for the events and position) -->
        <div class="flex items-center text-orochimaru hover:text-white transition duration-300 cursor-pointer">
          <AppIcon name="language" size="24" />
          <span class="uppercase font-accidental-presidency tracking-xxs text-20 ml-8">
            {{ this.$i18n.locale }}
          </span>
        </div>

        <!-- This will be the content of the popover -->
        <template #popover>
          <!-- You can put other components too -->
          <ul class="flex flex-col space-y-10">
            <li
              v-for="(item, index) in availableLocales"
              :key="index"
              class="
                text-black
                font-accidental-presidency
                tracking-xxs
                text-20
                font-semibold
                px-20
                hover:opacity-50
                cursor-pointer
                transition
                duration-300
              "
            >
              <NuxtLink
                :to="switchLocalePath(item.code)"
                class="flex items-center space-x-10"
              >
                <img
                  :src="require(`~/static/images/flags/${item.code}.svg`)"
                  :alt="item.name"
                  class="w-18 h-18"
                />
                <span>{{ item.name.toUpperCase() }}</span>
              </NuxtLink>
            </li>
          </ul>
        </template>
      </v-popover>
    </client-only>
  </div>
</template>

<script>
import AppIcon from '@/components/shared/AppIcon.vue'

export default {
  name: 'HeaderLanguage',

  components: { AppIcon },

  computed: {
    availableLocales () {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss">
.tooltip {
  &.popover {
    .header-language {
      &__tooltip {
        .popover-inner {
          @apply px-0 py-10;
        }
      }
    }
  }
}
</style>
