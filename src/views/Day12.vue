<template lang="">
    <div class = 'card-component-1'>
        <!-- <CardVue/> -->
        <!-- reusing components with slots -->
        <!-- <CardVue> </CardVue>
        <CardVue> card content base </CardVue>
        <CardVue> <h3>this is a card content </h3></CardVue>
        <CardVue> <img src="https://picsum.photos/200" alt=""></CardVue> 
        -->

        <!-- using single card with different contents -->
        <CardVue>
            <template v-slot:header>
                <h1>this is header</h1>
            </template>
            <template v-slot:default>
                <img src="https://picsum.photos/200" alt="">
            </template>
            <template v-slot:footer>
                <h1>this is footer</h1>
            </template>
        </CardVue>
    </div>
</template>
<script>
import CardVue from './base/Card.vue'

export default {
    name : 'day12',
    components:{
        CardVue
    }
}
</script>
<style lang="">
    
</style>