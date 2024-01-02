<template>
  <div>
    <h3>About</h3>
    <div>{{ count }}</div>
    <button @click="onClick">Add</button>
    <input v-model="inputContent" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AboutPage",
  data() {
    return {
      inputContent: '',
    }
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
    }),
  },
  methods: {
    onClick() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
