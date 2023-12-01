<template>
    <h1 class="text-3xl font-bold ">welcome</h1>
    <Counter/>
    <!-- conditional rendering -->
    <h3 v-if="num ===0">the number is zero </h3>
    <h2 v-else-if="num < 0 ">the number is negative</h2>
    <h2 v-else-if="num > 0 ">the number is positive</h2>
    <h2 v-else>the number is not a zero</h2>

    <template v-if="display">
      <h2>username</h2>
      <h2>anand</h2>
      <h2>vue</h2>
    </template>
    
    <!--  v-show mounts directly to DOM : only display : None is displayed -->
    <h2 v-show="showelement">using v element show</h2>

    <!-- v-if mounts only the condition satisfies  -->
    <h2 v-if="showelement">using v if show</h2>
</template>


<script setup>
  import Counter from '@/components/Counter.vue'
</script>


<script>
export default {
  name : 'Home',
  data(){
    return{
      num : 5,
      display : true,
      showelement : false
    }
  },
}
</script>