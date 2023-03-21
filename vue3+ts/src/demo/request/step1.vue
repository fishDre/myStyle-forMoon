<template>
  <h1>1.axios配置</h1>
  <p class="p">简单配置了下axios，可以根据业务需要自行修改</p>
  <p class="p">/src/api.js</p>
  <pre class="pre">{{ msg }}</pre>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const msg = ref(`import axios from 'axios';

const baseURL = process.env.BASE_URL;
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.baseURL = baseURL;

if (process.env.NODE_ENV === 'development') {
  ((axios.defaults.headers as any).Authorization = 'Bearer 36eb6e5a-ab15-46ff-961e-27f29a0f6f65');
}

// axios.defaults.timeout = 1000;
axios.interceptors.response.use(
  (res) => res,
  (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    // eslint-disable-next-line no-alert
    window.alert('网络请求失败');
  },
);

const setToken = (token:string):void => {
  (axios.defaults.headers as any).Authorization = token;
};
export { baseURL, setToken };
export default axios;
`);
</script>

<style lang="scss" scoped></style>
