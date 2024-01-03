<template>
  <div>
    <h3 class="h3">Console</h3>
    <div class="nav">
      <button @click="onConsole">console</button>
      <button @click="onTime">time</button>
      <button @click="onDirDom">dir</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsolePage",
  methods: {
    onConsole() {
      console.log("log");
      console.warn("warn");
      console.error("error");
      console.info("info");
      console.debug("debug");
    },
    onTime() {
      console.time("count1");
      let count = 0;
      for (let i = 0; i < 100000; i++) {
        count = count + 1;
        if (i === 50000) {
          console.timeLog("count1");
        }
      }
      console.timeEnd("count1");
      console.log(count);
      console.time("count2");
      let count2 = 0;
      for (let i = 0; i < 100000; i++) {
        count2 = +JSON.parse(JSON.stringify(count2 + 1));
        if (i === 50000) {
          console.timeLog("count2");
        }
      }
      console.timeEnd("count2");
      console.log(count2);
    },
    onDirDom() {
      const h3 = document.querySelector(".h3");
      console.log(h3);
      console.dir(h3);
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
