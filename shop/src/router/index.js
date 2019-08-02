import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import Fenlei from '../views/fenlei'
import Huiyuan from '../views/huiyuan'
import Car from '../views/Car'
import My from '../views/my'
import Ddcs from '../views/ddcs'
import Qqjx from '../views/qqjx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[{
        path: '/home/ddcs',
      name: 'Ddcs',
      component: Ddcs,
      },{
        path: '/home/qqjx',
      name: 'Qqjx',
      component: Qqjx,
      }]
    },{
      path: '/fenlei',
      name: 'Fenlei',
      component: Fenlei
    },{
      path: '/huiyuan',
      name: 'Huiyuan',
      component: Huiyuan
    },{
      path: '/car',
      name: 'Car',
      component: Car
    },{
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
