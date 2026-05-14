<script setup>
// emits
const emit = defineEmits(["openContacts"]);

// props
defineProps({
  data: {
    type: Object,
    required: true,
  },
});

// global variables
const { windowWidth } = useWindowWidth();

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 26,
};
</script>
<template>
  <section class="benefits-section container">
    <UiTitle
      v-if="data?.['title-with-titles-list']?.items?.['titles-item']?.title"
    >
      {{ data["title-with-titles-list"].items["titles-item"].title }}
    </UiTitle>
    <template
      v-if="
        data?.['title-with-titles-list']?.items?.['titles-item']?.items?.[
          'title-list'
        ]
      "
    >
      <ul v-if="windowWidth > 1024" class="benefits">
        <li
          v-for="(item, index) in data['title-with-titles-list'].items[
            'titles-item'
          ].items['title-list']"
          :key="`benefits-item-${index}`"
          class="benefits-card"
        >
          <div class="benefits-card__icon-wrapper">
            <UiIcon
              custom-class="benefits-card__icon"
              name="tick"
              width="34"
              height="24"
            />
          </div>
          <div class="benefits-card__text">
            <h3 v-if="item?.title" class="benefits-card__title">
              {{ item.title }}
            </h3>
            <p v-if="item?.subtitle" class="benefits-card__subtitle">
              {{ item.subtitle }}
            </p>
          </div>
        </li>
      </ul>
      <UiSwiper
        v-else
        :slides="
          data['title-with-titles-list'].items['titles-item'].items[
            'title-list'
          ]
        "
        :options="swiperOptions"
        no-container
        pagination
      >
        <template #slide="{ slideData }">
          <div class="benefits-card">
            <div class="benefits-card__icon-wrapper">
              <UiIcon
                custom-class="benefits-card__icon"
                name="tick"
                width="24"
                height="16"
              />
            </div>
            <div class="benefits-card__text">
              <h3 v-if="slideData?.title" class="benefits-card__title">
                {{ slideData.title }}
              </h3>
              <p v-if="slideData?.subtitle" class="benefits-card__subtitle">
                {{ slideData.subtitle }}
              </p>
            </div>
          </div>
        </template>
      </UiSwiper>
    </template>
    <div class="container stack__btn-wrapper">
      <button class="button button--center" @click="emit('openContacts')">
        Консультуватись
      </button>
    </div>
  </section>
</template>
