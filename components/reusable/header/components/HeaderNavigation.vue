<template>
  <div>
    <slot>
      <!-- ITEMS WITHOUT DROPDOWN MENU -->
      <a
        v-for="(item, index) in $options.links"
        :key="item.value"
        class="
          header__nav-item-link
          flex
          items-center
          justify-start
          w-full
          md2:w-auto
          relative
          text-20
          text-orochimaru
          font-accidental-presidency
          tracking-xxs
          md2:hover:text-white
          whitespace-nowrap
          pb-20
          md2:pb-0
          border-b
          border-orochimaru
          md2:border-none
          md2:transition
          md2:duration-300
          cursor-pointer
        "
        @click.prevent="linkHandler(item.scrollTo)"
      >
        {{ $t(`nav.staticLinks.${index}`) }}
      </a>

      <!-- SHOW ONLY FOR SCREEN > 992 -->
      <!-- ITEMS WITH DROPDOWN MENU -->
      <template v-if="$mq !== 'sm' && $mq !== 'md' && $mq !== 'md2'">
        <div
          v-for="(item, index) in $options.dropdownLinks"
          :key="index"
          class="
            header__nav-item
            group
            flex
            items-center
            relative
            text-20
            font-accidental-presidency
            tracking-xxs
            py-10
            whitespace-nowrap
            transition
            duration-300
            cursor-pointer
          "
        >
          <span class="text-orochimaru group-hover:text-white mr-5">
            {{ $t(`nav.dropdownLinks.${index}.title`) }}
          </span>
          <AppIcon
            name="chevron-secondary"
            class="text-orochimaru group-hover:text-white transform rotate-90 transition duration-300"
          />

          <!-- DROPDOWN ITEMS -->
          <div
            class="
              gradient-secondary
              header__nav-subitem-wrap
              absolute
              -left-18
              block
              border
              border-carbon-blue
              opacity-0
              invisible
              rounded-xl
              p-14
              transition-all
              duration-300
            "
          >
            <ul class="flex flex-col">
              <li v-for="(subItem, subItemIndex) in item.options" :key="subItemIndex">
                <HeaderNavigationLink
                  v-if="subItem.href"
                  :data="subItem"
                  :index="index"
                  :sub-index="subItemIndex"
                />
                <HeaderNavigationLink
                  v-if="subItem.scrollTo"
                  :data="subItem"
                  :index="index"
                  :sub-index="subItemIndex"
                  @click.native.prevent="linkHandler(subItem.scrollTo)"
                />
              </li>
            </ul>
          </div>
        </div>
      </template>

      <!-- SHOW ONLY FOR SCREEN < 993 -->
      <template v-else>
        <HeaderNavigationDropdown
          v-for="(item, index) in $options.dropdownLinks"
          :key="index"
          :index="index"
          :data="item"
          @on-click="linkHandler"
        />
      </template>
    </slot>
  </div>
</template>

<script>
import { scrollToSection } from '~/core/helper-functions'

import HeaderNavigationDropdown from './navigation/HeaderNavigationDropdown.vue'
import HeaderNavigationLink from './navigation/HeaderNavigationItemLink.vue'
import AppIcon from '@/components/shared/AppIcon.vue'

export default {
  name: 'HeaderNavigation',

  components: { HeaderNavigationDropdown, HeaderNavigationLink, AppIcon },

  data () {
    return {
      isDropdownMenuOpen: false
    }
  },

  methods: {
    linkHandler (scrollTo) {
      this.$emit('on-close-menu')
      scrollToSection(scrollTo)
    }
  },

  links: [
    { scrollTo: '#why-us' }
    // { scrollTo: '#nft' }
    // { scrollTo: '#roadmap' }
  ],

  dropdownLinks: [
    {
      options: [
        { href: '', scrollTo: '#blog', icon: 'blog' },
        { href: '', scrollTo: '#faq', icon: 'faq' },
        { href: '', scrollTo: '#contact-us', icon: 'contact-us' },
        { href: 'https://upbots.gitbook.io/superbots/superbots-intro', scrollTo: '', icon: 'doc' }
      ]
    }
  ]
}
</script>

<style lang="scss">
.header {
  &__nav-item-link {
    &::after {
      content: "";
      @apply absolute w-0 h-3 -bottom-10 left-1 transition-all ease-in-out duration-500;
      background: linear-gradient(
        90deg,
        theme('colors.china-pink') 12.96%,
        theme('colors.norkolk-sky') 100%
      );
    }
  }

  /* Large Devices, Wide Screens */
  @media(min-width: 1280px) {
    &__nav-subitem-wrap {
      width: 500px;
    }
  }

  /* Medium Devices, Desktops */
  @media(min-width: 993px) and (max-width: 1279px) {
    &__nav-subitem-wrap {
      width: 390px;
    }
  }

  /* Large Devices, Wide Screens */
  /* Medium Devices, Desktops */
  @media(min-width: 993px) {
    &__nav-item-link {
      &.nuxt-link-exact-active {
        &::after {
          @apply w-20;
        }
      }

      &:not(.nuxt-link-exact-active) {
        &:hover {
          &::after {
            @apply w-20;
          }
        }
      }
    }

    &__nav-item {
      &:hover {
        .header {
          &__nav-subitem-wrap {
            @apply opacity-100 visible transition-all duration-300;
            top: 100%;
            transform: rotateX(0deg);
          }
        }

        .icon-chevron-secondary {
          @apply -rotate-90;
        }
      }
    }

    &__nav-subitem-wrap {
      top: 200%;
    }
  }
}
</style>
