<script scoped>  
    export default {
        name : "day-4",
        data(){
            return {
                names : ["anand" , "raj" , "sheik"]
            };
        }
    };
</script>

<template>
    <!-- use template tag with vfor and v-if  -->
    <div>
        <template v-for="name in names" :key = "name">
            <h1 v-if = " name === 'anand' " >{{ name }}</h1>
        </template>
        
    </div>
</template>

<style>
    
</style>