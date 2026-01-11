<script setup>
// variables
const isContactVisible = ref(false);

// methods
function toggleModal(modal, open) {
  switch (modal) {
    case "contacts":
      isContactVisible.value = open
  }

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
}
</script>
<template>
  <div class="page-wrapper">
    <main class="main">
      <SectionProcess/>
      <SectionPrices @open-contacts="toggleModal('contacts', true)"/>
      <SectionContacts/>
    </main>
    <LayoutFooter/>
  </div>
  <ModalWrapper v-show="isContactVisible" @close="toggleModal('contacts', false)">
    <LazyModalContact @close="toggleModal('contacts', false)"/>
  </ModalWrapper>
</template>