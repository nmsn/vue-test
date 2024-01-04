<template>
  <div>
    <h3 class="h3">
      ChromeDevtools
    </h3>
    <div class="nav">
      <button @click="onChange">
        debugger
      </button>
      <button @click="onThrow">
        throw
      </button>
      <input v-model="input" />
    </div>
  </div>
</template>

<script>
import { add, double } from '../utils';

export default {
  name: "ChromeDevtoolsPage",
  data() {
    return {
      input: 0,
    };
  },
  methods: {
    onChange() {
      const a = 2;
      const num1 = add(this.input, a);
      const newVal = double(num1);
      debugger;
      this.input = newVal;
    },
    onThrow() {
      const x = undefined;
      x.x = 1;
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
