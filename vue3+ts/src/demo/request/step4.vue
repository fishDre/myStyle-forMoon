<template>
  <h1>4.接口地址配置</h1>
  <pre class="pre">{{
    `
    // 根目录下
    // .env.production 生产环境配置环境变量
    VUE_APP_API_BASE_URL=/api // 变量以VUE_APP开头，才能在代码中使用

    // .env.development // 开发环境配置环境变量
    VUE_APP_API_BASE_URL=http://xxxx.com

    // 在代码中使用VUE_APP_API_BASE_URL变量
    const baseURL = process.env.VUE_APP_API_BASE_URL;

`
  }}</pre>
  <p class="p">通常开发环境下，需要使用接口反向代理，解决跨域</p>
  <pre class="pre">{{`
// 根目录下vue.config.js,配置deveserve反向代理
devServer: {
    proxy: {
      '/api': {
        target: 'http://api.xxx.com',
        pathRewrite: {'^/api': ''}, //  /api/xxx 现在会被代理到请求 http://api.xxx.com/xxx
        // secure: false, // 代理https使用
        // changeOrigin: true// 代理https使用
      }
    }
}
  `
  }}
  </pre>
</template>
<script setup lang='ts'>

</script>
