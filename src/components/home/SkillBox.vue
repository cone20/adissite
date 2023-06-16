<template>
  <div class="skill-box shadow rounded-3 p-1" data-aos="zoom-in">
    <div class="row">
      <div class="col-md-3 p-4">
        <img v-bind:src="data.icon" alt="image" width="70" height="70"/>
      </div>
      <div class="col-md-8 p-4">
        <h3>{{ data.name }}</h3>
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="'width: ' + data.progress + '%'" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "SkillBox",
  props: ["data"],
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
