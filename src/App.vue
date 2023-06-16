<template>
  <Navigation></Navigation>
  <router-view>
  </router-view>
  <Footer></Footer>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {Footer, Navigation}

}
</script>

<style lang="scss">

</style>
