<!-- watchers in vue -->
<!-- watch any data and do some code  -->
<template lang="">
    <div>
        <h1>volume tracker (0-20)</h1>
        <h2>current volume {{volume}}</h2>
        <div>
            <button @click = 'volume +=2'>increase</button>
            <button @click = 'volume -=2 '>decrease</button>
        </div>
        <input type="text" v-model = 'movie'>
        <input type="text" v-model = 'movieinfo.title'>
        <input type="text" v-model = 'movieinfo.actor'>

        <div>
            <button @click = "movielist.push('newname3')">
                push movie
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name : 'day7',
    data(){
        return{
            volume : 0,
            movie : 'username',
            movieinfo : {
                title : '',
                actor : ''
            },
            movielist : ['newname' , 'newname2']
        }
    },
    watch :{
        //  add start state and end state
        volume(newvalue , oldvalue){
            if (newvalue > oldvalue && newvalue === 16){
                alert('value more than 16')
            }
        },
        // runs on page load itself 
        movie:{
            handler(newvalue){
                console.log("this is new call")
            },
            immediate : true
        },
        // calls when data changed 
        // useful for api calling on type 

        // movie(value){
        //     console.log("new value")
        // },

        // watcher never watch on nested object
        movieinfo:{
            handler(newvalue){
                console.log(`calling the value as ${newvalue.title}`)
            },
            deep : true
        },
        movielist :{
            handler(newvalue){
                console.log(`${newvalue}`)
            },
            deep:true
        }
    }
}
</script>
<style lang="">
    
</style>