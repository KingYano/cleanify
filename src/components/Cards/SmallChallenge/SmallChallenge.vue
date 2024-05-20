<template>
  <div class="small-challenge" :style="{ backgroundImage: `url(${backgroundImage})`}">
    <div class="small-challenge-information">
      <h4 class="small-challenge-information-title">
        Nettoyer {{ challenge?.target === 'boîte email' ? 'sa' : 'son' }} {{ challenge?.target }}
      </h4>
      <p class="small-challenge-information-info">{{ challenge.description }}</p>
    </div>
    <div class="small-challenge-start">
      <button class="small-challenge-start-button" @click="$emit('start', challenge)">Commencer</button>
      <div class="small-challenge-start-badge">
        <p class="small-challenge-start-badge-date">j - {{ challenge.day }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type {Challenge} from '@/interface/Challenge';
  import {computed} from 'vue';

  const props = defineProps<{ challenge: Challenge }>();
  const challenge = props.challenge;

  const getBackgroundImage = (code: string) => {
    switch (code) {
      case 'mail':
        return new URL('@/assets/illustrations/mail.svg', import.meta.url).href;
      case 'phone':
        return new URL('@/assets/illustrations/mobile.svg', import.meta.url).href;
      case 'desktop':
        return new URL('@/assets/illustrations/desktop.svg', import.meta.url).href;
      default:
        return '';
    }
  };

  const backgroundImage = computed(() => {
    return getBackgroundImage(challenge.code);
  });
</script>

<style lang="scss">
  @import "SmallChallenge";
</style>
