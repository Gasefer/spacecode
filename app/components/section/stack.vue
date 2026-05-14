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
  <section class="stack">
    <div v-if="data?.title?.title" class="container">
      <UiTitle>
        {{ data.title.title }}
      </UiTitle>
    </div>
    <UiMarquee v-if="data?.file?.length" class="stack__marquee">
      <ul class="marquee-list">
        <li
          v-for="(item, index) in data.file"
          :key="`tech-stack-item-${index}`"
          class="marquee-list__item"
        >
          <NuxtImg
            v-if="item?.file"
            :src="item.file"
            class="marquee-list__image"
            :alt="item?.['title-file'] || `Our stack item ${index + 1}`"
            :title="item?.['title-file'] || `Our stack item ${index + 1}`"
            loading="lazy"
            fetchpriority="low"
          />
          <template v-else>
            {{ item?.['title-file'] }}
          </template>
        </li>
      </ul>
    </UiMarquee>
  </section>
</template>
