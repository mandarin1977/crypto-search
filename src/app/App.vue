<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Authlayout from '@/layouts/Authlayout.vue'

const route = useRoute()
const layout = computed(() => {
  const name = route.meta?.layout
  return name === 'auth' ? Authlayout : DefaultLayout
})
</script>
