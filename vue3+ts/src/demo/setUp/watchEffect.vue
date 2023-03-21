<template>
  <h1>13.watchEffect</h1>
  <a href="https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect" target="_blank">官方文档</a>
  <pre class="pre">{{`<template>
  <div>\{\{a\}\}</div>
  <button @click="stop()">停止监听</button>
  <button @click="changeA">改变a的值</button>
</template>

<script setup lang='ts'>
import {
  watchEffect,
  ref,
  onMounted,
  onUpdated
} from 'vue';

const a = ref(0);

/**
 * 凡是在watchEffect中的数据有变化，都会执行Effect;
 * 默认执行时机为初次渲染一次，以及数据变化之后,组件更新之前，也就是onMounted，onUpdated之前;
 * 即使没有任何监听数据，也会在组件初次渲染的时候调用一次，如:
 * console.log(1); // => 1
 * 返回值为一个函数，调用可以停止watchEffect的监听。
 *
 * 如果想改变调用时机 请使用 watchPostEffect 和 watchSyncEffect 代替
 */
const stop = watchEffect(() => {
  console.log(1);
  console.log(a.value);
});

onUpdated(() => {
  console.log('onUpdated');
});

onMounted(() => {
  console.log('onMounted');
});

const changeA = () => {
  a.value = 2;
};
</script>
`}}
  </pre>
  <div>{{a}}</div>
  <button @click="stop()">停止监听</button>
  <button @click="changeA">改变a的值</button>
</template>
<script setup lang='ts'>
import {
  watchEffect,
  ref,
  onMounted,
  onUpdated
} from 'vue';

const a = ref(0);

/**
 * 凡是在watchEffect中的数据有变化，都会执行Effect;
 * 默认执行时机为初次渲染一次，以及数据变化之后,组件更新之前，也就是onMounted，onUpdated之前;
 * 即使没有任何监听数据，也会在组件初次渲染的时候调用一次，如:
 * console.log(1); // => 1
 * 返回值为一个函数，调用可以停止watchEffect的监听。
 *
 * 如果想改变调用时机 请使用 watchPostEffect 和 watchSyncEffect 代替
 */
const stop = watchEffect(() => {
  console.log(1);
  console.log(a.value);
});

onUpdated(() => {
  console.log('onUpdated');
});

onMounted(() => {
  console.log('onMounted');
});

const changeA = () => {
  a.value = 2;
};
</script>
