<template>
  <div>
    <h1>1.引入echarts</h1>
    <p class="p">项目中默认没有引入echarts，需要手动导入</p>
    <pre class="pre">{{
      `yarn add echarts
or
npm install echarts --save
`
    }}</pre>
    <p class="p">main.js中引入</p>
    <pre class="pre">{{
      `import * as echarts from 'echarts'
app.config.globalProperties.$echarts = echarts;
            `
    }}</pre>
    <h1>2.常规使用</h1>
    <pre class="pre">{{
      `export default {
  mounted(){
    const myChart = this.$echarts.init(document.getElementById("myChart"));
    // 绘制图表
    myChart.setOption({
      xAxis: {
        data: ["4-3", "4-4", "4-5", "4-6", "4-7", "4-8", "4-9"]
      },
      yAxis:{},
      series: [
        {
          name: "用户量",
          type: "line",
          data: [8, 15, 31, 13, 15, 22, 11]
        }
      ]
    });
    window.onresize = function () { // 自适应大小
      myChart.resize();
    };
  }
};`
    }}</pre>
    <h1>3.setup中使用</h1>
    <p>没有this，需要单独使用</p>
    <pre class="pre">{{
  `<script setup lang="ts">
import { onMounted } from "vue";
import * as echarts from 'echarts'

onMounted(() => {//需要获取到element,所以是onMounted的Hook
  const myChart = echarts.init(document.getElementById("customerChart"));
  // 绘制图表
  myChart.setOption({
    title: { text: "总用户量" },
    tooltip: {},
    xAxis: {
      data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
    },
    yAxis: {},
    series: [
      {
        name: "用户量",
        type: "line",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
  window.onresize = function () {//自适应大小
    myChart.resize();
  };
});
</script>
    `}}</pre>
  </div>
</template>

<script setup lang="ts"></script>
