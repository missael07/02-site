<script setup lang="ts">
throw createError({
  status: 500,
  statusText: 'Internal Server Error',
  data: {
    myCustomField: true,
    myOtherCustomField: 'Hello World',
  }
})
</script>

<template>
  <div>
    Page: products
  </div>
</template>

<style scoped></style>
