<!-- using inject to show the data -->
<template lang="">
    <div>
        <h2>
            this is component B {{username}}
        </h2>
    </div>
</template>
<script>
export default {
    name : 'componentB',
    inject : ['username']
}
</script>
<style lang="">
    
</style>