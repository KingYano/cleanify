<template>
<!--  <header>-->
<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->
  <!--  <RouterView />-->

  <header-navigation></header-navigation>
  <main-content></main-content>

</template>

<script setup lang="ts">
  // import { RouterLink, RouterView } from 'vue-router'
  // import HelloWorld from './components/HelloWorld.vue'
  import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation.vue';
  import MainContent from "@/components/MainContent/MainContent.vue";
</script>

<style scoped>
  @media (min-width: 1024px) {

  }
</style>
