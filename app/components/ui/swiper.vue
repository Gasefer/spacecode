<script setup>
// props
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  customClass: {
    type: String,
    default: "",
  },
  noContainer: {
    type: Boolean,
    default: false,
  },
  navigation: {
    type: Boolean,
    default: false,
  },
  pagination: {
    type: Boolean,
    default: false,
  }
});

// variables
const swiperRef = ref(null);
const uniqueId = useId();

useSwiper(swiperRef, {
  ...(props.navigation && {
    navigation: {
      prevEl: `.ui-swiper__button--prev-${uniqueId}`,
      nextEl: `.ui-swiper__button--next-${uniqueId}`,
    },
  }),
  ...(props.pagination && {
    pagination: {
      el: ".ui-swiper__pagination",
      type: "bullets",
      clickable: true,
    },
  }),
  ...props.options,
});
</script>

<template>
  <div
    class="ui-swiper"
    :class="[customClass, { 'ui-swiper--no-container': noContainer }]"
  >
    <div class="ui-swiper__wrapper">
      <div>
        <swiper-container
          ref="swiperRef"
          class="ui-swiper__container"
          :class="[{ 'ui-swiper__container--no-container': noContainer }]"
          :init="false"
        >
          <swiper-slide
            v-for="(slide, index) in slides"
            :key="`swiper-slide-${index}`"
            class="ui-swiper__slide"
          >
            <slot
              name="slide"
              :slide-data="slide"
              :index="index"
            ></slot>
          </swiper-slide>
        </swiper-container>
      </div>
      <div
        v-if="navigation"
        class="ui-swiper__navigation"
      >
        <button
          class="ui-swiper__button ui-swiper__button--prev"
          :class="`ui-swiper__button--prev-${uniqueId}`"
          type="button"
          aria-label="Попередій слайд"
        >
          Попередій слайд
        </button>
        <button
          class="ui-swiper__button ui-swiper__button--next"
          :class="`ui-swiper__button--next-${uniqueId}`"
          type="button"
          aria-label="Наступний слайд"
        >
          Наступний слайд
        </button>
      </div>
    </div>
    <div
      v-if="pagination"
      class="ui-swiper__pagination"
    />
  </div>
</template>
