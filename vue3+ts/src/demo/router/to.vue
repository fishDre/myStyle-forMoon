<template>
  <h1>路由守卫</h1>
  <pre class="pre">{{
    `export default {
  beforeRouteEnter(to, from) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 \`this\` ！
    // 因为当守卫执行时，组件实例还没被创建！
    console.log(to);
    console.log(from);
  },
  beforeRouteUpdate(to, from) {
    ...
  },
  beforeRouteLeave(to, from) {
    ...
  },
  mounted() {
    console.log(this.$route);
  }
};`
  }}</pre>
  <h1>接受跳转</h1>
  <p class="p">this.$route信息</p>
  <pre class="pre">{{ JSON.stringify($route) }}</pre>
  <template v-if="$route.query.id">
    <p class="p">接受search参数</p>
    <pre class="pre">
// 刷新浏览器 search参数不丢失
console.log(this.$route.query) ;// => {{ JSON.stringify($route.query) }}
</pre
    >
  </template>
  <template v-if="$route.params.id">
    <p class="p">接受params</p>
    <pre class="pre">
/* 当路由配置文件，在path中配置了 参数时，
 * path: 'vue-router-to/:id'或者path: 'vue-router-to/:id?',
 * params参数会带在url中，刷新浏览器参数不丢失
 * 反之，如没有配置:name参数，那么刷新之后name就获取不到了
 */
console.log(this.$route.params) ;// => {{ JSON.stringify($route.params) }}</pre
    >
  </template>
</template>

<script>
export default {
  beforeRouteEnter(to, from) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
    // eslint-disable-next-line no-console
    console.log(to);
    // eslint-disable-next-line no-console
    console.log(from);
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$route);
  },
};
</script>
