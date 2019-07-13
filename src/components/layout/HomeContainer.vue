<template>
  <div class="home-swipe">
    <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="item in lunbotu" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
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
  }
};
</script>