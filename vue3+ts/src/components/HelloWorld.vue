<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div style="width: 600px; margin: 20px auto; text-align: left">
      <p>
        🎁框架基于vue-cli生成，没有多余的第三方组件和库，只整合了
        <router-link to="/demo/vuex">vuex</router-link>，
        <router-link to="/demo/vue-router">vue-router</router-link>，
        <router-link to="/demo/request">axios</router-link>， 配置了eslint规范。
      </p>
      <p>⚡右下角提供了离线文档入口👩‍🔧，方便随时开发查阅，减少上网查询的时间</p>
      <p>🎨整理了日常开发中常用的demo代码，可以直接复制粘贴使用</p>
      <p>
        🥉对vue3的新特性有更贴近于实战的文档和demo，
        <router-link to="/demo/setup">欢迎指导</router-link>
      </p>
      <p style="margin-top: 30px">👌ps:离线文档和demo所有相关内容，只在development环境会引入，其他环境不会被打包，可以放心存在项目中，不必删除</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
