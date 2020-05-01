<template>
  <div class="bemname">
        <home></home>
        <about></about>
  </div>
</template>

<script>
import Work from './work.vue';
import Home from './home.vue';
import About from './about.vue';

export default {
  name: 'PageContainer',
  components: {
    Work,
    Home,
    About,
  }
};
</script>

<style lang="scss" scoped>
</style>



