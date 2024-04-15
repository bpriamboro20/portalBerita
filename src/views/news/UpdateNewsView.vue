<template>
  <h1>Update News</h1>
  <FormInputNews />
</template>

<script setup>
import FormInputNews from '@/components/news/FormInputNews.vue'
import { useRoute } from 'vue-router' //untuk mengambil params
import { useNewsStore } from '@/stores/newsStores'
import { onMounted } from 'vue'

// Store
const newsStore = useNewsStore()

// Route
const route = useRoute()

// action
const { updateHandling } = newsStore

onMounted(() => {
  updateHandling(route.params.id)
})
</script>
