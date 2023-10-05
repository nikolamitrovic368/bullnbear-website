<template>
  <section id="nft" class="home-nft py-60 md:py-80 lg:py-100 xl:py-125">
    <!-- CONTAINER -->
    <div
      class="
        container
        grid
        grid-rows-1
        md:grid-rows-none
        md:grid-cols-2
        gap-y-60
        md:gap-y-0
        md:gap-x-50
        xl:gap-x-80
      "
    >
      <!-- LEFT SIDE -->
      <div
        data-aos="offset"
        data-aos-easing="ease-in-sine"
        data-aos-delay="250"
        data-aos-duration="1000"
        class="home-nft__ill-anim order-2 md:order-1 lg:-mt-40"
      >
        <div class="home-nft__ill-wrap w-full mx-auto md:mx-0">
          <img
            src="~/static/images/home/nft/nft.png"
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
        class="home-nft__right-side flex flex-col items-center md:items-start order-1 md:order-2"
      >
        <!-- TAG -->
        <AppSectionTag class="mb-20 md:mb-30">{{ $t("home.nft.tag") }}</AppSectionTag>

        <!-- TITLE -->
        <h2 class="home-nft__title section__title w-full text-center md:text-left mb-20">
          {{ $t("home.nft.title") }}
        </h2>

        <!-- DESC -->
        <p
          class="home-nft__desc section__desc w-full text-center md:text-left mb-40"
          v-html="$t('home.nft.desc')"
        />

        <!-- ACTION BTN -->
        <div>
          <a
            href="https://bullnbearfight.club/"
            target="_blank"
            class="home-nft__btn flex w-full"
          >
            <AppButton class="w-full">
              <span class="mr-5">{{ $t("home.nft.btnText") }}</span>
              <AppIcon name="chevron-secondary" size="16" class="mt-2" />
            </AppButton>
          </a>
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
  name: 'HomeNFT',

  components: { AppButton, AppSectionTag, AppIcon }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/utils/_mixins";

.home-nft {
  background: linear-gradient(
    180deg,
    #2D2644 0%,
    theme('colors.reversed-grey') 100%
  );

  &__right-side {
    @include animationOffset("offset", "0", "300px");
  }

  &__title {
    max-width: 420px;
  }

  &__desc {
    max-width: 385px;
  }

  &__btn {
    max-width: 150px;
  }

  &__ill-anim {
    @include animationOffset("offset", "-300px");
  }

  /* Medium Devices, Desktops */
  @media(min-width: 768px) {
    &__ill-wrap {
      max-width: 605px;
    }
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &__ill-wrap {
      max-width: 450px;
    }
  }
}
</style>
