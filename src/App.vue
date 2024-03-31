<template>
  <header-navigation></header-navigation>
  <component :is="currentView" @next="goToSurvey"></component>
  <footer-section></footer-section>
</template>

<script setup lang="ts">
import HeaderNavigation from '@/components/HeaderSection/HeaderSection.vue';
import MainContent from "@/components/MainSection/MainSection.vue";
import Rules from "@/components/Surveys/Rules/Rules.vue";
import Survey from "@/components/Surveys/Survey/Survey.vue";
import FooterSection from "@/components/FooterSection/FooterSection.vue";
import { markRaw, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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

function goToSurvey() {
  router.push({ name: 'survey', params: { code: route.params.code } });
}
</script>

<style scoped>
@media (min-width: 1024px) {

}
</style>
