<template>
  <div id="app" class="d-app-wrap">
    <!-- 头部导航栏 -->
    <mt-header fixed title="黑马程序员vue项目"></mt-header>
    <!-- 中间组件 -->
    <!-- 底部导航栏 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item mui-active"  to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shop">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge">0</span>
          </span>
          <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>

