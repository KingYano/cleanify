<template>
  <div class="input-response" >
    <label class="input-response-label" for="name"></label>
    <input class="input-response-input" type="text" name="name" id="name" placeholder="name" required v-model="inputValue" @input="updateInput">
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const inputValue = ref('');

  const updateInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    inputValue.value = target.value;
    emits('update:modelValue', target.value);
  };

  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();
</script>

<style lang="scss">
  @import "InputResponse";
</style>
