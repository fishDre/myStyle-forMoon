<template>
  <h1>9.provide</h1>
  <pre class="pre">{{`//父组件
<script setup lang='ts'>
import { provide, ref } from 'vue';
import injectComp from './inject.vue';

// 普通数据
provide('location', 'North Pole');
provide('geolocation', {
  longitude: 90,
  latitude: 135
});

// 响应式provide
const a = ref(0);
provide('aRef', a);
const changeA = () => {
  a.value = 2;
};

</script>

<template>
  <button @click="changeA">更改响应式数据a</button>
  <injectComp/>
</template>
`}}</pre>
<button @click="changeA">更改响应式数据a</button>
  <injectComp/>
</template>
<script setup lang='ts'>
import { provide, ref } from 'vue';
import injectComp from './inject.vue';

provide('location', 'North Pole');
provide('geolocation', {
  longitude: 90,
  latitude: 135
});

// 响应式provide
const a = ref(0);
provide('aRef', a);
const changeA = () => {
  a.value = 2;
};

</script>
