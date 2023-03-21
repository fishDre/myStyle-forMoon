<template>
  <guide />
  <router-view></router-view>
</template>
<script lang="ts" setup>
import guide from '@/demo/components/guide.vue';
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
