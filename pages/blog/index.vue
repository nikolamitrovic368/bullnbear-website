<template>
  <div>
    <!-- HEADER -->
    <AppHeader header-classes="is-transparent is-blog">
      <template #nav-list>
        <div class="flex items-center flex-grow">
          <NuxtLink
            :to="localePath({ name: 'index' }, $i18n.locale)"
            class="group flex items-center uppercase text-white font-medium whitespace-nowrap ml-auto cursor-pointer"
          >
            <AppIcon
              name="arrow"
              size="22"
              class="group-hover:-translate-x-5 transform rotate-180 transition duration-300"
            />
            <span class="ml-5">{{ $t("nav.blog.backLink") }}</span>
          </NuxtLink>
        </div>
      </template>
    </AppHeader>

    <!-- BLOG HERO -->
    <BlogHero :posts="posts" />

    <div class="relative md:-mt-100">
      <!-- BLOG CARDS -->
      <section id="blog" class="blog bg-reversed-grey py-60 md:py-80 lg:py-100 xl:py-125">
        <div class="container">
          <div class="flex flex-col">
            <!-- BLOG TITLE -->
            <h2 class="text-30 md:text-35 font-semibold text-white mb-40">
              {{ $t("blog.blogTitle") }}
            </h2>

            <!-- BLOG CONTENT -->
            <!-- BLOG ITEMS -->
            <div
              class="
                blog__items-wrap
                grid
                md:grid-cols-2
                lg:grid-cols-3
                gap-y-40
                md:gap-30
                lg:gap-40
                mx-auto
                md:mx-0
              "
            >
              <BlogItem v-for="(item, index) in posts" :key="index" :data="item.fields" />
            </div>

            <!-- NO DATA STATE IF NEEDED -->
            <!-- <template v-else>
              <div class="flex flex-col items-center justify-center">
                <p class="text-25 font-bold text-center text-white mb-20">
                  No Data Available
                </p>

                <NuxtLink :to="localePath({ name: 'index' }, $i18n.locale)" class="mx-auto">
                  <AppButton size="sm" class="w-full">Back to Home</AppButton>
                </NuxtLink>
              </div>
            </template> -->
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <AppFooter />

      <!-- COPYRIGHT -->
      <AppCopyright />
    </div>
  </div>
</template>

<script>
import { getBlogPosts } from '~/core/contentful'
import { getCanonicalUrl } from '~/core/helper-functions'

import AppIcon from '@/components/shared/AppIcon.vue'

import BlogItem from '@/components/reusable/BlogItem.vue'
import AppHeader from '@/components/reusable/header/AppHeader.vue'
import AppFooter from '@/components/reusable/AppFooter.vue'
import AppCopyright from '@/components/reusable/AppCopyright.vue'

export default {
  name: 'Blog',

  components: {
    AppIcon,
    BlogItem,
    AppHeader,
    AppFooter,
    AppCopyright
  },

  async asyncData ({ i18n }) {
    const posts = await getBlogPosts({ i18n })

    return { posts }
  },

  head () {
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'BullnBear Blog - Learn to trade DeFi and Web3'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'BullnBear Blog - Learn to trade DeFi and Web3'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Weekly, no-fluff educational articles about trading on decentralized finance and web3.'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Weekly, no-fluff educational articles about trading on decentralized finance and web3.'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Weekly, no-fluff educational articles about trading on decentralized finance and web3.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: getCanonicalUrl(this.$route)
        }
      ],

      link: [
        {
          rel: 'canonical',
          href: getCanonicalUrl(this.$route)
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  &__pagination-btn {
    max-width: 150px;
  }

  /* Small Devices, Tablets */
  @media(max-width: 767px) {
    &__items-wrap {
      max-width: 400px;
    }
  }
}
</style>
