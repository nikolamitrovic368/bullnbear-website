<template>
  <BlogDetailedCard title="blogDetailed.tags">
    <ul class="grid grid-cols-2 gap-14">
      <li
        v-for="(item, index) in data"
        :key="index"
        class="
          gradient-primary
          flex
          items-center
          justify-center

          text-white
          text-center
          text-14
          font-semibold
          rounded-full
          uppercase
          py-8
          px-10
        "
      >
        {{ item }}
      </li>
    </ul>
  </BlogDetailedCard>
</template>

<script>
import BlogDetailedCard from './BlogDetailedCard.vue'

export default {
  name: 'BlogDetailedTags',

  components: { BlogDetailedCard },

  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
