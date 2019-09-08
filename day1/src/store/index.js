import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store=new Vuex.Store({
    state:{
        data:[],
        detail:{}
    },
    mutations:{
        getDataMu(state,data){
            state.data=data;
        },
        setDetail(state,data){
            console.log(data)
           state.detail=data
        },
    },
    actions:{
        getData({commit}){
            axios.get('/list').then(({data})=>{
               commit("getDataMu",data)
            })
        }
        // getDetail({commit},id){
        //     axios.get('/detail?id='+id).then(res=>{

        //     })
        // }
    }
})
export default store;