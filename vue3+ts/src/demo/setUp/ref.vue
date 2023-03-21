<template>
  <h1>2.响应式ref</h1>
  <a
    target="_blank"
    href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html#%E5%B8%A6-ref-%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8F%98%E9%87%8F"
    >官方文档</a
  >
  <pre class="pre">{{ msg }}</pre>
  <div>{{ a }}</div>
  <button @click="addA">+1</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const msg = ref(`<template>
  <p>{{msg}}</p>
  <button @click="addA">+1</button>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
const addA = ():void => {
  a.value += 1;
};
const msg = ref<number>(0);
< /script>`);

const a = ref<number>(0);
const addA = (): void => {
  a.value += 1;
};
</script>

<style lang="scss" scoped></style>
