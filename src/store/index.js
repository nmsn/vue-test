import Vue from "vue";
import Vuex from "vuex";
//确保开头调用Vue.use(Vuex)
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //this.$store.state.count
    count: 0,
  },
  getters: {
    evenOrOdd: (state) => {
      //this.$store.getters.evenOrOdd
      return state.count % 2 === 0 ? "偶数" : "奇数";
    },
  },
  mutations: {
    increment(state) {
      //this.$store.commit('increment')
      state.count++;
    },
    decrement(state) {
      //this.$store.commit('decrement')
      state.count--;
    },
  },
  actions: {
    increment({ commit }) {
      //this.$store.dispatch('increment')
      // 修改状态的唯一方式是提交mutation
      commit("increment");
    },
    decrement({ commit }) {
      //this.$store.dispatch('decrement')
      commit("decrement");
    },
    incrementAsync({ commit }) {
      //this.$store.dispatch('incrementAsync')
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("increment");
          resolve(10);
        }, 1000);
      });
    },
  },
});
