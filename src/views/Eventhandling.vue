<template lang="">
    <div>
        <h1>{{name}}</h1>
        <div>
            <button @mouseover = "changename " >
                change name
            </button>
        </div>
        <h2>{{count}}</h2>
        <!-- inline event handling -->
        <div>
            <button @click = increment(5)>
                +
            </button>
            <button @click = decrement>
                -
            </button>
        </div>
        
    </div>
</template>
<script>
export default {
  name: "event",
  data() {
    return {
      name: "anand",
      count: 0,
    };
  },
  methods :{
    increment(num){
        this.count += num
    },
    decrement(){
        this.count -=1
    },
    changename(event){
        this.name = 'batman'
        console.log(event);
    }
  }
};
</script>
<style lang="">
</style>