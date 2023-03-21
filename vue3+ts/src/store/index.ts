import { createStore } from 'vuex';

export default createStore({
  state: {
    a: 1,
    b: 2,
  },
  getters: {
    getAB({ a, b }) {
      return a + b;
    },
  },
  mutations: {
    increment(state, payload: number): void {
      // paylod为额外参数
      state.a += payload;
    },
  },
  actions: {
    incrementAsync({ commit }, payload: number): void {
      setTimeout(() => {
        commit('increment', payload);
      }, 1000);
    },
  },
  modules: {},
});
