<template>
  <h1>8.生命周期</h1>
  <pre class="pre">{{`<script setup lang='ts'>
import { onMounted, onUpdated, onUnmounted } from 'vue';

onMounted(() => {
  console.log('mounted!');
});
onUpdated(() => {
  console.log('updated!');
});
onUnmounted(() => {
  console.log('unmounted!');
});
</script>`}}</pre>
</template>
<script setup lang='ts'>
import { onMounted, onUpdated, onUnmounted } from 'vue';

onMounted(() => {
  console.log('mounted!');
});
onUpdated(() => {
  console.log('updated!');
});
onUnmounted(() => {
  console.log('unmounted!');
});

</script>
