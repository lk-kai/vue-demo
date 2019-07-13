import Vue from 'vue'
export default Vue.filter('timeFormat', function (res) {
  const data = new Date(res)
  return data.toLocaleString()
})