<template>
  <BlogDetailedCard title="blogDetailed.followUs">
    <ul class="flex items-center space-x-12 space-x-14">
      <li v-for="(item, index) in socialMedia" :key="index">
        <a
          :href="item.href"
          target="_blank"
          class="
            gradient-primary
            flex
            items-center
            justify-center
            w-36
            h-36
            md:w-40
            md:h-40
            rounded-full
            md:transition-all
            md:ease-in-out
            md:duration-500
            md:hover:scale-110
          "
        >
          <AppIcon :name="item.icon" size="18" class="text-white" />
        </a>
      </li>
    </ul>
  </BlogDetailedCard>
</template>

<script>
import { mapState } from 'vuex'

import BlogDetailedCard from './BlogDetailedCard.vue'

import AppIcon from '@/components/shared/AppIcon.vue'

export default {
  name: 'BlogDetailedFollowUs',

  components: { BlogDetailedCard, AppIcon },

  computed: { ...mapState(['socialMedia']) }
}
</script>
