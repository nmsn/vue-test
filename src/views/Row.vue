<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ComponentRow",
};
</script>

<style scoped>
.row {
  display: flex;
  gap: 20px;
}
</style>
