<script setup lang="ts">
const { data: testimonials } = await useFetch('/api/home/reviews');
</script>

<template>

  <UPageSection title="Testimonios"
    description="Nuxt UI es una colección de componentes UI esenciales y utilidades para construir aplicaciones Nuxt. Proporciona una base sólida para tus proyectos, permitiéndote centrarte en crear funciones y experiencias únicas sin preocuparte por la infraestructura subyacente."
    headline="Descubre el poder de Nuxt UI y su integración fluida con el ecosistema de módulos y herramientas de Nuxt, diseñado para mejorar tu experiencia de desarrollo y ayudarte a crear aplicaciones impresionantes con facilidad." />

  <UPageColumns>
    <UPageCard variant="solid" to="https://cloudflare.com" icon="i-logos-cloudflare-icon"
      title="Workers LaunchPad de Cloudflare"
      description="NuxtHub forma parte de la cohorte Workers Launchpad de Cloudflare para asegurarte una experiencia de primera clase sobre la red de Cloudflare."
      :ui="{ leadingIcon: 'size-10' }" />

    <UPageCard v-for="(testimonial, index) in testimonials" :key="index" variant="subtle"
      :description="testimonial.description"
      :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }">
      <template #footer>
        <UUser :name="testimonial.name" :description="testimonial.subtitle" :avatar="{ src: testimonial.profileImage }"
          size="xl" />
      </template>
    </UPageCard>
  </UPageColumns>
</template>
