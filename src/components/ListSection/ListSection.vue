<template>
  <section class="list-section">
    <h2 class="list-section-title">Challenges :</h2>
    <div class="list-section-cards">
      <small-challenge
          v-for="challenge in challenges"
          :key="challenge.id"
          :challenge="challenge"
          @start="startChallenge(challenge)"
      />
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
  import { useRouter } from 'vue-router';

  const challenges: Challenge[] = [...mailData, ...mobileData, ...desktopData,];

  const activeChallenge = ref<Challenge | null>(null);

  const router = useRouter();

  function startChallenge(challenge: Challenge) {
    activeChallenge.value = challenge;
    router.push({ name: 'rules', params: { code: challenge.code } });
  }
</script>

<style lang="scss">
  @import "ListSection";
</style>