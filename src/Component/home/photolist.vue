<template>
    <div>
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <router-link class="mui-control-item mui-active" to="/home/photolist/show">
                        自然
                </router-link>
                <router-link class="mui-control-item" to="/home/photolist/show" >
                        景色
                </router-link>
                <router-link class="mui-control-item" to="/home/photolist/show">
                        美女
                </router-link>
                <router-link class="mui-control-item" to="/home/photolist/show">
                        运动
                </router-link>
                <router-link class="mui-control-item" to="/home/photolist/show">
                        美食
                </router-link>
                <router-link class="mui-control-item" to="/home/photolist/show">
                        潮流
                </router-link>
            </div>
        </div>
        <show-box></show-box>
    </div>
</template>

<script>
import show from '../public/show.vue'
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
     },
     components:{
         'show-box':show
     }
}
</script>
<style lang="scss" scoped>

</style>