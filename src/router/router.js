import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/layout/HomeContainer.vue'
import shop from '../components/layout/ShopcarContainer.vue'
import Member from '../components/layout/MemberContainer.vue'
import Search from '../components/layout/SearchContainer.vue'
import newlist from '../components/news/newlist.vue'
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
    },{
      path : '/home/newlist',
      component :newlist
    }
  ],
  linkActiveClass :'mui-active'
})

export default router