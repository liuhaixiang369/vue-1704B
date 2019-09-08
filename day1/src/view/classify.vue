<template>
    <div class="classify">
        <div class="nav">
            <router-link to='/home'>首页</router-link>
            <router-link to='/classify'>分类</router-link>
            <router-link to='/among'>排行</router-link>
            <router-link to='/bookrack'>书架</router-link>
        </div>
        <ul>
            <li v-for="(item,index) in classTitle" :class="classInd==index?'active':''" @click="clickFn(item.type,index)" :key="index">{{item.name}}</li>
        </ul>
        <div class="box" v-for="(item,index) in list" :key="index">
            <Item :item="item"></Item>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex';
import Item from '../components/item'
export default {
    data(){
        return {
            classTitle:[
                {
                    name:"热门",
                    type:"ranklist1"
                },{
                    name:"新书",
                    type:"ranklist2"
                },{
                    name:"免费",
                    type:"ranklist3"
                },{
                    name:"完本",
                    type:"ranklist0"
                }
            ],
            classInd:0,
            list:[],
        }
    },
    components:{
        Item
    },
    methods:{
        ...mapActions(['getData']),
        clickFn(type,index){
            this.classInd=index;
            this.list=this.data[type]
        }
    },
    computed:{
        ...mapState(['data'])
    },
    created(){
        this.getData()
        setTimeout(()=>{
            this.list=this.data.ranklist1;
        },100)
    },
}
</script>
<style scoped lang="">
    .classify{
        width:100%;
        height:100%;
    }
    ul{
        width: 100%;
        display: flex;
        list-style: none;
    }
    ul li{
        width: 2rem;
        height: 0.8rem;
        text-align: center;
        line-height: 0.8rem;
        background: #ccc;
        margin:5px;
    }
    .active{
        background: rgb(251, 87, 87);
        color:#fff;
    }
    .box{
        width: 100%;
        height: 3rem;
    }
</style>