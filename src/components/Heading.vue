<template>
  <section id="hero">
    <div class="px-4 py-5 text-center bg-danger text-white">
      <h1 class="display-5 fw-bold pt-5" data-aos="fade-left">{{ heading }}</h1>
      <h2 data-aos="fade-left">{{ line }}</h2>
    </div>
    <div class="bg-holder">
      <!--      <img src="~@/assets/img/bg/bg.svg"/>-->
      <svg class="has-shadow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DC3444" fill-opacity="1" d="M0,128L34.3,144C68.6,160,137,192,206,218.7C274.3,245,343,267,411,250.7C480,235,549,181,617,144C685.7,107,754,85,823,90.7C891.4,96,960,128,1029,133.3C1097.1,139,1166,117,1234,128C1302.9,139,1371,181,1406,202.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
    </div>
  </section>
</template>

<script>
export default {
  name: "Heading",
  props: ["heading", "line"]
}
</script>

<style lang="scss" scoped>
.has-shadow {
  -webkit-filter: drop-shadow( 3px 6px 3px #a6a6a6);
  filter: drop-shadow( 3px 6px 3px #a6a6a6);
}
</style>
