<template>
  <div class="survey">
    <form class="survey-form" @keydown.enter.prevent>
      <div class="survey-form-item">
        <h3 class="survey-form-title">{{ questionNumber(currentQuestion) }} - {{ questionTitle(currentQuestion) }}</h3>
        <div class="survey-form-paragraph">
          <p v-if="currentQuestion.instruction" class="survey-form-paragraph-instruction" v-html="getResult(currentQuestion)"></p>
          <p v-if="currentQuestion.moreQuestion" class="survey-form-paragraph-question">{{ currentQuestion.moreQuestionContent }}</p>
          <p v-if="currentQuestion.textInfo" class="survey-form-paragraph-question-info">{{ currentQuestion.textInfoContent }}</p>
          <div v-if="currentQuestion.response" class="survey-form-button">
            <button-response
                v-if="currentQuestion.responseContent !== null"
                :response-content="currentQuestion.responseContent"
                :name="String(currentQuestion.id)"
                @update:selection="selectionButton = $event"
            ></button-response>
          </div>
          <div v-if="currentQuestion.textField" class="survey-form-input">
            <input-response
                :model-value="inputValue"
                @update:model-value="inputValue = $event"
            ></input-response>
          </div>
          <div v-if="showMessage" class="survey-form-error">
            {{ errorMessage }}
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
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import type { Challenge } from '@/interface/Challenge';
  import ButtonResponse from "@/components/Surveys/TypeResponse/ButtonResponse/ButtonResponse.vue";
  import InputResponse from "@/components/Surveys/TypeResponse/InputResponse/InputResponse.vue";

  const props = defineProps<{ challenge: Challenge }>();
  const router = useRouter();

  const currentQuestionIndex = ref(0);
  const selectionButton = ref<string | null>(null);
  const answers = ref<Record<string, string | null>>({});
  const showMessage = ref(false);
  const errorMessage = ref('');
  const inputValue = ref('');
  const valueSelectByUser = ref<string | null>(null);

  const currentQuestion = computed(() => props.challenge.questions[currentQuestionIndex.value]);

  const showMessageError = (msg: string) => {
    errorMessage.value = msg;
    showMessage.value = true;
  };

  const resetError = () => {
    errorMessage.value = '';
    showMessage.value = false;
  };

  const questionNumber = (question: MailQuestion | DesktopQuestion | MobileQuestion) => question.questionNumber;

  const questionTitle = (question: MailQuestion | DesktopQuestion | MobileQuestion) => question.title;

  const buttonLabel = computed(() => currentQuestionIndex.value === props.challenge.questions.length - 1 ? 'Envoyer' : 'Suivant');

  type SystemType = keyof MobileSystems | keyof DesktopSystems;

  const getSystemByOSValue = (osValue: string): SystemType | null => {
    if (props.challenge.code === 'phone') {
      return osValue === 'A' ? 'android' : 'ios';
    } else if (props.challenge.code === 'desktop') {
      return osValue === 'A' ? 'windows' : 'mac';
    }
    return null;
  };

  const getResult = (question: MailQuestion | DesktopQuestion | MobileQuestion) => {
    if (props.challenge.code === "mail" && question.instruction && question.instructionContent) {
      return question.instructionContent as string;
    }
    if (valueSelectByUser.value !== null) {
      const osValue = valueSelectByUser.value;
      const systemType = getSystemByOSValue(osValue);
      if (question.instruction && question.instructionContent && systemType !== null) {
        const instructionContent = question.instructionContent as Record<SystemType, string>;
        return instructionContent[systemType];
      }
    }
    return '';
  };

  const previousQuestion = () => {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--;
      resetError();
      selectionButton.value = answers.value[props.challenge.questions[currentQuestionIndex.value].id];
    }
  };

  const nextQuestion = () => {
    let allowNavigation = true;

    if (currentQuestion.value.textField) {
      if (inputValue.value === '') {
        showMessageError('Ooops! Vous devez entrer une valeur.');
        allowNavigation = false;
      } else if (!/^\d+$/.test(inputValue.value)) {
        showMessageError('Ooops! Vous devez entrer une valeur numérique valide.');
        allowNavigation = false;
      }
    }

    if (currentQuestion.value.response && !selectionButton.value) {
      showMessageError('Ooops! Vous devez faire une sélection.');
      allowNavigation = false;
    }

    console.log('allowNavigation:', allowNavigation);
    console.log('currentQuestionIndex:', currentQuestionIndex.value);
    console.log('Total Questions:', props.challenge.questions.length);

    if (allowNavigation) {
      valueSelectByUser.value = selectionButton.value;
      if (currentQuestionIndex.value < props.challenge.questions.length - 1) {
        currentQuestionIndex.value++;
        resetError();
        inputValue.value = "";
      } else {
        console.log('Redirecting to /submit');
        router.push('/submit');
      }
    }
  };
</script>

<style lang="scss">
  @import "Survey";
</style>
