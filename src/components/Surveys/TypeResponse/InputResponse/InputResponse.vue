<template>
  <div class="input-response">
    <label class="input-response-label" for="name">Name</label>
    <input
      class="input-response-input"
      type="text"
      name="name"
      id="name"
      placeholder="Seuls les chiffres sont autorisés."
      required
      :value="modelValue"
      @input="updateInput"
    >
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    modelValue: string
  }>();

  const emit = defineEmits(['update:modelValue'])

  const updateInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
  }
</script>

<style lang="scss">
  @import "InputResponse";
</style>
