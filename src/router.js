import VueRouter from 'vue-router'
import HomeContainer from './Component/tabbar/HomeContainer.vue'
import MemberContainer from './Component/tabbar/MemberContainer.vue'
import ShopcarContainer from './Component/tabbar/ShopcarContainer.vue'
import SearchContainer from './Component/tabbar/SearchContainer.vue'
import NewsList from './Component/News/NewList.vue'
import NewsInfo from './Component/News/Newsinfo.vue'
import PhotoList from './Component/home/photolist.vue'
import Show from './Component/public/show.vue'
import Goods from './Component/Goods/goodslist.vue'
import GoodsInfo from './Component/public/goodsinfo.vue'
import GoodsComment from './Component/public/Goodscomment.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newlist',component:NewsList},
        {path:'/home/newsinfo:id',component:NewsInfo},
        {path:'/home/photolist',component:PhotoList},
        {path:'/home/photolist/show',component:Show},
        {path:'/home/goodslist',component:Goods},
        {path:'/home/goodinfo/:id',component:GoodsInfo,name:"goodsinfo"},
        {path:'/home/goodscoment/:id',component:GoodsComment,name:"goodscoment"}
    ],  //配置路由规则
    linkActiveClass: 'mui-active'

})

export default router