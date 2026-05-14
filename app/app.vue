<script setup>
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

const { data: blocks, error } = await useAsyncData(
  "main",
  async () =>
    $fetch("/api/graphql", {
      method: "POST",
      body: {
        query: MyQuery,
        queryId: "main",
      },
    }),
  {
    transform: (response) => {
      return (
        response.data?.page?.blocks?.reduce((acc, block) => {
          return { ...acc, ...transformBlock(block) };
        }, {}) || {}
      );
    },
  },
);

console.log("Transformed blocks:", blocks.value);
</script>
<template>
  <div class="page-wrapper">
    <LayoutHeader />
    <main class="main">
      <SectionHero
        v-if="blocks?.['main-block']?.block"
        :data="blocks['main-block'].block"
        :video-data="blocks['main-modal']?.block"
        @open-contacts="toggleModal('contacts', true)"
      />
      <LazySectionVideo
        v-if="blocks?.['about-us']?.block"
        :data="blocks['about-us'].block"
      />
      <LazySectionBenefits
        v-if="blocks?.['our-advantages']?.block"
        :data="blocks['our-advantages'].block"
        id="benefits"
      />
      <LazySectionStack
        v-if="blocks?.['our-stack']?.block"
        :data="blocks['our-stack'].block"
        id="stack"
      />
      <LazySectionProcess
        v-if="blocks?.['work-process']?.block"
        :data="blocks['work-process'].block"
        id="process"
      />
      <LazySectionPrices
        v-if="blocks?.['our-price']?.block"
        :data="blocks['our-price'].block"
        id="prices"
      />
      <LazySectionContacts id="contacts" />
    </main>
    <LazyLayoutFooter />
  </div>
  <ModalWrapper
    v-show="isContactVisible"
    @close="toggleModal('contacts', false)"
  >
    <LazyModalContact @close="toggleModal('contacts', false)" />
  </ModalWrapper>
</template>
