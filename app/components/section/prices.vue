<script setup>
// global variables
const { windowWidth } = useWindowWidth();

// variables
const slides = [
  {
    title: "Малий проєкт",
    text: "вілвіловівоіо лвоілоіл іофлололіоліоооліоіфі ячячя ячяч яччячя ячя",
    rating: 1,
    price: "від 5000 грн",
  },
  {
    title: "Середній проєкт",
    text: "вілвіловівоіо лвоілоіл іофлололіоліоооліоіфі ячячя ячяч яччячя ячя",
    rating: 2,
    price: "від 7000 грн",
  },
  {
    title: "Enterprise/кастом",
    text: "вілвіловівоіо лвоілоіл іофлололіоліоооліоіфі ячячя ячяч яччячя ячя",
    rating: 3,
    price: "від 10 000 грн",
  },
];

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 26,
};
</script>
<template>
  <section class="container prices-section">
    <UiTitle>Наші ціни</UiTitle>
    <template v-if="windowWidth > 1024">
      <ul class="pricelist">
        <li
          v-for="(slide, index) in slides"
          :key="`pricelist-card-${index}`"
          class="pricelist-card"
        >
          <h3 class="pricelist-card__title">
            {{ slide.title }}
          </h3>
          <p class="pricelist-card__text">
            {{ slide.text }}
          </p>
          <div class="pricelist-card__rating">
            <UiIcon
              v-for="(star, index) in slide.rating"
              :key="`pricelist-card-rating-${star}`"
              custom-class="pricelist-card__icon"
              name="star"
              width="60"
              height="60"
            />
          </div>
          <span class="pricelist-card__price">
            {{ slide.price }}
          </span>
        </li>
      </ul>
      <button class="button button--right">Консультуватись</button>
    </template>
    <UiSwiper
      v-else
      custom-class="pricelist-swiper"
      :slides="slides"
      :options="swiperOptions"
      no-container
      pagination
    >
      <template #slide="{ slideData }">
        <div class="pricelist-card">
          <h3 class="pricelist-card__title">
            {{ slideData.title }}
          </h3>
          <p class="pricelist-card__text">
            {{ slideData.text }}
          </p>
          <div class="pricelist-card__rating">
            <UiIcon
              v-for="(star, index) in slideData.rating"
              :key="`pricelist-card-rating-slide-${star}`"
              custom-class="pricelist-card__icon"
              name="star"
              width="60"
              height="60"
            />
          </div>
          <span class="pricelist-card__price">
            {{ slideData.price }}
          </span>
        </div>
      </template>
    </UiSwiper>
  </section>
</template>
