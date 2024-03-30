<template>
  <section class="list-section">
    <h2 class="list-section-title">Challenges :</h2>
    <div class="list-section-cards">
      <small-challenge
          v-for="challenge in challenges"
          :key="challenge.id"
          :title="challenge.target"
          @start="startChallenge(challenge)"
      ></small-challenge>
    </div>
  </section>
</template>

<script setup lang="ts">
import SmallChallenge from '@/components/Cards/SmallChallenge/SmallChallenge.vue';
import { ref } from 'vue';
import type { Challenge } from '@/interface/Challenge';
import { mailData } from '@/data/Mail';
import { desktopData } from '@/data/Desktop';
import { mobileData } from '@/data/Mobile';

const challenges: Challenge[] = [...mailData, ...desktopData, ...mobileData];

const activeChallenge = ref<Challenge | null>(null);

function startChallenge(challenge: Challenge) {
  activeChallenge.value = challenge;
}
</script>

<style lang="scss">
@import "ListSection";
</style>
