<template>
  <BlogDetailedCard title="blogDetailed.recentPost">
    <ul class="flex flex-col space-y-20">
      <!-- RECENT POST ITEM -->
      <li
        v-for="(item, index) in getFilteredData"
        :key="index"
        class="flex items-center space-x-14"
      >
        <!-- RECENT POST IMG -->
        <div class="flex-shrink-0 w-60 h-60 rounded-sm overflow-hidden">
          <img
            :src="item.fields.heroImage.fields.file.url"
            :alt="item.fields.heroImage.fields.file.fileName"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <div class="flex flex-col">
          <!-- RECENT POST PREVIEW TEXT | REDIRECT -->
          <NuxtLink
            :to="localePath(`/blog/${item.fields.slug}`, $i18n.locale)"
            class="line-clamp-2 text-white hover:text-jewel-caterpillar font-accidental-presidency tracking-xxs mb-4 transition duration-300"
          >
            {{ item.fields.title }}
          </NuxtLink>

          <!-- RECENT POST CREATED AT -->
          <p class="text-time-warp text-14">{{ item.fields.createdAt | date }}</p>
        </div>
      </li>
    </ul>
  </BlogDetailedCard>
</template>

<script>
import BlogDetailedCard from './BlogDetailedCard.vue'

export default {
  name: 'BlogDetailedRecentPost',

  components: { BlogDetailedCard },

  props: {
    postId: {
      type: String,
      required: true
    },

    data: {
      type: Array,
      required: true
    }
  },

  computed: {
    getFilteredData () {
      return this.data.slice(0, 3)
    }
  }
}
</script>
