<script setup>
  // emit
  const emit = defineEmits(["close"]);
</script>
<template>
  <Transition name="fade">
    <div class="modal-backdrop" @click.self="emit('close')">
      <slot></slot>
    </div>
  </Transition>
</template>