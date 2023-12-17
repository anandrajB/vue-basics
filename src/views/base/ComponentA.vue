<!-- using provide to provide the data globally  -->
<template lang="">
    <div>
        <!-- calling username not working its a provide not a data property -->
        <h1>this is component A {{name}}</h1>
        <ComponentBVue/>
    </div>
</template>
<script>
import ComponentBVue from './ComponentB.vue'

export default {
    name : 'componentA',
    data(){
        return{
            name : "sample name"
        }
    },
    // use as function if need to be utilized in parent 
    provide() {
        return {
            username : this.name
        }
    },
    // use this only for down the tree
    // provide :{
    //     username : 'anand'
    // },
    components :{
        ComponentBVue
    }
}
</script>
<style lang="">
    
</style>