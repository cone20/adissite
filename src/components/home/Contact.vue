<template>
  <section id="contact">
    <div class="cover">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DC3444" fill-opacity="1" d="M0,128L34.3,144C68.6,160,137,192,206,218.7C274.3,245,343,267,411,250.7C480,235,549,181,617,144C685.7,107,754,85,823,90.7C891.4,96,960,128,1029,133.3C1097.1,139,1166,117,1234,128C1302.9,139,1371,181,1406,202.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </div>
<!--    <div class="bg-danger text-white py-3">-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div class="col-lg-10">-->
<!--            <h1 class="my-auto">Contact us</h1>-->
<!--          </div>-->
<!--          <div class="col-lg-2 ms-auto my-auto">-->
<!--            <button class="btn btn-outline-light px-5 py-2">Contact</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
    <div class="bg-danger text-white py-3">
      <div class="text-center">
        <h2>Portfolio</h2>
        <p>These are the apps that I've made over the years</p>
      </div>
    </div>
    <div class="cover-up">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dc3444" fill-opacity="1" d="M0,128L21.8,138.7C43.6,149,87,171,131,154.7C174.5,139,218,85,262,58.7C305.5,32,349,32,393,42.7C436.4,53,480,75,524,90.7C567.3,107,611,117,655,106.7C698.2,96,742,64,785,85.3C829.1,107,873,181,916,224C960,267,1004,277,1047,288C1090.9,299,1135,309,1178,282.7C1221.8,256,1265,192,1309,160C1352.7,128,1396,128,1418,128L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style lang="scss" scoped>
.cover svg {
  -webkit-filter: drop-shadow( 3px -9px 5px #a6a6a6);
  filter: drop-shadow( 3px -9px 5px #a6a6a6);
}
.cover-up svg {
  -webkit-filter: drop-shadow( 3px 6px 3px #a6a6a6);
  filter: drop-shadow( 3px 6px 3px #a6a6a6);
}
</style>
