<template>
    <div>
        <ul class="mui-table-view" v-for="item in newslist" :key="item.id">
				<li class="mui-table-view-cell mui-media">
					<router-link :to="'/home/newsinfo'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.pic">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>时间：{{item.time}}</span>
                                <span>访问量：{{item.num}}</span>
                            </p>
						</div>
					</router-link>
				</li>
				
				

			</ul>
    </div>
</template>

<script>
import axios from 'axios'
import Vue  from 'vue'
import {Toast} from 'mint-ui'
export  default{
        data() {
            return{
                newslist:[]
            };
        },
        created(){
            this.getNewslist();

        },
        methods:{
            getNewslist(){
                let that = this;
                // console.log('函数中的this指向：'+this);
                axios.get('http://localhost:3000/data.json')
                .then(function (response){
                    // console.log('axios中的this指向：'+this);
                    if(response.status==200){
                         that.newslist = response.data.list;
                         
                        
                    } else{
                        Toast('新闻列表读取失败');
                    }
                }) 
            },
        }
    }

</script>

<style scoped lang="scss">
.mui-media-body{
    h1{
        font-size: 14px;
    }
    .mui-ellipsis{
        font-size: 12px;
        display: flex;
        color: blue;
        justify-content: space-between;
    }
}
</style>
