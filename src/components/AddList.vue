<template>
    <div class="add-list">
        <input v-if="isAddList" type="text" class="form-control" v-model="inputTitle">
        <a href="" @click.prevent="onAddList" v-else >&plus;Add another list </a>
    </div>
</template>
<script>
export default {
    data(){
        return{
        isAddList: false,
        inputTitle:''
        }
    },
    methods: {
     onAddList(){
        
        this.isAddList = true
        }
    },

}
</script>
<style>
    
</style>