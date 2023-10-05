<template>
  <section
    id="about-us"
    class="home-about-us flex bg-reversed-grey py-60 md:py-80 lg:py-100 xl:py-125"
  >
    <div class="container flex flex-col">
      <!-- TAG -->
      <div
        data-aos="offset"
        data-aos-easing="ease-in-sine"
        data-aos-delay="250"
        data-aos-duration="1000"
        class="home-about-us__head-anim flex flex-col items-center mx-auto"
      >
        <AppSectionTag class="text-center mb-20 md:mb-30">
          {{ $t("home.aboutUs.tag") }}
        </AppSectionTag>

        <!-- TITLE -->
        <h2 class="home-about-us__title section__title w-full text-center mb-50 md:mb-100">
          {{ $t("home.aboutUs.title") }}
        </h2>
      </div>

      <!-- GRID -->
      <div
        class="
          grid
          grid-rows-1
          md:grid-rows-none
          md:grid-cols-2
          gap-y-60
          md:gap-y-0
          md:gap-x-50
          xl:gap-x-100
        "
      >
        <!-- LEFT SIDE -->
        <div
          data-aos="offset"
          data-aos-easing="ease-in-sine"
          data-aos-delay="250"
          data-aos-duration="1000"
          class="home-about-us__ill-anim lg:-mt-40"
        >
          <div class="home-about-us__side-container w-full mx-auto md:ml-auto">
            <img
              src="~/static/images/home/about-us/ill.png"
              alt="illustration"
              class="w-full"
            />
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div
          data-aos="offset"
          data-aos-easing="ease-in-sine"
          data-aos-delay="250"
          data-aos-duration="1000"
          class="home-about-us__right-side flex md:justify-end"
        >
          <div class="home-about-us__side-container w-full mx-auto md:mx-0">
            <!-- DESC -->
            <p
              class="home-about-us__desc section__desc w-full mb-40"
              v-html="$t('home.aboutUs.desc')"
            />

            <!-- LIST -->
            <ul class="space-y-8 mb-40">
              <li
                v-for="(_, index) in $options.list"
                :key="index"
                class="flex items-center text-18 font-medium"
              >
                <AppIcon
                  name="check-circle"
                  size="24"
                  class="text-splash-of-grenadine"
                />
                <span class="text-white font-medium ml-14">
                  {{ $t(`home.aboutUs.list.${index}`) }}
                </span>
              </li>
            </ul>

            <!-- ACTION BTN -->
            <div>
              <a
                href="https://app.superbots.finance/"
                target="_blank"
                class="home-about-us__btn flex w-full"
              >
                <AppButton class="w-full">
                  <span class="mr-5">{{ $t("home.aboutUs.btnText") }}</span>
                  <AppIcon name="chevron-secondary" size="16" class="mt-2" />
                </AppButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppIcon from '@/components/shared/AppIcon.vue'
import AppButton from '@/components/shared/AppButton.vue'
import AppSectionTag from '@/components/shared/AppSectionTag.vue'

export default {
  name: 'HomeAboutUs',

  components: { AppIcon, AppButton, AppSectionTag },

  list: 3 // list count should be depend on localization list
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/utils/_mixins";

.home-about-us {
  &__title {
    max-width: 470px;
  }

  &__head-anim {
    @include animationOffset("offset", "0", "200px");
  }

  &__right-side {
    @include animationOffset("offset", "0", "300px");
  }

  &__side-container {
    max-width: 450px;
  }

  &__btn {
    max-width: 150px;
  }

  &__ill-anim {
    @include animationOffset("offset", "-300px");
  }

  /* Medium Devices, Desktops */
  @media(min-width: 768px) {
    &__desc {
      max-width: 385px;
    }

    &__side-container {
      max-width: 450px;
    }
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &__side-container {
      max-width: 550px;
    }
  }
}
</style>
