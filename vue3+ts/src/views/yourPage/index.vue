<template>
  <div class="layout">
      <div class="main">
         <header>
          <h1>
            <a href="#home">
              <img src="@/assets/g.jpg" alt="">
            </a>
          </h1>
          <ul class="nav">
            <li v-for="item in header" :key="item.id" :class="{'active': isActived===item.label}" @click="handleNav(item)">{{item.label}}</li>
          </ul>

         </header>
         <main>
            <router-view></router-view>
         </main>
      </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// 类型定义
interface nav {
  label: string,
  id?: number | string,
  hash?: string
}
const isActived = ref<string>('指南');
// ref<nav[]>  Array<nav>
const header = ref<Array<nav>>([
  {
    label: '指南',
    id: '1'
  },
  {
    label: '组件',
    id: '2',
    hash: '/component'
  },
  {
    label: '主题',
    id: '3'
  },
  {
    label: '资源',
    id: '4'
  },
]);

const router = useRouter();
const handleNav = (item:nav): void => {
  isActived.value = item.label;
  router.push({path: `/moon${item?.hash || ''}` });
};

</script>
<style lang="scss" scoped>
</style>
