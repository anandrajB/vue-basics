<template lang="">
    <h3>this is base</h3>   
    <ChildStyleVue>
        <h3>this is a child</h3>
    </ChildStyleVue>

</template>
<script>
import ChildStyleVue from './base/ChildStyle.vue'

export default {
    name : 'day14',
    data(){
        return{

        }
    },
    components:{
        ChildStyleVue
    }
}
</script>
<!-- use scoped for this custom css-->
<style scoped>
   h3{
    color: blue;
   }
</style>