<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
    customClass?: string;
    width: number | string;
    height: number | string;
  }>(),
  {
    customClass: "",
  }
);
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