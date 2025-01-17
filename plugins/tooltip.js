// https://floating-vue.starpad.dev/legacy/v2/#getting-started

import Vue from 'vue'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'

Vue.directive('tooltip', VTooltip)
Vue.directive('close-popover', VClosePopover)
Vue.component('VPopover', VPopover)
