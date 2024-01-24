<template>
  <div>
    <h3 class="h3">Debugger</h3>
    <div class="nav">
      <button @click="onChange">consoleLog</button>
      <button @click="onChange2">debugger</button>
      <input v-model="input" />
    </div>
  </div>
</template>

<script>
const add = (num, num2 = 1) => {
  return num + num2;
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
      const num1 = add(this.input);
      const num2 = double(num1);
      // console.log(num2);
      console.log(this.input, num1, num2);
      this.input = num2;
    },
    onChange2() {
      // 跟随步骤
      debugger;
      const num1 = add(this.input);
      const num2 = double(num1);
      // 获得结果
      // debugger;
      this.input = num2;
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
