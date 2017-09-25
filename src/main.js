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
import Today from './page/Today'
import Youxuan from './page/Youxuan'
import Global from './page/Global'
import Cart from './page/Cart'
import Mine from './page/Mine'

//导入二级组件

//配置路由规则
const routers=[
  { path: '' , component: Today },
  { path: '/Today' , component: Today },
  { path: '/Youxuan' , component: Youxuan },
  { path: '/Global' , component: Global },
  { path: '/Cart' , component: Cart },
  { path: '/Mine' , component: Mine }
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
