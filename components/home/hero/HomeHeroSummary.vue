<template>
  <div class="home-hero-summary flex-col w-full z-30">
    <div :class="{ 'container': isContainer }">
      <div
        class="
          home-hero-summary__card
          md:border
          md:border-carbon-blue
          md:rounded-xl
          lg:p-40
          xl:px-60
          md:p-20
        "
      >
        <!-- UBXN VALUES LIST -->
        <ul class="grid grid-cols-2 md:grid-cols-4 gap-20 md:gap-x-20 lg:gap-x-60 items-start">
          <!-- MARKET CAP -->
          <li class="home-hero-summary__item">
            <!-- VALUE -->
            <div class="home-hero-summary__value">
              <!-- LOADER -->
              <template v-if="loading"> <AppTextLoader /> </template>

              <!-- VALUE -->
              <template v-else>
                {{ formatLargeNumber({ prependSymbol: "$", value: marketCap, toFixed: 1,})}}
              </template>
            </div>

            <!-- TITLE -->
            <h4 class="home-hero-summary__title">
              {{ $t("home.summary.marketCap.title") }}
            </h4>
          </li>

          <!-- CIRCULATING SUPPLY -->
          <li class="home-hero-summary__item">
            <!-- VALUE -->
            <div class="home-hero-summary__value">
              <!-- LOADER -->
              <template v-if="loading"> <AppTextLoader /> </template>

              <!-- VALUE -->
              <template v-else>
                {{ formatLargeNumber({ value: circulatingSupply, toFixed: 1 }) }}
              </template>
            </div>

            <!-- TITLE -->
            <h4 class="home-hero-summary__title">
              {{ $t("home.summary.circulatingSupply.title") }}
            </h4>
          </li>

          <!-- UBXN STAKED -->
          <li class="home-hero-summary__item">
            <!-- VALUE -->
            <div class="home-hero-summary__value">
              <!-- LOADER -->
              <template v-if="loading"> <AppTextLoader /> </template>

              <!-- VALUE -->
              <template v-else>
                {{ formatLargeNumber({ value: UBXNStaked, toFixed: 1 }) }}
                <span class="text-18 text-splash-of-grenadine">{{ $options.staticData.token }}</span>
              </template>
            </div>

            <!-- TITLE -->
            <h4 class="home-hero-summary__title">
              {{ $t("home.summary.UBXNStaked.title") }}
            </h4>
          </li>

          <!-- TOTAL BURNED -->
          <li class="home-hero-summary__item">
            <!-- VALUE -->
            <div class="home-hero-summary__value">
              <!-- LOADER -->
              <template v-if="loading"> <AppTextLoader /> </template>

              <!-- VALUE -->
              <template v-else>
                {{ formatLargeNumber({ value: totalBurned, toFixed: 3 }) }}
                <span class="text-18 text-splash-of-grenadine">{{ $options.staticData.token }}</span>
              </template>
            </div>

            <!-- TITLE -->
            <h4 class="home-hero-summary__title">
              {{ $t("home.summary.totalBurned.title") }}
            </h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { formatLargeNumber } from '@/core/helper-functions'

import { UBXN } from '@/core/tokens'

import AppTextLoader from '@/components/shared/AppTextLoader.vue'

export default {
  name: 'HomeHeroSummary',

  components: { AppTextLoader },

  props: {
    isContainer: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      loading: false,
      marketCap: 0,
      circulatingSupply: 0,
      UBXNStaked: 0,
      totalBurned: 0
    }
  },

  created () {
    this.fetchCirculation()
  },

  methods: {
    formatLargeNumber: formatLargeNumber,

    async fetchCirculation () {
      this.loading = true

      try {
        const apiURL = 'https://app.superbots.finance/api/blockchain-data/circulation-temp'

        const { data } = await this.$axios.get(apiURL)
        this.marketCap = data.marketCap
        this.circulatingSupply = data.available
        this.UBXNStaked = data.stakedAmount
        this.totalBurned = data.burnedAmount

        // TODO:
        // this.marketCap = data.marketCap
        // this.circulatingSupply = data.available.value
        // this.UBXNStaked = data.stakedAmount
        // this.totalBurned = data.burnedAmount
      } catch (e) {
        this.$notify({
          group: 'global',
          type: 'error',
          title: 'Circulation API Error',
          text: e
        })
      } finally {
        this.loading = false
      }
    }
  },

  staticData: {
    token: UBXN
  }
}
</script>

<style lang="scss" scoped>
.home-hero-summary {
  &__card {
    background: linear-gradient(
      282.23deg,
      rgba(7, 8, 15, 0.94) 46.32%,
      rgba(7, 8, 15, 0.83) 72.87%
    );
  }

  &__item {
    @apply flex flex-col items-center md:items-start justify-center;
  }

  &__title {
    @apply font-semibold uppercase text-orochimaru md:text-14 lg:text-base text-center;
  }

  &__value {
    @apply text-25 lg:text-35 text-white mb-5;
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    @apply bg-reversed-grey;
  }
}
</style>
