export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const response = await $fetch('https://admin.spacecode.com.ua/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return response;
});