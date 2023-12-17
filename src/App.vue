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
      <li><router-link :to="{ name: 'day6' }">Day6</router-link></li>
      <li><router-link :to="{ name: 'day7' }">Day7</router-link></li>
      <li><router-link :to="{ name: 'day8' }">Day8</router-link></li>
      <li><router-link :to="{ name: 'day9' }">Day9</router-link></li>
      <li><router-link :to="{ name: 'provide' }">Provide</router-link></li>
      <li><router-link :to="{ name: 'day11' }">Day11</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
