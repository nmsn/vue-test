<template>
  <div>
    <h3>VueChild</h3>
    <div class="child">
      <Row>
        <button @click="onChildInc">onChildInc</button>
        <div>input: {{ input }}</div>
      </Row>
      <Row>
        <button @click="onParentInc">onParentInc</button>
        <div>data: {{ data }}</div>
      </Row>
    </div>
  </div>
</template>

<script>
import Row from "./Row.vue";
export default {
  components: {
    Row,
  },
  props: {
    data: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      input: 0,
    };
  },
  methods: {
    onChildInc() {
      this.input = this.input + 1;
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
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
