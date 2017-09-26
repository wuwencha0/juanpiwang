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
                <div class="swiper-slide active"><router-link to="/today/shangxin"><a href="" class="activea">上新</a></router-link></div>
                <div class="swiper-slide"><router-link to="/today/nvzhuang"><a href="">女装</a></router-link></div>
                <div class="swiper-slide"><a href="">鞋包</a></div>
                <div class="swiper-slide"><a href="">母婴</a></div>
                <div class="swiper-slide"><a href="">数码</a></div>
                <div class="swiper-slide"><a href="">居家</a></div>
                <div class="swiper-slide"><a href="">男士</a></div>
                <div class="swiper-slide"><a href="">美妆</a></div>
                <div class="swiper-slide"><a href="">美食</a></div>
                <div class="swiper-slide"><a href="" class="lastNav">精品服饰</a></div>
            </div>
                
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <router-view></router-view>
      </div>
   </div>
</template>
 
<script>
export default {
  name: "today",
  data () {
    return {

    };
  },
   methods: {
    isShowTabBarFn() {
      return this.$route.path === "/today/shangxin" || this.$route.path === "/today" || this.$route.path === "/";
    }
  }
}
</script>
 
<style lang="css" scoped>
.nvheader{
    width:100%;
    height: 0.4rem;
    /* background: blue; */
    padding-top: 0.1rem;
    display: flex;
}
.juanpilogo{
    flex: 1 1 auto;
    width: 2.9rem;
    /* height: 0.3rem; */
    /* background: yellow; */
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
    /* height: 0.38rem; */
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
.nav .swiper-slide{
    text-align: center;
    height: 0.38rem;
}
.nav .active{
    border-bottom: 2px solid #ff464e;
}
.nav .activea{
    color: #FF464E;
}

</style>