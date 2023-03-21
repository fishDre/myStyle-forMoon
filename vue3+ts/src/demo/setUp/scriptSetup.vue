<template>
  <h1>1.script setup使用</h1>
  <a
    target="_blank"
    href="https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95"
    >官方文档</a
  >
  <p class="p">通常setup 会在export default中使用</p>
  <pre class="pre">{{`<script lang='ts'>
  export default {
    setup(){

      return {

      }
    }
  }
</script>
`}}</pre>
  <p class="p">这种方式每次都要return 比较麻烦,所以采用下面这种script setup快捷写法</p>
  <pre class="pre">{{`<script setup lang='ts'>
  import componentA from './componentA.vue' // 在vscode中 可能会被ts标红，但是不影响运行，如果看不惯 禁用vetur 安装volar插件
  // 变量
  const msg = 'Hello!'

  // 函数
  function log() {
    console.log(msg)
  }
</script>

<template>
  <componentA />
  <div @click="log">\{\{ msg \}\}</div>
</template>
`}}</pre>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
