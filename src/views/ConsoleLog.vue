<template>
  <div>
    <h3 class="h3">ConsoleLog</h3>
    <div class="nav">
      <button @click="onChange">快照问题1</button>
      <button @click="onChange2">快照问题2</button>
      <button @click="onChange3">内存泄漏：基础变量</button>
      <button @click="onChange4">内存泄漏：对象</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsoleLogPage",
  methods: {
    onChange() {
      const a = { a: 1 };
      console.log(a);
      a.a = 2;
      console.log(a);
    },
    onChange2() {
      // A
      const baseIndex = 65;
      const len = 26;
      const a = {};
      for (let i = baseIndex; i < baseIndex + len; i++) {
        a[String.fromCharCode(i)] = i;
      }
      console.log(a);
      a.E = 1;
      console.log(a);
    },
    onChange3() {
      for (let i = 0; i < 10000; i++) {
        console.log(i);
      }
    },
    onChange4() {
      const a = {};
      for (let i = 0; i < 1000000; i++) {
        a[i] = i;
      }
      console.log(a);
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
