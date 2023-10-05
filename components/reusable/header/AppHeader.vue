<template>
  <header>
    <!-- NAV -->
    <nav
      class="
        header
        fixed
        top-0
        left-0
        flex
        items-center
        w-full
        py-16
        transition-all
        duration-500
        ease-in-out
        z-70
      "
      :class="[headerClasses, { 'is-fixed': isFixed }]"
      @touchmove.prevent
    >
      <!-- CONTAINER -->
      <div class="container flex items-center justify-between space-x-20">
        <!-- LOGO -->
        <div class="header__logo-wrap h-30 md2:h-34">
          <NuxtLink
            :to="localePath({ name: 'index' }, $i18n.locale)"
            class="flex h-full cursor-pointer"
          >
            <img src="~/static/images/logo/full-logo.svg" alt="logo" class="max-h-full" />
          </NuxtLink>
        </div>

        <!-- SHOW ONLY FOR DESKTOP VIEW -->
        <mq-layout mq="lg+" class="flex flex-grow items-center justify-between">
          <slot name="nav-list">
            <!-- NAVIGATION -->
            <HeaderNavigation class="flex items-center mx-auto space-x-40" />

            <!-- LAUNCH APP -->
            <a href="https://app.superbots.finance/" target="_blank" class="flex order-3">
              <AppButton class="header__launch-btn">
                <span class="mr-5">{{ $t("header.btnText") }}</span>
                <AppIcon name="chevron-secondary" size="14" />
              </AppButton>
            </a>
          </slot>

          <!-- LANGUAGE -->
          <HeaderLanguage class="order-2 ml-20 mr-40" />
        </mq-layout>

        <!-- SHOW ONLY FOR TABLET|MOBILE VIEWS -->
        <!-- MENU ICON -->
        <div class="flex md2:hidden" @click="mobileMenuToggle" >
          <div class="hamburger relative w-24 h-18">
            <span
              v-for="item in 4" :key="item"
              class="
                hamburger__bar
                absolute
                block
                w-24
                h-2
                bg-white
                rounded-sm
                transition-all
                duration-500
                ease-in-out
              "
              :class="`hamburger__bar-${item}`"
            />
          </div>
        </div>
      </div>
    </nav>

    <!-- SHOW ONLY FOR TABLET|MOBILE VIEWS -->
    <!-- MOBILE MENU -->
    <mq-layout
      :mq="['sm', 'md', 'md2']"
      class="
        header__mobile-menu
        fixed
        -top-full
        left-0
        flex
        flex-col
        w-full
        p-20
        overflow-y-auto
        z-60
        transition-all
        duration-500
        ease-in-out
      "
      @touchmove.prevent
    >
      <div class="nav-contact-wrap flex flex-col flex-grow items-center">
        <!-- NAVIGATION -->
        <HeaderNavigation
          class="flex flex-col items-center w-full md2:w-auto space-y-20 mb-60"
          @on-close-menu="mobileMenuToggle()"
        >
          <!-- LINKS FOR BLOG PAGE -->
          <template v-if="getSplittedRouteName === 'blog'">
            <!-- BACK TO HOME -->
            <NuxtLink
              :to="localePath({ name: 'index' }, $i18n.locale)"
              class="text-20 text-orochimaru font-accidental-presidency tracking-xxs"
            >
              Back To Home
            </NuxtLink>
          </template>

          <!-- LINKS FOR BLOG DETAILE PAGE -->
          <template v-if="getSplittedRouteName !== 'index' && getSplittedRouteName !== 'blog' ">
            <!-- BACK TO BLOG -->
            <NuxtLink
              :to="localePath({ name: 'blog' }, $i18n.locale)"
              class="text-20 text-orochimaru font-accidental-presidency tracking-xxs"
            >
              Blog
            </NuxtLink>

            <!-- BACK TO HOME -->
            <NuxtLink
              :to="localePath({ name: 'index' }, $i18n.locale)"
              class="text-20 text-orochimaru font-accidental-presidency tracking-xxs"
            >
              Back To Home
            </NuxtLink>
          </template>
        </HeaderNavigation>

        <!-- LAUNCH APP -->
        <a
          href="https://app.superbots.finance/"
          target="_blank"
          class="header__launch-btn flex w-full mb-60"
        >
          <AppButton class="w-full">
            <span class="mr-5">{{ $t("header.btnText") }}</span>
            <AppIcon name="chevron-secondary" size="14" />
          </AppButton>
        </a>

        <!-- LANGUAGE -->
        <HeaderLanguage class="mt-auto"  />
      </div>
    </mq-layout>
  </header>
</template>

<script>
import HeaderNavigation from './components/HeaderNavigation.vue'
import HeaderLanguage from './components/HeaderLanguage.vue'

import AppButton from '@/components/shared/AppButton.vue'
import AppIcon from '@/components/shared/AppIcon.vue'

const $body = process.client ? document.body : null

export default {
  name: 'AppHeader',

  components: { HeaderNavigation, HeaderLanguage, AppButton, AppIcon },

  props: {
    headerClasses: {
      type: String,
      default: ''
    }
  },

  computed: {
    isFixed () {
      return this.$windowInstance && this.$windowInstance.scrollY > 106 // height of header: 106px
    },

    getSplittedRouteName () {
      return this.$route.name.split('__')[0]
    }
  },

  methods: {
    mobileMenuToggle () {
      $body.classList.toggle('is-open-menu')
    }
  }
}
</script>

<style lang="scss">
.header {
  background: linear-gradient(
    251.87deg,
    theme('colors.konkikyo-blue') 5.56%,
    theme('colors.jagger') 99.68%
  );

  /* Large Devices, Wide Screens */
  @media(min-width: 993px) {
    height: 82px;

    &.is-transparent:not(.is-fixed) {
      @apply bg-none;
    }
  }

  &__launch-btn {
    min-width: 190px;
  }

  /* Medium Devices, Desktops */
  @media(max-width: 992px) {
    height: 70px;

    &__mobile-menu {
      height: calc(100% - 70px);
      background-image: linear-gradient(
        251.87deg,
        theme('colors.konkikyo-blue') 5.56%,
        theme('colors.jagger') 99.68%
      );
    }
  }
}

.hamburger {
  &__bar-1 {
    @apply top-0;
  }

  &__bar-2,
  &__bar-3 {
    @apply top-8;
  }

  &__bar-3 {
    @apply right-0;
  }

  &__bar-4 {
    @apply bottom-0;
  }
}

.is-open-menu {
  @apply overflow-hidden h-full;

  .header {
    &__mobile-menu {
      @apply top-70;
    }
  }

  .hamburger {
    &__bar-1,
    &__bar-4 {
      @apply w-26 transform;
      transform-origin: 5%;
    }

    &__bar-2,
    &__bar-3 {
      @apply transform;
      background-color: transparent;
    }

    &__bar-1 {
      @apply rotate-45;
    }

    &__bar-2 {
      @apply -translate-x-40;
    }

    &__bar-3 {
      @apply translate-x-40;
    }

    &__bar-4 {
      @apply -rotate-45;
    }
  }
}
</style>
