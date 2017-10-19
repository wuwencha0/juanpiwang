// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//导入路由模块
import router from './router/router'

//导入vuex仓库store
import store from './store/store'

//导入axios
import axios from 'axios'

Vue.prototype.axios = axios ;

//导入vue-awesome-swiper模块
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

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

