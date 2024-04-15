<template>
  <div v-if="newsData">
    <h1 class="my-7">List berita category {{ newsData[0].category.name }}</h1>
    <v-card class="mb-7" v-for="data in newsData" :key="data.id">
      <v-img
        class="align-end text-white"
        height="200"
        :src="data.image ? data.image : `https://cdn.vuetifyjs.com/images/cards/docks.jpg`"
        cover
      >
        <v-card-title>{{ data.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-4"> {{ data.category.name }} </v-card-subtitle>

      <v-card-text>
        <div>{{ data.content.substring(0, 30) }}...</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="blue" @click="detailNews(data.id)">Read More</v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <div v-else>
    <h1>Tidak ada berita di category ini</h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { query, collection, where, getDocs } from 'firebase/firestore'
import { useRoute, useRouter } from 'vue-router'
import { db } from '@/config/firebase'

// State
const newsData = ref(null)

// Register
const route = useRoute()
const router = useRouter()

const detailNews = (paramsId) => {
  router.push({ name: 'DetailNewsPublic', params: { id: paramsId } })
}

const readData = async () => {
  const q = query(collection(db, 'news'), where('category.id', '==', route.params.id))
  const querySnapShot = await getDocs(q)
  newsData.value = querySnapShot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id }
  })
  console.log(querySnapShot)
}
onMounted(() => {
  readData()
})
</script>
