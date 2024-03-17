<template>
  <section class="daily-challenge">
    <h2 class="daily-challenge-title">Challenge du jour :</h2>
    <large-card></large-card>
    <information-stat></information-stat>
  </section>
</template>

<script setup lang="ts">
import LargeCard from '@/components/Cards/LargeChallenge/LargeChallenge.vue';
import InformationStat from '@/components/InformationStat/InformationStat.vue';

</script>

<style lang="scss">
  @import 'DailyChallenge';
</style>