<template>
  <h1>路由守卫</h1>
  <pre class="pre">{{`
<script setup lang='ts'>
import { onBeforeRouteEnter, useRoute } from 'vue-router';

onBeforeRouteEnter((to, from) => {
  console.log(to);
  console.log(from);
});

const route = useRoute();// 对应vue2中 this.$route,但是在模板中可以直接使用$router和$route ,setup中可以不必返回route和router

</script>`}}</pre>
  <h1>接受跳转</h1>
  <p class="p">route信息</p>
  <pre class="pre">{{ JSON.stringify(route) }}</pre>
  <template v-if="route.query.id">
    <p class="p">接受search参数</p>
    <pre class="pre">
// 刷新浏览器 search参数不丢失
console.log(route.query) ;// => {{ JSON.stringify(route.query) }}
</pre
    >
  </template>
  <template v-if="route.params.id">
    <p class="p">接受params</p>
    <pre class="pre">
/* 当路由配置文件，在path中配置了 参数时，
 * path: 'vue-router-to3/:id'或者path: 'vue-router-to3/:id?',
 * params参数会带在url中，刷新浏览器参数不丢失
 * 反之，如没有配置:name参数，那么刷新之后name就获取不到了
 */
console.log(route.params) ;// => {{ JSON.stringify(route.params) }}</pre
    >
  </template>
</template>

<script setup lang="ts">
import { onBeforeRouteLeave, useRoute } from 'vue-router';

// eslint-disable-next-line no-alert
onBeforeRouteLeave(() => window.confirm('路由守卫：是否离开当前页面'));

const route = useRoute(); // 对应vue2中 this.$route,但是在模板中可以直接使用$router 和 $route。setup中可以不必返回route和router
</script>
