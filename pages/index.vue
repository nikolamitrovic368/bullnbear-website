<template>
  <div class="flex flex-col overflow-x-hidden">
    <!-- HEADER -->
    <AppHeader header-classes="is-transparent" />

    <!-- HERO -->
    <HomeHero />

    <div class="relative">
      <HomeHeroSummary class="flex md:hidden" />

      <!-- ABOUT US SECTION -->
      <HomeAboutUs />

      <!-- WHY US SECTION -->
      <HomeWhyUs />

      <!-- ROAD MAP SECTION -->
      <!-- <HomeRoadMap /> -->

      <!-- NFT SECTION -->
      <!-- <HomeNFT /> -->

      <!-- FAQ SECTION -->
      <HomeFAQ />

      <!-- PARTNERS SECTION -->
      <HomePartners />

      <!-- TWEETS SECTION -->
      <HomeTweets />

      <!-- BLOG SECTION -->
      <HomeBlog :data="posts" />

      <!-- CONTACT FORM -->
      <ContactForm />

      <!-- FOOTER -->
      <AppFooter />

      <!-- COPYRIGHT -->
      <AppCopyright />
    </div>

    <!-- GO BACK TO TOP WHEN SCROLLED DOWN -->
    <div class="fixed right-0 bottom-0 flex items-center mr-20 mb-20 z-50">
      <BackToTop />
    </div>
  </div>
</template>

<script>
import { getBlogPosts } from '~/core/contentful'
import { metaConfig } from '~/core/meta.config'
import { getCanonicalUrl } from '~/core/helper-functions'

import AppHeader from '@/components/reusable/header/AppHeader.vue'
import ContactForm from '@/components/reusable/ContactForm.vue'
import AppFooter from '@/components/reusable/AppFooter.vue'
import AppCopyright from '@/components/reusable/AppCopyright.vue'
import BackToTop from '@/components/BackToTop.vue'

export default {
  name: 'Home',

  components: { AppHeader, ContactForm, AppFooter, AppCopyright, BackToTop },

  async asyncData ({ i18n }) {
    const posts = await getBlogPosts({ limit: 3, i18n })

    return { posts }
  },

  head () {
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: metaConfig.title
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: metaConfig.title
        },
        {
          hid: 'description',
          name: 'description',
          content: metaConfig.description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: metaConfig.description
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: metaConfig.description
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
