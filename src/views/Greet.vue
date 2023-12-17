<template lang="">
    <div>
        <h1> {{username}} {{role}}</h1>
    </div>
</template>
<script>
export default {
    name : 'greet',
    props :[
        'username',
        'role'
    ]
}
</script>
<style lang="">
    
</style>