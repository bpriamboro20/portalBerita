<template>
  <h1>Ini adalah halaman dari detail kategori {{ $route.params.name }}</h1>
  <v-btn @click="BackCategory" class="my-3">Kembali</v-btn>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const BackCategory = () => {
  router.push({ name: 'Category' })
}
</script>
