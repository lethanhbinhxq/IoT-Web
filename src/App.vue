<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon class="ms-3" @click="drawer = !drawer" />
      <router-link to="/" class="flex items-center">
        <img src="/smart-home.png" alt="Smart Home" class="h-12 ms-3">
      </router-link>
      <v-toolbar-title>Smart Home</v-toolbar-title>
      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer" 
      app
    >
      <v-list>
        <v-list-item 
          v-for="(item, index) in menuItems" :key="index"
          :to="item.to" 
        >
          <template #prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const drawer = ref(true)
const menuItems = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard' },
]
</script>

<style>
.v-toolbar__content {
  background-color: #121212;
  color: #EEEEEE;
}

.v-btn--variant-text .v-btn__overlay {
  background-color: #4E4FEB !important;
}

.v-btn .v-ripple__animation {
  background: rgba(1, 1, 1, 0.3) !important;
}

.v-navigation-drawer {
  background: #121212 !important;
}

.v-navigation-drawer .v-navigation-drawer__content .v-list {
  background: #121212 !important;
  color: #EEEEEE !important;
}

 .v-list-item__overlay {
  background-color: #4E4FEB !important;
  color: #EEEEEE !important;
 }

.v-list-item .v-ripple__animation {
  background: rgba(1, 1, 1, 0.3) !important;
}

.v-list-item:hover > .v-list-item__overlay {
  opacity: 0.5 !important;
}

</style>