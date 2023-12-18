<template lang="">
    <div>
        tab c content
        <input type="text" name="" id="" v-model = 'name'>
    </div>
</template>
<script>
export default {
    name : 'TabC',
    data(){
        return{
            name : ''
        }
    }
}
</script>
<style scoped>
input[type='text'] {
    background-color: white;
    border: 1px solid black; /* Added 'solid' as the border style */
}
</style>