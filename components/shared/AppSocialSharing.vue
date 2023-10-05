<template>
  <div>
    <!--  SLOT PREPEND -->
    <slot name="prepend" />

    <!-- NETWORK LINKS -->
    <ShareNetwork
      v-for="network in networks"
      :key="network.network"
      :network="network.network"
      :url="sharing.url"
      :title="sharing.title"
      :description="sharing.description"
      :quote="sharing.quote"
      :hashtags="sharing.hashtags"
      :twitter-user="sharing.twitterUser"
      :style="{
        backgroundColor: network.backgroundColor,
        color: network.color,
      }"
      :class="customClasses"
    >
      <AppIcon :size="network.iconSize" :name="network.icon" />
    </ShareNetwork>

    <!-- SLOT APPEND -->
    <slot name="append" />
  </div>
</template>

<script>
import AppIcon from '@/components/shared/AppIcon.vue'

export default {
  name: 'AppSocialSharing',

  components: { AppIcon },

  props: {
    sharing: {
      type: Object,
      required: true
    },

    networks: {
      type: Array,
      required: true
    },

    customClasses: {
      type: String,
      default: ''
    }
  }
}
</script>
