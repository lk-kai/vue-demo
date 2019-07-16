<template>
  <div>
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotu="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from '../subcomponents/swiper'
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu : []
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.status === 0) {
          // 先循环轮播图数组的每一项，为 item 添加 img 属性，因为 轮播图 组件中，只认识 item.img， 不认识 item.src
          result.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.message;
        }
      });
    }
  },
  components : {
    swiper
  }
};
</script>