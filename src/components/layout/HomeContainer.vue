<template>
  <div>
    <!-- 轮播图组件 -->
    <!-- <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="item in lunbotu" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe> -->
    <swiper :lunbotu="lunbotu" :isfull="true"></swiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>

    </ul>
  </div>
</template>
<script>
import swiper from '../subcomponents/swiper'
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotu: []
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      this.$http.get("/api/getlunbo").then(result => {
        // 一定注意这里，我们换了axios的库，result不是body属性了，而是data属性
        // 我们在响应拦截器里面做了配置，返回的就是data数据，直接使用即可
        // console.log(result);
        if (result.status === 0) {
          // 成功了
          this.lunbotu = result.message;
        } else {
          // 失败的
          Toast("加载轮播图失败。。。");
        }
      });
    }
  },
  components :{
    swiper
  }
};
</script>