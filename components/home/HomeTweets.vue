<template>
  <section id="tweets" class="home-tweets flex flex-col bg-reversed-grey py-60 md:py-80">
    <!-- CONTAINER -->
    <div class="container flex flex-col flex-grow items-center">
      <!-- HEAD -->
      <div
        data-aos="offset"
        data-aos-easing="ease-in-sine"
        data-aos-delay="250"
        data-aos-duration="1000"
        class="home-tweets__head flex flex-col items-center mb-40 md:mb-50"
      >
        <!-- TAG -->
        <AppSectionTag class="mb-20 md:mb-30">{{ $t("home.tweets.tag") }}</AppSectionTag>

        <!-- TITLE -->
        <h2 class="home-tweets__title section__title w-full text-center mb-20">
          {{ $t("home.tweets.title") }}
        </h2>

        <!-- DESC -->
        <p class="home-tweets__desc section__desc w-full text-center">
          {{ $t("home.tweets.desc") }}
        </p>
      </div>

      <!-- TWEETS ITEMS -->
      <div class="grid grid-rows-1 lg:grid-cols-3 gap-y-30 lg:gap-y-0 lg:gap-x-40 w-full">
        <Tweet
          v-for="(item) in tweets"
          :id="item.id"
          :key="item.cards"
          :options="item.options"
          class="flex justify-center"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'

import AppSectionTag from '@/components/shared/AppSectionTag.vue'

export default {
  name: 'HomeTweets',

  components: { Tweet, AppSectionTag },

  data () {
    return {
      tweets: [
        {
          id: '1592850823448780802',
          options: { tweetLimit: '1', theme: 'dark', width: '300', cards: 'hidden', lang: this.$i18n.locale }
        },
        {
          id: '1592143173949816834',
          options: { tweetLimit: '3', theme: 'dark', width: '300', cards: 'hidden', lang: this.$i18n.locale }
        },
        {
          id: '1589964228353347584',
          options: { tweetLimit: '3', theme: 'dark', width: '300', cards: 'hidden', lang: this.$i18n.locale }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home-tweets {
  &__title {
    max-width: 300px;
  }

  &__desc {
    max-width: 450px;
  }
}
</style>
