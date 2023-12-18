<template lang="">
    <div>
        <p class="text-xl font-semibold" v-for = 'name in names' :key='name.firstname'>
            <slot :firstname='name.firstname' :lastname='name.lastname'></slot>
        </p>
    </div>
</template>
<script>
export default {
    name : 'NameList',
    data(){
        return{
            names : [
                {
                    firstname  : 'anand',
                    lastname : 'raj'
                },
                {
                    firstname  : 'user',
                    lastname : 'raj'
                },
                {
                    firstname  : 'test',
                    lastname : 'raj'
                }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>