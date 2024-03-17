<template>
  <section class="info-section">
    <h2 class="info-section-title">Qu'est ce que <span class="info-section-title-highlight">Cleanify</span> ?</h2>
    <p class="info-section-description">
      Cleanify vise à encourager une réduction de la pollution numérique en incitant à la
      suppression des données inutiles pour diminuer l'empreinte numérique des individus et organisations.
    </p>
    <div class="info-section-image">
      <img src="./../../assets/illustrations/cleanify.svg" alt="Illustration of digital clean-up with a person and a large digital display">
    </div>

    <h2 class="info-section-title">Quels bénéfices offre <span class="info-section-title-highlight">Cleanify</span> ?</h2>
    <p class="info-section-description">
      Rejoindre Cleanify améliore la performance des appareils, réduit l'empreinte énergétique et
      sensibilise aux effets environnementaux du numérique pour une utilisation plus durable.
    </p>
    <footer-section></footer-section>
  </section>

</template>

<script setup lang="ts">
  import FooterSection from '@/components/FooterSection/FooterSection.vue';
</script>

<style lang="scss">
 @import "InformationSection";
</style>