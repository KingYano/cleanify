<template>
  <div class="daily-section">
    <h2 class="daily-section-title">Challenge du jour :</h2>
    <div class="slideshow-container">
      <div v-for="(challenge, index) in challenges" :key="index" class="mySlides fade">
        <large-challenge
            :challenge="challenge"
            @start="startChallenge(challenge)"
        ></large-challenge>
      </div>
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <div style="text-align:center">
      <span class="dot" v-for="(challenge, index) in challenges" :key="index" @click="currentSlide(index + 1)"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import LargeChallenge from "@/components/Cards/LargeChallenge/LargeChallenge.vue";
import { mailData } from '@/data/Mail';
import { desktopData } from '@/data/Desktop';
import { mobileData } from '@/data/Mobile';
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import type {Challenge} from "@/interface/Challenge";

const challenges: Challenge[] = [...mailData, ...mobileData, ...desktopData,];

const activeChallenge = ref<Challenge | null>(null);

const router = useRouter();

const slideIndex = ref(1);

const showSlides = (n: number) => {
  let i: number;
  let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex.value = 1;
  }
  if (n < 1) {
    slideIndex.value = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides[slideIndex.value - 1]) {
    slides[slideIndex.value - 1].style.display = "block";
  }
  dots[slideIndex.value - 1].className += " active";
};

const plusSlides = (n: number) => {
  showSlides(slideIndex.value += n);
};

const currentSlide = (n: number) => {
  showSlides(slideIndex.value = n);
};

onMounted(() => {
  console.log("slideIndex initialisé à :", slideIndex.value);
  showSlides(slideIndex.value);
  console.log("showSlides appelé avec l'argument :", slideIndex.value);
});

const startChallenge = (challenge: Challenge) => {
  activeChallenge.value = challenge;
  router.push({ name: 'rules', params: { code: challenge.code } });
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style lang="scss">
@import "DailySection";
</style>
