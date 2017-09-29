// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//导入路由模块
import router from './router/router'

<<<<<<< HEAD
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
=======
//导入vuex仓库store
import store from './store/store'
>>>>>>> 9e54d56ca532defcb90ccb0a2b22bf485e9fd44e

//导入axios
import axios from 'axios'

Vue.prototype.axios = axios ;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  //将路由挂载在vue上
  router,
  store
})

