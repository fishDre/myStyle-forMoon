<template>
  <h1>12.computed</h1>
  <a href="https://v3.cn.vuejs.org/api/computed-watch-api.html#computed" target="_blank">官方文档</a>
  <pre class="pre">{{`<template>
  <div>count:\{\{count\}\}</div>
  <div>plusOne:\{\{plusOne\}\}</div>
  <div>plusTwo：\{\{plusTwo\}\}</div>
  <button @click="changePlusTwo">修改plusTwo 为5</button>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue';

const count = ref<number>(1);
const plusOne = computed(() => count.value + 1);

// 可写computed
const plusTwo = computed({
  get: () => count.value + 2,
  set: (val) => {
    count.value = val - 2;
  }
});

const changePlusTwo = () => {
  plusTwo.value = 5;
};
</script>
`}}</pre>
  <div>count:{{count}}</div>
  <div>plusOne:{{plusOne}}</div>
  <div>plusTwo：{{plusTwo}}</div>
  <button @click="changePlusTwo">修改plusTwo 为5</button>
</template>
<script setup lang='ts'>
import { computed, ref } from 'vue';

const count = ref<number>(1);
const plusOne = computed(() => count.value + 1);

// 可写computed
const plusTwo = computed({
  get: () => count.value + 2,
  set: (val) => {
    count.value = val - 2;
  }
});

const changePlusTwo = () => {
  plusTwo.value = 5;
};
</script>
