<template>
  <div class="mb-4">
    <div class="mb-4" v-for="user in usersData.userData" :key="user.name">
      <h3>Ini adalah halaman Profile dari user {{ user.name }}</h3>
      <hr />
    </div>
  </div>
  <h4>Jumlah data di atas adalah {{ usersData.jumlahUser }}</h4>
  <v-divider></v-divider>
  <IconLink color="red" icon="mdi-youtube" link="https://www.youtube.com/" />
  <IconLink color="green" icon="mdi-whatsapp" link="https://web.whatsapp.com/" />
  <IconLink color="blue" icon="mdi-facebook" link="https://www.facebook.com/" />
  <IconLink color="black" icon="mdi-github" link="https://github.com/" />
</template>

<script setup>
import IconLink from '@/components/IconLink.vue'
import { useUserStorage } from '@/stores/UserStorage'
const usersData = useUserStorage()
</script>
