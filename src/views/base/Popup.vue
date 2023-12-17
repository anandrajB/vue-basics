<template lang="">
    <div>
        <h1>this is a popup</h1>
        <!-- sending data from child to parent component -->
        <input type="text" v-model = 'name'>
        <button @click = "$emit('close',name)">close popup</button>
    </div>
</template>
<script>
export default {
    name : "popup",
    data(){
        return{
            name : ''
        }
    },
    // using emit for custom event handling
    emits : {
        close : (name) => {
            if(!name){
                return false
            }
            else{
                return true
            }
        }
    }
}
</script>
<style lang="">
    
</style>