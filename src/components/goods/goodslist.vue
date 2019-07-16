<template>
  <div class="goods-list">
    <div class="goods-item" v-for="(item, index) in goodslist" :key="index" @click=godetail(item.id)>
      <img :src="item.img_url" alt />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">{{item.sell_price | moneyfilter}}</span>
          <span class="old">{{item.market_price | moneyfilter}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1, // 默认显示第一页
      goodslist: [] // 存放商品列表的数组
    };
  },
  created() {
    this.getgoodslist();
  },
  methods: {
    getgoodslist() {
      this.$http
        .get("api/getgoods?pageindex" + this.pageindex)
        .then(result => {
          if (result.status === 0) {
            // this.goodslist = result.message;
            this.goodslist = this.goodslist.concat(result.message)
          }
        })
        .catch(err => {});
    },
    getMore(){
      this.pageindex++
      this.getgoodslist()
    },
    godetail(id){
      this.$router.push('/home/goodsinfo/'+id)
    }
  }
};
</script>