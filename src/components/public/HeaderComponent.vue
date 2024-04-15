<template>
  <v-toolbar app class="bg-teal-accent-4">
    <RouterLink :to="{ name: 'LandingPage' }">
      <span class="ms-5">Unindra News</span>
    </RouterLink>
    <v-spacer></v-spacer>
    <v-toolbar-item v-if="!currentUser">
      <v-btn
        class="button ma-2"
        v-for="item in menuItems"
        :key="item.title"
        :to="{ name: `${item.pathName}` }"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        <span>{{ item.title }}</span>
      </v-btn>
    </v-toolbar-item>
    <v-toolbar-item v-else>
      <v-btn
        class="button ma-2"
        v-for="item in menuAdmin"
        :key="item.title"
        :to="{ name: `${item.pathName}` }"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        <span>{{ item.title }}</span>
      </v-btn>
    </v-toolbar-item>
  </v-toolbar>
</template>

<script setup>
import { inject } from 'vue'

const currentUser = inject('currentUser')

const menuItems = [
  {
    title: 'Category',
    icon: 'mdi-newspaper',
    pathName: 'Category-public'
  },
  {
    title: 'Login',
    icon: 'mdi-login',
    pathName: 'Login'
  },
  {
    title: 'Register',
    icon: 'mdi-account-plus',
    pathName: 'Register'
  }
]

const menuAdmin = [
  {
    title: 'Category',
    icon: 'mdi-newspaper',
    pathName: 'Category-public'
  },
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    pathName: 'Dashboard'
  }
]
</script>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
  color: white;
}
.button {
  cursor: pointer;
}
</style>
