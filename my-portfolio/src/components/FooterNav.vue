<template>
  <v-footer class="custom-footer text-center">
    <v-container>
      <!-- first line-->
      <v-row justify="center">
        <v-col cols="auto">
          <h3 class="footer-text">Let's connect!</h3>
        </v-col>
      </v-row>

      <!-- second line-->
      <v-row justify="center">
        <v-col v-for="icon in icons" :key="icon">
          <v-btn class="btn-icons" :icon="icon" variant="text"></v-btn>
        </v-col>
      </v-row>

      <!-- third line-->
      <v-divider></v-divider>
      <v-col cols="auto">
        <p class="copyright">
          {{ new Date().getFullYear() }} — <span>Made with 💚 by Tolevats &copy;</span>
        </p>
      </v-col>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const icons = ref([
  'mdi-github',
  'mdi-linkedin',
  'mdi-youtube',
  'mdi-twitch',
  'mdi-email',
  /* 'mdi-share' */
])
</script>

<style scoped>
.custom-footer {
  color: #d4cff7;
  background-color: #006004;
  padding: 20px 0;
}

.footer-text {
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;
}

.btn-icons {
  text-align: center;
  margin: 0 10px;
  color: #d4cff7;
}

.copyright {
  text-align: center;
  margin-top: 10px;
  font-size: 0.9rem;
}

span {
  font-weight: bold;
  font-style: italic;
}
</style>
