import Vue from 'vue'
export default Vue.filter('moneyfilter', function (res) {
    return '￥ ' + res
})