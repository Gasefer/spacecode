<script setup>
// imports
import { useField } from "vee-validate";

// emits
const emit = defineEmits(["update:modelValue"]);

// props
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  autocomplete: {
    type: String,
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
  type: {
    type: String,
    default: "text",
  },
})

// variables
const nameRef = toRef(props, "name");
const input = ref(null);
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
        @input="emit('update:modelValue', $event.target.value)"
      />
    <p
      v-if="errorMessage"
      class="error-text"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>
