<template>
<div class="newsinfo-container">
    <h1 class="title">新闻标题</h1>
    <p class="public">
        <span>发表时间：</span>
        <span>浏览量：</span>
    </p>
    <hr>
    <div class="content">
        <p>我和大家想的有点出入。</p>
        <p>你不看他的皮肤，单看他的五官，其实就是一个很典型的帅哥。</p>
        <p>漂亮的双眼皮、鼻梁。嘴唇的形状让我想到了丁禹兮。</p>
        <p>他的皮肤给他添了一份不同于寻常男性帅哥的气质。我看有人形容这是野性的帅。</p>
        <p>如果单纯是这个视频，惊艳一下也就罢了。假如丁真不是生活在高原，他也就是一个普通的、符合我们审美的帅哥。</p>
        <p>从另一个角度来说，在大部分藏族人眼里，可能丁真并不帅呢？所谓帅的意义在我们心中比在丁真心中要大的多呢？</p>
        <p>丁真没读多少书，生活也困苦简单。他没涉足社会，自然也就不清楚相貌可以带来的巨大红利。</p>
        <p>美而不自知才是最美的。正如丁真。</p>
        <p>丁真丁真，那份真，比他的脸要更加可贵。</p>
        <p>他让我明白，帅也不是单一的，不是市场上统一的奶油小生。</p>
        <p>赏心悦目的东西会使人开心。但比漂亮的东西更重要的，是我们的心境。</p>
        <p>大家还记得几年前和丁真一样爆火的吹头小哥吗？</p>
        <p>他的微博叫我只会吹头。</p>
        <p>现在我去看了下，他让我有些唏嘘。</p>
        <p>微博里都是恰饭的广告了。</p>
        <p>虽知丁真接下来的路一定不会安宁，但我还是渴望他能够保存心里那份真。</p>
        <p>是了，有了钱，这重要吗？可以改变自己困苦的现状，这重要吗？我还是告诉自己很重要，人不是只有一张脸。不论别人怎么样，我会努力保留自己的真诚。对一切美好的向往。</p>
    </div>
    <comment-box></comment-box>
</div>
    
</template>

<script>
import comment from '../public/comment.vue'

export default {
    data(){
        return {
           
            
        }
    },
    methods:{
    },
    components:{
        "comment-box":comment
    }
}
</script>

<style scoped lang="scss">
.newsinfo-container{
    padding: 0 4px;
    .title{
        margin: 15px;
        font-size: 16px;
        text-align: center;
        color: black;
    }
    .public{
        font-size: 12px;
        color:#226aff;
        display:flex;
        justify-content:space-between;

    }
    .content{}
}
</style>