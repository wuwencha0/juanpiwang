<template>
   <div id="today">
      <header class="nvheader" v-if="!isShowTabBarFn()">
          <div class="juanpilogo"><img src="../../assets/top-logo.png"></div>
          <div class="list"><img src= "../../assets/list.png" ></div>
      </header>
      <header class="shangxinHeader">
        <div class="search"  v-if="isShowTabBarFn()">
            <span><img src = '../../assets/search.png'></span>
            <a class="search-input" href="" style="color:#999">搜索商品</a>
        </div>
        <!-- <div class="user" v-if="isShowTabBarFn()"><span></span></div>  -->
         <div class="list" v-if="isShowTabBarFn()"><img src= "../../assets/list.png" ></div>
      </header>
      <div class="nav">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in navList" 
                :key="item.id"><router-link :to="'/today/'+ luyou[index] "  
                :class="{ 'router-link-active': index ==0 && active}">{{ item.title }} </router-link></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
      </div>
       <router-view></router-view>
   </div>
</template>
<script>

import Vue from 'vue'

export default {
  name: "today",
    data () {
        return {
           luyou:['shangxin', 'nvzhuang/nvzhuang', 'nvzhuang/xiebao', 'nvzhuang/muying', 'nvzhuang/shuma', 'nvzhuang/jujia', 'nvzhuang/nanshi', 'nvzhuang/meizhuang', 'nvzhuang/meishi', 'jingpin'],
            url: '../../../static/todayNav.json'
        };
    },
    methods: {
    isShowTabBarFn() {
        return this.$route.path === "/today/shangxin" || this.$route.path === "/today" || this.$route.path === "/";
    }
    },
    computed:{
        active(){
            return this.$route.path == '/' || this.$route.path == '/today'
        },
        navList(){
            if (this.tools.isDataNull(this, 'navListData', this.url)) return []
            return this.$store.state.navListData[0].subtab;
        }
    },
    mounted(){
        //获取数据
        Vue.nextTick(function(){
            //导航
            var mySwiper = new Swiper('.nav .swiper-container', {
                slidesPerView: 5.9,
                freeMode: true,
                spaceBetween: 5,
                slideToClickedSlide:true,
                slidesOffsetBefore: 10,
                slidesOffsetAfter: 10,
                observer: true 
            }) ;
        });
    }
}
</script>
 
<style lang="css" scoped>
.nvheader{
    width:100%;
    height: 0.4rem;
    padding-top: 0.1rem;
    display: flex;
}
.juanpilogo{
    flex: 1 1 auto;
    width: 2.9rem;
    margin-left: 0.32rem;
}
.juanpilogo img{
    display: block;
    width: 0.48rem;
    height: 0.24rem;
    margin: 0 auto;
}
.list{
    width:0.42rem;
    height: 0.30rem;
    text-align: center;
    line-height: 0.30rem;
}
.list img{
    width:0.30rem;
    height: 0.30rem;
}

.shangxinHeader{
    width: 100%;
    display: flex;
    color: #999;
}
.search span{
    display: inline-block;
    width: 0.13rem;
    height: 0.13rem;
    margin:0 0.05rem;
}
.search img{
    width: 100%;
}
.search{
    margin: 5px 0 5px 13px;;
    flex: 1 1 auto;
    width: 3.0rem;
    height: 0.28rem;
    line-height: 0.28rem;
    background: red;
    background-color: #f2f2f2;
    border-radius: 5px;
    display: flex;
}
.search-input{
    flex: 1 1 auto;
}
.user{
    padding-top: 10px;
    flex:  0 0 auto;
    width: 0.42rem;
    height: 100%;
}
.nav{
    width: 100%;
    height: 0.38rem;
   font-size: 0.14rem;
    line-height: 0.38rem;
}
.nav .swiper-slide a{
    text-align: center;
    height: 0.38rem;
    display: block;
}
.nav .router-link-active{
    border-bottom: 2px solid #ff464e;
}
.nav .router-link-active{
    color: #FF464E;
}

</style>