<template>
  <v-container>
    <h1>Leave me a message</h1>
    <br>
    <p>And let's start talking 😉</p>
    <br>
    <v-form ref="form" v-model="valid">
      <v-text-field label="Name" v-model="name" :rules="[rules.required]"></v-text-field>
      <v-text-field label="Email" v-model="email" :rules="[rules.required, rules.email]"></v-text-field>
      <v-textarea label="Message" v-model="message" :rules="[rules.required]"></v-textarea>
      <v-btn :disabled="!valid" @click="sendMessage">Send</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const valid = ref(false);

const rules = {
  required: (v: string) => !!v || 'Required.',
  email: (v: string) => /.+@.+\..+/.test(v) || 'Invalid email.',
};

const sendMessage = () => {
  console.log({ name: name.value, email: email.value, message: message.value });
};
</script>

<style scoped>
</style>
