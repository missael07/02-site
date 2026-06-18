<script setup lang="ts">

useSeoMeta({
  title: 'Mi tienda de servicios',
  description:
    'Bienvenido a la página principal de Mi tienda de servicios. Descubre nuestros productos y servicios.',
  ogTitle: 'Mi tienda de servicios',
  ogDescription:
    'Bienvenido a la página principal de Mi tienda de servicios. Descubre nuestros productos y servicios.',
  ogType: 'website',
  ogUrl: 'https://nuxtproyectmissael.netlify.app/',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Mi tienda de servicios',
  twitterDescription:
    'Bienvenido a la página principal de Mi tienda de servicios. Descubre nuestros productos y servicios.',
  twitterImage: '/og-image.png',
});

</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>

</template>
