<template>
  <div class="photoinfo-container">  
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | timeFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr />

    <!-- 缩略图区域 -->
    <!-- <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
    </div>-->
    <vue-preview :slides="list"></vue-preview>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <comment :id="id"></comment>
  </div>
</template>
<script>
import comment from "../subcomponents/comment";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: []
    };
  },
  created() {
    this.getphotoinfo();
    this.getphotoinfoimage()
  },
  methods: {
    getphotoinfo() {
      this.$http
        .get("api/getimageInfo/" + this.id)
        .then(result => {
          if (result.status === 0) {
            this.photoinfo = result.message[0];
          }
        })
        .catch(err => {});
    },
    // 获取缩略图
    getphotoinfoimage() {
      this.$http
        .get("api/getthumimages/" + this.id)
        .then(result => {
          if (result.status === 0) {
            result.message.forEach(item => {
              item.w = 600;
              item.h = 400;
              item.msrc = item.src;
            });
            this.list=result.message
          }
        })
        .catch(err => {});
    }
  },
  components: {
    comment
  }
};
</script>