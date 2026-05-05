<script setup>
//variables
const stack = [
  "PYTHON",
  "JS",
  "JAVA",
  "REACT",
  "VUE",
  "ANGULAR",
  "VUE",
  "TYPESCRIPT",
  "PHP",
  "LARAVEL",
];
</script>
<template>
  <section class="stack">
    <div class="container">
      <UiTitle>Наш стек технологій</UiTitle>
    </div>
    <UiMarquee class="stack__marquee">
      <ul class="marquee-list">
        <li
          v-for="(item, index) in stack"
          :key="`tech-stack-item-${index}`"
          class="marquee-list__item"
        >
          {{ item }}
        </li>
      </ul>
    </UiMarquee>
  </section>
</template>
