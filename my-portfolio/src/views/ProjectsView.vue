<template>
  <v-container>
    <h1>Projects</h1>
    <br>
    <p>My most recent work 👇</p>
    <br>
    <v-row>
      <v-col v-for="project in projects" :key="project.id" cols="12" md="6">
        <v-card>
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>{{ project.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useProjectsStore } from '@/stores/projects';
import { storeToRefs } from 'pinia';

const { projects } = storeToRefs(useProjectsStore());
</script>

<style scoped></style>
