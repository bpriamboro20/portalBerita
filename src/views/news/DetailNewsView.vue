<template>
  <div v-if="detailNews">
    <DetailNewsComponents :data="detailNews" :isUpdate="true" />
  </div>
  <!-- <h1>Ini adalah halaman detail news dari {{ $route.params.id }}</h1> -->
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useNewsStore } from '@/stores/newsStores'
import { storeToRefs } from 'pinia'
import DetailNewsComponents from '@/components/news/DetailNewsComponent.vue'

// store
const newsStores = useNewsStore()

// Route
const route = useRoute()

// state
const { detailNews } = storeToRefs(newsStores)

// action
const { detailHandling } = newsStores

onMounted(() => {
  detailHandling(route.params.id)
})
</script>
