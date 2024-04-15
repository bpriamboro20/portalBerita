<template>
  <v-app>
    <!-- Header -->
    <HeaderComponent />

    <!-- Main -->
    <v-container style="min-height: 80vh">
      <RouterView />
    </v-container>

    <!-- Footer -->
    <FooterComponent />
  </v-app>
</template>

<script setup>
import HeaderComponent from '../components/public/HeaderComponent.vue'
import FooterComponent from '../components/public/FooterComponent.vue'
</script>
