<script setup>
import { defineAsyncComponent } from "vue";

const Joblistings = defineAsyncComponent(() =>
  import("../components/Joblistings.vue")
);
</script>

<template>
  <Joblistings />
</template>
