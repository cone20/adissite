<template>
  <Hero></Hero>
  <div class="container">
    <Skills></Skills>
  </div>
  <div class="container mt-5">
    <Portfolio></Portfolio>
  </div>
</template>

<script>
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Portfolio from "@/components/home/Portfolio";

export default {
  name: "Home",
  components: {Portfolio, Skills, Hero}
}
</script>

<style scoped>

</style>
