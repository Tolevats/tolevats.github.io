<template>
  <v-app>
    <nav>
      <NavBar />
    </nav>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
    <footer>
      <FooterNav />
    </footer>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import FooterNav from './components/FooterNav.vue'

</script>
