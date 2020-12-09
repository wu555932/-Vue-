<template>
    <div id="box">  
        <!-- 顶部header区域 -->
		<mt-header fixed title="线上易购">
    	<!-- <mt-button icon="back"  slot="left">返回</mt-button> -->
			 <button type="button" class="mui-btn mui-btn-link" slot="left" @click="back">
		            <span class="mui-icon mui-icon-back"></span>
		            返回
		        </button>
  
		</mt-header>



        <!-- 中间的router-view区域 -->
		<transition>
			<router-view></router-view>
		</transition>
		


        <!-- 底部的Tabbar区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-wxx" to="/home">
				<span class="mui-icon mui-icon-home" ></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-wxx" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-wxx" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" id="badge">{{$store.getters.getallcount}}</span>
				</span>
				<span class="mui-tab-label" >购物车</span>
			</router-link>
			<router-link class="mui-tab-item-wxx" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default{
	methods:{
		back(){
			window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
		},
	}
}
</script>

<style scoped lang="scss">
*{
	touch-action: pan-y;
}
#box{
	padding-top: 40px;
	padding-bottom: 50px;
	overflow-x: hidden;
}
.v-enter{
	opacity: 0;
	transform:translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	// position: absolute;
}

.v-enter-active,
.v-leave-active{
	transition: all 0.5 ease;
}
.mui-bar-tab .mui-tab-item-wxx.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-wxx {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-wxx .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-wxx .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-btn {
	color: #fff;
}
</style>