<template>
  <h1>5.props和emit TypeScript类型声明</h1>
  <pre class="pre">{{`<button @click="test">触发自定义事件</button>

<script setup lang='ts'>
const props = defineProps<{
  foo: string
  bar?: number
}>();

// eslint-disable-next-line
const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'change', id: number): void
  // eslint-disable-next-line no-unused-vars
  (e: 'update', value: string): void
}>();

// 只在setup中可以检查，template 使用<button @click="emit('change','123123')">中不会检查
const test = () => {
  emit('change', 123);
  emit('update', '123');
};
</script>
`}}</pre>
  <div>{{ props.foo }}</div>
  <button @click="test">触发自定义事件</button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'; // 可写可不写。ts要检查就写

const props = defineProps<{
  foo: number;
  bar?: number;
}>();

// eslint-disable-next-line
const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'change', id: number): void;
  // eslint-disable-next-line no-unused-vars
  (e: 'update', value: string): void;
}>();

// 只在setup中可以检查，template中不会检查
const test = () => {
  emit('change', 4444);
  emit('update', '123');
};
</script>
