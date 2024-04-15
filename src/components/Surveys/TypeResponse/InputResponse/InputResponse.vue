<template>
  <div class="input-response">
    <label class="input-response-label" for="name">Name</label>
    <input class="input-response-input"
           type="text"
           name="name"
           id="name"
           placeholder="Seuls les chiffres sont autorisés."
           required
           v-model="inputValue"
    >
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref, watch } from 'vue'

const emit = defineEmits(['updateInput'])

const inputValue = ref('')

watch(inputValue, (newValue) => {
  emit('updateInput', newValue)
})
</script>


<style lang="scss">
  @import "InputResponse";
</style>
