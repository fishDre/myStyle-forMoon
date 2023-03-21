import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Component from '@/views/yourPage/page/Component.vue';
import Home from '../views/Home.vue';
import demoRouter from '../demo/demoRouter'; // 开发环境开启demo模块，方便随时查阅

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/moon',
    name: 'moon',
    component: () => import(/* webpackChunkName: "yourpage" */ '../views/yourPage/index.vue'),
    children: [
      {
        path: 'component',
        name: 'Component',
        component: Component,
      }
    ]
  },
];

if (demoRouter) {
  // 开发环境开启demo模块，方便随时查阅
  routes.push(demoRouter as RouteRecordRaw);
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
