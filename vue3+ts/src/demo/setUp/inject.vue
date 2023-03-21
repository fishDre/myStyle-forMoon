<template>
  <h1>10.inject</h1>
  <pre class="pre">{{`// 我是子组件 injectComp
<script setup lang='ts'>
import { inject } from 'vue';

const userLocation = inject('location', 'The Universe');// 第二个参数是默认值
const userGeolocation = inject('geolocation');

console.log(userGeolocation); // => Object{latitude: 135,longitude: 90,[[Prototype]]: Object}
const injectA = inject('aRef');
</script>

<template>
  <div>\{\{userLocation\}\}</div>
  <div>使用响应式provide（点击上面 “更改响应式数据a” 按钮）:\{\{injectA\}\}</div>
</template>
`}}</pre>
  <div>{{userLocation}}</div>
  <div>使用响应式provide（点击上面 “更改响应式数据a” 按钮）:{{injectA}}</div>
</template>
<script setup lang='ts'>
import { inject } from 'vue';

const userLocation = inject('location', 'The Universe');// 第二个参数是默认值
const userGeolocation = inject('geolocation');

console.log(userGeolocation); // => Object{latitude: 135,longitude: 90,[[Prototype]]: Object}

const injectA = inject('aRef');
</script>
