<template>
  <div
    class="
      gradient-secondary
      blog-item
      flex
      flex-col
      rounded-md
      py-20
      transform
      hover:-translate-y-10
      transition
      duration-500
      all
      ease-in-out
    "
  >
    <!-- IMG -->
    <div class="blog-item__list-item-img px-20">
      <img
        :src="data.heroImage.fields.file.url"
        :alt="data.heroImage.fields.file.fileName"
        class="w-full h-full object-cover rounded-t-md"
      />
    </div>

    <!-- CONTENT -->
    <div class="flex flex-col px-24 mt-20">
      <!-- AUTHOR | CREATED AT -->
      <div class="flex items-center mb-16">
        <div class="flex items-center mr-20">
          <AppIcon name="user" size="18" class="text-splash-of-grenadine mr-5" />
          <span class="text-white font-accidental-presidency tracking-xxs">
            {{ data.author.fields.name }}
          </span>
        </div>

        <div class="flex items-center text-splash-of-grenadine font-accidental-presidency tracking-xxs ml-auto">
          {{ data.createdAt | date("MMM D, YYYY") }}
        </div>
      </div>

      <!-- TITLE -->
      <h4
        class="blog-item__list-item-title line-clamp-2 text-25 text-white font-accidental-presidency tracking-xxs mb-5"
      >
        {{ data.title }}
      </h4>

      <!-- DESCRIPTION -->
      <p class="line-clamp-3 text-time-warp mb-20">{{ data.previewText }}</p>

      <!-- READ MORE -->
      <NuxtLink :to="localePath(`/blog/${data.slug}`, $i18n.locale)">
        <AppButton class="blog-item__list-item-btn w-full">Read More</AppButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/shared/AppIcon.vue'
import AppButton from '@/components/shared/AppButton.vue'

export default {
  name: 'BlogItem',

  components: { AppIcon, AppButton },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-item {
  min-height: 390px;

  &__list-item-img {
    height: 180px;
  }

  &__list-item-btn {
    max-width: 180px;
  }

  &__list-item-title {
    min-height: 60px;
  }
}
</style>
