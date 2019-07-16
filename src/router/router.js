import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/layout/HomeContainer.vue'
import shop from '../components/layout/ShopcarContainer.vue'
import Member from '../components/layout/MemberContainer.vue'
import Search from '../components/layout/SearchContainer.vue'
import newlist from '../components/news/newlist.vue'
import newinfo from '../components/news/newinfo.vue'
import photolist from '../components/photos/photolist.vue'
import photoinfo from '../components/photos/photoinfo'
import goodslist from '../components/goods/goodslist'
import goodslistinfo from '../components/goods/goodsinfo'
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
    },{
      path:'/home/newsinfo/:id',
      component :newinfo
    },{
      path:'/home/photolist',
      component : photolist
    },{
      path : '/home/photoinfo/:id',
      component : photoinfo
    },{
      path : '/home/goodslist',
      component : goodslist
    },{
      path : '/home/goodsinfo/:id',
      component : goodslistinfo
    }
  ],
  linkActiveClass :'mui-active'
})

export default router