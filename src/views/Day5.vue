<template lang="">
    <div>
        <h1>{{ 2 + 3 + 5}}</h1>
        <h2>{{5+10+20}}</h2>
        <h1>{{ add(2,4,1) }}</h1>
        <h1> the data is {{mult(basevalue)}}</h1>
    </div>
</template>
<script>

// using methods 
//  add some logic and reuse when needed 

export default {
    name : "day5",
    data(){
        return{
            basemult : 5,
            basevalue : 5
        };
    },
    methods: {
        add(a,b,c){
            return a+b+c
        },
        mult(num){
            return num*this.basemult
        }
    },
}
</script>
<style lang="">
    
</style>