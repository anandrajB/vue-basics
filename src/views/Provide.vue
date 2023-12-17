<template lang="">
    <div>
        <ComponentAVue/>
        <button @click = 'showpopup = true '>shop popup</button>
        <!-- commmunicating bt parent and child component -->
        <!-- using custom component as close to close the popup  -->
        <!-- <Popup v-show = 'showpopup' @close="showpopup = false "/> -->
        <Popup v-show = 'showpopup' @close="closepop"/>
    </div>
</template>
<script>
import ComponentAVue from './base/ComponentA.vue'
import Popup from './base/Popup.vue';

export default {
    name : 'provide',
    data(){
        return{
            showpopup : false 
        }
    },
    methods :{
        closepop(name){
            this.showpopup = false
            console.log(name);
        }
    },
    components : {
        ComponentAVue,
        Popup
    }
}
</script>
<style lang="">
    
</style>