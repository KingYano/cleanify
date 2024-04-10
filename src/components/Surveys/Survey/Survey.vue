<template>
  <div class="survey">
    <form class="survey-form" @keydown.enter.prevent>
      <div class="survey-form-item" v-for="(question, index) in challenge.questions" :key="question.id">
        <h3 v-if="isCurrentQuestion(index)" class="survey-form-title">{{ questionNumber(question) }} -
          {{ questionTitle(question) }}</h3>
        <div class="survey-form-paragraph">
          <p v-if="isCurrentQuestion(index) && question.instruction" class="survey-form-paragraph-instruction">
            {{ currentQuestionInstructions }}</p>
          <p v-if="isCurrentQuestion(index) && question.moreQuestion" class="survey-form-paragraph-question">
            {{ question.moreQuestionContent }}</p>
          <p v-if="isCurrentQuestion(index) && question.textInfo"
             class="survey-form-paragraph-question-info">{{ question.textInfoContent }}</p>
          <div v-if="isCurrentQuestion(index) && question.response" class="survey-form-button">
            <button-response
                v-if="question.responseContent !== null"
                :response-content="question.responseContent"
                :name="String(question.id)"
                @update:os="os = $event as string"
            ></button-response>
          </div>
          <div v-if="isCurrentQuestion(index) && question.textField" class="survey-form-input">
            <input-response></input-response>
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
  import {ref, computed} from 'vue';
  import type {Challenge} from '@/interface/Challenge';
  import ButtonResponse from "@/components/Surveys/TypeResponse/ButtonResponse.vue";
  import InputResponse from "@/components/Surveys/TypeResponse/InputResponse.vue";

  const props = defineProps<{
    challenge: Challenge;
  }>();

  const currentQuestionIndex = ref(0);
  const os = ref<string | null>(null);
  const answers = ref<Record<string, string | null>>({});

  const isCurrentQuestion = (index: number) => index === currentQuestionIndex.value;

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

  function previousQuestion() {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--;
      os.value = answers.value[props.challenge.questions[currentQuestionIndex.value].id];
    }
  }

  function nextQuestion() {
    if (currentQuestionIndex.value < props.challenge.questions.length - 1) {
      answers.value[props.challenge.questions[currentQuestionIndex.value].id] = os.value;
      currentQuestionIndex.value++;
    } else {
      // TODO: handle form submission
    }
  }
</script>

<style lang="scss">
  @import "Survey";
</style>
