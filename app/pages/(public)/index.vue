<template>
    <div>
        <h1>Home Page</h1>
        <UButton icon="i-lucide-rocket" size="md" color="primary" variant="solid">Button</UButton>

        <UButton :avatar="{
            src: 'https://github.com/nuxt.png',
            loading: 'lazy'
        }" size="md" color="neutral" variant="outline">
            Button
        </UButton>

    </div>
</template>
