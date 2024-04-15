<template>
  <h1>Category</h1>
  <v-row class="my-3">
    <v-col cols="12" md="3" v-for="data in categories" :key="data.id">
      <v-sheet
        class="align-center justify-center flex-wrap text-center py-6"
        color="teal-accent-4"
        height="200"
        rounded="lg"
        width="90%"
        elavation="12"
      >
        <h3 class="mb-3 px-2">{{ data.name }}</h3>
        <p class="mb-4 text-body-2">
          {{ data.description.substring(0, 50) }}...<br />
          <RouterLink
            :to="{ name: 'CategoryByIdView', params: { id: data.id } }"
            class="text-decoration-none text-white mt-4 font-weight-bold"
            >Read More</RouterLink
          >
        </p>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/CategoryStore'

// Register Storage
const CategoryStore = useCategoryStore()

// Action
const { readCategory } = CategoryStore

// State
const { categories } = storeToRefs(CategoryStore)

onMounted(() => {
  readCategory()
})
</script>
