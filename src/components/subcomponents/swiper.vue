<template>
  <div>
    <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="item in lunbotu" :key="item.id">
        <img :src="item.img" alt="" :class="{'full': isfull}">        
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
  props:['lunbotu','isfull']
};
</script>
<style lang="sass" scoped>

</style>
