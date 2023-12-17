<template lang="">
    <div>
        <h1>{{fullname}}</h1>
        <button @click = 'changefullname' > change name button </button>
    </div>
</template>
<script>
export default {
    name : 'day-6',
    data(){
        return {
            firstname : "anand",
            lastname : 'raj',
            items : [
                {
                    'id' : 1,
                    'title' : 'some',
                    'price' : 100
                }
            ]
        }
    },
    methods :{
        changefullname(){
            this.fullname = "thanks for clicking"
        }
    },
    // using get and set in computed property
    computed :{
        fullname :{
            get(){
            return `${this.firstname} ${this.lastname}`
            },
            set(value){
                const names = value.split(" ")
                this.firstname = names[0]
                this.lastname = names[1]
            }
        }
    }
}
</script>
<style lang="">
    
</style>