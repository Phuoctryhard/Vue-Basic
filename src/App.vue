<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue';
import { RouterView } from 'vue-router';
import HomeCards from './components/HomeCards.vue';
import JobListing from './components/JobListing.vue';
import JobListings from './components/JobListings.vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'
import File from './components/file.vue';
// neu ko co set up

// export default {
//   components: { Navbar }
// }
</script>

<template>
  <div>

    <File />
    <Navbar/>
    <RouterView/>
  </div>
</template>
