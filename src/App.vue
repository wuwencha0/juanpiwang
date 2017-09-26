<template>
  <div id="app">
    <indexnav></indexnav>
  </div>
</template>

<script>
//页面自适应
function changeRem(){
  document.documentElement.style.fontSize = screen.width/3.6 + 'px';
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
