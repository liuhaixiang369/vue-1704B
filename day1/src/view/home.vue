<template>
    <div class="home">
        <div class="nav">
            <router-link to='/home'>首页</router-link>
            <router-link to='/classify'>分类</router-link>
            <router-link to='/among'>排行</router-link>
            <router-link to='/bookrack'>书架</router-link>
        </div>
        <swiper :options="swiperOption" class="swiper" ref="mySwiper">
            <swiper-slide class="slide" v-for="(item,index) in imgs" :key="index"><img :src="'./static/imgs/'+item" alt=""></swiper-slide>
        </swiper>
        <p class="vip"><span>免费专区</span><span>女频精选</span></p>
        <h3>编辑力荐</h3>
        <div class="list" @click="$router.push('/detail')">
            <img :src="data.ranklist1[0].coverUrl" alt="">
            <div class="cont">
                <h3>{{data.ranklist1[0].bookName}}</h3>
                <p>作者:{{data.ranklist1[0].authorName}}</p>
                <p>更新至:{{data.ranklist1[0].updteChapterName}}</p>
                <p>简介:{{data.ranklist1[0].description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex';
  export default {
    name: 'carrousel',
    data() {
      return {
        imgs:['320614 - 副本.jpg','320616 - 副本.jpg','320618 - 副本.jpg','320620 - 副本.jpg','320622 - 副本.jpg','320624 - 副本.jpg'],
        swiperOption:{
            autoplay:true,
            loop:true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      ...mapState(['data'])
    },
    created(){
        this.$store.dispatch('getData')
    }
  }
</script>
<style>
.home{
    width: 100%;
    height: 100%;
}
.swiper{
    width: 100%;
    height: 3rem;
}
.slide{
    width: 100%;
    height: 100%;
}
.slide img{
    width: 100%;
    height: 100%;
}
.vip{
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
}
span{
    display: inline-block;
    width: 40%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    color:#fff;
    border-radius: 15px;
}
span:nth-child(1){
    background: skyblue;
}
span:nth-child(2){
    background: rgb(188, 110, 240);
}
h3{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
}
.list{
    width: 100%;
    display: flex;
    margin-top: 0.2rem;
}
.list img{
    width: 2rem;
    height: 3rem;
    margin:0.1rem;
}
.cont{
    flex:1;
}
h3{
    margin-top:0.2rem;
}
.cont p:nth-child(4){
    height: 0.8rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
