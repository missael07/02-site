<template>
  <div class="space-y-6">
    <!-- Header with Action Button -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          Productos
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">
          Gestiona y organiza tu catálogo de productos
        </p>
      </div>
      <UButton icon="i-lucide-plus" label="Agregar Producto" color="primary" size="lg" />
    </div>

    <UTable :data="products" :columns="productColumns" class="flex-1" />

    <SharedPagination :total="total" :model-value="currentPage" :per-page="perPage" />
  </div>
</template>

<script setup lang="ts">
import { h, resolveComponent } from 'vue';
import type { TableColumn } from '@nuxt/ui';
import { dayMontYearFormat } from '../../../../shared/utils/formatDate';
const UBadge = resolveComponent('UBadge');
const UAvatar = resolveComponent('UAvatar');

const { products, currentPage, perPage, total } = await usePaginatedProducts();

const productColumns: TableColumn<Product>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => `# ${row.getValue('id')}`,
  },
  {
    accessorKey: 'images',
    header: 'Imagen',
    cell: ({ row }) => {
      const images: string[] = row.getValue('images');
      const url = Array.isArray(images) && images.length > 0 ? images[0] : '';

      if (!url) return h('span', { class: 'text-sky-200' }, 'Sin Imagen')
      return h(UAvatar, { src: url, alt: 'Imagen del producto', class: 'avatar' }, () => images[0])
    },
  },
  {
    accessorKey: 'name',
    header: 'Nombre',
    cell: ({ row }) => `${row.getValue('name')}`,
  },
  {
    accessorKey: 'description',
    header: 'Descripción',
    cell: ({ row }) => {
      return h('div', { class: 'truncate-text', style: 'white-space: normal; word-break: break-word; max-width: 300px' }, String(row.getValue('description')).slice(0, 50) + '...')
    },
  },
  {
    accessorKey: 'price',
    header: 'Precio',
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('price'));
      return h('div', { class: 'text-right font-medium' }, formatCurrency(amount));
    },
  },
  {
    accessorKey: 'tags',
    header: 'Etiquetas',
    cell: ({ row }) => {
      console.log(row.getValue('tags'));
      const tags: string[] = row.getValue('tags');
      const badges = tags.map((tag) => {
        return h(UBadge, { class: 'capitalize mr-2', variant: 'subtle', color: 'primary' }, () =>
          tag
        );
      })

      return badges
    },
  },
  {
    accessorKey: 'createdAt',
    header: 'Creado',
    cell: ({ row }) => dayMontYearFormat(row.getValue('createdAt')),
  },
];


</script>
