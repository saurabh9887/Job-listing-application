<script setup>
import { defineAsyncComponent } from "vue";

const Hero = defineAsyncComponent(() => import("../components/Hero.vue"));
const HomeCard = defineAsyncComponent(() =>
  import("../components/HomeCard.vue")
);
const Joblistings = defineAsyncComponent(() =>
  import("../components/Joblistings.vue")
);
</script>

<template>
  <Hero title="Become a vue developer" />
  <HomeCard />
  <Joblistings limit="3" :showButton="true" />
</template>
