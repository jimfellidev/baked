<template>
  <div ref="container">
    <button
      id="dropbox"
      class="nav-icon"
      v-bind:class="[isActive ? '' : 'active']"
      v-on:click="toggleClass()"
    >
      <div></div>
    </button>
    <transition name="fade">
      <div id="menu" class="menu el" v-if="!isActive">
        <!-- v-if="show" this goes in above div -->
        <ul id="myDropdown" class="dropdown __vueClickOutside__">
          <li>
            <router-link
              class="dropdown__item dropdown__item-1 home-link"
              :to="{ name: 'Home'}"
            >Home</router-link>
          </li>
          <li>
            <router-link
              class="dropdown__item dropdown__item-1 work-link"
              :to="{ name: 'Work'}"
            >My Work</router-link>
          </li>
          <li>
            <router-link
              class="dropdown__item dropdown__item-1 home-link"
              :to="{ name: 'About'}"
            >About</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Dropbox",

  data() {
    return {
      // isOpen: false,
      // show: false,
      isActive: true
      // offclick: false,
    };
  },
  methods: {
    toggleClass: function(event) {
      this.isActive = !this.isActive;
    },
    documentClick(e) {
      let el = this.$refs.container;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.isActive = true;
      }
    }
  },
  created() {
    document.addEventListener("click", this.documentClick);
  },
  destroyed() {
    // important to clean up!!
    document.removeEventListener("click", this.documentClick);
  }
};
</script>

<style lang="scss" scoped>

.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.menu {
  display: block;
}

.menu-hidden {
  display: none;
}

.offclick {
  display: none;
}

.nav-icon {
  margin: 10px 16px;
  width: 60px;
  float: right;
  padding-right: 12px;
  background: transparent;
  border: transparent;
}
@media only screen and (min-width: 768px) {
  .nav-icon {
    display: none;
  }
}
.nav-icon:hover {
  cursor: pointer;
  opacity: 0.8;
}

.nav-icon:after,
.nav-icon:before,
.nav-icon div {
  background-color: black;
  border-radius: 3px;
  content: "";
  display: block;
  height: 3px;
  margin: 8.87px 0;
  transition: all 0.2s ease-in-out;
}

.active:before {
  transform: translateY(12px) rotate(135deg);
  background-color: purple;
}

.active:after {
  transform: translateY(-12px) rotate(-135deg);
}

.active div {
  transform: scale(0);
}

.dropdown {
  list-style-type: none;
  position: fixed;
  top: 63.5px;
  color: white;
  margin-left: 0;
  padding-left: 0;
  width: 140px;
  right: -5px;
  margin-top: 16px;
  transition: 0.7s transform, 0.7s -webkit-transform;
  border-top: 0.5px #d0d3d6 solid;
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
  text-align: center;
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
  font-size: 16px;
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

.dropdown a.is-current,
.dropdown a:hover:before {
  left: 0;
}

.router-link-exact-active {
  font-weight: 800;
}
</style>