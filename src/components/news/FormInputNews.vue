<template>
  <div class="mt-6">
    <v-card class="mx-auto pa-8 mb-8" elevation="8" max-width="90%" rounded="lg">
      <v-form v-model="formInput" @submit.prevent="handlerSubmit()">
        <v-text-field
          density="compact"
          label="Judul Berita"
          variant="outlined"
          :rules="titleRules"
          class="my-3"
          v-model="news.title"
        ></v-text-field>

        <v-textarea
          density="compact"
          label="Content Berita"
          variant="outlined"
          :rules="contentRules"
          v-model="news.content"
        ></v-textarea>

        <div v-if="categories">
          <v-select
            class="my-3"
            :rules="categoryRules"
            :items="categories"
            item-title="name"
            item-value="id"
            label="category"
            return-object
            variant="outlined"
            v-model="news.category"
          ></v-select>
        </div>

        <v-btn
          type="submit"
          class="mb-8"
          color="teal-accent-4"
          size="large"
          variant="tonal"
          block
          :disabled="!formInput"
        >
          Submit
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script setup>
import { useCategoryStore } from '@/stores/CategoryStore.js'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useNewsStore } from '../../stores/newsStores.js'

//Store
const CategoryStore = useCategoryStore()
const newsStore = useNewsStore()

//State
const { categories } = storeToRefs(CategoryStore)
const { news, formInput } = storeToRefs(newsStore)
//action
const { readCategory } = CategoryStore
const { handlerSubmit } = newsStore

// Validation
const titleRules = [
  (value) => {
    if (value) return true
    return 'Judul Harus diisi'
  }
]

const contentRules = [
  (value) => {
    if (value) return true
    return 'Content Harus diisi'
  }
]

const categoryRules = [
  (value) => {
    if (value) return true
    return 'Category Berita Harus diisi'
  }
]

onMounted(() => {
  readCategory()
})
</script>
