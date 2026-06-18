import { ShareHeader } from '../../.nuxt/components';
<template>
    <div class="flex flex-col h-screen">
        <!-- <MainNavigation /> -->
        <ShareHeader />
        <main class="container mx-auto flex-1 mt-2">
            <slot />

        </main>
    </div>
</template>
