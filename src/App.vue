<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div class="nav">
      <router-link to="/home"> Home </router-link>
      <router-link
        v-for="item in router"
        :key="item"
        :to="`/${item.toLowerCase()}`"
      >
        {{ item }}
      </router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
const router = [
  "Console",
  "ConsoleLog",
  "Debugger",
  "ChromeDevtools",
  "VueDevtools",
];
export default {
  name: "App",
  created() {
    this.router = router;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav {
  display: flex;
  gap: 10px;
}
</style>
