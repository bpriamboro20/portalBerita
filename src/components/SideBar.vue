<template>
  <!-- SideBar -->
  <v-navigation-drawer color="teal-accent-4" location="left">
    <listSideBar :items="items" />
  </v-navigation-drawer>
</template>

<script setup>
import listSideBar from './ListSideBar.vue'
import { ref } from 'vue'
const items = ref([
  { text: 'Dashboard', icon: 'mdi-view-dashboard', pathName: 'Dashboard' },
  { text: 'Category', icon: 'mdi-view-list', pathName: 'Category' },
  { text: 'News', icon: 'mdi-newspaper-variant-outline', pathName: 'News' },
  { text: 'Profile', icon: 'mdi-account', pathName: 'UserProfile' }
])
</script>
