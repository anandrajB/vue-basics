<template>
  <div>
    <ul>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
      <li><router-link :to="{ name: 'day3' }">Day3</router-link></li>
      <li><router-link :to="{ name: 'day4' }">Day4</router-link></li>
      <li><router-link :to="{ name: 'day5' }">Day5</router-link></li>
      <li><router-link :to="{ name: 'event' }">Eventhandling</router-link></li>
      <li><router-link :to="{ name: 'form' }">Form</router-link></li>
      <li><router-link :to="{ name: 'modify' }">Modify</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
