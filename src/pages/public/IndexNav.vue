<template>
    <div class="indexnav" v-show="navflag">
       <div class="tabbar">
        <router-link to="/today" :class="nav0"><img :src="imgsrc[navbg0]"><br>今日上新</router-link>
        <router-link to="/youxuan" :class="nav1"><img :src="imgsrc[navbg1]"><br>精品优选</router-link>
        <router-link to="/global" :class="nav2"><img :src="imgsrc[navbg2]"><br>全球购</router-link>
        <router-link to="/cart" :class="nav3"><img :src="imgsrc[navbg3]"><br>购物车</router-link>
        <router-link to="/mine" :class="nav4"><img :src="imgsrc[navbg4]"><br>我的卷皮</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>
 
<script>

export default {
  name: "indexnav",
  data () {
    return {
      imgsrc : [
        'https://goods6.juancdn.com/bao/170411/b/3/58ecae94a43d1f5df95a8904_72x72.png',
        'https://goods4.juancdn.com/bao/170411/6/8/58ecae97ad0a49a6408b45df_72x72.png',
        'https://goods3.juancdn.com/bao/170817/4/8/59950b0fa9fcf85453614c7f_72x72.png',
        'https://goods2.juancdn.com/bao/170816/2/b/599434368150a1125442d562_72x72.png',
        'https://goods8.juancdn.com/bao/170411/e/0/58ecaeb1a43d1f5e550ebeb4_72x72.png',
        'https://goods6.juancdn.com/bao/170411/b/5/58ecaeb3a43d1f5caf7c0d16_72x72.png',
        'https://goods2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png',
        'https://goods4.juancdn.com/bao/170411/7/3/58ecaebba43d1f5e6b2f0d02_72x72.png',
        'https://goods5.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png',
        'https://goods1.juancdn.com/bao/170411/0/d/58ecaec6a43d1f5e7a188a96_72x72.png'
      ]
    };
  },
  computed: {
    nav0(){
      var className = '' ;
      if (this.curPage == 0) className = 'navA' ;
      return className
    },
    nav1(){
      var className = '' ;
      if (this.curPage == 1) className = 'navA' ;
      return className
    },
    nav2(){
      var className = '' ;
      if (this.curPage == 2) className = 'navA' ;
      return className
    },
    nav3(){
      var className = '' ;
      if (this.curPage == 3) className = 'navA' ;
      return className
    },
    nav4(){
      var className = '' ;
      if (this.curPage == 4) className = 'navA' ;
      return className
    },
    navbg0(){
      return this.curPage == 0 ? 1 : 0 ;
    },
    navbg1(){
      return this.curPage == 1 ? 3 : 2 ;
    },
    navbg2(){
      return this.curPage == 2 ? 5 : 4 ;
    },
    navbg3(){
      return this.curPage == 3 ? 7 : 6 ;
    },
    navbg4(){
      return this.curPage == 4 ? 9 : 8 ;
    },
    navflag(){
      return this.$route.path === '/' || this.$route.path === '/today' || this.$route.path === '/youxuan' || this.$route.path === '/global' || this.$route.path === '/cart' || this.$route.path === '/mine' ;
    },
    curPage(){
      var num = 0 ;
      switch (this.$route.path) {
        case '':
        case '/today': num = 0 ;
          break;
        case '/youxuan': num =1;
          break;
        case '/global': num = 2 ;
          break;
        case '/cart': num = 3;
          break;
        case '/mine': num = 4 ;
          break;
        default: num = 0 ;
          break;
      }
      return num ;
    }
  }
}
</script>
 
<style lang="css" scoped>
.tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: .49rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  border-top: 1px solid #eee;
  z-index: 1000;
}
img{
  width: .24rem;
  height: .24rem;
}
.navA{
  color: red;
}
</style>