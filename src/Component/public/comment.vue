<template>
    <div class="cmt-box">
        <textarea placeholder="请输入你要评论的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="danger" size="large" @click="postcomment">发表评论</mt-button>
        <div class="cmt-list" v-for="item in commentlist" :key="item.id">
            <div class="cmt-item">
                <div class="cmt-title">第{{item.id}}楼&nbsp;&nbsp;用户：{{item.uesr}}&nbsp;&nbsp;发表时间:&nbsp;&nbsp;{{item.time|dateFormat()}}</div>
                <div class="cmt-body">{{item.content}}</div>
            </div> 
        </div>
    </div>
</template>

<script>
import Toast from 'mint-ui'
export default {
    data(){
        return{
            commentlist:[
                {
                    "id":1,
                    "uesr":"匿名用户",
                    "time":  Date.now(),
                    "content":"华为真棒，测试测试！",
                }
            ],
            msg:'',
        }
    },
    methods:{
        postcomment(){
            if(this.msg.trim().length==0){
                Toast('评论内容不能为空！');
            }else {
                let id  =   this.commentlist.length+1;
                let cmt = {
                    "id":id,
                    "uesr":"匿名用户",
                    "time": Date.now(),
                    "content":this.msg,
                }
                this.commentlist.push(cmt);
                this.msg='';
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.cmt-box{
    h1{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 80px;
        margin: 0;
    }
    .cmt-list{
        margin: 10px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                // display: flex;
                // flex-wrap: nowrap;
                line-height: 30px;
                background-color: #ccc;
                
            }
            .cmt-body{
                text-indent: 2em;
                line-height: 35px;
            }
        }
    }
}
</style>