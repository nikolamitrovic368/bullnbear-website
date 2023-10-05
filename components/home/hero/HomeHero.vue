<template>
  <AppHero class="home-hero__content py-125 md:pb-0 md:pt-0">
    <!-- CONTAINER -->
    <div class="container flex flex-col flex-grow z-30">
      <div class="flex flex-col flex-grow mb-40">
        <div class="flex-col mb-40 md:mb-20 lg:mb-40">
          <!-- TITLE -->
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="500"
            data-aos-duration="1000"
            class="home-hero__content-title font-bold w-full text-white text-35 mb-30"
          >
            {{ $t("home.hero.title") }}
          </h1>

          <!-- SUBTITLE -->
          <h2
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="700"
            data-aos-duration="1000"
            class="home-hero__content-subtitle flex flex-col w-full text-time-warp text-20"
          >
            <span>{{ $t("home.hero.subtitle[0]") }}</span>
            <span>{{ $t("home.hero.subtitle[1]") }}</span>
          </h2>
        </div>

        <!-- ACTION BTN -->
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1000"
          data-aos-duration="1000"
          class="home-hero__content-action-btn flex items-center mb-40 md:mb-20 lg:mb-50"
        >
          <a
            href="https://app.superbots.finance/"
            target="_blank"
            class="home-hero__content-webapp-btn flex w-full"
          >
            <AppButton class="w-full">
              <span class="mr-5">{{ $t("home.hero.btnText") }}</span>
              <AppIcon name="chevron-secondary" size="16" class="mt-2" />
            </AppButton>
          </a>
        </div>

        <!-- IMAGES -->
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1250"
          data-aos-duration="1000"
          class="flex items-center space-x-10 md:space-x-20 mt-auto md:mt-0"
        >
          <p class="font-accidental-presidency tracking-xxs md:text-18 md:text-25 text-white uppercase">
            {{ $t("home.hero.imagesText") }}
          </p>

          <div class="home-hero__content-sp-img-wrap w-full">
            <img
              src="~/static/images/home/hero/solidproof-logo.svg"
              alt="solidproof"
              class="w-full h-full"
            />
          </div>

          <div class="home-hero__content-immunefi-img-wrap w-full">
            <img
              src="~/static/images/home/hero/immunefi-logo.svg"
              alt="immunefi"
              class="w-full h-full"
            />
          </div>

          <div class="home-hero__content-certik-img-wrap w-full">
            <img
              src="~/static/images/home/hero/certik-logo.svg"
              alt="certik"
              class="w-full h-full"
            />
          </div>
        </div>
      </div>

      <!-- SUMMARY -->
      <HomeHeroSummary :is-container="false" class="hidden md:flex" />
    </div>
  </AppHero>
</template>

<script>

import AppHero from '../../reusable/AppHero.vue'

import AppIcon from '@/components/shared/AppIcon.vue'
import AppButton from '@/components/shared/AppButton.vue'

export default {
  name: 'HomeHero',

  components: { AppHero, AppIcon, AppButton }
}
</script>

<style lang="scss" scoped>
.home-hero {
  &__content-title {
    line-height: 1.2;
  }

  &__content-webapp-btn {
    max-width: 170px;
  }

  /* Large Devices, Wide Screens */
  @media(min-width: 1280px) {
    &__content-title {
      max-width: 820px;
      font-size: 60px;
    }
  }

  /* Large Devices, Wide Screens */
  @media(min-width: 1024px) and (max-width: 1279px) {
    &__content-title {
      max-width: 590px;
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

  /* Large Devices, Wide Screens */
  /* Medium Devices, Desktops */
  @media(min-width: 768px) {
    &__content {
      @apply h-screen;
      padding: 18% 0 1% 0;
    }

    &__content-sp-img-wrap {
      max-width: 34px;
    }

    &__content-immunefi-img-wrap,
    &__content-certik-img-wrap {
      max-width: 143px;
    }

    &__content-subtitle {
      max-width: 580px;
    }
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &__content-sp-img-wrap {
      max-width: 24px;
    }

    &__content-immunefi-img-wrap,
    &__content-certik-img-wrap {
      max-width: 70px;
    }
  }

  @media(max-width: 374px) {
    &__content-title {
      @apply text-30;
    }
  }
}
</style>
