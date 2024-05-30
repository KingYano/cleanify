<template>
  <header-navigation @home="goHome"></header-navigation>
  <component :is="currentView" @next="goToSurvey" :challenge="currentChallenge"></component>
  <footer-section></footer-section>
</template>

<script setup lang="ts">
  import HeaderNavigation from '@/components/HeaderSection/HeaderSection.vue';
  import MainContent from "@/components/MainSection/MainSection.vue";
  import Rules from "@/components/Surveys/Rules/Rules.vue";
  import Survey from "@/components/Surveys/Survey/Survey.vue";
  import FooterSection from "@/components/FooterSection/FooterSection.vue";
  import { markRaw, computed, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import type { Challenge } from "@/interface/Challenge";
  import { mailData } from '@/data/Mail';
  import { desktopData } from '@/data/Desktop';
  import { mobileData } from '@/data/Mobile';

  const route = useRoute();
  const router = useRouter();

  const challengeData = ref<Challenge[]>([...mailData, ...desktopData, ...mobileData]);
  const currentChallenge = ref<Challenge | null>(null);

  const currentView = computed(() => {
    switch (route.name) {
      case 'rules':
        return markRaw(Rules);
      case 'survey':
        return markRaw(Survey);
      default:
        return markRaw(MainContent);
    }
  });

  function loadChallengeFromRoute() {
    const code = route.params.code as string;
    if (code) {
      currentChallenge.value = challengeData.value.find(challenge => challenge.code === code) || null;
    }
  }

  watch(route, loadChallengeFromRoute, { immediate: true });

  function goHome() {
    router.push('/');
  }

  function goToSurvey(challenge: Challenge | undefined) {
    if (challenge) {
      currentChallenge.value = challenge;
      router.push({ name: 'survey', params: { code: challenge.code } });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
</script>


<style scoped>
  @media (min-width: 1280px) {

  }
</style>