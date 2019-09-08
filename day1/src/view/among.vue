<template>
    <div class="among">
        <div class="nav">
            <router-link to='/home'>首页</router-link>
            <router-link to='/classify'>分类</router-link>
            <router-link to='/among'>排行</router-link>
            <router-link to='/bookrack'>书架</router-link>
        </div>
        <div class="amongSort">
            {{list}}
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { setTimeout } from 'timers';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:[],
        }
    },
    computed:{
        ...mapState(['data'])
    },
    methods:{
        ...mapActions(['getData']),
    },
    created(){
        this.getData();
        setTimeout(()=>{
            this.list=this.data
        },100)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.among{
    width: 100%;
    height: 100%;
}
</style>