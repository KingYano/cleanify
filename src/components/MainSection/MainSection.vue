<template>
  <section class="main-section">
    <h2 class="main-section-title">Challenge du jour :</h2>
    <large-challenge></large-challenge>
    <information-stat></information-stat>
    <list-section></list-section>
    <information-section></information-section>
  </section>
</template>

<script setup lang="ts">
  import LargeChallenge from '@/components/Cards/LargeChallenge/LargeChallenge.vue';
  import InformationStat from '@/components/StatisticSection/StatisticSection.vue';
  import ListSection from '@/components/ListSection/ListSection.vue';
  import InformationSection from '@/components/InformationSection/InformationSection.vue';

</script>

<style lang="scss">
  @import 'MainSection';
</style>