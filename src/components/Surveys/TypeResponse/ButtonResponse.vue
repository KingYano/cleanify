<template>
  <div class="button-response">
    <div v-for="(response, name) in responseContent" :key="name">
      <input type="radio" :id="name.toString()" :value="name" v-model="selectedOption" @change="updateOS">
      <label :for="name.toString()">{{ response }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";

const props = defineProps<{
  responseContent: { [key: string]: string };
  name: string;
}>();

const selectedOption = ref<string | null>(null);

watch(selectedOption, (newValue) => {
  console.log('selectedOption updated:', newValue);
});

const updateOS = () => {
  if (selectedOption.value) {
    emits('update:os', selectedOption.value);
  }
};

const emits = defineEmits<{
  (e: 'update:os', value: string | null): void;
}>();
</script>
