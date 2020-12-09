//入口文件
//导入Vue包
import Vue from 'vue'
import app from './app.vue'
//导入Mint包

import {Header} from 'mint-ui'
import { Swipe, SwipeItem,Button,Lazyload,Switch } from 'mint-ui';

//导入MINT-UI当中的样式
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Switch.name,Switch)
Vue.use(Lazyload)
//导入mui的样式

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/app.css'

//导入路由
import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)

//导入axios
import axios from 'axios'

//导入vue-resource
import VueRource from 'vue-resource'
Vue.use(VueRource)

//导入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//为comment页面定义一个时间过滤器

Vue.filter('dateFormat',function(originDate){
	let d = new Date(originDate);
	let y = d.getFullYear();
	let m = (d.getMonth()+1).toString();
	let day = d.getDay().toString();
		return `${y}-${m}-${day}`;
})

var car = JSON.parse(localStorage.getItem('car') || '[]');

	

const store = new Vuex.Store({
	state:{
		car:car
	},
	mutations:{
		changecar(state,goodsinfo){
			//  修改car中的数据
			let hascar = false;
				state.car.some(item=>{
					if(item.id.id == goodsinfo.id.id){
					item.count =parseInt(item.count) + parseInt(goodsinfo.count) 
						hascar = true
						localStorage.setItem('car',JSON.stringify(state.car));
						return true
					}
				})
			if(!hascar){
				// console.log(hascar)
				state.car.push(goodsinfo)
				localStorage.setItem('car',JSON.stringify(state.car));
			}
			
		},
		delcar(state,id){
			state.car.some((item,i)=>{
				if(item.id.id == id){
					state.car.splice(i,1);
					localStorage.setItem('car',JSON.stringify(state.car));
				}
			})
		},
		changselected(state,obj){
			state.car.some(item=>{
				if(item.id.id=obj.id){
					item.flag = obj.flag;
				}
			})
			localStorage.setItem('car',JSON.stringify(state.car));
		},
		updatecar(state,obj){
			state.car.some(item=>{
				if(item.id.id ==obj.id)
				{
					item.count = parseInt(obj.count);
				}
			})
			localStorage.setItem('car',JSON.stringify(state.car));

		}
	},
	getters:{
		getallcount(state){
			// 统计总数量并渲染到购物车中
			var  c=0;
			if(state.car.length>0){
				state.car.forEach(item=>{
					c += parseInt(item.count);
				})
			}
				return c;
			
		},
		getgoodsselected(state){
			var o = {}
			state.car.forEach(item=>{
				o[item.id.id] = item.flag;
			})
			return o
		},
		calculate(state){
			var o={
				count:0,
				sum:0
			}
			state.car.forEach(item=>{
				if(item.flag){
					o.count += parseInt(item.count) 
					o.sum += parseInt(item.count * item.price) 
				}
			})
			return o
		}
	}
})



const vm = new Vue({
	el:"#app",
	data:{},
	methods:{

	},
	router,
	store,
	render: c=> c(app)
})