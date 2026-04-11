<script setup>
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
</template>
