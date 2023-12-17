<template lang="">
    <div>
        <h1 v-once >{{name}}</h1>
        <button @click = 'name = "batman"'>
            click me
        </button>
        <h2 v-pre>{{name}}</h2>

        <h2>{{fullname}}</h2>
        <button @click = "items.push(
            {
                id : 4,
                title  : 'data',
                price : 100
            }
        )">
            add items
        </button>
        <h1>{{totalprice}}</h1>
        <h1>{{gettotalprice()}}</h1>
        <input type="text" v-model='country'>
        <!-- when using for and if using template tag -->
        <template v-for = 'item in items' :key=item>
          <div>
            <h1 v-if = "item.price > 100">{{item.title}} {{item.price}}</h1>
          </div>
        </template>

        <h1 v-for = 'item in expensive' :key = 'item.id'> the data is {{item.title}}</h1>
    </div>
</template>
<script>
export default {
  name: "modif",
  data() {
    return {
      name: "anand",
      firstname: "test",
      lastname: "user",
      country : '',
      items: [
        {
          id: 1,
          title: "TV",
          price: 100,
        },
        {
          id: 2,
          title: "fridge",
          price: 200,
        },
        {
          id: 3,
          title: "towel",
          price: 300,
        },
      ],
    };
  },
  // methods are not cached
  methods : {
    gettotalprice() {
      console.log("total methods")
      return this.items.reduce(
        (total, curr) => (total = total + curr.price),
        0
      );
    },
  },
  // computed property is cached
  //  keeps in cache when there is change in UI
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
    totalprice() {
      console.log("computed property")
      return this.items.reduce(
        (total, curr) => (total = total + curr.price),
        0
      );
    },
    expensive(){
      return this.items.filter(
        item => item.price > 100
      )
    }
  },
};
</script>
<style lang="">
</style>