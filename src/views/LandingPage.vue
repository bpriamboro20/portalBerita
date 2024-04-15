<template>
  <div class="w-75 mx-auto">
    <h3 class="my-3">List Berita</h3>
    <v-divider class="border-opacity-100" color="teal-accent-4"> </v-divider>
    <v-row class="my-3">
      <v-col cols="12">
        <v-card class="mx-auto my-4" v-for="data in newsData" :key="data.id">
          <v-img
            class="align-end text-white"
            height="400"
            :src="data.image ? data.image : 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
            cover
          >
          </v-img>
          <v-card-title>{{ data.title.substring(0, 70) }}</v-card-title>

          <v-card-subtitle class="pt-4">{{ data.category.name }} </v-card-subtitle>

          <v-card-text>
            <div>{{ data.content.substring(0, 200) }}...</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              class="mx-2 mb-2"
              color="info"
              type="button"
              variant="elevated"
              @click="detailNews(data.id)"
              >Read More</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useNewsStore } from '@/stores/newsStores'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

// store
const newsStore = useNewsStore()

// Action
const { allNews } = newsStore

const detailNews = (id) => {
  router.push({ name: 'DetailNewsPublic', params: { id: id } })
}

// State
const { newsData } = storeToRefs(newsStore)
const router = useRouter()

onMounted(() => {
  allNews()
})
</script>
