<template>
  <h1>15.自定义ref（逻辑复用抽离）</h1>
  <p class="p">本页面生成的目录数据就是一个逻辑复用的例子，菜单vuex那个页面也用到了</p>
  <p class="p">实现思路是，页面挂载完成之后，通过DOM api 读取h1标签;</p>
  <p class="p">生成目录数组，当点击目录时，通过 HTMLElement.scrollIntoView()跳转指定元素位置。</p>
  <pre class="pre">{{`// 请看demo/setup/useCatalogue.ts
// 逻辑抽离必须使用use开头

import { ref, onMounted, Ref } from 'vue';

type CatalogueType = () => {
  items:Ref<Array<string>>;
  goH1?:any;
};

let H1:Array<any>;
const useCatalogue:CatalogueType = () => {
  const items = ref(['']);
  onMounted(() => {
    // dom接口获取页面上所有h1遍生成目录
    H1 = [...document.getElementsByTagName('h1')];
    items.value = H1.map((i) => i.innerText);
  });

  const goH1 = (index) => {
    H1[index].scrollIntoView();
  };

  return {
    items,
    goH1
  };
};

export default useCatalogue;

// 在组件中使用
<template>
  <ul class="catalogue">
    <p>目录</p>
    <li v-for="(item,idx) in items" :key="idx" @click="goH1(idx)">\{\{item\}\}</li>
  </ul>
  ...其他元素或组件
</template>

<script lang="ts" setup>
import useCatalogue from './useCatalogue';

const {items, goH1} = useCatalogue();
</script>
  `}}</pre>
</template>
<script setup lang='ts'>

</script>
