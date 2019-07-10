import Vue from 'vue'
import App from './App.vue'

// 导入mint-ui头部组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入Mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
