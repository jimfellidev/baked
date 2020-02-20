<template>
  <div class="home">
    <div class="a-head">
        <div class="a-head__layer">
        </div>
        <h1 class="a-head__title">Heather's Bakery
        </h1>
        <h2 class="a-head__title--2">Where Dreams Meet Reality</h2>

    </div>
     
    <!-- <div v-for="card in cards">      
      <card :card="card"></card>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  
};
</script>

<style lang="scss" scoped>



.a-head {
  padding-top: 0px;
  height: 100vh;
  width: 100%;
  background-image: url("../../images/ahead-pic.jpg");
  background-repeat: none;
  background-color: #ee959e;
  background-position: center;
  background-size: cover;
  position: relative;
}

.a-head__title {
  margin: 0 auto;
  padding-top: 40vh;
  color: white;
  font-size: 30px;
  font-weight: bolder;
  position: relative;
  width: 80%;
  font-family: 'Playball', cursive;
}

@media only screen and (min-width: 422px) {
  .a-head__title {
    padding-top: 40vh;
  }
}
.a-head__title--2 {
    font-size: 20px;
    padding-top: 25px;
    color: white;
    margin: 0 auto;
    color: white;
    position: relative;
    width: 80%;
}
@media only screen and (min-width: 768px) {
  .a-head__title--2 {
    font-size: 28px;
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
  opacity: .7;
  padding-bottom: 16px;
}

.home__content {
    padding-top: 200px;
    padding-bottom: 200px;

}

</style>