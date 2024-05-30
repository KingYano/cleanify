<template>
  <div class="survey-rules">
    <div class="survey-rules-header">
      <div class="survey-rules-header-back">
        <button class="survey-rules-header-back-button" @click="goBack"><i class="ri-arrow-left-line"></i>Retour</button>
      </div>
      <div class="survey-rules-header-info">
        <h3 class="survey-rules-header-info-title">Jour {{ challenge?.day }}/3 du Digital Clean Up Challenge</h3>
        <p class="survey-rules-header-info-subtitle">Nettoyer {{ challenge?.target === 'boîte email' ? 'sa' : 'son' }} {{ challenge?.target }}</p>
      </div>
    </div>
    <div class="survey-rules-split">
      <div class="survey-rules-split-left">
        <img :src="challenge?.imageUrl" :alt="challenge?.imageAlt">
      </div>
      <div class="survey-rules-split-right">
        <div>
          <h4 class="survey-rules-split-right-title">Instructions du jeu</h4>
          <p class="survey-rules-split-right-text">Prochainement, vous aurez l'opportunité d'effectuer certaines tâches pour débarrasser votre {{ challenge?.target }} des données superflues.</p>
          <p class="survey-rules-split-right-text">Il est important de noter que votre participation aux tâches suggérées est totalement facultative.</p>
          <p class="survey-rules-split-right-text">Les informations que vous fournirez seront intégrées au tableau de bord global de votre entreprise.</p>
          <p class="survey-rules-split-right-text">Afin de réussir votre challenge, merci de remplir intégralement le formulaire. Si une tâche vous semble irréalisable ou indésirable, inscrivez simplement 0 en tant que réponse.</p>
        </div>
        <div class="survey-rules-split-right-start">
          <button class="survey-rules-split-right-start-button" @click="next">Commencer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import type { Challenge } from '@/interface/Challenge';
  import { mailData } from '@/data/Mail';
  import { desktopData } from '@/data/Desktop';
  import { mobileData } from '@/data/Mobile';

  const route = useRoute();
  const router = useRouter();

  const goBack = () => {
    router.push('/');
  };

  const challengeData = ref<Challenge[]>([...mailData, ...desktopData, ...mobileData]);

  const challenge = computed(() => {
    const code = route.params.code as string;
    return challengeData.value.find(challenge => challenge.code === code);
  });

  const emit = defineEmits<{(e: 'next', challenge?: Challenge): void}>();

  function next() {
    emit('next', challenge.value);
  }
</script>

<style lang="scss">
  @import "Rules";
</style>
