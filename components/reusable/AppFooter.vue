<template>
  <footer class="footer flex bg-reversed-grey">
    <div
      class="
        footer__container
        container
        flex
        flex-col
        flex-grow
        border-t-2
        py-60
        md:py-80
        lg:py-100
        xl:py-125
      "
    >
      <div
        class="
          footer__grid
          grid
          grid-rows-1
          lg:grid-rows-none
          lg:grid-cols-2
          gap-y-40
          lg:gap-y-0
          lg:gap-x-20
        "
      >
        <!-- ROW 1 -->
        <div class="flex flex-col items-start">
          <!-- LOGO -->
          <div class="footer__logo-wrap mb-40">
            <NuxtLink :to="localePath({ name: 'index' }, $i18n.locale)" class="flex h-full cursor-pointer">
              <img src="~/static/images/logo/full-logo.svg" alt="logo" class="max-h-full" />
            </NuxtLink>
          </div>

          <!-- DESC -->
          <p class="footer__desc w-full text-time-warp mb-30">
            {{ $t("footer.row1.desc") }}
          </p>

          <!-- CONTACT INFO -->
          <div class="flex">
            <ul class="flex flex-col space-y-14">
              <li
                v-for="(item, key, index) of $options.row1"
                :key="index"
                class="flex items-center"
              >
                <!-- MAIL -->
                <a
                  v-if="key === 'mail'"
                  :href="`mailto:${$t(`footer.row1.constactInfo.${key}`)}`"
                  class="flex items-center text-white"
                >
                  <span>{{ $t(`footer.row1.constactInfo.${key}`) }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- ROW 2 -->
        <div class="grid grid-rows-1 md:grid-rows-none md:grid-cols-3 gap-y-40 md:gap-y-0">
          <div class="flex flex-col">
            <!-- TITLE -->
            <h4
              class="footer__row2-title relative text-25 font-semibold text-white pb-16 mb-28 z-20"
            >
              {{ $t("footer.row2.title") }}
            </h4>

            <!-- LINKS -->
            <ul class="flex flex-col space-y-12">
              <li
                v-for="(item, index) in $options.row2"
                :key="index"
                class="flex flex-col"
              >
                <!-- FOR HREF ITEM -->
                <a
                  v-if="item.href"
                  :href="item.href"
                  :aria-label="$t(`footer.row2.links.${index}`)"
                  target="_blank"
                  class="group flex items-center"
                >
                  <span class="text-time-warp group-hover:text-white transition-all duration-500 ease-in-out">
                    {{ $t(`footer.row2.links.${index}`) }}
                  </span>
                </a>

                <!-- FOR SCROLL TO SECTION ITEM -->
                <a
                  v-else
                  :aria-label="$t(`footer.row2.links.${index}`)"
                  class="group flex items-center cursor-pointer"
                  @click.prevent="linkHandler(item.route)"
                >
                  <span class="text-time-warp group-hover:text-white transition-all duration-500 ease-in-out">
                    {{ $t(`footer.row2.links.${index}`) }}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <!-- ROW 3 -->
          <div class="flex flex-col">
            <!-- TITLE -->
            <h4 class="relative text-25 font-semibold text-white pb-16 mb-28 z-20">
              {{ $t("footer.row3.title") }}
            </h4>

            <!-- LINKS -->
            <ul class="flex flex-col space-y-12">
              <li
                v-for="(item, index) in getRow3"
                :key="index"
                class="flex flex-col"
              >
                <!-- FOR HREF ITEM -->
                <a
                  v-if="item.href"
                  :href="item.href"
                  :aria-label="$t(`footer.row3.links.${index}`)"
                  target="_blank"
                  class="group flex items-center"
                >
                  <span class="text-time-warp group-hover:text-white transition-all duration-500 ease-in-out">
                    {{ $t(`footer.row3.links.${index}`) }}
                  </span>
                </a>

                <!-- FOR SCROLL TO SECTION ITEM -->
                <a
                  v-else
                  :aria-label="$t(`footer.row3.links.${index}`)"
                  class="group flex items-center cursor-pointer"
                  @click.prevent="linkHandler(item.route)"
                >
                  <span class="text-time-warp group-hover:text-white transition-all duration-500 ease-in-out">
                    {{ $t(`footer.row3.links.${index}`) }}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <!-- ROW 4 -->
          <div class="flex flex-col">
            <!-- TITLE -->
            <h4 class="relative text-25 font-semibold text-white pb-16 mb-28 z-20">
              {{ $t("footer.row4.title") }}
            </h4>

            <ul class="flex items-center space-x-10">
              <li v-for="(item, index) in socialMedia" :key="index">
                <a
                  :href="item.href"
                  target="_blank"
                  class="
                    gradient-primary
                    flex
                    items-center
                    justify-center
                    w-40
                    h-40
                    rounded-full
                    transition
                    all
                    ease-in-out
                    duration-500
                    hover:scale-110
                  "
                >
                  <AppIcon :name="item.icon" size="20" class="text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
import { scrollToSection } from '~/core/helper-functions'

import AppIcon from '@/components/shared/AppIcon.vue'

export default {
  name: 'AppFooter',

  components: { AppIcon },

  computed: {
    ...mapState(['socialMedia']),

    getRow3 () {
      const route = this.$route.name.split('__')
      if (route[0] === 'index') {
        return this.$options.row3
      } else if (route[0] === 'blog' || route[0] === 'blog-id') {
        return this.$options.row3.filter((el) => el.route !== '#blog')
      } else {
        return this.$options.row3
      }
    }
  },

  methods: {
    linkHandler (href) {
      scrollToSection(href)
    },

    formSubmit () {
      this.$refs.contactForm.submit()
    }
  },

  row1: {
    mail: { icon: 'mail' }
  },

  row2: [
    { route: '', href: 'https://upbots.com/' },
    { route: '#contact-us', href: '' }
  ],

  row3: [
    { route: '', href: 'https://upbots.gitbook.io/superbots/superbots-intro' },
    {
      route: '',
      href: 'https://bscscan.com/address/0x4f42D6705a281302640EbCff2569c670bb4259E8#code'
    },
    { route: '#blog', href: '' }
  ]
}
</script>

<style lang="scss" scoped>
.footer {
  &__container {
    border-color: #1D1B37;
  }

  &__logo-wrap {
    height: 35px;
  }

  &__desc {
    max-width: 340px;
  }

  /* Large Devices, Wide Screens */
  @media(min-width: 1024px) {
    &__grid {
      grid-template-columns: 1fr 2.3fr;
    }
  }
}
</style>
