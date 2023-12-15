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
    <div>
        <h1 v-for="name in names" :key = "name">{{ name }}</h1>
    </div>
</template>

<style>
    
</style>