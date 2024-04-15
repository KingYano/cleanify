<template>
  <div class="button-response">
    <div class="button-response-list" v-for="(response, name) in props.responseContent" :key="name">
      <input class="button-response-list-input" type="radio" :id="name.toString()" :value="name" v-model="selectedOption" @change="updateSelection">
      <label class="button-response-list-label" :for="name.toString()">{{ response }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  responseContent: { [key: string]: string };
  name: string;
}>();

const selectedOption = ref<string | null>(null);

const updateSelection = () => {
  emits('update:selection', selectedOption.value);
};

const emits = defineEmits<{
  (e: 'update:selection', value: string | null): void;
}>();
</script>


<style lang="scss">
  @import "ButtonResponse";
</style>
