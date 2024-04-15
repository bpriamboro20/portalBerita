<template>
  <v-app-bar color="teal-accent-4" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="$emit('toggle')"></v-app-bar-nav-icon>

    <v-toolbar-title>Admin News</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon="mdi-logout" variant="text" @click="logoutUser"></v-btn>
  </v-app-bar>
</template>
<script setup>
import { useAuthStores } from '@/stores/authStore'
defineEmits(['toggle'])

//store
const auth = useAuthStores()
const { logoutUser } = auth
</script>
