<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const { isAuthenticated, logout, isAdmin } = useAuthentication()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Productos',
  to: '/products',
  //   icon: 'i-lucide-book-open',
  active: route.path.startsWith('/products')
}, {
  label: 'Precios',
  to: '/pricing',
  //   icon: 'i-lucide-box',
  active: route.path.startsWith('/prices')
}, {
  label: 'Nosotros',
  //   icon: 'i-simple-icons-figma',
  to: '/about',
}, {
  label: 'Contacto',
  //   icon: 'i-lucide-rocket',
  to: '/contact',
},
])


const responsiveMenu = ref([
  ...items.value,
  {
    label: 'Sign in',
    to: '/login',
    active: route.path.startsWith('/login'),
  }
])

</script>

<template>
  <UHeader>
    <template #title>
      <IconsNuxtui class="h-6 w-auto" />
    </template>


    <UNavigationMenu :items="items" />

    <ClientOnly>
      <UNavigationMenu v-if="isAdmin" :items="[{
        label: 'Dashboard',
        to: '/dashboard'
      }]" />
    </ClientOnly>


    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton color="neutral" variant="ghost" to="https://github.com/missael07" target="_blank"
          icon="i-simple-icons-github" aria-label="GitHub" />
      </UTooltip>
      <ClientOnly>
        <UButton v-if="!isAuthenticated" color="primary" variant="solid" to="/login" icon="i-heroicons-user-circle"
          label="Sign in" />
        <UButton v-else color="primary" variant="ghost" icon="i-heroicons-user-circle" label="Sign out"
          @click="logout" />
      </ClientOnly>

    </template>

    <template #body>
      <UNavigationMenu :items="responsiveMenu" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
