<script setup>
// emits
const emit = defineEmits(["openContacts"]);

// variables
const isVideoVisible = ref(false);
const title = [
  { text: "Створюємо ", highlight: false },
  { text: "системи, ", highlight: true },
  { text: "які ", highlight: false },
  { text: "працюють ", highlight: true },
  { text: "без компромісів.", highlight: false },
];

const currentLength = ref(0);
const showCursor = ref(true); // Controls visibility of the cursor

const displayedTitle = computed(() => {
  let remaining = currentLength.value;
  return title.map((block) => {
    const take = Math.min(Math.max(0, remaining), block.text.length);
    remaining -= take;
    return { ...block, text: block.text.substring(0, take) };
  });
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const startTyping = async () => {
  const typingSpeed = 80;
  const punctuationPause = 500;
  const cursorRemovalDelay = 3000;

  const fullText = title.map((b) => b.text).join("");
  const punctuationMarks = [",", ".", "!", "?"];

  for (let i = 0; i < fullText.length; i++) {
    currentLength.value++;

    if (punctuationMarks.includes(fullText[i])) {
      await sleep(punctuationPause);
    } else {
      await sleep(typingSpeed);
    }
  }

  // Final delay after the last character before the cursor vanishes
  await sleep(cursorRemovalDelay);
  showCursor.value = false;
};

function toggleVideo(open) {
  isVideoVisible.value = open;

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
    startTyping();
  }
}

onMounted(() => {
  toggleVideo(true);
});
</script>

<template>
  <div class="hero container">
    <UiIcon
      name="hero-star"
      custom-class="hero__star"
      width="210"
      height="220"
    />

    <div class="hero__title-container">
      <h1 class="hero__title ghost" aria-hidden="true">
        <template v-for="(word, index) in title" :key="index">
          <span :class="{ highlight: word.highlight }">{{ word.text }}</span>
        </template>
      </h1>

      <h1 class="hero__title animated">
        <template v-for="(word, index) in displayedTitle" :key="index">
          <span :class="{ highlight: word.highlight }">{{ word.text }}</span>
        </template>
        <span v-show="showCursor" class="cursor">|</span>
      </h1>
    </div>

    <div class="hero__button-wrapper">
      <button class="button hero__button" @click="emit('openContacts')">
        Консультуватись
      </button>
      <hr class="hero__line" />
    </div>
  </div>
  <LazyModalVideo v-if="isVideoVisible" @close="toggleVideo(false)"/>
</template>
