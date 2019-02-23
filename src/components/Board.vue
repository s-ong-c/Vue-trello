<template>
    <div>
        Board
        <div>bid: {{bid}}</div>
        <hr />
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bid:0
        }
    },
    created() {
        //this.$route route정보 get 
        this.bid = this.$route.params.bid
    }
}
</script>
<style>
    
</style>