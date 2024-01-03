<template>
  <div>
    <h3 class="h3">Debugger</h3>
    <div class="nav">
      <button @click="onChange">debugger</button>
      <input v-model="input">
    </div>
  </div>
</template>

<script>
const add = (num) => {
  return num + 1;
};

const double = (num) => {
  return num * 2;
};

export default {
  name: "ConsoleLogPage",
  data() {
    return {
      input: 0,
    };
  },
  methods: {
    onChange() {
      debugger;
      const num = double(add(this.input));
      this.input = num;
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
