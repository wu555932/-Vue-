<template>
                <div class="box">
                            <div class="show-box" id="container">
                                <ul class="show">
                                    <li v-for="item in photolist" :key="item.id" class="showlist">
                                        <img v-lazy.container="item.image">
                                    </li>
                                </ul>
                            </div>
                </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { Lazyload } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(Lazyload)

export default {
    data(){
        return {
            photolist:[]
        }
    },
    created(){
        this.getphoto();
    },
    methods:{
        getphoto(){
            let url1 = 'https://api2.paixin.com/medias/1/search?page=0&size=80' //自然风光
            let url2 = 'https://api2.paixin.com/albums/207/medias?page=0&size=45&sort=createdAt,desc' //美女
            axios.post(url1,{
                searchQuery: "景色",
                type: "6"
            })
            .then(res=>{    
                if(res.status==200){
                    console.log(res);
                    this.photolist=res.data.elements;
                }
            }).catch(err=>{
                throw(err);
            })
        }
    },

}
</script>
<style lang="scss" scoped>
.box{
    .show-box{
  .show{
      padding-left: 0px;
      li{
          list-style: none;
          margin-left: 0px;
      }
      img{
          width: 100%;
          height: 100%;
      }
  }
}
}
  img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
