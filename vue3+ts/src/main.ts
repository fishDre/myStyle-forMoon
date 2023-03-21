import { createApp, App as Apptype } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './api';
import '@/sass/base.scss';

import 'element-plus/dist/index.css';

const app: Apptype<Element> = createApp(App);

// Vue3 根据config对全局进行配置
app.config.globalProperties.$model = api;

app.use(store).use(router).use(ElementPlus).mount('#app');
