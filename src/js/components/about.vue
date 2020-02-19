<template>
  <div class="about">
    <div class="a-head">
        <div class="a-head__layer">
        </div>
        <h1 class="a-head__title">About Us</h1>
    </div>
             <div class="about">
            <div class="about__me">
                <h1 class="about__me-title">Who I am</h1 >
                <p class="about__me-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="about__passion">
                <h1 class="about__pas-title" >Passion</h1 >
                <p class="about__pas-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="about__different">
                <h1 class="about__dif-title">What Makes Me Different?</h1 >
                <p class="about__dif-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    
  </div>
</template>

<script>
export default {
  name: 'About',
  
};
</script>

<style lang="scss" scoped>



.test {
    padding-top: 200px;
    padding-bottom: 200px;
}

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
}

.a-head__title {
  margin: 0 auto;
  padding-top: 22vh;
  color: white;
  font-size: 30px;
  font-weight: bolder;
  position: relative;
  width: 80%;
  font-family: 'Playball', cursive;
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
  opacity: .7;
}

.about {
  position: relative;
  display: block;
  width: 100%;
  border-top: solid 2px black;
  max-width: 1365px;
  margin: 0 auto;
}

.about__me {
  padding-top: 30px;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 20px;
}

@media only screen and (min-width: 768px) {
  .about__me {
    width: 80%;
  }
}

.about__me-content {
  text-align: left;
  letter-spacing: .4px;
  font-size: 21px;
}

@media only screen and (min-width: 768px) {
  .about__me-content {
    word-spacing: 1.5px;
    line-height: 24px;
    font-size: 20px;
  }
}

.about__passion {
  padding-top: 20px;
  width: 90%;
  margin: 0 auto;
  border-top: solid 1px purple;
  padding-bottom: 50px;
}

@media only screen and (min-width: 768px) {
  .about__passion {
    width: 80%;
  }
}

.about__pas-content {
  margin: 0 auto;
  text-align: left;
  letter-spacing: .4px;
  font-size: 21px;
}

@media only screen and (min-width: 768px) {
  .about__pas-content {
    word-spacing: 1.5px;
    line-height: 24px;
    font-size: 20px;
  }
}

.about__different {
  width: 90%;
  padding-top: 30px;
  padding-bottom: 50px;
  margin: 0 auto;
  border-top: solid 1px purple;
}

@media only screen and (min-width: 768px) {
  .about__different {
    width: 80%;
  }
}

.about__dif-content {
  text-align: left;
  letter-spacing: .4px;
  font-size: 21px;
}

@media only screen and (min-width: 768px) {
  .about__dif-content {
    word-spacing: 1.5px;
    line-height: 24px;
    font-size: 20px;
  }
}

</style>