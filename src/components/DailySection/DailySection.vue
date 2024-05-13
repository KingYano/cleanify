<template>
  <div class="daily-section">
    <h2 class="daily-section-title">Challenge du jour :</h2>
    <large-challenge
        v-for="challenge in challenges"
        :key="challenge.id"
        :challenge="challenge"
        @start="startChallenge(challenge)"
    ></large-challenge>
  </div>
</template>

<script setup lang="ts">
  import LargeChallenge from "@/components/Cards/LargeChallenge/LargeChallenge.vue";
  import { mailData } from '@/data/Mail';
  import { desktopData } from '@/data/Desktop';
  import { mobileData } from '@/data/Mobile';
  import {ref} from "vue";
  import {useRouter} from "vue-router";
  import type {Challenge} from "@/interface/Challenge";

  const challenges: Challenge[] = [...mailData, ...mobileData, ...desktopData,];

  const activeChallenge = ref<Challenge | null>(null);

  const router = useRouter();

  function startChallenge(challenge: Challenge) {
    activeChallenge.value = challenge;
    router.push({ name: 'rules', params: { code: challenge.code } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<style lang="scss">
  @import "DailySection";
</style>