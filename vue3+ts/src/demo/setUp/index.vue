<template>
  <div>
    <ul class="catalogue">
      <p>目录</p>
      <li v-for="(item,idx) in items" :key="idx" @click="goH1(idx)">{{item}}</li>
    </ul>
    <scriptSetup />
    <refComp />
    <reactive />
    <props-and-emit :foo="foo" @change="changeTest" />
    <propsAndEmitType :foo="foo1" @change="changeTest2" />
    <propsAndEmitTypeDefault msg="哈哈" />
    <defineExpose ref="exposeTest" />
    <button @click="exposeTest.changeA">调用子组件方法</button>
    <lifecycle/>
    <provide/>
    <get-dom/>
    <computedVue/>
    <watchEffectVue/>
    <watchVue />
    <define-ref/>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import scriptSetup from './scriptSetup.vue';
import refComp from './ref.vue';
import reactive from './reactive.vue';
import propsAndEmit from './propsAndEmit.vue';
import propsAndEmitType from './propsAndEmitType.vue';
import propsAndEmitTypeDefault from './propsAndEmitTypeDefault.vue';
import defineExpose from './defineExpose.vue';
import lifecycle from './lifecycle.vue';
import provide from './provide.vue';
import getDom from './getDom.vue';
import defineRef from './defineRef.vue';
import computedVue from './computed.vue';
import watchEffectVue from './watchEffect.vue';
import watchVue from './watch.vue';
import useCatalogue from './useCatalogue';

const foo = ref<string>('我是foo');
const foo1 = ref<number>(123);

const {items, goH1} = useCatalogue();

const exposeTest = ref();
onMounted(() => {
  console.log(exposeTest.value);
});
const changeTest = (e: string) => {
  foo.value = `我是bar${e}`;
};
const changeTest2 = (e) => {
  foo1.value = e;
};
</script>
