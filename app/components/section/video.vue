<script setup>
// props
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="video-section container">
    <div v-if="data?.video?.video" class="video-section__block">
      <video class="image-cover" autoplay muted playsinline loop>
        <source :src="data.video.video" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
