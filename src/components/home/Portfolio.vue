<template>
<!--  <div class="text-center">-->
<!--    <h2>Portfolio</h2>-->
<!--    <p>These are the apps that I've made over the years</p>-->
<!--  </div>-->
  <div class="container text-center">
    <div class="heading mx-5 ps-3">
      <p class="text-muted lead">PORTFOLIO</p>
      <h1 class="display-2">These are<br /> my apps</h1>
    </div>
    <div class="row d-flex justify-content-center">
      <div v-for="item in items" class="col-lg-4 mx-2 my-4" v-bind:key="item.title">
        <ItemBox :data="item"></ItemBox>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <button class="btn btn-danger">See more</button>
  </div>


</template>

<script>
import ItemBox from "@/components/home/ItemBox";
export default {
  name: "Portfolio",
  components: {ItemBox},
  data() {
    return {
      items: [
        {
          "title": "Creative Website",
          "src": require("../../assets/img/portfolio/portfolio-1.jpeg")
        },
        {
          "title": "Music Website",
          "src": require("../../assets/img/portfolio/portfolio-2.jpeg")
        },
        {
          "title": "This Website",
          "src": require("../../assets/img/portfolio/portfolio-3.jpeg")
        },
        {
          "title": "News App",
          "src": require("../../assets/img/portfolio/portfolio-4.jpeg")
        },
        {
          "title": "Babysitting App",
          "src": require("../../assets/img/portfolio/portfolio-5.jpeg")
        },
        {
          "title": "DentSched App",
          "src": require("../../assets/img/portfolio/portfolio-6.jpeg")
        },
        {
          "title": "NasaNews App",
          "src": require("../../assets/img/portfolio/portfolio-7.jpeg")
        },
        {
          "title": "NatureGallery App",
          "src": require("../../assets/img/portfolio/portfolio-8.jpeg")
        },
        {
          "title": "Movie App",
          "src": require("../../assets/img/portfolio/portfolio-9.jpeg")
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
</style>
