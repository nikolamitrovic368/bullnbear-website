<template>
  <div id="blog" class="home-blog flex flex-col relative bg-reversed-grey py-60 md:py-80">
    <!-- CONTAINER -->
    <div class="container flex flex-col flex-grow items-center">
      <!-- HEAD -->
      <div
        data-aos="offset"
        data-aos-easing="ease-in-sine"
        data-aos-delay="250"
        data-aos-duration="1000"
        class="home-blog__head flex flex-col items-center mb-40 md:mb-50"
      >
        <!-- TAG -->
        <AppSectionTag class="mb-20 md:mb-30">{{ $t("home.blog.tag") }}</AppSectionTag>

        <!-- TITLE -->
        <h2 class="home-blog__title section__title w-full text-center mb-20">
          {{ $t("home.blog.title") }}
        </h2>

        <!-- DESC -->
        <p class="home-blog__desc section__desc w-full text-center">
          {{ $t("home.blog.desc") }}
        </p>
      </div>

      <!-- BLOG ITEMS -->
      <div
        class="
          home-blog__items-wrap
          grid
          grid-rows-1
          md:grid-rows-none
          md2:grid-cols-3
          gap-y-30
          md2:gap-y-0
          md2:gap-x-30
          lg:gap-x-40
        "
      >
        <template v-if="data.length">
          <BlogItem v-for="(item, index) in data" :key="index" :data="item.fields" />
        </template>

        <!-- NO DATA AVAILABLE -->
        <template v-else>
          <div class="flex items-center justify-center">
            <span class="text-35 font-semibold text-center">{{ $t("home.blog.noData") }}</span>
          </div>
        </template>
      </div>

      <div class="mt-60">
        <NuxtLink :to="localePath({ name: 'blog' }, $i18n.locale)">
          <AppButton>{{ $t("home.blog.checkAllBlogPostsBtn") }}</AppButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import BlogItem from '@/components/reusable/BlogItem.vue'

import AppButton from '@/components/shared/AppButton.vue'
import AppSectionTag from '@/components/shared/AppSectionTag.vue'

export default {
  name: 'HomeBlog',

  components: { AppSectionTag, AppButton, BlogItem },

  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.home-blog {
  &__title {
    max-width: 250px;
  }

  &__desc {
    max-width: 450px;
  }

  /* Medium Devices, Desktops */
  @media(max-width: 992px) {
    &__items-wrap {
      max-width: 400px;
    }
  }
}
</style>
