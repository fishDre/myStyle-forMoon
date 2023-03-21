<template>
  <h2>此模块的所有内容，在生产环境中都不会被打包，请放心使用,不必清理</h2>
  <div id="demo-nav">
    <router-link to="/demo/typescript">typescript</router-link>|
    <router-link to="/demo/request">接口请求</router-link>|
    <router-link to="/demo/setup" style="font-size: 30px">♥setup</router-link>|
    <router-link to="/demo/jsx">JSX（vue3）</router-link>|
    <router-link to="/demo/pureJsx">pureJsx（类似react写法）</router-link>|
    <router-link to="/demo/vuex">vuex</router-link>|
    <router-link to="/demo/vue-router">vue-router</router-link>|
    <router-link to="/demo/echarts">使用echarts</router-link>|
    <router-link to="/demo/element">使用element-ui+</router-link>
  </div>
  <div class="demo-wrap">
    <router-view />
  </div>
</template>
<style lang="scss">
#demo-nav {
  padding: 30px 0 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.pre {
  text-align: left;
  padding: 10px;
  background-color: #2c3e50;
  overflow: auto;
  color:#ccc;
}
.demo-wrap{
  .p {
  font-size: 12px;
  color: #666;
}
.catalogue {
  list-style: none;
  padding: 10px;
  li {
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      color: #42b983;
    }
  }
}
}
</style>
