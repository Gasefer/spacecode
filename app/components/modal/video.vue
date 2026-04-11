<script setup>
// emits
const emit = defineEmits(["close"]);
</script>
<template>
  <div class="video-modal">
    <div class="video-modal__wrapper">
      <video class="image-cover" autoplay muted playsinline loop>
        <source src="/videos/DELETE-video2.mp4" type="video/mp4" />
      </video>
    </div>
    <button class="button hero__button" @click="emit('close')">
      Пропустити
    </button>
  </div>
</template>
