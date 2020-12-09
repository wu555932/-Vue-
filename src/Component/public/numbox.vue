<template>
    
        <div>
             <div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input class="mui-input-numbox" type="number" ref="num" @change="countChanged()" :value="count" />
                    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
			</div>
        </div>

</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
     mounted(){
        mui(".mui-numbox").numbox()
    },
    data(){
        return{
            // selected:this.$refs.num.value
        }
    },
    methods:{
         countChanged(){
             this.$store.commit('updatecar',{
                 id:this.id,
                 count:this.$refs.num.value
             })
         }
    },
    props:['count','id']
}
</script>


<style lang="scss" scoped>
.mui-numbox{
    height: 25px;
    margin: 0px 5px;
}
</style>