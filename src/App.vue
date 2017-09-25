<template>
  <div id="app">
    <div class="tabbar">
      <router-link to="/today" >今日上新</router-link>
      <router-link to="/home" >精品优选</router-link>
      <router-link to="/market" >全球购</router-link>
      <router-link to="/cart" >购物车</router-link>
      <router-link to="/mine" >我的</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
//页面自适应
function changeRem(){
  document.documentElement.style.fontSize = document.body.offsetWidth/3.6 + 'px';
}
changeRem();
window.onresize = changeRem ;

import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
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
}
a{
	text-decoration: none;
	color:#333;
}
a:hover{
	color:#f00;
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

#app .tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
