import Vue from 'vue';
import {
  Loading
} from 'element-ui';

let loadingCount = 0;
let loading;

const defaultState = {
  text: '正在加载……',
  time: ''
};
const startLoading = (state) => {
  loading = Loading.service({
    lock: true,
    text: state.text,
    background: 'rgba(0, 0, 0, 0.7)'
  });
  if (state.time) {
    setTimeout(() => {
      endLoading();
      loadingCount = 0;
    }, state.time);
  }
};

const endLoading = () => {
  loading.close();
  // 隐藏loading的关闭按钮
  hideCloseBtn();
};

export const showLoading = (state = defaultState) => {
  if (loadingCount === 0) {
    startLoading(state);
    // 显示loading关闭按钮
    showCloseBtn();
  }
  loadingCount += 1;
};

export const hideLoading = () => {
  if (loadingCount <= 0) {
    return;
  }
  loadingCount -= 1;
  if (loadingCount === 0) {
    endLoading();
  }
};


// loading页面展示时右上角关闭按钮
// 返回一个 扩展实例构造器, vue.extend官方文档 https://cn.vuejs.org/v2/api/#Vue-extend
import ImageIcon from 'common/images/loadingClose.png';
const LoadingClose = Vue.extend({
  template: '<img class="loading-close" v-if="showClose" @click="closeLoading" :src="loadingIcon"/>'
});
// 实例化一个 closeDom.vue
const closeDom = new LoadingClose({
  el: document.createElement('div'),
  data() {
    return {
      loadingIcon: ImageIcon,
      showClose: false
    };
  },
  methods: {
    // 点击关闭按钮 关闭loading和按钮的显示
    closeLoading() {
      loadingCount = 0;
      endLoading();
    }
  }
});
// 把 实例化的 closeDom.vue 添加到 body 里
document.body.appendChild(closeDom.$el);

function showCloseBtn() {
  closeDom.showClose = true;
}

function hideCloseBtn() {
  closeDom.showClose = false;
}
