<script setup>
// emits
const emit = defineEmits(["close"]);

// props
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="video-modal">
    <div v-if="data?.['video-button']?.video" class="video-modal__wrapper">
      <video class="image-cover" autoplay muted playsinline loop>
        <source :src="data['video-button'].video" type="video/mp4" />
      </video>
    </div>
    <button
      v-if="data?.['video-button']?.['text-button']"
      type="button"
      class="button hero__button"
      @click="emit('close')"
    >
      {{ data["video-button"]["text-button"] }}
    </button>
  </div>
</template>
