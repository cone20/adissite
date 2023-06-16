<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <img src="@/assets/adis-logo.svg" height="76" width="76" alt="logo" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/work" class="nav-link">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li><router-link to="/contact" class="nav-link contact-link ps-3 pe-3">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",

  methods: {},
};
</script>

<style lang="scss" scoped>
.contact-link {
  padding: 5px 20px;
  border: 1px solid #fff;
  border-radius: 6px;
  &:hover {
    background-color: #e1515f !important;
  }
}
.nav-link {
  color: #fff !important;
}
.router-link-active {
  color: #e6e6e6 !important;
}
</style>
