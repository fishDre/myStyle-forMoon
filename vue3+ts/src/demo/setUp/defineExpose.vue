<template>
  <h1>7.暴露自定义组件事件和数据</h1>
  <p class="p">script setup 的组件被引用时不会暴露任何内部变量和方法,需要使用defineExpose</p>
  <pre class="pre">{{`// 父组件
<template>
  <defineExpose ref='exposeTest'/>
  <button @click="exposeTest.changeA">调用子组件方法</button>
</template>

<script setup lang='ts'>
import defineExpose from './defineExpose.vue';

const exposeTest = ref();
onMounted(() => {
  console.log(exposeTest.value);
});
</script>

//子组件
<div>\{\{a\}\}</div>

<script setup lang='ts'>
import { ref } from 'vue';

const a = ref<number>(0);
// eslint-disable-next-line no-unused-vars
const changeA = () => {
  a.value = 3;
};
console.log(a.value);

// eslint-disable-next-line no-undef
defineExpose({
  a,
  changeA
});
</script>
  `}}</pre>
  <div>{{ a }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const a = ref<number>(0);
// eslint-disable-next-line no-unused-vars
const changeA = () => {
  a.value = 3;
};
console.log(a.value);

// eslint-disable-next-line no-undef
defineExpose({
  a,
  changeA,
});
</script>
