<template>
  <section class="list-section">
    <h2 class="list-section-title">challenges :</h2>
    <div class="list-section-cards">
      <small-challenge></small-challenge>
      <small-challenge></small-challenge>
      <small-challenge></small-challenge>
    </div>
  </section>
</template>

<script setup lang="ts">
  import SmallChallenge from '@/components/Cards/SmallChallenge/SmallChallenge.vue';

</script>

<style lang="scss">
  @import "ListSection";
</style>