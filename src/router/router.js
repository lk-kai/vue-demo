import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/layout/HomeContainer.vue'
import shop from '../components/layout/ShopcarContainer.vue'
import Member from '../components/layout/MemberContainer.vue'
import Search from '../components/layout/SearchContainer.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes : [
    {
      path : '/',
      redirect : '/home'
    },{
      path : '/home',
      component : Home
    },{
      path : '/shop',
      component : shop
    },{
      path : '/member',
      component : Member
    },{
      path : '/search',
      component : Search
    }
  ]
})

export default router