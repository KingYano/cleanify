<template>
  <div class="survey-rules">
    <div class="survey-rules-header">
      <h3>Jour {{ challenge.day }}/3 du Digital Clean Up Challenge</h3>
      <p>Nettoyer son {{ challenge.target }}</p>
    </div>
    <div class="survey-rules-left-side">

    </div>
    <div class="survey-rules-right-side">
      <div>
        <h4 class="survey-rules-right-side-title">Instructions du jeu</h4>
        <p class="survey-rules-right-side-text">Prochainement, vous aurez l'opportunité d'effectuer certaines tâches pour débarrasser votre {{ challenge.target }} des données superflues.</p>
        <p class="survey-rules-right-side-text">Il est important de noter que votre participation aux tâches suggérées est totalement facultative.</p>
        <p class="survey-rules-right-side-text">Les informations que vous fournirez seront intégrées au tableau de bord global de votre entreprise.</p>
        <p class="survey-rules-right-side-text">Afin de réussir votre challenge, merci de remplir intégralement le formulaire. Si une tâche vous semble irréalisable ou indésirable, inscrivez simplement 0 en tant que réponse.</p>
      </div>
      <div class="survey-rules-right-side-start">
        <router-link :to="`/survey/${challenge.target}`">
          <button class="survey-rules-right-side-start-button">Commencer</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {computed, ref} from 'vue';
  import { useRoute } from 'vue-router';
  import type { Challenge } from '@/interface/Challenge';
  import { mailData } from '@/data/Mail';
  import { desktopData } from '@/data/Desktop';
  import { mobileData } from '@/data/Mobile';

  const route = useRoute();

  const challenges = ref<Challenge[]>([...mailData, ...desktopData, ...mobileData]);

  const challenge = computed(() => {
    const target = route.params.target as string;
    return challenges.value.find(challenge => challenge.target === target);
  });
</script>

<style lang="scss">
  @import "Rules";
</style>
