<!-- dynamic components in vue -->

<template lang="">
    <div>
        <button @click="activetab = 'TabA' " >A</button>
        <button @click="activetab = 'TabB' " >B</button>
        <button @click="activetab = 'TabC' " >C</button>

        <!-- shorthand synatx -->
        <keep-alive>
            <component :is="activetab"></component>
        </keep-alive>
        


        <!-- <TabA v-if = "activetab === 'TabA' "/>
        <TabB v-if = "activetab === 'TabB' "/>
        <TabC v-if = "activetab === 'TabC' "/> -->

        
    </div>
</template>
<script>
import TabA from './tabs/TabA.vue';
import TabB from './tabs/TabB.vue';
import TabC from './tabs/TabC.vue';

export default {
    name : 'Day15',
    data(){
        return{
            activetab  : ''
        }
    },
    components:{
        TabA,
        TabB,
        TabC
    }
}
</script>
<style scoped>
    button{
        color: red;
        border-color: black;
        margin : 0px 10px 0px 10px;
        padding: auto;
    }
</style>