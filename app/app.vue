<script setup>
import { onMounted } from 'vue';

// variables
const isContactVisible = ref(false);

// methods
function toggleModal(modal, open) {
  switch (modal) {
    case "contacts":
      isContactVisible.value = open;
  }

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
}
const MyQuery = `
  query MyQuery {
    page(input: {slug: "main"}) {
      id
      blocks {
        id
        name
        type
        block {
          data {
            key
            type
            value
            items {
              type
              data {
                key
                type
                value
                items {
                  type
                  data {
                    key
                    type
                    value
                  }
                }
              }
            }
          }
          type
        }
      }
    }
  }
`;

const { data: blocks, error } = await useAsyncData('main', async () => $fetch('/api/graphql', {
  method: 'POST',
  body: {
    query: MyQuery,
    queryId: 'main',
  },
}), {
  transform: (response) => {
    return response.data?.page?.blocks?.map(block => transformBlock(block)) ?? [];
  },
});

// console.log('Transformed blocks:', blocks.value);
</script>
<template>
  <div class="page-wrapper">
    <LayoutHeader />
    <main class="main">
      <SectionHero @open-contacts="toggleModal('contacts', true)" />
      <SectionVideo />
      <SectionBenefits id="benefits" />
      <SectionStack id="stack" @open-contacts="toggleModal('contacts', true)" />
      <SectionProcess id="process" />
      <SectionPrices id="prices" @open-contacts="toggleModal('contacts', true)" />
      <SectionContacts id="contacts" />
    </main>
    <LayoutFooter />
  </div>
  <ModalWrapper
    v-show="isContactVisible"
    @close="toggleModal('contacts', false)"
  >
    <LazyModalContact @close="toggleModal('contacts', false)" />
  </ModalWrapper>
</template>
