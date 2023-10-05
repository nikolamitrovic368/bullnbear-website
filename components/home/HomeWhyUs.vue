<template>
  <section
    id="why-us"
    class="home-why-us flex items-center justify-center bg-reversed-grey py-60 md:py-80 lg:py-100 xl:py-125"
  >
    <div
      class="
        container
        grid
        grid-rows-1
        lg:grid-rows-none
        lg:grid-cols-2
        gap-y-60
        lg:gap-y-0
        lg:gap-x-50
        xl:gap-x-60
      "
    >
      <!-- LEFT SIDE -->
      <div
        data-aos="offset"
        data-aos-easing="ease-in-sine"
        data-aos-delay="250"
        data-aos-duration="1000"
        class="home-why-us__right-side flex justify-center lg:justify-end"
      >
        <div class="home-why-us__side-container flex flex-col items-center lg:items-start w-full">
          <!-- TAG -->
          <AppSectionTag class="mb-20 md:mb-30">
            {{ $t("home.whyUs.tag") }}
          </AppSectionTag>

          <!-- TITLE -->
          <h2 class="home-why-us__title section__title w-full text-center lg:text-left mb-20">
            {{ $t("home.whyUs.title") }}
          </h2>

          <!-- DESC -->
          <p class="home-why-us__desc section__desc w-full text-center lg:text-left mb-40">
            {{ $t("home.whyUs.desc") }}
          </p>

          <!-- CARDS -->
          <ul class="grid grid-rows-1 md:grid-cols-2 gap-y-30 md:gap-30 w-full lg:w-auto mb-50">
            <li
              v-for="(item, index) in $options.list"
              :key="index"
              class="gradient-secondary home-why-us__card w-full rounded-lg py-20 px-24"
            >
              <div class="flex items-center mb-6">
                <AppIcon :name="item.icon" size="18" class="text-splash-of-grenadine mr-5" />
                <h4 class="text-white font-bold">
                  {{ $t(`home.whyUs.list.${index}.title`) }}
                </h4>
              </div>

              <p class="text-time-warp font-medium text-12">
                {{ $t(`home.whyUs.list.${index}.desc`) }}
              </p>
            </li>
          </ul>

          <!-- ACTION BTN -->
          <a
            href="https://app.superbots.finance/"
            target="_blank"
            class="home-why-us__btn flex w-full"
          >
            <AppButton class="w-full mr-auto lg:mr-0">
              <span class="mr-5">{{ $t("home.whyUs.btnText") }}</span>
              <AppIcon name="chevron-secondary" size="16" class="mt-2" />
            </AppButton>
          </a>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div
        data-aos="offset"
        data-aos-easing="ease-in-sine"
        data-aos-delay="250"
        data-aos-duration="1000"
        class="home-why-us__ill-anim flex justify-center lg:justify-end lg:mt-60"
      >
        <div class="home-why-us__side-container w-full">
          <img
            src="~/static/images/home/why-us/ill.png"
            alt="illustration"
            class="home-why-us__img w-full mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/shared/AppButton.vue'
import AppSectionTag from '@/components/shared/AppSectionTag.vue'
import AppIcon from '@/components/shared/AppIcon.vue'

export default {
  name: 'HomeWhyUs',

  components: { AppButton, AppSectionTag, AppIcon },

  list: [
    { icon: 'connection' },
    { icon: 'technology' },
    { icon: 'diamond' },
    { icon: 'secure' }
  ]
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/utils/_mixins";

.home-why-us {
  &__right-side {
    @include animationOffset("offset", "0", "300px");
  }

  &__title {
    max-width: 410px;
  }

  &__btn {
    max-width: 170px;
  }

  &__ill-anim {
    @include animationOffset("offset", "300px");
  }

  /* Large Devices, Wide Screens */
  @media(min-width: 1024px) {
    &__side-container {
      max-width: 500px;

      .home-why-us {
        &__img {
          max-width: 400px;
        }
      }
    }

    &__desc {
      max-width: 440px;
    }
  }

  /* Medium Devices, Desktops */
  @media(min-width: 768px) and (max-width: 1023px) {
    &__side-container {
      .home-why-us {
        &__img {
          max-width: 400px;
        }
      }
    }

    &__desc {
      max-width: 450px;
    }
  }

  /* Large Devices, Wide Screens */
  /* Medium Devices, Desktops */
  @media(min-width: 768px) {
    &__card {
      min-height: 120px;
    }
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &__side-container {
      max-width: 500px;
    }

    &__card {
      min-height: 110px;
    }
  }
}
</style>
