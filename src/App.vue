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
    import { markRaw, computed, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import type {Challenge} from "@/interface/Challenge";

    const route = useRoute();
    const router = useRouter();

    const currentView = computed(() => {
      if (route.name === 'rules') {
        return markRaw(Rules);
      } else if (route.name === 'survey') {
        return markRaw(Survey);
      } else {
        return markRaw(MainContent);
      }
    });

    const currentChallenge = ref<Challenge | null>(null);

    function goHome() {
      router.push('/');
    }

    function goToSurvey(...args: unknown[]) {
      const challenge = args[0] as Challenge | undefined;

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
