<template>
  <div>
    <h3 class="h3">VueDevtools</h3>
    <div class="nav">
      <Row>
        <button @click="onInputInc">onInputInc</button>
        <input v-model="input" type="number" label="input" />
      </Row>
      <Row>
        <button @click="onInc">onInc</button>
        <button @click="onDec">onDec</button>
        <button @click="onIncAsync">onIncAsync</button>
        <button @click="onDecAsync">onDecAsync</button>
        <div>store.count: {{ count }}</div>
      </Row>
    </div>
    <VueChild :data="input" @onParentInc="onInputInc" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueChild from "./VueChild.vue";
import Row from "./Row.vue";
export default {
  // name: "ChromeDevtoolsPage",
  components: {
    VueChild,
    Row,
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
  watch: {
    // TODO vue 在线修改可以出发
    // input(newVal) {
    //   if (newVal > 5) {
    //     alert(newVal);
    //   }
    // },
  },
  methods: {
    onInputInc() {
      this.input = this.input + 1;
    },
    // commit
    onInc() {
      this.$store.commit("increment");
    },
    onDec() {
      this.$store.commit("decrement");
    },
    // dispatch
    onIncAsync() {
      this.$store.dispatch("incrementAsync");
    },
    onDecAsync() {
      this.$store.dispatch("decrementAsync");
    },
    onParentInc() {
      this.input = this.input + 1;
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
}
</style>
