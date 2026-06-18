<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const { data } = await useFetch('/api/helloworld')




const links = ref<ButtonProps[]>([
  {
    label: 'Comenzar',
    color: 'neutral'
  },
  {
    label: 'Más información',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageCTA
    :title="data?.message"
    :description="data?.description"
    orientation="horizontal"
    :links="links"
  >
    <img
      src="https://picsum.photos/640/728"
      width="320"
      height="364"
      alt="Ilustración"
      class="w-full rounded-lg"
      loading="lazy"
    />
  </UPageCTA>
</template>
