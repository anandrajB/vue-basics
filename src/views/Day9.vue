<!-- using dynamic props for components -->
<template lang="">
    <div>
        <!-- <Greet username = 'anand' role = "dev" />
        <Greet username = 'raj'/>
        <Greet username = 'username'/> -->
        <Greet :username = 'name' :role = 'role' />
        <Article id = "myid" :title = 'article_title' :likes = '50' :ispublished = 'true'/>
    </div>
</template>
<script>
import Article from './Article.vue';
import Greet from './Greet.vue';


export default {
    name : 'day9',
    data(){
        return{
            name : 'anand',
            role : 'dev',
            article_title : 'the title is toi',
        }
    },
    components : {
        Greet,
        Article
    }
}
</script>
<style lang="">
    
</style>