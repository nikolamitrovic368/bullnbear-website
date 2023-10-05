<template>
  <div class="copyright flex items-center bg-reversed-grey">
    <div class="container flex items-center justify-center py-40">
      <div class="text-time-warp text-18 text-center md:text-left">
        &copy; {{ $t("copyright.text.prependText") }}
        <span class="text-white font-semibold">
          {{ logoText }}
        </span>
        <span id="year">
          {{ new Date().getFullYear() }}
          {{ $t("copyright.text.appendText") }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppCopyright',

  computed: { ...mapState(['logoText']) }
}
</script>
