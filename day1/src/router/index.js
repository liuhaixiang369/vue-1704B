import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home'
import Login from '../components/login'
import Among from '../view/among'
import Bookrack from '../view/bookrack'
import Classify from '../view/classify'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:"/",
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },{
      path: '/login',
      component: Login
    },{
      path:'/among',
      component:Among
    },{
      path:'/classify',
      component:Classify
    },{
      path:'/bookrack',
      beforeEnter(to,from,next){
        if(localStorage.username){
          next()
        }else{
          next('/login')
        }
      },
      component:Bookrack
    },{
      path:'/detail/:id',
      component:()=>import('../components/detail')
    }
  ]
})
