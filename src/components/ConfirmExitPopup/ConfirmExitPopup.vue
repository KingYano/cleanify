<template>
  <div class="confirm-exit-popup">
    <div class="popup-content">
      <p>Êtes-vous sûr de vouloir quitter le formulaire ?</p>
      <div class="popup-buttons">
        <button @click="stayOnPage">Rester</button>
        <button @click="exitPage">Quitter</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const stayOnPage = () => {
    // Close the popup
  };

  const exitPage = () => {
    router.push('/');
  };
</script>

<style lang="scss">
/* Add your styles here */
</style>
