<template>
  <ul>
    <!-- iterate and show only the names -->
    <li v-for="name in names" :key="name">{{ name }}</li>
    <!-- display with index -->
    <li v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</li>

    <!-- display from array of objects  -->
    <li v-for="name in fullnames" :key="name.first">
      {{ name.first }} {{ name.last_name }}
    </li>
  </ul>

  <!-- display from list of objects -->
  <!-- array within the array -->
  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
  </div>

  <!-- rendering from the dict  -->
  <h2 v-for="(value ,key ,index) in myinfo" :key="value">{{ index}} {{ key }} {{ value }}</h2>

  <template v-for="name in names" :key="name">
    <h2>{{name }}</h2>
    <hr>

  </template>

</template>




<script scoped>
export default {
  name: "day3",
  data() {
    return {
      names: ["anand", "raj", "chinna"],
      fullnames: [
        { first: "anand", last_name: "raj" },
        { first: "anand", last_name: "raj2312" },
        { first: "anand", last_name: "chinna" },
      ],
      actors: [
        { name: "rajini", movies: ["sivaji", "chitti"] },
        { name: "kamal", movies: ["leo", "vikram"] },
        { name: "ajith", movies: ["billa", "vivegam"] },
      ],
      myinfo: {
        name: "anand",
        role: "sde",
      },
    };
  },
};
</script>