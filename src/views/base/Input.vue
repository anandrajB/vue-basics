<template>
    <div>
        <!-- taking the value from user -->
        <!-- setting the value based on the user typed -->
        <input type="text"
        :value = modelValue 
        @input="$emit('update:modelValue' , $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    name: 'Input',
    props : {
        modelValue : String
    }
};
</script>

<style scoped>
input[type='text'] {
    background-color: white;
    border: 1px solid black; /* Added 'solid' as the border style */
}
</style>
