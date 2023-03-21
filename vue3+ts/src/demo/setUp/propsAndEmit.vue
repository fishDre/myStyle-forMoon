<template>
  <h1>4.使用props和emit</h1>
  <p class="p">在script setup lang='ts'中定义props和自定义事件需要使用defineProps和defineEmits</p>
  <pre class="pre">{{`// 子组件
<div>\{\{props.foo\}\}</div>
<button @click="emit('change',1111)">emit触发自定义事件</button>

<script setup lang='ts'>
const props = defineProps(\{
  foo: String
\})

const emit = defineEmits(['change', 'delete'])
// setup code
</script>

// 父组件
<childComp :foo="foo" @change="changeTest"/>

<script setup lang='ts'>
import {ref} from 'vue';
import childComp from './childComp.vue';

const foo = ref('我是foo');
const changeTest = (e) => {
  foo.value = '我是bar'+e;
};
</script>
`}}</pre>
  <div>{{ props.foo }}</div>
  <button @click="emit('change', 1111)">emit触发自定义事件</button>
</template>
<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps({
  foo: String,
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['change', 'delete']);
</script>
