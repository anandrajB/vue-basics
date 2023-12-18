<template lang="">
    <div>
        <div class="modal-overlay" @click="$emit('close')">
        <div class="modal-content">
        <slot></slot>
        <hr />
        <button @click="$emit('close')">Close</button>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name : 'modal',
    emits : ['close']
}
</script>
<style lang="">
    
</style>