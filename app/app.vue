<script setup lang="ts">

const count = ref(0);
await sleep(2000);


count.value = 20;
</script>


<template>
  <div>
    <h1>Hola mundo - {{ count }}</h1>
    <button @click="count++">+</button>
  </div>
</template>
