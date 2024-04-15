<template>
  <h1>Halaman Berita</h1>

  <!-- Tombol tambah -->
  <div class="d-flex justify-end my-6">
    <v-btn color="primary" icon="mdi-plus" @click="addNews()" size="large"></v-btn>
  </div>

  <v-row justify="center">
    <v-col v-for="data in newsData" :key="data.id" cols="4">
      <v-card>
        <v-img
          class="align-end text-white"
          height="300"
          :src="data.image ? data.image : 'https://source.unsplash.com/random'"
          cover
        >
          <v-card-title>{{ data.title.substring(0, 50) }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4"> {{ data.category.name }} </v-card-subtitle>

        <v-card-text>
          <div>{{ data.content.substring(0, 100) }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="blue" @click="openDetail(data.id)">Detail </v-btn>
          <v-btn color="green" @click="update(data.id)">Update </v-btn>
          <v-btn color="red" @click="deleteData(data.id)">Delete </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { useNewsStore } from '@/stores/newsStores'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

//router
const router = useRouter()

// stores
const newsStores = useNewsStore()

// state
const { newsData } = storeToRefs(newsStores)

// action
const { allNews, clearHandling, deleteHandling } = newsStores
const openDetail = (id) => {
  router.push({ name: 'DetailNews', params: { id: id } })
}

const update = (id) => {
  router.push({ name: 'DetailUpdate', params: { id: id } })
}

const addNews = () => {
  router.push({ name: 'CreateNews' })
  clearHandling()
}

const deleteData = (id) => {
  deleteHandling(id)
}

onMounted(() => {
  allNews()
})
</script>
