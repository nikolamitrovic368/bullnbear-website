import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date', function (value, format = 'MMM D, YYYY h:mm A') {
  return dayjs(value).format(format)
})
