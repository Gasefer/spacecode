<script setup>
const links = [
  { text: "Переваги", link: "#benefits", id: "benefits" },
  { text: "Стек", link: "#stack", id: "stack" },
  { text: "Процес", link: "#process", id: "process" },
  { text: "Вартість", link: "#prices", id: "prices" },
];

const activeSection = ref("");
const visibleSections = new Set(); 
const mobileMenuOpen = ref(false);

function toggleMobileMenu(open) {
  mobileMenuOpen.value = open;

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
}

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: "-10% 0px -40% 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visibleSections.add(entry.target.id);
        activeSection.value = entry.target.id;
      } else {
        visibleSections.delete(entry.target.id);
      }
    });

    if (visibleSections.size === 0) {
      activeSection.value = "";
    }
  }, observerOptions);

  links.forEach((link) => {
    const el = document.getElementById(link.id);
    if (el) observer.observe(el);
  });

  onUnmounted(() => observer.disconnect());
});
</script>

<template>
  <header class="header container">
    <UiLogo />
    <nav 
      class="header-nav-wrapper"
      :class="{'active': mobileMenuOpen}"
    >
      <div class="header-nav">
        <div class="header-nav__container">
          <ul class="header-links-list">
            <li class="header-links-list__item header-links-list__item--mobile-only">
              <button class="header-contacts-button highlight">Замовити проєкт</button>
            </li>
            <li
              v-for="link in links"
              :key="link.id"
              class="header-links-list__item"
            >
              <a
                :href="link.link"
                class="header-links-list__url hover-link"
                :class="{ active: activeSection === link.id }"
                @click="toggleMobileMenu(false)"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
          <div class="header-socials-wrapper">
            <div class="header-socials-links">
              <NuxtLink
                to="mailto:email@com.ua"
                class="header-socials-links__item hover-link"
                @click="toggleMobileMenu(false)"
              >
                email@com.ua
              </NuxtLink>
              <NuxtLink 
                to="tel:+380995488323" 
                class="header-socials-links__item hover-link" 
                @click="toggleMobileMenu(false)"
              >
                +380995488323
              </NuxtLink>
            </div>
            <ul class="socials socials--header">
            <li class="socials__item">
              <NuxtLink class="socials__link" to="https://www.viber.com" target="_blank" @click="toggleMobileMenu(false)"і>
                <UiIcon custom-class="socials__icon" name="viber" width="40" height="40" />
              </NuxtLink>
            </li>
            <li class="socials__item">
              <NuxtLink class="socials__link" to="https://www.viber.com" target="_blank" @click="toggleMobileMenu(false)">
                <UiIcon custom-class="socials__icon" name="telegram" width="40" height="40" />
              </NuxtLink>
            </li>
            <li class="socials__item">
              <NuxtLink class="socials__link" to="https://www.viber.com" target="_blank" @click="toggleMobileMenu(false)">
                <UiIcon custom-class="socials__icon" name="whatsapp" width="40" height="40" />
              </NuxtLink>
            </li>
          </ul>
          </div>
        </div>
        <button class="header-contacts-button highlight" @click="toggleMobileMenu(false)">Замовити проєкт</button>
      </div>
    </nav>
    <button 
      class="burger"
      :class="{'active': mobileMenuOpen}" 
      @click="toggleMobileMenu(!mobileMenuOpen)"
    >
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </button>
  </header>
</template>
