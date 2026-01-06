<script setup lang="ts">
// imports
import { useField } from "vee-validate";

// emits
const emit = defineEmits<{
  "update:modelValue": [value: string | number];
}>();

// props
const props = withDefaults(
  defineProps<{
    modelValue: string | number;
    customClass?: string;
    autocomplete?: string;
    label?: string;
    name: string;
    placeholder?: string;
    type?:
      | "phone"
      | "text";
  }>(),
  {
    customClass: "",
    label: "",
    placeholder: "",
    type: "text",
  }
);

// variables
const nameRef = toRef(props, "name");
const input = ref<HTMLInputElement | null>(null);
const { errorMessage, meta } = useField(nameRef, undefined, {
  initialValue: props.modelValue,
});
</script>
<template>
  <div
    class="input"
    :class="[customClass, { 'has-error': !meta.valid && errorMessage }]"
  >
    <label
      v-if="label"
      class="label"
      :for="nameRef"
    >
      {{ label }}
    </label>
      <input
        :id="nameRef"
        ref="input"
        :type="type"
        class="input__field"
        :aria-label="!label ? placeholder || nameRef : undefined"
        :autocomplete="autocomplete || undefined"
        :name="nameRef"
        :placeholder="placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    <p
      v-if="errorMessage"
      class="error-text"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
