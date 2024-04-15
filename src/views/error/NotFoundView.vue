<template>
  <div class="d-flex justify-center">
    <div>
      <img :src="NotFoundImage" style="width: 40vw" alt="" />
      <h4 class="text-center">Halaman tidak ditemukan</h4>
      <v-btn color="teal-accent-4" class="my-10" block :to="{ name: 'LandingPage' }"
        >Kembali
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import NotFoundImage from '../../assets/notFound.svg'
</script>
