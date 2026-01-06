<script setup lang="ts">
  // imports
  import { Form } from "vee-validate";

  // variables
  const form = ref({
    name: "",
    phone: "",
    question: "",
  });
</script>
<template>
  <section class="container">
    <UiTitle>Контакти</UiTitle>
    <div class="contacts">
      <div class="contacts-info">
        <div class="contacts-text">
          <p class="contacts-text__item">Потрібна консультація чи точний розрахунок?</p>
          <p class="contacts-text__item">Напишіть нам!</p>
        </div>
        <div class="contacts-links">
          <NuxtLink to="mailto:email@com.ua" class="contacts-links__item">email@com.ua</NuxtLink>
          <NuxtLink to="tel:+380995488323" class="contacts-links__item contacts-links__item--small">+380995488323</NuxtLink>
        </div>
        <ul class="socials">
          <li class="socials__item">
            <NuxtLink class="socials__link" to="https://www.viber.com" target="_blank">
              <UiIcon custom-class="socials__icon" name="viber" width="40" height="40" />
            </NuxtLink>
          </li>
          <li class="socials__item">
            <NuxtLink class="socials__link" to="https://www.viber.com" target="_blank">
              <UiIcon custom-class="socials__icon" name="telegram" width="40" height="40" />
            </NuxtLink>
          </li>
          <li class="socials__item">
            <NuxtLink class="socials__link" to="https://www.viber.com" target="_blank">
              <UiIcon custom-class="socials__icon" name="whatsapp" width="40" height="40" />
            </NuxtLink>
          </li>
        </ul>
      </div>
      <Form class="contacts-form">
        <FieldInput
          v-model="form.name"
          name="name"
          type="text"
          placeholder="Ім'я"
          autocomplete="name"
        />
        <FieldInput
          v-model="form.phone"
          name="phone"
          type="phone"
          placeholder="Телефон"
          autocomplete="phone"
        />
        <FieldTextarea
          v-model="form.question"
          name="question"
          placeholder="Ваше питання "
        />
        <button class="button">Замовити консультацію</button>
      </Form>
    </div>
  </section>
</template>