<template>
    <div>
                        <!-- 轮播图区域 -->
                        <lunbo-box :images='lbt' :isfull="isfull"></lunbo-box>

        <!-- 这是九宫格改造区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newlist">
		        <img src="../../images/picture/menu1.png" alt="图片加载失败">
		        <div class="mui-media-body">新闻资讯</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
		        <img src="../../images/picture/menu2.png" alt="">
		        <div class="mui-media-body">图片分享</div>
                </router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
		        <img src="../../images/picture/menu3.png" alt="">
		        <div class="mui-media-body">商品购买</div>
                </router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/picture/menu4.png" alt="">
		        <div class="mui-media-body">留言反馈</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/picture/menu5.png" alt="">
		        <div class="mui-media-body">视频专区</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/picture/menu6.png" alt="">
		        <div class="mui-media-body">联系我们</div></a></li>
		           
		</ul> 
    </div>
</template>
<script>
import lunbo from '../public/lunbotu.vue'
export default{
    data(){
        return{
            lbt:[
            {img:'//d302.paixin.com/thumbs/5389310/135719110/staff_1024.jpg',id:1},
            {img:'//d302.paixin.com/thumbs/5389310/131361232/staff_1024.jpg',id:2},
            {img:'//d302.paixin.com/thumbs/5389310/129910704/staff_1024.jpg',id:3},
            ],
            isfull:true
        }
    },
    components:{
        "lunbo-box":lunbo
    }
}
</script>
<style scoped lang="scss">
.mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;

    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }

}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>