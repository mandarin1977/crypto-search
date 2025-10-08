<template>
    <div class="app">
        <AppHeader/>
        <main>
            <slot />
        </main>
        <AppFooter/>
    </div>
</template>
<script setup lang="ts">
    import AppHeader from '@/components/common/AppHeader.vue';
    import AppFooter from '@/components/common/AppFooter.vue';
    import '@/styles/header_footer.css';
</script>