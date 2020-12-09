<template>
    <div class="goodlist">
         <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goinfo(item.id)">
                <img :src="item.img" alt="图片加载失败">
                <p class="title">
                    {{item.title}}
                </p>
                <div class="goodsinfo">
                    <p class="price">
                        <span class="now">￥{{item.nprice}}</span>
                        <span class="old">￥{{item.oprice}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>{{item.num}}人付款</span>
                    </p>
                </div>
        </div>







       <mt-button type="danger" size="large">加载更多</mt-button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            goodslist:[]
        }
    },
    created(){
        this.getgoods();
    },
    methods:{
        getgoods(){
            axios.get('../../../goods.json')
            .then(res=>{
                if(res.status == 200){
                     this.goodslist = res.data;
                    //  console.log(this.goodslist);
                }
                
            })
            .catch(err=>{
                throw(err);
            })
        },
        goinfo(id){
            this.$router.push({name:"goodsinfo",params:{id}})
        }
    }
}
</script>
<style lang="scss" scoped>
.goodlist{
    padding: 2px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    .goods-item{
        min-height: 182px;
        border: 1px #ccc solid;
        box-shadow: 0 0 8px #ccc;
        width: 49%;
        img{
            width: 100%;
        }
        .title{
            line-height: 1;
            font-size: 16px;
            font-weight: 700;
            color: #000;
            font-family: "microsoft yahei";
        }
        .goodsinfo{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price{
                .now{
                    font-size: 14px;
                    font-weight: 700;
                    color: red;
                }
                .old{
                    font-size: 12px;
                    text-decoration: line-through;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
            }
        }

    }
}
</style>