<template>
  <div class="survey">
    <form v-if="challenge" class="survey-form">
      <div v-for="(question, index) in challenge.questions" :key="question.id">
        <h3 v-if="isCurrentQuestion(index)" class="survey-question-title">{{ questionNumber(question) }} - {{ questionTitle(question) }}</h3>
        <p v-if="isCurrentQuestion(index) && question.instruction" class="survey-question-info">{{ currentQuestionInstructions }}</p>
        <div v-if="isCurrentQuestion(index) && question.response">
          <button-response
              v-if="question.responseContent !== null"
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
import { ref, computed } from 'vue';
import type { Challenge } from '@/interface/Challenge';
import ButtonResponse from "@/components/Surveys/TypeResponse/ButtonResponse.vue";
import InputResponse from "@/components/Surveys/TypeResponse/InputResponse.vue";

const props = defineProps<{
  challenge: Challenge;
}>();

const currentQuestionIndex = ref(0);
const os = ref<string | null>(null);

const isCurrentQuestion = (index: number) => index === currentQuestionIndex.value;

const questionNumber = (question: MailQuestion | DesktopQuestion | MobileQuestion) => question.questionNumber;

const questionTitle = (question: MailQuestion | DesktopQuestion | MobileQuestion) => question.title;

const buttonLabel = computed(() => {
  return currentQuestionIndex.value === props.challenge.questions.length - 1 ? 'Terminer' : 'Suivant';
});

type SystemType = keyof MobileSystems | keyof DesktopSystems;

const getSystemByOSValue = (osValue: string): SystemType | null => {
  if (props.challenge.code === 'phone') {
    return osValue === 'A' ? 'android' : 'ios';
  } else if (props.challenge.code === 'desktop') {
    return osValue === 'A' ? 'windows' : 'mac';
  }
  return null;
};

const getInstructionType = (): string => {
  return props.challenge.code === 'phone' ? 'MobileSystems' : 'DesktopSystems';
};

const getInstructionContent = (system: SystemType): SystemInstructions => {
  const instructionType = getInstructionType();
  const instructionContent = props.challenge.questions[currentQuestionIndex.value].instructionContent as Record<string, string>;

  if (instructionType === 'MobileSystems') {
    return instructionContent[system as keyof MobileSystems] || null;
  } else {
    return instructionContent[system as keyof DesktopSystems] || null;
  }
};

const currentQuestionInstructions = computed(() => {
  const currentQuestion = props.challenge.questions[currentQuestionIndex.value];
  if (currentQuestion.instruction) {
    if (typeof currentQuestion.instructionContent === 'string') {
      return currentQuestion.instructionContent;
    } else if (os.value && currentQuestion.instructionContent !== null) {
      const system = getSystemByOSValue(os.value);
      if (system) {
        const instructionContent = getInstructionContent(system);
        return instructionContent || '';
      }
    }
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
