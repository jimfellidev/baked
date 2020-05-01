<template>
  <div class="a-head">
    <div class="a-head__layer"></div>
    <h1 class="a-head__title">Heather's Work</h1>
  </div>
</template>

<script>
export default {
  name: "HeaderSection"
};
</script>

<style lang="scss" scoped>
.a-head {
  padding-top: 80px;
  height: 60vh;
  width: 100%;
  background-image: url("../../images/ahead-pic.jpg");
  background-repeat: none;
  background-color: #ee959e;
  background-position: center;
  background-size: cover;
  position: relative;
  max-width: 100000000000px;
}

.a-head__title {
  margin: 0 auto;
  padding-top: 22vh;
  color: white;
  font-size: 30px;
  font-weight: bolder;
  position: relative;
  width: 80%;
  font-family: "Playball", cursive;
}

@media only screen and (min-width: 422px) {
  .a-head__title {
    padding-top: 25vh;
  }
}

@media only screen and (min-width: 768px) {
  .a-head__title {
    font-size: 45px;
  }
}

.a-head__layer {
  background-color: #ee959e;
  background-color: #310031;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
}
</style>
