export function useWindowWidth() {
  const windowWidth = ref(0);

  const updateWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    if (import.meta.client) {
      updateWidth();
      window.addEventListener("resize", updateWidth);
    }
  });

  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener("resize", updateWidth);
    }
  });

  return { windowWidth };
}