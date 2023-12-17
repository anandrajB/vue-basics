<template lang="">
    <div>
        <!-- <input type="text" v-model = 'name'> -->
        <InputVue v-model = 'username'/>
    </div>
</template>
<script>
import InputVue from './base/Input.vue'

export default {
    name : 'day11',
    data(){
        return{
            username : ''
        }
    },
    components:{
        InputVue
    }
}
</script>
<style lang="">
    
</style>