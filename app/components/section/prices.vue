<script setup>
// global variables
const { windowWidth } = useWindowWidth();

// emits
const emit = defineEmits(["openContacts"]);

// props
defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 26,
};
</script>
<template>
  <section class="container prices-section">
    <UiTitle v-if="data?.title?.title">
      {{ data.title.title }}
    </UiTitle>
    <template v-if="data?.cardlist?.items?.['cardlist-item']?.length">
    <template v-if="windowWidth > 1024">
      <ul class="pricelist">
        <li
          v-for="(slide, index) in data.cardlist.items['cardlist-item']"
          :key="`pricelist-card-${index}`"
          class="pricelist-card"
        >
          <h3 v-if="slide?.title" class="pricelist-card__title">
            {{ slide.title }}
          </h3>
          <p v-if="slide?.subtitle" class="pricelist-card__text">
            {{ slide.subtitle }}
          </p>
          <div class="pricelist-card__rating">
            <UiIcon
              v-for="star in index + 1"
              :key="`pricelist-card-rating-${star}`"
              custom-class="pricelist-card__icon"
              name="star"
              width="60"
              height="60"
            />
          </div>
          <span v-if="slide?.price" class="pricelist-card__price">
            {{ slide.price }}
          </span>
        </li>
      </ul>
    </template>
    <UiSwiper
      v-else
      custom-class="pricelist-swiper"
      :slides="data.cardlist.items['cardlist-item']"
      :options="swiperOptions"
      no-container
      pagination
    >
      <template #slide="{ slideData, index }">
        <div class="pricelist-card">
          <h3 v-if="slideData?.title" class="pricelist-card__title">
            {{ slideData.title }}
          </h3>
          <p v-if="slideData?.subtitle" class="pricelist-card__text">
            {{ slideData.subtitle }}
          </p>
          <div class="pricelist-card__rating">
            <UiIcon
              v-for="star in index + 1"
              :key="`pricelist-card-rating-slide-${star}`"
              custom-class="pricelist-card__icon"
              name="star"
              width="60"
              height="60"
            />
          </div>
          <span v-if="slideData?.price" class="pricelist-card__price">
            {{ slideData.price }}
          </span>
        </div>
      </template>
    </UiSwiper>
    </template>
  </section>
</template>
