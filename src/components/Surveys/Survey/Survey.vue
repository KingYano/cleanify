<template>
  <div class="survey">
    <form v-if="challenge" class="survey-form">
      <div v-for="(question, index) in challenge.questions" :key="question.id">
        <h3 v-if="isCurrentQuestion(index)" class="survey-question-title">{{ questionNumber(question) }} - {{ questionTitle(question) }}</h3>
        <p v-if="isCurrentQuestion(index) && question.instruction" class="survey-question-info">{{ currentQuestionInstructions }}</p>
        <div v-if="isCurrentQuestion(index) && question.response">
          <button-response
              :response-content="question.responseContent"
              :name="String(question.id)"
              @update:os="os = $event as string"
          ></button-response>
        </div>
        <div v-if="isCurrentQuestion(index) && question.textField">
          <input-response></input-response>
        </div>
      </div>
      <button @click="nextQuestion" class="survey-form-submit-button" type="button">{{ buttonLabel }}</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, watch} from 'vue';
import type { Challenge } from '@/interface/Challenge';
import ButtonResponse from "@/components/Surveys/TypeResponse/ButtonResponse.vue";
import InputResponse from "@/components/Surveys/TypeResponse/InputResponse.vue";

const props = defineProps<{
  challenge: Challenge;
}>();

const currentQuestionIndex = ref(0);
const os = ref<string | null>(null);

watch(os, (newValue) => {
  console.log('os updated:', newValue);
});

console.log('challenge:', props.challenge);

const isCurrentQuestion = (index: number) => index === currentQuestionIndex.value;

const questionNumber = (question: MailQuestion | DesktopQuestion | MobileQuestion) => question.questionNumber;

const questionTitle = (question: MailQuestion | DesktopQuestion | MobileQuestion) => question.title;


const buttonLabel = computed(() => {
  return currentQuestionIndex.value === props.challenge.questions.length - 1 ? 'Terminer' : 'Suivant';
});

const currentQuestionInstructions = computed(() => {
  const currentQuestion = props.challenge.questions[currentQuestionIndex.value];
  if (currentQuestion.instruction && os.value && currentQuestion.instructionContent !== null) {
    const instructionContent = currentQuestion.instructionContent as MobileSystems | DesktopSystems;
    let systemInstructions: string = '';

    if (os.value === 'A' && 'android' in instructionContent) {
      systemInstructions = instructionContent.android || '';
    } else if (os.value === 'B' && 'ios' in instructionContent) {
      systemInstructions = instructionContent.ios || '';
    }
    return systemInstructions;
  }
  return '';
});

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
