<template>
    <div class="topnav" id="myTopnav">
      <div class="topnav__width-wrap">
       <router-link class="topnav__icon" :to="{ name: 'Home'}">Heathers</router-link>
        
        <div class="topnav__link-wrap">
        <router-link :to="{ name: 'Home'}">Home</router-link>
        <router-link :to="{ name: 'Work'}">Work</router-link>
        <router-link :to="{ name: 'About'}">About</router-link>


        </div>
      </div>
      <dropbox></dropbox>
    </div>
  
</template>

<script>

import Dropbox from './dropbox.vue';

export default {
  name: "Navbar",
  components: {
    Dropbox
  }
};

</script>

<style lang="scss" scoped>
.topnav {
  // overflow: auto;
  transform: translateZ(1000000px);
  z-index: 20;
  position: fixed;
  width: 100%;
  z-index: 5000000000000;
  height: 80px;
  background-color: white;
  -webkit-box-shadow: 0px 1px 19px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 19px rgba(0, 0, 0, 0.2);
  color: white;
  top: 0;
}

.topnav__width-wrap {
  margin: auto;
}

@media only screen and (min-width: 768px) {
  .topnav__width-wrap {
    width: 80%;
  }
}

.topnav__link-wrap {
  float: right;
  display: block;
}

@media only screen and (max-width: 767px) {
  .topnav__link-wrap {
    display: none;
  }
}

@media only screen and (min-width: 767px) {
  #dropbox {
    display: none;
  }
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  line-height: 52px;
  font-family: "Dosis", sans-serif;
}

@media only screen and (min-width: 768px) {
  .topnav a {
    padding: 14px 16px;
  }
}

.topnav a:hover {
  opacity: 0.7;
}

.topnav .icon {
  display: none;
}

.topnav__icon {
  padding: 14px 46px;
  background-color: white;
}

@media only screen and (min-width: 768px) {
  .topnav__icon {
    padding-top: 0;
    padding-left: 0;
  }
}

.dropdown {
  list-style-type: none;
  position: fixed;
  top: 63.5px;
  color: white;
  right: -403px;
  margin-left: 0;
  padding-left: 0;
  transition: 0.7s transform, 0.7s -webkit-transform;
  z-index: 10;
  width: 140px;
  -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

@media only screen and (min-width: 768px) {
  .dropdown {
    display: none;
  }
}

.dropdown a {
  display: block;
  position: relative;
  z-index: 1;
  -webkit-transition: 0.35s ease color;
  transition: 0.35s ease color;
}

.dropdown a:before {
  content: "";
  display: block;
  z-index: -1;
  position: absolute;
  left: 100%;
  top: 0;
  width: 100%;
  height: 100%;
  border-left: solid 5px black;
  background: #fbf7f5;
  -webkit-transition: 0.7s ease left;
  transition: 0.7s ease left;
  border-bottom: 0.5px #d0d3d6 solid;
}

.dropdown__item {
  display: block;
  width: 75%;
  text-decoration: none;
  font-size: 12px;
  text-decoration: none;
  padding-top: 9px;
  padding-bottom: 9px;
}

.dropdown__item:hover {
  opacity: 1 !important;
}

.dropdown__item-1 {
  border-bottom: 0.5px #d0d3d6 solid;
  text-decoration: none;
  text-align: left;
  padding-left: 16px;
  background-color: white;
  padding: 14px 16px;
  color: black;
}

.dropdown__item-1:active {
  color: #454845;
}

.dropdown__item-2 {
  background-color: #35393a;
  border-bottom: 0.5px #d0d3d6 solid;
  color: white;
}

.dropdown__item-2:hover {
  opacity: 0.8;
}

.dropdown__item-2:active {
  opacity: 1;
}

.toggle-active {
  -webkit-transform: translatex(-400px);
  transform: translatex(-400px);
}

.hamburger {
  padding-top: 28px !important;
  padding-right: 46px !important;
}

.dropdown a.is-current,
.dropdown a:hover:before {
  left: 0;
}

.active-link {
  text-decoration: none;
  position: relative;
}

.active-link:after {
  position: absolute;
  content: "";
  height: 2px;
  bottom: 23px;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 50%;
  background: black;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.active-link:hover:after {
  width: 80%;
  background: purple;
}

.router-link-exact-active {
  font-weight: 800;
  
}

</style>
