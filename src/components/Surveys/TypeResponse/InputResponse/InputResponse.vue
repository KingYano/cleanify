<template>
  <div class="input-response" >
    <label class="input-response-label" for="name"></label>
    <input class="input-response-input" type="text" name="name" id="name" placeholder="name" required v-model.number="inputValue" @input="updateInput">
    <p v-if="errorMessage" class="input-response-error-message" :class="{ 'input-response-error-message-show': errorMessage }">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const inputValue = ref<number | null>(null);
  const errorMessage = ref('');

  const updateInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const input = target.value;
    const numericInput = input.replace(/\D/g, '');
    inputValue.value = numericInput === '' ? null : parseInt(numericInput);
    errorMessage.value = input !== numericInput ? "Que des numéros s'il vous plaît" : '';
    emits('update:modelValue', inputValue.value);
    if (errorMessage.value) {
      setTimeout(() => {
        errorMessage.value = '';
      }, 5000);
    }
  };

  const emits = defineEmits<{
    (e: 'update:modelValue', value: number | null): void;
  }>();
</script>

<style lang="scss">
  @import "InputResponse";
</style>
