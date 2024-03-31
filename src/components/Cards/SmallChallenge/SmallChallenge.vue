<template>
  <div class="small-challenge">
    <div class="small-challenge-information">
      <h4 class="small-challenge-information-title">Nettoyer son {{ challenge.target }}</h4>
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
  import { defineProps } from 'vue';
  import type { Challenge } from '@/interface/Challenge';

  defineProps<{
    challenge: Challenge;
  }>();
</script>

<style lang="scss">
  @import "SmallChallenge";
</style>
