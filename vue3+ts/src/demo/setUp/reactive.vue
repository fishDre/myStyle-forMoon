<template>
  <h1>3.响应式reactive</h1>
  <a
    target="_blank"
    href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html#%E5%B8%A6-ref-%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8F%98%E9%87%8F"
    >官方文档</a
  >
  <pre class="pre">{{ code }}</pre>
  <p>{{ info.a }},{{ info.b }}</p>
  <p>{{ a }},{{ b }}</p>
  <p>{{ A }}</p>
</template>

<script setup lang="ts">
import { reactive, toRefs, toRef } from 'vue';

const code = `<template>
  <p>{{info.a}},{{info.b}}</p>
  <p>{{a}},{{b}}</p>
  <p>{{A}}</p>
</template>

<script setup lang='ts'>
import { reactive, toRefs, toRef } from 'vue';

const info = reactive<{a:string;b:string}>({
  a: '1',
  b: '2'
});

const { a, b } = toRefs(info);
const A = toRef(info, 'a');
< /script>`;
const info = reactive<{ a: string; b: string }>({
  a: '1',
  b: '2',
});

const { a, b } = toRefs(info);
const A = toRef(info, 'a');
</script>

<style lang="scss" scoped></style>
