<template>
  <section id="partners" class="home-partners flex flex-col bg-reversed-grey py-60 md:py-80">
    <!-- CONTAINER -->
    <div class="container flex flex-col flex-grow items-center">
      <!-- HEAD -->
      <div class="flex flex-col items-center mb-40 md:mb-50">
        <!-- TAG -->
        <AppSectionTag class="mb-20 md:mb-30">
          {{ $t("home.partners.tag") }}
        </AppSectionTag>

        <!-- TITLE -->
        <h2 class="home-partners__title section__title w-full text-center mb-20">
          {{ $t("home.partners.title") }}
        </h2>

        <!-- DESC -->
        <p class="home-partners__desc section__desc w-full text-center">
          {{ $t("home.partners.desc") }}
        </p>
      </div>

      <!-- CONTENT -->
      <div class="home-partners__items-wrap flex flex-col items-center w-full">
        <!-- ROW 1 (6 IMAGES) -->
        <div
          class="
            grid
            grid-rows-1
            md:grid-cols-5
            gap-y-20
            md:gap-y-0
            md:gap-x-30
            lg:gap-x-40
            items-center
            justify-center
            w-full
            md:mb-40
          "
        >
          <template v-for="(item, index) in partnersImgsRow1">
            <div
              v-if="item.imgUrl"
              :key="`img-${index}`"
              class="flex items-center justify-center mx-auto"
            >
              <img
                :src="item.imgUrl"
                :alt="`illustration-${item.imgAlt}`"
                class="w-full h-full object-cover"
              />
            </div>
          </template>
        </div>

        <!-- ROW 2 (4 IMAGES) -->
        <div
          class="
            grid
            grid-rows-1
            md:grid-cols-5
            gap-y-20
            md:gap-y-0
            md:gap-x-30
            lg:gap-x-40
            items-center
            justify-center
            w-full
          "
        >
          <template v-for="(item, index) in partnersImgsRow2">
            <div
              v-if="Object.keys(item).length"
              :key="`img-${index}`"
              class="flex items-center justify-center mx-auto"
            >
              <img
                :src="item.imgUrl"
                :alt="`illustration-${item.imgAlt}`"
                class="w-full h-full object-cover"
              />
            </div>
            <div v-else :key="`div-${index}`" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppSectionTag from '@/components/shared/AppSectionTag.vue'

export default {
  name: 'HomePartners',

  components: { AppSectionTag },

  data () {
    return {
      partnersImgsRow1: [
        {
          imgUrl: require('@/static/images/home/partners/pack/bitcoinist.png'),
          imgAlt: 'bitcoinist'
        },
        {
          imgUrl: require('@/static/images/home/partners/pack/coinfomania.png'),
          imgAlt: 'coinfomania'
        },
        {
          imgUrl: require('@/static/images/home/partners/pack/cryptoninjas.png'),
          imgAlt: 'cryptoninjas'
        },
        {
          imgUrl: require('@/static/images/home/partners/pack/marketwatch.png'),
          imgAlt: 'marketwatch'
        },
        {
          imgUrl: require('@/static/images/home/partners/pack/newsbtc.png'),
          imgAlt: 'news-btc'
        }
      ],

      partnersImgsRow2: [
        {}, // empty item for UI
        {
          imgUrl: require('@/static/images/home/partners/pack/utoday.png'),
          imgAlt: 'u-today'
        },
        {
          imgUrl: require('@/static/images/home/partners/pack/yahoo.png'),
          imgAlt: 'yahoo-finance'
        },
        {
          imgUrl: require('@/static/images/home/partners/pack/cryptonaute.png'),
          imgAlt: 'cryptonaute'
        },
        {} // empty item for UI
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-partners {
  &__title {
    max-width: 380px;
  }

  &__desc {
    max-width: 450px;
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &__items-wrap {
      max-width: 250px;
    }
  }
}
</style>
