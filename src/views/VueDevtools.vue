<template>
  <div>
    <h3 class="h3">VueDevtools</h3>
    <div class="nav">
      <button @click="onInputInc">onInputInc</button>
      <button @click="onInc">onInc</button>
      <button @click="onDec">onDec</button>
      <button @click="onIncAsync">onIncAsync</button>
      <button @click="onDecAsync">onDecAsync</button>
      <input v-model="input" type="number" />
      <div>{{ count }}</div>
    </div>
    <VueChild :data="input" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueChild from "./VueChild.vue";

export default {
  // name: "ChromeDevtoolsPage",
  components: {
    VueChild,
  },
  data() {
    return {
      input: 0,
    };
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
    }),
  },
  methods: {
    onInputInc() {
      this.input = this.input + 1;
    },
    onInc() {
      this.$store.commit("increment");
    },
    onDec() {
      this.$store.commit("decrement");
    },
    onIncAsync() {
      this.$store.dispatch("incrementAsync");
    },
    onDecAsync() {
      this.$store.dispatch("decrementAsync");
    },
    onParentInc() {
      console.log(0);
      this.input = this.input + 1;
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  gap: 10px;
}
</style>
