<!-- <template>
  <h1>Ini adalah halaman Dashboard</h1>
  <h4 class="mb-2">Jumlah User adalah {{ usersData.jumlahUser }}</h4>
  <div class="mb-4" v-for="user in usersData.userData" :key="user.name">
    <p>Name : {{ user.name }}</p>
    <p>Email : {{ user.email }}</p>
    <br />
    <hr />
  </div>

  <div>
    <form action="" class="mb-4" @submit.prevent="submitData">
      <label for="">Name</label><br />
      <input type="text" v-model="usersData.userInput.name" /><br /><br />
      <label for="">Email</label><br />
      <input type="text" v-model="usersData.userInput.email" /><br /><br />
      <button type="submit" value="Tambah">Tambah</button>
    </form>
  </div>

  <hr />
  <br />

  <div class="button mb-4 ga-4 d-flex">
    <div class="success">
      <v-btn
        prepend-icon="mdi mdi-check-circle-outline"
        @click="showSuccess = !showSuccess"
        type="button"
        variant="elevated"
        color="success"
      >
        <template v-slot:prepend>
          <v-icon color="light"></v-icon>
        </template>
        Show Success</v-btn
      >
    </div>
    <div class="error">
      <v-btn
        prepend-icon="mdi mdi-close-circle-outline"
        @click="showError = !showError"
        type="button"
        variant="elevated"
        color="error"
      >
        <template v-slot:prepend>
          <v-icon color="light"></v-icon>
        </template>

        Show Error</v-btn
      >
    </div>

    <div class="warning">
      <v-btn
        prepend-icon="mdi mdi-alert-outline"
        @click="showWarning = !showWarning"
        type="button"
        variant="elevated"
        color="warning"
      >
        <template v-slot:prepend>
          <v-icon color="light"></v-icon>
        </template>

        Show Warning</v-btn
      >
    </div>

    <div class="info">
      <v-btn
        prepend-icon="mdi mdi-information-outline"
        @click="showInfo = !showInfo"
        type="button"
        variant="elevated"
        color="info"
      >
        <template v-slot:prepend>
          <v-icon color="light"></v-icon>
        </template>

        Show Info</v-btn
      >
    </div>
  </div>
  <AlertMessage v-model="showSuccess" typeValue="success">
    <template #title>
      <h3>Success</h3>
    </template>
    <template #default>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil saepe iure officiis
        quas minima repellat consequatur ad quos facilis fuga expedita cumque dolorem reiciendis,
        similique blanditiis amet! Itaque, incidunt commodi similique libero quaerat ex doloremque
        illum debitis ratione nobis vitae maxime, fugit ipsum necessitatibus non ullam quidem rem
        suscipit? Nisi, atque doloribus totam corrupti vitae aspernatur libero illum? Perspiciatis,
        error cum! Commodi odio culpa, debitis dignissimos impedit voluptas. Laboriosam consequatur
        eligendi voluptatem quod eveniet tempora aliquid accusamus consequuntur ipsum?
      </p>
    </template>
  </AlertMessage>

  <AlertMessage v-model="showError" typeValue="error">
    <template #title>
      <h3>Error</h3>
    </template>
    <template #default>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil saepe iure officiis
        quas minima repellat consequatur ad quos facilis fuga expedita cumque dolorem reiciendis,
        similique blanditiis amet! Itaque, incidunt commodi similique libero quaerat ex doloremque
        illum debitis ratione nobis vitae maxime, fugit ipsum necessitatibus non ullam quidem rem
        suscipit? Nisi, atque doloribus totam corrupti vitae aspernatur libero illum? Perspiciatis,
        error cum! Commodi odio culpa, debitis dignissimos impedit voluptas. Laboriosam consequatur
        eligendi voluptatem quod eveniet tempora aliquid accusamus consequuntur ipsum? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sint sapiente nihil atque nesciunt aut esse
        similique fugiat, modi recusandae architecto.
      </p>
    </template>
  </AlertMessage>

  <AlertMessage v-model="showWarning" typeValue="warning">
    <template #title>
      <h3>Warning</h3>
    </template>
    <template #default>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil saepe iure officiis
        quas minima repellat consequatur ad quos facilis fuga expedita cumque dolorem reiciendis,
        similique blanditiis amet! Itaque, incidunt commodi similique libero quaerat ex doloremque
        illum debitis ratione nobis vitae maxime, fugit ipsum necessitatibus non ullam quidem rem
        suscipit? Nisi, atque doloribus totam corrupti vitae aspernatur libero illum? Perspiciatis,
        error cum! Commodi odio culpa, debitis dignissimos impedit voluptas. Laboriosam consequatur
        eligendi voluptatem quod eveniet tempora aliquid accusamus consequuntur ipsum? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sint sapiente nihil atque nesciunt aut esse
        similique fugiat, modi recusandae architecto.
      </p>
    </template>
  </AlertMessage>

  <AlertMessage v-model="showInfo" typeValue="info">
    <template #title>
      <h3>Info</h3>
    </template>
    <template #default>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil saepe iure officiis
        quas minima repellat consequatur ad quos facilis fuga expedita cumque dolorem reiciendis,
        similique blanditiis amet! Itaque, incidunt commodi similique libero quaerat ex doloremque
        illum debitis ratione nobis vitae maxime, fugit ipsum necessitatibus non ullam quidem rem
        suscipit? Nisi, atque doloribus totam corrupti vitae aspernatur libero illum? Perspiciatis,
        error cum! Commodi odio culpa, debitis dignissimos impedit voluptas. Laboriosam consequatur
        eligendi voluptatem quod eveniet tempora aliquid accusamus consequuntur ipsum? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sint sapiente nihil atque nesciunt aut esse
        similique fugiat, modi recusandae architecto.
      </p>
    </template>
  </AlertMessage>
</template> -->

<!-- Style -->
<!-- <style scoped>
input {
  border: 1px solid black;
  border-radius: 5px;
}

button {
  padding: 7px;
  background-color: rgb(43, 241, 43);
  color: white;
  border-radius: 5px;
  border: 1px solid black;
}
</style> -->

<!-- <script setup>
import { ref } from 'vue'
import { useUserStorage } from '@/stores/UserStorage'

// Storage
const usersData = useUserStorage()

const submitData = () => {
  usersData.tambahUser()
}

import AlertMessage from '../components/AlertMessage.vue'
const showError = ref(false)
const showSuccess = ref(false)
const showWarning = ref(false)
const showInfo = ref(false)
</script> -->

<template>
  <div v-if="!currentUser">
    <h1>Loading</h1>
  </div>
  <div v-else>
    <h1>Hello, {{ currentUser.name }} ({{ currentUser.email }}) 🖐</h1>
    <p>Selamat datang di website kami</p>
  </div>
</template>

<script setup>
import { useAuthStores } from '@/stores/authStore'
import { storeToRefs } from 'pinia'

// Store
const auth = useAuthStores()
const { currentUser } = storeToRefs(auth)
</script>
