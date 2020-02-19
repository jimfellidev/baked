<template>
  <div class="bemname">
      <!-- <flashcard-app></flashcard-app> -->
        <home></home>
        <about></about>
    <!-- <div v-for="card in cards">      
      <card :card="card"></card>
    </div> -->
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



