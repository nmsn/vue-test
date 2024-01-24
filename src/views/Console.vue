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

const deepCopy = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
};

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
  justify-content: center;
  gap: 20px;
}
</style>
