<template>
  <div class="survey">
    <h2 class="survey-title">Nettoyer son {{ challenge.target }}</h2>
    <form class="survey-form">
      <div v-for="question in challenge.questions" :key="question.id">
        <h3 class="survey-question-title">{{ question.title }}</h3>
        <p class="survey-question-info">XXX</p>
        <!-- Ajoutez les champs de formulaire pour chaque question ici -->
      </div>
      <button class="survey-form-submit-button" type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import type { Challenge } from '@/interface/Challenge';

  defineProps<{
    challenge: Challenge;
  }>();
</script>

<style lang="scss">
  @import "Survey";
</style>
