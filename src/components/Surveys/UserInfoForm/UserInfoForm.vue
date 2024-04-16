<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nom">Nom :</label>
        <input type="text" id="nom" v-model="nom" required>
      </div>
      <div>
        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" v-model="prenom" required>
      </div>
      <div>
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="service">Service :</label>
        <select id="service" v-model="service" required>
          <option value="">Sélectionnez un service</option>
          <option value="service1">Service 1</option>
          <option value="service2">Service 2</option>
          <option value="service3">Service 3</option>
        </select>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const nom = ref('');
const prenom = ref('');
const email = ref('');
const service = ref('');

function submitForm() {
  console.log('Nom:', nom.value);
  console.log('Prénom:', prenom.value);
  console.log('Email:', email.value);
  console.log('Service:', service.value);
  // Ajoutez ici le code pour gérer la soumission des données, comme envoyer les données à un serveur.
}
</script>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input, select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
