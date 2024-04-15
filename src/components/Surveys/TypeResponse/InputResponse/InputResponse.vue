<template>
  <div class="input-response">
    <label class="input-response-label" for="name"></label>
    <input class="input-response-input"
           type="text"
           name="name"
           id="name"
           placeholder="name"
           required
           v-model="inputValue"
           @input="validateInput"
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputValue = ref('');
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'update:isValid', isValid: boolean, errorMessage: string): void;
}>();

const validateInput = () => {
  const numericValue = inputValue.value.replace(/\D/g, '');
  const isValid = numericValue.trim().length > 0;
  const errorMessage = isValid ? '' : "Veuillez remplir le champ de formulaire avec des chiffres uniquement.";

  emits('update:modelValue', numericValue);
  emits('update:isValid', isValid, errorMessage);
  inputValue.value = numericValue;
};
</script>

<style lang="scss">
  @import "InputResponse";
</style>
