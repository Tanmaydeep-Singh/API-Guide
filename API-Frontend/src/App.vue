
<template>
<navbar/>


  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';



</script>


<style>
body{
  display:grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("../src/assets/Background.png");
  overflow-x: hidden;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}

</style>
