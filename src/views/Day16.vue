<template lang="">
    <div class = 'container'>
        <div class = 'content'>
            <p class = 'text-2xl font-semibold'>My app</p>
      <p class = 'text-xl font-light'>
        This is an example of how you might use Vue Teleport. I think it is a
        pretty neat API that is yet another awesome escape hatch that Vue
        provides for practical reasons. Sometimes you just need to render
        something completely outside the Vue component tree.
      </p>
      <button @click = 'showmodal = true' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        show modal
      </button>
      <Modal v-show = 'showmodal' @close = 'showmodal = false'>
        <h1> this is a secret message</h1>
      </Modal>
        </div>
    </div>
</template>
<script>
import Modal from './base/Modal.vue';
export default {
    name : 'day16',
    data(){
        return{
            showmodal : false
        }
    },
    components : {
        Modal
    }
}
</script>
<style lang="">
    
</style>