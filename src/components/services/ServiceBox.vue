<template>
  <div class="card-body d-flex flex-column text-center rounded-3">
    <img :src="service.img" class="card-img align-self-center" />
    <br />
    <h2 class="card-title pricing-card-title">{{ service.name }}</h2>
    <ul class="list-unstyled mt-3 mb-4">
      <li v-for="item in service.servicesList" :key="item">{{item}}</li>
    </ul>
    <button type="button" class="card-link align-self-center btn btn-lg btn-block btn-outline-danger" style="margin-top: auto;">Learn more</button>
  </div>
</template>

<script>
export default {
  name: "ServiceBox",
  props: ["service"]
}
</script>

<style lang="scss" scoped>
.card-img {
  height: 200px;
  width: 200px;
}


</style>
