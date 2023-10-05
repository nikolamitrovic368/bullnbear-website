<template>
  <AppHero class="blog-hero__content pt-125 lg:pt-0">
    <!-- CONTAINER -->
    <div class="container flex flex-col flex-grow z-30">
      <!-- LEFT SIDE -->
      <div class="flex flex-col">
        <div class="flex-col mb-40">
          <!-- TITLE -->
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="500"
            data-aos-duration="1000"
            class="blog-hero__content-title font-bold w-full text-white text-35 mb-40"
          >
            {{ $t("blog.hero.title") }}
          </h1>

          <!-- SUBTITLE -->
          <h2
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="750"
            data-aos-duration="1000"
            class="blog-hero__content-subtitle w-full text-time-warp text-20"
          >
            {{ $t("blog.hero.desc") }}
          </h2>
        </div>

        <!-- ACTION BTNS -->
        <template v-if="posts.length">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1000"
            data-aos-duration="1000"
            class="flex"
          >
            <NuxtLink :to="localePath(`/blog/${posts[0].fields.slug}`, $i18n.locale)">
              <AppButton>
                <span class="mr-5">{{ $t("blog.hero.btnText") }}</span>
                <AppIcon name="chevron-secondary" size="16" class="mt-2" />
              </AppButton>
            </NuxtLink>
          </div>
        </template>
      </div>
    </div>
  </AppHero>
</template>

<script>
import AppHero from '../reusable/AppHero.vue'

import AppIcon from '@/components/shared/AppIcon.vue'
import AppButton from '@/components/shared/AppButton.vue'

export default {
  name: 'BlogHero',

  components: { AppHero, AppIcon, AppButton },

  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-hero {
  &__content-title {
    max-width: 450px;
    line-height: 1.2;
  }

  /* Large Devices, Wide Screens */
  @media(min-width: 1280px) {
    &__content-title {
      font-size: 60px;
    }
  }

  /* Medium Devices, Desktops */
  @media(min-width: 768px) and (max-width: 1023px) {
    &__content-title {
      font-size: 2.5rem;
    }
  }

  /* Medium Devices, Desktops */
  @media(max-width: 1023px) {
    &__content {
      height: 700px;
    }
  }

  /* Medium Devices, Desktops */
  @media(min-width: 768px) {
    &__content {
      @apply h-screen;
      padding: 18% 0 1% 0;
    }

    &__content-subtitle {
      max-width: 460px;
    }
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &__content-subtitle {
      max-width: 250px;
    }
  }

  /* Small Devices */
  @media(max-width: 374px) {
    &__content-title {
      @apply text-30;
    }
  }
}
</style>
