// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//导入路由模块
import VueRouter from 'vue-router'
//全局安装路由
Vue.use(VueRouter);

//导入一级组件
import Today from './pages/today/Today'
import Youxuan from './pages/youxuan/Youxuan'
import Global from './pages/global/Global'
import Cart from './pages/cart/Cart'
import Mine from './pages/mine/Mine'
import Nav from './pages/public/Nav'

//导入二级组件
import Shoping from './pages/youxuan/Shoping'
import Live from './pages/youxuan/Live'

//配置路由规则
const routes=[
  { path: '' , component: Today },
  { path: '/today' , component: Today },
  { path: '/youxuan' , component: Youxuan, children:[
    {path: '', component: Shoping},
    {path: 'shoping', component: Shoping},
    {path: 'live', component: Live}
  ]},
  { path: '/global' , component: Global },
  { path: '/cart' , component: Cart },
  { path: '/mine' , component: Mine },
  { path: '/nav' , component: Nav }
]

//创建路由实例
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  //将路由挂载在vue上
  router
})
