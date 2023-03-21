<template>
  <h1>1.引入element-plus</h1>
  <p class="p">vue3项目请使用element-plus</p>
  <p class="p">项目中默认没有引入需要手动导入element-plus</p>
  <pre class="pre">{{`// NPM
npm install element-plus --save

// Yarn
yarn add element-plus
`}}</pre>
<h2>2.配置</h2>
<pre class="pre">{{`
// main.ts
import { createApp, App as Apptype } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './api';

+import ElementPlus from 'element-plus'
+import 'element-plus/dist/index.css'

const app:Apptype<Element> = createApp(App);
app.config.globalProperties.$model = api;

-app.use(store).use(router).mount('#app');
+app.use(store).use(router).use(ElementPlus).mount('#app');
`}}
</pre>
<a target="_blank" href="https://element-plus.gitee.io/zh-CN/guide/design.html">更多文档</a>
</template>

<script setup lang='ts'>

</script>
