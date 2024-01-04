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
import { cloneDeep } from "lodash-es";
import { deepCopy } from "../utils";
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
      const obj = { a: { b: { c: { d: "d" } } } };
      console.time("lodash.cloneDeep");
      for (let i = 0; i < 10000; i++) {
        cloneDeep(obj);
        if (i === 5000) {
          console.timeLog("lodash.cloneDeep");
        }
      }
      console.timeEnd("lodash.cloneDeep");

      console.time("JSON.stringify");
      for (let i = 0; i < 10000; i++) {
        JSON.parse(JSON.stringify(obj));
        if (i === 5000) {
          console.timeLog("JSON.stringify");
        }
      }
      console.timeEnd("JSON.stringify");

      console.time("deepCopy");
      for (let i = 0; i < 10000; i++) {
        deepCopy(obj);
        if (i === 5000) {
          console.timeLog("deepCopy");
        }
      }
      console.timeEnd("deepCopy");
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
