<template>
  <h1>1.vue2中的用法</h1>
  <pre class="pre">{{`<button @click="go1">根据路由名称跳转vue-router-to</button>
<button @click="go2">根据路由路径跳转vue-router-to</button>
<button @click="go3">带search参数跳转vue-router-to</button>
<button @click="go4">带params参数跳转vue-router-to</button>

<script>
export default {
  mounted() {
    console.log(this.$route);// 当前路由对象 元信息，包含路径 参数等等
    console.log(this.$router);// 路由操作对象，用于跳转，返回，导航守卫等
  },
  methods: {
    go1() {
      this.$router.push(\{name: 'vue-router-to'\});
    },
    go2() {
      this.$router.push(\{path: '/demo/vue-router-to'}); // 可简写this.$router.push('/demo/vue-router-to')
    },
    go3() {
      this.$router.push(\{path: '/demo/vue-router-to', query: \{id: '123'\}\});// path,name二选一 ;跳转之后刷新页面 参数不丢失
    },
    go4() {
      this.$router.push\{name: 'vue-router-to', params: \{id: '123',name: '发顺'\}\});// params 不能与 path ;跳转之后刷新页面 参数丢不丢看情况
    }
  }
}
</script>
`}}</pre>
  <button @click="go1">根据路由名称跳转vue-router-to</button>
  <button @click="go2">根据路由路径跳转vue-router-to</button>
  <button @click="go3">带search参数跳转vue-router-to</button>
  <button @click="go4">带params参数跳转vue-router-to</button>
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$route); // 当前路由对象 元信息，包含路径 参数等等
    // eslint-disable-next-line no-console
    console.log(this.$router); // 路由操作对象，用于跳转，返回，导航守卫等
  },
  methods: {
    go1() {
      this.$router.push({ name: 'vue-router-to' });
    },
    go2() {
      this.$router.push({ path: '/demo/vue-router-to' }); // 可简写this.$router.push('/demo/vue-router-to')
    },
    go3() {
      this.$router.push({ path: '/demo/vue-router-to', query: { id: '123' } }); // path,name二选一 ;跳转之后刷新页面 参数不丢失
    },
    go4() {
      this.$router.push({ name: 'vue-router-to', params: { id: '123', name: '发顺' } }); // `params` 不能与 `path` 一起使用 ;跳转之后刷新页面 参数丢不丢看情况
    },
  },
};
</script>
