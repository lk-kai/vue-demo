<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newinfo.add_time | timeFormat }}</span>
      <span>点击：{{ newinfo.click }}次</span>
    </p>
    <hr />
    <div class="content" v-html="newinfo.content"></div>
    <!-- 评论子组件 -->
    <comment :id="id"></comment>
  </div>
</template>


<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: null,
      newinfo: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getinfo();
  },
  methods: {
    getinfo() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.status === 0) {
          this.newinfo = result.message[0];
        } else {
          Toast("获取新闻详情失败！");
        }
      });
    }
  },
  components: {
    comment
  }
};
</script>