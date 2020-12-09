<template>
    <div>

			<transition
				@before-enter="beforeEnter"
				@enter="enter"
				@after-enter="afterEnter">
				<div class="ball" v-show="isshow" ref="ball"></div>
			</transition>
                    <!-- 轮播图区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<lunbo-box :images='lbt' :isfull='full'></lunbo-box>
					</div>
				</div>
			</div>
                    <!-- 商品详情区域 -->
			<div class="mui-card">
				<div class="mui-card-header">
					<h3>华为P40RS</h3>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
							销售价:<span class="now">￥2199</span>
							市场价:<span class="old"><del>￥2399</del></span>
						</p>
						购买数量：
							<div class="mui-numbox">
								<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
								<input class="mui-input-numbox"  type="number" value="1" @change="getselect()" ref="num" />
								<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
							</div>	
						<br>
						<mt-button type="primary" size="small" >立即购买</mt-button>
						<mt-button type="danger" size="small" @click="addshowcar">加入购物车</mt-button>
					</div>
				</div>
			</div>
                        <!-- 评论区域 -->
			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：SD235955453</p>
						<p>库存情况:60 件</p>
						<p>上架时间：2019-12-12</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<p><mt-button type="primary" size="large" plain>图文介绍</mt-button></p>
					<p><mt-button type="danger" size="large" plain @click="goodscomment(id)">商品评论</mt-button></p>
				</div>
			</div>
    </div>
</template>

<script>
import lunbo from './lunbotu.vue'
import mui from '../../lib/mui/js/mui.min.js'
export default {
	data(){
		return {
			id:this.$route.params,
			selected:1,
			lbt:[
            {img:'https://gd1.alicdn.com/imgextra/i2/3102564477/O1CN01mGYL0q1iwVor02JQ4_!!3102564477.jpg',id:1},
            {img:'https://gd3.alicdn.com/imgextra/i3/3102564477/O1CN01y3HfKf1iwVoszNSrq_!!3102564477.jpg',id:2},
			{img:'https://gd3.alicdn.com/imgextra/i3/3102564477/O1CN01iDymbG1iwVomiOcCs_!!3102564477.jpg',id:3},
			{img:'https://gd2.alicdn.com/imgextra/i2/3102564477/O1CN01uDPnzt1iwVouCJuaa_!!3102564477.jpg',id:4},
			{img:'https://gd1.alicdn.com/imgextra/i1/3102564477/O1CN018U16Dq1iwVotIUFzF_!!3102564477.jpg',id:5}
			],
			full:false,
			isshow:false,

		}
	},
    components:{
		"lunbo-box":lunbo
	},
	methods:{
		goodscomment(id){
			this.$router.push({name:"goodscoment",params:{id}})
		},
		addshowcar(){
			this.isshow = !this.isshow;
			this.getselect()
			 let goodsinfo = {
				id:this.id,
				count:this.selected,
				price:2199,
				title:'华为P40RS',
				flag:true,
				img:'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/3102564477/O1CN01mGYL0q1iwVor02JQ4_!!3102564477.jpg_360x360Q90.jpg_.webp'
			}
			this.$store.commit('changecar',goodsinfo);
		},
		beforeEnter(el){
			el.style.transform = "translate(0,0)";
		},
		enter(el,done){
			el.offsetWidth;

			const ballPosition = this.$refs.ball.getBoundingClientRect();
			const badgePosition = document.getElementById('badge').getBoundingClientRect()

			const xDist  = badgePosition.left - ballPosition.left;
			const yDist	 = badgePosition.top - ballPosition.top;
			
			el.style.transform = `translate(${xDist}px,${yDist}px)`;
			el.style.transition = "all 0.5s cubic-bezier(.51,-0.39,1,.62)";
			done()
		},
		afterEnter(el){
			this.isshow = !this.isshow;
		},
		getselect(){
			this.selected =this.$refs.num.value;
		}
		
	},
	mounted(){
		mui(".mui-numbox").numbox()
	}
}

</script>


<style lang="scss" scoped>
.mui-numbox{
	margin: 10px 5px;
}
.mui-card-footer{
	display: block;
	// display: flex;
	// flex-direction: column;
	// justify-content: space-between;
}
.mui-card-header{
	h3{
		font-size: 18px;
		font-weight: bold;
	}
}
.mui-card-content-inner{
	.old{
		color: red;
	}
}
.ball{
	width: 14px;
	height: 14px;
	background-color: red;
	border-radius: 50%;
	opacity: 1;
	z-index: 99;
	position: absolute;
	left: 156px;
	top: 402px;
	// transform: translate(88px,100px);

}
</style>