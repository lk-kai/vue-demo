<template>
  <div>
    <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="item in lunbotu" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  props:['lunbotu']
};
</script>
<style lang="sass" scoped>

</style>
