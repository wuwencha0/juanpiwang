import Vue from 'vue'

//导入路由模块
import VueRouter from 'vue-router'
//全局安装路由
Vue.use(VueRouter);

//导入一级组件
import Today from '../pages/today/Today'
import Youxuan from '../pages/youxuan/Youxuan'
import Global from '../pages/global/Global'
import Cart from '../pages/cart/Cart'
import Mine from '../pages/mine/Mine'
import IndexNav from '../pages/public/IndexNav'
import Login from '../pages/mine/Login'
import Register from '@/pages/mine/Register'
import Xianshiqiang from '../pages/today/Xianshiqiang'
import XianshiCloseth from '../pages/today/XianshiCloseth'


//导入二级组件
import Shangxin from '../pages/today/Shangxin'
import Nvzhuang from '../pages/today/Nvzhuang'
import Jingpin from '../pages/today/Jingpin'
import Jujia from '../pages/today/Jujia'
import Meishi from '../pages/today/Meishi'
import Meizhuang from '../pages/today/Meizhuang'
import Muying from '../pages/today/Muying'
import Shuma from '../pages/today/Shuma'
import Xiebao from '../pages/today/Xiebao'
import Nanshi from '../pages/today/Nanshi'
import Shoping from '../pages/youxuan/Shoping'
import Live from '../pages/youxuan/Live'


//配置路由规则
const routes=[
  { path: '' , component: Today, children: [
    { path: '', component: Shangxin },
    { path: 'shangxin', component: Shangxin },
    { path: 'nvzhuang', component: Nvzhuang },
    { path: 'jingpin', component: Jingpin },
    { path: 'jujia', component: Jujia },
    { path: 'meishi', component: Meishi },
    { path: 'meizhuang', component: Meizhuang },
    { path: 'muying', component: Muying },
    { path: 'shuma', component: Shuma },
    { path: 'xiebao', component: Xiebao },
    { path: 'nanshi', component: Nanshi }
  ] },
  { path: '/today' , component: Today, children: [
    { path: '', component: Shangxin },
    { path: 'shangxin', component: Shangxin },
    { path: 'nvzhuang', component: Nvzhuang },
    { path: 'jingpin', component: Jingpin },
    { path: 'jujia', component: Jujia },
    { path: 'meishi', component: Meishi },
    { path: 'meizhuang', component: Meizhuang },
    { path: 'muying', component: Muying },
    { path: 'shuma', component: Shuma },
    { path: 'xiebao', component: Xiebao },
    { path: 'nanshi', component: Nanshi }
  ] },
  { path: '/youxuan' , component: Youxuan, children: [
    {path: '', component: Shoping},
    {path: 'shoping', component: Shoping},
    {path: 'live', component: Live}
  ]},
  { path: '/global' , component: Global },
  { path: '/cart' , component: Cart },
  { path: '/mine' , component: Mine },
  {path: '/login', component: Login },
  {path: '/register', component: Register },
  { path: '/xianshiqiang' , component:  Xianshiqiang },
  { path: '/xianshicloseth' , component: XianshiCloseth }
]

//创建路由实例
const router = new VueRouter({
  routes
})

//导出路由
export default router