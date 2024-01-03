import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    evenOrOdd: (state) => {
      return state.count % 2 === 0 ? "偶数" : "奇数";
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    incrementAsync({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("increment");
          resolve();
        }, 1000);
      });
    },
    decrementAsync({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("decrement");
          resolve();
        }, 1000);
      });
    },
  },
});
