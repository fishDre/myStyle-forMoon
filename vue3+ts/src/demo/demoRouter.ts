const config = process.env.NODE_ENV === 'development' ? {
  // 开发环境才有教程
  path: '/demo',
  name: 'demo',
  component: () => import(/* webpackChunkName: "demo" */ './index.vue'),
  children: [
    {
      path: 'typescript',
      name: 'typescript',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "setup" */ './typescript/index.vue'),
    },
    {
      path: 'request',
      name: 'request',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "setup" */ './request/index.vue'),
    },
    {
      path: 'setup',
      name: 'setup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "setup" */ './setUp/index.vue'),
    },
    {
      path: 'jsx',
      name: 'jsx',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "jsx" */ './jsxRender.vue'),
    },
    {
      path: 'pureJsx',
      name: 'pureJsx',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "pureJsx" */ './defineComponent.jsx'),
    },
    {
      path: 'vue-router',
      name: 'vue-router',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "vue-router" */ './router/index.vue'),
    },
    {
      path: 'vue-router-to/:id?',
      name: 'vue-router-to',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "vue-router-to" */ './router/to.vue'),
    },
    {
      path: 'vue-router-to3/:id?',
      name: 'vue-router-to3',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "vue-router-to3" */ './router/to3.vue'),
    },
    {
      path: 'vuex',
      name: 'vuex',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "vuex" */ './vuex/index.vue'),
    },
    {
      path: 'echarts',
      name: 'echarts',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "echarts" */ './echarts/index.vue'),
    },
    {
      path: 'element',
      name: 'element',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "element" */ './element/index.vue'),
    },
  ],
} : null;

export default config;
