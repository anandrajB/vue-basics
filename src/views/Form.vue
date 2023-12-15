<!-- using v-model -->

<template lang="">
    <div>
        <pre>
            {{JSON.stringify(
                formvalues ,null ,2
            )}}
        </pre>
    </div>
    <form @submit.prevent = "submitform">
        <div>
            <label for="">Name</label>
            <!-- use .trim to ignore whitespaces -->
            <input type="text" id="name" v-model.trim = 'formvalues.name'>
        </div>
        <div>
            <label for="">Age</label>
            <!-- use .number to make it int as default -->
            <!-- use .lazy for lazy loading click on outside the form  -->
            <!-- use @keyup.enter for keyboard event -->
            <input @keyup.enter = "submitform" type="text" id="age" v-model.number = 'formvalues.age'>
        </div>
        <div>
            <label for="profile">profile summary</label>
            <textarea name="" id="" cols="30" rows="10" v-model='formvalues.profilesummary'></textarea>
        </div>

        <div>
            <label for="country">country</label>
            <select name="" id="" v-model='formvalues.country'>
                <option value=null>select a country</option>
                <option value="india">india</option>
                <option value="japan">Japan</option>
                <option value="usa">USA</option>
            </select>
        </div>

        <div>
            <input type="checkbox" id = "remotework" v-model = formvalues.remotework true-value = "yes" false-value = "no">
            <label for="remotework">open to remote work</label>
        </div>

        <div>
            <!-- <label for=""> skill set</label> -->
            <input type="checkbox" id="html" value="HTML" v-model = 'formvalues.skillset'>
            <label for="html">HTML</label><br>
            <input type="checkbox" id="css" value="CSS" v-model = 'formvalues.skillset'>
            <label for="css">CSS</label><br>
            <input type="checkbox" id="javascript" value="JavaScript" v-model = 'formvalues.skillset'>
            <label for="javascript">JavaScript</label>
        </div>
        
        <!-- <div>
            <button>
                submit
            </button>
        </div> -->

        

    </form>
</template>
<script scoped>
export default {
    name : 'app',
    data(){
        return {
            msg : 'some',
            formvalues : {
                name : null,
                profilesummary : null,
                age : null,
                country : null,
                remotework : "no",
                skillset : []
            }
        }
    },
    methods : {
        submitform(){
            console.log('form values' , this.formvalues);
        }   
    }
}
</script>
<style scoped>
    
</style>