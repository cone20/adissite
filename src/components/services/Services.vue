<template>
  <heading heading="Services" line="Welcome to services"></heading>
  <div class="container text-center">
    <div class="heading mx-5">
      <p class="text-muted lead">MY SERVICES</p>
      <h1>What am I <br /> offering for you</h1>
    </div>

    <div class="row mt-5">
      <div v-for="service in services" class="col-lg-3 shadow mx-5 align-content-center service-box" :key="service.name">
        <ServiceBox :service="service"></ServiceBox>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading";
import ServiceBox from "@/components/services/ServiceBox";
export default {
  name: "Services",
  components: {ServiceBox, Heading},
  data() {
    return {
      services: [
        {
          "name": "Web Development",
          "img": require("../../assets/img/icons/webdev.svg"),
          // "desc": "I will make you stunning website, get your site from fullstack web developer"
          "servicesList": [
              "Frontend",
              "Backend"
          ]
        },
        {
          "name": "UI/UX Design",
          "img": require("../../assets/img/icons/design.svg"),
          // "desc": "Get your site design by a fullstack developer"
          "servicesList": [
            "User interface ",
            "User experience"
          ]
        },
        {
          "name": "Android Developer",
          "img": require("../../assets/img/icons/android.svg"),
          // "desc": "Highly skilled and ready to learn android developer"
          "servicesList": [
            "Kotlin and Java",
            "XML"
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700;900&display=swap');

.heading {
  font-family:  'Lato', sans-serif;

  h1 {
    font-weight: bolder;
  }

  p {
    font-weight: bold;
  }
}

.service-box {

  transition: all .2s;

  &:hover {
    //background: #dc3444;
    transform: scale(1.05);
  }
}
</style>
