<template>
  <section id="skills">

    <div class="container text-center mb-5">
      <div class="heading mx-5 ps-3">
        <p class="text-muted lead">SKILLS</p>
        <h1 class="display-2">These are <br /> my skills</h1>
      </div>

      <div class="row d-flex justify-content-center">
        <div v-for="skill in skills" class="col-lg-5 mx-5 my-4" v-bind:key="skill.name">
          <SkillBox :data="skill"></SkillBox>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillBox from "@/components/home/SkillBox";
export default {
  name: "Skills",
  components: {SkillBox},
  data() {
    return {
      skills: [
        {
          "name": "HTML",
          "progress": "100",
          "icon": require("../../assets/img/icons/html.svg")
        },
        {
          "name": "CSS",
          "progress": "80",
          "icon": require("../../assets/img/icons/css.svg")
        },
        {
          "name": "JavaScript",
          "progress": "90",
          "icon": require("../../assets/img/icons/js.svg")
        },
        {
          "name": "Bootstrap",
          "progress": "90",
          "icon": require("../../assets/img/icons/bootstrap.svg")
        },
        {
          "name": "Vue",
          "progress": "90",
          "icon": require("../../assets/img/icons/vue.svg")
        },
        {
          "name": "React",
          "progress": "90",
          "icon": require("../../assets/img/icons/react.svg")
        },
        {
          "name": "Android",
          "progress": "90",
          "icon": require("../../assets/img/icons/android.svg")
        },
        {
          "name": "Kotlin",
          "progress": "90",
          "icon": require("../../assets/img/icons/kotlin.svg")
        },
        {
          "name": "Java",
          "progress": "90",
          "icon": require("../../assets/img/icons/java.svg")
        },
        {
          "name": "Linux",
          "progress": "90",
          "icon": require("../../assets/img/icons/linux.svg")
        },


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
