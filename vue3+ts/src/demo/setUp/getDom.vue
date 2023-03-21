<template>
  <h1>11.获取原生dom对象</h1>
  <p class="p">如果是自定义组件，请看第7条，这里只获取原生dom对象的方法</p>
  <input type="text" ref="domRef" value="123">
  <pre class="pre">{{`<input type="text" ref="domRef" value="123">

<script setup lang='ts'>
import {onMounted, ref} from 'vue';

const domRef = ref(null);

onMounted(() => {
  console.log(domRef.value); // => <input type="text">
  console.log((domRef.value as any).value);// => 123
});
</script>
  `}}</pre>
</template>
<script setup lang='ts'>
import {onMounted, ref} from 'vue';

const domRef = ref(null);

onMounted(() => {
  console.log(domRef.value); // => <input type="text">
  console.log((domRef.value as any).value);// => 123
});
</script>
