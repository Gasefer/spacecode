<script setup>
// imports
import { useField } from "vee-validate";

// props
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  customClass: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
});

// varables
const nameRef = toRef(props, "name");
const { errorMessage, meta } = useField(nameRef, undefined, {
  initialValue: props.modelValue,
});
</script>

<template>
  <div
    class="input textarea"
    :class="[customClass, { 'has-error': !meta.valid && errorMessage }]"
  >
    <label
      v-if="label"
      class="label"
      :for="name"
    >
      {{ label }}
    </label>
    <div class="textarea__wrapper">
      <textarea
        :id="nameRef"
        class="input__field textarea__field"
        :name="nameRef"
        :placeholder="placeholder"
        :value="modelValue"
      ></textarea>
    </div>
    <p
      v-if="errorMessage"
      class="error-text"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
