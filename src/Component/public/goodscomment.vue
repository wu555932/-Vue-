<template>
        <div class="box">
            <h1>发表评论</h1>
            <hr>
            <cmt-box></cmt-box>
        </div>
    
</template>


<script>
import cmt from './comment.vue'
export default {
    components:{
        "cmt-box":cmt
    }
}
</script>


<style lang="scss" scoped>
.box{
    h1{
        font-size: 18px;
        font-weight: bold;
        
    }
}
</style>