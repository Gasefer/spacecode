<script setup>
// emits
const emit = defineEmits(["openContacts"]);

// global variables
const { windowWidth } = useWindowWidth();

// ВИДЛИТИ, КОЛИ РОБИТИ АПІ
const benefits = [
  {
    title: "Швидкість роботи",
    subtitle: "оптимізовані процеси",
  },
  {
    title: "Швидкість роботи",
    subtitle: "оптимізовані процеси",
  },
  {
    title: "Масштабованість",
    subtitle: "архітектура з запасом",
  },
  {
    title: "Масштабованість",
    subtitle: "архітектура з запасом",
  },
  {
    title: "Експертиза",
    subtitle: "складні кастомні рішення",
  },
  {
    title: "Експертиза",
    subtitle: "складні кастомні рішення",
  },
];

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 26,
};
</script>
<template>
  <section class="benefits-section container">
    <UiTitle>Наші переваги</UiTitle>
    <ul v-if="windowWidth > 1024" class="benefits">
      <li
        v-for="(item, index) in benefits"
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
          <h3 class="benefits-card__title">
            {{ item.title }}
          </h3>
          <p class="benefits-card__subtitle">
            {{ item.subtitle }}
          </p>
        </div>
      </li>
    </ul>
    <UiSwiper
      v-else
      :slides="benefits"
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
            <h3 class="benefits-card__title">
              {{ slideData.title }}
            </h3>
            <p class="benefits-card__subtitle">
              {{ slideData.subtitle }}
            </p>
          </div>
        </div>
      </template>
    </UiSwiper>
    <div class="container stack__btn-wrapper">
      <button class="button button--center" @click="emit('openContacts')">
        Консультуватись
      </button>
    </div>
  </section>
</template>
