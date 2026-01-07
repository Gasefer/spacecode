<script setup>
  const currentDate = new Date(); 
const currentYear = currentDate.getFullYear();
</script>
<template>
  <footer class="footer">
    <div class="footer-content">
      <UiLogo class="footer-logo"/>
      <p>Створюємо системи, які працюють</p>
    </div>
    <nav class="footer-nav">
      <ul class="footer-links">
        <li class="footer-links__item">
          <NuxtLink to="/" class="footer-links__url">Наші переваги</NuxtLink>
        </li>
        <li class="footer-links__item">
          <NuxtLink to="/" class="footer-links__url">Наші ціни</NuxtLink>
        </li>
        <li class="footer-links__item">
          <NuxtLink to="/" class="footer-links__url">Процес роботи</NuxtLink>
        </li>
        <li class="footer-links__item">
          <NuxtLink to="/" class="footer-links__url">Наш стек технологій</NuxtLink>
        </li>
      </ul>
    </nav>
    <p class="footer-copyright">{{ currentYear }} Всі права захищено</p>
  </footer>
</template>