<template>
  <div id="app">
<<<<<<< HEAD
    <div class="tabbar">
      <router-link to="/today" >今日上新</router-link>
      <router-link to="/youxuan" >精品优选</router-link>
      <router-link to="/global" >全球购</router-link>
      <router-link to="/cart" >购物车</router-link>
      <router-link to="/mine" >我的</router-link>
    </div>
    <router-view></router-view>
=======
    <indexnav></indexnav>
>>>>>>> d8415f0ba7370b28c8c77dbea2ab99bf56932d82
  </div>
</template>

<script>
//页面自适应
function changeRem(){
  document.documentElement.style.fontSize =screen.width/3.6 + 'px';
}
changeRem();
window.onresize = changeRem ;

import IndexNav from './pages/public/IndexNav'

export default {
  name: 'app',
  components: {
    indexnav: IndexNav
  }
}
</script>

<style>
@import url(https://cdn.bootcss.com/Swiper/4.0.0-beta.2/css/swiper.min.css);
/*全局样式*/
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html{
	height: 100%;
	font-size: 100px;
}
body{
	font-size: .12rem;
	font-family: 微软雅黑,microsoft yahei;
	height: 100%;
}
ul,ol{
	list-style: none;
}
img{
	border:none;
  width:100%;
  vertical-align: middle;
}
a{
	text-decoration: none;
	color:#333;
}

textarea,input,a{
	outline:none;
	}
textarea{
	resize:none;
	}
.clearfixed:after{
	content:".";
	display:block;
	clear:both;
	font-size:0;
	height:0;
}

</style>
