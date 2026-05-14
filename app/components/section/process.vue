<script setup>
// props
defineProps({
  data: {
    type: Object,
    required: true,
  },
});

// variables
const itemRefs = ref([]);
const activeIndices = ref(new Set());

// methods
const handleScroll = () => {
  const triggerPoint = window.innerHeight / 1.5;

  itemRefs.value.forEach((el, index) => {
    if (!el) return;

    const rect = el.getBoundingClientRect();

    // Check if the element is at 50% of screen or higher (scrolled past middle)
    if (rect.top <= triggerPoint) {
      activeIndices.value.add(index);
    }
  });
};

// mounted
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section class="process-section container">
    <UiTitle
      v-if="data?.['title-with-titles-list']?.items?.['titles-item']?.title"
      class="process-title"
    >
      {{ data["title-with-titles-list"].items["titles-item"].title }}
    </UiTitle>
    <ul v-if="data?.['title-with-titles-list']?.items?.['titles-item']?.items?.['title-list']
?.length" class="process">
      <li
        v-for="(item, index) in data['title-with-titles-list'].items['titles-item'].items['title-list']"
        :key="`process-item-${index}`"
        :ref="(el) => (itemRefs[index] = el)"
        class="process__item"
        :class="{ active: activeIndices.has(index) }"
      >
        <span class="process__index">
          {{ index + 1 }}
          <UiIcon
            v-if="index !== data['title-with-titles-list'].items['titles-item'].items['title-list'].length - 1"
            custom-class="process__line"
            name="dashed-line"
            width="1"
            height="60"
          />
        </span>
        <span class="process__label">{{ item?.title }}</span>
      </li>
    </ul>
  </section>
</template>
