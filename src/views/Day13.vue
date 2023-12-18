<!-- using slots in vue -->
<template lang="">
    <div>
        <NameList>
            <template v-slot:default='props'>
                {{props.firstname}}
            </template>
        </NameList>

        <NameList>
            <template v-slot:default='props'>
                {{props.lastname}}
            </template>
        </NameList>

    </div>
</template>
<script>
import NameList from './base/NameList.vue';

export default {
    name : 'day13',
    components :{
        NameList
    }
}
</script>
<style lang="">
    
</style>