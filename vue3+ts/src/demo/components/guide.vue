<template>
  <div class="guide" @click="toggle" v-if="env">
    👩‍🔧
    <router-link v-if="show" to="/">回到页面，继续开发</router-link>
    <router-link v-else to="/demo">开发遇到问题点我看文档，看demo</router-link>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);
const env = ref(process.env.NODE_ENV === 'development');
const toggle = () => {
  show.value = !show.value;
};
</script>

<style lang="scss" scoped>
.guide {
  position: fixed;
  right: 20px;
  bottom: 30px;
}
</style>
