module.exports = {
  runtimeCompiler: false,
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
};
