<template>
  <div class="survey">
    <h2 v-if="challenge" class="survey-title">Nettoyer {{ challenge?.target === 'boîte email' ? 'sa' : 'son' }} {{ challenge?.target }}</h2>
    <form v-if="challenge" class="survey-form">
      <div v-for="(question, index) in challenge.questions" :key="question.id">
        <h3 v-if="index === currentQuestionIndex" class="survey-question-title">{{ question.title }}</h3>
        <p v-if="index === currentQuestionIndex" class="survey-question-info">{{ question.instructionContent }}</p>
        <!-- Ajoutez les champs de formulaire pour chaque question ici -->
      </div>
      <button @click="nextQuestion" class="survey-form-submit-button" type="button">{{ currentQuestionIndex === challenge.questions.length - 1 ? 'Terminer' : 'Suivant' }}</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { Challenge } from '@/interface/Challenge';

const props = defineProps<{
  challenge: Challenge;
}>();

const currentQuestionIndex = ref(0);

function nextQuestion() {
  if (currentQuestionIndex.value < props.challenge.questions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    // TODO: handle form submission
  }
}
</script>

<style lang="scss">
@import "Survey";
</style>
