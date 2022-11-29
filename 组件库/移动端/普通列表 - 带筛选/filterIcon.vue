<template>
  <div class="imgOrder">
    <img :src="imgfix" alt="" @click="changeState">
  </div>
</template>

<script>
export default {
  name: 'FilterIcon',
  props: ['orderArr','item'],
  data() {
    return {
      icon : {
        up: require('@/assets/filter/upicon.png'),
        down: require('@/assets/filter/downicon.png'),
        default: require('@/assets/filter/noicon.png'),
      },
    };
  },

  mounted() {
    
  },
  computed: {
    imgfix() {
      const info = this.orderArr.find( (item) => item.key === this.item.key);
      return  this.icon[info?.state] ;
    }
  },
  methods: {
    changeState() {
      let state = '';
      switch (this.orderArr.find( (item) => item.key === this.item.key)?.state) {
      case 'default':
        state = 'up';
        break;
      case 'up':
        state = 'down';
        break;
      case 'down':
        state = 'default';
        break;
      default:
        state = 'default';
        break;
      }
      this.$emit('changeState',{val:this.item, state});
    }
  },
};
</script>

<style lang="scss" scoped>
 .imgOrder {
    display: inline-block;
  }
</style>