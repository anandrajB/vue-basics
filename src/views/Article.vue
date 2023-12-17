<template lang="">
    <div>
        <h1>Article component</h1>
        <h2 v-bind=$attrs>{{title}}</h2>
        <h2>{{likes}}</h2>
        <h1>published {{ispublished ? 'yes' : 'no'}}</h1>
    </div>
</template>
<script>
export default {
    name : 'article',
    // using props with default values 
    props:{
        'title' : {
            type : String,
            required : true,
            default : 'Article name is default'
        },
        'likes' : Number,
        'ispublished' : Boolean
    },
    // using inheritance false for not to set id for div tag
    inheritAttrs : false
}
</script>
<style lang="">
    
</style>