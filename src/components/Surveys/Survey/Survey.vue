<template>
  <div class="survey">
      <div class="survey-right-side">
        <div class="survey-right-side-paragraph">
          <h3 class="survey-right-side-paragraph-title">XXXXX</h3>
          <p class="survey-paragraph-instruction"></p>
          <p class="survey-paragraph-question"></p>
          <p class="survey-paragraph-info"></p>
          <button-response></button-response>
          <input-response></input-response>
        </div>
      </div>
      <div class="survey-right-side-start">
        <button class="survey-right-side-start-button">Commencer</button>
      </div>
    <div class="survey-right-side">

    </div>
  </div>
</template>

<script setup lang="ts">
  import InputResponse from '@/components/Surveys/TypeResponse/InputResponse.vue';
  import ButtonResponse from '@/components/Surveys/TypeResponse/ButtonResponse.vue';

  defineProps(['data']);

</script>

<style lang="scss">
  @import "Survey";
</style>