// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//导入路由模块
import VueRouter from 'vue-router'
//全局安装路由
Vue.use(VueRouter);

//导入数据请求模块
import VueResource from 'vue-resource'
//使用数据请求模块
Vue.use(VueResource)

//导入axios模块
import axios from 'axios'
//注册axios,由于axios是非官方的模块无法使用Vue.use()方法来注册，只能在原型上注册
Vue.prototype.axios =axios

//导入一级组件
import Today from './pages/today/Today'
import Youxuan from './pages/youxuan/Youxuan'
import Global from './pages/global/Global'
import Cart from './pages/cart/Cart'
import Mine from './pages/mine/Mine'
import IndexNav from './pages/public/IndexNav'

//导入二级组件
import Shangxin from './pages/today/Shangxin'
import Nvzhuang from './pages/today/Nvzhuang'
import Shoping from './pages/youxuan/Shoping'
import Live from './pages/youxuan/Live'

//配置路由规则
const routes=[
  { path: '' , component: Today, children: [
    { path: '', component: Shangxin },
    { path: 'shangxin', component: Shangxin },
    { path: 'nvzhuang', component: Nvzhuang }
  ] },
  { path: '/today' , component: Today, children: [
    { path: '', component: Shangxin },
    { path: 'shangxin', component: Shangxin },
    { path: 'nvzhuang', component: Nvzhuang }
  ] },
  { path: '/youxuan' , component: Youxuan, children: [
    {path: '', component: Shoping},
    {path: 'shoping', component: Shoping},
    {path: 'live', component: Live}
  ]},
  { path: '/global' , component: Global },
  { path: '/cart' , component: Cart },
  { path: '/mine' , component: Mine }
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

