<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: "",
  },
  width: {
    type: [Number, String],
    required: true,
  },
  height: {
    type: [Number, String],
    required: true,
  },
});
</script>

<template>
  <svg
    class="icon-svg"
    :class="[`icon-svg-${name}`, customClass]"
    :width="width"
    :height="height"
  >
    <use :xlink:href="`/sprite.svg#${name}`" />
  </svg>
</template>