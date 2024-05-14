<template>
    <div class="large-challenge">
      <div class="large-challenge-content">
        <div class="large-challenge-content-information">
          <h4 class="large-challenge-content-information-title">Nettoyer {{ challenge?.target === 'boîte email' ? 'sa' : 'son' }} {{ challenge?.target }}</h4>
          <p class="large-challenge-content-information-info">{{ challenge.description }}</p>
        </div>
        <div class="large-challenge-content-start">
          <button class="large-challenge-content-start-button" @click="$emit('start', challenge)">Commencer</button>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import type { Challenge } from '@/interface/Challenge';

defineProps<{
  challenge: Challenge;
}>();
</script>

<style lang="scss">
  @import "LargeChallenge";
</style>