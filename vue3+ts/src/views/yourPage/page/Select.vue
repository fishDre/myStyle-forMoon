<script setup name="DDemo" lang="ts">
import { ref } from 'vue';
import {useFetchSelect} from './select.ts';

const value = ref<string>('');

// 模拟调用接口
function getRemoteData() {
  return new Promise<any[]>((resolve, reject) => {
    setTimeout(() => {
      // 模拟接口调用有概率出错
      if (Math.random() > 0.5) {
        resolve([
          {
            key: 1,
            name: '吴雪气泡水',
            value: 1,
          },
          {
            key: 2,
            name: '吃香蕉',
            value: 2,
          },
          {
            key: 3,
            name: '扔橘子',
            value: 3,
          },
        ]);
      } else {
        reject(new Error('不小心出错了！'));
      }
    }, 3000);
  });
}

// 将之前用的 options,loading，和调用接口的逻辑都抽离到hook中
const selectBind = useFetchSelect({
  apiFun: getRemoteData,
});
</script>

<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in selectBind.options"
      :key="item.value"
      :label="item.name"
      :value="item.value"
      :disabled="item.disabled"
    />
  </el-select>
</template>
