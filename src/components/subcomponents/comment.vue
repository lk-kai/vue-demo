<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="comm"></textarea>

    <mt-button type="primary" size="large" @click="pushcomment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="i">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | timeFormat }}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

  <script>
import Vue from "vue";
import { Toast } from "mint-ui";
Vue.component(Toast.name, Toast);
export default {
  data() {
    return {
      comm: "", // 评论输入的内容
      pageindex: 1,
      comments: []
    };
  },
  created() {
    this.getcomment();
  },
  props: ["id"],
  methods: {
    getcomment() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(result => {
          if (result.status === 0) {
            // 每当获取新数据评论的时候不要把老数据清空,而是老数据拼接新数据
            this.comments = this.comments.concat(result.message);
          } else {
            Toast("获取评论列表失败！");
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getcomment();
    },
    pushcomment() {
      if (this.comm.trim().length == 0) {
        Toast("评论内容不能为空!");
      } else {
        this.$http
          .post("/api/postcomment/" + this.id, {
            // add_time: new Date(),
            content: this.comm.trim(),
            user_name: "匿名用户"
          })
          .then(result => {
            if (result.status == 0) {
              this.comments.unshift({
                add_time: new Date(),
                content:this.comm,
                user_name: "匿名用户"
              });
              this.comm =''
            }
          })
          .catch(err => {});
      }
    }
  }
};
</script>