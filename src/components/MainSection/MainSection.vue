<template>
  <section class="main-section">
    <daily-section></daily-section>
    <information-stat></information-stat>
    <list-section></list-section>
    <information-section></information-section>
  </section>
</template>

<script setup lang="ts">
  import DailySection from '@/components/DailySection/DailySection.vue';
  import InformationStat from '@/components/StatisticSection/StatisticSection.vue';
  import ListSection from '@/components/ListSection/ListSection.vue';
  import InformationSection from '@/components/InformationSection/InformationSection.vue';

</script>

<style lang="scss">
  @import 'MainSection';
</style>