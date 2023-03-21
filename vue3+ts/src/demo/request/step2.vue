<template>
  <h1>2.如何使用</h1>
  <p class="p">已注入全局变量$model</p>
  <pre class="pre">{{ msg }}</pre>
  <p class="p">在常规组件中使用$model</p>
  <pre class="pre">{{ msg2 }}</pre>
  <step21 />
  <p class="p">在setup中使用$model</p>
  <p class="p">
    setup中没有this，如果使用getCurrentInstance获取$model，一是官方不建议这么做，二是还不如直接引入axios来使用，反正都要写很多。
  </p>
  <pre class="pre">{{ msg3 }}</pre>
  <button @click="requst">请求</button>
</template>

<script setup lang="ts">
import $model from '@/api';
import step21 from './step2.1.vue';

const requst = async () => {
  await $model.get('/test');
};

const msg = `const app:Apptype<Element> = createApp(App);
app.config.globalProperties.$model = api;`;
const msg2 = `export default {
  mounted(){
    this.$model['get'|'post'](xxx)
  }
};`;

const msg3 = `import $model from '@/api';
const requst = async () => {
  await $model.get('/test');
};`;
</script>

<style lang="scss" scoped></style>
