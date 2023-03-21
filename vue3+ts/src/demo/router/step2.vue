<template>
  <h1>2.setup中使用</h1>
  <pre class="pre">{{`<script setup lang='ts'>
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();// 对应vue3中 this.$route
const router = useRouter(); // 对应vue2中 this.$router

console.log(route);
console.log(router);

// 用法与vue2没有差别，只是没有了this，题外话：vue3刻意在淡化面向对象编程，而是学习react拥抱函数式编程，所以很少用this
const go1 = () => router.push(\{name: 'vue-router-to3'\});
const go2 = () => router.push(\{path: '/demo/vue-router-to3'\}); // router.push('/demo/vue-router-to')
const go3 = () => router.push(\{path: '/demo/vue-router-to', query: \{id: '123'\}\});// path,name二选一 ;跳转之后刷新页面 参数不丢失
const go4 = () => router.push(\{name: 'vue-router-to', params: \{id: '123', name: '发顺'\}\});// params 不能与 path 一起使用 ;跳转之后刷新页面 参数丢不丢看情况
</script>`}}</pre>
  <button @click="go1">根据路由名称跳转vue-router-to3</button>
  <button @click="go2">根据路由路径跳转vue-router-to3</button>
  <button @click="go3">带search参数跳转vue-router-to3</button>
  <button @click="go4">带params参数跳转vue-router-to3</button>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const route = useRoute(); // 对应vue3中 this.$route
const router = useRouter(); // 对应vue2中 this.$router

// eslint-disable-next-line no-console
console.log(route);
// eslint-disable-next-line no-console
console.log(router);

// 用法与vue2没有差别，只是没有了this，题外话：vue3刻意在淡化面向对象编程，而是学习react拥抱函数式编程，所以很少用this
const go1 = () => router.push({ name: 'vue-router-to3' });
const go2 = () => router.push({ path: '/demo/vue-router-to3' }); // 可以简写 router.push('/demo/vue-router-to')
const go3 = () => router.push({ path: '/demo/vue-router-to3', query: { id: '123' } }); // path,name二选一 ;跳转之后刷新页面 参数不丢失
const go4 = () => router.push({ name: 'vue-router-to3', params: { id: '123', name: '发顺' } }); // `params` 不能与 `path` 一起使用 ;跳转之后刷新页面 参数丢不丢看情况
</script>
