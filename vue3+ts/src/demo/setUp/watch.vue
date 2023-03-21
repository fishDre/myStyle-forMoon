<template>
  <h1>14.watch</h1>
  <a href="https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#watch" target="_blank">官方文档</a>
  <p class="p">watch和vue2中watch用法是一样的</p>
  <p class="p">可以像watchEffect一样使用stop停止监听</p>
  <p class="p">但是在setup中需要注意</p>
  <pre class="pre">{{`<script setup lang='ts'>
import { watch, ref, reactive } from 'vue';
// 监听ref
const a = ref(1);
watch(a, (newValue, oldValue) => {
  console.log(newValue, oldValue);// => 5,1
});
setTimeout(() => {
  a.value = 5;
}, 3000);

// 监听reactive
const b = reactive({
  value1: 1,
  value2: 2
});
watch(() => b.value1, (newValue, oldValue) => {
  console.log(newValue, oldValue); // => 5,1
});
watch(b, (newValue, oldValue) => {
  console.log(newValue, oldValue); // => Proxy{value1: 5, value2: 2} Proxy{value1: 5, value2: 2}
});
setTimeout(() => {
  b.value1 = 5;
}, 3000);

// 错误示范，不能监听reactive中的属性值。
// watch(b.value1 as any, (newValue, oldValue) => {
//   console.log(newValue, oldValue);
// });

</script>
`}}</pre>
<p class="p">使用deep,immediate</p>
<pre class="pre">{{`const c = reactive({
  value1: {val1: 1, val2: 2}
});
watch(() => c.value1, (newValue, oldValue) => { // 不会执行
  console.log(newValue, oldValue);
});
watch(() => c.value1, (newValue, oldValue) => {
  console.log(newValue, oldValue); // => Proxy{val1: 5, val2: 2} Proxy{val1: 5, val2: 2}
}, {
  deep: true
});
watch(() => ({...c.value1}), (newValue, oldValue) => { // 解构实现对象拷贝
  console.log(newValue, oldValue); // => {val1: 5, val2: 2} {val1: 1, val2: 2}
}, {
  deep: true
});

watch(() => c.value1.val1, (newValue, oldValue) => { // 初次渲染就执行一次，3秒后再执行一次
  console.log(newValue, oldValue); // => 1 undefined
}, {
  immediate: true
});
setTimeout(() => {
  c.value1.val1 = 5;
}, 3000);
`}}</pre>
<p class="p">同时监听多个数据源</p>
<pre class="pre">{{`const firstName = ref('')
const lastName = ref('')

watch([firstName, lastName], (newValues, prevValues) => {
  console.log(newValues, prevValues)
})
// 同步修改，合并一次调用watch回调
const changeValues = () => {
  firstName.value = 'John'
  lastName.value = 'Smith'
  // 打印 ["John", "Smith"] ["", ""]
}

// 异步修改，调用多次
const changeValues = async () => {
  firstName.value = 'John' // 打印 ["John", ""] ["", ""]
  await nextTick()
  lastName.value = 'Smith' // 打印 ["John", "Smith"] ["John", ""]
}
`
}}</pre>
</template>
<script setup lang='ts'>
import { watch, ref, reactive, } from 'vue';
// 监听ref
const a = ref(1);
watch(a, (newValue, oldValue) => {
  console.log(newValue, oldValue);// => 5,1
});
setTimeout(() => {
  a.value = 5;
}, 3000);

// 监听reactive
const b = reactive({
  value1: 1,
  value2: 2
});
watch(() => b.value1, (newValue, oldValue) => {
  console.log(newValue, oldValue); // => 5,1
});
watch(b, (newValue, oldValue) => {
  console.log('bbbb', newValue, oldValue); // => Proxy{value1: 5, value2: 2} Proxy{value1: 5, value2: 2}
});
setTimeout(() => {
  b.value1 = 5;
}, 3000);

// 错误示范，不能监听reactive中的属性值。
// watch(b.value1 as any, (newValue, oldValue) => {
//   console.log(newValue, oldValue);
// });

const c = reactive({
  value1: {val1: 1, val2: 2}
});
watch(() => c.value1, (newValue, oldValue) => { // 不会执行
  console.log(newValue, oldValue);
});
watch(() => c.value1, (newValue, oldValue) => {
  console.log(newValue, oldValue); // => Proxy{val1: 5, val2: 2} Proxy{val1: 5, val2: 2}
}, {
  deep: true
});
watch(() => ({...c.value1}), (newValue, oldValue) => { // 解构实现对象拷贝
  console.log(newValue, oldValue); // => {val1: 5, val2: 2} {val1: 1, val2: 2}
}, {
  deep: true
});
watch(() => c.value1.val1, (newValue, oldValue) => { // 初次渲染就执行一次，3秒后再执行一次
  console.log(newValue, oldValue); // => 1 undefined
}, {
  immediate: true
});
setTimeout(() => {
  c.value1.val1 = 5;
}, 3000);

</script>
