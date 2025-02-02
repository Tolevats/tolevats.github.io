<template>
  <v-app-bar>
    <v-container>
      <v-btn color="nav-btn" to="/">Home</v-btn>
      <v-btn class="nav-btn" to="/about">About Me</v-btn>
      <v-btn class="nav-btn" to="/projects">Projects</v-btn>
      <v-btn class="nav-btn" to="/contact">Contact</v-btn>
      <v-btn class="nav-btn" to="/blog">Blog</v-btn>
<!--       <v-btn icon @click="toggleDarkMode">
        <v-icon>{{ darkMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}</v-icon>
      </v-btn> -->
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
/* import { ref } from 'vue';

const darkMode = ref(false);
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
}; */
</script>

<style scoped>
.nav-btn {
  color: #311B92;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: none;
  margin-right: 10px;
}

.nav-btn:hover {
  color: #fff;
}
</style>
