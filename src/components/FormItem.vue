<template>
  <div class="mt-4">
    <div class="label-color font-normal">{{ label }}</div>
    <div class="text-lg font-bold mt-1">{{ value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: Boolean
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.label-color {
  color: #4c4c4c;
}
.value-color {
  color: #0e1822;
}
</style>
