<script setup>
const props = defineProps({
  // Pixels per second (higher = faster)
  speed: {
    type: Number,
    default: 50,
  },
  gap: {
    type: String,
    default: "0rem",
  },
});

const container = ref(null);
const content = ref(null);
const shouldLoop = ref(false);
const duration = ref(0);
let observer = null;

const calculateAnimation = () => {
  if (container.value && content.value) {
    const containerWidth = container.value.offsetWidth;
    const contentWidth = content.value.scrollWidth;

    // Only loop if content is wider than the container
    shouldLoop.value = contentWidth > containerWidth;

    if (shouldLoop.value) {
      // DURATION = DISTANCE / SPEED
      // We use contentWidth as the distance for one full cycle
      duration.value = contentWidth / props.speed;
    }
  }
};

onMounted(() => {
  nextTick(() => {
    calculateAnimation();
    if (container.value) {
      observer = new ResizeObserver(calculateAnimation);
      observer.observe(container.value);
    }
  });
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div ref="container" class="marquee-wrapper">
    <div
      ref="content"
      class="marquee-track"
      :class="{ 'is-animating': shouldLoop }"
      :style="{
        '--marquee-duration': `${duration}s`,
        '--marquee-gap': props.gap,
      }"
    >
      <div class="marquee-content">
        <slot></slot>
      </div>

      <div v-if="shouldLoop" class="marquee-content" aria-hidden="true">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
