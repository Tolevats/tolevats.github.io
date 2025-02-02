<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <h1>About Me</h1>
        <p>I am a full-stack developer with experience in Vue.js, Node.js and more.</p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="/profile.jpg" alt="Foto de perfil"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
