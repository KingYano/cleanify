<template>
  <header-navigation></header-navigation>
  <main-content></main-content>
  <footer-section></footer-section>

</template>

<script setup lang="ts">
  import HeaderNavigation from '@/components/HeaderSection/HeaderSection.vue';
  import MainContent from "@/components/MainSection/MainSection.vue";
  import FooterSection from "@/components/FooterSection/FooterSection.vue";
</script>

<style scoped>
  @media (min-width: 1024px) {

  }
</style>
