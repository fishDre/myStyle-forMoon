<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="前端vue3+ts开发框架" />
    <h1>目录结构</h1>
    <img alt="tree" src="../assets/cat.png" />
    <h1>拥抱script setup</h1>
    <pre class="pre">{{`<script setup lang='ts'>
  import componentA from './componentA.vue'
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
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
}
.pre {
  margin:auto;
  width:630px;
  text-align: left;
  padding: 10px;
  background-color: #2c3e50;
  overflow: auto;
  color:#ccc;
}
</style>
