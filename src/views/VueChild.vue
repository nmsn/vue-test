<template>
  <div>
    <h3>VueChild</h3>
    <div class="child">
      <button @click="onChildInc">
        onChildInc
      </button>
      <button @click="onParentInc">
        onParentInc
      </button>
      <div>childVal:{{ childVal }}</div>
      <div>data:{{ data }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "ChromeDevtoolsPage",
  props: {
    data: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      childVal: 0,
    };
  },
  methods: {
    onChildInc() {
      this.childVal = this.childVal + 1;
    },
    onParentInc() {
      this.$emit("onParentInc");
    },
  },
};
</script>

<style scoped>
.child {
  display: flex;
  gap: 10px;
}
</style>
