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
           @input="updateInput"
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputValue = ref('');
const isValid = ref(true);
const errorMessage = ref('');

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'update:isValid', value: boolean): void;
}>();

const updateInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const filteredValue = target.value.replace(/\D/g, '');
  inputValue.value = filteredValue;
  isValid.value = filteredValue.length > 0;
  errorMessage.value = isValid.value ? '' : "Que des numéros s'il vous plaît";
  emits('update:modelValue', filteredValue);
  emits('update:isValid', isValid.value);
};

</script>

<style lang="scss">
@import "InputResponse";
</style>
