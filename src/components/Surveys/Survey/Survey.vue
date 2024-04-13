<template>
  <div class="survey">
    <form class="survey-form" @keydown.enter.prevent>
      <div class="survey-form-item" v-for="(question) in currentQuestions" :key="question.id">
        <h3 class="survey-form-title">{{ questionNumber(question) }} - {{ questionTitle(question) }}</h3>
        <div class="survey-form-paragraph">
          <p v-if="question.instruction" class="survey-form-paragraph-instruction">
            {{ currentQuestionInstructions(question) }}</p>
          <p v-if="question.moreQuestion" class="survey-form-paragraph-question">
            {{ question.moreQuestionContent }}</p>
          <p v-if="question.textInfo"
             class="survey-form-paragraph-question-info">{{ question.textInfoContent }}</p>
          <div v-if="question.response" class="survey-form-button">
            <button-response
                v-if="question.responseContent !== null"
                :response-content="question.responseContent"
                :name="String(question.id)"
                @update:os="os = $event as string"
            ></button-response>
          </div>
          <div v-if="question.textField" class="survey-form-input">
            <input-response v-model:modelValue="inputValue" @update:isValid="isValid = $event"></input-response>
            <div v-if="!isValid && String(inputValue).length === 0" class="survey-form-error">
              Veuillez remplir le champ de formulaire.
            </div>
            <div v-if="!isValid && String(inputValue).length > 0" class="survey-form-error">
              {{ errorMessage }}
            </div>
          </div>
        </div>
      </div>
      <div class="survey-form-commands">
        <div class="survey-form-commands-button-send">
          <button @click="nextQuestion" class="survey-button-submit" type="button">{{ buttonLabel }}</button>
        </div>
        <div class="survey-form-commands-buttons-navigation">
          <button
              @click="previousQuestion"
              class="survey-buttons-back"
              type="button"
              v-show="currentQuestionIndex > 0"
          >
            <i class="ri-arrow-up-line"></i>
          </button>
          <button
              @click="nextQuestion"
              class="survey-buttons-next"
              type="button"
              v-show="currentQuestionIndex < props.challenge.questions.length - 1"
          >
            <i class="ri-arrow-down-line"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, watch} from 'vue';
import type {Challenge} from '@/interface/Challenge';
import ButtonResponse from "@/components/Surveys/TypeResponse/ButtonResponse/ButtonResponse.vue";
import InputResponse from "@/components/Surveys/TypeResponse/InputResponse/InputResponse.vue";

const props = defineProps<{
  challenge: Challenge;
}>();

const currentQuestionIndex = ref(0);
const os = ref<string | null>(null);
const answers = ref<Record<string, string | null>>({});
const inputValue = ref<number | null>(null);
const isValid = ref(true);
const errorMessage = ref('');

const currentQuestions = computed(() => {
  return props.challenge.questions.filter((_, index) => index === currentQuestionIndex.value);
});

const isValidInput = computed(() => {
  const currentQuestion = props.challenge.questions[currentQuestionIndex.value];
  if (currentQuestion.textField) {
    return inputValue.value != null && inputValue.value.toString() !== '' && !isNaN(inputValue.value);
  }
  return true;
});

const questionNumber = (question: MailQuestion | DesktopQuestion | MobileQuestion) => question.questionNumber;

const questionTitle = (question: MailQuestion | DesktopQuestion | MobileQuestion) => question.title;

const buttonLabel = computed(() => {
  return currentQuestionIndex.value === props.challenge.questions.length - 1 ? 'Envoyer' : 'Suivant';
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

const getInstructionContent = (question: MailQuestion | DesktopQuestion | MobileQuestion, system: SystemType): SystemInstructions => {
  const instructionType = getInstructionType();
  const instructionContent = question.instructionContent as Record<string, string>;

  if (instructionType === 'MobileSystems') {
    return instructionContent[system as keyof MobileSystems] || null;
  } else {
    return instructionContent[system as keyof DesktopSystems] || null;
  }
};

const currentQuestionInstructions = (question: MailQuestion | DesktopQuestion | MobileQuestion) => {
  if (question.instruction) {
    if (typeof question.instructionContent === 'string') {
      return question.instructionContent;
    } else if (os.value && question.instructionContent !== null) {
      const system = getSystemByOSValue(os.value);
      if (system) {
        const instructionContent = getInstructionContent(question, system);
        return instructionContent || '';
      }
    }
  }
  return '';
};

function previousQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
    os.value = answers.value[props.challenge.questions[currentQuestionIndex.value].id];
  }
}

function nextQuestion() {
  console.log('Attempting to move to next question...');
  console.log(`Current Input Value: ${inputValue.value}, Is Valid: ${isValidInput.value}`);

  if (isValidInput.value) {
    console.log('Input is valid, moving to next question...');
    isValid.value = true;
    if (currentQuestionIndex.value < props.challenge.questions.length - 1) {
      currentQuestionIndex.value++;
      inputValue.value = null;
      errorMessage.value = '';
      console.log(`Moved to question index: ${currentQuestionIndex.value}`);
    } else {
      // TODO: handle form submission
      console.log('Handling form submission...');
    }
  } else {
    console.log('Input is invalid, cannot move to next question.');
    isValid.value = false;
    errorMessage.value = 'Ooops! Vous devez entrer une valeur.';
  }
}

watch(inputValue, (newValue) => {
  console.log(`Input Value changed: ${newValue}`);
});

watch(errorMessage, (newValue) => {
  console.log(`Error Message updated: ${newValue}`);
});

watch(currentQuestionIndex, (newValue) => {
  inputValue.value = null;
  errorMessage.value = '';
});
</script>

<style lang="scss">
@import "Survey";
</style>
