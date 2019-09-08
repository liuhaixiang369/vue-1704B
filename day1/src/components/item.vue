<template>
    <div class="list" @click="toggle(item.bookId)">
        <img :src="item.coverUrl" alt="">
        <div class="cont">
            <h3>{{item.bookName}}</h3>
            <p>作者:{{item.authorName}}</p>
            <p>更新至:{{item.updteChapterName}}</p>
            <p>简介:{{item.description}}</p>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    props:['item'],
    methods:{
        ...mapMutations(['setDetail']),
        toggle(id){
            this.setDetail(this.item)
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>
<style scoped lang="">
    .list{
        width: 100%;
        height: 100%;
        display: flex;
        margin-top: 0.2rem;
    }
    .list img{
        width: 2rem;
        height: 2.8rem;
        margin:0.1rem;
    }
    .cont{
        flex:1;
    }
    h3{
        height: 0.6rem;
        line-height: 0.6rem;
        margin-top:0.1rem;
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
    .cont p{
        margin-top: 0.2rem;
    }
</style>