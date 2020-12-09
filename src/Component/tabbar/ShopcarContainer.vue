<template>
    <div>
        <!-- 商品列表区域 -->
        <div class="goodslist">
            <div class="mui-card" v-for="item in goodsinfo" :key="item.id.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        
                            <mt-switch v-model="$store.getters.getgoodsselected[item.id.id]" 
                            @change="changeselected(item.id.id,$store.getters.getgoodsselected[item.id.id])" >
                            </mt-switch>
                            <img :src="item.img" alt="图片加载失败">
                            <div class="goodsitem">
                                <h1>{{item.title}}</h1>
                                <p class="info">
                                    <span class="price">￥{{item.price}}</span>
                                    <!-- 数字选择框区域 -->
                                    <num-box :count="item.count" :id="item.id.id"></num-box>
                                    <a class="del" @click.prevent="del(item.id.id)">删除</a>
                                </p>    
                            </div>
					</div>
				</div>
			</div>      
        </div>

        <!-- 商品结算区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="left">
                            <p>总计</p>
                            <p>已勾选商品<span class="red">{{$store.getters.calculate.count}}</span>件,总价<span class="red">￥{{$store.getters.calculate.sum}}</span></p>
                        </div>
                        <mt-button type="danger" size="normal">去结算</mt-button>
					</div>
				</div>
			</div>
    </div>
</template>
<script>

import numbox from '../public/numbox.vue'
export default {
    data(){
        return{
            goodsinfo:[]
        }
    },
    created(){
       this.rendershopcar() 
    },
    methods:{
        rendershopcar(){
            this.goodsinfo = this.$store.state.car
        },
        del(id){
            this.$store.commit('delcar',id)
        },
        changeselected(id,flag){
            var obj ={id:id,flag:flag}
            this.$store.commit('changselected',obj)
        },
    },
    components:{
        "num-box":numbox
    }
}
</script>
<style scoped lang="scss">
.mui-card-content-inner{
    display: flex;
    align-items: center;
    img{
        width: 60px;
        height: 60px;
        margin-left: 2px;
    }
    .goodsitem{
        display: flex;
        flex-direction: column;
        align-items: center;
         h1{
                font-size: 16px;
                font-weight: bold;
            }
        .info{
            display: flex;
            justify-content: space-between;
            .price{
                color: red;

            }
        }
    }
    .left{
        display: flex;
        justify-content: space-between;
        .red{
            color: red;
        }
    }
}



        
</style>