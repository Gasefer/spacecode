<script setup>
// emits
const emit = defineEmits(["close"]);
</script>
<template>
  <div class="modal">
    <div class="modal__header">
      <span class="modal__title">Як ми можемо допомогти?</span>
      <button class="modal__close">
        <UiIcon
          custom-class="modal__icon"
          name="x"
          width="24"
          height="24"
          @click="emit('close')"
        />
      </button>
    </div>
    <LazyWidgetContactForm class="contacts-form--modal" />
  </div>
</template>
