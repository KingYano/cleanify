<template>
  <div class="daily-section">
    <h2 class="daily-section-title">Challenge du jour :</h2>
    <large-challenge></large-challenge>
  </div>
</template>

<script setup lang="ts">
  import LargeChallenge from "@/components/Cards/LargeChallenge/LargeChallenge.vue";
</script>

<style lang="scss">
  @import "DailyChallenge";
</style>