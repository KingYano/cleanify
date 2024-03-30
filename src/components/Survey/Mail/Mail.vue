<template>
  <div class="mail-survey">
      <div class="mail-survey-right-side">
        <div class="mail-survey-right-side-paragraph">
          <h3 class="mail-survey-right-side-paragraph-title">XXXXX</h3>
          <p class="mail-survey-paragraph-instruction"></p>
          <p class="mail-survey-paragraph-question"></p>
          <p class="mail-survey-paragraph-info"></p>
          <button-response></button-response>
          <input-response></input-response>
        </div>
      </div>
      <div class="mail-survey-right-side-start">
        <button class="large-challenge-content-start-button">Commencer</button>
      </div>
    <div class="mail-survey-right-side">

    </div>
  </div>
</template>

<script setup lang="ts">
  import InputResponse from '@/components/Survey/TypeResponse/InputResponse.vue';
  import ButtonResponse from '@/components/Survey/TypeResponse/ButtonResponse.vue';

</script>

<style lang="scss">
  @import "Mail";
</style>