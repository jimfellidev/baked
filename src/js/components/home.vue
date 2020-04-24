<template>
  <div class="home">
    <div class="a-head">
        <div class="a-head__layer">
        </div>
        <h1 class="a-head__title">Heather's Bakery
        </h1>
        <h2 class="a-head__title--2">Where Dreams Meet Reality</h2>
    </div>

    <div class="content"> 
     <div class="h-cakes">
        <h2 class="h-cakes__title">Heather's Baked Goods</h2>
        <div class="h-cakes__content">Established in 2016, Heather's Baked Goods delivers a range of specialized baked goods, ranging from cakes to cookies and everything in-between.  While giving each delicious treat the love and attention it deserves to please even the pickiest of palates. 
        </div>
        <router-link :to="{ name: 'About'}" class="h-cakes__link">Learn more about Heather's Bakery</router-link>
      </div>
      <div class="hours">
        <h3 class="hours__title">CONTACT</h3>
        <div class="hours__wrap">
        <div class="open">
          <h3 class="open__title">Hours</h3>
          <div class="open__wrap">
            <div class="open__hours-wrap">
              <div class="open__hours"><a>MON:</a> 6:00am - 5:00pm</div>
              <div class="open__hours"><a>TUES:</a> 6:00am - 5:00pm</div>
              <div class="open__hours"><a>WEDS:</a> 6:00am - 5:00pm</div>
              <div class="open__hours"><a>THUR:</a> 6:00am - 5:00pm</div>
              <div class="open__hours"><a>FRI:</a> 6:00am - 5:00pm</div>
              <div class="open__hours"><a>SAT:</a> 6:00am - 5:00pm</div>
              <div class="open__hours"><a>SUN:</a> 6:00am - 3:00pm</div>
            </div>
          </div>
        </div>
        <div class="contact"> 
          <h3 class="contact__title">Contact Heather</h3>
          <div class="contact__wrap">
            <h4 class="contact__info">(444)444-4444</h4>
            <div class="contact__info">107 Tomato Ave</div>
            <div class="contact__info">Marlton, NJ, 08053</div>
            <div class="contact__info">P: (444)444-4444</div>
            <div class="contact__info">E: <a href="mailto:exampleemail@example.com">Heathers@email.com</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
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
}


.content {
  background-color: white;
  padding-bottom: 20px;
  max-width: 1650px;
  margin: 0 auto;
}

.home__content {
    padding-top: 200px;
    padding-bottom: 200px;

}

.h-cakes {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
}



.h-cakes__content {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
}
.h-cakes__link {
  padding-top: 24px;
  color: purple;
  font-size: 26px;
  padding-bottom: 24px;
  text-decoration: none;
  font-family: 'Indie Flower', cursive;
}
.h-cakes__link:hover {
  opacity: .6;
}

.hours {
    width: 60%;
    margin: 0 auto;
    background-color: #f9f1f1;
    padding: 16px 0px;
    min-width: 320px;
    max-width: 900px;
    border: solid 1px #310031;
    margin-top: 20px;
    padding-bottom: 22px;
}

.hours__wrap {
  display: flex;
  flex-direction: column;
  padding-top: 22px;
  
}
@media only screen and (min-width: 768px) {
  .hours__wrap {
    flex-direction: row;
  }
}
.hours__title {
  color: #310031;
  padding-bottom: 12px;
  margin: 0px;
  font-size: 17px;
  border-bottom: solid 1px black;
  font-family: 'Indie Flower', cursive;
}


.open {
    text-align: left;
    margin: 0 auto;
}
@media only screen and (min-width: 768px) {
  .open {
    width: 160px;
  }
}

.open__title {
    color: #310031;
    margin-bottom: 12px;
    margin-top: 0;
    font-size: 26px;
    text-align: center;
    font-family: 'Indie Flower', cursive;
}
@media only screen and (min-width: 768px) {
  .open__title {
    text-align: left;
    font-size: 21px
  }
}

.open__hours {
  font-size: 16px;
  padding-bottom: 4px;
}

@media only screen and (min-width: 768px) {
  .open__hours {
    font-size: 14px;
    padding-bottom: 2px;
  }
}

.open__hours a {
  font-weight: 600;
}

h4 {
  margin-top: 0px;
  margin-bottom: 0px;
}
@media only screen and (min-width: 768px) {
  h4 {
    margin-top: 12px;
    margin-bottom: 2px;
  }
}

.contact {
  // width: 50%;
    text-align: center;
    margin: 0 auto;
    
  
}
@media only screen and (min-width: 768px) {
  .contact {
    width: 150px;
    text-align: left;
  }
}





.contact__title {
    color: #310031;
    margin-top: 20px;
    font-size: 26px;
    padding-top: 20px;
    margin-bottom: 12px;
    border-top: solid 1px purple;
    font-family: 'Indie Flower', cursive;
}

@media only screen and (min-width: 768px) {
  .contact__title {
      color: #310031;
      margin-top: 0;
      font-size: 21px;
      padding-top: 0px;
      margin-bottom: auto;
      border-top: none;

  }
}


.contact__info {
  
  padding-bottom: 3px;
}
@media only screen and (min-width: 768px) {
  .contact__info {
    font-size: 14px;
    padding-bottom: 2px;
  }
}

.contact__info a {
  text-decoration: none;
  color: purple;
}


</style>